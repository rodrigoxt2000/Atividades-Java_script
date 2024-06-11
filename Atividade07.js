const ler = require('readline-sync');

let etiqueta = ler.questionFloat("Digite o valor da etiqueta: ");
console.log("(1) À vista em dinheiro ou cheque, recebe 10% de desconto\n(2) À vista no cartão de crédito, recebe 15% de desconto.\n(3) Em duas vezes, preço normal de etiqueta sem juros\n(4) Em duas vezes, preço normal de etiqueta mais juros de10%");
let condpgto = ler.questionInt("Digite a condição de pagamento: ");

if (condpgto == 1) {
    let valorfinal = etiqueta-(etiqueta*0.1);
    valorfinal= valorfinal.toFixed(2);
    console.log("Valor é de: R$", valorfinal);
} else if (condpgto==2) {
    let valorfinal = etiqueta-(etiqueta*0.15);
    valorfinal= valorfinal.toFixed(2);
    console.log("Valor é de: R$", valorfinal);
} else if (condpgto==3){
   let valorfinal = etiqueta;
   valorfinal= valorfinal.toFixed(2);
   console.log("Duas vezes sem juros: R$", valorfinal); 
} else if (condpgto==4){
    let valorfinal = etiqueta+(etiqueta*0.1);
    valorfinal= valorfinal.toFixed(2);
    console.log("Duas vezes com acréscimo: R$", valorfinal);
}

