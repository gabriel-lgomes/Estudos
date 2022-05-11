// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function mudarClasse () {
//   document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar    = document.querySelector('[data-init]'); 
const pausar    = document.querySelector('[data-pause]');   
const cronometro = document.querySelector('[data-cronometro]'); 

iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('dblclick', resetarCronometro); 
pausar.addEventListener('click', pausarCronometro); 

let i = 0;
let timer;

function iniciarCronometro() {  
  timer = setInterval(() => {
    cronometro.innerText = i++; 
  }, 100); 

  iniciar.setAttribute('disabled', ''); 
}

function pausarCronometro () {
  clearInterval(timer);
  iniciar.removeAttribute('disabled'); 
}

function resetarCronometro() {
  cronometro.innerText = i;
  i = 0; 
}


