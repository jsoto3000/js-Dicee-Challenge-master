// random number generator
// pseodu random vs random
// 16 decimal point random number
// btwn 0 and .9999999999999999
// never reaches 1

var randomNumber1 = Math.random();

randomNumber1 = randomNumber1 * 6;

dice1 = "images/dice" + (Math.floor(randomNumber1) + 1) + ".png"; // to calc n btwn 1 & 6

var randomNumber2 = Math.random();

randomNumber2 = randomNumber2 * 6;

dice2 = "images/dice" + (Math.floor(randomNumber2) + 1) + ".png"; // to calc n btwn 1 & 6

// console.log test
// var img1 = document.getElementsByClassName("img1");
// img1[0].setAttribute("src", "images/dice4.png");

var img1 = document.getElementsByClassName("img1");
img1[0].setAttribute("src", dice1);

var img2 = document.getElementsByClassName("img2");
img2[0].setAttribute("src", dice2);
