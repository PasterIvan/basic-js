const {NotImplementedError} = require("../extensions");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let obj = {}
    let messUp = message.toUpperCase()
    let keyUp = key.toUpperCase()
    for (let a = 0; a < alf.length; a++) {
      obj[alf[a]] = a
    }
    let res = ''
    for (let i = 0; i < messUp.length; i += 1) {
      if (!alf.includes(obj[messUp[i]]) && obj[messUp[i]]!==undefined) {
        res += alf[((obj[messUp[i]] + obj[keyUp[(i % keyUp.length)]]) % alf.length)]
      } else {
        res += messUp[i]
      }
    }
    return this.type ? res : res.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let obj = {}
    let messUp = encryptedMessage.toUpperCase()
    let keyUp = key.toUpperCase()
    let count = 0

    for (let a = 0; a < alf.length; a++) {
      obj[alf[a]] = a
    }
    let res = ''
    for (let i = 0; i < messUp.length; i++) {
      if (!alf.includes(obj[messUp[i]]) && obj[messUp[i]]!==undefined) {
        res += alf[(obj[messUp[i]] - obj[keyUp[i % keyUp.length]] + alf.length) % alf.length]

      } else {
        res += messUp[i]

      }
    }

    return this.type ? res : res.split('').reverse().join('');
  }
}
const res = new VigenereCipheringMachine()
res.encrypt('attack at dawn!', 'alphonse')

module.exports = {
  VigenereCipheringMachine
};
