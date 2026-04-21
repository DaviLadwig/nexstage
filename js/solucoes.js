document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const solutionsSection = document.getElementById("solutionsSection");
    if (!solutionsSection) return;

    gsap.from(".solutions-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: solutionsSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".solutions-header h2", {
        y: 28,
        opacity: 0,
        duration: 0.95,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: solutionsSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".solutions-header p", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: solutionsSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".solution-card", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".solutions-grid",
            start: "top 85%",
            once: true
        }
    });
});