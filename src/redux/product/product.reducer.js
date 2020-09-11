import ProductActionTypes from "./product.types";

const initialState = {};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT_BY_SLUG:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default productReducer;
