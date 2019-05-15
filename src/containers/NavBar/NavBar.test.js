import React from "react";
import { shallow } from "enzyme";
import { NavBar, mapStateToProps, mapDispatchToProps } from "./NavBar";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";
import { apiKey } from "../../api/apiKey";
import { fetchData } from "../../apiCalls/apiCalls";

jest.mock("../../apiCalls/apiCalls.js");

let mockSearch = MockData.searchResults;
let mockUser = { id: 1, name: "Matthew" };
let mockIsLoggedIn = true;

describe("NavBar", () => {
  let wrapper, instance;
  fetchData.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(<NavBar search={mockSearch} user={mockUser} />);
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchData.mockClear();
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

  it("should update the value of userSearch in state as user types", () => {
    expect(wrapper.state("userSearch")).toEqual("")
    let searchInput = { target: { value: "The Big Green" } };
    wrapper.find("[data-test='search-input']").simulate("change", searchInput)
    expect(wrapper.state("userSearch")).toEqual("The Big Green")
  });

  it("should invoke 'fetchData' with the correct param when searchChangeHandler is called", () => {
    expect(wrapper.state("userSearch")).toEqual("")
    let searchInput = { target: { value: "The Big Green" } };
    wrapper.find("[data-test='search-input']").simulate("change", searchInput)
    expect(wrapper.state("userSearch")).toEqual("The Big Green")
    expect(fetchData).toHaveBeenCalledWith("https://api.themoviedb.org/3/search/movie?" + apiKey + "&query=" + wrapper.state("userSearch"))
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
})