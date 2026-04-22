document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const projectsSection = document.getElementById("projectsSection");
  if (!projectsSection) return;

  gsap.from(".projects-label", {
    y: 18,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projectsSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".projects-header h2", {
    y: 28,
    opacity: 0,
    duration: 1,
    delay: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projectsSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".projects-header p", {
    y: 22,
    opacity: 0,
    duration: 0.95,
    delay: 0.16,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projectsSection,
      start: "top 82%",
      once: true
    }
  });

  gsap.from(".project-card-large", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects-showcase",
      start: "top 85%",
      once: true
    }
  });

  gsap.from(".projects-side .project-card", {
    y: 36,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects-showcase",
      start: "top 85%",
      once: true
    }
  });
});

//PAGINA PROJETOS===============================================================================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".projects-page-label", {
    y: 18,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".projects-page-header h1", {
    y: 28,
    opacity: 0,
    duration: 1,
    delay: 0.08,
    ease: "power3.out"
  });

  gsap.from(".projects-page-header p", {
    y: 22,
    opacity: 0,
    duration: 0.95,
    delay: 0.16,
    ease: "power3.out"
  });

  gsap.from(".project-box", {
    y: 38,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: "power3.out",
    delay: 0.25
  });
});