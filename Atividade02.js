// Atividade 01 Exercício 02

const ler = require('readline-sync');

let nome = ler.question("Digite seu Nome: ");
let sexo = ler.question("Digite seu Sexo (M ou F): ");
let estcivil = ler.question("Digite seu Estado Civil: ");

if ((sexo == 'F') && (estcivil == 'Casada')) {
    let anos = ler.questionInt("Digite o tempo de Casada: ");
    console.log("---------- Informações ----------");
    console.log("- Nome: " + nome);
    console.log("- Sexo: " + sexo);
    console.log("- Estado Civil: " + estcivil);
    console.log("- Tempo de Casada: " + anos);
    console.log("---------------------------------");
} else {
    console.log("-------- Informações --------");
    console.log("- Nome: " + nome);
    console.log("- Sexo: " + sexo);
    console.log("- Estado Civil: " + estcivil);
    console.log("-----------------------------");
}