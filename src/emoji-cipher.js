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
	return emojiStr
		.split('')
		.map(char => /*reverse cipher??*/ [char])
		.join('')
}

export { encode }
