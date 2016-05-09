var game = {
  player1: {
    marker: "X",
    score: 0,
    html: '#playerXScore',
    class: ' red'
  },
  player2: {
    marker: "O",
    score: 0,
    html: '#playerOScore',
    class: ' blue'
  }
}

var currentPlayer = game.player1;
var mark = currentPlayer.marker;
var winner;
var squares = document.querySelectorAll('.square');
// var playerOScore = document.querySelector('#playerOScore');
// var playerXScore = document.querySelector('#playerXScore');
function reset() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].classList = 'square';
  }
}


function logWinner(){
  console.log("BOOM");
  // winner = currentPlayer;
  alert(currentPlayer.marker + " has won!")
  currentPlayer.score +=1;
  document.querySelector(currentPlayer.html).innerHTML = currentPlayer.score;
  // winner = null;
  reset();
}

function getWinner (){
  winRow();
  winColumn();
  winDiag();
}


function winRow() {
  if ((squares[0].innerHTML === mark && squares[1].innerHTML === mark && squares[2].innerHTML === mark) ||
      (squares[3].innerHTML === mark && squares[4].innerHTML === mark && squares[5].innerHTML === mark) ||
      (squares[6].innerHTML === mark && squares[7].innerHTML === mark && squares[8].innerHTML === mark)) {
        logWinner()
  }
}

function winColumn() {
  if ((squares[0].innerHTML === mark && squares[3].innerHTML === mark && squares[6].innerHTML === mark) ||
      (squares[1].innerHTML === mark && squares[4].innerHTML === mark && squares[7].innerHTML === mark) ||
      (squares[2].innerHTML === mark && squares[5].innerHTML === mark && squares[8].innerHTML === mark)) {
        logWinner()
  }
}

function winDiag() {
  if ((squares[0].innerHTML === mark && squares[4].innerHTML === mark && squares[8].innerHTML === mark) ||
      (squares[2].innerHTML === mark && squares[4].innerHTML === mark && squares[6].innerHTML === mark)) {
        logWinner()
      }
}

function switchTurns() {
  if (currentPlayer == game.player1){
    currentPlayer = game.player2;
    mark = currentPlayer.marker
  } else {
    currentPlayer = game.player1;
    mark = currentPlayer.marker
  }
}


// squares.addEventListener('click', function(){
//   console.log("clicked!!")
// })
document.querySelector('button').addEventListener('click', reset)

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(){
      // if (winner){
        // console.log(currentPlayer + " has won!")} else
        if (!this.innerHTML) {
        console.log(this);
        this.classList += currentPlayer.class;
        this.innerHTML = currentPlayer.marker;
        // check if the square has already been marked
        // mark an x or an o
        // check to see if there's a winner
        // lots of action taking place in here
        getWinner();
        switchTurns();
      }
      }
      )
    }
