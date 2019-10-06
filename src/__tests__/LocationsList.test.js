import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../utils/testUtils';
import LocationsList from '../components/LocationsList';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Shallow Wrapper for the LocationsList component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {object} state - initial state for setup
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<LocationsList {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

test('renders LocationsList without error', () => {
  const wrapper = setup();
  const locationsListComponent = findByTestAttr(wrapper, 'component-locationsList');
  expect(locationsListComponent.length).toBe(1);
});

test('ui displays 0 locations with empty list', () => {
  const wrapper = shallow(<LocationsList />);
  const locationCount = findByTestAttr(wrapper, 'component-locationsListCount')
  expect(locationCount.text()).toContain(0);
});
