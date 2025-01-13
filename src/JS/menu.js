const openMenuButton = document.querySelector('.header-burger-btn');
const closeMenuButton = document.querySelector('.header-mobile-menu-close');
const menu = document.querySelector('.header-mobile-menu');

let touchStartX = 0;
let touchEndX = 0;

export function openMenu() {
  menu.classList.add('is-open');
  openMenuButton.style.display = 'none';
  menu.addEventListener('touchstart', handleTouchStart);
  menu.addEventListener('touchmove', handleTouchMove);
}

export function closeMenu() {
  menu.classList.remove('is-open');
  openMenuButton.style.display = '';
  menu.removeEventListener('touchstart', handleTouchStart);
  menu.removeEventListener('touchmove', handleTouchMove);
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
  if (touchEndX - touchStartX > 50) {
    closeMenu();
  }
}

if (openMenuButton && closeMenuButton && menu) {
  openMenuButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);
}