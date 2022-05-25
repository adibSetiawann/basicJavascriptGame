const squares = document.querySelectorAll(".square");
const grid = document.querySelector(".grid");
const score = document.querySelector("#score");
const timeLeft = document.getElementById("time-left");

let result = 0;
let hitPosition;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  // get a reandom position for a mole
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}
//displaying result
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveMole() {
  let timeId = null;
  timeId = setInterval(randomSquare, 700);
}
moveMole();
