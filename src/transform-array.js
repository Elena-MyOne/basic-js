const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if(arr.includes(!typeof number)) return arr;
  if(!arr.includes('--discard-prev') && !arr.includes('--double-prev') && !arr.includes('--double-next') && !arr.includes('--discard-next')) return arr;

  const result = [];

    for (let i = 0; i < arr.length; i++) {

      if(arr[i] === '--discard-prev') {
        result.push(...arr)
        if(i === 0) {
          result.shift()
        } else {
          result.splice(i - 1, 2);
        }
      }
    
      if(arr[i] === '--discard-next') {
        result.push(...arr)
        if(i === arr.length -1) {
          result.pop()
        } else if(arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          result.splice(i, 3);
          return result
        } else {
          result.splice(i, 2);
        }
      }
    
      if(arr[i] === '--double-prev') {
        result.push(...arr)
        if(i === 0) {
          result.shift()
        } else {
          result.splice(i, 1, arr[i - 1]);
        }
      }
    
      if(arr[i] === '--double-next') {
        result.push(...arr)
        if(i === arr.length -1) {
          result.pop()
        } else if(arr[i + 2] === '--double-prev') {
          result.splice(i, 1, arr[i + 1], arr[i + 1]);
          result.splice(i + 3, 1);
          return result;
        } else if(arr[i + 2] === '--discard-prev') {
          result.splice(i, 1);
          result.splice(i + 1, 1)
          return result
        } else {
          result.splice(i, 1, arr[i + 1]);
        }
      }
    }

return result
}

module.exports = {
  transform
};
