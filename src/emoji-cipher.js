'use strict'

import { get as getEmoji } from 'node-emoji'

const cipher = {
  a: getEmoji('alien'),
  b: getEmoji('bell'),
  c: getEmoji('cloud'),
  d: getEmoji('droplet'),
  e: getEmoji('ear'),
  f: getEmoji('family'),
  g: getEmoji('golf'),
  h: getEmoji('heart'),
  i: getEmoji('icecream'),
  j: getEmoji('jack_o_lantern'),
  k: getEmoji('key'),
  l: getEmoji('lock'),
  m: getEmoji('muscle'),
  n: getEmoji('notes'),
  o: getEmoji('ocean'),
  p: getEmoji('palm_tree'),
  q: getEmoji('question'),
  r: getEmoji('rose'),
  s: getEmoji('smile'),
  t: getEmoji('thumbsup'),
  u: getEmoji('umbrella'),
  v: getEmoji('video_game'),
  w: getEmoji('wine_glass'),
  x: getEmoji('x'),
  y: getEmoji('yin_yang'),
  z: getEmoji('zzz')
}

let reverseObject = givenObject => {
  let newObject = {}
  Object.keys(givenObject).forEach( k => {
    let v = givenObject[k]
    newObject[v] = k
  });
  return newObject
}

const encode = str => {
  return str.toLowerCase()
  .split('')
  .map(encodeChar)
  .join('')
}

const encodeChar = ch => {
  return ('abcdefghijklmnopqrstuvwxyz'.indexOf(ch) >= 0) ? cipher[ch] : ch
}
//object.keys for getting emojis cipher where keys are alpha, object.keys of reverse cipher, .join
//pull repo.
//nmp install
const decode = emojiStr => {
  const reverseCipher = reverseObject(cipher)
  let alphaStr = '';
  
  var chars = emojiStr.split('')
  while (chars.length > 0) {
    var emoji = chars.shift()
    while (!reverseCipher[emoji]) {
      if (chars.length === 0) return alphaStr
      emoji += chars.shift()
    }
    alphaStr += reverseCipher[emoji]
  }
  return alphaStr
}

export { encode, decode, reverseObject, cipher }

console.log(encode('abcdefghijklmnopqrstuvwxyz'))