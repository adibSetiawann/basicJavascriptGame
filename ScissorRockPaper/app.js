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
    result = "<h2 class='draw'> Its draw!</h2>";
  }
  if (userChoice == "rock" && computerChoice == "paper") {
    result = "<h2 class='lose'> You lose! :(</h2>";
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    result = "<h2 class='win'> You win! </h2>";
  }
  if (userChoice == "paper" && computerChoice == "scissor") {
    result = "<h2 class='lose'> You lose! :(</h2>";
  }
  if (userChoice == "paper" && computerChoice == "rock") {
    result = "<h2 class='win'> You win!</h2>";
  }
  if (userChoice == "scissor" && computerChoice == "rock") {
    result = "<h2 class='lose'> You lose! :(</h2>"
  }
  if (userChoice == "scissor" && computerChoice == "paper") {
    result = "<h2 class='win'> You win!</h2>";
  }
  resultDisplay.innerHTML = result;
}
