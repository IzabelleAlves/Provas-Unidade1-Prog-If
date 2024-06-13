//4.  Transforme sua resposta da questão 3 em um subprograma que recebe como
// parâmetro um número e retorna a quantidade de números divisíveis por ele entre -100 e
// 100 (intervalo inclusivo).

function divisores(n){
  let contador = 0
  for (let i = -100; i <= 100; i++){
    if (i % n == 0){
      contador++
    }
  }
  return contador
}
console.log(divisores(4))

//CORRETA