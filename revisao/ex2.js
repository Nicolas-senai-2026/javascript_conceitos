const entrada = require('readline-sync');

let total = 0; //acumulador iniciado em 0

for (let inspecao = 1; inspecao <= 6; inspecao++) { //comeca 1-6 termina inspecoes
    const valor = entrada.questionFloat(`Digite a medida da ${inspecao}a: `);
    total += valor
}
const media = total / 6;

console.log(`Total de defeitos: ${total.toFixed(2)}`);
console.log(`Media de defeitos: ${media.toFixed(2)}`);
