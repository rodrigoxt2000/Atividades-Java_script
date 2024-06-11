// Atividade 08

const ler = require('readline-sync');

let num1 = ler.questionInt("Digite o valor A: ");
let num2 = ler.questionInt("Digite o valor B: ");
let num3 = (num1 + num2);

if (num3>20) {
    console.log(num3+8);
} else {
    console.log(num3-5);
}
