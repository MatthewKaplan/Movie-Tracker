import searchReducer from "../searchReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const search = MockData.searchResults;

describe("searchReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = searchReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of searched movies", () => {
    const expected = search;
    const result = searchReducer(undefined, actions.fetchSearch(search));

    expect(result).toEqual(expected);
  });
});