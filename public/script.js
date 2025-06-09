// Loader moderno com fade
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 1;
  setTimeout(() => {
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 500);
  }, 500);
});

// Menu Mobile Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuBtn.textContent = menu.classList.contains('hidden') ? '☰' : '✕';
});
