const { NotImplementedError } = require('../extensions/index.js');

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
  if (str.length === 0) return '';

 const result = []

  let arr = str.split('');

  for(let i = 0; i < str.length; i++) {
    let counter = 1;
    while(arr[i] === arr[i + 1]) {
      counter ++;
      i++
    }
    (counter === 1) ? result.push(arr[i]) : result.push(counter, arr[i])
  }

  return result.join('')

}

module.exports = {
  encodeLine
};
