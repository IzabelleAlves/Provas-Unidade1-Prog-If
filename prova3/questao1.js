// 1. Implemente um programa capaz de imprimir se um estudante foi aprovado no
// semestre. Um estudante é aprovado quando a nota das 8 matérias que ele cursa são
// maiores ou iguais a 6 ao mesmo tempo.

let notas = [6, 7, 10, 10, 5.9, 6, 7, 8];
let aprovado = true;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 6) {
    aprovado = false;
    break;
  }
}

aprovado ? console.log("Aprovado") : console.log("Reprovado");
