document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const trinitySection = document.getElementById("trinitySection");
    const trinityImageWrap = document.querySelector(".trinity-image-wrap");
    const trinityImage = document.getElementById("trinityImage");

    if (!trinitySection) return;

    gsap.from(".trinity-label", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: trinitySection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".trinity-content h2", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.08,
        ease: "power3.out",
        scrollTrigger: {
            trigger: trinitySection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".trinity-content p", {
        y: 22,
        opacity: 0,
        duration: 0.95,
        delay: 0.16,
        ease: "power3.out",
        scrollTrigger: {
            trigger: trinitySection,
            start: "top 82%",
            once: true
        }
    });

    gsap.from(".trinity-point", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: trinitySection,
            start: "top 82%",
            once: true
        }
    });

    if (trinityImageWrap) {
        gsap.from(trinityImageWrap, {
            y: 40,
            opacity: 0,
            scale: 0.92,
            rotate: -4,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: trinitySection,
                start: "top 82%",
                once: true
            }
        });

        gsap.to(trinityImageWrap, {
            y: -12,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    if (window.innerWidth > 980 && trinityImageWrap) {
        window.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 12;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;

            gsap.to(trinityImageWrap, {
                rotateY: x,
                rotateX: -y,
                transformPerspective: 1200,
                duration: 1.2,
                ease: "power3.out"
            });
        });
    }
});