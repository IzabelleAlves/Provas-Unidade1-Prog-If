//Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro dois números e retorna o valor da multiplicação entre todos os números entre eles (intervalo exclusivo).

function multicação (a: number, b: number) : number {
  let result: number = 1
  if (b > a) {
    [b, a] = [a, b] // troca os valores para garantir que A seja maior que B 
  }
  for (let i = a; i < b; i++){
    result *= a 
  }
  return result
}

console.log(multicação(5, 13))

//ou

function multicaçãoa (a, b) {
  let result= 1
  if (a > b) {
    for (let i = a; i < b; i++){
      result *= a + 1
    }
  } else {
    for (let i = b; i > a; i--){
      result *= b + 1
    }
  }
  return result
}

console.log(multicaçãoa(5, 7))