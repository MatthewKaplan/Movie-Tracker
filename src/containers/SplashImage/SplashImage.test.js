import React from "react";
import { shallow } from "enzyme";
import { SplashImage, mapStateToProps } from "./SplashImage";
import MockData from "../../assets/mockData";

let mockMoviesProps = MockData.popularMovies;
const mockRandomNumber = 1;

describe("SplashImage", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<SplashImage movies={mockMoviesProps} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("renderPopularMovies", () => {
    it("should return a random movie title when invoked with the correct params", () => {
      const result = instance.renderPopularMovies(
        mockMoviesProps[mockRandomNumber],
        "title"
      );
      const expected = "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow";
      expect(result).toEqual(expected);
    });

    it("should return a random movie bio when invoked with the correct params", () => {
      const result = instance.renderPopularMovies(
        mockMoviesProps[mockRandomNumber],
        "bio"
      );
      const expected =
        'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?';
      expect(result).toEqual(expected);
    });

    it("should return a random movie background image when invoked with the correct params", () => {
      const result = instance.renderPopularMovies(
        mockMoviesProps[mockRandomNumber],
        "background"
      );
      const expected = {
        background:
          "linear-gradient(rgba(0, 0, 0, 0.555) 15%, rgba(0, 0, 0, 0) 55%, black),url(https://image.tmdb.org/t/p/original/8sNz2DxYiYqGkxk66U8BqvuZZjE.jpg)",
        backgroundSize: "cover"
      };
      expect(result).toEqual(expected);
    });
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
