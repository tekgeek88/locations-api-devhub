/* istanbul ignore file */
import { mockGet } from "../__mocks__/mockAxios";

jest.mock("mockAxios");

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {string} val - Value of data-test attribute to search for
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const mockGetOne = () => {
  const objects = [
    {
      id: 352388,
      formatted_address: "1750 N Main St, Longmont CO 80501"
    }
  ];

  const total_count = 1;

  const resp = {
    objects,
    meta: { total_count }
  };

  mockGet.mockResolvedValue(resp);
  return resp;
};

export const mockGetThree = () => {
  const objects = [
    {
      id: 352388,
      formatted_address: "1750 N Main St, Longmont CO 80501"
    },
    {
      id: 352419,
      formatted_address: "816 25th St, Greeley CO 80631"
    },
    {
      id: 352765,
      formatted_address: "3045 W 74th Ave, Westminster CO 80030"
    }
  ];

  const total_count = 3;
  const resp = {
    objects,
    meta: { total_count }
  };

  mockGet.mockResolvedValue(resp);
  return resp;
};
