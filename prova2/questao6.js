// 6.Qual a saída no console do programa abaixo (valores impressos após a execução da linha 11 a cada iteração do laço)
function xyz(a, b, c) {
  for (let i = a; i < b; i = i - c) {
    if (b % 2 != 1) {
      b = b - i;
      c = c + c;
    } else {
      a = a - b;
      c = c - 2;
    }
    console.log(a, b, c);
  }
}

xyz(0, 7, 0);

//ERREI. LEMBRAR: Todos os números que são subtraídos de zero tornam-se negativos!! REGRA DO SINAL: adição e subtração: sinais iguais = soma e repete o sinal; sinais diferentes: subtrai e repete o sinal do número maior! multiplicação: sinais iguais repete o sinal; sinais diferentes: negativo.
