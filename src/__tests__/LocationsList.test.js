import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, mockGetThree, mockGetOne } from '../utils/testUtils';
import LocationsList from '../components/LocationsList';

jest.mock("mockAxios");

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

/**
 * Factory function to create a Rendered Wrapper for the LocationsList component
 * @function setup
 * @param {object} props - component props specific to this setup
 * @param {object} state - initial state for setup
 */
const setupRender = (props={}, state=null) => {
  const wrapper = mount(<LocationsList {...props} />);
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

test('ui displays 0 locations with default props', () => {
  const wrapper = setup();
  const locationCount = findByTestAttr(wrapper, 'component-locationsListCount')
  expect(locationCount.text()).toContain(0);
});

test('ui displays 1 location fetched with given props', () => {
  const resp = mockGetOne();
  const wrapper = setup({ locations: resp.objects, count: resp.meta.total_count });
  const locationCount = findByTestAttr(wrapper, 'component-locationsListCount')
  expect(locationCount.text()).toContain(1);
});

test('ui displays 3 locations fetched with given props', () => {
  const resp = mockGetThree();
  const wrapper = setup({ locations: resp.objects, count: resp.meta.total_count });
  const locationCount = findByTestAttr(wrapper, 'component-locationsListCount')
  expect(locationCount.text()).toContain(3);
});

test('LocationsList renders 3 location elements', () => {
  const resp = mockGetThree();
  const wrapper = setupRender({ locations: resp.objects, count: resp.meta.total_count });
  const locations = findByTestAttr(wrapper, 'component-location')
  expect(locations.length).toBe(3);
});

