function enviarMensagem(e) {
  e.preventDefault();
  const feedback = document.getElementById("feedback");
  feedback.textContent = "Mensagem enviada com sucesso!";
  feedback.style.color = "#d63384";
  setTimeout(() => {
    feedback.textContent = "";
  }, 3000);
}
