const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    (value === undefined) ? this.chain.push('( )') : this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if( typeof position !== 'number' || position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
   } else {
    this.chain = this.chain.slice(0, position -1).concat(this.chain.slice(position));
   return this
   }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
