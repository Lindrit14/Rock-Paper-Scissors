// this is how the computer chooses a random move from moves
function computerPlay(){
    return moves[Math.floor(Math.random() * 3)];
}
// here are all the possible outcomes. We get ONE outcome if one case is true. 
function playRound(playerSelection, computerSelection){


    if( computerSelection === playerSelection|| 
        computerSelection === playerSelection||
        computerSelection === playerSelection){

        return console.log("Draw");

    }else if(
        computerSelection === moves[0] && playerSelection === moves[1]||
        computerSelection === moves[1] && playerSelection === moves[2]||
        computerSelection === moves[2] && playerSelection === moves[0]){

        return console.log("Player Wins");
         
    }else if(
        computerSelection === moves[0] && playerSelection === moves[2]||
        computerSelection === moves[1] && playerSelection === moves[0]||
        computerSelection === moves[2] && playerSelection === moves[1]){

        return console.log("Computer Wins");

    }else {
        return console.log("something went wrong");
    }
    
}
// Section of DOM and Eventlisteners 
const btns = document.querySelectorAll(".playRoundButtons");


// the array of moves the computer can choose from
let moves = ["rock", "paper", "sciccors"];
// defining how the input of the player should be taken. and what should be done to it
let playerSelection;



//defining how the computer gets its move
let computerSelection = computerPlay();

// btns.forEach(btn => btn.addEventListener("click", playRound));


let playerScore = 0;

let computerScore = 0;



btns.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        playerSelection = e.target.innerText.toLowerCase();
        
        playRound(playerSelection, computerSelection);
        computerSelection = computerPlay(); 
    })
}) 






    
