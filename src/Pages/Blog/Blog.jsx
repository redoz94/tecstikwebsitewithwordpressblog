import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";

// ✅ WordPress REST base (use YOUR correct one)
// If your WP is at tecstik.com and posts are in WP:
// https://tecstik.com/wp-json/wp/v2
// If your WP is inside /blog (your current value):
// https://tecstik.com/blog/wp-json/wp/v2
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildTocAndHtml(html) {
  if (!html) return { htmlWithIds: "", toc: [] };

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const headings = Array.from(doc.querySelectorAll("h2, h3"));
  const used = new Set();
  const toc = [];

  headings.forEach((h) => {
    const level = h.tagName.toLowerCase();
    const text = stripHtml(h.innerHTML);
    if (!text) return;

    let id = h.getAttribute("id") || slugifyHeading(text) || "section";
    while (used.has(id)) id = `${id}-${Math.floor(Math.random() * 9999)}`;
    used.add(id);

    h.setAttribute("id", id);

    toc.push({ id, text, level });
  });

  return { htmlWithIds: doc.body.innerHTML, toc };
}

function formatDate(dateStr) {
  const d = dateStr ? new Date(dateStr) : null;
  if (!d || isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  });
}

export default function BlogFile() {
  const { blogId } = useParams(); // slug
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setErr("");

      try {
        const url = `${WP_BASE}/posts?slug=${encodeURIComponent(blogId)}&_embed=1`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          setPost(null);
          setErr("Blog not found.");
        } else {
          setPost(data[0]);
        }
      } catch (e) {
        console.error(e);
        setErr("Failed to load blog. Please try again.");
        setPost(null);
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    run();
  }, [blogId]);

  const featuredImage = useMemo(() => {
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];
    return (
      media?.media_details?.sizes?.large?.source_url ||
      media?.media_details?.sizes?.medium_large?.source_url ||
      media?.source_url ||
      ""
    );
  }, [post]);

  const title = useMemo(() => stripHtml(post?.title?.rendered || ""), [post]);
  const authorName = useMemo(() => post?._embedded?.author?.[0]?.name || "TecStik", [post]);
  const updated = useMemo(() => formatDate(post?.modified || post?.date), [post]);

  const rawHtml = useMemo(() => post?.content?.rendered || "", [post]);
  const { htmlWithIds, toc } = useMemo(() => buildTocAndHtml(rawHtml), [rawHtml]);

  const shareUrl = useMemo(() => (typeof window === "undefined" ? "" : window.location.href), []);
  const shareText = useMemo(() => encodeURIComponent(title || "TecStik Blog"), [title]);

  const onTocClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ts-blogfile">
      <Header />

      {/* HERO */}
      <section
        className="ts-blog-hero"
        style={{ backgroundImage: featuredImage ? `url(${featuredImage})` : "none" }}
      >
        <div className="ts-blog-hero-overlay" />
        <div className="ts-blog-hero-inner">
          <h1 className="ts-blog-title" dangerouslySetInnerHTML={{ __html: post?.title?.rendered || " " }} />

          <div className="ts-blog-meta">
            <div className="ts-blog-meta-author">Author: {authorName}</div>
            <div className="ts-blog-meta-date">updated on {updated}</div>
          </div>
        </div>
      </section>

      <div className="ts-blog-body">
        {/* LEFT SHARE */}
        <aside className="ts-blog-left">
          <div className="ts-share-card">
            <div className="ts-share-title">SHARE</div>
            <div className="ts-share-sub">Share across your favourite social media:</div>

            <div className="ts-share-buttons">
              <a
                className="ts-share-btn"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Facebook"
              >
                f
              </a>

              <a
                className="ts-share-btn"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on X"
              >
                x
              </a>

              <a
                className="ts-share-btn"
                href={`mailto:?subject=${shareText}&body=${encodeURIComponent(shareUrl)}`}
                aria-label="Share via Email"
              >
                @
              </a>

              <a
                className="ts-share-btn"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Share on LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="ts-blog-center">
          {loading ? <p className="ts-blog-status">Loading…</p> : null}
          {err ? <p className="ts-blog-status ts-error">{err}</p> : null}

          {!loading && !err && post ? (
            <article className="ts-blog-article">
              <div className="ts-blog-content" dangerouslySetInnerHTML={{ __html: htmlWithIds }} />
            </article>
          ) : null}
        </main>

        {/* RIGHT TOC */}
        <aside className="ts-blog-right">
          <div className="ts-toc-card">
            <div className="ts-toc-title">{title}</div>

            {toc.length > 0 ? (
              <ul className="ts-toc-list">
                {toc.map((item) => (
                  <li key={item.id} className={`ts-toc-item ${item.level === "h3" ? "is-h3" : ""}`}>
                    <button type="button" onClick={() => onTocClick(item.id)}>
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="ts-toc-empty">No headings found (add H2/H3 in WP to build a TOC).</p>
            )}
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
