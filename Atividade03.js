// Atividade 01 Exercício 03

const ler = require('readline-sync');

let valorA = ler.questionInt("Digite Valor A: ");
let valorB = ler.questionInt("Digite Valor B: ");

if (valorA == valorB) {
    let valorC = valorA + valorB;
    console.log("Resultado: " + valorC);
} else {
    let valorC = valorA * valorB;
    console.log("Resultado: " + valorC);
}