// the array of moves the computer can choose from
let moves = ["rock", "paper", "sciccors"]

// defining how the input of the player should be taken. and what should be done to it
let playerSelection = prompt("Choose a move").toLowerCase();

//defining how the computer gets its move
let computerSelection = computerPlay();

let playerScore = 0

let computerScore = 0

// this is how the computer chooses a random move from move 
function computerPlay(){
    let move = moves[Math.floor(Math.random() * 3)]
    return move
}
// here are all the possible outcomes. We get ONE outcome if one case is true. 
function playRPS(playerSelection, computerSelection){

switch (true) {

//this section is for rock possabilities///////////////////////////////
    case computerSelection === moves[0] && playerSelection === moves[0]:
        return "Draw"
    case computerSelection === moves[0] && playerSelection === moves[1]:
        console.log(`Player wins! ${moves[1]} beats ${moves[0]}`)
        return ++playerScore 
        
    case computerSelection === moves[0] && playerSelection === moves[2]:
        console.log(`Computer wins! ${moves[0]} beats ${moves[2]}`)
        return ++computerScore
        

//this section is for paper possabilities/////////////////////////
    case computerSelection === moves[1] && playerSelection === moves[1]:
        return "Draw"
    case computerSelection === moves[1] && playerSelection === moves[2]:
        console.log(`Player wins! ${moves[2]} beats ${moves[1]}`)
        return ++playerScore
        
    case computerSelection === moves[1] && playerSelection === moves[0]:
        console.log(`Computer wins! ${moves[1]} beats ${moves[0]}`)
        return ++computerScore 

//this section is for sciccors possabilities ///////////////////////////
    case computerSelection === moves[2] && playerSelection === moves[2]:
        return "Draw"
    case computerSelection === moves[2] && playerSelection === moves[0]:
        console.log(`Player wins! ${moves[0]} beats ${moves[2]}`)
        return ++playerScore 
          
    case computerSelection === moves[2] && playerSelection === moves[1]:
        console.log(`Computer wins! ${moves[2]} beats ${moves[1]}`)
        return ++computerScore

    default: console.log("Suck Some Dick Lind")
        break;
    }
}
// this is function for executing playRPS 5 times. Problem: it doesnt go up to 5 point for either player
function game(){
    for (let i = 1; i <= 5; i++) {
        console.log(playRPS(playerSelection, computerSelection))
        playerSelection = prompt("Choose a move").toLowerCase();
        computerSelection = computerPlay()
        if(computerScore === 5){
            console.log("Computer WINS")
        }else if(playerScore === 5){
            console.log("Player WINS")
        }
    }
    return "END OF THE GAME";
}

console.log(game())








    
