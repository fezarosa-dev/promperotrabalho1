        // Vetor de inteiros
        const vetor = [];

        // Função para incluir um elemento no final do vetor
        function incluirNoFinal() {
            const elemento = prompt("Informe o elemento a ser incluído no final do vetor:");
            if (elemento !== null) {
                vetor.push(parseInt(elemento));
            }
        }

        // Função para incluir um elemento em qualquer posição válida do vetor
        function incluirEmQualquerPosicao() {
            const posicao = prompt("Informe a posição onde deseja incluir o elemento:");
            const elemento = prompt("Informe o elemento a ser incluído na posição:");
            if (posicao !== null && elemento !== null) {
                posicao = parseInt(posicao);
                if (!isNaN(posicao) && posicao >= 0 && posicao <= vetor.length) {
                    for (let i = vetor.length; i > posicao; i--) {
                        vetor[i] = vetor[i - 1];
                    }
                    vetor[posicao] = parseInt(elemento);
                }
            }
        }

        // Função para remover um elemento em qualquer posição válida do vetor
        function removerEmQualquerPosicao() {
            const posicao = prompt("Informe a posição do elemento a ser removido:");
            if (posicao !== null) {
                posicao = parseInt(posicao);
                if (!isNaN(posicao) && posicao >= 0 && posicao < vetor.length) {
                    for (let i = posicao; i < vetor.length - 1; i++) {
                        vetor[i] = vetor[i + 1];
                    }
                    vetor.pop();
                }
            }
        }

        // Função para calcular a média aritmética do vetor
        function mediaAritmetica() {
            if (vetor.length === 0) {
                alert("O vetor está vazio.");
                return;
            }

            let soma = 0;
            for (let i = 0; i < vetor.length; i++) {
                soma += vetor[i];
            }
            const media = soma / vetor.length;
            alert("Média Aritmética: " + media.toFixed(2));
        }

        // Função para calcular a média ponderada do vetor com pesos crescentes
        function mediaPonderada() {
            if (vetor.length === 0) {
                alert("O vetor está vazio.");
                return;
            }

            let somaPesos = 0;
            let somaElementos = 0;
            for (let i = 0; i < vetor.length; i++) {
                somaPesos += (i + 1) * vetor[i];
                somaElementos += vetor[i];
            }
            const mediaPonderada = somaPesos / somaElementos;
            alert("Média Ponderada: " + mediaPonderada.toFixed(2));
        }

        // Função para mostrar os elementos do vetor
        function mostrarElementos() {
            if (vetor.length === 0) {
                alert("O vetor está vazio.");
            } else {
                alert("Elementos do Vetor: " + vetor.join(", "));
            }
        }

        // Função para mostrar a porcentagem de elementos do vetor dentro do intervalo [a, b]
        function porcentagemNoIntervalo() {
            const a = parseInt(prompt("Informe o valor de 'a':"));
            const b = parseInt(prompt("Informe o valor de 'b':"));

            if (isNaN(a) || isNaN(b)) {
                alert("Valores inválidos para 'a' e/ou 'b'.");
                return;
            }

            if (a > b) {
                alert("'a' não pode ser maior que 'b'.");
                return;
            }

            if (vetor.length === 0) {
                alert("O vetor está vazio.");
                return;
            }

            let elementosNoIntervalo = 0;
            for (let i = 0; i < vetor.length; i++) {
                if (vetor[i] >= a && vetor[i] <= b) {
                    elementosNoIntervalo++;
                }
            }
            const porcentagem = (elementosNoIntervalo / vetor.length) * 100;
            alert(`Porcentagem de Elementos no Intervalo [${a}, ${b}]: ${porcentagem.toFixed(2)}%`);
        }
