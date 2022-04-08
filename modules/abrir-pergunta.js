export default function initAbrirPergunta() {

const containers = document.querySelectorAll('[data-container-pergunta]');
const perguntas = document.querySelectorAll('[data-pergunta]');
const respostas = document.querySelectorAll('[data-resposta]');

function abrirPergunta(container) {
    if(container.target) {
        container.target.nextElementSibling.classList.toggle('abrir');
    }
}


containers.forEach((container) => {
    container.addEventListener('click', abrirPergunta);
});

}