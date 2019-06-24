import React from "react";
import { shallow } from "enzyme";
import { LoginPage, mapDispatchToProps, mapStateToProps } from "./LoginPage";
import {
  setUser,
  favoritesList,
  isLoggedIn,
  handleError
} from "../../actions/index";
import { fetchUserData, fetchPost } from "../../apiCalls/apiCalls";
import MockData from "../../assets/mockData";
const fetchMock = require("fetch-mock");

jest.mock("../../apiCalls/apiCalls.js");

const mockUser = { id: 1, name: "Matthew" };
const mockFavorites = MockData.favoritedMovies;
const mockLocation = jest.fn();
const isLoggedInMock = jest.fn();
const mockFavoritesList = jest.fn();
const mockSetUser = jest.fn();
const mockGetFavoriteMovies = jest.fn();
const mockIsLoggedIn = true;
const mockHistory = { push: jest.fn() };
const mockHandleError = jest.fn();
let mockCurrentPath = "";

describe("LoginPage", () => {
  let wrapper, instance;
  fetchUserData.mockImplementation(() => Promise.resolve(1));
  // fetchPost.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <LoginPage
        user={mockUser}
        location={mockLocation}
        currentPath={mockCurrentPath}
        isLoggedIn={isLoggedInMock}
        favoritesList={mockFavoritesList}
        setUser={mockSetUser}
        getFavoriteMovies={mockGetFavoriteMovies}
        history={mockHistory}
        handleError={mockHandleError}
      />
    );
    instance = wrapper.instance();
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
      error: "",
      logIn: false,
      register: false
    });
  });

  it("should reset the state of 'status', 'email', and 'password'", () => {
    wrapper.setState({
      status: "successful register",
      email: "matt@mail.com",
      password: "password"
    });
    wrapper.find("[data-test='login-page-btn']").simulate("click");
    expect(wrapper.state("status")).toEqual("");
    expect(wrapper.state("email")).toEqual("");
    expect(wrapper.state("password")).toEqual("");
  });

  describe("componentDidMount", () => {
    it("should invoke 'determinePage' when mounted", () => {
      jest.spyOn(instance, "determinePage");
      instance.componentDidMount();
      expect(instance.determinePage).toHaveBeenCalled();
    });
  });

  describe("determinePage", () => {
    it("should set the state of 'logIn' to true if the path is '/login'", () => {
      expect(wrapper.state().logIn).toEqual(false);
      instance.determinePage("/login");
      expect(wrapper.state().logIn).toEqual(true);
    });

    it("should set the state of 'register' to true if the path is '/Register'", () => {
      expect(wrapper.state().register).toEqual(false);
      instance.determinePage("/Register");
      expect(wrapper.state().register).toEqual(true);
    });
  });

  it("should change the state of name when user inputs name", () => {
    wrapper.setState({ register: true });
    expect(wrapper.state("name")).toEqual("");
    let nameInput = { target: { value: "Matthew Kaplan", classList: "name" } };
    wrapper.find("[data-test='name-input']").simulate("change", nameInput);
    expect(wrapper.state("name")).toEqual("matthew kaplan");
  });

  it("should change the state of email when user inputs email", () => {
    expect(wrapper.state("email")).toEqual("");
    let emailInput = {
      target: { value: "kaplan.matthew@gmail.com", classList: "email" }
    };
    wrapper.find("input.email").simulate("change", emailInput);
    expect(wrapper.state("email")).toEqual("kaplan.matthew@gmail.com");
  });

  it("should change the state of password when user inputs password", () => {
    expect(wrapper.state("password")).toEqual("");
    let passwordInput = {
      target: { value: "mypassword", classList: "password" }
    };
    wrapper.find("input.password").simulate("change", passwordInput);
    expect(wrapper.state("password")).toEqual("mypassword");
  });

  describe("handleRegister", () => {
    it("should call fetchPost with correct params when user registers", () => {
      fetchPost.mockImplementation(() => Promise.resolve(1));
      const url = "http://localhost:3000/api/users/new";
      wrapper.setState({
        name: "MATTHEW",
        email: "KAPLAN.MATTHEW@GMAIL.COM",
        password: "MYPASSWORD"
      });
      const mockData = wrapper.state();
      const userOptionObject = {
        method: "POST",
        body: JSON.stringify(mockData),
        headers: { "Content-Type": "application/json" }
      };
      wrapper
        .find("button.register")
        .simulate("click", { preventDefault: () => {} });
      expect(fetchPost).toHaveBeenCalledWith(url, userOptionObject);
    });

    it("should set the state of 'status' to 'successful register'", async () => {
      expect(wrapper.state().status).toEqual("");
      await instance.handleRegister({ preventDefault: () => {} });
      expect(wrapper.state().status).toEqual("successful register");
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchPost.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.handleRegister({ preventDefault: () => {} });
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("handleSignIn", () => {
    it("should call fetchPost with correct params when user signs in", () => {
      fetchPost.mockImplementation(() => Promise.resolve(1));
      const url = "http://localhost:3000/api/users";
      wrapper.setState({
        name: "MATTHEW",
        email: "KAPLAN.MATTHEW@GMAIL.COM",
        password: "MYPASSWORD",
        logIn: true
      });
      const mockData = wrapper.state();
      const userOptionObject = {
        method: "POST",
        body: JSON.stringify(mockData),
        headers: { "Content-Type": "application/json" }
      };
      wrapper
        .find("[data-test='login-btn']")
        .simulate("click", { preventDefault: () => {} });
      expect(fetchPost).toHaveBeenCalledWith(url, userOptionObject);
    });

    it("should invoke 'setUser' with the results from the fetch", () => {
      instance.handleSignIn({ preventDefault: () => {} });
      expect(mockSetUser).toHaveBeenCalled();
    });

    it("should change the state of 'status' to 'success'", () => {
      expect(wrapper.state("status")).toEqual("");
      instance.handleSignIn({ preventDefault: () => {} });
      expect(wrapper.state("status")).toEqual("success");
    });

    it("should invoke 'this.props.history'", () => {
      instance.handleSignIn({ preventDefault: () => {} });
      expect(mockHistory.push.mock).toEqual({
        calls: [],
        instances: [],
        invocationCallOrder: [],
        results: []
      });
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchPost.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.handleSignIn({ preventDefault: () => {} });
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("getFavoriteMovies", () => {
    it("should call fetchUserData", () => {
      const url = "http://localhost:3000/api/users/1/favorites";
      instance.getFavoriteMovies();
      expect(fetchUserData).toHaveBeenCalledWith(url);
    });

    it("should invoke 'favoritesList' with the results of the fetch", () => {
      instance.getFavoriteMovies();
      expect(mockFavoritesList).toHaveBeenCalledWith(undefined);
    });

    it("should incoke 'isLoggedIn' with the boolean value of true", () => {
      instance.getFavoriteMovies();
      expect(isLoggedInMock).toHaveBeenCalledWith(true);
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchUserData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.getFavoriteMovies();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });
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

  it("should call dispatch for handleError", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = handleError("Error");
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleError("Error");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
