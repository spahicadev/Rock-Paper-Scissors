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

//btns
backToHomepage.addEventListener('click', () => {
  window.open('/index.html', '_self')
})

//STATEs
let playerCurrentScore;
let computerCurrentScore;
let playerLastRoundScore;
let computerLastRoundScore;
let rounds;
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


function playingGame() {
movesYou.forEach((move) => {
  move.addEventListener('click', (e) => {
    if(e.target.id === 'rock') {
      playerMove = e.target.id;
      chosingYou.innerHTML = playerMove;
      console.log(playerMove);
      getRandomMove()
      console.log(computerMove);
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'rock' && computerMove === 'paper') {
        console.log('Computer win');
      } else if(playerMove === 'rock' && computerMove === 'scissors') {
        console.log('Player win')
      }
    }
    else if(e.target.id === 'paper') {
      playerMove = e.target.id
      console.log(playerMove);
      getRandomMove()
      console.log(computerMove);
    }
    else if(e.target.id === 'scissors') {
      playerMove = e.target.id
      console.log(playerMove);
      getRandomMove()
      console.log(computerMove);
    }
  })
})
};

playingGame()



























