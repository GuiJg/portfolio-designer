document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header-about");

    // Função para aplicar as alterações no estilo
    function applyStyles(isScrolled) {
        // Altera a cor dos links
        document.querySelectorAll(".header-link").forEach(function(link) {
            link.style.color = isScrolled ? "white" : "black";
        });

        // SVG com ID "svg"
        document.querySelectorAll("#svg path").forEach(function(path) {
            path.style.fill = isScrolled ? "white" : "black";
        });

        // SVG com ID "svg1"
        document.querySelectorAll("#svg1 path").forEach(function(path) {
            path.style.stroke = isScrolled ? "white" : "black";
        });

        // Altera a imagem do logo
        document.querySelector(".header-logo img").src = isScrolled ? "assets/Cynthia Designer branco.png" : "assets/Cynthia Designer.png";
    }

    // Aplica os estilos no carregamento inicial da página
    applyStyles(false);

    // Adiciona um ouvinte de evento de rolagem (scroll)
    window.addEventListener("scroll", function() {
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
const menu = document.getElementById("header-about"); 
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