// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function toggleClass(event) {
  event.preventDefault(); 

  links.forEach((link) => {
    link.classList.remove('ativo');
  })

  this.classList.add('ativo'); 
}

links.forEach((link) => {
  link.addEventListener('click', toggleClass);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll('body *');

// function clicou(event) {
//   console.log(event.target);
// }

body.forEach((item) => {
  item.addEventListener('click', clicou)
});


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function clicou(event) {
  const elemento = event.target;
  console.log(elemento);
  elemento.remove();

}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentaTexto(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-maior');
  }
}

 

window.addEventListener('keydown', aumentaTexto);
