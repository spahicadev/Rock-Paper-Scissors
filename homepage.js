//DOM
const initialPage = document.querySelector('.homepage');
const itemListRules = document.querySelector('.list-item-js');
const rulesPopup = document.querySelector('.rules-popup-js');
const popupCloseButton = document.querySelector('.close-button-js');
const aboutCloseButton = document.querySelector('.about-close-button-js');
const intrestingCloseButton = document.querySelector('.intresting-close-button-js');
const aboutPopup = document.querySelector('.about-popup-js');
const aboutIcon = document.querySelector('.about-document-js');
const intrestingPopup = document.querySelector('.intresting-popup-js');
const aboutIntrestingIcon = document.querySelector('.intresting-document-js');
const goToPlay = document.querySelector('.go-play-js');
const restartGame = document.querySelector('.restart-btn-js');
const backToHomepage = document.querySelector('.btn-homepage-js');
const heroGoToPlay = document.querySelector('.cta-button-js');
const gitIcon = document.querySelector('.git-js');
const liICon = document.querySelector('.li-js');

//DRY?!

//btns
goToPlay.addEventListener('click', () => {
  window.open('/playground.html', '_self');
})
heroGoToPlay.addEventListener('click', () => {
  window.open('/playground.html', '_self');
})
gitIcon.addEventListener('click', () => {
  window.open("https://github.com/spahicadev");
})
liICon.addEventListener('click', () => {
  window.open("https://www.linkedin.com/in/spahica/");
})

//Homepage DOM, I see similar code. So at the end i will try to do that with DRY conecpt(shorter)
itemListRules.addEventListener('click', (e) => {
  e.preventDefault();
  rulesPopup.classList.toggle('popup--show');
  initialPage.classList.toggle('homepage--popup--show');
  popupCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    rulesPopup.classList.remove('popup--show');
    initialPage.classList.remove('homepage--popup--show');
  })
})
aboutIcon.addEventListener('click', (e) => {
  e.preventDefault();
  aboutPopup.classList.toggle('popup--show');
  initialPage.classList.toggle('homepage--popup--show');
  aboutCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    aboutPopup.classList.remove('popup--show');
    initialPage.classList.remove('homepage--popup--show');
  })
})
aboutIntrestingIcon.addEventListener('click', (e) => {
  e.preventDefault();
  intrestingPopup.classList.toggle('popup--show');
  initialPage.classList.toggle('homepage--popup--show');
  intrestingCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    intrestingPopup.classList.remove('popup--show');
    initialPage.classList.remove('homepage--popup--show');
  })
})






