var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSource = "\\Dicee Challenge\\images\\dice"+randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource = "\\Dicee Challenge\\images\\dice"+randomNumber2+".png";
var img1=document.querySelectorAll("img")[1];
img1.setAttribute("src",imageSource);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="⛳Player 1 Won!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="⛳Player 2 Won!";
}
else {
    document.querySelector("h1").innerHTML="📍Draw!";
}