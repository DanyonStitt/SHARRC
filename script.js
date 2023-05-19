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
};

function showPopOut(menuName) {
    //  Get the elements involved
    let menu = document.querySelector(menuName);
    let specificMenuItems = menu.className
    let menuItems = document.getElementById(specificMenuItems)
    let indicator = document.getElementById("pop-out-indicator");

    //  Get the current display style
    let menuDisplay = window.getComputedStyle(menuItems).getPropertyValue("display");
    
    // If the menu is not displayed, display it
    if (menuDisplay === "none") {
        // Close any already open sub-menus
        let menuList = document.querySelectorAll(".pop-out-content");
        // For each pop out menu, check the display status
        for(i=0; i<menuList.length; i++) {
            let currentDisplay = window.getComputedStyle(
                menuList[i]).getPropertyValue("display");
            // If the display is not none, set it to none
            if (currentDisplay !== "none") {
                menuList[i].style.display = "none";
            };
        };
        menuItems.style.display = "flex";
        indicator.className = "fa-solid fa-caret-up"
    }
    // Otherwise close the list
    else {
        menuItems.style.display = "none";
        indicator.className = "fa-solid fa-caret-down"
    };
};