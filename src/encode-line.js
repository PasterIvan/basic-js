/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = []
  const arr = str.split('')
  let count = 1
  for (let i=1; i<arr.length; i++) {
    if (arr[i] === arr[i-1]){
      count+= 1
    } else {
      res.push(count === 1? str[i-1] : (count + str[i-1]))
      count = 1
    }
    if (i === arr.length - 1) res.push(count === 1 ? str[i] : (count + str[i]))
  }

  return res.join('')
}
encodeLine('aabbbc')
module.exports = {
  encodeLine
};
