document.querySelector("h1").innerHTML = "Refresh me!";

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) +1;

var image1 = "images/dice" +randomNumber1+".png";

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) +1;
var image2 = "images/dice" +randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Dilya loves me";

}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "DRAW!";
}else{
  document.querySelector("h1").innerHTML = " I lovw you Dilya! 🚩";

}
