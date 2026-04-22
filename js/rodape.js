document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector(".site-footer");
    if (!footer) return;

    gsap.from(".footer-brand", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true
        }
    });

    gsap.from(".footer-links, .footer-contact", {
        y: 26,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true
        }
    });

    gsap.from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            once: true
        }
    });
});