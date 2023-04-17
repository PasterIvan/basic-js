const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
  const arr = n.toString().split('')
  let arrSums = []
  for (let i = 0; i < arr.length; i++) {
    let newArr = [...arr]
    newArr.splice(i, 1)
    arrSums[i] = newArr.join('')
  }

return Math.max(...arrSums)
}

module.exports = {
  deleteDigit
};
