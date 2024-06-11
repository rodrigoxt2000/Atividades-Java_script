const ler = require('readline-sync');

let salario = ler.questionFloat("Insira o salário: ");
let prestacao = ler.questionFloat("Insira o valor da prestação: ");
let prestmax = salario*0.25;


if(prestacao <= prestmax) {
    prestacao= prestacao.toFixed(2);
    console.log(prestacao, "O empréstimo pode ser concedido");
}   else {
    prestacao= prestacao.toFixed(2);
    console.log(prestacao, "O empréstimo não pode ser concedido");
}
prestmax= prestmax.toFixed(2);
console.log(prestmax, "é o valor máximo da parcela");