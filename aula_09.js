// diferença entre pré incremento e pós incremento

let num = 1;

//a saída esperada na linha abaixo é 1, pois primeiro é acessado o valor da variável num e após isso ela é incrementada (pós incremento)
console.log(num++ + '\n');

//nesse ponto o valor impresso no console será 2, pois a variável foi incrementada na linha acima
console.log(num + '\n');

//o valor impresso será 3 pois o valor da variável é incrementado antes de ser acessado (pre incremento)
console.log(++num + '\n');