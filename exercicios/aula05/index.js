// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade >=18){
    return "adulto";
  } else if (idade >=12 && idade<=17){
    return "adolescente";
  }else {
    return "criança";
  }
  // escreva seu código aqui
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return preco - (percentual * preco/100);
  }


// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota <=100 && nota >= 60){
    return "aprovado";
  }else if (nota < 60 && nota >= 40){
    return "recuperação";
  }else {
    return "aprovado";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  // escreva seu código aqui
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  // escreva seu código aqui
}
