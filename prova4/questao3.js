// 4. Implemente um programa capaz de imprimir a soma dos somaDosQuadradoss dos n
// (intervalo inclusivo) primeiros números positivos.

let n = 10;
let somaDosQuadrados = 0;

for (let i = 1; i <= n; i++) {
  somaDosQuadrados += i * i;
}
console.log(somaDosQuadrados);
