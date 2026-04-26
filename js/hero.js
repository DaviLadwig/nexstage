document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") return;

    gsap.from(".hero-badge", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".hero-content h1", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out"
    });

    gsap.from(".hero-content p", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.16,
        ease: "power3.out"
    });

    gsap.from(".hero-actions a", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.22,
        ease: "power3.out"
    });

    gsap.from(".hero-spline-wrap", {
        x: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        delay: 0.18,
        ease: "power3.out"
    });

    gsap.from(".hero-motion-glow", {
        scale: 0.75,
        opacity: 0,
        duration: 1.3,
        delay: 0.25,
        ease: "power2.out"
    });
});