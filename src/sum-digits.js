const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('');

  let result = arr.reduce((acc, item) => { 
    return acc + +item}, 0);

  console.log( result )

  if(result > 9) {
    result = result % 10 + Math.floor(result / 10);
  }

  return result
}

module.exports = {
  getSumOfDigits
};
