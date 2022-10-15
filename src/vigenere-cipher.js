const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
 
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let result = '';
    let count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    while (key.length < message.length) {
      key = key + key;
    }

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let letter = message.charCodeAt(i) + key.charCodeAt(count) - 65;
        if (letter > 90) {
          letter = letter - 26;
        }
        result = result + String.fromCharCode(letter);
        count++;
      } else {
        result = result + message[i];
      }
        
    }

    if (this.type === true || this.type === undefined) return result;
    return result.split('').reverse().join('');

  }

  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let result = '';
    let count = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    while (key.length < message.length) {
      key = key + key;
    }

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let letter = message.charCodeAt(i) - key.charCodeAt(count) + 65;
        if (letter < 65) {
          letter = letter + 26;
        }
        result = result + String.fromCharCode(letter);
        count++;
      } else {
        result = result + message[i];
      }
        
    }

    if (this.type === true || this.type === undefined) {return result};
    return result.split('').reverse().join('');

  }

}

module.exports = {
  VigenereCipheringMachine
};
