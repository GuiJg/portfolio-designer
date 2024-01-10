function enviarFormulario() {
    var formulario = document.getElementById("meuFormulario");
    var data = new FormData(formulario);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/josepessoa.dev@gmail.com", true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Redirecionar ou exibir uma mensagem de confirmação, se necessário
            alert("Formulário enviado com sucesso!");
        }
    };

    xhr.send(data);
}
