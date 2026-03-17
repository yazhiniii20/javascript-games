<<<<<<< HEAD
let moves=0;
let playerScores=0;
let compScores=0;
function play(player){
    const choices = ['r','s','p'];
    let computer = choices[Math.floor(Math.random()*3)];
    if(moves <= 5){
    moves++;
    }
    document.getElementById("mov").innerHTML = `Remaining Moves ${5-moves}`;
    if(moves <= 5 && moves > 0){
    if(player === 'r'){
        if(computer === 'r'){
            alert("Tie");
        }
        else if(computer === 'p'){
            alert("Computer has chosen paper. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen scissors. Player wins !");
            playerScores++;
        }
    }
    else if(player === 'p'){
        if(computer === 'p'){
            alert("Tie");
        }
        else if(computer === 's'){
            alert("Computer has chosen scissors. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen rock. Player wins !");
            playerScores++;
        }
    }
    else{
        if(computer === 's'){
            alert("Tie");
        }
        else if(computer === 'r'){
            alert("Computer has chosen rock. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen paper. Player wins !");
            playerScores++;
        }
    }
}
if((5-moves) <= 0){
    alert("Out of Moves");
    if(compScores > playerScores){
    document.getElementById("result").innerHTML = `Computer has won with the score of ${compScores}`;
    }else if(playerScores > compScores){
        document.getElementById("result").innerHTML = `Player has won with the score of ${playerScores}`;
    }else{
        document.getElementById("result").innerHTML = "Game tie !"
    }
}
}
function resetGame(){
      let playAgain = confirm("Play Again ?");
     playAgain ? location.reload() : alert("Thanks for playing");
=======
let moves=0;
let playerScores=0;
let compScores=0;
function play(player){
    const choices = ['r','s','p'];
    let computer = choices[Math.floor(Math.random()*3)];
    if(moves <= 5){
    moves++;
    }
    document.getElementById("mov").innerHTML = `Remaining Moves ${5-moves}`;
    if(moves <= 5 && moves > 0){
    if(player === 'r'){
        if(computer === 'r'){
            alert("Tie");
        }
        else if(computer === 'p'){
            alert("Computer has chosen paper. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen scissors. Player wins !");
            playerScores++;
        }
    }
    else if(player === 'p'){
        if(computer === 'p'){
            alert("Tie");
        }
        else if(computer === 's'){
            alert("Computer has chosen scissors. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen rock. Player wins !");
            playerScores++;
        }
    }
    else{
        if(computer === 's'){
            alert("Tie");
        }
        else if(computer === 'r'){
            alert("Computer has chosen rock. Computer wins !");
            compScores++;
        }else{
            alert("Computer has chosen paper. Player wins !");
            playerScores++;
        }
    }
}
if((5-moves) <= 0){
    alert("Out of Moves");
    if(compScores > playerScores){
    document.getElementById("result").innerHTML = `Computer has won with the score of ${compScores}`;
    }else if(playerScores > compScores){
        document.getElementById("result").innerHTML = `Player has won with the score of ${playerScores}`;
    }else{
        document.getElementById("result").innerHTML = "Game tie !"
    }
}
}
function resetGame(){
      let playAgain = confirm("Play Again ?");
     playAgain ? location.reload() : alert("Thanks for playing");
>>>>>>> 44c689b76ff6e62030db33956daa9ecd6be70315
}