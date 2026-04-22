document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const finalCtaSection = document.querySelector(".final-cta-section");
    if (!finalCtaSection) return;

    gsap.from(".final-cta-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: finalCtaSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".final-cta-content h2", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: finalCtaSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".final-cta-content p", {
        y: 22,
        opacity: 0,
        duration: 0.95,
        delay: 0.16,
        ease: "power3.out",
        scrollTrigger: {
            trigger: finalCtaSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".final-cta-actions .final-cta-btn", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.22,
        ease: "power3.out",
        scrollTrigger: {
            trigger: finalCtaSection,
            start: "top 82%",
            once: true
        }
    });
}); 