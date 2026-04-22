document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const processSection = document.getElementById("processSection");
    if (!processSection) return;

    gsap.from(".process-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: processSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".process-header h2", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: processSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".process-header p", {
        y: 22,
        opacity: 0,
        duration: 0.95,
        delay: 0.16,
        ease: "power3.out",
        scrollTrigger: {
            trigger: processSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".process-track", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 85%",
            once: true
        }
    });

    gsap.from(".process-item", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 85%",
            once: true
        }
    });
});