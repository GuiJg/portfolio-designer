document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header-portfolio");

    // Função para aplicar as alterações no estilo
    function applyStyles(isScrolled) {
        // Altera a cor dos links
        document.querySelectorAll(".header-link").forEach(function (link) {
            link.style.color = isScrolled ? "black" : "white";
        });

        // SVG com ID "svg"
        document.querySelectorAll("#svg path").forEach(function (path) {
            path.style.fill = isScrolled ? "black" : "white";
        });

        // SVG com ID "svg1"
        document.querySelectorAll("#svg1 path").forEach(function (path) {
            path.style.stroke = isScrolled ? "black" : "white";
        });

        //hamburger menu navbar color "line"
        document.querySelectorAll(".line").forEach(function (path) {
            path.style.stroke = isScrolled ? "black" : "white"
        })

        // Altera a imagem do logo
        document.querySelector(".header-logo img").src = isScrolled ? "assets/Cynthia Designer.png" : "assets/Cynthia Designer branco.png";
    }

    // Aplica os estilos no carregamento inicial da página
    applyStyles(false);

    // Adiciona um ouvinte de evento de rolagem (scroll)
    window.addEventListener("scroll", function () {
        // Obtém a posição atual de rolagem
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Define a posição de rolagem em que as alterações devem ocorrer
        const scrollThreshold = 1; // Ajuste conforme necessário

        // Verifica se a posição de rolagem ultrapassou o limite
        if (scrollPosition > scrollThreshold) {
            // Aplica as alterações quando o scroll desce além do limite
            applyStyles(true);
        } else {
            // Reverte as alterações quando o scroll volta acima do limite
            applyStyles(false);
        }
    });
});

//scroll do header transparente 
const menu = document.getElementById("header-portfolio"); 
window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        menu.classList.add("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    } else {
        menu.classList.remove("header-scroll");
        for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {

        }
    }
});

// Encontre todos os botões com a classe 'btn'
const btns = document.querySelectorAll('.btn a');

//evento de clique a cada botão
btns.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    // Prevenir o comportamento padrão do link para evitar que a página seja recarregada
    event.preventDefault();

    // Recupere o ID da janela modal diretamente do href
    const modalId = btn.getAttribute('href').substring(1);

    // Encontre a janela modal correspondente usando o ID
    const modal = document.getElementById(modalId);

    // Exiba a janela modal
    modal.style.display = 'block';
  });
});

//manipuladores de eventos de fechamento para cada janela modal
const closeBtns = document.querySelectorAll('.modal .close');
closeBtns.forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {

    const modal = closeBtn.closest('.modal');
    
    modal.style.display = 'none';
  });
});

// Adicione o manipulador de evento para ocultar a janela modal ao clicar fora dela
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

//filtro projetos 
$(document).ready(function () {
  // Evento de clique para os botões de filtro
  $('.filter-btn').on('click', function () {
      const type = $(this).data('type');

      // Oculta todos os projetos instantaneamente, exceto o tipo selecionado
      $('.item-projects').not('.' + type).hide();

      // Mostra apenas os projetos do tipo selecionado com uma transição suave
      $('.' + type).css({
          'opacity': 0,
          'margin-top': '20px'  // Ajuste conforme necessário
      }).show().animate({
          'opacity': 1,
          'margin-top': '0'
      }, 300).addClass('filtered');
  });

  // Evento de clique para o botão de limpar filtro
  $('.clear-filter-btn').on('click', function () {
      // Remova todas as classes de filtro e mostre todos os projetos instantaneamente
      $('.item-projects').show().animate({
          'opacity': 1,
          'margin-top': '0'
      }, 300).removeClass('filtered');
  });
});
