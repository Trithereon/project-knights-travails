// knightMoves function module

function knightMoves(start, end) {
  // Validate input.
  validateInput(start, end);

  const queue = [];
}

function validateInput(start, end) {
  if (
    !isValid(start) ||
    !Number.isInteger(start[0]) ||
    !Number.isInteger(start[1]) ||
    !Array.isArray(start)
  ) {
    throw new Error("Start position invalid. Must be between [0,0] and [7,7]");
  }
  if (
    !isValid(end) ||
    !Number.isInteger(end[0]) ||
    !Number.isInteger(end[1]) ||
    !Array.isArray(end)
  ) {
    throw new Error("End position invalid. Must be between [0,0] and [7,7]");
  }
}

function isValid(position) {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7)
    return false;
  else return true;
}

// Returns a list of valid moves in an array.
function genMoves(currentPosition) {
  const pos = currentPosition;
  const validMoves = [];

  // List of potential moves.
  const potentialMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  // Attempt each move. If valid, push to validMoves array.
  // The sum of the current pos + each move, if valid,
  // will be pushed to the validMoves array.
  potentialMoves.forEach((move) => {
    const result = [pos[0] + move[0], pos[1] + move[1]];
    if (isValid(result)) {
      validMoves.push(result);
    }
  });

  return validMoves;
}
