function divisores (n: number): number{
  let contador: number = 0
  for (let i= 1; i<=n; i++){
    if (n % i == 0){
      if (i % 2 == 0){
        contador++
      }
    }
  }
  return contador
}

console.log(divisores(12))