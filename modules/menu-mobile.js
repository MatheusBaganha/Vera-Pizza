export default function initMenuMobile() {
const btnMenu = document.querySelector('[data-btnMenu]');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const navMenu = document.querySelector('[data-nav]');
    navMenu.classList.toggle('aberto');
    const aberto = navMenu.classList.contains('aberto');
    event.currentTarget.setAttribute('aria-expanded', aberto);
    if(aberto) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

}