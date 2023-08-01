/*
//Ambiente destinado para documentar apredndizado sobre Javascript. 

Semana 1:

° Introdução ao JavaScript: revise os conceitos básicos que você já conhece, como variáveis, tipos de dados e escopo.
° Estruturas de controle de fluxo: aprofunde seu conhecimento em estruturas como if/else, loops (for, while) e switch.

- Prática: resolva exercícios e pequenos problemas de programação usando as estruturas de controle de fluxo.
.Calculadora simples: crie uma calculadora que realize operações básicas (adição, subtração, multiplicação, divisão) com números inseridos pelo usuário.
.Jogo da adivinhação: desenvolva um jogo em que o programa escolhe um número aleatório e o jogador precisa adivinhar qual é esse número, recebendo dicas do programa.

Semana 2:

° Funções: estude a criação e o uso de funções em JavaScript, incluindo parâmetros, retorno de valores e escopo das funções.
° Manipulação do DOM: aprenda a selecionar elementos HTML, modificar conteúdo, estilos e interagir com eventos.

- Prática: crie pequenos projetos que envolvam funções e manipulação do DOM, como um formulário interativo ou uma calculadora simples.
.Validador de formulário: crie um formulário com campos de entrada e implemente uma função que valide os dados inseridos pelo usuário antes de enviar o formulário.
.Lista de tarefas interativa: desenvolva uma lista de tarefas na qual o usuário pode adicionar, marcar como concluídas ou remover tarefas. As alterações devem ser refletidas na página em tempo real.

Semana 3:

° Arrays e objetos: aprofunde-se no uso de arrays e objetos em JavaScript, explorando métodos de manipulação, iteração e acesso aos elementos.
° Gerenciamento de erros: aprenda sobre tratamento de erros e exceções em JavaScript, utilizando try/catch.

- Prática: desenvolva projetos que envolvam manipulação de arrays e objetos, como uma lista de tarefas ou um catálogo de produtos.
.Catálogo de produtos: crie um catálogo de produtos em que os itens são armazenados em um array de objetos. Implemente funcionalidades como busca, filtragem por categoria e ordenação dos produtos.
.Calculadora de média: desenvolva uma calculadora que recebe um conjunto de números e calcula a média aritmética dos valores inseridos.

Semana 4:

° Assincronismo e Callbacks: estude o conceito de assincronismo em JavaScript, trabalhando com funções de retorno de chamada (callbacks) e a utilização de setTimeout e setInterval.
° Promises e async/await: aprenda sobre Promises e a nova sintaxe async/await para lidar com operações assíncronas de forma mais elegante.

- Prática: crie projetos que envolvam operações assíncronas, como o carregamento de dados de uma API ou a manipulação de arquivos.
.Carregamento de dados de uma API: utilize uma API pública para buscar informações, como previsão do tempo, notícias ou dados de filmes. Exiba essas informações na página após o carregamento dos dados assincronamente.
.Contador regressivo: crie um contador regressivo que exiba a contagem regressiva de um determinado tempo, como uma contagem regressiva para o ano novo.


//Exercicio function - Soma()
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(5, 5));


//Exrcicio Arrow function - divisão()
const divisão = (n1, n2) => {
    return n1 / n2
}
console.log(divisão(10, 2));


//const city = ['New York', 'Orlando', 'Madri', 'Barcelona', 'Paris', 'Monaco', 'São Paulo'];
//console.log(city[0].toString());
const funcionarios = [
    {funcionario: 1, nome: 'Vini', horasTrabalhadas: 45}, 
    {funcionario: 2, nome: 'Jorge', horasTrabalhadas: 44}, 
    {funcionario: 3, nome: 'Alice', horasTrabalhadas: 48}
];
const minHorasSemanal = 44;
 for (let i = 0; i < funcionarios.length; i++){
    const funcionario = funcionarios[i];
    const saldoHoras = funcionario.horasTrabalhadas - maxHorasSemanal;
    if (saldoHoras === ){
        console.log(`O funcionario ${funcionario.nome} não deve horas esta semana.`)
    }else{ 
        console.log(`O funcionario ${funcionario.nome} tem o saldo de horas no total de ${saldoHoras}H de trabalho.`);
    }
 }

 
//Objetos => objetos são uma forma de armazenar dados de um aforma mais organizada, por exemplo se quiser criar um a variavel variavel para todos os produtos de uma loja podemos fazer isso e ir colocando id, valor e nome de cada produto para deixar mais organizado e o codigo ter uma melhor leitura e execução. 
//Exemplo: 
const lanches = {BigMac:{id:'1n53sc', valor: 11, nome: 'BigMac'}, BigTasty: {id: '3e5ej4', valor: 15, nome: 'BigTasty'}};

const bebidas = {CocaCola:{id:'n42r3', valor: 7.90, nome: 'CocaCola'}, MilkShake:{id: 'k6dg45', valor: 13, nome: 'Milkshake'}};

const acompanhamentos = {Nuggets:{id: '0nt75', valor: 10.90, nome: 'Nuggets de Frango'}, Batata:{id:'9bt52', valor: 12.90, nome: 'Batata Frita'}}; 

let carrinho = {
    produto1:{
        id: lanches.BigTasty.id,
        valor: lanches.BigTasty.valor,
        nome: lanches.BigTasty.nome
    },
    produto2: {
        id: bebidas.MilkShake.id,
        valor: bebidas.MilkShake.valor,
        nome: bebidas.MilkShake.nome
    },
    produto3: {
        id: acompanhamentos.Batata.id,
        valor: acompanhamentos.Batata.valor,
        nome: acompanhamentos.Batata.nome
    }, 
}

for (let produto in carrinho) {
    const nome = carrinho[produto].nome;
    const valor = carrinho[produto].valor;
    const id = carrinho[produto].id;


    const produtoString = `Id: ${id}, Nome: ${nome}, Valor: ${valor}`;
    console.log(produtoString);
}


//EX2
const cadastro = {
    pessoa1: {
        nome: 'Vinicius',
        idade: 21
    },
    pessoa2: {
        nome: 'Jorge',
        idade: 38
    }
}

for(let pessoa in cadastro){
    const nome = cadastro[pessoa].nome;
    const idade = cadastro[pessoa].idade;

    const dadosString = `NOME: ${nome}  IDADE: ${idade}`
    console.log(dadosString);
}

*/