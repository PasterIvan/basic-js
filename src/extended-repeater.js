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
  const res = ['']
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      const subArr = []
      if (options.additionRepeatTimes){
        for (let a = 0; a < options.additionRepeatTimes; a++) {
          if (options.addition !== undefined)
          subArr[a] = `${options.addition}`
        }
      } else {
        if (options.addition !== undefined)
          subArr[0] = `${options.addition}`
      }
      res[i] = '' + str + subArr.join(options.additionSeparator ? options.additionSeparator : '|')
    }
  } else {
    const subArr = []
    if (options.additionRepeatTimes){
      for (let a = 0; a < options.additionRepeatTimes; a++) {
        subArr[a] = `${options.addition}`
      }
    } else {
      subArr[0] = `${options.addition}`
    }
    res[0] = '' + str + subArr.join(options.additionSeparator ? options.additionSeparator : '|')
  }

 return res.join(options.separator ? options.separator : '+')
}

module.exports = {
  repeater
};
