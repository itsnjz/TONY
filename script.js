function toggleMenu() {
    const nav = document.querySelector("nav");
    const burgerMenu = document.querySelector(".burger-menu");
    nav.classList.toggle("menu-open");
    burgerMenu.classList.toggle("active");
}

const blurredImageDivs = document.querySelectorAll(".blurred-img");

blurredImageDivs.forEach(blurredImageDiv => {
  const img = blurredImageDiv.querySelector("img");
  
  function loaded() {
    blurredImageDiv.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
