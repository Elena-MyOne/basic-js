const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.every(item => item === -1)) return arr;
  const indexArr = [];

  arr.forEach((item, index) => {
    if(item === -1) {
      indexArr.push(index)
    }
  })

  const newArr = arr.filter(item => item !== -1).sort((a, b) => a - b)

  for(let i = 0; i < indexArr.length; i++) {
    newArr.splice(indexArr[i], 0, -1)
  }

  return newArr
}

module.exports = {
  sortByHeight
};
