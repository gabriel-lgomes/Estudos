const formulario = document.querySelector('.contato');
const btn = document.querySelector('button');
const mensagem = document.querySelector('h3');


formulario.addEventListener('change', saveValues);


const valuesForm = {

}; 


function saveValues(event) {
  const name = event.target.name; 
  const value = event.target.value;

  valuesForm[name] = value; 
  saveStorage(name, value);
}

function saveStorage (name, value) {
  localStorage[name] = value;
}

function setStorage () {
  mensagem.innerText = localStorage.nome;
}
 
setStorage();

let pessoa = {nome: 'Matheus', idade: 29}

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

console.log(pessoaObj.nome); // Matheus