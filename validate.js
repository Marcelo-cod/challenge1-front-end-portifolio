function validarForm () {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let assunto = document.getElementById("assunto");
    let mensagem = document.getElementById("mensagem");

    if(nome.value == "" && email.value == "" && assunto.value == "" && mensagem.value == "") {
        alert("Campos de preenchimentos obrigatório! ");
        document.getElementById("nom").focus();
    }
}
