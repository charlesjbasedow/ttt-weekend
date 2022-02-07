/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
  
/*---------------------------- Variables (state) ----------------------------*/
let boardArray = []
let playerTurn = null
let gameWinner = null



/*------------------------ Cached Element References ------------------------*/

boardSqs = document.querySelectorAll('.square')
statusMsg = document.querySelector('.game-status')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init () {
  boardArray = new Array(9).fill(null)
  playerTurn = 1
  gameWinner = null
  
  render()
}

function render() {
boardArray.forEach((sqr, idx) => {
  let squareLetter
  if (boardArray[idx] === 1) {
    squareLetter = 'X'
  } else if (boardArray[idx] === -1) {
    squareLetter = 'O'
  } else if (boardArray[idx] === null) {
    squareLetter = ''
  }
  
  
  currentGameStatus()
})

function currentGameStatus() {
  if (gameWinner !== null) {
    statusMsg.textContent = `Player ${playerTurn === 1 ? 'X' : 'O'}, it's your turn to act`
  } else if (gameWinner === 'T') {
    statusMsg.textContent = 'This match resulted in a DRAW!'
  } else {
    statusMsg.textContent = `Congrats ${gameWinner === 1 ? 'X' : 'O'}'s! You are the WINNER`
}
}
}



	// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here