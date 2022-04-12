// Crie uma função para verificar se um valor é Truthy
function isTrue (valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function retornaQuadrado (lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNome(nome, sobrenome) { 
  return `O meu nome completo é ${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function parOuimpar (numero) {
  if (numero % 2 == 0) {
    return 'O número é par'
  } else {
    return 'O número é impar'
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado (dado) { 
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
var nome = 'Gabriel ';
var sobrenome = 'Lopes';

addEventListener('scroll', function() {
  return console.log(nome + sobrenome);
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) { 
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
