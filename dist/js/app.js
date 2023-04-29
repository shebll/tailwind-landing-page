let btnToggle = document.querySelector(".btn-toggle");
let mobileMenu = document.querySelector("header .menu #mobile-menu ul");
btnToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
