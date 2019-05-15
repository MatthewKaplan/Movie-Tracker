import React from "react";
import { shallow } from "enzyme";
import { LoginPage, mapDispatchToProps, mapStateToProps } from "./LoginPage";
import { setUser, favoritesList, isLoggedIn } from "../../actions/index";
import MockData from "../../assets/mockData";

const mockUser = { id: 1, name: "Matthew" };
const mockFavorites = MockData.favoritedMovies;
const mockIsLoggedIn = true;

describe("LoginPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      name: "",
      email: "",
      password: "",
      status: "",
      error: ""
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      user: {}
    }
    const expected = {
      user: {}
    }

    const mockprops = mapStateToProps(mockData)
    expect(mockprops).toEqual(expected)
  })
})

describe("mapDispatchToProps", () => {
  it("should call dispatch for setUser", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setUser(mockUser);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for favoritesList", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = favoritesList(mockFavorites);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.favoritesList(mockFavorites);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for isLoggedIn", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = isLoggedIn(mockIsLoggedIn);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.isLoggedIn(mockIsLoggedIn);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
