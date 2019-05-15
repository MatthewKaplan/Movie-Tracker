import React from "react";
import { shallow } from "enzyme";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

let mockMoviesProps = MockData.popularMovies;
let mockTvProps = MockData.popularShows;
let mockFavoritesProp = MockData.favoritedMovies;
let mockSeachProps = MockData.searchResults;
let mockGenreProps = MockData.genreResults;
let mockUpcoming = MockData.upcomingMovies;
let mockLocation = jest.fn();

describe("MainPage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MainPage
        location={mockLocation}
        movies={mockMoviesProps}
        tv={mockTvProps}
        favoriteList={mockFavoritesProp}
        searchResults={mockSeachProps}
        genre={mockGenreProps}
        upcoming={mockUpcoming}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      movieUrl: "https://api.themoviedb.org/3",
      newsUrl: "https://api.nytimes.com/svc",
      showPopUp: false
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      movies: [],
      tv: [],
      upcoming: [],
      news: [],
      genre: []
    };
    const expected = {
      movies: [],
      tv: [],
      upcoming: [],
      news: [],
      genre: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for fetchPopularMovies", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchPopularMovies(mockMoviesProps);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchPopularMovies(mockMoviesProps);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for fetchPopularTv", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchPopularTv(mockTvProps);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchPopularTv(mockTvProps);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for fetchUpcoming", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchUpcoming(mockUpcoming);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchUpcoming(mockUpcoming);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
