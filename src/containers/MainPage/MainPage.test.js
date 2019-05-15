import React from "react";
import { shallow } from "enzyme";
import { MainPage } from "./MainPage";
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
