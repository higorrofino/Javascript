// Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// maiúsculas.
// Exemplo de Saída: // “JAVASCRIPT é divertido”

let string = 'javascript é divertido';
string = string.replace('javascript','JAVASCRIPT');
console.log(string);


// Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas.
// Exemplo de Saída: // “ aprendendo”

let string2 = 'Aprendendo Javascript';
console.log(string2.toLocaleLowerCase().substring(0,10));


// Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
// “Javascript”.
// Exemplo de Saída: // “Aprendendo Javascript”

let string3 = 'Aprendendo Python';
console.log(string3.replace('Python', 'Javascript'));


// Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
// produtos e remova o item 'sofá' da lista.
// Exemplo de Saída: “["cadeira", "mesa", "armário"]”

let string4 = 'cadeira, mesa, sofá, armário';
string4 = string4.split(', ');
string4.splice(2,1)
console.log(string4)