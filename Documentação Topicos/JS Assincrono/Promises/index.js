
const myPromise = new Promise((resolve, reject) => {
    const name = 'jorge';
    if(name === 'vini'){
        resolve('Usuario ja possui cadastro!')    
    }else{
        reject('Usuario não encontrado.')
    }
});

myPromise.then((data) => {
    console.log(data);
})

//
const myPromise2 = new Promise((resolve, reject) => {
    const name = 'jorge';
    if(name === 'vini'){
        resolve('Usuario ja possui cadastro!')    
    }else{
        reject('Usuario inexistente.')
    }
});

myPromise2.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log('Erro encontrado ->' + ' ' + err)
})


//fetch request

const userName = 'viiniiciius14';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application.vnd.github.v3+json',
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome de usuário é: ${data.name}`)
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})