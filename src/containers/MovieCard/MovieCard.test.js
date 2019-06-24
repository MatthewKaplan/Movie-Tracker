import React from "react";
import { shallow } from "enzyme";
import { MovieCard, mapDispatchToProps } from "./MovieCard";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

let mockFavorites = MockData.favoritedMovies;
let mockWholeObj = MockData.popularMovies;
let mockCurrentMovie = jest.fn();

describe("MovieCard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        favorites={mockFavorites}
        wholeObj={mockWholeObj}
        currentMovie={mockCurrentMovie}
      />
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

  it("should invoke 'currentMovie' with the correct param when clicked", () => {
    wrapper.find("[data-test='current-movie']").simulate("click");
    expect(mockCurrentMovie).toHaveBeenCalledWith(mockWholeObj);
  });
});

describe("posterToRender", () => {
  it("should return the correct value if 'props.img' is undefined", () => {
    const mockImg = undefined;
    const mockPoster = "/this/is/a/mock/poster";
    let wrapper = shallow(
      <MovieCard
        favorites={mockFavorites}
        wholeObj={mockWholeObj}
        currentMovie={mockCurrentMovie}
        img={mockImg}
        poster={mockPoster}
      />
    );
    let instance = wrapper.instance();

    const expected = {
      backgroundImage:
        "url(https://image.tmdb.org/t/p/w500/this/is/a/mock/poster)"
    };
    const results = instance.posterToRender();
    expect(results).toEqual(expected);
  });

  it("should return the correct value if 'props.img' is defined", () => {
    const mockImg = "/this/is/a/mock/img";
    let wrapper = shallow(
      <MovieCard
        favorites={mockFavorites}
        wholeObj={mockWholeObj}
        currentMovie={mockCurrentMovie}
        img={mockImg}
      />
    );
    let instance = wrapper.instance();

    const expected = {
      backgroundImage:
        "url(https://image.tmdb.org/t/p/original/this/is/a/mock/img)"
    };
    const results = instance.posterToRender();
    expect(results).toEqual(expected);
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
