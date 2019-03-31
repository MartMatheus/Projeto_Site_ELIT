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