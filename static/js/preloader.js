// Preloader Animation
function preLoaderAnim() {
    const tl = gsap.timeline();

    // Animation for preloader
    tl.to("body", {
        duration: 0.1,
        css: { overflowY: "hidden" },
        ease: "power3.inOut",
    })
    .to(".texts-container", {
        duration: 1,
        opacity: 1, // Fade in text
        ease: "power3.out",
    })
    .to(".preloader", {
        duration: 1.5,
        height: "0vh",
        ease: "power3.out",
        onComplete: () => {
            document.querySelector(".preloader").style.display = "none";
        }
    })
    .to(".content", {
        display: "block",
        duration: 1,
        opacity: 1,
        ease: "power3.out",
    });
}

// Trigger the animation when the window loads
window.addEventListener("load", preLoaderAnim);
