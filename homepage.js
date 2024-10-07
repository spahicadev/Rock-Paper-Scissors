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


function openWindow(target, link) {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link)
  })
};
openWindow(goToPlay, '/playground.html', '_self');
openWindow(heroGoToPlay, '/playground.html', '_self');
openWindow(gitIcon, 'https://github.com/spahicadev');
openWindow(liICon, 'https://www.linkedin.com/in/spahica/');

function popupsManipulation(target, popup, page, close) {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup--show');
    page.classList.add('homepage--popup--show');
  close.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup--show');
    page.classList.remove('homepage--popup--show');
  })
  })
}
popupsManipulation(itemListRules, rulesPopup, initialPage, popupCloseButton);
popupsManipulation(aboutIcon, aboutPopup, initialPage, aboutCloseButton);
popupsManipulation(aboutIntrestingIcon, intrestingPopup, initialPage, intrestingCloseButton);








