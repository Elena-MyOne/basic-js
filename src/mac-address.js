const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr2 = '0123456789ABCDEF'.split('');
  let arr = n.split('-');
  let counter = 0;

  if(n.includes(' ') || arr.length !== 6) return false;

  for( let i = 0; i < arr.length; i++) {
    if( arr2.includes(arr[i][0]) && arr2.includes(arr[i][1])) {
      counter += 1;
    }
  }

  if(counter === 6) return true;

  return false

}

module.exports = {
  isMAC48Address
};
