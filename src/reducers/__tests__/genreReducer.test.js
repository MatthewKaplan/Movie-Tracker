import genreReducer from "../genreReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const movies = MockData.genreResults;

describe("genreReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = genreReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of cetian genre movies", () => {
    const expected = movies;
    const result = genreReducer(undefined, actions.fetchGenres(movies));

    expect(result).toEqual(expected);
  });
});