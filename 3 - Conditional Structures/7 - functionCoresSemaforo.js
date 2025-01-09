function coresDoSemaforo(cor) {
	switch (cor) {
		case "vermelho":
			console.log("Necessario parar");
			break;
		case "amarelho":
			console.log("Necessario parar");
			break;
		case "verde":
			console.log("Seguro passar");
			break;
		default:
			console.log("Cor inexistente");
	}
}

let cor = "verde";

coresDoSemaforo(cor);
