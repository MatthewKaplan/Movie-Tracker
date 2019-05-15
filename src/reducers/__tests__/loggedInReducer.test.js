import loggedInReducer from "../loggedInReducer";
import * as actions from "../../actions";

describe("loggedInReducer", () => {
  it("should return state on default", () => {
    const expected = false;
    const result = loggedInReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state of true if user is logged in", () => {
    const expected = true;
    const result = loggedInReducer(undefined, actions.isLoggedIn(true));

    expect(result).toEqual(expected);
  });
});
