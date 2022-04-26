// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const curso = document.querySelectorAll('.curso');
const arrayCurso = Array.from(curso);

const cursoInfo = arrayCurso.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});
 
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaioresQue100 = numeros.filter(i => i > 45);
console.log(numerosMaioresQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const temBaixo = instrumentos.some(i => i === 'Baixo');
console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const limpaValor = +item.preco.replace('R$', '').replace(',', '.');
  return acumulador + limpaValor;
}, 0);

console.log('O valor total é ' + valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));