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

let boardSqs = document.querySelectorAll('.square')
let statusMsg = document.querySelector('.game-status')
let board = document.querySelector('.board')




/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', handleClick)


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

function handleClick(evt) {
  let squareIdx = parseInt(evt.target.id.replace('sqr', ''))

  if(boardArray[squareIdx]) {
    return
  } else if(gameWinner !== null) {
    return
  }
  boardArray[squareIdx] = playerTurn
  playerTurn = playerTurn * -1
  getWinner()
}



// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
