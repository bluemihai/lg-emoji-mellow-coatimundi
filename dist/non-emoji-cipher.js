'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 'use strict'
//
var cipher = {
  a: '😸',
  b: '🏃',
  c: '🐴',
  d: '👿',
  e: '🤓'
};

var input = 'bad';

var encode = function encode(str) {
  // export function encode(str) {
  var strArray = str.split('');
  var newStrArray = strArray.map(function (char) {
    return cipher[char];
  });

  return newStrArray.join('');
};

// function encode (str) {
//   var strArray = str.split('')
//   var newStrArray = strArray.map(function (char) {
//     return cipher[char]
//   })
//   return newStrArray.join('')
// }

exports.encode = encode;


console.log(encode(input));
//# sourceMappingURL=non-emoji-cipher.js.map