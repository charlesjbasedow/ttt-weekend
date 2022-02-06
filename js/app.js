/*-------------------------------- Constants --------------------------------*/


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
  boardArray = boardArray(9).fill(null)
  playerTurn = 1
  gameWinner = null
  
  render()
}

function render() {

}