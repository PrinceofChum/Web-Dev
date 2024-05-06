var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];

var started=false;
var level=0;


$(document).keypress(()=>{
    if (started==false) {
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    level+=1;
    $("h1").text("Level "+level);
    var randomNumber=(Math.floor(Math.random()*4));

    randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut('fast').fadeIn('fast');
    playSound(randomChosenColour);
}

$(".btn").on("click",function(event) {
    userChosenColour = $(event.target).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour)
    animatePress(userChosenColour);
    console.log(gamePattern);
    checkAnswer((userClickedPattern.length)-1)
}); 


function playSound(name) {
    var audioFile = new Audio("/Simon Game Challenge/sounds/"+name+".mp3");
    audioFile.play();
}


function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");   
    }, 100);
}  

function checkAnswer(index) {
    if (userClickedPattern[index]==gamePattern[index]){
        if(index===gamePattern.length-1){
            setTimeout(() => {
                nextSequence();
                userClickedPattern=[];
            }, 1000);
            
        }
    }
    else{
        playSound("wrong");
        $("h1").text("Game Over! Press any key to continue.");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 150);
        startOver();
    }
}

function startOver() {
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}