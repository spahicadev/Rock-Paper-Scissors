//DOM
const restartGame = document.querySelector('.restart-btn-js');
const backToHomepage = document.querySelector('.btn-homepage-js');
const currentRoundScoreYou = document.querySelector('.current-round-score-you');
const currentRoundScoreComputer = document.querySelector('.current-round-score-computer');
const lastRoundScoreYou = document.querySelector('.last-round-score-you');
const lastRoundScoreComputer = document.querySelector('.last-round-score-computer');
const totalRounds = document.querySelector('.total-rounds');
const AvgWinsYou = document.querySelector('.you-avg-wins');
const AvgWinsComputer = document.querySelector('.computer-avg-wins');
const movesYou = document.querySelectorAll('.moves');
const chosingYou = document.querySelector('.chosed-move-you');
const movesComputer = document.querySelectorAll('.chosed-move-computer');
const computerBoxMoves = document.querySelector('.computer-box');
const winPopup = document.querySelector('.popup-win-js');
const playgroundPage = document.querySelector('.playground-page');

//btns
backToHomepage.addEventListener('click', () => {
  window.open('/index.html', '_self')
})

//STATEs
let playerCurrentScore = 0;
let computerCurrentScore = 0;
let playerLastRoundScore = 0;
let computerLastRoundScore = 0;
let rounds = 0;
let playerAvgWins;
let computerAvgWins;
let allRounds = [];
const moves = ['rock', 'paper', 'scissors'];
let playerMove;
let computerMove;
const maxRounds = 3;

function getRandomMove() {
  return computerMove = moves[Math.floor(Math.random() * moves.length)];
}

function renderMoveIcon(move) {
  if(computerMove === move) {
    movesComputer[0].innerHTML = move
    movesComputer[1].remove()
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/${move}.svg`);   
    computerBoxMoves.innerHTML = `<img class="moves" src=${img.src}>`
}
}

function checkWinner() {
  if(playerCurrentScore === 3) {
    winPopup.classList.toggle('popup-show');
    playgroundPage.classList.toggle('playground-page-popup-active');
  } 
  else if(computerCurrentScore === 3) {
    winPopup.classList.toggle('popup-show');
    playgroundPage.classList.toggle('playground-page-popup-active');
  } 

}

function playingGame() {
movesYou.forEach((move) => {
  move.addEventListener('click', (e) => {
    if(e.target.id === 'rock') {
      playerMove = e.target.id;
      chosingYou.innerHTML = playerMove;
      console.log(playerMove);
      getRandomMove()
      renderMoveIcon(computerMove);
      console.log(computerMove);      
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'rock' && computerMove === 'paper') {
        console.log('Computer win');
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        console.log(computerCurrentScore);
        checkWinner();
      } else if(playerMove === 'rock' && computerMove === 'scissors') {
        console.log('Player win');
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        console.log(playerCurrentScore);
        checkWinner();
      }
    }
    else if(e.target.id === 'paper') {
      playerMove = e.target.id;
      console.log(playerMove);
      chosingYou.innerHTML = playerMove;
      getRandomMove()
      renderMoveIcon(computerMove);
      console.log(computerMove);
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'paper' && computerMove === 'rock') {
        console.log('Player win');
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        console.log(computerCurrentScore);
        checkWinner();
      } else if(playerMove === 'paper' && computerMove === 'scissors') {
        console.log('Computer win')
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        console.log(computerCurrentScore);
        checkWinner();
      }
    }
    else if(e.target.id === 'scissors') {
      playerMove = e.target.id
      chosingYou.innerHTML = playerMove;
      console.log(playerMove);
      getRandomMove()
      renderMoveIcon(computerMove);
      console.log(computerMove);
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'scissors' && computerMove === 'rock') {
        console.log('Computer win');
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        console.log(computerCurrentScore);
        checkWinner();
      } else if(playerMove === 'scissors' && computerMove === 'paper') {
        console.log('Player win')
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        console.log(playerCurrentScore);
        checkWinner();
      }
    }
  })
})
};

playingGame();





























