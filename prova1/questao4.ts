//4.  Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número retorna a quantidade de divisores ímpares dele.

function divisoresImpares(n: number): number {
  let cont: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      if (n % i === 0) {
        cont++;
      }
    }
  }

  return cont;
}

console.log(divisoresImpares(12));
