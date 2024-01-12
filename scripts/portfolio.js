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

// Encontre o botão e a janela modal
const btn = document.querySelector('.btn a');
const modal = document.getElementById('myModal');

// Quando o usuário clicar no botão, exiba a janela modal
btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Quando o usuário clicar no botão de fechar, oculte a janela modal
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Quando o usuário clicar fora da janela modal, também a oculte
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
