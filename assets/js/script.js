// Funcionalidad para mostrar un mensaje al hacer clic en un enlace del menú
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        alert(`Redirigiendo a: ${link.textContent}`);
    });
});

// Cambiar el color de fondo de la página al azar cuando se hace clic en el encabezado
const header = document.querySelector('header');

header.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});
