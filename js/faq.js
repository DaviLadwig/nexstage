document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => faq.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const faqSection = document.getElementById("faqSection");
    if (!faqSection) return;

    gsap.from(".faq-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: faqSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".faq-header h2", {
        y: 24,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: faqSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".faq-header p", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        delay: 0.14,
        ease: "power3.out",
        scrollTrigger: {
            trigger: faqSection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".faq-item", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".faq-list",
            start: "top 88%",
            once: true
        }
    });
});