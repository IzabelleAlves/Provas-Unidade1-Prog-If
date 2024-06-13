//5. Qual a saída no console do programa abaixo para a chamada xyz(1, 2, true)?

function xyz(a, b, c) {
  i = 1;
  while (true) {
    console.log(a, b, c);
    a = a + i;
    b = b - a;
    c = a == b || c != i;
    i = i * 10;
    if (i > 102) {
      break; // sai do laço
    }
  }
}
console.log(xyz(1, 2, true))

//ERREI. Minha saída no console: 1 2 true | 12 0 true | 12 0 true ||| saída correts: 1 2 true | 2 0 true | 12 -12 true
//sempre que 0 for subtrair algum número, esse outro número ficará negativo. Ex: 0 - 12 = -12