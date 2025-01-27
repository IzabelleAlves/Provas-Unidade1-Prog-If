// 6. Qual a saída no console do programa abaixo para a chamada skz(4,6)?

function skz(f: number, k: number): void {
  let n: boolean = false;

  while (!n) {
    if (f < k) {
      f = 2 * k - f;
    } else {
      k = f * 2 - k;
    }
    n = k === 14 && k > 0;
    console.log(f, k, n);
  }
}

skz(4, 6);
