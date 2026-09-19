document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".scroll-progress");
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const finder = document.querySelector(".finder");
const searchInput = document.querySelector("#feature-search");
const searchResults = document.querySelector("#feature-results");
const featureButtons = Array.from(searchResults.querySelectorAll("button[data-target]"));
const emptyState = searchResults.querySelector(".finder-empty");

document.querySelector("#year").textContent = String(new Date().getFullYear());

const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -7% 0px" }
  );
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

let scrollQueued = false;
function updateScrollUI() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = available > 0 ? Math.min(1, window.scrollY / available) : 0;
  progress.style.transform = "scaleX(" + fraction + ")";
  header.classList.toggle("is-scrolled", window.scrollY > 10);
  scrollQueued = false;
}
window.addEventListener("scroll", () => {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();

function setMenuOpen(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
}
menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) setMenuOpen(false);
});

function setSearchOpen(open) {
  searchResults.hidden = !open;
  searchInput.setAttribute("aria-expanded", String(open));
}
function filterFeatures() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  featureButtons.forEach((button) => {
    const match = !query || button.dataset.search.includes(query) ||
      button.textContent.toLowerCase().includes(query);
    button.hidden = !match;
    if (match) visible += 1;
  });
  emptyState.hidden = visible !== 0;
  setSearchOpen(true);
}
function goToFeature(button) {
  const destination = document.querySelector(button.dataset.target);
  if (!destination) return;
  searchInput.value = "";
  setSearchOpen(false);
  destination.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
}
searchInput.addEventListener("focus", filterFeatures);
searchInput.addEventListener("input", filterFeatures);
searchInput.addEventListener("keydown", (event) => {
  const firstVisible = featureButtons.find((button) => !button.hidden);
  if (event.key === "Escape") {
    setSearchOpen(false);
    searchInput.blur();
  } else if (event.key === "ArrowDown" && firstVisible) {
    event.preventDefault();
    firstVisible.focus();
  } else if (event.key === "Enter" && firstVisible) {
    event.preventDefault();
    goToFeature(firstVisible);
  }
});
featureButtons.forEach((button) => {
  button.addEventListener("click", () => goToFeature(button));
  button.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setSearchOpen(false);
      searchInput.focus();
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const visibleButtons = featureButtons.filter((item) => !item.hidden);
    const current = visibleButtons.indexOf(button);
    const next = event.key === "ArrowDown"
      ? (current + 1) % visibleButtons.length
      : (current - 1 + visibleButtons.length) % visibleButtons.length;
    visibleButtons[next].focus();
  });
});
document.addEventListener("pointerdown", (event) => {
  if (!finder.contains(event.target)) setSearchOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "/" || event.altKey || event.ctrlKey || event.metaKey) return;
  const active = document.activeElement;
  if (active && (active.matches("input, textarea, select") || active.isContentEditable)) return;
  event.preventDefault();
  searchInput.focus();
});
