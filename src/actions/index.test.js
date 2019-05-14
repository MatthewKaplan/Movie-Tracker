import * as actions from "./index";
import MockData from "../assets/mockData";

describe("actions", () => {
  it("should return a type of FETCH_POPULAR_MOVIES", () => {
    const popularMoviess = MockData.popularMovies;
    const favorited = false;
    const expected = {
      type: "FETCH_POPULAR_MOVIES",
      favorited,
      popularMoviess
    };

    const result = actions.fetchPopularMovies(popularMoviess);
    expect(result).toEqual(expected);
  });

  it("should return a type of FETCH_POPULAR_TV", () => {
    const popularShows = MockData.popularShows;
    const favorited = false;
    const expected = {
      type: "FETCH_POPULAR_TV",
      favorited,
      popularShows
    };

    const result = actions.fetchPopularTv(popularShows);
    expect(result).toEqual(expected);
  });

  it("should return a type of FETCH_UPCOMING", () => {
    const upcomingResults = MockData.upcomingMovies;
    const favorited = false;
    const expected = {
      type: "FETCH_UPCOMING",
      favorited,
      upcomingResults
    };

    const result = actions.fetchUpcoming(upcomingResults);
    expect(result).toEqual(expected);
  });

  it("should return a type of FETCH_NEWS", () => {
    const newsResults = MockData.newsResults;
    const expected = {
      type: "FETCH_NEWS",
      newsResults
    };

    const result = actions.fetchNews(newsResults);
    expect(result).toEqual(expected);
  });

  it("should return a type of FETCH_GENRES", () => {
    const genreResults = MockData.genreResults;
    const favorited = false;
    const expected = {
      type: "FETCH_GENRES",
      favorited,
      genreResults
    };

    const result = actions.fetchGenres(genreResults);
    expect(result).toEqual(expected);
  });

  it("should return a type of FETCH_SEARCH", () => {
    const searchResults = MockData.searchResults;
    const favorited = false;
    const expected = {
      type: "FETCH_SEARCH",
      favorited,
      searchResults
    };

    const result = actions.fetchSearch(searchResults);
    
    expect(result).toEqual(expected);
  });

  it("should return a type of SET_USER", () => {
    const user = { id: 1, name: "matt" };
    const expected = {
      type: "SET_USER",
      user
    };  

    const result = actions.setUser(user);
    expect(result).toEqual(expected);
  });

  it("should return a type of CREATE_USER", () => {
    const user = { id: 1, name: "matt" };
    const expected = {
      type: "CREATE_USER",
      user
    };

    const result = actions.createUser(user);
    expect(result).toEqual(expected);
  });
});
