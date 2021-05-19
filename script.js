function clicked(){
var Randomnumber1 = Math.floor(Math.random()*6) + 1; //1-6

var RandomDiceimage = "dice" + Randomnumber1 + ".png"; //dice 1 to 6
var RandomImagesource = "images/" + RandomDiceimage; //images/dice1.png to 6;

var image1 = document.querySelectorAll("img")[0];
     image1.setAttribute("src" , RandomImagesource);


var Randomnumber2 = Math.floor(Math.random()*6) + 1;
var RandomDiceimage2 = "dice" + Randomnumber2 + ".png";
var RandomImagesource2 = "images/" + RandomDiceimage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , RandomImagesource2);


if(Randomnumber1 > Randomnumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (Randomnumber2 > Randomnumber1)
 {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw";
}
}
document.querySelector("button").addEventListener("click" , clicked);
