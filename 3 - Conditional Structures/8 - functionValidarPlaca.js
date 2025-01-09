function verificarPlaca(placa) {
	switch (placa) {
		case 0:
		case 1:
			console.log("Dia do rodizio: Segunda-Feira");
			break;
		case 2:
		case 3:
			console.log("Dia do rodizio: Terca-Feira");
			break;
		case 4:
		case 5:
			console.log("Dia do rodizio: Quarta-Feira");
			break;
		case 6:
		case 7:
			console.log("Dia do rodizio: Quinta-Feira");
			break;
		case 8:
		case 9:
			console.log("Dia do rodizio: Sexta-Feira");
			break;
	}
}

placa = 8;

verificarPlaca(placa);
