//2.  Transforme sua resposta da questão 1 em um subprograma que recebe como
// parâmetros três números, e retorna true quando exatamente um deles é ímpar, ou false
// caso contrário.

function numeroImparJS(a, b, c) {
  let cont = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 != 0) {
      cont++;
    }
  }
  return cont == 1 ? "true" : "false";
}
console.log(numeroImparJS(1, 2, 3));

//Se eu quiser acessar os parâmetros da função sem q seja "...numbers" é so por "arguments.length/[i]"
