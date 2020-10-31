const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    const m = message.toUpperCase();
    const k = key.toUpperCase();
    let j = 0;
    let result = '';

    for (let i = 0; i < m.length; i++) {
      const position = this.alphabet.indexOf(m.charAt(i));

      if (position === -1) {
        result += m.charAt(i);
        continue;
      }

      result += this.alphabet.charAt((position + this.alphabet.indexOf(k.charAt(j % k.length))) % this.alphabet.length);
      j++;
    }

    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();

    const m = message.toUpperCase();
    const k = key.toUpperCase();
    let j = 0;
    let result = '';

    for (let i = 0; i < m.length; i++) {
      const position = this.alphabet.indexOf(m.charAt(i));

      if (position === -1) {
        result += m.charAt(i);
        continue;
      }

      result += this.alphabet.charAt(((position + this.alphabet.length) - this.alphabet.indexOf(k.charAt(j % k.length))) % this.alphabet.length);
      j++;
    }

    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
