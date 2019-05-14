import React from 'react';
import Carousel from './Carousel';
import { shallow } from 'enzyme';

describe('Carousel', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Carousel />)
    expect(wrapper).toMatchSnapshot()
  })
})