//DOM
const playgroundPage = document.querySelector('.playground-js');
const restartGame = document.querySelector('.restart-btn-js');
const backToHomepage = document.querySelector('.btn-homepage-js');
const currentRoundScoreYou = document.querySelector('.current-round-score-you');
const currentRoundScoreComputer = document.querySelector('.current-round-score-computer');
const lastRoundScoreYou = document.querySelector('.last-round-score-you');
const lastRoundScoreComputer = document.querySelector('.last-round-score-computer');
const totalRounds = document.querySelector('.total-rounds');
const AvgWinsYou = document.querySelector('.you-avg-wins');
const AvgWinsComputer = document.querySelector('.computer-avg-wins');
const movesYou = document.querySelectorAll('.playground__box-player-move');
const chosingYou = document.querySelector('.chosed-move-you');
const movesComputer = document.querySelectorAll('.playground__box-computer-choosing');
const computerBoxMoves = document.querySelector('.computer-box');
const winPopup = document.querySelector('.popup-win-js');
const popupWinText = document.querySelector('.win-text-js');
const ctaPlayAgain = document.querySelector('.cta-play-again-js');
const clearSession = document.querySelector('.clear-session-btn-js');
const clearSessionPopup = document.querySelector('.popup-alert-js');
const deleteSessionBtn = document.querySelector('.delete-js');
const keepPlayingBtn = document.querySelector('.keep-js');

//btns
backToHomepage.addEventListener('click', () => {
  window.open('https://spahicadev.github.io/Rock-Paper-Scissors/index.html', '_self')
})

//STATEs
let rounds = localStorage.getItem('key') || 0;
let allRounds = JSON.parse(localStorage.getItem('keyArr')) || [];
let playerCurrentScore = 0;
let computerCurrentScore = 0;
let playerWins = 0;
let computerWins = 0;
let playerLastRoundScore;
let computerLastRoundScore;
allRounds.length > 0 ? playerLastRoundScore = allRounds[allRounds.length - 1 ].playerScore : playerLastRoundScore = 0
allRounds.length > 0 ? computerLastRoundScore = allRounds[allRounds.length - 1 ].computerScore : computerLastRoundScore = 0
let playerAvgWins;
let computerAvgWins;
allRounds.length > 0 ? playerAvgWins = allRounds[allRounds.length - 1].playerWins / allRounds.length : playerAvgWins = 0;
allRounds.length > 0 ? computerAvgWins = allRounds[allRounds.length - 1].computerWins / allRounds.length : computerAvgWins = 0;
const maxRounds = 3;
const moves = ['rock', 'paper', 'scissors'];
let playerMove;
let computerMove;

//localStorage
totalRounds.innerHTML = localStorage.getItem('key') || rounds;
lastRoundScoreYou.innerHTML = playerLastRoundScore;
lastRoundScoreComputer.innerHTML = computerLastRoundScore;
console.log(playerAvgWins, computerAvgWins);
AvgWinsYou.innerHTML = parseFloat(playerAvgWins).toFixed(2);
AvgWinsComputer.innerHTML = parseFloat(computerAvgWins).toFixed(2);
currentRoundScoreYou.innerHTML = playerCurrentScore;
currentRoundScoreComputer.innerHTML = computerCurrentScore;

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
  if(playerCurrentScore === maxRounds) {
    winPopup.classList.add('popup--show');
    playgroundPage.classList.add('playground--popup-show');
    popupWinText.innerHTML = `Player win <br> Player score: ${playerCurrentScore} <br> Computer score: ${computerCurrentScore}`;
    playerWins++; 
  
    allRounds.push({
      gameId: rounds,
      playerScore: playerCurrentScore,
      computerScore: computerCurrentScore,
      playerWins: playerWins,
      computerWins: computerWins,
    });
    localStorage.setItem('keyArr', JSON.stringify(allRounds));
    rounds++;
    localStorage.setItem('key', rounds);
    totalRounds.innerHTML = localStorage.getItem('key') || rounds;
    playerAvgWins = allRounds[allRounds.length - 1].playerWins / allRounds.length;
    computerAvgWins = allRounds[allRounds.length - 1].computerWins / allRounds.length;
    AvgWinsYou.innerHTML = parseFloat(playerAvgWins).toFixed(2);
    AvgWinsComputer.innerHTML = parseFloat(computerAvgWins).toFixed(2);
    playerLastRoundScore = allRounds[allRounds.length - 1].playerScore;
    computerLastRoundScore = allRounds[allRounds.length - 1].computerScore;
    lastRoundScoreYou.innerHTML = playerLastRoundScore;
    lastRoundScoreComputer.innerHTML = computerLastRoundScore;    
  } 
  else if(computerCurrentScore === maxRounds) {
    winPopup.classList.add('popup--show');
    playgroundPage.classList.add('playground--popup-show');
    popupWinText.innerHTML = `Computer win <br> Computer score: ${computerCurrentScore} <br> Player score: ${playerCurrentScore}`;
    computerWins++;

    allRounds.push({
      gameId: rounds,
      playerScore: playerCurrentScore,
      computerScore: computerCurrentScore,
      playerWins: playerWins,
      computerWins: computerWins,
    })
    localStorage.setItem('keyArr', JSON.stringify(allRounds));
    rounds++;
    localStorage.setItem('key', rounds);
    totalRounds.innerHTML = localStorage.getItem('key') || rounds;
    computerAvgWins  = allRounds[allRounds.length - 1].computerWins / allRounds.length;
    playerAvgWins = allRounds[allRounds.length - 1].playerWins / allRounds.length;
    AvgWinsComputer.innerHTML = parseFloat(computerAvgWins).toFixed(2);
    AvgWinsYou.innerHTML = parseFloat(playerAvgWins).toFixed(2);
    computerLastRoundScore = allRounds[allRounds.length - 1].computerScore;
    playerLastRoundScore = allRounds[allRounds.length - 1].playerScore;
    lastRoundScoreComputer.innerHTML = computerLastRoundScore;
    lastRoundScoreYou.innerHTML = playerLastRoundScore;
  } 

  ctaPlayAgain.addEventListener('click', (e) => {
    e.preventDefault();
    winPopup.classList.remove('popup--show');
    playgroundPage.classList.remove('playground--popup-show');
    resetStates();
  })
  
}

