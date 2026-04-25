document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.getElementById("pillarsSection");
    if (!section) return;

    gsap.from(".pillars-belt-label", {
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

    gsap.from(".pillars-belt-header h2", {
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

    gsap.from(".pillars-belt-header p", {
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

    gsap.from(".belt-back", {
        x: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".pillars-belt-stage",
            start: "top 88%",
            once: true
        }
    });

    gsap.from(".belt-front", {
        x: -60,
        opacity: 0,
        duration: 1.1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".pillars-belt-stage",
            start: "top 88%",
            once: true
        }
    });
});