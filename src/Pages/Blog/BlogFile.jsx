import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";
import { decode } from "html-entities"; // ✅ npm library

// WordPress REST base
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";

const stripHtml = (html = "") => String(html).replace(/<[^>]*>/g, "").trim();

/**
 * ✅ Robust decode for WP strings:
 * - Handles "Pakistan&amp;#8217;s" (double encoded)
 * - Handles "Pakistan&#8217;s" (numeric entity)
 * - Handles "Pakistan&rsquo;s" (named entity)
 * - Then forces straight apostrophe: '
 */
const decodeWpText = (value = "") => {
  let cur = String(value ?? "");
  let prev = null;

  // Decode multiple times until stable (max 6 passes)
  for (let i = 0; i < 6 && cur !== prev; i++) {
    prev = cur;
    cur = decode(cur);
  }

  // Strip any leftover tags AFTER decode
  cur = stripHtml(cur);

  // Force straight apostrophe as per your requirement
  cur = cur.replace(/[’‘]/g, "'");

  return cur;
};

function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url ||
    ""
  );
}

// Turn heading text into safe ids
function slugify(text = "") {
  return stripHtml(text)
    .toLowerCase()
    .replace(/&nbsp;/g, " ")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Extract TOC from H2/H3 and inject IDs into headings
function buildTOCAndContent(html = "") {
  if (!html) return { toc: [], htmlWithIds: "" };

  const headingRegex = /<h([23])([^>]*)>(.*?)<\/h\1>/gi;

  const toc = [];
  let htmlWithIds = html;

  const matches = [...html.matchAll(headingRegex)];

  matches.forEach((m, idx) => {
    const level = Number(m[1]); // 2 or 3
    const attrs = m[2] || "";
    const inner = m[3] || "";

    // ✅ decode headings text properly for TOC readability
    const text = decodeWpText(inner);

    const existingIdMatch = attrs.match(/id\s*=\s*["']([^"']+)["']/);
    const hasId = Boolean(existingIdMatch?.[1]);

    const id = hasId
      ? existingIdMatch[1]
      : `${slugify(text) || "section"}-${idx + 1}`;

    toc.push({ id, text, level });

    if (!hasId) {
      const original = m[0];
      const replaced = `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
      htmlWithIds = htmlWithIds.replace(original, replaced);
    }
  });

  return { toc, htmlWithIds };
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function BlogFile() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setErr("");
      setPost(null);
      setAuthorName("");

      try {
        // ✅ Fetch ONE post by slug
        const res = await fetch(
          `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`
        );
        if (!res.ok) throw new Error("Failed to fetch blog post");
        const data = await res.json();

        const found = Array.isArray(data) ? data[0] : null;
        if (!found) {
          setErr("Blog not found.");
          setLoading(false);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          return;
        }

        setPost(found);

        // author name usually comes inside _embedded.author
        const embeddedAuthor = found?._embedded?.author?.[0]?.name;
        if (embeddedAuthor) {
          setAuthorName(embeddedAuthor);
        } else if (found?.author) {
          // fallback
          const aRes = await fetch(`${WP_BASE}/users/${found.author}`);
          if (aRes.ok) {
            const a = await aRes.json();
            setAuthorName(a?.name || "");
          }
        }

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (e) {
        console.error(e);
        setErr("Failed to load blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) run();
  }, [slug]);

  const featuredImg = useMemo(() => getFeaturedImage(post), [post]);

  // ✅ Title fixed (decode first, then strip html, then force ')
  const title = useMemo(() => decodeWpText(post?.title?.rendered || ""), [post]);

  const updated = useMemo(() => formatDate(post?.modified), [post]);

  const rawContent = post?.content?.rendered || "";

  const { toc, htmlWithIds } = useMemo(
    () => buildTOCAndContent(rawContent),
    [rawContent]
  );

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const share = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(pageUrl)}`,
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ts-blogpost">
      <Header />

      {/* HERO (featured image) */}
      <section
        className="ts-blogpost-hero"
        style={
          featuredImg ? { backgroundImage: `url(${featuredImg})` } : undefined
        }
      >
        <div className="ts-blogpost-hero-overlay" />

        <div className="ts-blogpost-hero-inner">
          <h1 className="ts-blogpost-title">{title}</h1>

          <div className="ts-blogpost-meta">
            <span className="ts-blogpost-author">
              Author: {authorName || "TecStik"}
            </span>
            <span className="ts-blogpost-date">Updated on: {updated || ""}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="ts-blogpost-body">
        <div className="ts-blogpost-grid">
          {/* LEFT: SHARE */}
          <aside className="ts-blogpost-share">
            <h3>SHARE</h3>
            <p>Share across your favourite social media:</p>

            <div className="ts-blogpost-shareBtns">
              <a href={share.facebook} target="_blank" rel="noreferrer">
                f
              </a>
              <a href={share.twitter} target="_blank" rel="noreferrer">
                x
              </a>
              <a href={share.email} target="_blank" rel="noreferrer">
                ✉
              </a>
              <a href={share.linkedin} target="_blank" rel="noreferrer">
                in
              </a>
            </div>

            <div style={{ marginTop: 20 }}>
              <Link to="/TecStik-Blog" className="ts-blogpost-back">
                ← Back to Blog
              </Link>
            </div>
          </aside>

          {/* CENTER: CONTENT */}
          <main className="ts-blogpost-content">
            {loading ? <p>Loading…</p> : null}
            {err ? <p style={{ color: "crimson" }}>{err}</p> : null}

            {!loading && !err && post ? (
              <div
                className="ts-blogpost-contentInner"
                dangerouslySetInnerHTML={{ __html: htmlWithIds }}
              />
            ) : null}
          </main>

          {/* RIGHT: TOC */}
          <aside className="ts-blogpost-toc">
            <h3>Table of Contents</h3>

            {toc.length ? (
              <ul className="ts-blogpost-tocList">
                {toc.map((item) => (
                  <li key={item.id} className={`ts-toc-${item.level}`}>
                    <button
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className="ts-blogpost-tocLink"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="ts-blogpost-tocEmpty">
                No headings found (add H2/H3 in WordPress to build a TOC).
              </div>
            )}
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
