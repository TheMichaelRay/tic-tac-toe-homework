var game = {
  player1: {
    marker: "X"
  },
  player2: {
    marker: "O"
  }
}

var currentPlayer = game.player1;
var mark = currentPlayer.marker;
var winner;
var squares = document.querySelectorAll('.square');

function winRow() {
  if ((squares[0].innerHTML === mark && squares[1].innerHTML === mark && squares[2].innerHTML === mark) ||
      (squares[3].innerHTML === mark && squares[4].innerHTML === mark && squares[5].innerHTML === mark) ||
      (squares[6].innerHTML === mark && squares[7].innerHTML === mark && squares[8].innerHTML === mark)) {
        console.log("BOOM");
        winner = currentPlayer
  }
}

function winColumn() {
  if ((squares[0].innerHTML === mark && squares[3].innerHTML === mark && squares[6].innerHTML === mark) ||
      (squares[1].innerHTML === mark && squares[4].innerHTML === mark && squares[7].innerHTML === mark) ||
      (squares[2].innerHTML === mark && squares[5].innerHTML === mark && squares[8].innerHTML === mark)) {
        console.log("BOOM");
        winner = currentPlayer
  }
}

function winDiag() {
  if ((squares[0].innerHTML === mark && squares[4].innerHTML === mark && squares[8].innerHTML === mark) ||
      (squares[2].innerHTML === mark && squares[4].innerHTML === mark && squares[6].innerHTML === mark)) {
        console.log("BOOM");
        winner = currentPlayer;
      }
}

function switchTurns() {
  if (currentPlayer == game.player1){
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}


// squares.addEventListener('click', function(){
//   console.log("clicked!!")
// })

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(){
      // if (winner){
        // console.log(currentPlayer + " has won!")} else
        if (!this.innerHTML && !winner) {
        console.log(this);
        this.innerHTML = currentPlayer.marker;
        // check if the square has already been marked
        // mark an x or an o
        // check to see if there's a winner
        // lots of action taking place in here
        winRow();
        winColumn();
        winDiag();
        switchTurns();
      }
      })
    }
