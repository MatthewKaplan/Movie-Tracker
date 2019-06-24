import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import { MovieInfo, mapDispatchToProps, mapStateToProps } from "./MovieInfo";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";

jest.mock("../../apiCalls/apiCalls.js");

let mockFavorites = MockData.favoritedMoviesArr;
let mockWholeObj = MockData.popularMovies;
let mockCleanMovie = MockData.mockCleanMovie;
let mockSingleMovie = MockData.mockSingleMovie;
let mockUser = { id: 1, name: "Matthew" };
let mockIsLoggedIn = true;
const mockHandleFavorites = jest.fn();
const mockCleanForFavorite = jest.fn();
const mockFavoritesList = jest.fn();
const favoriteMovieMock = jest.fn();
const mockFetchFavoritesList = jest.fn();
const mockDeleteFavorite = jest.fn();
const mockUrl = "http://localhost:3000/api/users/favorites/new";
const mockObject = {
  method: "POST",
  body: JSON.stringify(mockCleanMovie),
  headers: { "Content-Type": "application/json" }
};
const mockResult = { status: "success" };
const mockHandleError = jest.fn();

describe("MovieInfo", () => {
  let wrapper, instance;

  fetchPost.mockImplementation(() => Promise.resolve(1));
  fetchUserData.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    wrapper = shallow(
      <MovieInfo
        user={mockUser}
        currentMovie={mockFavorites}
        favorites={mockWholeObj}
        favoriteList={mockFavoritesList}
        isLoggedIn={mockIsLoggedIn}
        favoriteMovie={favoriteMovieMock}
        cleanForFavorite={mockCleanForFavorite}
        handleFavorites={mockHandleFavorites}
        result={mockResult}
        fetchFavoritesList={mockFetchFavoritesList}
        handleError={mockHandleError}
        deleteFavorite={mockDeleteFavorite}
      />
    );
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchPost.mockClear();
    fetchUserData.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      currentMovie: [],
      favorited: false
    });
  });

  describe("favoriteMovie", () => {
    it("should invoke 'favoriteMovie' with the correct param when clicked", () => {
      wrapper.find("[data-test='favorite-movie-btn']").simulate("click");
    });

    it("should invoke 'cleanForFavorite' with the correct params", () => {
      jest.spyOn(instance, "cleanForFavorite");
      instance.favoriteMovie(mockSingleMovie);
      expect(instance.cleanForFavorite).toHaveBeenCalledWith(
        mockSingleMovie,
        mockUser.id
      );
    });

    it("should invoke 'handleFavorites' with the correct params", () => {
      jest.spyOn(instance, "handleFavorites");
      instance.favoriteMovie(mockSingleMovie);
      expect(instance.handleFavorites).toHaveBeenCalledWith(
        mockUrl,
        mockObject
      );
    });
  });

  describe("cleanForFavorite", () => {
    it("should take in a movie and return a cleaned version of that movie", () => {
      const results = instance.cleanForFavorite(mockSingleMovie, mockUser.id);
      expect(results).toEqual(mockCleanMovie);
    });
  });

  describe("handleFavorites", () => {
    it("should invoke 'fetchPost' with the correct params", () => {
      instance.handleFavorites(mockUrl, mockObject);
      expect(fetchPost).toHaveBeenCalledWith(mockUrl, mockObject);
    });

    it("should invoke 'fetchPost' with the correct params", async () => {
      let MockFn = jest.spyOn(wrapper.instance(), "fetchFavoritesList");
      await instance.handleFavorites(mockUrl, mockObject);
      expect(MockFn).toHaveBeenCalledWith(
        "http://localhost:3000/api/users/1/favorites"
      );
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchPost.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().handleFavorites();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("fetchFavoritesList", () => {
    it("should invoke 'fetchUserData' with correct params", () => {
      instance.fetchFavoritesList("www.mockURL.com");
      expect(fetchUserData).toHaveBeenCalledWith("www.mockURL.com");
    });

    it("should invoke 'favoriteList' after fetch", () => {
      instance.fetchFavoritesList("www.mockURL.com");
      expect(mockFavoritesList).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchUserData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await wrapper.instance().fetchFavoritesList();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("deleteFavorite", () => {
    it("should invoke 'handleFavorites' with the correct params", () => {
      const mockUrl = "http://localhost:3000/api/users/1/favorites/447404";
      const mockBody = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      };
      let MockFn = jest.spyOn(wrapper.instance(), "handleFavorites");
      instance.deleteFavorite(mockSingleMovie);
      expect(MockFn).toHaveBeenCalledWith(mockUrl, mockBody);
    });
  });

  describe("checkIfFavorited", () => {
    it("should set the state of favorited to false if the movie passed through isn't favorited", () => {
      expect(wrapper.state("favorited")).toEqual(false);
      wrapper.setState({ favorited: true });
      instance.checkIfFavorited(
        MockData.favoritedMoviesArr,
        MockData.notFavoritedMovie
      );
      expect(wrapper.state("favorited")).toEqual(false);
    });

    it("should set the state of favorited to true if the movie passed through is favorited", () => {
      expect(wrapper.state("favorited")).toEqual(false);
      instance.checkIfFavorited(
        MockData.favoritedMovies,
        MockData.favoritedMovie
      );
      expect(wrapper.state("favorited")).toEqual(true);
    });
  });

  describe("renderFavoriteBtn", () => {
    it("should prompt the user to sign in to favorite a movie", () => {
      mockIsLoggedIn = false;
      let wrapper = shallow(
        <MovieInfo
          user={mockUser}
          currentMovie={mockFavorites}
          favorites={mockWholeObj}
          favoritesList={mockFavoritesList}
          isLoggedIn={mockIsLoggedIn}
        />
      );
      let instance = wrapper.instance();
      const expected = (
        <Link to="/login">
          <button className="signin-btn fav">Sign in to Favorite movie</button>
        </Link>
      );

      const result = instance.renderFavoriteBtn();
      expect(result).toEqual(expected);
    });

    it("should prompt the user to favorite a movie if they'd like", () => {
      mockIsLoggedIn = true;
      const mockNotFavoritedMovie = MockData.notFavoritedMovie;

      let wrapper = shallow(
        <MovieInfo
          user={mockUser}
          currentMovie={mockNotFavoritedMovie}
          favorites={mockWholeObj}
          favoritesList={mockFavoritesList}
          isLoggedIn={mockIsLoggedIn}
          deleteFavorite={mockDeleteFavorite}
        />
      );
      let instance = wrapper.instance();
      let MockFn = jest.spyOn(wrapper.instance(), "favoriteMovie");

      expect(wrapper.state().favorited).toEqual(false);
      shallow(<div>{instance.renderFavoriteBtn()}</div>);
      wrapper.find("[data-test='favorite-movie-btn']").simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });

    it("should prompt the user to delete a favorited movie if they'd like", () => {
      mockIsLoggedIn = true;
      const mockNotFavoritedMovie = MockData.notFavoritedMovie;

      let wrapper = shallow(
        <MovieInfo
          user={mockUser}
          currentMovie={mockNotFavoritedMovie}
          favorites={mockWholeObj}
          favoritesList={mockFavoritesList}
          isLoggedIn={mockIsLoggedIn}
        />
      );
      let instance = wrapper.instance();

      let MockFn = jest.spyOn(wrapper.instance(), "deleteFavorite");
      wrapper.setState({ favorited: true });
      expect(wrapper.state().favorited).toEqual(true);
      shallow(<div>{instance.renderFavoriteBtn()}</div>);
      wrapper.setState({ favorited: true });
      expect(wrapper.state().favorited).toEqual(true);
      wrapper.find("[data-test='delete-favorite-btn']").simulate("click");
      expect(MockFn).toHaveBeenCalled();
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      user: [],
      isLoggedIn: false,
      currentMovie: [],
      favorites: undefined
    };
    const expected = {
      user: [],
      isLoggedIn: false,
      currentMovie: [],
      favorites: undefined
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for favoritesList", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.favoritesList(mockFavorites);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.favoritesList(mockFavorites);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for handleError", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.handleError("Mock Error");
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleError("Mock Error");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
