// 5. Transforme sua resposta da questão 3 em um subprograma que recebe como
// parâmetro n, e retorna a soma dos somaDosQuadradoss dos n (intervalo inclusivo) primeiros
// números positivos.

function numPositivos(n: number): number {
  let somaDosQuadrados = 0;
  for (let i = 1; i <= n; i++) {
    somaDosQuadrados += i ** 2;
  }
  return somaDosQuadrados;
}
console.log(numPositivos(10));
