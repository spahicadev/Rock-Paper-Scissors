//DOM
const initialPage = document.querySelector('.initial-page');
const itemListRules = document.querySelector('.list-item-js');
const rulesPopup = document.querySelector('.rules-popup-js');
const popupCloseButton = document.querySelector('.close-button-js');
const aboutCloseButton = document.querySelector('.about-close-button-js');
const intrestingCloseButton = document.querySelector('.intresting-close-button-js');
const aboutPopup = document.querySelector('.about-popup-js');
const aboutIcon = document.querySelector('.about-document-js');
const intrestingPopup = document.querySelector('.intresting-popup-js');
const aboutIntrestingIcon = document.querySelector('.intresting-document-js');


itemListRules.addEventListener('click', (e) => {
  e.preventDefault();
  rulesPopup.classList.toggle('popup-show');
  initialPage.classList.toggle('inital-page-popup-active');
  popupCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    rulesPopup.classList.remove('popup-show');
    initialPage.classList.remove('inital-page-popup-active');
  })
})
aboutIcon.addEventListener('click', (e) => {
  e.preventDefault();
  aboutPopup.classList.toggle('popup-show');
  initialPage.classList.toggle('inital-page-popup-active');
  aboutCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPopup.classList.remove('popup-show');
    initialPage.classList.remove('inital-page-popup-active');
  })
})
aboutIntrestingIcon.addEventListener('click', (e) => {
  e.preventDefault();
  intrestingPopup.classList.toggle('popup-show');
  initialPage.classList.toggle('inital-page-popup-active');
  intrestingCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    intrestingPopup.classList.remove('popup-show');
    initialPage.classList.remove('inital-page-popup-active');
  })
})






