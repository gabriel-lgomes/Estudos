// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
 
const form = document.querySelector('#form-endereco');
const cep = document.querySelector("#cep");
const buttonSearch = document.querySelector('.search'); 

function mostrarEndereco (value) {
  fetch(`https://viacep.com.br/ws/${value}/json/`)
  .then(response => response.json())
  .then(response => {
    form.endereco.value = response.logradouro;
    form.bairro.value = response.bairro;
    form.cidade.value = response.localidade;
    form.uf.value = response.uf;
  });
}

buttonSearch.addEventListener('click', (e) =>{
  e.preventDefault();
  const value = form.cep.value; 
  mostrarEndereco(value);
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const exibirValor = document.querySelector('[data-valor]'); 

function valorBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(response => {
    const valor = response.BRL.buy;
    const valorFormatado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    exibirValor.innerText = valorFormatado;
    console.log(valorFormatado);
  });
}

valorBitcoin();

setInterval(valorBitcoin, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnPiada = document.querySelector('[data-gerar]');
const piada = document.querySelector('[data-piada]');

function gerarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(response => {
    piada.innerText = response.value;
  });
}

btnPiada.addEventListener('click', gerarPiada);