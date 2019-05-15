import React from "react";
import { shallow } from "enzyme";
import { NavBar, mapStateToProps, mapDispatchToProps } from "./NavBar";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

let mockSearch = MockData.searchResults;
let mockUser = { id: 1, name: "Matthew" };
let mockIsLoggedIn = true;

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

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      searchResults: [],
      user: {}
    };
    const expected = {
      user: {}
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for fetchSearch", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchSearch(mockSearch);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchSearch(mockSearch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for setUser", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.setUser(mockUser);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for isLoggedIn", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.isLoggedIn(mockIsLoggedIn);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.isLoggedIn(mockIsLoggedIn);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});