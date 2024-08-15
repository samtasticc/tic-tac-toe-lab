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

const board = [
    '', '', '',
    '', '', '',
    '', '', '',
];

let turn = 'X'
let winner = false;
let tie = false;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

/*-------------------------------- Functions --------------------------------*/

function init() {
    updateBoard()
}
init(); 

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i], `board at index:${i}`);
        console.log(squareEls[i], `squareEls at index: ${i}`)
        if (board[i] === '') {
            squareEls[i].textContent = ''
        }
        if (board[i] === 'X') {
            squareEls[i].textContent = 'X'
        }
        if (board[i] === 'O') {
            squareEls[i].textContent = 'O'
        }
    }
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!"
    } else {
        messageEl.textContent = "Hey, you won!"
    }
}

function handleClick(event) {
    const squareIndex = event.target.id
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return
    } else if (winner === true) {
        return
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(targetIndex) {
    board[targetIndex] = turn
    console.log(board)
}

function checkForWinner() {
    if (
        (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
        (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
        (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) {
        winner = true;
    }
}

function checkForTie() {
    if (winner === true) {
        return
    }
    board.forEach((square) => {
        if (square === '') {
            tie = false
        } else {
            tie === true
        }
    })
    console.log(tie)
}

function switchPlayerTurn() {
    if (winner === true) {
        return        
    } else {
        if(turn === 'X') {
            turn = 'O'
        } else if (turn === 'O') {
            turn = 'X'
        }
    }
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(function (square) {
    square.addEventListener('click', handleClick);
})

resetBtnEl.addEventListener('click', handleClick)