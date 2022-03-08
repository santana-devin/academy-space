/**
 * Fabrício Santana tem 42 anos, pesa 95 kg.
 * Tem 1.73 de altura e seu IMC é de 31.741788900397605
 * Fabrício nascel em 1980 .
 */

const nome = 'Fabrício';
const sobrenome = 'Santana';
const idade = 42;
const peso = 95;
const alturaEmM = 1.73;
let imc; // Peso / (altura * altura)
let anoNascimento;

imc =  peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa',peso,'kg.');
console.log('Tem', alturaEmM,'de altura e seu IMC é de', imc);
console.log(nome, 'nasceu em', anoNascimento, '.');

// Tamplate Strings
console.log('Tamplate Strings')
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);