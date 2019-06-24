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
let mockNewsResults = MockData.mockNewsResults;
let mockLocation = jest.fn();
let mockFilteredMovies = MockData.filteredMovie;
const mockFetchPopularMovies = jest.fn();
const mockFetchUpcoming = jest.fn();
const mockFetchPopularTv = jest.fn();
const mockFetchNews = jest.fn();
const mockFetchGenres = jest.fn();

describe("MainPage", () => {
  let wrapper, instance;

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
        filteredMovies={mockFilteredMovies}
        fetchPopularMovies={mockFetchPopularMovies}
        fetchUpcoming={mockFetchUpcoming}
        fetchPopularTv={mockFetchPopularTv}
        fetchNews={mockFetchNews}
        fetchGenres={mockFetchGenres}
      />
    );
    instance = wrapper.instance();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(1)
      })
    );
  });

  afterEach(() => {
    fetchData.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke 'fetchNewsResults, fetchPopularMovies, fetchPopularTvShows, fetchComingSoon' when mounted", () => {
    jest.spyOn(instance, "fetchNewsResults");
    jest.spyOn(instance, "fetchPopularMovies");
    jest.spyOn(instance, "fetchPopularTvShows");
    jest.spyOn(instance, "fetchComingSoon");
    instance.componentDidMount();
    expect(instance.fetchNewsResults).toHaveBeenCalled();
    expect(instance.fetchPopularMovies).toHaveBeenCalled();
    expect(instance.fetchPopularTvShows).toHaveBeenCalled();
    expect(instance.fetchComingSoon).toHaveBeenCalled();
  });

  describe("fetchPopularMovies", () => {
    it("should call 'fetchData' with correct params when 'fetchPopularMovies' is invoked", () => {
      instance.fetchPopularMovies();
      expect(fetchData).toHaveBeenCalledWith(
        wrapper.state("movieUrl") +
          "/discover/movie?" +
          apiKey +
          "&sort_by=popularity.desc"
      );
    });

    it("should invoke 'fetchPopularMovies' with the results from 'fetchData'", () => {
      instance.fetchPopularMovies();
      expect(mockFetchPopularMovies).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchPopularMovies();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });
  });

  describe("fetchPopularTvShows", () => {
    it("should call 'fetchData' with correct params when 'fetchPopularTvShows' is invoked", () => {
      instance.fetchPopularTvShows();
      expect(fetchData).toHaveBeenCalledWith(
        wrapper.state("movieUrl") +
          "/discover/tv?" +
          apiKey +
          "&sort_by=popularity.desc"
      );
    });

    it("should invoke 'fetchPopularTv' with the results from 'fetchData'", () => {
      instance.fetchPopularTvShows();
      expect(mockFetchPopularTv).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchPopularTvShows();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });
  });

  describe("fetchComingSoon", () => {
    it("should call 'fetchData' with correct params when 'fetchComingSoon' is invoked", () => {
      instance.fetchComingSoon();
      expect(fetchData).toHaveBeenCalledWith(
        wrapper.state("movieUrl") + "/movie/upcoming?" + apiKey
      );
    });

    it("should invoke 'fetchUpcoming' with the results from 'fetchData'", () => {
      instance.fetchComingSoon();
      expect(mockFetchUpcoming).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchComingSoon();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });
  });

  describe("fetchComingSoon", () => {
    it("should call 'fetchData' with correct params when 'fetchNewsResults' is invoked", () => {
      instance.fetchNewsResults();
      expect(fetchData).toHaveBeenCalledWith(
        wrapper.state("newsUrl") + "/topstories/v2/movies.json?" + nytApiKey
      );
    });

    it("should invoke 'fetchNews' with the results from 'fetchData'", () => {
      instance.fetchNewsResults();
      expect(mockFetchNews).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchNewsResults();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });
  });

  describe("fetchGenre", () => {
    it("should call 'fetchData' with correct params when 'fetchGenre' is invoked", () => {
      const path = "&with_genres=10749";
      instance.fetchGenre(path);
      expect(fetchData).toHaveBeenCalledWith(
        wrapper.state("movieUrl") + "/discover/movie?" + apiKey + path + "&page=3"
      );
    });

    it("should invoke 'fetchGenres' with the results from 'fetchData'", () => {
      instance.fetchGenre();
      expect(mockFetchGenres).toHaveBeenCalled();
    });

    it("should finally throw an error if the response is not ok and save it to local state", async () => {
      fetchData.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.fetchGenre();
      expect(wrapper.state("error")).toBe("Fetch failed");
    });

    it("should invoke 'fetchGenre' to fetch action movies when action button is clicked", () => {
      const path = "&with_genres=28";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='action-movies-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });

    it("should invoke 'fetchGenre' to fetch comedy movies when comedy button is clicked", () => {
      const path = "&with_genres=35";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='comedy-movies-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });

    it("should invoke 'fetchGenre' to fetch documentaries when documentaries button is clicked", () => {
      const path = "&with_genres=99";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='documentaries-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });

    it("should invoke 'fetchGenre' to fetch family movies when family button is clicked", () => {
      const path = "&with_genres=10751";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='family-movies-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });

    it("should invoke 'fetchGenre' to fetch horror movies when horror button is clicked", () => {
      const path = "&with_genres=27";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='horror-movies-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });

    it("should invoke 'fetchGenre' to fetch romance movies when romance button is clicked", () => {
      const path = "&with_genres=10749";
      jest.spyOn(instance, "fetchGenre");
      wrapper.find("[data-test='romance-movies-btn']").simulate("click");
      expect(instance.fetchGenre).toHaveBeenCalledWith(path);
    });
  })
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

  it("should call dispatch for fetchNews", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchNews(mockNewsResults);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchNews(mockNewsResults);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should call dispatch for fetchGenres", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.fetchGenres(mockGenreProps);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchGenres(mockGenreProps);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
