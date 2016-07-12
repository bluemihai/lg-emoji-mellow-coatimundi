'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cipher = {
  a: '😸',
  b: '🏃',
  c: '🐴',
  d: '👿',
  e: '🤓'
};

var encode = function encode(str) {
  return str.split('').map(function (char) {
    return cipher[char];
  }).join('');
};

exports.encode = encode;


console.log('hello');
console.log(encode('bad'));
//# sourceMappingURL=emoji-cipher.js.map