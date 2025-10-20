

var randomNumber1 = (Math.floor(Math.random()*6))+1;

var randomDice = "dice" + randomNumber1 +".png";

var randomSrc = "images/" + randomDice; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSrc);


var randomNumber2 = (Math.floor(Math.random()*6))+1;

var randomDice2 = "dice" + randomNumber2 +".png";

var randomSrc2 = "images/" + randomDice2; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomSrc2);

if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player2 Wins!";
}

else if(randomNumber2 < randomNumber1){
    document.querySelector("h1").innerHTML = "Player1 Wins!🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
    document.getElementsByTagName
}