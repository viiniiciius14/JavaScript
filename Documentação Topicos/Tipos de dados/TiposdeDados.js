/*
//DADOS PRIMITIVOS

//String 
string é um tipo de dado onde tudo que estiver entre aspas duplas ou aspas normal é uma string ou seja texto, exemplo =>

var numero = 12;
var string = '12';
var nome = "vini";

console.log(typeof(numero));
console.log(typeof(string));
console.log(typeof(name));


//Number 
Number são dados numericos basicamente.
var idade = 21;
console.log(typeof(idade));


//Boolean
Dados do tipo booleano são true ou false, ou seja valores logicos.

//Undefined
É quando o valor de uma variavel não esta definido.
const name = ;
console.log(name);

//Null 
É quando o valor não esta definido intensionalmente pelo proprio programador.
const name = null;
 console.log(name);

//Array
Array é coleção de elementos ordenados, podemos armazenar mais de um tipo de dados.
exemplo -> 
const frutas = ["laranja", "Banana", "Maracuja", "Maçã"];
console.log(frutas[1]);
Os elementos tanto em arrays como em objetos sempre inicia do zero. neste exemplo a banana esta no elemnto 1 pois laranja é o elemento 1.

//Objeto
Objeto é uma forma de armazenar dados de forma organizada. 
exemplo -> 
const carros = {
    BMW: {
        M4: {ano: 2023, valor: 750000, cor: 'preto'},
        X6: {ano: 2021, valor: 600000, cor: 'vermelho'}
    },
    FERRARI: {
        California: {ano: 2014, valor: 550000, cor: 'amarelo'},
        '420': {ano: 2018, valor: 830000, cor: 'Branco'}
    }
};
console.log(`Marca: BMW - Modelo: M4 - Ano: ${carros.BMW.M4.ano} - Valor: R$${carros.BMW.M4.valor} - Cor: ${carros.BMW.M4.cor.toUpperCase()}`);

*/
//Data
var data = new Date();

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

console.log(`${dia}/${mes+1}/${ano}`);

var hora = data.getHours();                                                                                    
var minuto = data.getMinutes();
var segundos = data.getSeconds();

console.log(`${hora}H${minuto}`);

//ToFixed
var num = 20.86;
console.log(num.toFixed());

//ToUpperCase
var nome = 'vinicius';
console.log(nome.toUpperCase());