function playingGame() {
movesYou.forEach((move) => {
  move.addEventListener('click', (e) => {
    if(e.target.id === 'rock') {
      playerMove = e.target.id;
      chosingYou.innerHTML = playerMove;
      getRandomMove();
      renderMoveIcon(computerMove);     
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'rock' && computerMove === 'paper') {
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        checkWinner();
      } else if(playerMove === 'rock' && computerMove === 'scissors') {
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        checkWinner();
      }
    }
    else if(e.target.id === 'paper') {
      playerMove = e.target.id;
      chosingYou.innerHTML = playerMove;
      getRandomMove();
      renderMoveIcon(computerMove);
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'paper' && computerMove === 'rock') {
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        checkWinner();
      } else if(playerMove === 'paper' && computerMove === 'scissors') {
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        checkWinner();
      }
    }
    else if(e.target.id === 'scissors') {
      playerMove = e.target.id;
      chosingYou.innerHTML = playerMove;
      getRandomMove();
      renderMoveIcon(computerMove);
      if(playerMove === computerMove) {
        console.log('TIE');
      } else if(playerMove === 'scissors' && computerMove === 'rock') {
        computerCurrentScore++;
        currentRoundScoreComputer.innerHTML = computerCurrentScore;
        checkWinner();
      } else if(playerMove === 'scissors' && computerMove === 'paper') {
        playerCurrentScore++;
        currentRoundScoreYou.innerHTML = playerCurrentScore;
        checkWinner();
      }
    }
  })
})
};
playingGame();

const resetStates = () => {
  playerCurrentScore = 0;
  computerCurrentScore = 0;
  currentRoundScoreComputer.innerHTML = computerCurrentScore;
  currentRoundScoreYou.innerHTML = playerCurrentScore;
  movesComputer[0].innerHTML = `Choosing...`
  computerBoxMoves.innerHTML = ``;
  computerBoxMoves.innerHTML = `Will take...`;
  chosingYou.innerHTML = `Choosing...`
  playerMove = null;
  computerMove = null;
}
restartGame.addEventListener('click', resetStates);

function alertPlayer() {
  clearSessionPopup.classList.add('popup--show');
  playgroundPage.classList.add('playground--popup-show');
  deleteSessionBtn.addEventListener('click', () => {
  playerCurrentScore = 0;
  computerCurrentScore = 0;
  currentRoundScoreComputer.innerHTML = computerCurrentScore;
  currentRoundScoreYou.innerHTML = playerCurrentScore;
  movesComputer[0].innerHTML = `Choosing...`
  computerBoxMoves.innerHTML = ``;
  computerBoxMoves.innerHTML = `Will take...`;
  chosingYou.innerHTML = `Choosing...`
  playerMove = null;
  computerMove = null;
  localStorage.removeItem('keyArr')
  localStorage.removeItem('key')
  window.reload();
  totalRounds.innerHTML = 0;
  lastRoundScoreYou.innerHTML = 0;
  lastRoundScoreComputer.innerHTML = 0;
  console.log(playerAvgWins, computerAvgWins);
  AvgWinsYou.innerHTML = 0;
  AvgWinsComputer.innerHTML = 0;
  clearSessionPopup.classList.remove('popup--show');
  playgroundPage.classList.remove('playground--popup-show');
  })
  keepPlayingBtn.addEventListener('click', () => {
    clearSessionPopup.classList.remove('popup--show');
    playgroundPage.classList.remove('playground--popup-show');
  })
};

clearSession.addEventListener('click', alertPlayer);























