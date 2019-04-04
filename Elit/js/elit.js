function mudabtlogin() {
    var usuario_logado = localStorage.getItem("logado");

    if (usuario_logado == "true") {
        document.getElementById("btlogin").innerHTML = "Logoff";
    } else if (usuario_logado == "false") {
        document.getElementById("btlogin").innerHTML = "Login";
    } else {
        localStorage.setItem("logado", "false");
    }

    if (usuario_logado == "true") {
        document.getElementById("btlogin").addEventListener("click", function (event) {
            document.getElementById("btlogin").innerHTML = "Login";
            localStorage.setItem("logado", "false");
        });
    }
}

mudabtlogin();

$(document).ready(function () {
    var usuario_logado = localStorage.getItem("logado");

    var url = '/C:/Users/Matheus/Estudos/1%20-%20INFNET/3%20-%20Desenvolvimento%20Front-end/01%20-%20Projeto%20de%20Desenvolvimento%20Front-End/Workspace_Bloco_FrontEnd/Projeto_Site_ELIT/Elit/Compra.html';

    if (window.location.pathname == url) {
        if (usuario_logado != "true") {
            window.location.pathname = '/C:/Users/Matheus/Estudos/1%20-%20INFNET/3%20-%20Desenvolvimento%20Front-end/01%20-%20Projeto%20de%20Desenvolvimento%20Front-End/Workspace_Bloco_FrontEnd/Projeto_Site_ELIT/Elit/login.html';
            alert("Para visualizar um filme, você precisa estar logado.")
        }
    }
});