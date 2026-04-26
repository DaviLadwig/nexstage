document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("projectsCarousel");
  const track = document.getElementById("projectsTrack");

  if (!carousel || !track) return;

  // duplica os cards para criar loop suave
  track.innerHTML += track.innerHTML;

  let position = 0;
  let speed = 0.6;
  let isPaused = false;
  let animationId;

  const originalWidth = track.scrollWidth / 2;

  function animateCarousel() {
    if (!isPaused) {
      position += speed;

      if (position >= originalWidth) {
        position = 0;
      }

      track.style.transform = `translateX(-${position}px)`;
    }

    animationId = requestAnimationFrame(animateCarousel);
  }

  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  animateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const section = document.getElementById("projectsPreview");
  if (!section) return;

  gsap.from(".projects-preview-label", {
    y: 18,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".projects-preview-header h2", {
    y: 24,
    opacity: 0,
    duration: 1,
    delay: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".projects-preview-header p", {
    y: 18,
    opacity: 0,
    duration: 0.9,
    delay: 0.14,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".projects-carousel", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 82%",
      once: true
    }
  });
});