/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let newArr = [...arr]
    let res = []

    newArr.map((el, index)=>{
    if (el === '--double-next') {
      res[index] = newArr[index + 1]
        newArr[index] = newArr[index + 1]
    }
    if (el === '--double-prev' && newArr[index-1] !== undefined) {
      res[index] = newArr[index - 1]
        newArr[index] = newArr[index - 1]
    }
    if (el === '--double-prev') {
      res[index] = undefined
    }
    if (el === '--discard-next') {
      res[index] = undefined
      newArr[index + 1] = undefined
    }
    if (el === '--discard-prev') {
      res[index -1] = undefined
    }
    res[index] = newArr[index]
  })
  return res.filter(el => {
          return el !== undefined
              && el !== '--discard-prev'
              && el !== '--discard-next'
              && el !== '--double-prev'
              && el !== '--double-nex'
      }
  )
}

module.exports = {
  transform
};
