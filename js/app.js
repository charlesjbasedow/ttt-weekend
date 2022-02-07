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
  boardArray = [null, null, null, null, null, null, null, null]
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
  let squareIdx = parseInt(evt.target.id.replace('sq', ''))

  if(boardArray[squareIdx]) {
    return
  } else if(gameWinner !== null) {
    return
  }
  boardArray[squareIdx] = playerTurn
  playerTurn = playerTurn * -1
  gameWinner = getWinner()
  render()
}

  function getWinner() {
  
    for (let i = 0; i < winningCombos.length; i++) {
      if( Math.abs( boardArray[ winningCombos[i][0] ] + boardArray[ winningCombos[i][1] ] + 
        boardArray[ winningCombos[i][2] ]) === 3 ) {
          return boardArray[winningCombos[i][0]]
        }
    }
  
    if (boardArray.includes(null)) {
    return null
    } else {
      return 'T'
    }
  }
  
  
	  
	   
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.


		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
