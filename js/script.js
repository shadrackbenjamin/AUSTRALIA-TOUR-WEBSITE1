// toggle menu and navigation on mobile devices
const menu = document.querySelector('.menu');
const navMobile = document.querySelector('.nav-mobile');

function toggleMenu() {
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}