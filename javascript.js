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
      results.textContent = "It's a tie! You both chose ROCK";
      return "It's a tie! You both chose ROCK";
    } else if (computerSelection === 'paper') {
      results.textContent = "You lose! PAPER beats ROCK";
      compScore += 1;
      return "You lose! PAPER beats ROCK";
    } else if (computerSelection === 'scissors') {
      results.textContent = "You win! ROCK beats SCISSORS";
      playerScore += 1;
      return "You win! ROCK beats SCISSORS";
    }
  } else if (playerFormatted === 'paper') {
    if (computerSelection === 'rock') {
      results.textContent = `You win! PAPER beats ROCK`;
      playerScore += 1;
      return "You win! PAPER beats ROCK";
    } else if (computerSelection === 'paper') {
      results.textContent = `It's a tie! You both chose PAPER`;
      return "It's a tie! You both chose PAPER";
    } else if (computerSelection === 'scissors') {
      results.textContent = `You lose! SCISSORS beats PAPER`;
      compScore += 1;
      return "You lose! SCISSORS beats PAPER";
    }
  } else if (playerFormatted === 'scissors') {
    if (computerSelection === 'rock') {
      results.textContent = `You lose! ROCK beats SCISSORS`;
      compScore += 1;
      return "You lose! ROCK beats SCISSORS";
    } else if (computerSelection === 'paper') {
      results.textContent = `You win! SCISSORS beats PAPER`;
      playerScore += 1;
      return "You win! SCISSORS beats PAPER";
    } else if (computerSelection === 'scissors') {
      results.textContent = `It's a tie! You both chose SCISSORS`;
      return "It's a tie! You both chose SCISSORS";
    }
  } else {
    return 'error';
  }
}

function game() {
  // console.log("Let's play a game...");
  results.textContent = "Let's play a game...";
  playerScore = 0;
  compScore = 0; 
  /*
  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Rock...Paper...Scissors..."), getComputerChoice()));
  }
  */

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
  });

  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
  });

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
  });

  if (playerScore > compScore) {
    alert("You are the winner!");
  } else if (playerScore === compScore) {
    alert("You are tied!");
  } else if (playerScore < compScore) {
    alert("You are the loser!");
  }
}

const results = document.querySelector('#results');

game();