import React from "react";
import { shallow } from "enzyme";
import { MovieCard } from "./MovieCard";
import MockData from "../../assets/mockData";

let mockFavorites = MockData.favoritedMovies;
let mockWholeObj = MockData.popularMovies;

describe("MovieCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard favorites={mockFavorites} wholeObj={mockWholeObj} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      active: false
    });
  });
});
