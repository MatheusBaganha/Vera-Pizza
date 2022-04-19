import debounce from "./debounce.js";
export default function initAnimaCardapio() {
  //  Elementos que devem ser animados e classe pra animar
  const elementAnimado = document.querySelectorAll('[data-animar]');
  const animarClasse = 'animarCardapio';

  function animeAoScroll() {
  //  Formula pro windowTop ser 3/4 da tela, servindo pra todos os dipositivos
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    elementAnimado.forEach((element) => {
      if ((windowTop) > element.offsetTop) {
        element.classList.add(animarClasse);
      } else {
        element.classList.remove(animarClasse);
      }
    });
  }

  //  Função já ativada pra evitar o branco quando o usuario acaba de entrar na pagina sem o scroll
  animeAoScroll();

  // Ativa a função de scroll apenas se elementAnimado existir
  if (elementAnimado.length) {
    window.addEventListener('scroll', debounce(() => {
      animeAoScroll();
    }, 100));
  }
}
