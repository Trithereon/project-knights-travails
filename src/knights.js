// knightMoves function module
function knightMoves(start, end) {
  // Validate input.
  validateInput(start, end);

  const queue = [{ position: start, path: [start] }];
  const visited = new Set();
  const startStr = JSON.stringify(start);
  const endStr = JSON.stringify(end);
  visited.add(startStr);

  while (queue.length > 0) {
    // dequeue item
    const item = queue.shift();
    // check if position matches end pos.
    if (JSON.stringify(item.position) === endStr) {
      const path = JSON.stringify(item.path);
      return `You made it in ${
        item.path.length - 1
      } moves! Here is your path: ${path}`;
    } else {
      // else, genMoves(item), add each one to queue.
      const nextMoves = genMoves(item.position);
      nextMoves.forEach((move) => {
        const moveStr = JSON.stringify(move);
        // If not visited yet, enqueue move.
        if (!visited.has(moveStr)) {
          visited.add(moveStr);
          queue.push({ position: move, path: [...item.path, move] });
        }
      });
    }
  }
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
function genMoves(node) {
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
  // The sum of the current node + each move, if valid,
  // will be pushed to the validMoves array.
  potentialMoves.forEach((move) => {
    const result = [node[0] + move[0], node[1] + move[1]];
    if (isValid(result)) {
      validMoves.push(result);
    }
  });

  return validMoves;
}
