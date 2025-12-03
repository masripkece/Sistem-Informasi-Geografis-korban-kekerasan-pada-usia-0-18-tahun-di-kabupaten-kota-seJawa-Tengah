// main.js - simple behavior: background slider and small interactions

document.addEventListener('DOMContentLoaded', function () {
    // background slider
    const slides = Array.from(document.querySelectorAll('.bg-slider .slide'));
    if (slides.length > 0) {
      let idx = 0;
      slides[idx].classList.add('active');
      setInterval(() => {
        slides[idx].classList.remove('active');
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add('active');
      }, 4500);
    }
  
    // simple mobile nav toggle could be added later
    // placeholder for future interactive map initialization (Leaflet/Mapbox)
  });
  