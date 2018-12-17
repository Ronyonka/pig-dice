// Business logic
function rollDice() {
  var summation = 0;
  var dice = Math.floor(Math.random() * 6) + 1;

  if (dice != 1) {
    summation += dice
    $("#currentScore").text(summation);
  } else {
    alert('you rolled a one')
  }
}

// end of my code
