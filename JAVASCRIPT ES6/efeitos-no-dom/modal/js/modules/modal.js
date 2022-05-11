export default function initModal () { 
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modal = document.querySelector('[data-modal="modal-container"]');

  if(botaoAbrir && botaoFechar && modal) {    

    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle('ativo');
    }
  
    function fecharModalFora(event) {  
      event.target === this ? toggleModal(event) : null;
    }
    
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', fecharModalFora);
  }
}

 