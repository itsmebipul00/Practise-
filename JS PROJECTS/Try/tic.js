const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', () => window.location.reload())

function startGame() {
  // window.location.reload()
  circleTurn = false

  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
  })

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener('result', (e)=>{
    if(e.results[0].isFinal){
      const text = [...e.results]
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
    //  console.log(text)   
     const cell= document.getElementById(`${text}`);
    //  console.log(cell)
     const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
     placeMark(cell, currentClass)
     if (checkWin(currentClass)) {
       endGame(false)
     } else if (isDraw()) {
       endGame(true)
     } else {
       swapTurns()
       setBoardHoverClass()
     }
    }
  });

  recognition.addEventListener('end', ()=>{
    recognition.start();
  })

  recognition.start();

  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}


function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}