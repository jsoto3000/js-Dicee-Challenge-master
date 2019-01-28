// random number generator
// pseodu random vs random
// 16 decimal point random number
// btwn 0 and .9999999999999999
// never reaches 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

dice1 = "images/dice" + randomNumber1 + ".png"; // to calc n btwn 1 & 6

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

dice2 = "images/dice" + randomNumber2 + ".png"; // to calc n btwn 1 & 6

// console.log test
// var img1 = document.getElementsByClassName("img1");
// img1[0].setAttribute("src", "images/dice4.png");

var img1 = document.getElementsByClassName("img1");
img1[0].setAttribute("src", dice1);

var img2 = document.getElementsByClassName("img2");
img2[0].setAttribute("src", dice2);

// if else sample
/*
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}


document.getElementById("button").addEventListener("click", function(){

  document.querySelector("h1").innerHTML = "Refresh Me";

  var img1 = document.getElementsByClassName("img1");
  img1[0].setAttribute("src", "images/dice6.png");

  var img2 = document.getElementsByClassName("img2");
  img2[0].setAttribute("src", "images/dice6.png");

});
