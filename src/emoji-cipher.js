'use strict'

const cipher = {
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
  return str
    .split('')
    .map(char => cipher[ char ])
    .join('')
}

const decode = emojiStr => {
  const reverseCipher = reverseObject(cipher)
  let alphaStr = ''
  for (var chr of emojiStr) {
    alphaStr += reverseCipher[chr]
  }
  return alphaStr
}

export { encode, decode, reverseObject }
