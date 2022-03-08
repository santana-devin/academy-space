// Não podemos criar constantes com a palavres reservadas
// Constantes precisam ter nomes significativos
// Nãp pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelcase
// Case- sensitive
// Não podemos modificar o valor de uma constante
// Não Utiliza-se VAR, Utiliza-se CONST

//const nome; // Constante deve ser atribuido o valor na hora da declaração
const nome = 'Fabrício Santana'
console.log(nome)

const primeiroNumero = 5;
const segundoNumero  = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 20;
console.log(resultadoTriplicado);

console.log(typeof resultadoTriplicado);
