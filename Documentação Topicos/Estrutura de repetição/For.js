/* 
//For => A estrutura de repetição tem a mesma funcionalidade do While porem de uma forma mais facil. 
Exemplo: 

var num = 1;

while(num <= 10){
    console.log(`O número está em ${num}`);
    num++
};
console.log('Fim!');

//Agora irei replicar a mesma logica porem usando For no lugar do While.
for(var num = 1; num <= 10; num++){
    console.log(`O número etsá em ${num}`);
};
*/

const funcionarios = {funcionario1:{cargo: 'Motorista', salarioH: 9, horaSemanal: 44, nome: 'Claudio Santana', id: 'M0c329'}, funcionario2:{cargo: 'Gerente de loja', salarioH: 11, horaSemanal: 40, nome: 'Matheus Santos', id: 'G0m311'}};

for(var i = 0; i <= Object.keys(funcionarios).length; i++){
    var horaSemanal = funcionarios['funcionario'+i].horaSemanal;
    var salarioH = funcionarios['funcionario'+i].salarioH;
    var salarioMensal = (horaSemanal * 4) * salarioH;
    console.log(`
    Nome: ${funcionarios['funcionario'+i].nome}
    Cargo: ${funcionarios['funcionario'+i].cargo}
    Salário: R$${salarioMensal.toFixed()}
    `)
};