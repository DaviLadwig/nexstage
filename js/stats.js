document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const statsSection = document.getElementById("statsSection");
    const statsItems = document.querySelectorAll(".stats-item");
    const statsNumbers = document.querySelectorAll(".stats-number");

    if (!statsSection || !statsItems.length || !statsNumbers.length) return;

    gsap.from(statsItems, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: statsSection,
            start: "top 85%",
            once: true
        }
    });

    statsNumbers.forEach((number) => {
        const target = parseInt(number.dataset.target, 10);
        const prefix = number.dataset.prefix || "";
        const suffix = number.dataset.suffix || "";

        if (isNaN(target)) return;

        const counter = { value: 0 };

        gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: statsSection,
                start: "top 85%",
                once: true
            },
            onUpdate: () => {
                number.textContent = `${prefix}${Math.floor(counter.value)}${suffix}`;
            },
            onComplete: () => {
                number.textContent = `${prefix}${target}${suffix}`;
            }
        });
    });
});