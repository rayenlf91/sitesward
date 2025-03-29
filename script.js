document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.filter = "brightness(1.5)";
    });
    link.addEventListener("mouseout", () => {
        link.style.filter = "brightness(1)";
    });
});