import upcomingReducer from "../upcomingReducer";
import * as actions from "../../actions";
import MockData from "../../assets/mockData";

const upcoming = MockData.upcomingMovies;

describe("upcomingReducer", () => {
  it("should return state on default", () => {
    const expected = [];
    const result = upcomingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an array of upcoming movies", () => {
    const expected = upcoming;
    const result = upcomingReducer(undefined, actions.fetchUpcoming(upcoming));

    expect(result).toEqual(expected);
  });
});