import { encode, decode } from '../emoji-cipher'

describe("encode", function() {
  it("should translate an alpha string into an emoji string", function() {
    expect(encode('abcde')).toEqual('😸🏃🐴👿🤓')
  })}
)

describe("decode", function() {
  it("should translate an emoji string into an alpha string", function() {
    expect(decode('😸🏃🐴👿🤓')).toEqual('abcde')
  })}
)