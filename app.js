const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const body = document.body;

// Fonction pour ouvrir et fermer le menu
burger.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la propagation du clic
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Fermer le menu en cliquant à l'extérieur
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");
  }
});
