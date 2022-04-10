export default function initAbrirPergunta() {

const perguntas = document.querySelectorAll('[data-pergunta]');

function abrirPergunta(pergunta) {
    //Adição e remoção de classes para mostrar as respostas 
    pergunta.target.nextElementSibling.classList.toggle('abrir');
    pergunta.target.parentNode.classList.toggle('rodar');
    const aberto = pergunta.target.nextElementSibling.classList.contains('abrir');

    // Acessibilidade com aria-labels nas duvidas
    if(aberto) {
        pergunta.target.setAttribute('aria-label', 'Fechar Pergunta')
        pergunta.target.setAttribute('aria-expanded', aberto);
    } else {
        pergunta.target.setAttribute('aria-label', 'Abrir Pergunta')
        pergunta.target.setAttribute('aria-expanded', aberto);
    }
}

perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', abrirPergunta);
});

}