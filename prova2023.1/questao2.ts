//Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros quatro números, e retorna true se eles forem todos divisíveis por 3 ou false caso contrário.

function divisiveis(a: number, b: number, c: number, d: number) : void{
  let contador: number = 0
  for (let i = 0; i<arguments.length; i++){
    if (arguments[i] % 3 == 0){
      contador++
    }
  }
  console.log(`${contador == arguments.length ? 'true' : 'false'}`)
}

//OU

divisiveis(3, 9, 18, 30)

function divisiveisA(a: number, b: number, c: number, d: number) : boolean{
  const todosDivisiveis = [a, b, c, d].every(num => num % 3 == 0)
  return todosDivisiveis
}

console.log(divisiveisA(3, 9, 10, 30))