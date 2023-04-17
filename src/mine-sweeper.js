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
  return matrix.map((arr, x) => arr.map((el, y) => {
    let res = 0;
    for (let row = x - 1 >= 0 ? x - 1 : x; row < x + 2 && row < matrix.length; row++) {
      for (let column = y - 1 >= 0 ? y - 1 : y; column < y + 2 && column < arr.length; column++) {
        if (matrix[row][column] === true && !(row === x && column === y)) res += 1;
      }
    }
    return res;
  }))
}

module.exports = {
  minesweeper
};
