const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const N = matrix.length;
  const M = matrix[0].length;

  const GAME_ARRAY = Array.from({ length: N }, () =>
    Array.from({ length: M }).fill(0),
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const IS_MINE = matrix[i][j] == true;

      if (IS_MINE) {
        if (i > 0) {
          if (j > 0) {
            GAME_ARRAY[i - 1][j - 1] += 1;
          }

          GAME_ARRAY[i - 1][j] += 1;

          if (j + 1 < M) {
            GAME_ARRAY[i - 1][j + 1] += 1;
          }
        }

        if (j > 0) {
          GAME_ARRAY[i][j - 1] += 1;
        }

        GAME_ARRAY[i][j] = 1;

        if (j + 1 < M) {
          GAME_ARRAY[i][j + 1] += 1;
        }

        if (i + 1 < N) {
          if (j > 0) {
            GAME_ARRAY[i + 1][j - 1] += 1;
          }

          GAME_ARRAY[i + 1][j] += 1;

          if (j + 1 < M) {
            GAME_ARRAY[i + 1][j + 1] += 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const IS_MINE = matrix[i][j] == true;
      if (IS_MINE) {
        GAME_ARRAY[i][j] = 1;
      }
    }
  }

  return GAME_ARRAY;
}

module.exports = {
  minesweeper,
};
