
function toggleTheme() {
  const main = document.querySelector('main');
  main.classList.toggle('dark-mode');
  main.classList.toggle('light-mode');
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
