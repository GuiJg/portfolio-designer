//botão do navbar responsivo mobile
const menuButton = document.querySelector('input');
const headerMenu = document.querySelector('.header-menu');
  
menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});

//para quando clicar no botão do navbar o header ficar transparente e com blur 
const menuButto = document.querySelector('input');
const headerMen = document.querySelector('header');
  
menuButto.addEventListener('click', function() {
    headerMen.classList.toggle('active');
});