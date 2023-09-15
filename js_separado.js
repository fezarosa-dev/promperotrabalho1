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
}        function limpar() {
    vetor = [];
    texto1 = []
    texto2= []
    texto3 = []
    texto4 = []
    texto3Padrao = [];
    document.getElementById('idVerInteiroAritimetica').innerHTML = '';
    document.getElementById('idVerInteiroAritimeticaPonderada').innerHTML= '';
    document.getElementById('idVerInteiroFim').innerHTML = '';
    document.getElementById('idVerInteiroPosicaoRemover').innerHTML = '';
    document.getElementById('idVerInteiroPosicao').innerHTML = '';
    document.getElementById('vermostrarposicao').innerHTML='';
    document.getElementById('idResultado').innerHTML='';
    document.getElementById('Texto1Ver').innerHTML='';
    document.getElementById('Texto2Ver').innerHTML='';
    document.getElementById('Texto3Ver').innerHTML='';
    document.getElementById('Texto4Ver').innerHTML='';

}
let vetor = [];

function adicionarInteiroFim() {
    let valor = document.getElementById('idInteiroFim').value;
    vetor.push(parseInt(valor));
    document.getElementById('idInteiroFim').value = '';
    document.getElementById('idInteiroFim').focus();
    document.getElementById('idVerInteiroFim').innerHTML = `<h3>Vetor: ${vetor}</h3>`;
}

function adicionarInteiroPosicao() {
    let valor = document.getElementById('idInteiroFimPosicao').value;
    let posicao = parseInt(document.getElementById('idInteiroPosicao').value);

    if (posicao <= vetor.length) {
        let tempArray = [];

        while (vetor.length > posicao) {
            tempArray.push(vetor.pop());
        }

        vetor.push(parseInt(valor));

        while (tempArray.length > 0) {
            vetor.push(tempArray.pop());
        }
    }

    document.getElementById('idInteiroFimPosicao').value = '';
    document.getElementById('idInteiroFimPosicao').focus()
    document.getElementById('idInteiroPosicao').value = '';

    document.getElementById('idVerInteiroPosicao').textContent = `Vetor: [${vetor}]`;
}

function removerInteiro() {
    let posicao = parseInt(document.getElementById('idInteiroPosicaoRemover').value);

    if (posicao >= 0 && posicao < vetor.length) {
        for (let i = posicao; i < vetor.length - 1; i++) {
            vetor[i] = vetor[i + 1];
        }
        vetor.pop();
        document.getElementById('idInteiroPosicaoRemover').value = '';
        document.getElementById('idVerInteiroPosicaoRemover').textContent = `Vetor: [${vetor}]`;
    } else {
        alert('A posição escolhida não existe no vetor.');
    }
}

function adicionarValorParaRemover() {
    let valor = document.getElementById('idValorParaRemover').value;
    vetor.push(parseInt(valor));
    document.getElementById('idVerInteiroPosicaoRemover').textContent = `Vetor: [${vetor}]`;
    document.getElementById('idValorParaRemover').value = '';
    document.getElementById('idValorParaRemover').focus() ;
}
function adicionarValorParaaritimetica() {
    let valor = document.getElementById('idValorParaaritimetica').value;
    vetor.push(parseInt(valor));
    document.getElementById('idVerInteiroAritimetica').textContent = `Vetor: [${vetor}]`;
    document.getElementById('idValorParaaritimetica').value = '';
    document.getElementById('idValorParaaritimetica').focus()
}

function CalcularVlorParaaritimetica() {
    let resultado = 0;
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i];
    }
    resultado = resultado / vetor.length;
    document.getElementById('idVerInteiroAritimetica').innerHTML = `Vetor: [${vetor}]<br>Tamanho do vetor: ${vetor.length}<br>Média aritmética: ${resultado}`;
}

