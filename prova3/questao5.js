//5. Qual a saída no console do programa abaixo para a chamada akb(4,8)?

function akb(s, k) {
  e = true;
  while (e) {
    s = (s * 10) + (k % 2);
    k = (k - 5) * (k - 5);
    e = (s % k) < 10;
    console.log(s, k, e);
  }
}
akb(4, 8)

//CORRETA MÉDIO PQ NO PAPEL SO FIZ UM LOOP - PRESTAR MAIS ATENÇÃO!