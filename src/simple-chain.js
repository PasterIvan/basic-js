/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (this.chain) {
      this.chain = `${this.chain}~~( ${value} )`
      return this
    }
    this.chain = `( ${value} )`
    return this
  },
  removeLink(position) {
    if (this.chain.split('~~').length < position + 1
        || position < 1
        || Math.floor(position) !== position) {
      this.chain = ''
      throw new Error('You can\'t remove incorrect link!')
    } else {
      this.chain = this.chain.split('~~').filter((_, index) => index + 1 !== position).join('~~')
      return this
    }
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    const res = this.chain
    this.chain = ''
    return res
  }
};

module.exports = {
  chainMaker
};
