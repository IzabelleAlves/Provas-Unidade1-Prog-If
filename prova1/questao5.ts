//5. Qual a saída no console do programa abaixo para a chamada xyz(1, 2, true)?

function xyz(a, b, c) {
  let i: number = 1;
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
console.log(xyz(1, 2, true));
