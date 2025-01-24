//Corrija o subprograma abaixo para que seu resultado seja o retorno de uma string contendo os n primeiros números inteiros positivos. Exemplo, para n = 6, o retorno deve ser “123456”. Comente cada uma das modificações feitas.

function inteiros(n) {
  s = "";
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}
console.log(inteiros(6));
