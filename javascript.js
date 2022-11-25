let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else if (num === 2) {
    return 'scissors';
  } else {
    return 'error';
  }
}

function playRound(playerSelection, computerSelection) {
  const playerFormatted = playerSelection.toLowerCase();

  if (playerFormatted === 'rock') {
    if (computerSelection === 'rock') {
      return "It's a tie! You both chose ROCK";
    } else if (computerSelection === 'paper') {
      compScore += 1;
      return "You lose! PAPER beats ROCK";
    } else if (computerSelection === 'scissors') {
      playerScore += 1;
      return "You win! ROCK beats SCISSORS";
    }
  } else if (playerFormatted === 'paper') {
    if (computerSelection === 'rock') {
      playerScore += 1;
      return "You win! PAPER beats ROCK";
    } else if (computerSelection === 'paper') {
      return "It's a tie! You both chose PAPER";
    } else if (computerSelection === 'scissors') {
      compScore += 1;
      return "You lose! SCISSORS beats PAPER";
    }
  } else if (playerFormatted === 'scissors') {
    if (computerSelection === 'rock') {
      compScore += 1;
      return "You lose! ROCK beats SCISSORS";
    } else if (computerSelection === 'paper') {
      playerScore += 1;
      return "You win! SCISSORS beats PAPER";
    } else if (computerSelection === 'scissors') {
      return "It's a tie! You both chose SCISSORS";
    }
  } else {
    return 'error';
  }
}

function game() {
  console.log("Let's play a game...");
  playerScore = 0;
  compScore = 0; 
  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Rock...Paper...Scissors..."), getComputerChoice()));
  }
  if (playerScore > compScore) {
    alert("You are the winner!");
  } else if (playerScore === compScore) {
    alert("You are tied!");
  } else if (playerScore < compScore) {
    alert("You are the loser!");
  }
}

game();