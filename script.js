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

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.watch'); // Selecciona los elementos a observar
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animate__animated', 'animate__fadeInUp'); // Agrega la clase si el elemento está en la vista
        } 
    });
}

// Agrega el evento de scroll para detectar los elementos visibles
document.addEventListener('scroll', handleScroll);

// Llamar una vez al inicio para detectar elementos ya visibles
handleScroll();
