function xyz(a: boolean, b: number, c: number): void {
  let i: number = 11;
  while (!a && i > c) {
    a = b > c && i > b;
    c = c - b;
    b = c - 2 * b;
    console.log(a, b, c, i);
  }
}

xyz(false, 1, 2);
