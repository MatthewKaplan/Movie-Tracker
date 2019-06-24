import * as actions from "../../Actions/index";
import handleErrorReducer from "../handleErrorReducer";

describe("handleErrorReducer", () => {
  it("should return state on default", () => {
    const expected = "";
    const result = handleErrorReducer(undefined, "");
    expect(result).toEqual(expected);
  });

  it("should return state with a string of error message", () => {
    const expected = "Error Message";
    const result = handleErrorReducer(
      undefined,
      actions.handleError(expected)
    );

    expect(result).toEqual(expected);
  });
});
