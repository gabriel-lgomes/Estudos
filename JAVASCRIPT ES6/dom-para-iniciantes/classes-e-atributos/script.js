// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => item.classList.add('ativo') );

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if(index != 0) {
    item.removeAttribute('class');
  }
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  console.log(img.hasAttribute('alt'));   
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://www.origamid.com"]');
linkExterno.setAttribute('href', '#teste');
