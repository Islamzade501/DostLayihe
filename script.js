// Burger menüsüne tıklandığında menüyü aç/kapa
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});