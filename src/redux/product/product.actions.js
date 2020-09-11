import axios from "axios";
import { normalize } from "normalizr";

import ProductActionTypes from "./product.types";
import { productSchema } from "./product.schema";

export const fetchProduct = productSlug => async dispatch => {
  const response = await axios.get(
    `http://127.0.0.1:5000/api/product/${productSlug}`
  );
  const { product_item } = response.data;
  return dispatch({
    type: ProductActionTypes.FETCH_PRODUCT_BY_SLUG,
    payload: normalize(product_item, productSchema).entities.product
  });
};
