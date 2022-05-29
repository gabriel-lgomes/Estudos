import initAnimaNumeros from './anima-numeros.js';

export default function initAnimaisFetch() {
  async function animaisFetch (url) {
    try {
      const animais = await fetch(url);
      const animaisJSON = await animais.json();  
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        document.querySelector('.numeros-grid').appendChild(divAnimal);
      }); 
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }  
  
  animaisFetch('./animaisapi.json');   

  function createAnimal (animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal'); 
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;    
    return div;  
  } 
}
 
