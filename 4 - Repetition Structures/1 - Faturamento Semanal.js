const venda = [20, 15, 10, 22, 25, 30, 20];
const preco = 10;

function calcularFaturamento(venda, preco) {
	let faturamento = 0;

	for (let i = 0; i < venda.length; i++) {
		faturamento += venda[i] * preco;
	}

	return faturamento;
}

const faturamentoTotal = calcularFaturamento(venda, preco);

console.log(`Faturamento Total da Semana: ${faturamentoTotal}`);
