// creating of random number from 1- 6
var random1 = Math.random();
random1 = random1 * 6;
random1 = Math.floor(random1) + 1;

var dice_img1 = "images/d"+ random1 +".JPG";   //images/d6.JPG

var image_1 = document.querySelectorAll("img")[0];

image_1.setAttribute("src" , dice_img1);


// creating of random number from 1- 6
var random2 = Math.random();
random2 = random2 * 6;
random2 = Math.floor(random2) + 1;

var dice_img2 = "images/d"+ random2 +".JPG";   //images/d6.JPG

var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src" ,dice_img2);


// condition for winning;

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🥇 ";
}
else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🥇 ";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🎲 Roll Again";
}


// refresh button function:

function mybutton(){
    location.reload();
}
