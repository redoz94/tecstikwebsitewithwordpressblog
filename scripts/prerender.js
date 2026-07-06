const fs = require("fs");
const path = require("path");
const { run } = require("react-snap");

const SITE = "https://tecstik.com";
const WP_BASE = "https://tecstik.com/blog/wp-json/wp/v2";
const BUILD_DIR = path.join(__dirname, "..", "build");

const STATIC_ROUTES = [
  "/",
  "/Tecstik-Meet",
  "/TecStik-Portfolio",
  "/privacy-policy",
  "/TecStik-Blockchain",
  "/TecStik-WebDevelopment",
  "/TecStik-MobileApp",
  "/TecStik-Cloud",
  "/TecStik-Product",
  "/TecStik-Careers",
  "/TecStik-Contact",
  "/TecStik-Blog",
];

async function fetchAllPostMeta() {
  const perPage = 100;
  let page = 1;
  const posts = [];

  while (true) {
    const res = await fetch(
      `${WP_BASE}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified`
    );
    if (!res.ok) break;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;
    posts.push(...data);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
    if (page >= totalPages) break;
    page += 1;
  }

  return posts;
}

function buildSitemap(posts) {
  const now = new Date().toISOString();
  const urls = [
    ...STATIC_ROUTES.map((route) => ({ loc: `${SITE}${route}`, lastmod: now })),
    ...posts.map((p) => ({
      loc: `${SITE}/TecStik-Blog/${p.slug}`,
      lastmod: p.modified ? new Date(p.modified).toISOString() : now,
    })),
  ];

  const body = urls
    .map(
      (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

(async () => {
  let posts = [];
  try {
    posts = await fetchAllPostMeta();
    console.log(`[prerender] fetched ${posts.length} post slugs from WordPress`);
  } catch (e) {
    console.error("[prerender] failed to fetch post slugs, falling back to base routes only", e);
  }

  try {
    fs.writeFileSync(path.join(BUILD_DIR, "sitemap.xml"), buildSitemap(posts));
    console.log("[prerender] wrote sitemap.xml");
  } catch (e) {
    console.error("[prerender] failed to write sitemap.xml", e);
  }

  const include = ["/", "/TecStik-Blog", ...posts.map((p) => `/TecStik-Blog/${p.slug}`)];

  try {
    await run({
      source: "build",
      include,
      puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
      puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    });
    console.log(`[prerender] prerendered ${include.length} routes`);
  } catch (e) {
    console.error("[prerender] react-snap failed", e);
    process.exit(1);
  }
})();
