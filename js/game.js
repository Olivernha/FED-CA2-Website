// Game state variables
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

// Function to handle the click event on a cell
function placeSymbol(cell) {
  const index = Array.from(document.querySelectorAll(".cell")).indexOf(cell);
  if (board[index] === "") {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
        alert(`${currentPlayer} wins!`)
      resetBoard();
    } else if (board.indexOf("") === -1) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

// Function to check if a player has won
function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

// Function to reset the board
function resetBoard() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.textContent = ""));
}
