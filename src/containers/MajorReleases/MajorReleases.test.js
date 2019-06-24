import React from "react";
import { shallow } from "enzyme";
import { MajorReleases, mapDispatchToProps } from "./MajorReleases";
import * as actions from "../../actions/index";
import MockData from "../../assets/mockData";

const mockCurrentMovie = MockData.filteredMovies;
const currentMovieMock = jest.fn();
const mockWholeObj = MockData.filteredMovies;

describe("MajorReleases", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MajorReleases wholeObj={mockWholeObj} img={""} currentMovie={currentMovieMock} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke 'currentMovie' with the correct param when clicked", () => {
    wrapper.find("[data-test='major-release']").simulate("click");
    expect(currentMovieMock).toHaveBeenCalledWith(mockWholeObj);
  })
});

describe("mapDispatchToProps", () => {
  it("should call dispatch for currentMovie", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.currentMovie(mockCurrentMovie);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.currentMovie(mockCurrentMovie);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
