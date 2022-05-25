document.addEventListener("DOMContentLoaded", () => {
  createSquares();

  let guessedWords = [[]];
  let availableSpace = 1;
  let word = "qqqqq";
  //   listening keyboard
  const keys = document.querySelectorAll(".keyboard-row button");

  function getCurrentArr() {
    const numberOfGuessWords = guessedWords.length;
    return guessedWords[numberOfGuessWords - 1];
  }

  function updateGuessedWords(letter) {
    const currentWordArr = getCurrentArr();

    if (currentWordArr && currentWordArr.length < 5) {
      currentWordArr.push(letter);

      const availableSpaceEl = document.getElementById(String(availableSpace));
      availableSpace += 1;
      availableSpaceEl.textContent = letter;
    }
  }

//   handle when user input word
  function handleSubmitWord() {
    const currentWordArr = getCurrentArr();
    if (currentWordArr.length !== 5) {
      window.alert("Word must be 5!");
    }

    const currentWord = currentWordArr.join("")
    if (currentWord === word) {
      window.alert("Congratulation!");
    }
    guessedWords.push([])
  }
  //   make square with javascript
  function createSquares() {
    const gameBoard = document.getElementById("board");
    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
      const letter = target.getAttribute("data-key");

      if (letter === "enter") {
        handleSubmitWord();
        return;
      }
      //   console.log(letter);
      updateGuessedWords(letter);
    };
  }
});
