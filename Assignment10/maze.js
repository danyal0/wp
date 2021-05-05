$(function(){
    var gameon = false;
    $("#start").click(function(){
        if(!gameon){ gameon = true; }
        $("#status").text("Playing maze...");
        $(".boundary").removeClass("youlose");
        console.log("Is game on? "+gameon);
    });
    $(".boundary").mouseover(function(){
        if(gameon) lostGame();
    });
    $("#maze").mouseleave(function(){
        if(gameon) lostGame();
    });
    $("#end").mouseenter(function(){
        if(gameon){
            $("#status").text("You win! Mice are proud of you. Try again by clicking the \"S\"");
            gameOver();
        }
    });
    //
    function lostGame(){
        $(".boundary").addClass("youlose");
        $("#status").text("You lose! Hundred of mice did it, why not you? Try again...");
        gameOver();
    }
    function gameOver(){
        gameon = false;
        console.log("Is game on? "+gameon);
    }
});