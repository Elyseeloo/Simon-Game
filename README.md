# Simon-Game

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## My process

### Built with

- HTML5
- CSS3
- Javascript
- jQuery

### What I learned

I learned how to add sound to elements when clicked using JavaScript, how to use the "this" element, how to add simple animations, and how to add items to an array and cross-check these items with an already created array.


Code written in this project that I want to highlight:

```JSX
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
```
This code cross-checks the game pattern with the user input pattern. If the user is right, the game continues with the nextSequence() function. If the user is incorrect, the "wrong" audio plays, the screen flashes red with the "game-over" class, and the game resets when the user presses any key.

```JSX
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
```
This code essentially contains the workings of the game itself. This code changes the title of the level depending on what level you've reached, chooses a random color square based on the Math.random() function, and pushes the id of that color into the gamePattern array. An animation plays and a sound specific to that color plays as well.

### Continued development

This project was a challenging one, but also very rewarding. The use of jQuery made building it much faster. I want to try and continue to make JavaScript based games such as Tic Tac Toe or Tetris and really challenge myself!

## Author

- Website - [Elyse Chambers](https://www.diaryofelyse.com)
- Frontend Mentor - [Elyseeloo](https://www.frontendmentor.io/profile/Elyseeloo)
- Twitter - [@Elyseeloo\_](https://www.twitter.com/elyseeloo_)
