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

const boardSqs = document.querySelectorAll('.square')
const statusMsg = document.querySelector('.game-status')
const board = document.querySelector('.board')
const resetBtn = document.querySelector('.reset-btn')




/*----------------------------- Event Listeners -----------------------------*/
board.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init()

function init () {
  boardArray = [null, null, null, null, null, null, null, null, null]
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
  boardSqs[idx].textContent = squareLetter
})
  if (gameWinner === null) {
    statusMsg.textContent = `Player ${playerTurn === 1 ? 'X' : 'O'}, it's your turn to act`
  } else if (gameWinner === 'T') {
    statusMsg.textContent = 'This match resulted in a DRAW!'
  } else {
    statusMsg.textContent = `Congrats ${gameWinner === 1 ? 'X' : 'O'}'s! You are the WINNER`
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
      if(Math.abs(boardArray[winningCombos[i][0]] + boardArray[winningCombos[i][1]] + 
        boardArray[winningCombos[i][2] ]) === 3 ) {
          
          return boardArray[winningCombos[i][0]]
        }
    }
    
    if (boardArray.includes(null)) {
    return null
    
  } else {
      return 'T'
    }
  } 