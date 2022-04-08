export default function initAbrirPergunta() {

const perguntas = document.querySelectorAll('[data-pergunta]');

function abrirPergunta(pergunta) {
    pergunta.target.nextElementSibling.classList.toggle('abrir');
    pergunta.target.parentNode.classList.toggle('rodar');
}


perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', abrirPergunta);
});


}