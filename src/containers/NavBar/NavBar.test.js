import React from "react";
import { shallow } from "enzyme";
import { NavBar } from "./NavBar";
import MockData from "../../assets/mockData";

let mockSearch = MockData.searchResults;

describe("NavBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar search={mockSearch} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});
