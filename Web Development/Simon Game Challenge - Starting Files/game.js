var userClickedPattern = [];
var gamePattern = [];
var started = false;
var level = 0;

var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").on("click", function() {
    // A keyword "this" refers to the button object that triggered the click
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).on("keypress", function() {
    if (started === false) {
        $("#level-title").text("Level 0");
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentAnswer) {
    
    if (gamePattern[currentAnswer] === userClickedPattern[currentAnswer]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        
    } else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        playSound("wrong");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}