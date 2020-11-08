import API_PATHS from "constants/apiPaths";
import { Product } from "models/Product";

import axios from "axios";

type Response = any;

const fetchProducts = () => {
  return axios
    .get(API_PATHS.products)
    .then((res: Response) => res.data.result.items);
};

const addProductToBasketAsync = (product: Product) => {
  return axios.post(API_PATHS.products, product);
};

export { addProductToBasketAsync, fetchProducts };
