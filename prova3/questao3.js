//3. Implemente um programa capaz de imprimir quantos números são divisíveis por n
// entre -100 e 100 (intervalo inclusivo).

let n = 4
let cont = 0

for (let i = -100; i <= 100; i++){
  if (i % n == 0){
    cont++
  }
} 
console.log(cont)

//CORRETA