const winHitZone = document.querySelector(".win-hit-zone");
const startmenu  = document.querySelector(".startmenu");

// Only the invisible box over the Windows icon toggles the menu
winHitZone.addEventListener("click", (e) => {
    e.stopPropagation();
    startmenu.classList.toggle("open");
});

// Click outside closes the menu
document.addEventListener("click", (e) => {
    if (!startmenu.contains(e.target) && !winHitZone.contains(e.target)) {
        startmenu.classList.remove("open");
    }
});

// Click inside menu doesn't close it
startmenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Escape key closes the menu
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") startmenu.classList.remove("open");
});
