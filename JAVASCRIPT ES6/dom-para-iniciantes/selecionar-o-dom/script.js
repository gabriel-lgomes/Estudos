// Retorne no console todas as imagens do site
const allImgs = document.querySelectorAll('img');
console.log(allImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2');
console.log(h2);

// Selecione o último p do site
const p = document.querySelector('p:last-child');
console.log(p);

