import { favoritesReducer } from "./favoritesReducer";

describe("favoritesReducer", () => {
  it("should have default state", () => {
    const expected = [];
    const result = favoritesReducer()
    expect(result).toEqual(expected)
})
  
})