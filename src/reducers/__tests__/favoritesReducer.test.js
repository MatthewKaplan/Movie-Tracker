import favoritesReducer from "../favoritesReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const movies = MockData.favoritedMovies;

describe("favoritesReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of favorited movies", () => {
    const expected = movies;
    const result = favoritesReducer(undefined, actions.favoritesList(movies));

    expect(result).toEqual(expected);
  });
});
