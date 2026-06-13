import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Blog.css";
import he from "he";
import blogHero from "../images/Blog.png";

const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";
const CACHE_KEY = "ts_blog_posts";
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

const stripHtml = (html = "") => html.replace(/<[^>]*>/g, "").trim();

const decodeDeep = (str = "") => {
  let prev = null, cur = str;
  for (let i = 0; i < 3 && cur !== prev; i++) { prev = cur; cur = he.decode(cur); }
  return cur;
};

const cleanText = (html = "") => decodeDeep(stripHtml(html));

function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    media?.source_url || ""
  );
}

// ── Cache helpers ─────────────────────────────────────────────
function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null; // expired
    return data;
  } catch { return null; }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {} // storage full — fail silently
}

// ── Fetch all posts across WP pages ──────────────────────────
async function fetchAllPosts(signal) {
  const firstRes = await fetch(
    `${WP_BASE}/posts?per_page=100&_embed=1&_fields=id,slug,title,excerpt,_embedded,_links&page=1`,
    { signal }
  );
  if (!firstRes.ok) throw new Error("Failed to fetch posts");
  const totalPages = parseInt(firstRes.headers.get("X-WP-TotalPages") || "1", 10);
  const firstData = await firstRes.json();
  if (totalPages <= 1) return firstData;

  const rest = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) =>
      fetch(
        `${WP_BASE}/posts?per_page=100&_embed=1&_fields=id,slug,title,excerpt,_embedded,_links&page=${i + 2}`,
        { signal }
      ).then((r) => r.json())
    )
  );
  return [...firstData, ...rest.flat()];
}

const PAGE_SIZE = 12;

export default function Blog() {
  const [posts, setPosts]   = useState(() => readCache() || []); // ← instant from cache
  const [loading, setLoading] = useState(() => !readCache());    // skip loading if cached
  const [err, setErr]       = useState("");
  const [query, setQuery]   = useState("");
  const [page, setPage]     = useState(1);

  useEffect(() => {
    // SEO meta
    document.title = "Blog | TecStik — Fintech, Blockchain & App Development Insights";
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", "Explore TecStik's blog for expert insights on fintech, blockchain, mobile app development, web development, and cloud computing in Pakistan.");
    setMeta("robots", "index, follow");
    setMeta("og:title", "Blog | TecStik", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://tecstik.com/TecStik-Blog", true);
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://tecstik.com/TecStik-Blog");
    return () => { document.title = "TecStik"; };
  }, []);

  useEffect(() => {
    const cached = readCache();

    // If we have fresh cache, show it instantly then refresh in background silently
    if (cached) {
      setPosts(cached);
      setLoading(false);
      // Background refresh — user sees no loading state
      const controller = new AbortController();
      fetchAllPosts(controller.signal)
        .then((data) => { if (Array.isArray(data)) { writeCache(data); setPosts(data); } })
        .catch(() => {}); // silent — user already has cached data
      return () => controller.abort();
    }

    // No cache — fetch and show loading
    const controller = new AbortController();
    let cancelled = false;

    const run = async () => {
      setLoading(true);
      setErr("");
      try {
        const data = await fetchAllPosts(controller.signal);
        if (!cancelled && Array.isArray(data)) {
          writeCache(data);
          setPosts(data);
        }
      } catch (e) {
        if (e.name === "AbortError") return;
        if (!cancelled) setErr("Failed to load blogs. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    run();
    return () => { cancelled = true; controller.abort(); };
  }, []);

  useEffect(() => { setPage(1); }, [query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => {
      const title   = cleanText(p?.title?.rendered   || "").toLowerCase();
      const excerpt = cleanText(p?.excerpt?.rendered || "").toLowerCase();
      return title.includes(q) || excerpt.includes(q);
    });
  }, [posts, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="ts-blogdir">
      <Header />

      {/* HERO */}
      <section
        className="ts-blogdir-hero"
        style={{
          backgroundImage: `url(${blogHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ts-blogdir-hero-overlay" />
        <div className="ts-blogdir-hero-inner"><h1>Blog</h1></div>
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
            <button type="button" aria-label="Search">🔍</button>
          </div>
        </div>
        <div className="ts-blogdir-divider" />
      </section>

      {/* CARDS */}
      <section className="ts-blogdir-gridwrap">
        {loading && <p className="ts-blogdir-status">Loading…</p>}
        {err     && <p className="ts-blogdir-status ts-blogdir-error">{err}</p>}
        {!loading && !err && filtered.length === 0 && (
          <p className="ts-blogdir-status">No posts found.</p>
        )}

        {!loading && !err && paginated.length > 0 && (
          <>
            <div className="ts-blogdir-grid">
              {paginated.map((post) => {
                const img     = getFeaturedImage(post);
                const title   = cleanText(post?.title?.rendered   || "");
                const excerpt = cleanText(post?.excerpt?.rendered || "").slice(0, 220);
                const slug    = post?.slug;
                const to      = slug ? `/TecStik-Blog/${slug}` : "/TecStik-Blog";

                return (
                  <Link
                    key={post.id}
                    to={to}
                    className="ts-blogdir-card"
                    aria-label={`Read: ${title}`}
                  >
                    <div className="ts-blogdir-cardimg">
                      {img
                        ? <img src={img} alt={title} loading="lazy" width="400" height="210" />
                        : <div className="ts-blogdir-imgfallback" />
                      }
                    </div>
                    <div className="ts-blogdir-cardbody">
                      <h3 className="ts-blogdir-cardtitle">{title}</h3>
                      <p className="ts-blogdir-cardexcerpt">{excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="ts-blogdir-pagination">
                <button
                  className="ts-blogdir-pgbtn"
                  onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  disabled={page === 1}
                >← Prev</button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    className={`ts-blogdir-pgbtn ${n === page ? "active" : ""}`}
                    onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >{n}</button>
                ))}

                <button
                  className="ts-blogdir-pgbtn"
                  onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  disabled={page === totalPages}
                >Next →</button>
              </div>
            )}
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}
