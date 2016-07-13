import { reverseObject } from '../emoji-cipher'
	
describe("reverseObject Function", function() {
  it("check that key and value are flipped for a single pair object", function() {
    expect(reverseObject({a:1})).toEqual({1:"a"})
  })
  it("works for an empty object", function(){
  	expect(reverseObject({})).toEqual({})
  })
	}
)