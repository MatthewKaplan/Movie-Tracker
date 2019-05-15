import tvReducer from "../tvReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const tvShows = MockData.popularShows;

describe("tvReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = tvReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of popular tv shows", () => {
    const expected = tvShows;
    const result = tvReducer(undefined, actions.fetchPopularTv(tvShows));

    expect(result).toEqual(expected);
  });
});