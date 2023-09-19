let titulos = [];
let indicetitulos = 0;
titulos = [
  "Trabalho de Algoritmos e Programação",
  "Felipe Zanoni da Rosa",
];

function atualizarTitulo() {
  document.getElementById("idTitulo").innerHTML = titulos[indicetitulos];
  indicetitulos = (indicetitulos + 1) % titulos.length;
}

setInterval(atualizarTitulo, 2000);
function abriu(){
    let inputElement = document.getElementById("idValorParaaritimeticaPonderadaPeso");
    let brtirarElement = document.getElementById("brtirar");
    inputElement.style.display = "none";
    brtirarElement.style.display = "none";
}

function alterarEstilo() {

    let selectElement = document.getElementById("idSelectPonderada");
    let inputElement = document.getElementById("idValorParaaritimeticaPonderadaPeso");
    let brtirarElement = document.getElementById("brtirar");

    if (selectElement.value == "indice") {

        inputElement.style.display = "none";
        brtirarElement.style.display = "none";
    } else if (selectElement.value == "outraopcao") {
        inputElement.style.display = "block";
        brtirarElement.style.display = "block";
    }
}
