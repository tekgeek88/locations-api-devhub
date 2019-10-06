import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr }  from '../utils/testUtils';
import App from '../components/App';
import LocationsListContainer from '../components/LocationsListContainer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Shallow Wrapper for the App component
 * @function setup
 * @param {object} props - component props specific to this setup
 */
const setup = (props={}) => {
  const wrapper = shallow(<App {...props} />);
  return wrapper;
}

test('renders App without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});


test('renders LocationsListContainer without error', () => {
  const wrapper = shallow(<LocationsListContainer />);
  const locationsListContainer = findByTestAttr(wrapper, 'component-locationsListContainer');
  expect(locationsListContainer.length).toBe(1);
});
