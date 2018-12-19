// Business logic
var scores, activePlayer, gamePlaying = true;
var roundScore = 0;
var globalScore = 0;
var currentPlayer = 1;
InitFunction();
function rollDice(){
// document.querySelector('.active').addEventListener('click', function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (this.currentPlayer = 1){
      if (dice !== 1) {
        document.querySelector('#rollValue1').textContent = dice;
        // Add Score
        roundScore += dice;
        document.querySelector('#currentScore1').textContent = roundScore;
      } else {
        alert('Player 1 rolled a one!')
        document.querySelector('#rollValue1').textContent = 0;
        document.querySelector('#currentScore1').textContent = 0;
        hold();
      }
    }else if (this.currentPlayer = 2){
          if (dice !== 1) {
            document.querySelector('#rollValue2').textContent = dice;
            // Add Score
            roundScore += dice;
            document.querySelector('#currentScore2').textContent = roundScore;
          } else {
            alert('Player 2 rolled a one!')
            document.querySelector('#rollValue2').textContent = 0;
            document.querySelector('#currentScore2').textContent = 0;
            hold();
          }
        }
  }
  if (roundScore >= 100){
    alert('you win!')
  }
}
function hold(){
  if (this.currentPlayer = 1){
    this.currentPlayer = 2;

  } else if  (currentPlayer = 2){
    currentPlayer = 1;
  }
}

// end of my code
