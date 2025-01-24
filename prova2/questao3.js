// 3. Faça um programa que, dados dois números, soma todos os números entre eles (inclusive os próprios números). Dica: não esqueça de fazer seu código funcionar nos casos não triviais.

const a = 24;
const b = 12;
let soma = 0;

if (a < b) {
  for (let i = a; i <= b; i++) {
    soma += i;
  }
} else {
  for (let i = b; i <= a; i++) {
    soma += i;
  }
}
console.log("A soma de todos os números entre", a, "e", b, "é:", soma);
