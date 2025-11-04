// knightMoves function module

export default function knightMoves(start, end) {
  // Validate input.
  _validateInput(start, end);
}

function _validateInput(start, end) {
  if (
    start[0] < 0 ||
    start[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    !Array.isArray(start)
  ) {
    throw new Error("Start position invalid. Must be between [0,0] and [7,7]");
  }
  if (
    end[0] < 0 ||
    end[0] > 7 ||
    end[1] < 0 ||
    end[1] > 7 ||
    !Array.isArray(end)
  ) {
    throw new Error("End position invalid. Must be between [0,0] and [7,7]");
  }
}
