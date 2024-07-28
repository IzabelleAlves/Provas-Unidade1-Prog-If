function xyz(a, b, c) {
  i = 11
  while (!a && i > c) {
      a = (b > c) && (i > b)
      c = c - b
      b = c - 2 * b
      console.log(a,b,c,i)
  }  
}
xyz(false,1,2)