const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",

  products:
    "https://7d9p5khj1a.execute-api.eu-west-1.amazonaws.com/dev/products",
  imageHost: (fileName: string) =>
    `https://7d9p5khj1a.execute-api.eu-west-1.amazonaws.com/dev/static/${fileName}`,
};

export default API_PATHS;
