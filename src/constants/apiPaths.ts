
const BASE = 'https://qt1ja1wqr9.execute-api.eu-west-1.amazonaws.com/dev';

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: BASE,
  // =
  products:
    `${BASE}/products`,
  imageHost: (fileName: string) =>
    `${BASE}/static/${fileName}`,
};

export default API_PATHS;
