import { encode, decode } from '../emoji-cipher'

const emojiAToZ = '👽🔔☁️💧👂👨‍👩‍👦⛳️❤️🍦🎃🔑🔒💪🎶🌊🌴❓🌹😄👍☔️🎮🍷❌☯💤'

describe("encode", function() {
  it("should translate an alpha string into an emoji string", function() {
    expect(encode('abcdefghijklmnopqrstuvwxyz')).toEqual(emojiAToZ)
  })

  it("should translate an alpha string with caps into the same emoji string an all lowercase string would have", function() {
    expect(encode('ABcdEfghijkLMNopqrstuVWXyz')).toEqual(emojiAToZ)
  })
})

describe("decode", function() {
  it("should not crash for alpha string", function() {
    expect(decode('hello')).toEqual('')
  })

  xit("should work for mixed", function() {
    expect(decode('he💧l👂lo')).toEqual('de')
  })

  it("should translate an emoji string into an alpha string", function() {
    expect(decode(emojiAToZ)).toEqual('abcdefghijklmnopqrstuvwxyz')
  })


})

// test that encoding then decoding returns the same thing