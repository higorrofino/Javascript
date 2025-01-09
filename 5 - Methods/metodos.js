// EXEMPLO 1 CRIANDO METODO EM OBJETO
// const pessoa = {
//     nome: "Ana",
//     saudacao: function(){
//         return `Ola, ${pessoa.nome}`;
//     }
// }

// pessoa.saudacao()


// EXEMPLO 2 - STRINGS
let string = 'Ola mundo!';
console.log(string.toUpperCase()); //letras maiusculas
console.log(string.toLowerCase()); //letras minusculas
console.log(string.slice(0,2)); //dividir strings
console.log(string.substring(0,3)); //extraindo parte da string
console.log(string.replace('mundo','Javascript')); //subistitui parte da string
console.log(string.indexOf('mundo')); //retorna o indice inicial

// SPLIT - Divide a string e cria um array
let texto = 'maça, banana, laranja, uvas';
let frutas = texto.split(', ');
for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}