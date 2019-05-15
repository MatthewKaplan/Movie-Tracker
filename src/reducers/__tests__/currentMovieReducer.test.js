import currentMovieReducer from "../currentMovieReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const movies = MockData.favoritedMovies;

describe("currentMovieReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = currentMovieReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of favorited movies", () => {
    const expected = movies;
    const result = currentMovieReducer(undefined, actions.currentMovie(movies));

    expect(result).toEqual(expected);
  });
});
