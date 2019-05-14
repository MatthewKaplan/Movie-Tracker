import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer data={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});