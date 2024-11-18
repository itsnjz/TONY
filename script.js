function toggleMenu() {
    const nav = document.querySelector("nav");
    const burgerMenu = document.querySelector(".burger-menu");
    nav.classList.toggle("menu-open");
    burgerMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-load");
  
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  });
  