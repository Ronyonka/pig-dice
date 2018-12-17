// Business logic
var scores , activePlayer , gamePlaying = true;
var roundScore =  0;
InitFunction();
function rollDice() {
  // var summation = 0;
  // var dice = Math.floor(Math.random() * 6) + 1;

  // if (dice != 1) {
  //   summation += dice
  //   $("#currentScore").text(summation);
  // } else {
  //   alert('you rolled a one')
  // }
  // document.querySelector('.btn-roll').addEventListener('click', function() {

      if(gamePlaying) {
          // 1. Random number
          var dice = Math.floor(Math.random() * 6) + 1;

          // // 2. Display the result
          // var diceDOM = document.querySelector('.dice');
          // diceDOM.style.display = 'block';
          // diceDOM.src = 'dice-' + dice + '.png';

          // 3. Update the round score only if the rolled number is NOT 1
          if (dice !== 1) {
              // Add Score
              roundScore += dice;
              document.querySelector('#currentScore').textContent = roundScore;
          }
          else {
            alert('you rolled a one');
          }
      }
}

// end of my code
