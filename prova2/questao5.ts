//5.  O subprograma abaixo deveria ser capaz de multiplicar dois números inteiros usando apenas o operador da soma, mas possui diversos erros, corrija todos os erros do mesmo e para cada erro encontrado faça um comentário explicando qual o erro e qual foi a solução encontrada:

// function mult(a, b) {
//   for (let i = 0; i < b; i++) {
//     b = b + a;
//   }
//   return a;
// }

// mult(2, -5);

function mult(a: number, b: number): number {
  let resultado = a;
  for (let i = 1; i < Math.abs(b); i++) {
    resultado += a;
  }
  if (b < 0) {
    resultado = -resultado;
  }
  return resultado;
}

console.log(mult(2, -5));

//alterações corretas:
//Eu adicionei uma variável "resultado" dentro da função para computar a soma a cada loop, o que equivale a multiplicação do número. Depois disso adicionei o método abs para considerar o valor absoluto do número, sem ser negativo. Assim pude realizar a soma/multiplicação de ambos sem que o sinal interferisse. Precisei criar uma condição para caso B fosse negativo, pois, sem ela, o retorno seria o número positivo por causa o método abs. Dessa forma adicionei o "if (b < 0){resultado = -resultado}, que altera meu resultado de positivo para negativo caso B seja um número negativo."
