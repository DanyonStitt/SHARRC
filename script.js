const menu = document.getElementById("myLinks");
const hamburger = document.getElementById("menu-bars")

hamburger.addEventListener("click", () => {
    if (menu.style.display == "none") {
        console.log("naah")
        menu.style.display = "flex";
    }
    else {
        console.log("yup")
        menu.style.display = "none";
    };
});
