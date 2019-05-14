import React from 'react';
import {GenrePage, mapStateToProps} from './GenrePage';
import { shallow } from 'enzyme';
import MockData from "../../assets/mockData";

let mockMovies = MockData.popularMovies;
let mockShows = MockData.popularShows;
let mockGenre = MockData.upcomingMovies;
let mockFavoriteList = MockData.upcomingMovies;

describe('GenrePage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GenrePage genre={mockGenre}
                                       movies={mockMovies}
                                       tv={mockShows}
                                       favoriteList={mockFavoriteList}
                                />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})