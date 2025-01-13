// Get all navigation points
const desktopLinks = document.querySelectorAll('.header-navigation-item');
const mobileLinks = document.querySelectorAll('.header-mobile-menu-navigation-item');
const sections = document.querySelectorAll('.section');

// Determine the active section function
export function setActiveSection() {
  let currentSection = '';

  // Check the position of each section relative to the window
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionCenter = sectionTop + sectionHeight / 2;
      
    if (sectionCenter >= window.scrollY &&
        sectionCenter <= window.scrollY + window.innerHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  // Function to update navigation classes
  const updateActiveLink = (links, activeClass) => {
    links.forEach((link) => {
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add(activeClass);
      } else {
        link.classList.remove(activeClass);
      }
    });
  };

  // Updating active items for desktop and mobile menus
  updateActiveLink(desktopLinks, 'header-navigation-item--current');
  updateActiveLink(mobileLinks, 'header-mobile-menu-navigation-item--current');
}

// Calling a function when scrolling
window.addEventListener('scroll', setActiveSection);

// Call the function when the page loads
window.addEventListener('load', setActiveSection);
