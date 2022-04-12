function initTabNav() {
  // Tabs
  const tabmenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  // adiciono a classe ativo ao primeiro item
  tabcontent[0].classList.add('ativo');

  // Verifico se existe conteúdo para executar o código
  if(tabmenu.length > 0 && tabcontent.length > 0) {
    function activeTab (index) {
      // Removo a classe ativo de todos os elementos
      tabcontent.forEach((item) => {
        item.classList.remove('ativo');
      });
    
      // Adiciono a classe ativo no elemento clicado
      tabcontent[index].classList.add('ativo');
    }
    
    // Adiciono o evento de clique nas imagens
    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });  
    });
  }
}

initTabNav();

// Accordion List
function initAccordion () { 
  const accordionList = document.querySelectorAll('.js-accordion dt'); 
  const activeClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  
    function activeAccordion () {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }

}

initAccordion();