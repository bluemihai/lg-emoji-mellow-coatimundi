'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cipher = {
  a: '😸',
  b: '🏃',
  c: '🐴',
  d: '👿',
  e: '🤓',
  f: '😒',
  g: '🙄',
  h: '💩',
  i: '💅',
  j: '👻',
  k: '💃',
  l: '🖖',
  m: '🍾',
  n: '🌭',
  o: '🍕',
  p: '🌞',
  q: '🦄',
  r: '🌂',
  s: '💉',
  t: '🔮',
  u: '💣',
  v: '🚀',
  w: '💦',
  x: '💨',
  y: '😎',
  z: '😍'
};

var reverseObject = function reverseObject(givenObject) {
  var newObject = {};
  Object.keys(givenObject).forEach(function (k) {
    var v = givenObject[k];
    newObject[v] = k;
  });
  return newObject;
};

var encode = function encode(str) {
  return str.split('').map(function (char) {
    return cipher[char];
  }).join('');
};

var decode = function decode(emojiStr) {
  return emojiStr.split('').map(function (char) {
    return (/*reverse cipher??*/[char]
    );
  }).join('');
};

exports.encode = encode;

//console.log('hello')
//console.log(encode('bad'))

console.log(reverseObject({ a: 1, b: 2, c: 3 }));
//# sourceMappingURL=emoji-cipher.js.map