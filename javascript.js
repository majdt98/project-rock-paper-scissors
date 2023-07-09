let declaration;
let wincount=0;
let losscount=0;
let drawcount=0;
function getComputerChoice() {

    let choice= ["rock","paper","scissors"];
    let randomchoice= choice[Math.floor(Math.random()*choice.length)];
    return randomchoice
}
function playround() {
   const playerSelection=prompt("what is your play?").toLowerCase();
   const computerSelection=getComputerChoice();
   let declaration;
    if (playerSelection==computerSelection){
        result="it's a draw!";
        alert (result);
    }
    else {
        if (playerSelection=="rock" && computerSelection=="scissors"){
            result="you win!";
            alert (result+" "+"rock beats scissors");
        }
        else if (playerSelection=="scissors"&& computerSelection=="rock"){
            result="you lose!";
            alert(result+" "+"rock beats scissors")
        }
        else if (playerSelection=="rock"&& computerSelection=="paper"){
            result="you lose!";
            alert(result+" "+"paper beats rock");
        }
        else if (playerSelection=="paper"&& computerSelection=="rock"){
            result="you win!";
            alert (result+" "+"paper beats rock")
        }
        else if (playerSelection=="scissors"&& computerSelection=="paper"){
            result="you win!";
            alert (result+" "+"scissors beats paper");
        }
        else if (playerSelection=="paper"&& computerSelection=="scissors"){
            result="you lose!";
            alert(result+" "+"scissors beats paper")
        }
    }
    if (result=="you win!") {
        wincount=wincount+1;
        alert ("games won by you: "+wincount+", games won by opponent: "+losscount+", number of draws: "+drawcount);
    }
    if (result=="you lose!") {
        losscount=losscount+1;
        alert ("games won by you: "+wincount+", games won by opponent: "+losscount+", number of draws: "+drawcount);
    }
    if (result=="it's a draw!") {
        drawcount=drawcount+1;
        alert ("games won by you: "+wincount+", games won by opponent: "+losscount+", number of draws: "+drawcount);
    }

    }
function game() {
console.log(playround());
console.log(playround());
console.log(playround());
console.log(playround());
console.log(playround());
if (wincount>losscount) {
    alert("you win the game");
}
else if (wincount<losscount) {
    alert("you lose the game");
}
else {
    alert ("it's a tie");
}


    
}

