export default function initMenuMobile() {
const btnMenu = document.querySelector('[data-btnMenu]');

function toggleMenu(event) {
    // Ativação do menu mobile ao clique atraves de ativação e remoção de classes
    if(event.type === 'touchstart') event.preventDefault();
    const navMenu = document.querySelector('[data-nav]');
    navMenu.classList.toggle('aberto');

    // Acessibilidade com arias
    const aberto = navMenu.classList.contains('aberto');
    event.currentTarget.setAttribute('aria-expanded', aberto);
    if(aberto) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMenu.addEventListener('touchstart', toggleMenu);
btnMenu.addEventListener('click', toggleMenu);

}