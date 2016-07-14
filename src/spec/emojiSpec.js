import { encode, decode } from '../emoji-cipher'

describe("encode", function() {
  it("should translate an alpha string into an emoji string", function() {
    expect(encode('abcdefghijklmnopqrstuvwxyz')).toEqual('👽🔔☁️💧👂👨‍👩‍👦⛳️❤️🍦🎃🔑🔒💪🎶🌊🌴❓🌹😄👍☔️🎮🍷❌☯💤')
  })

  it("should translate an alpha string with caps into the same emoji string an all lowercase string would have", function() {
    expect(encode('ABcdEfghijkLMNopqrstuVWXyz')).toEqual('👽🔔☁️💧👂👨‍👩‍👦⛳️❤️🍦🎃🔑🔒💪🎶🌊🌴❓🌹😄👍☔️🎮🍷❌☯💤')
  })
})

describe("decode", function() {
  it("should translate an emoji string into an alpha string", function() {
    expect(decode('👽🔔☁️💧👂👨‍👩‍👦⛳️❤️🍦🎃🔑🔒💪🎶🌊🌴❓🌹😄👍☔️🎮🍷❌☯💤')).toEqual('abcdefghijklmnopqrstuvwxyz')
  })
})