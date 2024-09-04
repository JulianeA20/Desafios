// Desafio 1 - Sequência de Fibonacci

function isQuadradoPerfeito(x) {
  const s = Math.sqrt(x);
  return s * s === x;
}

function isFibonacci(n) {
  return isQuadradoPerfeito(5 * n * n + 4) || isQuadradoPerfeito(5 * n * n - 4);
}

function sequenciaFibonacciAte(n) {
  const sequencia = [];
  let a = 0, b = 1;
  while (a <= n) {
    sequencia.push(a);
    [a, b] = [b, a + b];
  }
  return sequencia;
}

function verificarFibonacci() {
  const num = parseInt(document.getElementById("numero").value, 10);
  const resultadoElemento = document.getElementById("resultado");
  const sequenciaElemento = document.getElementById("sequencia");

  if (isNaN(num)) {
    resultadoElemento.textContent = "Por favor, insira um número válido.";
    sequenciaElemento.textContent = "";
    return;
  }

  const sequencia = sequenciaFibonacciAte(num);

  if (sequencia.includes(num)) {
    resultadoElemento.textContent = `O número ${num} pertence à sequência de Fibonacci! 😊`;
  } else {
    resultadoElemento.textContent = `O número ${num} não pertence à sequência de Fibonacci! 😞`;
  }

  sequenciaElemento.textContent = "Sequência de Fibonacci calculada: " + sequencia.join(", ");
}

// Desafio 2 - Encontrando A

function verificarLetraA() {
  const texto = document.getElementById("texto").value;
  const regex = /a/gi;
  const matches = texto.match(regex);

  const resultadoTexto = document.getElementById("resultadoTexto");
  const quantidade = document.getElementById("quantidade");

  if (matches) {
    const quantidadeA = matches.length;
    resultadoTexto.textContent = "A letra 'a' foi encontrada!";
    quantidade.textContent = `Ela aparece ${quantidadeA} vezes.`;
    if (quantidadeA == 1) {
      quantidade.textContent = `Ela aparece ${quantidadeA} vez.`
    } else {
      quantidade.textContent = `Ela aparece ${quantidadeA} vezes.`
    }
  } else {
    resultadoTexto.textContent = "A letra 'a' não foi encontrada!";
    quantidade.textContent = "";
  }
}

// Desafio 3 - Valor da Variável SOMA

function verResultado() {
  let INDICE = 12;
  let SOMA = 0;
  let K = 1;

  while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
  }

  document.getElementById("resultadoSoma").textContent = `O valor da soma é: ${SOMA}`;
}


// Desafio 4 - Próximos Elementos das Sequências

document.getElementById("seq-a").textContent = 9;
document.getElementById("seq-b").textContent = 128;
document.getElementById("seq-c").textContent = 49;
document.getElementById("seq-d").textContent = 100;
document.getElementById("seq-e").textContent = 13;
document.getElementById("seq-f").textContent = 27;
