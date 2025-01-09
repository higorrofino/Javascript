let venda = 1500;
let meta = 2000;

let atingMeta = venda / meta;

if (atingMeta >= 1) {
	console.log("Excelente Desempenho");
} else if (atingMeta >= 0.9) {
	console.log("Desempenho Muito bom");
} else if (atingMeta >= 0.8) {
	console.log("Bom Desempenho");
} else if (atingMeta > 0.6) {
	console.log("Desempenho Satisfatorio");
} else {
	console.log("Desempenho insatisfatorio");
}
