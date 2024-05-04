var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
function nextSequence() {
    var randomNumber=(Math.floor(Math.random()*4));

    randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut('fast').fadeIn('fast');
    playSound(randomChosenColour);
}

$(".btn").on("click",function(event) {
    userChosenColour = $(event.target).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
});


function playSound(name) {
    var audioFile = new Audio("/Simon Game Challenge/sounds/"+name+".mp3");
    audioFile.play();
}