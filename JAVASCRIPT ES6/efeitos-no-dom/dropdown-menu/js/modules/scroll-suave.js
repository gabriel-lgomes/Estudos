// ScrollTo
export default function initScrollSuave () {
  // Pego todos os links que são internos
  const linksInternos =  document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollTo (event) {
    event.preventDefault();
    // Pego o atributo href do link clicado
    const href = event.currentTarget.getAttribute('href');
    // Pego a sessão baseada no href
    const section = document.querySelector(href);

    // Ativo a função de scroll no navegador
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });   
  }

  // Adiciono o evento de click nos links e envoco a função
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollTo);
  });
}