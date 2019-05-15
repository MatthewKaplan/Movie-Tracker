import React from "react";
import { shallow } from "enzyme";
import { MainPage, mapStateToProps, mapDispatchToProps } from "./MainPage";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";
import { fetchData } from "../../apiCalls/apiCalls";
import { nytApiKey } from "../../api/nytApiKey";
import { apiKey } from "../../api/apiKey";

jest.mock("../../apiCalls/apiCalls.js");

let mockMoviesProps = MockData.popularMovies;
let mockTvProps = MockData.popularShows;
let mockFavoritesProp = MockData.favoritedMovies;
let mockSeachProps = MockData.searchResults;
let mockGenreProps = MockData.genreResults;
let mockUpcoming = MockData.upcomingMovies;
let mockLocation = jest.fn();

describe("MainPage", () => {
  let wrapper, instance;
  const path = "&with_genres=28";

  fetchData.mockImplementation(() => Promise.resolve(1));

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
      movieUrl: "https://api.themoviedb.org/3",
      newsUrl: "https://api.nytimes.com/svc",
      showPopUp: false,
      error: ""
    });
  });

  it("should invoke 'renderNewsResults, fetchPopularMovies, fetchPopularTvShows, fetchComingSoon' when mounted", () => {
    jest.spyOn(instance, "renderNewsResults");
    jest.spyOn(instance, "fetchPopularMovies");
    jest.spyOn(instance, "fetchPopularTvShows");
    jest.spyOn(instance, "fetchComingSoon");
    instance.componentDidMount();
    expect(instance.renderNewsResults).toHaveBeenCalled();
    expect(instance.fetchPopularMovies).toHaveBeenCalled();
    expect(instance.fetchPopularTvShows).toHaveBeenCalled();
    expect(instance.fetchComingSoon).toHaveBeenCalled();
  });

  it("should call 'fetchData' with correct params when fetchPopularMovies is invoked", () => {
    instance.fetchPopularMovies();
    expect(fetchData).toHaveBeenCalledWith(
      wrapper.state("movieUrl") +
        "/discover/movie?" +
        apiKey +
        "&sort_by=popularity.desc"
    );
  });

  it("should call 'fetchData' with correct params when fetchPopularTvShows is invoked", () => {
    instance.fetchPopularTvShows();
    expect(fetchData).toHaveBeenCalledWith(
      wrapper.state("movieUrl") +
        "/discover/tv?" +
        apiKey +
        "&sort_by=popularity.desc"
    );
  });

  it("should call 'fetchData' with correct params when fetchComingSoon is invoked", () => {
    instance.fetchComingSoon();
    expect(fetchData).toHaveBeenCalledWith(
      wrapper.state("movieUrl") + "/movie/upcoming?" + apiKey
    );
  });

  it("should call 'fetchData' with correct params when renderNewsResults is invoked", () => {
    instance.renderNewsResults();
    expect(fetchData).toHaveBeenCalledWith(
      wrapper.state("newsUrl") + "/topstories/v2/movies.json?" + nytApiKey
    );
  });

  it("should invoke 'handleClick' when genre button is pressed with correct path", () => {
    jest.spyOn(instance, "handleClick");
    wrapper.find("[data-test='genre-click-event']").simulate("click");
    expect(instance.handleClick).toHaveBeenCalledWith(path);
  });

  it("should call 'fetchData' with correct params when handleClick is invoked", () => {
    instance.handleClick(path);
    expect(fetchData).toHaveBeenCalledWith(
      wrapper.state("movieUrl") + "/discover/movie?" + apiKey + path + "&page=3"
    );
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
