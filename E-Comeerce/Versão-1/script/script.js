document.addEventListener('DOMContentLoaded', function() {
    const produtos = {
        salgados: {
            produto1: {
                id: 'S1P001',
                nome: 'Sopa de Tomate', 
                preço: 26.90,                                          
                img: 'imagens/Salgados/Sopa de tomate.jpg'
            },
            produto2: {
                id: 'S2P002',
                nome: 'Macarrão Carbonara', 
                preço: 32.90, 
                img: 'imagens/Salgados/Carbonara.jpg'
            },
            produto3: {
                id: 'S3P003',
                nome: 'Macarrão com Camarão', 
                preço: 35.00, 
                img: 'imagens/Salgados/Macarrão com Camarão.jpg'
            },
            produto4: {
                id: 'S4P004',
                nome: 'Macarrão com Trufas', 
                preço: 35.90, 
                img: 'imagens/Salgados/Macarrão com Trufas.jpg'
            },
            produto5: {
                id: 'S5P005',
                nome: 'Panqueca Vegana', 
                preço: 25.00, 
                img: 'imagens/Salgados/Panqueca Vegana.jpg'
            },
            produto6: {
                id: 'S6P006',
                nome: 'Frango Assado', 
                preço: 31.00, 
                img: 'imagens/Salgados/Frango Assado.jpg'
            },
            produto7: {
                id: 'S7P007',
                nome: 'Picanha com Porção de fritas', 
                preço: 35.00, 
                img: 'imagens/Salgados/Picanha com batata frita.jpg'
            },
            produto8: {
                id: 'S8P008',
                nome: 'Salada com Camarão', 
                preço: 28.90, 
                img: 'imagens/Salgados/Salada com camarão.jpg'
            },
            produto9: {
                id: 'S9P009',
                nome: 'Salada com Carne', 
                preço: 28.90, 
                img: 'imagens/Salgados/Salada com carne.jpg'
            },
            produto10: {
                id: 'S10P0010',
                nome: 'Salmão com arroz Integral', 
                preço: 32.90, 
                img: 'imagens/Salgados/Salmão.jpg'
            }
        },
        doces: {
            produto1: {
                id: 'D1P001',
                nome: 'Cheesecake de Frutas', 
                preço: 26.90, 
                img: 'imagens/Sobremesas/Cheesecake com Frutas.jpg'
            },
            produto2: {
                id: 'D2P002',
                nome: 'Macarons', 
                preço: 32.90, 
                img: 'imagens/Sobremesas/Macarons.jpg'
            },
            produto3: {
                id: 'D3P003',
                nome: 'Bolo de Baunilha', 
                preço: 35.00, 
                img: 'imagens/Sobremesas/Bolo de Baunilha.jpg'
            },
            produto4: {
                id: 'D4P004',
                nome: 'Brownie com Amendoas', 
                preço: 35.90, 
                img: 'imagens/Sobremesas/Brownie com Amendoas.jpg'
            },
            produto5: {
                id: 'D5P005',
                nome: 'Brownie com Doce de Leite', 
                preço: 25.00, 
                img: 'imagens/Sobremesas/Brownie com Doce de Leite.jpg'
            }
        },
        bebidas: {
            produto1: {
                id: 'B1P001',
                nome: 'Drink Citrico', 
                preço: 19.90, 
                img: 'imagens/Bebidas/Drink Citrico.jpg'
            },
            produto2: {
                id: 'B2P002',
                nome: 'Smoothie de Morango', 
                preço: 22.90, 
                img: 'imagens/Bebidas/smoothie de morango.jpg'
            },
            produto3: {
                id: 'B3P003',
                nome: 'Smoothie de Manga', 
                preço: 22.90, 
                img: 'imagens/Bebidas/smoothie de manga.jpg'
            },
            produto4: {
                id: 'B4P004',
                nome: 'Água', 
                preço: 10.00, 
                img: 'imagens/Bebidas/Agua.jpg'
            },
            produto5: {
                id: 'B5P005',
                nome: 'Café', 
                preço: 7.90, 
                img: 'imagens/Bebidas/Cafe.jpg'
            }
        }
    };

});

//Carrinho 
function openCart(){
    const cart = document.getElementById('cart');
    cart.style.display = 'block'
    setTimeout(() => {
        cart.style.transition = 'all .2s ease-in-out'
        cart.style.right = '0'
    }, 200)
}
function closeCart(){
    const btnClose_cart = document.getElementById('cart');
    cart.style.right = '-1000';
    setTimeout(() => {
        cart.style.transition = 'all .2s ease-in-out'
        btnClose_cart.style.display = 'none';
    }, 200)
}


let cardapioAtivo = 'produto_salgado';
function identificarCard(btnClicado) {
    const idClicado = btnClicado;

    const cardapioAtual = document.getElementById(cardapioAtivo);
    cardapioAtual.classList.remove('fade-in');
    cardapioAtual.classList.add('fade-out');
    
    setTimeout(() => {
        cardapioAtual.style.display = 'none';
        cardapioAtual.classList.remove('fade-out');
        const cardapioNovo = document.getElementById(idClicado);
        cardapioNovo.style.display = 'flex';
        cardapioNovo.classList.add('fade-in')

        cardapioAtivo = idClicado;
    }, 300)

}


