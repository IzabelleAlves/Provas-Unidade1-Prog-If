//1.  Implemente um programa capaz de verificar quando exatamente um dentre três
// números são ímpares. Exemplo: entrada: 1, 2, 3, saída: false.

let n: number[] = [1, 2, 3];
let cont: number = 0;

for (let i = 0; i < n.length; i++) {
  if (n[i] % 2 !== 0) {
    cont++;
  }
}

console.log(`${cont === 1 ? "true" : "false"}`);
