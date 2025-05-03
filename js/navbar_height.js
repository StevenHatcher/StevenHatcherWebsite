function adjustFullscreenHeight() {
  const navbar = document.getElementById('navbar');
  const section = document.getElementById('fullscreen-section');
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const navbarHeight = navbar.offsetHeight;
    const viewportHeight = window.innerHeight;
    // section.style.height = (viewportHeight - navbarHeight) + 'px';
  } else {
    section.style.height = 'auto'; // Reset on desktop
  }
}

window.addEventListener('load', adjustFullscreenHeight);
window.addEventListener('resize', adjustFullscreenHeight);

  
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
  }