var game = {
  player1: {
    marker: "X"
  },
  player2: {
    marker: "O"
  }
}

var currentPlayer = game.player1;

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
      if (!this.innerHTML) {
      console.log(this);
      this.innerHTML = "<span>" + currentPlayer.marker + "</span>";
      // check if the square has already been marked
      // mark an x or an o
      // check to see if there's a winner
      // lots of action taking place in here
      switchTurns();
    }
    })
}

// game.player2.marker = "O"
// game.player1.marker = "X"
// but currentPlayer.marker will change to "X" or "O" depending on turns
//
// if the value of the text inside the box is null, it should be able to be clicked on
//  using something like an if statement that is reversed like !('#value')
