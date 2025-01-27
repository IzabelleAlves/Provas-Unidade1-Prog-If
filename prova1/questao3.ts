// 3. Implemente um programa que imprime quantos divisores ímpares um número possui. Exemplo, se a entrada do programa for 12 sua saída deverá ser 2 (note que 1 e 3 são os divisores ímpares de 12).

let n: number = 12;
let cont: number = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    if (n % i === 0) {
      cont++;
    }
  }
}

console.log(cont);
