//Diferença entre LET, VAR e CONST em Javascript - Curso de Javascript Moderno - Aula 03
"use strict"

//declaração de variaveis usando a palavra reservada var faz com que o acesso a essa variável seja permitido fora do escopo da declaração

//exemplo em código
if(true){
    var exemplo01 = "\ndeclaração de variável dentro do bloco if\n";
}

//a função log vai imprimir a string exemplo mesmo ela sendo declarada dentro do bloco if
console.log(exemplo01);

/*para resolver ess problema de escopo na versão ES6 do javascript criado o let, que é uma outra forma de alocar variaveis em memoria
que soluciona esse problema de escopo*/

if(true){
    let exemplo02 = "\ndeclaração de variável dentro do bloco if\n";
}

//essa causará um erro de execução
console.log(exemplo02);

//constantes não podem ter valores alterados ao longo do programa, uma vez declaradas
const pi = 3.14;

//a linha abaixo produziria um erro
//pi = 3.1416;