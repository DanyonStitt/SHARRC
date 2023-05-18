function showMenu() {
    let menu = document.getElementById("myLinks");
    let hamburger = document.getElementById("menu-bars");
    let hero = document.querySelector(".hero");

    let menuDisplay = window.getComputedStyle(menu).getPropertyValue("display");

    if (menuDisplay === "none") {
        menu.style.display = "flex";
        hero.style.display = "none"
        hamburger.className = "fa-solid fa-xmark"
    }
    else {
        menu.style.display = "none";
        hero.style.display = "flex";
        hamburger.className = "fa-solid fa-bars"
    };
}