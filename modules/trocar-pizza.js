export default function initTrocarPizza() {
    const circulos = Array.from(document.querySelectorAll('[data-circulo]'));
    const tituloPizza = document.querySelector('[data-tituloPizza]');
    const linha = document.querySelectorAll('[data-linha]');
    const texto = document.querySelector('[data-texto]');
    const imagem = document.querySelector('[data-imagem]');
    const animar = document.querySelector('[data-animar]');


    //Vai trocar a cor da linha dos dois titulos 
    function trocaCor(cor) {
        linha.forEach((linha) => {
            linha.style.backgroundColor = cor;
        })
    }


    //Muda a imagem da pizza para a selecionada
    function trocarImg(imagemLocal) {
        imagem.setAttribute('src', imagemLocal);
    }


    //Ativa a animação do css e verifica caso ja tenha a classe para nao ter erros na hora de animar, como por ex, clicar uma vez, e na segunda vez pela classe ja estar ativada, não ativar mais a animação. O setTimeout tambem impede erros, serve pra nao deixar tudo instantaneo e travar a animação.
    function animarConteudo() {
        if (animar.classList.contains('animar')) {
            animar.classList.remove('animar');
            setTimeout(() => {
                animar.classList.add('animar');
            }, 10);
        } else {
            animar.classList.add('animar');
        }
    }


    //Troca todo o conteudo sobre as pizzas de acordo com o circulo que foi clicado
    function trocarConteudo(conteudo) {
        if(conteudo.currentTarget === circulos[1]) {
            tituloPizza.innerText = 'Pizza Marguerita';
            texto.innerText = 'Sabor ícone da Itália que leva apenas molho, muçarela, tomate e manjericão. É uma ótima opção para quem não come carne.'
            trocaCor('white');
            trocarImg('img/cheese-pizza2.png')

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

    //Eventos das funções
    circulos.forEach((circulo) => {
        circulo.addEventListener('click', trocarConteudo);
        circulo.addEventListener('click', animarConteudo);
    })

}