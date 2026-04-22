document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const servicesSection = document.getElementById("servicesSection");
    if (!servicesSection) return;

    gsap.from(".services-alt-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: servicesSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".services-alt-intro h2", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: servicesSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".services-alt-intro p", {
        y: 22,
        opacity: 0,
        duration: 0.95,
        delay: 0.16,
        ease: "power3.out",
        scrollTrigger: {
            trigger: servicesSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".service-alt-card", {
        y: 42,
        opacity: 0,
        duration: 0.95,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".services-alt-grid",
            start: "top 85%",
            once: true
        }
    });
});