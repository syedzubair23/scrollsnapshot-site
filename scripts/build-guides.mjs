import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "../guides/content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://syedzubair23.github.io/scrollsnapshot-site/";
const store = "https://chromewebstore.google.com/detail/scrollsnapshot/hhahcllpchhmkgmioaekblbnblodbiic";
const categories = ["Capture", "Edit", "Output", "Tools", "Settings"];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

const slugs = new Set();
for (const article of articles) {
  if (!/^[a-z0-9-]+$/.test(article.slug) || slugs.has(article.slug)) {
    throw new Error(`Invalid or duplicate guide slug: ${article.slug}`);
  }
  if (!categories.includes(article.category) || !article.sections?.length) {
    throw new Error(`Incomplete guide: ${article.slug}`);
  }
  slugs.add(article.slug);
}
for (const article of articles) {
  if (article.relatedSlugs?.some((slug) => !slugs.has(slug) || slug === article.slug)) {
    throw new Error(`Invalid related guide: ${article.slug}`);
  }
}

function head({ title, description, url, prefix, type = "website", image }) {
  const socialImage = image ? `${site}assets/${image}` : `${site}assets/modes.png`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f5f5f1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${socialImage}">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/png" sizes="32x32" href="${prefix}favicon-32.png">
  <link rel="apple-touch-icon" sizes="128x128" href="${prefix}icon-128.png">
  <link rel="stylesheet" href="${prefix}site.css">
  <link rel="stylesheet" href="${prefix}guides/guide.css">
  <script src="${prefix}guides/guide.js" defer></script>
  <title>${escapeHtml(title)} — ScrollSnapshot</title>
</head>`;
}

function header(prefix) {
  return `<a class="skip-link" href="#main">Skip to content</a>
  <div class="scroll-progress" aria-hidden="true"></div>
  <header class="site-header" id="top">
    <div class="shell header-inner">
      <a class="brand" href="${prefix}" aria-label="ScrollSnapshot homepage">
        <img src="${prefix}icon-128.png" alt="" width="34" height="34">
        <span>ScrollSnapshot</span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="${prefix}#modes">Capture modes</a>
        <a href="${prefix}guides/" aria-current="page">Guides</a>
        <a href="${prefix}privacy/">Privacy</a>
        <a href="${prefix}support/">Support</a>
      </nav>
      <a class="header-cta" href="${store}" target="_blank" rel="noopener noreferrer" aria-label="View ScrollSnapshot in the Chrome Web Store, available after launch">Chrome Web Store <span aria-hidden="true">↗</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav"><span>Menu</span><span class="menu-lines" aria-hidden="true"><i></i><i></i></span></button>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>
      <a href="${prefix}#modes">Capture modes</a>
      <a href="${prefix}guides/" aria-current="page">Guides</a>
      <a href="${prefix}privacy/">Privacy</a>
      <a href="${prefix}support/">Support</a>
      <a href="${store}" target="_blank" rel="noopener noreferrer">Chrome Web Store ↗</a>
    </nav>
  </header>`;
}

function footer(prefix) {
  return `<footer class="site-footer">
    <div class="shell footer-grid">
      <div><a class="brand" href="${prefix}"><img src="${prefix}icon-128.png" alt="" width="30" height="30"><span>ScrollSnapshot</span></a><p>Capture the page. Keep the detail.</p></div>
      <div class="footer-links"><a href="${prefix}">Homepage</a><a href="${prefix}guides/">Guides</a><a href="${prefix}privacy/">Privacy policy</a><a href="${prefix}support/">Support</a></div>
      <div class="footer-bottom"><span>© <span id="year">2026</span> ScrollSnapshot</span><span>Made for the page in front of you.</span></div>
    </div>
  </footer>`;
}

function articleUrl(article) { return `./${article.slug}/`; }
function number(index) { return String(index + 1).padStart(2, "0"); }

function indexPage() {
  const featuredSlugs = ["full-page", "region", "numbered-slices"];
  const featured = featuredSlugs.map((slug) => articles.find((article) => article.slug === slug));
  const cards = featured.map((article, index) => `<a class="guide-feature-card reveal" href="${articleUrl(article)}">
    <span class="guide-card-top"><span>${number(articles.indexOf(article))} / ${escapeHtml(article.category.toUpperCase())}</span><span aria-hidden="true">↗</span></span>
    <span class="guide-card-title">${escapeHtml(article.title)}</span>
    <span class="guide-card-desc">${escapeHtml(article.summary)}</span>
  </a>`).join("\n");
  const rows = articles.map((article, index) => `<a class="guide-row" href="${articleUrl(article)}" data-category="${article.category.toLowerCase()}" data-search="${escapeHtml(`${article.title} ${article.summary} ${article.category}`.toLowerCase())}">
    <span class="guide-row-number">${number(index)}</span>
    <span class="guide-row-main"><strong>${escapeHtml(article.title)}</strong><small>${escapeHtml(article.summary)}</small></span>
    <span class="guide-row-category">${escapeHtml(article.category)}</span>
    <span class="guide-row-arrow" aria-hidden="true">↗</span>
  </a>`).join("\n");
  return `${head({ title: "The field guide", description: "A practical guide to every ScrollSnapshot capture mode, editor control, output, and page tool.", url: `${site}guides/`, prefix: "../" })}
<body>
  ${header("../")}
  <main id="main">
    <section class="guide-index-hero shell">
      <div class="guide-eyebrow reveal"><span>THE FIELD GUIDE</span><span class="kicker-rule"></span><span>${articles.length} NOTES</span></div>
      <h1 class="reveal">A closer look at<br><em>every control.</em></h1>
      <div class="guide-index-intro reveal"><p>There is a different tool for a visible moment, a long page, a precise element, and a finished file. These notes explain where each one fits, how it behaves, and the limit to keep in mind.</p><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <section class="guide-featured shell" aria-labelledby="start-heading">
      <div class="section-label reveal"><span>START HERE</span><span class="label-line"></span></div>
      <h2 id="start-heading" class="guide-featured-heading reveal">Three good places to begin.</h2>
      <div class="guide-featured-grid">${cards}</div>
    </section>
    <section class="guide-directory shell" id="all-guides" aria-labelledby="directory-heading">
      <div class="section-label reveal"><span>THE DIRECTORY</span><span class="label-line"></span></div>
      <div class="guide-directory-heading reveal"><h2 id="directory-heading">Find the right note.</h2><p>Search a task or narrow by area.</p></div>
      <div class="guide-controls reveal">
        <label class="guide-search" for="guide-search"><span class="search-mark" aria-hidden="true"></span><span class="visually-hidden">Search guides</span><input id="guide-search" type="search" placeholder="Search features, tasks, or formats…" autocomplete="off"><kbd>/</kbd></label>
        <div class="guide-filters" role="group" aria-label="Filter guides by area"><button type="button" data-filter="all" aria-pressed="true">All</button>${categories.map((category) => `<button type="button" data-filter="${category.toLowerCase()}" aria-pressed="false">${category}</button>`).join("")}</div>
      </div>
      <div class="guide-results-meta"><span id="guide-count" role="status" aria-live="polite">${articles.length} guides</span><span>FEATURE / PURPOSE / AREA</span></div>
      <div class="guide-list" id="guide-list">${rows}</div>
      <p class="guide-no-results" id="guide-no-results" hidden>No guide matches that search. Try a mode, format, or task.</p>
    </section>
    <section class="guide-bottom shell"><p>Need help with the extension itself?</p><a class="text-link" href="../support/">Go to support <span aria-hidden="true">↗</span></a></section>
  </main>
  ${footer("../")}
</body>
</html>`;
}

function sectionHtml(section, index) {
  const paragraphs = (section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n");
  const steps = section.steps?.length ? `<ol class="guide-steps">${section.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : "";
  return `<section class="guide-prose-section" id="section-${index + 1}"><span class="guide-section-index">${String(index + 1).padStart(2, "0")}</span><div><h2>${escapeHtml(section.title)}</h2>${paragraphs}${steps}</div></section>`;
}

function articlePage(article, index) {
  const articleCount = String(articles.length).padStart(2, "0");
  const previous = articles[index - 1];
  const next = articles[index + 1];
  const nearby = article.relatedSlugs
    ? article.relatedSlugs.map((slug) => articles.find((candidate) => candidate.slug === slug))
    : articles.filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug).slice(0, 3);
  // Most visuals are 16:10; an article that ships a differently shaped asset
  // declares its own size so the browser reserves the right box before load.
  const imageWidth = article.imageWidth ?? 1280;
  const imageHeight = article.imageHeight ?? 800;
  const image = article.image ? `<figure class="guide-article-visual"><a href="../../assets/${article.image}" target="_blank" rel="noopener" aria-label="Open full-size image: ${escapeHtml(article.imageAlt)}"><img src="../../assets/${article.image}" alt="${escapeHtml(article.imageAlt)}" width="${imageWidth}" height="${imageHeight}" loading="lazy"></a><figcaption><span>FIG. ${number(index)} / ${escapeHtml(article.imageCaption)}</span><a href="../../assets/${article.image}" target="_blank" rel="noopener">OPEN FULL SIZE ↗</a></figcaption></figure>` : "";
  const toc = article.sections.map((section, sectionIndex) => `<a href="#section-${sectionIndex + 1}">${escapeHtml(section.title)}</a>`).join("");
  return `${head({ title: article.title, description: article.summary, url: `${site}guides/${article.slug}/`, prefix: "../../", type: "article", image: article.image })}
<body>
  ${header("../../")}
  <main id="main">
    <article>
      <header class="guide-article-hero shell">
        <nav class="guide-breadcrumb" aria-label="Breadcrumb"><a href="../../">Home</a><span>/</span><a href="../">Guides</a><span>/</span><span aria-current="page">${escapeHtml(article.title)}</span></nav>
        <div class="guide-eyebrow reveal"><span>${number(index)} / ${articleCount}</span><span class="kicker-rule"></span><span>${escapeHtml(article.category.toUpperCase())} · ${escapeHtml(article.depth.toUpperCase())}</span></div>
        <h1 class="reveal">${escapeHtml(article.title)}</h1>
        <p class="guide-article-lead reveal">${escapeHtml(article.lead)}</p>
      </header>
      <div class="shell">${image}</div>
      <div class="guide-article-grid shell">
        <aside class="guide-article-aside" aria-label="On this page"><span>IN THIS GUIDE</span>${toc}<a class="guide-aside-all" href="../">All guides ↗</a></aside>
        <div class="guide-article-body">
          ${article.sections.map(sectionHtml).join("\n")}
          <aside class="guide-note"><span>KEEP IN MIND</span><p>${escapeHtml(article.note)}</p></aside>
        </div>
      </div>
    </article>
    <nav class="guide-prev-next shell" aria-label="Adjacent guides">${previous ? `<a href="../${previous.slug}/"><span>← PREVIOUS GUIDE</span><strong>${escapeHtml(previous.title)}</strong></a>` : `<span></span>`}${next ? `<a href="../${next.slug}/"><span>NEXT GUIDE →</span><strong>${escapeHtml(next.title)}</strong></a>` : `<span></span>`}</nav>
    <section class="guide-related shell" aria-labelledby="related-heading"><div class="section-label"><span>KEEP READING</span><span class="label-line"></span></div><h2 id="related-heading">Nearby ideas.</h2><div class="guide-related-grid">${nearby.map((item) => `<a href="../${item.slug}/"><span>${escapeHtml(item.category.toUpperCase())} ↗</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.summary)}</small></a>`).join("")}</div></section>
  </main>
  ${footer("../../")}
</body>
</html>`;
}

await writeFile(join(root, "guides", "index.html"), indexPage(), "utf8");
for (const [index, article] of articles.entries()) {
  const directory = join(root, "guides", article.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), articlePage(article, index), "utf8");
}
const urls = [site, `${site}guides/`, ...articles.map((article) => `${site}guides/${article.slug}/`), `${site}privacy/`, `${site}support/`];
await writeFile(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}\n</urlset>\n`, "utf8");
console.log(`Built ${articles.length} feature guides and sitemap.xml`);
