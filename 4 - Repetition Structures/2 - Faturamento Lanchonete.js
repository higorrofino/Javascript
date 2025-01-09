function vendasHoje(totalVendas) {
	let dinheiroRecebido = 0;
	let vendasRealizadas = 0;
	let vendasConcluidas = false;

	while (!vendasConcluidas) {
		const valorVenda = 20;

		dinheiroRecebido += valorVenda;
		vendasRealizadas++;

		if (vendasRealizadas >= totalVendas) {
			vendasConcluidas = true;
		}
	}

	console.log(`Total de dinheiro recebido: R${dinheiroRecebido.toFixed(2)}`);
}

const totalVendasHoje = 10;

vendasHoje(totalVendasHoje);
