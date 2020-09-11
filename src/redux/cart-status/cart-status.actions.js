import CartStatusActionTypes from "./cart-status.types";

export const setIsCartSynced = () => ({
  type: CartStatusActionTypes.SET_IS_CART_SYNCED
});

export const unsetIsCartSynced = () => ({
  type: CartStatusActionTypes.UNSET_IS_CART_SYNCED
});
