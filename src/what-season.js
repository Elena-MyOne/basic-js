const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === null || date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error('Invalid date!');
  if(Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!');

  let season = date.getMonth();

  if(season === 11 || season === 0 || season === 1) return 'winter';
  if(season === 2 || season === 3 || season === 4) return 'spring';
  if(season === 5 || season === 6 || season === 7) return 'summer';
  if(season === 8 || season === 9 || season === 10) return 'fall';
}

module.exports = {
  getSeason
};
