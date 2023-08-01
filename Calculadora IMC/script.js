function calcular() {
    let text = document.getElementById('text');
    let dica = document.getElementById('dica');
    let areaRes = document.getElementById('resultado');

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var nome = document.getElementById('nome').value;

    let calculo = peso / (altura*altura);

    if(calculo < 18.5){
        text.innerText = `IMC: ${calculo.toFixed()} → MAGREZA`;
        dica.innerText = `${nome.charAt(0).toUpperCase() + nome.slice(1)} seria importante que você procure com urgencia um profissional da saúde para que possa te auxiliar de maneira correta.`;
        areaRes.style.opacity = '100%'; areaRes.style.height = '260px'; areaRes.style.transition = 'all .5s ease-in-out';
        text.style.opacity = '100%'
        dica.style.opacity = '100%'
    }else if (calculo > 18.5 &&  calculo < 24.9 ){
        text.innerText = `IMC: ${calculo.toFixed()} → NORMAL`;
        dica.innerText = `Otimo ${nome.charAt(0).toUpperCase() + nome.slice(1)}! Mantenha seu peso atual para manter a sua saude em dia. Se alimente bem, se exercite e beba bastante água. :)`;
        areaRes.style.opacity = '100%'; areaRes.style.height = '260px'; areaRes.style.transition = 'all .5s ease-in-out';
        text.style.opacity = '100%';
        dica.style.opacity = '100%';
    }else if(calculo > 25 && calculo < 29.9){
        text.innerText = `IMC: ${calculo.toFixed()} → SOBREPESO`;
        dica.innerText = `${nome.charAt(0).toUpperCase() + nome.slice(1)} seria importante procurar um profissional da saúde para te auxiliar a retomar o seu peso ideal.`;
        areaRes.style.opacity = '100%'; areaRes.style.height = '260px'; areaRes.style.transition = 'all .5s ease-in-out';
        text.style.opacity = '100%';
        dica.style.opacity = '100%';
    }else if(calculo > 30 && calculo < 39.9){
        text.innerText = `IMC: ${calculo.toFixed()} → OBESIDADE (GRAU 1)`;
        dica.innerText = `${nome.charAt(0).toUpperCase() + nome.slice(1)} seria importante que você procure com urgencia um profissional da saúde para que possa te auxiliar de maneira correta.`;
        areaRes.style.opacity = '100%'; areaRes.style.height = '260px'; areaRes.style.transition = 'all .5s ease-in-out';
        text.style.opacity = '100%';
        dica.style.opacity = '100%';
    }else if(calculo > 40){
        text.innerText = `IMC: ${calculo.toFixed()} → OBESIDADE (GRAU 2)`;
        dica.innerText = `${nome.charAt(0).toUpperCase() + nome.slice(1)} seria importante que você procure com urgencia um profissional da saúde para que possa te auxiliar de maneira correta.`;
        areaRes.style.opacity = '100%'; areaRes.style.height = '260px'; areaRes.style.transition = 'all .5s ease-in-out';
        text.style.opacity = '100%';
        dica.style.opacity = '100%';
    }
}

function reset(){
    let text = document.getElementById('text');
    let dica = document.getElementById('dica');
    let areaRes = document.getElementById('resultado');
    let refresh = document.getElementById('refresh_icon');

    peso.value = '';
    altura.value = '';
    nome.value = '';

    areaRes.style.opacity = '0%'; areaRes.style.height = '0px'; areaRes.style.transition = 'all .4s ease-in-out';
    text.style.opacity = '0%';
    dica.style.opacity = '0%';
    
    refresh.style.animation = 'rotate 1s linear';
    setTimeout(() => {
        refresh.style.animation = '';
    }, 1000)
}