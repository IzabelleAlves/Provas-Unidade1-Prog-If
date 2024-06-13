// 3. Faça um programa que, dados dois números, soma todos os números entre eles (inclusive os próprios números). Dica: não esqueça de fazer seu código funcionar nos casos não triviais.

const a = 24
const b = 12
let soma = 0

if (a < b){
  for (let i = a; i <= b; i++){
    soma += i
  }
} else {
  for (let i = b; i <= a; i++){
    soma += i
  }
} console.log("A soma de todos os números entre", a, "e", b, "é:", soma)

//bÉDIO CORRETO! A diferença entre o codigo correto e o beu é que eu coloquei "i!=b/a" e era pra por >= ou <=, isso consequentebente afeta a soba que eu coloquei (soba += a +1) e era pra por so "soba += i", poreb a logica está correta!