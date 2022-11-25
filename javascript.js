console.log('Hello World');

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  

  return num;
}

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

