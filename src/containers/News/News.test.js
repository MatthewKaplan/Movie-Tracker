import React from "react";
import { shallow } from "enzyme";
import { News, mapStateToProps } from "./News";
import MockData from "../../assets/mockData";

let mockNews = MockData.newsResults;
const mockForward = jest.fn();
const mockBackwards = jest.fn();

describe("News", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(
      <News
        news={mockNews}
        changeSlidesPositionForward={mockForward}
        changeSlidesPositionBack={mockBackwards}
      />
    );
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      slidesPosition: 7
    });
  });

  describe("changeSlidesPositionForward", () => {
    it("should invoke 'changeSlidesPositionForward' when user clicks appropriate arrow", () => {
      jest.spyOn(instance, "changeSlidesPositionForward");
      wrapper.find("[data-test='arrow-forward']").simulate("click");
      expect(instance.changeSlidesPositionForward).toHaveBeenCalled();
    });

    it("should move slide forward as long as 'slidesPosition' is less than 30", () => {
      expect(wrapper.state().slidesPosition).toEqual(7);
      instance.changeSlidesPositionForward();
      expect(wrapper.state().slidesPosition).toEqual(8);
    });

    it("should restart the 'slidesPosition' back to 0 if its greater than 30", () => {
      wrapper.setState({ slidesPosition: 30 });
      expect(wrapper.state().slidesPosition).toEqual(30);
      instance.changeSlidesPositionForward();
      expect(wrapper.state().slidesPosition).toEqual(0);
    });
  });

  describe("changeSlidesPositionBack", () => {
    it("should invoke 'changeSlidesPositionBack' when user clicks appropriate arrow", () => {
      jest.spyOn(instance, "changeSlidesPositionBack");
      wrapper.find("[data-test='arrow-back']").simulate("click");
      expect(instance.changeSlidesPositionBack).toHaveBeenCalled();
    });

    it("should set the value of 'slidesPosition' to 30 if it equals 0", () => {
      wrapper.setState({ slidesPosition: 0 });
      expect(wrapper.state().slidesPosition).toEqual(0);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(30);
    });

    it("should deduct 1 from 'slidesPosition' for eachtime 'changeSlidesPositionBack'", () => {
      expect(wrapper.state().slidesPosition).toEqual(7);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(6);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(5);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(4);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(3);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(2);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(1);
      instance.changeSlidesPositionBack();
      expect(wrapper.state().slidesPosition).toEqual(0);
    });
  });
});

describe("mapStateToProps", () => {
  it("should return an object", () => {
    const mockData = {
      news: []
    };
    const expected = {
      news: []
    };

    const mockprops = mapStateToProps(mockData);
    expect(mockprops).toEqual(expected);
  });
});
