import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";
import he from "he";

// ✅ Import your hero image from src
import blogHero from "../images/Blog.png";

// WordPress REST base
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

// ✅ Decode HTML entities even if WP sends them double-encoded
// Example: "Pakistan&amp;#8217;s" -> "Pakistan&#8217;s" -> "Pakistan’s"
const decodeDeep = (str = "") => {
  let prev = null;
  let cur = str;

  // decode up to 3 times, stop early if it stops changing
  for (let i = 0; i < 3 && cur !== prev; i++) {
    prev = cur;
    cur = he.decode(cur);
  }

  return cur;
};

// ✅ Safe plain text for UI (strip tags + deep decode)
const cleanText = (html = "") => decodeDeep(stripHtml(html));

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
  const BLOG_DIRECTORY_HERO = blogHero;

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setErr("");

      try {
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
      const title = cleanText(p?.title?.rendered || "").toLowerCase();
      const excerpt = cleanText(p?.excerpt?.rendered || "").toLowerCase();
      return title.includes(q) || excerpt.includes(q);
    });
  }, [posts, query]);

  return (
    <div className="ts-blogdir">
      <Header />

      {/* ✅ HERO (static image behind "Blog") */}
      <section
        className="ts-blogdir-hero"
        style={{
          backgroundImage: `url(${BLOG_DIRECTORY_HERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
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
        {err ? <p className="ts-blogdir-status ts-blogdir-error">{err}</p> : null}

        {!loading && !err ? (
          <div className="ts-blogdir-grid">
            {filtered.map((post) => {
              const img = getFeaturedImage(post);

              // ✅ FIXED: deep decode so &#8217; becomes a real apostrophe
              const title = cleanText(post?.title?.rendered || "");
              const excerpt = cleanText(post?.excerpt?.rendered || "").slice(0, 220);

              const slug = post?.slug;
              const to = slug ? `/TecStik-Blog/${slug}` : "/TecStik-Blog";

              return (
                <Link
                  key={post.id}
                  to={to}
                  className="ts-blogdir-card"
                  aria-label={slug ? `Read: ${title}` : "Blog"}
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
