const ler = require('readline-sync');

let num = ler.questionInt("Insira um número: ");

let resto = num%3;

if (resto==0) {
    console.log(num, "é múltiplo de 3");
} else {
    console.log(num, "não é múltiplo de 3");
}