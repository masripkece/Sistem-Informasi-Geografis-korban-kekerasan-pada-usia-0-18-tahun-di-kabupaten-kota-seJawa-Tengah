/* ===============================
   HERO BACKGROUND SLIDER
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".bg-slider .slide");
  let index = 0;

  if (slides.length > 0) {
    slides[0].classList.add("active");

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 5000);
  }
});

/* ===============================
   SMOOTH IFRAME LOAD (QGIS)
================================ */
window.addEventListener("load", () => {
  const iframes = document.querySelectorAll(".map-frame iframe");

  iframes.forEach(iframe => {
    iframe.style.opacity = "0";
    iframe.style.transition = "opacity 0.6s ease";

    iframe.addEventListener("load", () => {
      iframe.style.opacity = "1";
    });
  });
});

/* ===============================
   FADE-IN ON SCROLL
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(
  ".card, .paper, .map-card, .stat-box, .analysis-box, .grafik-img-box"
).forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});
