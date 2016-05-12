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
  currentPlayer: null,
  mark: null,
  $squares: $('.square'),
  // function bank
  functions: {
    logWinner: function(){
      console.log("BOOM");
      alert(game.currentPlayer.marker + " has won!")
      game.currentPlayer.score +=1;
      $(game.currentPlayer.html).html(game.currentPlayer.score);
      game.functions.reset();
    },
    reset: function() {
      game.$squares.html('');
      game.$squares.removeClass('red blue');
    },
    getWinner: function(){
    game.functions.winRow();
    game.functions.winColumn();
    game.functions.winDiag();
     if ($('.red').length + $('.blue').length === game.$squares.length){
      alert("Cat's Game :3");
      game.functions.reset();
      }
    },
    winRow: function() {
    for(i=0; i<9; i+=3) {
    if ($(game.$squares[i]).html() === game.mark && $(game.$squares[i+1]).html() === game.mark && $(game.$squares[i+2]).html() === game.mark) {
          game.functions.logWinner()
        }
      }
    },
    winColumn: function() {
    for (i=0; i<3; i++) {
      if ($(game.$squares[i]).html() === game.mark && $(game.$squares[i+3]).html() === game.mark && $(game.$squares[i+6]).html() === game.mark) {
          game.functions.logWinner()
          }
      }
    },
    winDiag: function() {
      if (($(game.$squares[0]).html() === game.mark && $(game.$squares[4]).html() === game.mark && $(game.$squares[8]).html() === game.mark) ||
          ($(game.$squares[2]).html() === game.mark && $(game.$squares[4]).html() === game.mark && $(game.$squares[6]).html() === game.mark)) {
            game.functions.logWinner()
          }
    },
    switchTurns: function() {
      if (game.currentPlayer == game.player1){
        game.currentPlayer = game.player2;
        $('#currentPlayerMove').html(game.currentPlayer.marker);
        game.mark = game.currentPlayer.marker
      } else {
        game.currentPlayer = game.player1;
        $('#currentPlayerMove').html(game.currentPlayer.marker);
        game.mark = game.currentPlayer.marker
        }
      }
  },
  init: function(){
    $('button').on('click', game.reset);
    this.currentPlayer = game.player1;
    this.mark = game.currentPlayer.marker;
    $('.square').on('click', function(){
      if (!$(this).html()) {
        console.log(this);
        $(this).addClass(game.currentPlayer.class);
        $(this).html(game.currentPlayer.marker);
        game.functions.getWinner();
        game.functions.switchTurns();
        }
      })
  }
};

game.init()
