
### Variável

HTML (`variavel.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Variável</title>
</head>
<body>
  <script>
    // Declaração de variável
    let idade = 25;
    console.log(idade); // Saída: 25
  </script>
</body>
</html>
```

### Tipo de Dado

HTML (`tipodedado.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tipo de Dado</title>
</head>
<body>
  <script>
    let nome = "Maria"; // String
    let ativo = true;   // Boolean
    let numero = 42;    // Number
  </script>
</body>
</html>
```

### Vetor (Array)

HTML (`vetor.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Vetor</title>
</head>
<body>
  <script>
    let frutas = ["maçã", "banana", "laranja"];
    console.log(frutas); // Saída: ["maçã", "banana", "laranja"]
  </script>
</body>
</html>
```

### Índice

HTML (`indice.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Índice</title>
</head>
<body>
  <script>
    let frutas = ["maçã", "banana", "laranja"];
    console.log(frutas[1]); // Saída: "banana" (índice 1)
  </script>
</body>
</html>
```

### Operadores Lógicos e Relacionais

HTML (`operadores.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Operadores Lógicos e Relacionais</title>
</head>
<body>
  <script>
    let idade = 25;
    let maiorDeIdade = idade >= 18;
    console.log(maiorDeIdade); // Saída: true
  </script>
</body>
</html>
```

### IF

HTML (`if.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>IF</title>
</head>
<body>
  <script>
    let temperatura = 30;
    if (temperatura > 25) {
      console.log("Está quente!");
    } else {
      console.log("Não está tão quente.");
    }
  </script>
</body>
</html>
```

### FOR

HTML (`for.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>FOR</title>
</head>
<body>
  <script>
    for (let i = 0; i < 5; i++) {
      console.log("Número: " + i);
    }
  </script>
</body>
</html>
```

### WHILE

HTML (`while.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>WHILE</title>
</head>
<body>
  <script>
    let contador = 0;
    while (contador < 3) {
      console.log("Contador: " + contador);
      contador++;
    }
  </script>
</body>
</html>
```

### Evento Click

HTML (`evento_click.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Evento Click</title>
</head>
<body>
  <button id="meuBotao">Clique em mim</button>
  <script>
    let meuBotao = document.getElementById("meuBotao");
    meuBotao.addEventListener("click", function() {
      alert("Botão clicado!");
    });
  </script>
</body>
</html>
```

### Evento Keydown, Keyup e Keypress

HTML (`evento_teclado.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos de Teclado</title>
</head>
<body>
  <input type="text" id="meuCampoDeTexto" placeholder="Pressione uma tecla">
  <script>
    let campoDeTexto = document.getElementById("meuCampoDeTexto");
    
    campoDeTexto.addEventListener("keydown", function(event) {
      console.log("Tecla pressionada: " + event.key);
    });

    campoDeTexto.addEventListener("keyup", function(event) {
      console.log("Tecla liberada: " + event.key);
    });

    campoDeTexto.addEventListener("keypress", function(event) {
      console.log("Tecla mantida pressionada: " + event.key);
    });
  </script>
</body>
</html>
```

### Evento Mouseover e Mouseout

HTML (`evento_mouse.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos de Mouse</title>
  <style>
    .minhaDiv {
      width: 200px;
      height: 100px;
      background-color: white;
    }
  </style>
</head>
<body>
  <div id="minhaDiv" class="minhaDiv"></div>
  <script>
    let elemento = document.getElementById("minhaDiv");
    
    elemento.addEventListener("mouseover", function() {
      elemento.style.backgroundColor = "lightblue";
    });

    elemento.addEventListener("mouseout", function() {
      elemento.style.backgroundColor = "white";
    });
  </script>
</body>
</html>
```

### Evento Focus e Blur

HTML (`evento_foco.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos de Foco</title>
</head>
<body>
  <input type="text" id="meuCampo" placeholder="Digite algo">
  <script>
    let meuCampo = document.getElementById("meuCampo");
    
    meuCampo.addEventListener("focus", function() {
      console.log("Campo recebeu foco.");
    });

    meuCampo.addEventListener("blur", function() {
      console.log("Campo perdeu foco.");
    });
  </script>
</body>
</html>
```

### Evento DOMContentLoaded

HTML (`evento_dom.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Evento DOMContentLoaded</title>
</head>
<body>
  <h1>Conteúdo da página</h1>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      alert("O documento HTML foi totalmente carregado!");
    });
  </script>
</body>
</html>
```

Cada exemplo demonstra um conceito ou evento específico em JavaScript e pode ser colocado em arquivos HTML separados para testar e entender melhor cada conceito. Basta copiar o código em arquivos HTML separados e abrir no seu navegador para ver os resultados.