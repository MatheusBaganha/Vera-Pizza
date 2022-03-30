export default function initTrocarPizza() {
    const circulos = Array.from(document.querySelectorAll('[data-circulo]'));
    const tituloPizza = document.querySelector('[data-tituloPizza]');
    const linha = document.querySelectorAll('[data-linha]');
    const texto = document.querySelector('[data-texto]');
    const imagem = document.querySelector('[data-imagem]');

    function trocaCor(cor) {
        linha.forEach((linha) => {
            linha.style.backgroundColor = cor;
        })
    }

    function trocarImg(imagemLocal) {
        imagem.setAttribute('src', imagemLocal);
    }

    function trocarConteudo(conteudo) {
        if(conteudo.currentTarget === circulos[1]) {
            tituloPizza.innerText = 'Pizza Marguerita';
            texto.innerText = 'Sabor ícone da Itália que leva apenas molho, muçarela, tomate e manjericão. É uma ótima opção para quem não come carne.'
            trocaCor('white');
            trocarImg('img/pizza-margherita.png')

        } else if(conteudo.currentTarget === circulos[2]) {
            tituloPizza.innerText = 'Pizza Portuguesa';
            texto.innerText = 'Ovos, cebola, azeitona, ervilha, queijo e presunto dão sabor a segunda pizza mais queridinha dos brasileiros.';
            trocaCor('#CE3C4D');
            trocarImg('img/cheese-pizza3.png')


        } else {
            tituloPizza.innerText = 'Pizza de Calabresa';
            texto.innerText = 'A pizza que comemos hoje, redonda com molho de tomate e coberta com queijo, surgiu em Nápoles, Itália, por volta do século 18. Só que a massa em forma de disco assada em forno e com cobertura é uma criação bem mais antiga.'
            trocaCor('#008D44');
            trocarImg('img/pizza-calabresa.png')

        }

    }


    circulos.forEach((circulo) => {
        circulo.addEventListener('click', trocarConteudo);
        circulo.addEventListener('touchstart', trocarConteudo);
    })

}