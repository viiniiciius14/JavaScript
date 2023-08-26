/*
callbacks em javascript é basicamente uma forma de organizar o fluxo do codigo para evitar erros, exemplo, criamos uma funlçao onde ela mostra uma mensagem de sudações ao usuario com o nome dele, depois criamos uma outra função onde pede ao usuario o nome dele e essa função tem um parametro de callback para outra função, dentro desta função temos uma variavel com um prompt onde o usuario ira fornecer seu nome e apos essa variavel temos o parametro callback com a variavel nome como parametro, apos isso chamamos a segunda função utilizando como parametro a primeira função onde da saudações para o usuario atraves de um alert.


function saudações(name){
    alert(`Olá ${name}`)
}

function input(callback){
    const name = prompt('Por favor digite seu primeiro nome');
    callback(name);
}

input(saudações)


setTimeout(() => {
    console.log('Está função está sendo executada 3 segundos depois!')
}, 10000); //função anonima usando arrow functions

*/

function soma (n1, n2){
    return n1 + n2
}

function divisao(n1, n2) {
    if(n2 !== 0){
        return n1 / n2
    }else{
        'Não é possivel fazer uma divisão por 0.'
    }
}

function subtrair(n1, n2){
    return n1 - n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function calcular(n1, n2, operacao){
    return operacao(n1, n2)
}
const num1 = 5;
const num2 = 5;

console.log(`O resultado da operação é -> ${calcular(num1, num2, soma)}`)
console.log(`O resultado da operação é -> ${calcular(num1, num2, divisao)}`)
console.log(`O resultado da operação é -> ${calcular(num1, num2, subtrair)}`)
console.log(`O resultado da operação é -> ${calcular(num1, num2, multiplicar)}`)