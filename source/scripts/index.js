/* в этот файл добавляет скрипты*/
const mainHeader = document.querySelector('.main-header');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

mainHeader.classList.remove('main-header--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', ()=> {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});
