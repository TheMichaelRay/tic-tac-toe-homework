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
var $squares = $('.square');
var squares = document.querySelectorAll('.square');
function reset() {
    $squares.html('');
    $squares.removeClass('red blue');
  }


function logWinner(){
  console.log("BOOM");
  alert(currentPlayer.marker + " has won!")
  currentPlayer.score +=1;
  $(currentPlayer.html).html(currentPlayer.score);
  reset();
}

function getWinner (){
  winRow();
  winColumn();
  winDiag();
   if ($('.red').length + $('.blue').length === 9){
    alert("Cat's Game :3");
    reset();
  }
}


function winRow() {
  for(i=0; i<9; i+=3) {
  if ($($squares[i]).html() === mark && $($squares[i+1]).html() === mark && $($squares[i+2]).html() === mark) {
        logWinner()
      }
  }
}
  function winColumn() {
    for (i=0; i<3; i++) {
      if ($($squares[i]).html() === mark && $($squares[i+3]).html() === mark && $($squares[i+6]).html() === mark) {
          logWinner()
    }
  }
}

function winDiag() {
  if (($($squares[0]).html() === mark && $($squares[4]).html() === mark && $($squares[8]).html() === mark) ||
      ($($squares[2]).html() === mark && $($squares[4]).html() === mark && $($squares[6]).html() === mark)) {
        logWinner()
      }
}

function switchTurns() {
  if (currentPlayer == game.player1){
    currentPlayer = game.player2;
    $('#currentPlayerMove').html(currentPlayer.marker);
    mark = currentPlayer.marker
  } else {
    currentPlayer = game.player1;
    $('#currentPlayerMove').html(currentPlayer.marker);
    mark = currentPlayer.marker
  }
}


$('button').on('click', reset)

// for (var i = 0; i < $squares.length; i++) {
  $squares.on('click', function(){
    if (!$(this).html()) {
      console.log(this);
      $(this).addClass(currentPlayer.class);
      $(this).html(currentPlayer.marker);
      getWinner();
      switchTurns();
    }
  })
// }
