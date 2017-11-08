function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}

Player.prototype.roll = function() {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValues = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValues === 1) {
    this.turnScore = 0;
  }
   else {
    this.turnScore = this.turnScore + rollValues;
  };
  return rollValues;
}

Player.prototype.score = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}


$("#start").click(function(event){
  $(".header1").fadeIn(900);
});

$("#btn-register").click(function(event){
event.preventDefault();
  $(".header2").fadeIn(900);



  var player1Name = $("#player1").val();
  var player2Name = $("#player2").val();
  var player1 = new Player (player1Name,0,0)
  var player2 = new Player (player2Name,0,0)


  $("#player1-name").text(player1.playerName);
  $("#total-score-1").html("<span class='player1-total-score'>" + player1.totalScore + "</span>");

  $("#player1-roll").click(function(event) {
    event.preventDefault();
    var player1RolledNumber = player1.roll();
    if (player1RolledNumber === 1) {
      alert("Better luck time")
    }
    $("#die-roll-1").text(player1RolledNumber);
    $("#total-score-1").text(player1.turnScore);
  });


  $("#btn-hold").click(function(event) {
    event.preventDefault();
    player1.score();
    $(".player1-total-score").text(player1.totalScore);
    $(".player1-rolled-number").text("");
    $(".player1-turn-score").text(player1.turnScore);
    if (player1.totalScore >= 100) {
      alert("You won GAME OVER");
    }
  });

  $(".player2-name").text(player2.playerName);
  $(".player2-total-score").html("<span class='player2-total-score'>" + player2.totalScore + "</span>");

  $("player2-roll").click(function(event) {
    event.preventDefault();
    var player2RolledNumber = player2.roll();
    if (player2RolledNumber === 1) {

    }
    $(".player2-rolled-number").text(player2RolledNumber);
    $(".player2-turn-score").text(player2.turnScore);
  });

  $("#btn-hold1").click(function(event) {
    event.preventDefault();
    player2.score();
    $(".player2-total-score").text(player2.totalScore);
    $(".player2-rolled-number").text("");
    $(".player2-turn-score").text("");
    if (player2.totalScore >= 100) {

    } else {


    }
  });

});
