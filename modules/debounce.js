export default function debounce(callback, delay) {
  //  serve pra nao ativar a função de scroll varias vezes desnecessariamente
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay)
  }
}
