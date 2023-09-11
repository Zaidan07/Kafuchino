// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


// Klik diluar sidebar untuk menghilangkan navbar
const menu = document.querySelector("#menu");

document.addEventListener("click", function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active")
    }
}) 