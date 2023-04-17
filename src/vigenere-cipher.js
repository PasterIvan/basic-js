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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  //   if (!message || !key) {
  //     throw new Error('Incorrect arguments!')
  //   }
  //   let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  //   let obj = {}
  //   let messUp = message.toUpperCase()
  //   let keyUp = key.toUpperCase()
  //   for (let a = 0; a < alf.length; a++) {
  //     obj[alf[a]] = a
  //   }
  //   let res = ''
  //   for (let i = 0; i < messUp.length; i++) {
  //     if (obj[messUp[i]]) {
  //       res += alf[(obj[messUp[i]] + obj[keyUp[i % keyUp.length]]) % 26]
  //     } else {
  //       res += messUp[i]
  //     }
  //   }
  //   return this.type ? res : res.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
    // if (!encryptedMessage || !key) {
    //   throw new Error('Incorrect arguments!')
    // }
    // let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // let obj = {}
    // let messUp = encryptedMessage.toUpperCase()
    // let keyUp = key.toUpperCase()
    //
    // for (let a = 0; a < alf.length; a++) {
    //   obj[alf[a]] = a
    // }
    // let res = ''
    // for (let i = 0; i < messUp.length; i++) {
    //   if (obj[messUp[i]]) {
    //     res += alf[(obj[messUp[i]] - obj[keyUp[i % keyUp.length]] + 26) % 26]
    //   } else {
    //     res += messUp[i]
    //   }
    // }
    //
    // return this.type ? res : res.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
