function enviarMensagem() {
  alert('Mensagem enviada com sucesso!');
}

// Dark mode toggle
const darkBtn = document.getElementById('dark-mode-toggle');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = darkBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Carrossel
const track = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

let currentIndex = 0;

btnRight.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 20;
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

btnLeft.addEventListener('click', () => {
  const cardWidth = document.querySelector('.card').offsetWidth + 20;
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
