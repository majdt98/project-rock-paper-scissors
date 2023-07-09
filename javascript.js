let declaration;
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
        declaration="it's a draw";
    }
    else {
        if (playerSelection=="rock" && computerSelection=="scissors"){
            declaration="you win! rock beats scissors"
        }
        else if (playerSelection=="scissors"&& computerSelection=="rock"){
            declaration="you lose! rock beats scissors"
        }
        else if (playerSelection=="rock"&& computerSelection=="paper"){
            declaration="you lose! paper beats rock"
        }
        else if (playerSelection=="paper"&& computerSelection=="rock"){
            declaration="you win! paper beats rock"
        }
        else if (playerSelection=="scissors"&& computerSelection=="paper"){
            declaration="you win! scissors beats paper"
        }
        else if (playerSelection=="paper"&& computerSelection=="scissors"){
            declaration="you lose! scissors beats paper"
        }
    }
return declaration
    }
function game() {
console.log(playround());
console.log(playround());
console.log(playround());
console.log(playround());
console.log(playround());


    
}

