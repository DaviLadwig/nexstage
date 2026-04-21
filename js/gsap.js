
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const menuOverlay = document.getElementById("menuOverlay");
    const drawerClose = document.getElementById("drawerClose");
    const siteHeader = document.getElementById("siteHeader");

    function openMenu() {
        if (!mobileDrawer || !menuOverlay) return;

        mobileDrawer.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";

        gsap.fromTo(
            mobileDrawer,
            { x: "-100%" },
            { x: "0%", duration: 0.45, ease: "power3.out" }
        );

        gsap.fromTo(
            ".nav-mobile a, .mobile-socials a, .mobile-location",
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, stagger: 0.06, duration: 0.35, delay: 0.1, ease: "power2.out" }
        );
    }

    function closeMenu() {
        if (!mobileDrawer || !menuOverlay) return;

        gsap.to(mobileDrawer, {
            x: "-100%",
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                mobileDrawer.classList.remove("active");
                menuOverlay.classList.remove("active");
                document.body.style.overflow = "";
                gsap.set(mobileDrawer, { clearProps: "transform" });
            }
        });
    }

    if (menuToggle) menuToggle.addEventListener("click", openMenu);
    if (drawerClose) drawerClose.addEventListener("click", closeMenu);
    if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-mobile a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    if (siteHeader) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                siteHeader.classList.add("scrolled");
            } else {
                siteHeader.classList.remove("scrolled");
            }
        });
    }

    if (document.querySelector(".hero-badge")) {
        gsap.from(".hero-badge", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    if (document.querySelector(".hero-content h1")) {
        gsap.from(".hero-content h1", {
            y: 35,
            opacity: 0,
            duration: 1,
            delay: 0.15,
            ease: "power3.out"
        });
    }

    if (document.querySelector(".hero-content p")) {
        gsap.from(".hero-content p", {
            y: 25,
            opacity: 0,
            duration: 0.9,
            delay: 0.3,
            ease: "power3.out"
        });
    }

    if (document.querySelectorAll(".hero-actions a").length) {
        gsap.from(".hero-actions a", {
            y: 18,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.45,
            ease: "power3.out"
        });
    }

    if (document.querySelector(".orbit-system")) {
        gsap.from(".orbit-system", {
            scale: 0.88,
            opacity: 0,
            duration: 1.3,
            delay: 0.25,
            ease: "power3.out"
        });

        gsap.to(".orbit-system", {
            y: -10,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    if (document.querySelectorAll(".stat-item, .minimal-stat").length) {
        gsap.from(".stat-item, .minimal-stat", {
            y: 30,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".hero-stats",
                start: "top 85%"
            }
        });
    }
});
