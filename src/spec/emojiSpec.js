import { encode } from '../emoji-cipher'

describe("encode", function() {
  it("should work for a basic string", function() {
    expect(encode('abcde')).toEqual('😸🏃🐴👿🤓')
  })}
)
