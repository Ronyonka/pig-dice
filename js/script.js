// Business logic
var scores, activePlayer, gamePlaying = true;
var roundScore = 0;
InitFunction();
function rollDice(){
// document.querySelector('.active').addEventListener('click', function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      // Add Score
      roundScore += dice;
      document.querySelector('#currentScore').textContent = roundScore;
    } else {
      alert('You rolled a one you LOSER!!!!!!!!!')
      hold();
    }
  }
  if (roundScore >= 50){
    alert('you win!')
  }
function hold(){
  $('.active').toggleClass()
}
}

// end of my code
