var game = {

  // players and their indicators
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
  },
  // function bank
  functions: {
    logWinner: function(){
      console.log("BOOM");
      alert(game.currentPlayer.marker + " has won!")
      game.currentPlayer.score +=1;
      $(game.currentPlayer.html).html(game.currentPlayer.score);
      reset();
    },


  }

}

var currentPlayer = game.player1;
var mark = game.currentPlayer.marker;
var $squares = $('.square');
function reset() {
    game.$squares.html('');
    game.$squares.removeClass('red blue');
  }



function getWinner (){
  game.functions.winRow();
  game.functions.winColumn();
  game.functions.winDiag();
   if ($('.red').length + $('.blue').length === game.$squares.length){
    alert("Cat's Game :3");
    game.functions.reset();
  }
}


function winRow() {
  for(i=0; i<9; i+=3) {
  if ($(game.$squares[i]).html() === game.mark && $(game.$squares[i+1]).html() === game.mark && $(game.$squares[i+2]).html() === game.mark) {
        game.functions.logWinner()
      }
  }
}
  function winColumn() {
    for (i=0; i<3; i++) {
      if ($(game.$squares[i]).html() === game.mark && $(game.$squares[i+3]).html() === game.mark && $(game.$squares[i+6]).html() === game.mark) {
          game.functions.logWinner()
    }
  }
}

function winDiag() {
  if (($(game.$squares[0]).html() === game.mark && $(game.$squares[4]).html() === game.mark && $(game.$squares[8]).html() === game.mark) ||
      ($(game.$squares[2]).html() === game.mark && $(game.$squares[4]).html() === game.mark && $(game.$squares[6]).html() === game.mark)) {
        game.functions.logWinner()
      }
}

function switchTurns() {
  if (game.currentPlayer == game.player1){
    game.currentPlayer = game.player2;
    $('#currentPlayerMove').html(currentPlayer.marker);
    game.mark = currentPlayer.marker
  } else {
    game.currentPlayer = game.player1;
    $('#currentPlayerMove').html(currentPlayer.marker);
    game.mark = currentPlayer.marker
  }
}


$('button').on('click', game.reset)

$squares.on('click', function(){
  if (!$(this).html()) {
    console.log(this);
    $(this).addClass(currentPlayer.class);
    $(this).html(currentPlayer.marker);
    game.functions.getWinner();
    game.functions.switchTurns();
    }
  })
