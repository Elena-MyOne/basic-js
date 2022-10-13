const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(members === '') return false;
  if(Array.isArray(members) === false) return false;

  let result = [];

  members.forEach(element => {
    if(typeof element === 'string') {
      let str = element.split(' ').join('').toUpperCase();
      result.push(str[0])
    }
  });

  return result.sort().join('')
}

module.exports = {
  createDreamTeam
};
