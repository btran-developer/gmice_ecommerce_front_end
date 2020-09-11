import CartStatusActionTypes from "./cart-status.types";

const initialValue = false;

const cartStatusReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CartStatusActionTypes.SET_IS_CART_SYNCED:
      return true;
    case CartStatusActionTypes.UNSET_IS_CART_SYNCED:
      return false;
    default:
      return state;
  }
};

export default cartStatusReducer;
