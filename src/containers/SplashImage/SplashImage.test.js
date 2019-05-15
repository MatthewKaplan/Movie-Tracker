import React from "react";
import { shallow } from "enzyme";
import { SplashImage, mapStateToProps } from "./SplashImage";
import MockData from "../../assets/mockData";

let mockMoviesProps = MockData.popularMovies;

describe("SplashImage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SplashImage movies={mockMoviesProps} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      movies: []
    };
    const expected = {
      movies: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
