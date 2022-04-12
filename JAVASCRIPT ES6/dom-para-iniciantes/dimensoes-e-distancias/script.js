// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens () {
  const imgs = document.querySelectorAll('img');
  let somaWidthImgs = 0;
  imgs.forEach((img) => {
    somaWidthImgs += img.offsetWidth;
  });

  console.log(somaWidthImgs);
}

// Precisa usar essa função para o script rodar depois do carregamento das imagens
window.onload = function () {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((item) => {
  if(item.offsettWidth >= 48 && item.offsettHeight >= 48) {
    console.log(`${item} é recomendado.`) 
  } else {
    console.log(`${item} não é recomendado.`)
  }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tela = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if(tela) {
  menu.classList.add('menu-mobile');
}
