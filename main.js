console.log("Crossroads");

/* Model */

var won;
var currentPlayer;
var board;

startGame() // call function start game here, to initiatize the game, more elegent!!!

// 1. START THE GAME

// inputs:
// -current player, board, wom


// output:
// -board is emptied, player x, won is false

function startGame() {
  var won = false;
  var currentPlayer = "x";
  var board = ["","","", //0,1,2
            "","","",  //3,4,5
            "","","",]; //6,7,8
          };


// 2. MOVE (CHANGE TURN)
    // Inputs:
      // Whose turn it is
      // What cell

    // Outputs:
      // Fill in cell with the right player
      // Calculate if there is a winner
      // Changes turn


var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon() ) {
      won = true
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  };
};

/* currentPlayer = (currentPlayer === "X" ? "O" : "X") */

// 3. WIN CONDITION

var gameWon = function() {
  return( (board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== "")) ||
       ((board[3] === board[4]) && (board[5] === board[3]) && (board[3] !== "")) ||
       ((board[6] === board[7]) && (board[8] === board[6]) && (board[6] !== "") );
        //this statment is already true or false
};

// updating the DOM, draw init state to page
var render = function() {


};








