gsap.from(".hero-image-wrap", {
    x: 50,
    opacity: 0,
    scale: 0.96,
    duration: 1.1,
    delay: 0.18,
    ease: "power3.out"
});

gsap.from(".hero-motion-glow", {
    scale: 0.75,
    opacity: 0,
    duration: 1.2,
    delay: 0.24,
    ease: "power2.out"
});