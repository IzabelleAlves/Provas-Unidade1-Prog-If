//4.  Transforme sua resposta da questão 3 em um subprograma que recebe comoparâmetros os números do intervalo e retorna o valor da soma.

function soma(a: number, b: number): number {
  let soma: number = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      soma += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      soma += i;
    }
  }
  return soma;
}

console.log(soma(24, 12));
