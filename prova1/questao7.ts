// 7. A sequência de números 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... é conhecida como sequência de Fibonacci. Dado um número inteiro positivo n, o seu número de Fibonacci é dado pela fórmula F(1) = 1, F(2) = 1 e F(n) = F(n-1) + F(n-2) para n > 2. Escreva um programa capaz de computar o número de Fibonacci de uma variável n sem utilizar laços. Dica: use subprogramas.

function fibonacci(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6));
