
const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const menuOverlay = document.getElementById("menuOverlay");
const drawerClose = document.getElementById("drawerClose");
const siteHeader = document.getElementById("siteHeader");

function openMenu() {
    mobileDrawer.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    mobileDrawer.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
drawerClose.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-mobile a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        siteHeader.classList.add("scrolled");
    } else {
        siteHeader.classList.remove("scrolled");
    }
});


//GSAP
