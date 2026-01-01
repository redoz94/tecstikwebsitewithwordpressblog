import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Blog.css";

// Keep your banner + styling as-is
import BlogBanner from "./BlogImages/Blog.jpg";

// OPTIONAL: keep these imports only if you want a fallback image when WP post has no featured image
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

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState([]);       // raw WP posts
  const [filteredPosts, setFilteredPosts] = useState([]); // filtered WP posts
  const [loading, setLoading] = useState(false);

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  // Keep your scroll behavior as-is
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [searchParams]);

  // Fetch posts from WordPress once
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // per_page max is often 100 in WP; adjust if needed
        const res = await fetch(`${WP_BASE}/posts?_embed&per_page=50`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setAllPosts(data);
          setFilteredPosts(data);
        } else {
          setAllPosts([]);
          setFilteredPosts([]);
        }
      } catch (err) {
        console.error("Failed to fetch WP posts:", err);
        setAllPosts([]);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Search filter (same behavior as you have now)
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setLoading(true);

    setTimeout(() => {
      const newFiltered = allPosts.filter((post) => {
        const title = stripHtml(post?.title?.rendered || "");
        return title.toLowerCase().includes(term.toLowerCase());
      });

      setFilteredPosts(newFiltered);
      setLoading(false);
    }, 100);
  };

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

  // Get WP featured image if it exists
  const getFeaturedImage = (post, index) => {
    const url = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return url || getFallbackImage(index);
  };

  // Choose what shows on the card as “metaDescription” and “pargraf”
  // We'll map:
  // - metaDescription = excerpt (clean text)
  // - pargraf = date (or you can remove it if you want)
  const getExcerptText = (post) => {
    const excerptHtml = post?.excerpt?.rendered || "";
    const excerpt = stripHtml(excerptHtml);
    return excerpt;
  };

  const getDateText = (post) => {
    // Example: "2025-12-18T10:30:00"
    const d = post?.date ? new Date(post.date) : null;
    if (!d || isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  return (
    <div>
      <Header />

      <section className="banner_container">
        <div id="banner_4_image"></div>
        {/* <img src={BlogBanner} alt="logo" class="background-image" /> */}
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
      ></div>

      <section
        id="why-us"
        className="why-us section-bg"
        style={{ marginTop: "50px" }}
      >
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <>
              {filteredPosts.length > 0 ? (
                <div className="row">
                  {filteredPosts.map((post, i) => {
                    const title = stripHtml(post?.title?.rendered || "");
                    const slug = post?.slug || "";
                    const excerpt = getExcerptText(post);
                    const dateText = getDateText(post);

                    return (
                      <div
                        className="col-lg-4 col-md-6 d-flex align-items-stretch"
                        key={post.id || i}
                      >
                        <div className="card" id="BlogCard">
                          <img
                            src={getFeaturedImage(post, i)}
                            className="card-img-top"
                            style={{ height: "180px" }}
                            alt={title || "Blog Image"}
                          />

                          <div className="card-body">
                            <h5 className="card-title myFont">
                              <Link
                                to={`/TecStik-Blog/${slug}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {title}
                              </Link>
                            </h5>

                            <p className="card-text myFont" style={{ textAlign: "center" }}>
                              {excerpt || " "}
                            </p>

                            <p className="card-text myFont" style={{ textAlign: "center" }}>
                              {dateText || " "}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  No Blog Found
                </p>
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
