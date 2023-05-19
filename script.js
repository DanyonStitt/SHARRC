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
        // If there are open sub-menus, close them and switch the 
        // drop down indicators back to normal
        let menuList = document.querySelectorAll(".pop-out-content");
        let popOutIndicators = document.querySelectorAll(".fa-caret-up");
        for (i=0; i<popOutIndicators.length; i++) {
            popOutIndicators[i].className = "fa-solid fa-caret-down"
        }
        // For each pop out menu, check the display status
        for(i=0; i<menuList.length; i++) {
            let currentDisplay = window.getComputedStyle(
                menuList[i]).getPropertyValue("display");
            // If the display is not none, set it to none
            if (currentDisplay !== "none") {
                menuList[i].style.display = "none";
            };
        };
    };
};

function showPopOut(menuName) {
    //  Get name as passed from the HTML file
    let menu = document.querySelector(menuName);
    // Find the class name of the tag for selecting the correct menu ID
    let specificMenuItems = menu.className;
    // Get the specific menu
    let menuItems = document.getElementById(specificMenuItems);
    // Define the name of the indicator ID
    let indicatorName = "pop-out-indicator-" + specificMenuItems;
    // Get the specific drop down indicator
    let indicator = document.getElementById(indicatorName);

    //  Get the current display style
    let menuDisplay = window.getComputedStyle(menuItems).getPropertyValue("display");
    
    // If the menu is not displayed, display it
    if (menuDisplay === "none") {
        // Close any already open sub-menus and switch their indicators
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
        let popOutIndicators = document.querySelectorAll(".fa-caret-up");
        for (i=0; i<popOutIndicators.length; i++) {
            popOutIndicators[i].className = "fa-solid fa-caret-down"
        }
        menuItems.style.display = "flex";
        indicator.className = "fa-solid fa-caret-up";
    }
    // Otherwise close the list
    else {
        menuItems.style.display = "none";
        indicator.className = "fa-solid fa-caret-down"
    };
};