function adicionarValorParaaritimeticaPonderada(){
    let valor = document.getElementById('idValorParaaritimeticaPonderada').value;
    let peso = document.getElementById('idValorParaaritimeticaPonderadaPeso').value;

    if(peso == '' )
        peso = vetor.length
    
    

    vetor.push([parseFloat(valor), parseFloat(peso)]);

    document.getElementById('idValorParaaritimeticaPonderada').value = '';
    document.getElementById('idValorParaaritimeticaPonderadaPeso').value = '';
    document.getElementById('idValorParaaritimeticaPonderada').focus();
    document.getElementById('idVerInteiroAritimeticaPonderada').textContent = `Vetor: ${JSON.stringify(vetor)}`;
}
function CalcularVlorParaaritimeticaPonderada(){
    let somaProdutos = 0;
    let somaPesos = 0;

    for (let i = 0; i < vetor.length; i++) {
        let numero = vetor[i][0];
        let peso = vetor[i][1];
    
        somaProdutos += numero * peso;
        somaPesos += peso;
    }

    let mediaPonderada = somaProdutos / somaPesos;
    document.getElementById('idVerInteiroAritimeticaPonderada').innerHTML = `Vetor:${vetor}<br>Média ponderada:${mediaPonderada} `
}
function adicionarparamostrar(){
    vetor.push(document.getElementById('idAdiconarParaMostrar').value)
    document.getElementById('idAdiconarParaMostrar').value=''
    ocument.getElementById('idAdiconarParaMostrar').focus()
    document.getElementById('vermostrarposicao').textContent=`Vetor:[${vetor}]`
}
function mostrarposicao(){
    posicao=document.getElementById('idAdiconarParaMostrarPosicao').value
    if(posicao > vetor.length){
        alert('Posição '+posicao+' Invalida')
    }
    document.getElementById('vermostrarposicao').innerHTML=`Vetor:[${vetor}] <br> Tamanho do vetor:${vetor.length}<br> Posicao escolhida:${posicao} <br> Elemento:${vetor[posicao]}`
}
function calcularPorcentagem() {
    // Obtenha os valores de 'a' e 'b' do HTML
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    let i=0
    let somavalores = Number();
    let somavaloresn = Number();

    if (b < a) {
        for (i = b; i != a; i++) {
            somavalores = somavalores + vetor[i];

        }
    } else if (a < b) {
        for (i = a; i != b; i++) {
            somavalores =  somavalores + vetor[i];

        }
    } else {
        quaivalores.push(a);
        somavalores =  somavalores + parseInt(vetor[a]);
    }

    for (i = 0; i < vetor.length; i++) {
        somavaloresn += vetor[i];
    }
alert(somavalores+'     '+ somavaloresn)
    // Calcule a porcentagem (supondo que vetor, indiceMinimo e indiceMaximo já estejam definidos em algum lugar)
    const porcentagem = (somavalores * 100) / somavaloresn;

    document.getElementById('idResultado').innerHTML = `Porcentagem: ${porcentagem.toFixed(2)}%`;
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
}

function calcularPorcentagemadicionar(){
    vetor.push( parseInt(document.getElementById('adicionarporcentagem').value))
    document.getElementById('adicionarporcentagem').value=''
    document.getElementById('adicionarporcentagem').focus()
    document.getElementById('idResultado').textContent=`Vetor:[${vetor}]`
}
let texto1 = new Array()
function addTexto1(){
    texto1.push(String(document.getElementById('addTexto1Input').value))
    document.getElementById('Texto1Ver').textContent = 'Vetor:'+JSON.stringify(texto1)
    document.getElementById('addTexto1Input').value=''
    document.getElementById('addTexto1Input').focus()
}
let texto2=[]
function addTexto2(){
    texto2.push(String(document.getElementById('addTexto2Input').value))
    document.getElementById('Texto2Ver').textContent = 'Vetor:'+JSON.stringify(texto2)
    document.getElementById('addTexto2Input').value=''
    document.getElementById('addTexto2Input').focus()
}
let texto2ver=[]
function verTexto2() {
    const textoBusca = document.getElementById('VerTexto2Input').value.toLowerCase();
    const resultados = [];

    for (let i = 0; i < texto2.length; i++) {
        const elemento = texto2[i].toLowerCase();
        if (elemento.includes(textoBusca)) {
            resultados.push(texto2[i]);
        }
    }
    if (resultados.length > 0) {
        document.getElementById('Texto2Ver').innerHTML = 'Vetor:'+JSON.stringify(texto2) + '<br>'+'Resultados encontrados: ' + resultados.join(', ');
    } else {
        document.getElementById('Texto2Ver').innerHTML = 'Vetor:'+JSON.stringify(texto2) + '<br>'+'Nenhum resultado encontrado.';
    }
}
let texto3 = [];
let texto3Padrao = [];

function addTexto3() {
    const texto = document.getElementById("addTexto3Input").value;
    texto3.push(texto);
    texto3Padrao.push(texto);
    document.getElementById("Texto3Ver").textContent = 'Vetor: ' + JSON.stringify(texto3);
    document.getElementById("addTexto3Input").value = "";
    document.getElementById("addTexto3Input").focus();
}

