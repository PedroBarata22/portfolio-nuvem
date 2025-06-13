function enviarMensagem() {
  alert('Obrigado pelo contacto!');
}

// Dark mode
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Mobile menu 
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
