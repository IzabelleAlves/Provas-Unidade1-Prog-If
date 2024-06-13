//2. Transforme sua resposta da questão 1 em um subprograma que recebe como
// parâmetros as notas do estudante, e retorna true se ele foi aprovado ou false caso
// contrário.

function notas(...numbers){
  let aprovado = true
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 6){
      aprovado = false
      break;
    }
  }
  return aprovado
} 
console.log(`${notas(6, 7, 10, 10, 10, 6, 7, 8) ? 'Aprovado' : 'Reprovado'}`)

//CORRETA