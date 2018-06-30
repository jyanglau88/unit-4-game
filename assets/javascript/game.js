$(document).ready(function(){
    var playerhand= 0; 
    var wins= 0;
    var losses = 0;
    
    var goal=Math.floor(Math.random()*102+19)

    var crystal1= Math.floor(Math.random()*12+1)
    var crystal2= Math.floor(Math.random()*12+1)
    var crystal3= Math.floor(Math.random()*12+1)
    var crystal4= Math.floor(Math.random()*12+1)

    $('#goal').text(goal);
    $('#wins').text(wins);
    $('#losses').text(losses);
  
    function reset(){
        goal=Math.floor(Math.random()*102+19);
        $('#goal').text(goal);
        crystal1= Math.floor(Math.random()*12+1);
        crystal2= Math.floor(Math.random()*12+1);
        crystal3= Math.floor(Math.random()*12+1);
        crystal4= Math.floor(Math.random()*12+1);
        playerhand= 0;
        $('#playerhand').text(playerhand);
        } 
        
    function playerwins(){
        wins++; 
        $('#wins').text(wins);
        reset();
        }

    function playerlose(){
        losses++;
        $('#losses').text(losses);
        reset()
        }

    $('#greencrystal').on ('click', function(){
        playerhand = playerhand + crystal1;
        $('#playerhand').text(playerhand); 
        if (playerhand == goal){
        playerwins();
        }
        else if (playerhand > goal){
        playerlose();
        }   
    })  

    $('#bluecrystal').on ('click', function(){
        playerhand = playerhand + crystal2;
        $('#playerhand').text(playerhand); 
        if (playerhand == goal){
        playerwins();
        }
        else if (playerhand > goal){
        playerlose();
        } 
    })

    $('#yellowcrystal').on ('click', function(){
        playerhand = playerhand + crystal3;
        $('#playerhand').text(playerhand);
        if (playerhand == goal){
        playerwins();
        }
        else if (playerhand > goal){
        playerlose();
        } 
    })

    $('#redcrystal').on ('click', function(){
        playerhand = playerhand + crystal4;
        $('#playerhand').text(playerhand); 
        if (playerhand == goal){
        playerwins();
        }
        else if (playerhand > goal){
        playerlose();
        }
    });

}); 