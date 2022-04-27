const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const possibleChoice = document.querySelectorAll("button");
let computerChoice;
let result;
// displaying user choice
possibleChoice.forEach((possibleCoice) =>
  possibleCoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generatecomputerChoice();
    generateResult();
  })
);

// displaying computer choice
function generatecomputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // 3 can change to possibleChoice.length
  if (randomNumber === 1) {
    computerChoice = "scissor";
  }
  if (randomNumber === 2) {
    computerChoice = "rock";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// displaying result
function generateResult() {
  if (userChoice === computerChoice) {
    result = "its a draw!";
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    result = "you lose!";
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    result = "you win!";
  }
  if (userChoice == "paper" && computerChoice == "scissor") {
    result = "you lose!";
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    result = "you win!";
  }
  if (userChoice == "scissor" && computerChoice == "rock") {
    result = "you lose!";
  }
  if (userChoice == "scissor" && computerChoice == "paper") {
    result = "you win!";
  }
  resultDisplay.innerHTML = result;
}
