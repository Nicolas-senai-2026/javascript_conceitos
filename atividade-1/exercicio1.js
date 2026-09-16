const entrada = require('readline-sync');

const nomeProduto = entrada.question("Digite o nome do produto: ");

const QtdPorHora = entrada.questionInt("Digite a quantidade produzida por hora: ");

const horasTrabalhadas = entrada.questionInt("Digite as horas trabalhadas: ");

const Total = QtdPorHora * horasTrabalhadas;

console.log(`\n=== RELATORIO DE PRODUCAO ===`);
console.log(`Produto: ${nomeProduto}`);
console.log(`Producao por Hora: ${QtdPorHora}`);
console.log(`Horas Trabalhadas: ${horasTrabalhadas}`);
console.log(`Total de pecas produzidas: ${Total}`);