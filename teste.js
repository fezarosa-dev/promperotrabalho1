let vetor = [[1, 9], [82, 2], [69, 2]];

let somaProdutos = 0;
let somaPesos = 0;

for (let i = 0; i < vetor.length; i++) {
  let numero = vetor[i][0];
  let peso = vetor[i][1];
  
  somaProdutos += numero * peso;
  somaPesos += peso;
}

let mediaPonderada = somaProdutos / somaPesos;

console.log("Média Ponderada:", mediaPonderada);
