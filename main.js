console.log("Crossroads");

/* Model */

var won = false;
var currentPlayer = "x";
var board = ["","","", //0,1,2
            "","","",  //3,4,5
            "","","",]; //6,7,8


// 1. START THE GAME
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
      currentPlayer === "X";
    }
  };
};

/* currentPlayer = (currentPlayer === "X" ? "O" : "X") */

// 3. WIN CONDITION

var gameWon = function() {

};
