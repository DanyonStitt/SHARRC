const menu = document.getElementById("myLinks");
const hamburger = document.getElementById("menu-bars");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", () => {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        hero.style.display = "none"
        hamburger.className = "fa-solid fa-xmark"
    }
    else {
        menu.style.display = "none";
        hero.style.display = "flex";
        hamburger.className = "fa-solid fa-bars"
    };
});