export default function initAnimaCardapio() {

    //Debounce do Lodash, serve pra nao ativar a função de scroll varias vezes desnecessariamente
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
            const context = this;
            const later = function () {
                timeout = null;
                if(!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    //Elementos que devem ser animados e classe pra animar
    const elementAnimado = document.querySelectorAll('[data-animar]');
    const animarClasse = 'animar';

    function animeAoScroll() {
        //Formula pro windowTop ser 3/4 da tela, servindo pra todos os dipositivos
        const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
        elementAnimado.forEach((element) => {
            if((windowTop) > element.offsetTop) {
                element.classList.add(animarClasse);
            } else {
                element.classList.remove(animarClasse);
            }
        })
    }

    //Função já ativada pra nao ficar em branco quando o usuario acaba de entrar na pagina sem ter dado o scroll ainda
    animeAoScroll();

    // Ativa a função de scroll apenas se elementAnimado existir
    if(elementAnimado.length) {
        window.addEventListener('scroll', debounce(function() {
            animeAoScroll();
        }, 100));
    };
}