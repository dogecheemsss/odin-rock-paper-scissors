let computerScore = 0;
let humanScore = 0;

playGame();

function playGame() {

    for ( let rounds = 0; rounds < 5; rounds++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    };
    alert(`GAME OVER! Your final score is ${humanScore} and Computer's final score is ${computerScore}`);
}

function getComputerChoice() {
    let computerChoice = (Math.floor(Math.random() * 3) + 1).toString();
    console.log(computerChoice);
    switch (computerChoice) {
        case "1":
            computerChoice = "ROCK";
            break;
        case "2":
            computerChoice = "PAPER";
            break;
        case "3":
            computerChoice = "SCISSORS";
    }
    return computerChoice;
};

function getHumanChoice(){
    let humanChoice = prompt("ROCK, PAPER, or SCISSORS?").toUpperCase();
    console.log(humanChoice);
    if (!["ROCK", "PAPER", "SCISSORS"].includes(humanChoice)) {
        alert("Invalid Choice! Please try again.")
        return getHumanChoice();
    }
    return humanChoice;
};

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie! Try again.");
    } else if (
        (humanSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (humanSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        console.log(`You Win! ${humanSelection} beats ${computerSelection}.`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}.`);
        computerScore++;
    };
};
