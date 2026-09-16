const entrada = require("readline-sync");

let acumulador = 0;
for (let pecas = 1; pecas <= 5; pecas++) {
    const producao = entrada.questionInt("Digite a producao da hora" + hora + ":")
    total += producao;
};
const mediaPecas = totalPecas / 5;

console.log(`\n=== RELATORIO DE PRODUCAO ===`);
console.log(`Total produzido: ${total}`);
console.log(`Media de poducao: ${mediaPecas}`)