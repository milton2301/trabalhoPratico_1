function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado ' + nome.value + ', cadastro realizado com sucesso!');
    }
}

function aumentar(){
    document.getElementById('menu').style.display='on'
}