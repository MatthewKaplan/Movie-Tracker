import React from "react";
import { shallow } from "enzyme";
import { NavBar } from "./NavBar";
import MockData from "../../assets/mockData";

let mockSearch = MockData.searchResults;
let mockUser = { id: 1, name: "Matthew" };

describe("NavBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar search={mockSearch} user={mockUser} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      error: "",
      userSearch: ""
    });
  });
});
