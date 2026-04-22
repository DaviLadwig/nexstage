document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const insightSection = document.getElementById("insightSection");
  if (!insightSection) return;

  gsap.from(".insight-editorial-label", {
    y: 18,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: insightSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".insight-editorial-left h2", {
    y: 28,
    opacity: 0,
    duration: 1,
    delay: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: insightSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".insight-editorial-left p", {
    y: 22,
    opacity: 0,
    duration: 0.95,
    delay: 0.16,
    ease: "power3.out",
    scrollTrigger: {
      trigger: insightSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".insight-line", {
    y: 34,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".insight-editorial-right",
      start: "top 85%",
      once: true
    }
  });
});