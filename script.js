let hasBeenRevealed = false; // Variável de controle para verificar se a classe já foi revelada

window.addEventListener('scroll', function() {
  const section = document.getElementById('services');
  const sectionPosition = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionPosition < windowHeight / 2 && !hasBeenRevealed) {
    section.classList.remove('hidden');
    hasBeenRevealed = true; // Atualiza a variável para indicar que a classe foi revelada
  }
});
