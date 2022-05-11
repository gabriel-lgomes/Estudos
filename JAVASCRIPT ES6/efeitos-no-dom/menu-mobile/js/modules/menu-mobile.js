import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]'); 
  
  if(menuButton) {
    function openMenu(event) {
      menuList.classList.toggle('active');
      menuButton.classList.toggle('active');  
    } 
    menuButton.addEventListener(['touchstart'], openMenu);
    menuList.addEventListener(['touchstart'], openMenu);
  }
}