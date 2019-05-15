import React from "react";
import { shallow } from "enzyme";
import { LoginPage, mapDispatchToProps, mapStateToProps } from "./LoginPage";
import { setUser, favoritesList, isLoggedIn } from "../../actions/index";
import { fetchUserData, fetchPost } from "../../apiCalls/apiCalls";
import MockData from "../../assets/mockData";

jest.mock("../../apiCalls/apiCalls.js");

const mockUser = { id: 1, name: "Matthew" };
const mockFavorites = MockData.favoritedMovies;
const mockIsLoggedIn = true;

describe("LoginPage", () => {
  let wrapper;
  fetchUserData.mockImplementation(() => Promise.resolve(1));
  fetchPost.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(<LoginPage user={mockUser} />);
  });

  afterEach(() => {
    fetchUserData.mockClear();
    fetchPost.mockClear();
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

  it("should change the state of name when user inputs name", () => {
    expect(wrapper.state("name")).toEqual("");
    let nameInput = { target: { value: "Matthew Kaplan", classList: "name" } };
    wrapper.find("input.name").simulate("change", nameInput);
    expect(wrapper.state("name")).toEqual("MATTHEW KAPLAN");
  });

  it("should change the state of email when user inputs email", () => {
    expect(wrapper.state("email")).toEqual("");
    let emailInput = {
      target: { value: "kaplan.matthew@gmail.com", classList: "email" }
    };
    wrapper.find("input.email").simulate("change", emailInput);
    expect(wrapper.state("email")).toEqual("KAPLAN.MATTHEW@GMAIL.COM");
  });

  it("should change the state of password when user inputs password", () => {
    expect(wrapper.state("password")).toEqual("");
    let passwordInput = {
      target: { value: "mypassword", classList: "password" }
    };
    wrapper.find("input.password").simulate("change", passwordInput);
    expect(wrapper.state("password")).toEqual("MYPASSWORD");
  });

  it("should call fetchPost with correct params when user registers", () => {
    const url = "http://localhost:3000/api/users/new";
    wrapper.setState({
      name: "MATTHEW",
      email: "KAPLAN.MATTHEW@GMAIL.COM",
      password: "MYPASSWORD"
    });
    wrapper
      .find("button.register")
      .simulate("click", { preventDefault: () => {} });
    const mockData = wrapper.state();
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(mockData),
      headers: { "Content-Type": "application/json" }
    };
    expect(fetchPost).toHaveBeenCalledWith(url, userOptionObject);
  });

  it("should call fetchPost with correct params when user signs in", () => {
    const url = "http://localhost:3000/api/users";
    wrapper.setState({
      name: "MATTHEW",
      email: "KAPLAN.MATTHEW@GMAIL.COM",
      password: "MYPASSWORD"
    });
    wrapper.find("button.login").simulate("click", { preventDefault: () => {} });
    const mockData = wrapper.state();
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(mockData),
      headers: { "Content-Type": "application/json" }
    };
    expect(fetchPost).toHaveBeenCalledWith(url, userOptionObject);
  });

  it("should call fetchUserData", () => {
    wrapper.instance().getFavoriteMovies();
    expect(fetchUserData).toHaveBeenCalled();
  });

});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
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
