export default function initPedirPizza() {
    const modal = document.querySelector('[data-modal]');
    const btnPedir = document.querySelector('[data-pedir]');
    const btnFechar = document.querySelector('[data-fechar]');
    
    function abrirForm() {
        modal.classList.add('mostrar');
    }
    
    
    btnPedir.addEventListener('click', abrirForm);


    modal.addEventListener('click', (elemento) => {
        if(elemento.target === modal || elemento.target === btnFechar) {
        modal.classList.remove('mostrar');
        }
    });
}