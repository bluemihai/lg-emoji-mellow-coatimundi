'use strict'

const cipher = {
  a: '😸',
  b: '🏃',
  c: '🐴',
  d: '👿',
  e: '🤓'
}

const encode = str => {
  return str
    .split('')
    .map(char => cipher[ char ])
    .join('')
}

export { encode }

console.log('hello')
console.log(encode('bad'))