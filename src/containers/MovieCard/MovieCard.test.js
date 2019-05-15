import React from "react";
import { shallow } from "enzyme";
import { MovieCard, mapDispatchToProps } from "./MovieCard";
import * as actions from "../../actions/index";
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
      error: ""
    });
  });
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentMovie", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentMovie(mockFavorites);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentMovie(mockFavorites);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
