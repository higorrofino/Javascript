function msgSemaforo(cor) {
	cor == "vermelho"
		? console.log("Pare")
		: cor == "amarelo"
		? console.log("Atencao")
		: cor == "verde"
		? console.log("Prossiga")
		: console.log("Cor incorreta");
}

let cor = "verde";

msgSemaforo(cor);
