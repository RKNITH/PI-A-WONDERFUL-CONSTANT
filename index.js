// scripts.js
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
});
