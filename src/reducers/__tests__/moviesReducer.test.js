import moviesReducer from "../moviesReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const movies = MockData.popularMovies;

describe("moviesReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of popular movies", () => {
    const expected = movies;
    const result = moviesReducer(undefined, actions.fetchPopularMovies(movies));

    expect(result).toEqual(expected);
  });
});
