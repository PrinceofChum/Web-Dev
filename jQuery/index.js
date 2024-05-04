$("h1").addClass("big-title");

$("button").click(function() {
    $("h1").css("color", "Purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
    console.log(event.key);
});