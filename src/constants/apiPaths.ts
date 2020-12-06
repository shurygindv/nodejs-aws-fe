
const PRODUCT_BASE = 'https://0zd9g6b1yf.execute-api.eu-west-1.amazonaws.com/dev';
const IMPORT_BASE = 'https://jkzgfse086.execute-api.eu-west-1.amazonaws.com/dev';

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  
  import: IMPORT_BASE,
  bff: PRODUCT_BASE,
  // =
  products:
    `${PRODUCT_BASE}/products`,
  imageHost: (fileName: string) =>
    `${PRODUCT_BASE}/static/${fileName}`,

  cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
};

export default API_PATHS;
