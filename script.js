function toggleMenu() {
    const nav = document.querySelector("nav");
    const burgerMenu = document.querySelector(".burger-menu");
    nav.classList.toggle("menu-open");
    burgerMenu.classList.toggle("active");
}

