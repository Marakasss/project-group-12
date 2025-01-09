const openMenuButton = document.querySelector('.header-burger-btn');
const closeMenuButton = document.querySelector('.header-mobile-menu-close');
const menu = document.querySelector('.header-mobile-menu');

function openMenu() {
  menu.classList.add('is-open');
}

function closeMenu() {
  menu.classList.remove('is-open');
}

if (openMenuButton && closeMenuButton && menu) {
  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);
}