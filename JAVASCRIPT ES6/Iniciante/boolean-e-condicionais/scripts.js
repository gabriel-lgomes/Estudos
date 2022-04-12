// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 25,
    idadeParente = 30;

if (minhaIdade > idadeParente) {
  console.log('É maior');
} else if (minhaIdade === idadeParente) {
  console.log('É igual');
}
else {
  console.log('É menor');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Retorna 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // TRUE
var idade = 28; // TRUE
var possuiDoutorado = false; // FALSE
var empregoFuturo; // FALSE
var dinheiroNaConta = 0; //FALSE

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('Brasil tem mais habitantes');
} else {
  console.log('Brasil tem menos habitantes');
} 

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// FALSE

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// CAO