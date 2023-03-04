var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var winner = document.getElementById("winner");

if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins! 🚩";
} else {
    winner.innerHTML = "Draw!";
}
