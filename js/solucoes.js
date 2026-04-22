document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = document.getElementById("approachSection");
    if (!section) return;

    gsap.from(".approach-label", {
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

    gsap.from(".approach-content h2", {
        y: 30,
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

    gsap.from(".approach-content p", {
        y: 24,
        opacity: 0,
        duration: 0.95,
        delay: 0.16,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".approach-note", {
        y: 16,
        opacity: 0,
        duration: 0.85,
        delay: 0.22,
        ease: "power3.out",
        scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".approach-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".approach-cards",
            start: "top 85%",
            once: true
        }
    });

    gsap.to(".card-one", {
        y: "-=10",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-two", {
        y: "-=14",
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-three", {
        y: "-=8",
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});