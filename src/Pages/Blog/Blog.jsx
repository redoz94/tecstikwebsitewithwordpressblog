import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";

// WordPress REST base
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    ""
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [query, setQuery] = useState("");

  // ✅ Fixed hero image for BLOG DIRECTORY ONLY (NOT from WP featured images)
  // Put this image in: /public/assets/img/blog-hero.jpg  (or change the path here)
  const BLOG_DIRECTORY_HERO = "/assets/img/blog-hero.jpg";

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setErr("");

      try {
        // latest posts + featured images + author
        const url = `${WP_BASE}/posts?per_page=50&_embed=1`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        if (!cancelled) setPosts(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        if (!cancelled) {
          setErr("Failed to load blogs. Please try again.");
          setPosts([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((p) => {
      const title = stripHtml(p?.title?.rendered || "").toLowerCase();
      const excerpt = stripHtml(p?.excerpt?.rendered || "").toLowerCase();
      return title.includes(q) || excerpt.includes(q);
    });
  }, [posts, query]);

  return (
    <div className="ts-blogdir">
      <Header />

      {/* HERO (fixed image only - does NOT change per blog) */}
      <section
        className="ts-blogdir-hero"
        style={{ backgroundImage: `url(${BLOG_DIRECTORY_HERO})` }}
      >
        <div className="ts-blogdir-hero-overlay" />
        <div className="ts-blogdir-hero-inner">
          <h1>Blog</h1>
        </div>
      </section>

      {/* DIRECTORY HEADER */}
      <section className="ts-blogdir-top">
        <div className="ts-blogdir-top-inner">
          <div className="ts-blogdir-lefttitle">Browse Topics</div>

          <div className="ts-blogdir-search">
            <input
              type="text"
              placeholder="Search in blogs...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search blogs"
            />
            <button type="button" aria-label="Search">
              🔍
            </button>
          </div>
        </div>

        <div className="ts-blogdir-divider" />
      </section>

      {/* CARDS */}
      <section className="ts-blogdir-gridwrap">
        {loading ? <p className="ts-blogdir-status">Loading…</p> : null}
        {err ? (
          <p className="ts-blogdir-status ts-blogdir-error">{err}</p>
        ) : null}

        {!loading && !err ? (
          <div className="ts-blogdir-grid">
            {filtered.map((post) => {
              const img = getFeaturedImage(post);
              const title = stripHtml(post?.title?.rendered || "");
              const excerpt = stripHtml(post?.excerpt?.rendered || "").slice(
                0,
                220
              );
              const slug = post?.slug;

              // Safety: if slug is missing, don’t break routing
              const to = slug ? `/TecStik-Blog/${slug}` : "/TecStik-Blog";

              return (
                <Link
                  key={post.id}
                  to={to}
                  className="ts-blogdir-card"
                  aria-label={slug ? `Read: ${title}` : "Blog"}
                  // If you want ALWAYS open in new tab, uncomment next 2 lines:
                  // target="_blank"
                  // rel="noreferrer"
                >
                  <div className="ts-blogdir-cardimg">
                    {img ? (
                      <img src={img} alt={title} loading="lazy" />
                    ) : (
                      <div className="ts-blogdir-imgfallback" />
                    )}
                  </div>

                  <div className="ts-blogdir-cardbody">
                    <h3 className="ts-blogdir-cardtitle">{title}</h3>
                    <p className="ts-blogdir-cardexcerpt">{excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </section>

      <Footer />
    </div>
  );
}
