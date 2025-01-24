//2. Transforme sua resposta da questão 1 em um subprograma que recebe como
// parâmetros as notas do estudante, e retorna true se ele foi aprovado ou false caso
// contrário.

function notas1(...numbers: number[]): boolean {
  let aprovado: boolean = true;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 6) {
      aprovado = false;
      break;
    }
  }
  return aprovado;
}
console.log(`${notas1(5, 7, 10, 10, 10, 6, 7, 8)}`);

//OU

function notas2(...numbers: number[]): boolean {
  let aprovado: boolean = numbers.every((num) => num >= 6);
  return aprovado;
}
console.log(`${notas2(8, 7, 10, 10, 10, 6, 7, 8)}`);
