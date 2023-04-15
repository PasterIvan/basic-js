const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const res = []
  let addition = options.addition
  for (let i = 0; i < options.repeatTimes; i++) {
    const subArr = []
    for (let a = 0; a < options.additionRepeatTimes; a++) {
      subArr[a] = addition.addition ? repeater(str, addition.addition) : addition
    }
    res[i] = '' + str + subArr.join(options.additionSeparator ? options.additionSeparator : '|')
  }
 return res.join(options.separator ? options.separator : '+')
}

module.exports = {
  repeater
};
