let totalPlayerScore = 0;
let totalComputerScore = 0;
let playerSelection = "";
let computerSelection = "";
let roundWinner = "";
let isAlive = true;
let scoreInfo = document.getElementById("scoreInfo");
let scoreMessage = document.getElementById("scoreMessage");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let tryAgain = document.getElementById("tryAgain");

// life system
function lifeSystem() {
  if (totalPlayerScore === 3 || totalComputerScore === 3) {
    isAlive = false;
    tryAgain.classList.add("try_again");
    tryAgain.innerText = "Try Again";
  } else {
    playRound();
  }
}

// Player Selection
function rock() {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  if (isAlive === true) {
    lifeSystem();
  } else {
    return;
  }
}

function paper() {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  if (isAlive === true) {
    lifeSystem();
  } else {
    return;
  }
}

function scissor() {
  playerSelection = "scissor";
  computerSelection = getComputerChoice();
  if (isAlive === true) {
    lifeSystem();
  } else {
    return;
  }
}

// Computer Selection
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// Result
function playRound() {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    totalPlayerScore++;
    roundWinner = "Player is the Winner";
    scoreMessage.textContent = "Rocks win against Scissor";
    playerScore.textContent = "Player: " + totalPlayerScore;
    scoreInfo.textContent = roundWinner;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    totalPlayerScore++;
    roundWinner = "Player is the Winner";
    scoreMessage.textContent = "Papers win against Rock";
    playerScore.textContent = "Player: " + totalPlayerScore;
    scoreInfo.textContent = roundWinner;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    totalPlayerScore++;
    roundWinner = "Player is the Winner";
    scoreMessage.textContent = "scissors win against Paper";
    playerScore.textContent = "Player: " + totalPlayerScore;
    scoreInfo.textContent = roundWinner;
  } else if (computerSelection === "rock" && playerSelection === "scissor") {
    totalComputerScore++;
    roundWinner = "AI is the Winner";
    scoreMessage.textContent = "Rocks win against Scissor";
    computerScore.textContent = "AI: " + totalComputerScore;
    scoreInfo.textContent = roundWinner;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    totalComputerScore++;
    roundWinner = "AI is the Winner";
    scoreMessage.textContent = "Papers win against Rock";
    computerScore.textContent = "AI: " + totalComputerScore;
    scoreInfo.textContent = roundWinner;
  } else if (computerSelection === "scissor" && computerSelection === "paper") {
    totalComputerScore++;
    roundWinner = "AI is the Winner";
    scoreMessage.textContent = "Scissors win against Paper";
    computerScore.textContent = "AI: " + totalComputerScore;
    scoreInfo.textContent = roundWinner;
  } else {
    roundWinner = "TIE keep it up";
    scoreMessage.textContent = "It seems you and AI have made the same choice.";
    scoreInfo.textContent = roundWinner;
  }
}

// Try again
function reset() {
  totalComputerScore = 0;
  totalPlayerScore = 0;
  isAlive = true;
  computerScore.textContent = "AI: " + totalComputerScore;
  playerScore.textContent = "Player: " + totalPlayerScore;
  tryAgain.classList.remove("try_again");
  tryAgain.innerText = "";
  scoreInfo.innerText = "Choose your Weapon";
  scoreMessage.innerText = "First to get 3 points win the game";
}
