function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return 'Rock';
  } else if (num === 1) {
    return 'Paper';
  } else if (num === 2) {
    return 'Scissors';
  } else {
    return 'Error';
  }
}

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

