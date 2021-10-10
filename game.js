


var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;

var started = false;

$(document).keydown(function(){
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");

      if(userClickedPattern.length === gamePattern.length){

        setTimeout(function(){
          nextSequence();
        }, 1000);
      }
    }

    else{
      console.log("wrong");
      var wrongAudio = new Audio("./sounds/wrong.mp3");
      wrongAudio.play();

      $("body").addClass("game-over");

      setTimeout(function(){
        $("body").removeClass("game-over")
      }, 300);

      $("h1").text("Game Over, Press Any Key to Restart");

      startOver();
    }
}

  function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(150).fadeOut(150).fadeIn(150);

    playSound(randomChosenColor);
  }

function startOver(){

  level = 0;

  gamePattern = [];

  started = false;
}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

};

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed")
  }, 100);
};
