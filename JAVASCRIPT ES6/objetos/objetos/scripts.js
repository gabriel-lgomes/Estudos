// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxa = 0;
let valorRecebimento = 0;

transacoes.forEach((item) => {
  let formatValor = +item.valor.replace('R$ ','');  
  if(item.descricao.slice(0, 4) === 'Taxa') { 
    valorTaxa += formatValor;
  } else if (item.descricao.slice(0, 4) === 'Rece') {
    valorRecebimento += formatValor;
  }
}); 

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split("span").join("a"));              
              
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let qtdTaxa = 0;

transacoes2.forEach((item) => {
  item = item.toLowerCase().trim(); 
  if(item.slice(0, 4) === 'taxa') {
    qtdTaxa++
  }
});

console.log(qtdTaxa);


