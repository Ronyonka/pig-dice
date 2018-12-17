// Business logic
function rollDice(){
  var total = 0;
  var dice = Math.floor(Math.random() * 6) + 1;

  if (dice != 1){
    total += dice
    alert(total);
  }else{
    alert('you rolled a one')
  }
}
