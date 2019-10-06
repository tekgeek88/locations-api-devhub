import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Location from "../components/Location";
import { findByTestAttr } from "../utils/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a Shallow Wrapper for the Location component
 * @function setup
 * @param {object} props - component props specific to this setup
 */
const setup = (props = {}) => {
  const wrapper = shallow(<Location {...props} />);
  return wrapper;
};

test("renders Location without error", () => {
  const wrapper = setup();
  const locationComponent = findByTestAttr(wrapper, "component-location");
  expect(locationComponent.length).toBe(1);
});

test("renders Location with empty row for default props", () => {
  const wrapper = setup();
  const locationComponentId = findByTestAttr(wrapper, "component-location-id");
  expect(locationComponentId.length).toBe(0);
});

test("location displays given id from props", () => {
  const id = 352388;
  const wrapper = setup({ location: { id } });
  const locationId = findByTestAttr(wrapper, "component-location-id");
  expect(locationId.text()).toContain(id);
});

test("location does not render address without id", () => {
  const formatted_address = "1750 Main St, Longmont, CO 80501, USA";
  const wrapper = setup({ location: { formatted_address } });
  const locationComponentId = findByTestAttr(wrapper, "component-location-id");
  expect(locationComponentId.length).toBe(0);
});

test("location displays given address from props", () => {
  const id = 352388;
  const formatted_address = "1750 Main St, Longmont, CO 80501, USA";
  const wrapper = setup({ location: { id, formatted_address } });
  const locationAddy = findByTestAttr(wrapper, "component-location-address");
  expect(locationAddy.text()).toContain(formatted_address);
});

