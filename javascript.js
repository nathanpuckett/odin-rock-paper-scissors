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

function play(playerSelection, computerSelection) {
  const playerFormatted = playerSelection.toLowerCase();

  if (playerFormatted === 'rock') {
    if (computerSelection === 'rock') {
      return "It's a tie! You both chose ROCK";
    } else if (computerSelection === 'paper') {
      return "You lose! PAPER beats ROCK";
    } else if (computerSelection === 'scissors') {
      return "You win! ROCK beats SCISSORS";
    }
  } else if (playerFormatted === 'paper') {
    if (computerSelection === 'rock') {
      return "You win! PAPER beats ROCK";
    } else if (computerSelection === 'paper') {
      return "It's a tie! You both chose PAPER";
    } else if (computerSelection === 'scissors') {
      return "You lose! SCISSORS beats PAPER";
    }
  } else if (playerFormatted === 'scissors') {
    if (computerSelection === 'rock') {
      return "You lose! ROCK beats SCISSORS";
    } else if (computerSelection === 'paper') {
      return "You win! SCISSORS beats PAPER";
    } else if (computerSelection === 'scissors') {
      return "It's a tie! You both chose SCISSORS";
    }
  } else {
    return 'error';
  }
}

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

