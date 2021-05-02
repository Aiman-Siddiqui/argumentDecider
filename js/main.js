
function decideWinner() {
  // var playerOne = prompt("Who is player 1?");
  // var playerTwo = prompt("Who is player 2?");
  var playerOne = getPlayer(1);
  var playerTwo = getPlayer(2);
  document.querySelector(".player1").innerHTML = playerOne;
  document.querySelector(".player2").innerHTML = playerTwo;
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 " + playerOne + " wins!";
  } else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = playerTwo + " wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "It was a draw!";
  }
}

function getPlayer(playerNum) {
  let player = prompt("Who is player " + playerNum + " ?");
  if(player == null) {
    player = "nobody";
  }
  return player;
}
