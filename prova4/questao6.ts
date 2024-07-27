// 6. Corrija o subprograma abaixo para que seu retorno seja uma string contendo n “X”
// e n “Y” intercalados. Exemplo, para n = 3, o retorno deve ser “XYXYXY”. Comente cada
// uma das modificações feitas.

function inverter(n: number) : string {
  let resultado: string = ''
  let contador: number = 0

  while (contador < n){
    for (let i = 1; i < n; i++){
      if(i % 2 != 0){
        resultado += 'X'
      } else {
        resultado += 'Y'
      } 
      }
    contador++
  }
  return resultado
}

console.log(inverter(3))

//CORRETA