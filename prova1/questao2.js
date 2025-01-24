// 2. Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros as notas do estudante e retorna true se ele foi aprovado ou false caso contrário.

function nota(a, b) {
  return (2 * (a * b)) / (a + b) > 6;
}
console.log(nota(7, 4));
