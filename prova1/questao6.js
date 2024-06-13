// 6. Corrija o subprograma abaixo para que seu resultado seja a impressão dos números ímpares negativos entre -n e -1 (intervalo inclusivo), zero, e os números pares positivos entre 1 e n (intervalo inclusivo). Exemplo, para a entrada 6, a saída deverá conter os números -5, -3, -1, 0, 2, 4, 6. Comente cada uma das modificações feitas.

function numeros(n) {
  let i = -n;
  while (i < n) {
    if (i < 0 && i % 2 != 0) {
      console.log(i);
    } else if (i >= 0 && i % 2 == 0) {
      console.log(i);
    } 
    i++;
  }
}
console.log(numeros(6))

//CORRETA!!!