function OrdenarTexto3() {
    const selecionado = document.getElementById("selecionarordenar").value;

    if (selecionado === "alfabetica") {
        ordenarAlfabeticamente();
    } else if (selecionado === "quantidade") {
        ordenarPorQuantidadeCaracteres();
    } else if (selecionado === "quantidade_invertida") {
        ordenarPorQuantidadeCaracteresInvertida();
    } else if (selecionado === "alfabetica_invertida") {
        ordenarAlfabeticamenteInvertida();
    } else if (selecionado === "inverter") {
        inverterOrdem();
    } else if (selecionado === "padrao") {
        texto3 = [...texto3Padrao];
    }

    exibirTexto3();
}


function exibirTexto3() {
    const textoDiv3 = document.getElementById("Texto3Ver");
    textoDiv3.textContent = 'Vetor: ' + JSON.stringify(texto3);
}

function ordenarAlfabeticamente() {
    for (let i = 0; i < texto3.length - 1; i++) {
        for (let j = i + 1; j < texto3.length; j++) {
            if (texto3[i] > texto3[j]) {
                const temp = texto3[i];
                texto3[i] = texto3[j];
                texto3[j] = temp;
            }
        }
    }
}

function ordenarPorQuantidadeCaracteres() {
    for (let i = 1; i < texto3.length; i++) {
        const key = texto3[i];
        let j = i - 1;
        while (j >= 0 && texto3[j].length > key.length) {
            texto3[j + 1] = texto3[j];
            j--;
        }
        texto3[j + 1] = key;
    }
}

function ordenarPorQuantidadeCaracteresInvertida() {
    for (let i = 1; i < texto3.length; i++) {
        const key = texto3[i];
        let j = i - 1;
        while (j >= 0 && texto3[j].length < key.length) {
            texto3[j + 1] = texto3[j];
            j--;
        }
        texto3[j + 1] = key;
    }
}

function ordenarAlfabeticamenteInvertida() {
    for (let i = 0; i < texto3.length - 1; i++) {
        for (let j = i + 1; j < texto3.length; j++) {
            if (texto3[i] < texto3[j]) {
                const temp = texto3[i];
                texto3[i] = texto3[j];
                texto3[j] = temp;
            }
        }
    }
}

function inverterOrdem() {
    const reversedArray = [];
    for (let i = texto3.length - 1; i >= 0; i--) {
        reversedArray.push(texto3[i]);
    }
    texto3 = reversedArray;
}
function mudoul1p1(valurp1l1){
    if(valurp1l1 == "palavras"){
        document.getElementById('L1').style.display = "none"
        document.getElementById('L2').style.display = "none"
        document.getElementById('P1').style.display = "block"
        document.getElementById('P2').style.display = "block"
    }else if(valurp1l1 == "letras"){
        document.getElementById('L1').style.display = "block"
        document.getElementById('L2').style.display = "block"
        document.getElementById('P1').style.display = "none"
        document.getElementById('P2').style.display = "none"
    }
}
let texto4 = []
function addTexto4(){
    texto4.push(document.getElementById('addTexto4Input').value)
    document.getElementById('addTexto4Input').value=''
    document.getElementById('addTexto4Input').focus()
    document.getElementById('Texto4Ver').textContent= 'Vetor:'+JSON.stringify(texto4)
}
function substituirTexto(){
    let L1, L2, P1, P2, i
    let posicao = document.getElementById('addTexto4InputPosicao').value
    if(document.getElementById('substituirOpcao').value=='letras'){
        L1 = document.getElementById('L1').value
        L2 =document.getElementById('L2').value
        substituirLetrasNaPosicao(posicao, L1, L2);
    }else if(document.getElementById('substituirOpcao').value == 'palavras'){
        P1 = document.getElementById('P1').value
        P2 = document.getElementById('P2').value
        substituirPalavrasNaPosicao(posicao, P1, P2)
    }
}
function substituirPalavrasNaPosicao(posicao, P1, P2) { 
    if (posicao >= 0 && posicao < texto4.length) {
    if(texto4[posicao]==P1){
        texto4[posicao]=P2
        document.getElementById('Texto4Ver').textContent = 'Vetor:' + JSON.stringify(texto4);
    }else{
        alert('ERRO')
    }
    } else {
      alert("Posição inválida!");
    }
  }
function substituirLetrasNaPosicao(posicao, l1, l2) {
    if (posicao >= 0 && posicao < texto4.length) {
      let nome = texto4[posicao];
      let novoNome = ""; 
      for (let i = 0; i < nome.length; i++) {
        if (nome[i] === l1) {
          novoNome += l2;
        } else {
          novoNome += nome[i];
        }
      }
      texto4[posicao] = novoNome;
      document.getElementById('Texto4Ver').textContent = 'Vetor:' + JSON.stringify(texto4);
    } else {
      alert("Posição inválida!");
    }
  }

