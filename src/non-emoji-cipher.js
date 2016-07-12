// 'use strict'
//
const cipher = {
  a: '😸',
  b: '🏃',
  c: '🐴',
  d: '👿',
  e: '🤓'
}

var input = 'bad'

const encode = str => {
// export function encode(str) {
  const strArray = str.split('')
  const newStrArray = strArray.map( char => cipher[ char ] )
  
  return newStrArray.join('')
}

// function encode (str) {
//   var strArray = str.split('')
//   var newStrArray = strArray.map(function (char) {
//     return cipher[char]
//   })
//   return newStrArray.join('')
// }

export { encode }

console.log(encode(input))
