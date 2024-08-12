/*-------------------------------- Constants --------------------------------*/
// values that cannot be reassigned once they are declared (const)


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
const turn = (x) => {

}

// Use a variable named winner to represent if anyone has won yet.
// Set the winner to false.
let winner = false;
// Use a variable named tie to represent if the game has ended in a tie.
// Set tie to false.
let tie = false;



/*------------------------ Cached Element References ------------------------*/
// when you access an element in the DOM

// In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelector('.sqr')


// In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
// reusuable blocks of code designed to perform a specific task

// Create a function called init.
function init() {

}
init(); // Call the init function when the app loads.
console.log(init, '<--- called the init function')
// Call a function named render() at the end of the init() function.
render();

/*----------------------------- Event Listeners -----------------------------*/
// a function that 'listens' for a specific event to occur

// ! Pseudocode
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

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