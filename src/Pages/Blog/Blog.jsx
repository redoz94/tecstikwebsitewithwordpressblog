import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Blog.css";
import secondBlogImg from "./BlogImages/blog2images/blog2.png";
import oneBlogImg from "./BlogImages/blog3images/two.png";
import fourBlogImg from "./BlogImages/Blog4Images/blog4.png";
import fiveBlogImg from "./BlogImages/blog5card.png";
import sixBlogImg from "./BlogImages/blogimages6/paymentcard.png";
import sevenBlogImg from "./BlogImages/Blog7image/blog7cardimage.png";
import EightBlogImg from "./BlogImages/Blog8images/blog8cardimage.png";
import NineBlogImg from "./BlogImages/Blog9images/blog9cardimage.png";
import Navig from "./BlogImages/Navigating Pakistani Finance.png";


// Your WP install is here:
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";

// Performance knobs
const PER_PAGE = 12; // load fewer posts first (faster)
const CACHE_KEY = "tecstik_blog_cache_v1";
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes cache

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

// OPTIONAL: keep these imports only if you want a fallback image when WP post has no featured image
// Skeleton UI (fast instant render)
const SkeletonGrid = ({ count = 9 }) => (
  <div className="row">
    {Array.from({ length: count }).map((_, i) => (
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={i}>
        <div className="card" id="BlogCard" style={{ width: "100%" }}>
          <div
            style={{
              height: 180,
              background: "#eee",
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          />
          <div className="card-body">
            <div style={{ height: 18, width: "70%", background: "#eee", margin: "10px auto", borderRadius: 6 }} />
            <div style={{ height: 12, width: "90%", background: "#eee", margin: "10px auto", borderRadius: 6 }} />
            <div style={{ height: 12, width: "80%", background: "#eee", margin: "10px auto", borderRadius: 6 }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const [searchTerm, setSearchTerm] = useState("");

  // All posts (from cache or network)
  const [allPosts, setAllPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      // structure: { ts, posts }
      if (!parsed?.ts || !Array.isArray(parsed?.posts)) return [];
      // If cache is too old, ignore it
      if (Date.now() - parsed.ts > CACHE_TTL_MS) return [];
      return parsed.posts;
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(allPosts.length === 0); // show skeleton if no cache
  const [error, setError] = useState("");

  // Paging
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const abortRef = useRef(null);
  const debounceRef = useRef(null);

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  // Keep your scroll behavior as-is
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  // Fallback images if WP post has no featured image
  const getFallbackImage = (index) => {
    const images = [
      oneBlogImg,
      Navig,
      secondBlogImg,
      fourBlogImg,
      fiveBlogImg,
      sixBlogImg,
      sevenBlogImg,
      EightBlogImg,
      NineBlogImg,
    ];
    return images[index % images.length];
  };

  // Get WP featured image if it exists (prefer medium/optimized sizes when available)
  const getFeaturedImage = (post, index) => {
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];
    const sized =
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.media_details?.sizes?.large?.source_url ||
      media?.source_url;

    return sized || getFallbackImage(index);
  };

  const getExcerptText = (post) => {
    const excerptHtml = post?.excerpt?.rendered || "";
    return stripHtml(excerptHtml);
  };

  const getDateText = (post) => {
    const d = post?.date ? new Date(post.date) : null;
    if (!d || isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Fetch page 1 (background refresh even if cache exists)
  useEffect(() => {
    const fetchPostsPage1 = async () => {
      setError("");

      // Abort any old request
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        // IMPORTANT: fewer posts first for speed
        const url = `${WP_BASE}/posts?_embed&per_page=${PER_PAGE}&page=1`;
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) throw new Error("Failed to fetch posts");

        const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
        const data = await res.json();

        if (Array.isArray(data)) {
          setAllPosts(data);
          setPage(1);
          setHasMore(1 < totalPages);

          // cache it
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ts: Date.now(), posts: data })
          );
        } else {
          setAllPosts([]);
          setHasMore(false);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch WP posts:", err);
          setError("Failed to load posts. Showing cached posts if available.");
        }
      } finally {
        setLoading(false);
      }
    };

    // If no cache, show skeleton while fetching
    // If cache exists, render instantly and refresh in background
    fetchPostsPage1();

    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  // Load more posts (optional)
  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      const url = `${WP_BASE}/posts?_embed&per_page=${PER_PAGE}&page=${nextPage}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch more posts");
      const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
      const data = await res.json();

      if (Array.isArray(data)) {
        const merged = [...allPosts, ...data];
        setAllPosts(merged);
        setPage(nextPage);
        setHasMore(nextPage < totalPages);
        // optional: cache merged (or keep only first page cached)
        // localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), posts: merged }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Debounced search filter (fast, no fake "loading..." delays)
  const filteredPosts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return allPosts;
    return allPosts.filter((post) => {
      const title = stripHtml(post?.title?.rendered || "").toLowerCase();
      return title.includes(term);
    });
  }, [searchTerm, allPosts]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <Header />

      {/* Banner kept as-is */}
      <section className="banner_container">
        <div id="banner_4_image"></div>
        <div className="overlay"></div>
        <div className="banner-text">Blog</div>
      </section>

      <div
        className="bowse_topic_res"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#035192" }}>
          <h5 style={{ fontSize: "1.7rem", fontWeight: 600 }}>Browse Topics</h5>
        </div>

        <div style={{ width: "70%" }}>
          <InputGroup className="mb-3">
            <Form.Control
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search in blogs...."
              aria-label="Search in blogs"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
      </div>

      <div
        style={{
          width: "91%",
          margin: "auto",
          height: "1px",
          background: "lightgray",
        }}
      />

      <section
        id="why-us"
        className="why-us section-bg"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          {/* If there is no cache and we are loading => skeleton */}
          {loading && allPosts.length === 0 ? (
            <SkeletonGrid count={9} />
          ) : (
            <>
              {error ? (
                <p style={{ textAlign: "center", color: "crimson" }}>{error}</p>
              ) : null}

              {filteredPosts.length > 0 ? (
                <div className="row">
                  {filteredPosts.map((post, i) => {
                    const title = stripHtml(post?.title?.rendered || "");
                    const excerpt = getExcerptText(post);
                    const dateText = getDateText(post);

                    return (
                      <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch"
                        key={post.id || i}
                      >
                        <div className="card" id="BlogCard" style={{ width: "100%" }}>
                          <img
                            src={getFeaturedImage(post, i)}
                            className="card-img-top"
                            style={{ height: "180px", objectFit: "cover" }}
                            alt={title || "Blog Image"}
                            loading="lazy"
                            decoding="async"
                          />

                          <div className="card-body">
                            <h5 className="card-title myFont">
                              {/* IMPORTANT: Use your WP link or (recommended) route to React post page */}
                              <Link to={`/TecStik-Blog/${post.slug}`}>
  {title}
</Link>
                            </h5>

                            <p
                              className="card-text myFont"
                              style={{ textAlign: "center" }}
                            >
                              {excerpt || " "}
                            </p>

                            <p
                              className="card-text myFont"
                              style={{ textAlign: "center" }}
                            >
                              {dateText || " "}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p style={{ display: "flex", justifyContent: "center" }}>
                  No Blog Found
                </p>
              )}

              {/* Load more (optional but improves speed a lot vs fetching 50 at once) */}
              {hasMore && !searchTerm.trim() && (
                <div style={{ textAlign: "center", marginTop: 24 }}>
                  <button className="custom-btn" onClick={loadMore}>
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;