        // Vetor de strings
        const vetorDeStrings = [];

        // Função para incluir um nome no vetor
        function incluirNome() {
            const nome = prompt("Digite um nome para incluir no vetor:");
            if (nome !== null) {
                vetorDeStrings.push(nome);
            }
        }

        // Função para mostrar os nomes do vetor que contém uma parte de texto digitada
        function mostrarNomes() {
            const parteDoTexto = prompt("Digite parte do texto para buscar nos nomes:");
            if (parteDoTexto !== null) {
                const nomesFiltrados = [];
                for (let i = 0; i < vetorDeStrings.length; i++) {
                    if (contemParteDoTexto(vetorDeStrings[i], parteDoTexto)) {
                        nomesFiltrados.push(vetorDeStrings[i]);
                    }
                }
                alert("Nomes que contém '" + parteDoTexto + "':\n" + nomesFiltrados.join("\n"));
            }
        }

        // Função para verificar se um nome contém uma parte do texto
        function contemParteDoTexto(nome, parteDoTexto) {
            if (nome.length < parteDoTexto.length) {
                return false;
            }
            for (let i = 0; i <= nome.length - parteDoTexto.length; i++) {
                let parteComparada = "";
                for (let j = 0; j < parteDoTexto.length; j++) {
                    parteComparada += nome[i + j];
                }
                if (parteComparada === parteDoTexto) {
                    return true;
                }
            }
            return false;
        }

        // Função para ordenar o vetor de strings
        function ordenarNomes() {
            for (let i = 0; i < vetorDeStrings.length - 1; i++) {
                for (let j = i + 1; j < vetorDeStrings.length; j++) {
                    if (vetorDeStrings[i] > vetorDeStrings[j]) {
                        // Troca os elementos
                        const temp = vetorDeStrings[i];
                        vetorDeStrings[i] = vetorDeStrings[j];
                        vetorDeStrings[j] = temp;
                    }
                }
            }
            alert("Nomes ordenados:\n" + vetorDeStrings.join("\n"));
        }

        // Função para substituir letras em um nome na posição indicada
        function substituirLetras() {
            const posicao = prompt("Digite a posição do nome que deseja alterar:");
            const letra11 = prompt("Digite a letra a ser substituída:");
            const letra12 = prompt("Digite a letra para substituição:");

            if (posicao !== null && letra11 !== null && letra12 !== null) {
                if (posicao >= 0 && posicao < vetorDeStrings.length) {
                    const nome = vetorDeStrings[posicao];
                    const novoNome = substituirLetrasNoNome(nome, letra11, letra12);
                    vetorDeStrings[posicao] = novoNome;
                } else {
                    alert("Posição inválida.");
                }
            }
        }

        // Função para substituir todas as ocorrências de uma letra em um nome
        function substituirLetrasNoNome(nome, letra11, letra12) {
            let novoNome = "";
            for (let i = 0; i < nome.length; i++) {
                if (nome[i] === letra11) {
                    novoNome += letra12;
                } else {
                    novoNome += nome[i];
                }
            }
            return novoNome;
        }
