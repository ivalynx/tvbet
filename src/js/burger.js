export default function burger() {
   
  const burgerButton = document.querySelector('.burger-button');

  function burgerButtonIsClikable() {   
    const burgerButtonItems = Array.from(document.querySelectorAll('.burger-button__item'));
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuItems = Array.from(document.querySelectorAll('.burger-menu__item'));
    const body = document.querySelector('body');
    burgerButton.onclick = function(){
      burgerButton.classList.toggle('burger-button_close');
      burgerButtonItems.forEach(element => {
        element.classList.toggle('burger-button_close__item');
      });
      burgerMenu.classList.toggle('burger-menu_open');
      burgerMenuItems.forEach(element => {
        element.classList.toggle('burger-menu_open__item');
      });
      body.classList.toggle('showOnlyHeader');
    };
  }

  function checkWindowSize() {
    if( window.innerWidth < 768 ) {
      burgerButton.hidden = false;
      burgerButtonIsClikable();
    } else {
      burgerButton.hidden = true;
    }
  }
  checkWindowSize();

  window.onresize = () => {
    checkWindowSize();
  };
}