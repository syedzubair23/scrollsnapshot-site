document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });
  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
}
menuButton.addEventListener("click", () => setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true"));
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) setMenuOpen(false);
});

let scrollQueued = false;
function updateScrollUI() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
  scrollQueued = false;
}
window.addEventListener("scroll", () => {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();

const search = document.querySelector("#guide-search");
if (search) {
  const rows = [...document.querySelectorAll(".guide-row")];
  const filters = [...document.querySelectorAll(".guide-filters button")];
  const count = document.querySelector("#guide-count");
  const empty = document.querySelector("#guide-no-results");
  let activeFilter = "all";

  function applyFilters() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const row of rows) {
      const matchesCategory = activeFilter === "all" || row.dataset.category === activeFilter;
      const matchesText = !query || row.dataset.search.includes(query);
      row.hidden = !(matchesCategory && matchesText);
      if (!row.hidden) visible += 1;
    }
    count.textContent = `${visible} ${visible === 1 ? "guide" : "guides"}`;
    empty.hidden = visible !== 0;
  }

  search.addEventListener("input", applyFilters);
  filters.forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
    applyFilters();
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.altKey || event.ctrlKey || event.metaKey) return;
    const active = document.activeElement;
    if (active && (active.matches("input, textarea, select") || active.isContentEditable)) return;
    event.preventDefault();
    search.focus();
  });
}

const tocLinks = [...document.querySelectorAll(".guide-article-aside a[href^='#']")];
if (tocLinks.length && "IntersectionObserver" in window) {
  const sections = [...document.querySelectorAll(".guide-prose-section")];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (!visible.length) return;
    const id = `#${visible[0].target.id}`;
    tocLinks.forEach((link) => {
      if (link.getAttribute("href") === id) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-110px 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}
