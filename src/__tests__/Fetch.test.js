import { mockGet } from "../__mocks__/mockAxios";

jest.mock("mockAxios");

test("should fetch 1 addess", () => {
  const objects = [
    {
      formatted_address: "1750 N Main St, Longmont CO 80501"
    }
  ];

  const totalCount = 1;
  const statusCode = 200;
  const resp = {
    objects,
    total_count: totalCount,
    status_code: statusCode
  };

  mockGet.mockResolvedValue(resp);

  expect(resp.objects.length).toEqual(1);
});