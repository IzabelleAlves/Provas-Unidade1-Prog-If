// Corrija o subprograma abaixo para que seu resultado seja o retorno de uma string
// contendo n zeros. Exemplo, para n = 6, o retorno deve ser “000000”. Comente cada uma
// das modificações feitas.

function zeros(n) {
  let s = ""

    for (let i = 0; i < n; i++) {
      s += 0
    }

    return s
}
console.log(zeros(6))