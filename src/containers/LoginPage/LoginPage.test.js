import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "./LoginPage";
import MockData from "../../assets/mockData";

describe("LoginPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LoginPage />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
