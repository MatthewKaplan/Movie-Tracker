import React from "react";
import { shallow } from "enzyme";
import { MovieCard, mapStateToProps, mapDispatchToProps } from "./MovieCard";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

let mockFavorites = MockData.favoritedMovies;
let mockWholeObj = MockData.popularMovies;

describe("MovieCard", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard favorites={mockFavorites} wholeObj={mockWholeObj} />
    );
    instance = wrapper.instance()
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      active: false
    });
  });

  it("should change value of state when 'toggleClass' is invoked", () => {
    expect(wrapper.state("active")).toEqual(false)
    instance.toggleClass(true)
    expect(wrapper.state("active")).toEqual(true);
  })
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      user: {},
      favorites: [],
      isLoggedIn: false
    };
    const expected = {
      user: {},
      isLoggedIn: false
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
});
