import React from "react";
import { shallow } from "enzyme";
import { MovieInfo, mapDispatchToProps } from "./MovieInfo";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

let mockFavorites = MockData.favoritedMovies;
let mockWholeObj = MockData.popularMovies;
let mockUser = {id: 1, name: "Matthew"};

describe("MovieInfo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MovieInfo user={mockUser} currentMovie={mockFavorites} favorites={mockWholeObj}/>
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      currentMovie: []
    });
  });

});