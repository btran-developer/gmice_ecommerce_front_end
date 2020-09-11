import CartActionTypes from "./cart.types";
import { cartService } from "../../services/cart.service";

export const fetchCart = (cartId) => async (dispatch) => {
  const cart = await cartService.fetchCart(cartId);

  return dispatch({
    type: CartActionTypes.SET_CART,
    payload: {
      cartId,
      cart,
    },
  });
};

export const addToCart = (cartId, productId) => async (dispatch) => {
  if (!cartId) {
    cartId = await cartService.createCart();
    window.localStorage.setItem("gmice_cart_id", cartId);
  }
  const newCartline = await cartService.addToCart(cartId, productId);

  return dispatch({
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      newCartline,
    },
  });
};

export const changeQuantity = (cartId, cartlineId, quantity) => async (
  dispatch
) => {
  const updatedCartline = await cartService.updateCartline(
    cartId,
    cartlineId,
    quantity
  );

  return dispatch({
    type: CartActionTypes.CHANGE_QUANTITY,
    payload: {
      updatedCartline,
    },
  });
};

export const removeFromCart = (cartId, cartlineId) => async (dispatch) => {
  const deletedCartlineId = await cartService.deleteCartline(
    cartId,
    cartlineId
  );

  return dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: { deletedCartlineId },
  });
};

export const mergeCarts = (fromCartId, toCartId, userId) => async (
  dispatch
) => {
  const finalCart = await cartService.mergeCarts(fromCartId, toCartId, userId);

  return dispatch({
    type: CartActionTypes.SET_CART,
    payload: {
      cart: finalCart,
    },
  });
};

export const emptyCart = () => {
  return {
    type: CartActionTypes.EMPTY_CART,
  };
};
