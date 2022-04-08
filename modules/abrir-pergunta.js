export default function initAbrirPergunta() {

const containers = document.querySelectorAll('[data-container-pergunta]');
const perguntas = document.querySelectorAll('[data-pergunta]');
const respostas = document.querySelectorAll('[data-resposta]');

function abrirPergunta(pergunta) {
    if(pergunta.target) {
        pergunta.target.nextElementSibling.classList.toggle('abrir');
    }

}


perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', abrirPergunta);
});

}