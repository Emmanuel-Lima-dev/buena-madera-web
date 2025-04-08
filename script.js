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
        rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100
    );
}
const elements = document.querySelectorAll('.watch');
let total = elements.length;
function handleScroll() {
    // Selecciona los elementos a observar
    
    let actualElements = document.querySelectorAll('.watch')
    if (total >= 1) {
        elements.forEach(el => {
            if (isElementInViewport(el)) {

                el.classList.add('animate__animated', 'animate__fadeInUp'); // Agrega la clase si el elemento está en la vista    
                el.classList.remove("watch");
                total = actualElements.length;
                
            }
        });
    }

}

// document.addEventListener('load', handleScroll);
// Agrega el evento de scroll para detectar los elementos visibles


if (total > 0) {
    document.addEventListener('scroll', handleScroll);
    console.log(total)
}





// Llamar una vez al inicio para detectar elementos ya visibles
handleScroll();
