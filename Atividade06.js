const ler = require('readline-sync');

let peso = ler.questionFloat("Digite seu peso em kilos: ");
let altura = ler.questionFloat("Digite sua altura em metros: ");

let imc = peso/(altura^2);

if (imc>30){
    console.log("Está obeso: ", imc);
} else if ((imc>=25) && (imc<=30)){
    console.log("Está acima do peso: ",imc);
}else if (imc > 18.5){
    console.log("Peso normal: ",imc);
}else {
    console.log("Abaixo do peso: ",imc);
}