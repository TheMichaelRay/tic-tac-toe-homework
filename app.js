var game = {
  player1: {
    marker: "X"
  },
  player2: {
    marker: "O"
  }
}

var currentPlayer = game.player1;

var winner;

function winRow() {
  if (squares[0].innerHTML === squares[1].innerHTML && squares[0].innerHTML === squares[2].innerHTML) {
    console.log("BOOM");
    winner = currentPlayer
  }
}

function switchTurns() {
  if (currentPlayer == game.player1){
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}

var squares = document.querySelectorAll('.square');

// squares.addEventListener('click', function(){
//   console.log("clicked!!")
// })

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(){
      if (winner){
        console.log(currentPlayer + " has won!")
      } else if (!this.innerHTML ) {
        console.log(this);
        this.innerHTML = "<span>" + currentPlayer.marker + "</span>";
        // check if the square has already been marked
        // mark an x or an o
        // check to see if there's a winner
        // lots of action taking place in here
        winRow();
        switchTurns();
      }
      })
    }
