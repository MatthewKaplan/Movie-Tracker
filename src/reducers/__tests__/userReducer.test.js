import userReducer from "../userReducer";
import * as actions from "../../actions";

const user = { id: 1, name: "Matt" };

describe("userReducer", () => {
  it("should return state on default", () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return state with an object current user", () => {
    const expected = user;
    const result = userReducer(undefined, actions.setUser(user));

    expect(result).toEqual(expected);
  });
});
