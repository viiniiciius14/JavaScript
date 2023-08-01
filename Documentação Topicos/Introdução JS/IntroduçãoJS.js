/*
JavaScript {
    Javascript é uma linguagem de programação muito utilizada para desenvolvimento web, talvez seja uma das linguagens mais famosas no mundo por ser uma linguagem facil de aprender e por muito dinamica em relação do que se pode fazer com ela. Com javascript podemos usar tanto para o lado do cliente quanto para o lado do servidor atraves de Node.Js. 
    Inicialmente la em 1995 A linguagem recebeu o nome LiveScript pelo criador Brendan Eich e ao longo dos anos foi evoluindo até chegar o ECMAScript em 2009 onde trouxe muitos recursos inovadores para linguagem e após isso em 2015 o ecmascript recebu uma atualização com mais recursos e melhorias.
}

Variaveis {
    As variaveis em javascript é uma maneira de armazenar dados, exemplo se o usuario esta navegando em um site e pra o site não ficar o tempo todo perguntando para o usuario algum tipo de dados tipo o nome ou idade, basta o usuario informar uma vez e armazenar em uma variavel.
    Exemplo: Usuario preciso que infrome seu nome -> 

    var name = 'Vini';
    console.log(name);

    Desta forma imprimimos o valor da variavel no console e se quisermos reutilizar o nome do usuario em alguma ocasião durante a navegação do usuario no site basta usar a variavel "name".

    Depois do ECMAScript 6 existem 3 tipos de variaveis que são var, let e const.

    var => é uma variavel mais antiga na linguagem e diferente dos outros tipos de variaveis, com var podemos declarar a variavel em escopo local ou global e utilizar em outro bloco de codigo, por exemplo, se declararmos um variavel var dentro de uma função e quiser reutilizar a mesma variavel fora do escopo desta função conseguiriarmos tranquilamente. 

    const => é uma variavel onde o valor dela é constante ou seja não pode ser alterado futuramente, temos que atribuir o valor quando declaramos ela.

    let => let é uma variavel restrita ao escopo onde é declarada diferente de var, se declararmos uma variavel do tipo let em uma função com o mesmo nome de uma variavel que esteja no escopo golbal, o valor não sera o mesmo. 
    Exemplo. 

    let name = 'jorge';
    function exibirnome(){
        let name;
        name = 'vini';
        console.log(name)
    };
    
    console.log(name);
    
    exibirnome();
    
}




*/
