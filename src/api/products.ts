import API_PATHS from "constants/apiPaths";
import { Product } from "models/Product";

import axios from "axios";

type Response = any;

const fetchProducts = () => {
  return axios
    .get(API_PATHS.products)
    .then((res: Response) => res.data.result.items);
};

const addProductToBasketAsync = (p: Product) => {
  const params = new URLSearchParams();

  params.append("title", p.title);
  params.append("description", p.description);
  params.append("price", `${p.price}`);
  params.append("count", `${p.count}`);

  return axios.post(API_PATHS.products, params);
};

export { addProductToBasketAsync, fetchProducts };
