const ler = require('readline-sync');

let num = ler.questionInt('Insira o valor a ser dividido: ');
let resto10 = num%10;
let resto5 = num%5;
let resto2 = num%2;

if (resto10==0){
    console.log(num, "é múltiplo de 10");
}
if (resto5==0) {
    console.log(num, "é múltiplo de 5");
}
if (resto2==0) {
    console.log(num, "é múltiplo de 2");
}
if (resto10 !=0){
    if (resto5!=0) {
        if  (resto2!=0) {
            console.log(num, "Não é múltiplo de 2, 5 ou 10");
    }
    }}