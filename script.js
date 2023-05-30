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

window.addEventListener('scroll', function(){

  const button = document.querySelector('.btn-home');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});

const menuButton = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header-menu');

  menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
  });