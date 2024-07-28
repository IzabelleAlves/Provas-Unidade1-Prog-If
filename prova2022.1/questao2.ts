function media(a: number, b: number, p1: number, p2: number) : boolean {
  let aprovado: boolean = true
  let media: number = ((p1 * a) + (p2 * b)) / (p1 + p2)
  if (media < 6) {
    aprovado = false
  }
  return aprovado
}

console.log(media(6, 5, 2, 2))