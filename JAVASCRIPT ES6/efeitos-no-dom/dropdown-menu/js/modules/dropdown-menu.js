export default function initDropDownMenu() {
  
}

const dropdownElement = document.querySelectorAll('[data-dropdown]');

dropdownElement.forEach(menu => {
  menu.addEventListener('touchstart', handleClick);
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  });
});


function handleClick (event) {
  event.preventDefault();
  this.classList.toggle('active');  
}