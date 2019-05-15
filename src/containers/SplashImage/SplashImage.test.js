import React from "react";
import { shallow } from "enzyme";
import { SplashImage } from "./SplashImage";
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
