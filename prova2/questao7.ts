// 7. Implemente um subprograma que, dado um número inteiro positivo como parâmetro, imprime todas as formas de gerá-lo através de multiplicações de dois números inteiros positivos.
// Exemplo de entrada:
// 12
// Saída correspondente:
// 1x12
// 2x6
// 3x4
// 4x3
// 6x2
// 12x1

function gerarMultiplicacoes(n: number): void {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${i}x${n / i}`);
    }
  }
}

gerarMultiplicacoes(12);
