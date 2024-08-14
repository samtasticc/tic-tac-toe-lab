/*-------------------------------- Constants --------------------------------*/
// values that cannot be reassigned once they are declared (const)
// In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.

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
// containers for storing data (const, let)

// Use a variable named board to represent the state of the squares on the board.
// Set the board variable to an array containing nine empty strings ('') representing empty squares.
const board = [
    '', '', '',
    '', '', '',
    '', '', '',
];

// Use a variable named turn to track whose turn it is.
// Set the turn to X - this will represent player X.
let turn = 'X'

// Use a variable named winner to represent if anyone has won yet.
// Set the winner to false.
let winner = false;
// Use a variable named tie to represent if the game has ended in a tie.
// Set tie to false.
let tie = false;



/*------------------------ Cached Element References ------------------------*/
// when you access an element in the DOM

// In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr')


// In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
// reusuable blocks of code designed to perform a specific task

// Create a function called init.
function init() {
    updateBoard() // <--- called the init function
}
init(); // Call the init function when the app loads.
// console.log(init, '<--- called the init function') // no ya didnt

// Call a function named render() at the end of the init() function.
render();

// Create a function called render, then set it aside for now.
// Invoke both the updateBoard and the updateMessage functions inside your render function.
function render() {
    updateBoard()
    updateMessage()
}

// Create a function called updateBoard.
function updateBoard() {
    for (let i = 0; i < board.length; i++) {

        // Using i you can iterate over the board array. try console.logging the board at index i
        console.log(board[i], `board at index:${i}`);

        // Then as i will be the same value on each iteration access the corresponding square in squareEls
        console.log(squareEls[i], `squareEls at index: ${i}`)

        // Based on the values of board, use if statements to assign the square its appropriate textContent
        // if board[i] is "" then squareEls[i] textContent is ""
        if (board[i] === '') {
            // then assign empty string
            squareEls[i].textContent = ''
        }
        // if board[i] is "X" then squareEls[i] textContent is "X"
        if (board[i] === 'X') {
            //then assign 'X'
            squareEls[i].textContent = 'X'
        }
        // if board[i] is "O" then squareEls[i] textContent is "O"
        if (board[i] === 'O') {
            // then assign 'O'
            squareEls[i].textContent = 'O'
        }
    }
    // squareEls.forEach((element) => {
    //     console.log(element)
    // });

}

function updateMessage() {
    // If both winner and tie have a value of false (meaning the game is still in progress), 
    if (winner === false && tie === false) {
        // render whose turn it is.
        messageEl.textContent = `It's ${turn}'s turn`
        // If winner is false, but tie is true, 
    } else if (winner === false && tie === true) {
        // render a tie message.    
        messageEl.textContent = "It's a tie!"
        // Otherwise, render a congratulatory message to the player that has won.
    } else {
        messageEl.textContent = "Hey, you won!"
    }
}

// Create a function called handleClick. It will have an event parameter.
function handleClick(event) {
    // Obtain the index of the clicked square. To do this, get the index from an id assigned to the target element in the HTML. Assign this to a constant called squareIndex.
    const squareIndex = event.target.id
    // console.log(board[squareIndex])
    // If the board has a value of 'X' or 'O' at the squareIndex position
    // board[0] => board[squareIndex]
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        // console.log('here')
        // immediately return out of handleClick
        return
    // Also, if winner is true
    } else if (winner === true) {
        // immediately return out of handleClick because the game is over.
        return 
    }
    // console.log('you freakin did it')
    
    //  In the handleClick function, call the placePiece function you just created. Pass squareIndex to it as an argument.
    placePiece(squareIndex)
    // In the handleClick function, call the checkForWinner function immediately after calling the placePiece function.
    checkForWinner()
    render()
}

// Create a function named placePiece that accepts an index parameter.
function placePiece(targetIndex) {
    // Update the board array at the index so that it is equal to the current value of turn.
    board[targetIndex] = turn
    console.log(board)
}

// Create a function called checkForWinner.
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

// Create a function named checkForTie.
function checkForTie() {
    //Check if there is a winner. If there is, 
    if (winner === true) {
        // return out of the function.
        return
    }
    // Check if the board array still contains any elements with a value of ''. 
    board.forEach((square) => {
        if (square === '') {
            tie = false
        } else {
            tie === true
        }
    })
    console.log(tie)
}
/*----------------------------- Event Listeners -----------------------------*/
// a function that 'listens' for a specific event to occur

// Add an event listener to each of the existing squareEls with a loop. Set up the event listener to respond to the 'click' event. The event listener should call the handleClick function you created in step 6a.
squareEls.forEach(function (square) {
    square.addEventListener('click', handleClick);
})


// ! Pseudocode





//7) Create Reset functionality.

// ? Minimum Requirements
// ? Display an empty tic-tac-toe board when the page is initially displayed.
// ? A player can click on the nine cells to make a move.
// ? Every click will alternate between marking an X and O.
// ? Display whose turn it is (X or O).
// ? The cell cannot be played again once occupied with an X or O.
// ? Provide win logic and display a winning message.
// ? Provide logic for a cat’s game (tie), also displaying a message.
// ? Provide a Reset Game button that will clear the contents of the board.