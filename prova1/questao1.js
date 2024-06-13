// Em nossa avaliação a nota da 1a unidade é dada pela média harmônica entre dois números de acordo com a fórmula: [2 x (a x b)] / (a + b), onde a é a nota da prova e b é a nota das atividades. Implemente um programa capaz de computar a média harmônica de um estudante e indicar se o estudante deve fazer a prova de recuperação (média < 6.0) ou não.
let a = 7
let b = 9
let media = (2 * (a * b)) / (a + b)

if (media < 6){
  console.log('Recuperação')
} else {
  console.log('Aprovado')
}

//CORRETA!!!