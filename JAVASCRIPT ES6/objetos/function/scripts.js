// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criaElemento(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? element.innerText = conteudo : null;  
  return element;
}

console.log(criaElemento('h1', 'titulo', 'Olá mundo!'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criaElemento.bind(null, 'h1', 'titulo');
console.log(h1Titulo('Teste título'));
