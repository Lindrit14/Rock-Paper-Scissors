
// this is how the computer chooses a random move from move 
function computerPlay(){
    let move = moves[Math.floor(Math.random() * 3)]
    return move
}
// here are all the possible outcomes. We get ONE outcome if one case is true. 
function playRound(playerSelection, computerSelection){

//this section is for rock possabilities///////////////////////////////
    if(computerSelection === moves[0] && playerSelection === moves[0]){
        return "Draw";

    }else if(computerSelection === moves[0] && playerSelection === moves[1]){
        console.log(`Player wins! ${moves[1]} beats ${moves[0]}`);
        return"Player Score: " + ++playerScore;
         
    }else if(computerSelection === moves[0] && playerSelection === moves[2]){
        console.log(`Computer wins! ${moves[0]} beats ${moves[2]}`);
        return "Computer Score: " + ++computerScore;

//this section is for paper possabilities/////////////////////////
    }else if(computerSelection === moves[1] && playerSelection === moves[1]){
        return "Draw";

    }else if(computerSelection === moves[1] && playerSelection === moves[2]){
        console.log(`Player wins! ${moves[2]} beats ${moves[1]}`);
        return "Player Score: " + ++playerScore;

    }else if(computerSelection === moves[1] && playerSelection === moves[0]){
        console.log(`Computer wins! ${moves[1]} beats ${moves[0]}`);
        return "Computer Score: " + ++computerScore;

//this section is for sciccors possabilities ///////////////////////////
    }else if(computerSelection === moves[2] && playerSelection === moves[2]){
        return "Draw";

    }else if(computerSelection === moves[2] && playerSelection === moves[0]){
        console.log(`Player wins! ${moves[0]} beats ${moves[2]}`);
        return "Player Score: " + ++playerScore;
        

    }else if(computerSelection === moves[2] && playerSelection === moves[1]){
        console.log(`Computer wins! ${moves[2]} beats ${moves[1]}`);
        return "Computer Score: " + ++computerScore;

    }else {
        return console.log("Error");
    }
    
}

function game(){

    for(let i=1;i<= 5; i++){
        console.log(playRound(playerSelection, computerSelection));
        playerSelection = prompt("Choose Again:").toLowerCase();
        computerSelection = computerPlay();  
    }
    if(playerScore > computerScore){
        console.log("Player Won");
    }else if(playerScore === computerScore){
        console.log("It's a Draw");
    }else{
        console.log("Computer Won");
    }

    //Play the game as many times as it takes the player or the computer to reach a score of 5
    //after every round the player and the computer need to choose their mooves again
    //  

return "Game has ended";
}




// the array of moves the computer can choose from
let moves = ["rock", "paper", "sciccors"];

// defining how the input of the player should be taken. and what should be done to it
let playerSelection = prompt("Choose a moove").toLocaleLowerCase();

//defining how the computer gets its move
let computerSelection = computerPlay();


let playerScore = 0;

let computerScore = 0;


console.log(game())












    
