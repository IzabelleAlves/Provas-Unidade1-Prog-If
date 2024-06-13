//4.  Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número retorna a quantidade de divisores ímpares dele.

function divisoresImpares(n){
let cont = 0
  for (let i = 1; i <=n; i++){
    if (i % 2 != 0){
      if (n % i == 0){
        cont++
      }
    }
  }
  return cont
} console.log(divisoresImpares(12))

//QUASE CORRETA! antes eu tinha colocado o "return" no topo, mas nesse caso, como criei uma variável dentro da função e quero que ela seja retornada: primeiro faço a equação e depois retorno o valor em específico que eu quero. 