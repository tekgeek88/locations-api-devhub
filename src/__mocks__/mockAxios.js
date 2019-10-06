export const mockGet = () => {
  jest.fn(() => Promise.resolve({ data: {} }))
};

export const mockOne = () => {
  console.log("Right here foo");
  const objects = [
    {
      id: 352388,
      formatted_address: "1750 N Main St, Longmont CO 80501"
    }
  ];

  const total_count = 1;
  const status_code = 200;
  const resp = { objects, total_count, status_code };

  mockGet(resp).mockResolvedValue(resp);
  console.log(resp);
  return  resp

  
};

