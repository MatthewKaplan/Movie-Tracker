import React from "react";
import { shallow } from "enzyme";
import { GenrePage, mapStateToProps } from "./GenrePage";
import MockData from "../../assets/mockData";

let mockMoviesProps = MockData.popularMovies;
let mockTvProps = MockData.popularShows;
let mockFavoritesProp = MockData.favoritedMoviesArr;
let mockSeachProps = MockData.searchResults;
let mockGenreProps = MockData.genreResults;
let mockLocation = jest.fn();
let mockRenderMovieCards = jest.fn();

describe("GenrePage", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <GenrePage
        location={mockLocation}
        movie={mockMoviesProps}
        tv={mockTvProps}
        favoriteList={mockFavoritesProp}
        searchResults={mockSeachProps}
        genre={mockGenreProps}
        renderMovieCards={mockRenderMovieCards}
        movies={mockMoviesProps}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("whatToRender", () => {
    it("should return correct results when path equals '/Movies'", () => {
      const results = instance.whatToRender("/Movies");
      expect(results).toHaveLength(2);
    });

    it("should return correct results when path equals '/TV_Shows'", () => {
      const results = instance.whatToRender("/TV_Shows");
      expect(results).toHaveLength(1);
    });

    it("should return correct results when path equals '/Favorites'", () => {
      const results = instance.whatToRender("/Favorites");
      expect(results).toHaveLength(1);
    });

    it("should return correct results when path equals '/SearchResults'", () => {
      const results = instance.whatToRender("/SearchResults");
      expect(results).toHaveLength(1);
    });

    it("should return correct results when path equals '/Genre'", () => {
      const results = instance.whatToRender("/Genre");
      expect(results).toHaveLength(1);
    });
  });
});

describe("renderFavoritesMessage", () => {
  it("should prompt the user to sign in to view their favorites", () => {
    const mockIsLoggedIn = false;

    let wrapper = shallow(
      <GenrePage
        location={mockLocation}
        movie={mockMoviesProps}
        tv={mockTvProps}
        favoriteList={mockFavoritesProp}
        searchResults={mockSeachProps}
        genre={mockGenreProps}
        renderMovieCards={mockRenderMovieCards}
        movies={mockMoviesProps}
        isLoggedIn={mockIsLoggedIn}
      />
    );
    let instance = wrapper.instance();

    expect(mockIsLoggedIn).toEqual(false);
    const results = instance.renderFavoritesMessage("/Favorites");
    expect(results).toEqual("Please sign in to veiw your favorites.");
  });

  it("should prompt the user that they have no favorites saved", () => {
    const mockIsLoggedIn = true;
    const mockEmptyFavorites = [];

    let wrapper = shallow(
      <GenrePage
        location={mockLocation}
        movie={mockMoviesProps}
        tv={mockTvProps}
        favoriteList={mockEmptyFavorites}
        searchResults={mockSeachProps}
        genre={mockGenreProps}
        renderMovieCards={mockRenderMovieCards}
        movies={mockMoviesProps}
        isLoggedIn={mockIsLoggedIn}
      />
    );
    let instance = wrapper.instance();
    expect(mockIsLoggedIn).toEqual(true);
    expect(mockEmptyFavorites).toEqual([]);
    const results = instance.renderFavoritesMessage("/Favorites");
    expect(results).toEqual(
      "It looks like you haven't saved any favorites yet."
    );
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      movies: [],
      tv: [],
      genre: [],
      favoriteList: [],
      searchResults: undefined,
      isLoggedIn: false
    };
    const expected = {
      movies: [],
      tv: [],
      genre: [],
      favoriteList: [],
      searchResults: undefined,
      isLoggedIn: false
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
