const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  if(domains.length === 0) return {}

  const result = {};
  const arr = [];

  domains.forEach(item => {
   item = item.split('.').reverse();
   let innerArr = [];
   let key = '';
   for(let i = 0; i < item.length; i++) {
    innerArr.push(item[i]);
    key = innerArr.join('.');
    arr.push(`.${key}`);
   }
  })

  arr.forEach( elem => {
    (!result.hasOwnProperty(elem)) ? result[elem] = 1 : result[elem]++
  })

  return result

}

module.exports = {
  getDNSStats
};
