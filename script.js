const navbarToggler = document.querySelector(".navbar-toggler");
const main = document.querySelector(".main");
const expandedMenu = navbarToggler.getAttribute("aria-expanded");
const navbarCollapse = document.querySelector("#navbarNavDropdown");

navbarCollapse.addEventListener("shown.bs.collapse", () => {
    main.classList.add("opacidad");
});

navbarCollapse.addEventListener("hidden.bs.collapse", () => {
    main.classList.remove("opacidad");
});

