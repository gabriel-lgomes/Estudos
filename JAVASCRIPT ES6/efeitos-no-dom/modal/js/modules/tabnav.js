export default function initTabNav() {
  // Tabs
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  // adiciono a classe ativo ao primeiro item
  tabcontent[0].classList.add('ativo');

  // Verifico se existe conteúdo para executar o código
  if(tabmenu.length > 0 && tabcontent.length > 0) {
    function activeTab (index) {
      // Removo a classe ativo de todos os elementos
      tabcontent.forEach((item) => {
        item.classList.remove('ativo');
      });
      const direcao = tabcontent[index].dataset.anime;
      // Adiciono a classe ativo no elemento clicado
      tabcontent[index].classList.add('ativo', direcao);
    }
    
    // Adiciono o evento de clique nas imagens
    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });  
    });
  }
}