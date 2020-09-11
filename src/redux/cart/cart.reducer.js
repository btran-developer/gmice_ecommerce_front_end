import CartActionTypes from "./cart.types";

const initialValue = {};

const CartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART:
      let cart = {};
      action.payload.cartId && (cart["cartId"] = action.payload.cartId);
      action.payload.cart["cart_lines"].forEach(line => {
        cart[line.product.name] = {
          cartline_id: line.id,
          product_id: line.product.id,
          name: line.product.name,
          brand: line.product.brand,
          repImage: line.product.images
            .filter(image => image.main)
            .map(image => image.image_url)[0],
          quantity: +line.quantity,
          price: +line.product.price,
          total_price: +line.product.price * +line.quantity
        };
      });
      return cart;
    case CartActionTypes.ADD_TO_CART:
      const { newCartline } = action.payload;
      return {
        ...state,
        [newCartline.product.name]: {
          ...newCartline,
          cartline_id: newCartline.id,
          product_id: newCartline.product.id,
          brand: newCartline.product.brand,
          repImage: newCartline.product.images
            .filter(image => image.main)
            .map(image => image.image_url)[0],
          quantity: +newCartline.quantity,
          price: +newCartline.product.price,
          total_price: newCartline.product.price * newCartline.quantity
        }
      };
    case CartActionTypes.CHANGE_QUANTITY:
      const { updatedCartline } = action.payload;

      return {
        ...state,
        [updatedCartline.product.name]: {
          ...state[updatedCartline.product.name],
          quantity: +updatedCartline.quantity,
          price: +updatedCartline.product.price,
          total_price: updatedCartline.product.price * updatedCartline.quantity
        }
      };
    case CartActionTypes.REMOVE_FROM_CART:
      const { deletedCartlineId } = action.payload;

      Object.keys(state)
        .filter(name => name !== "cartId")
        .forEach(productName => {
          if (state[productName].cartlineId === deletedCartlineId) {
            delete state[productName];
          }
        });

      return {
        ...state
      };
    case CartActionTypes.EMPTY_CART:
      return {};
    default:
      return state;
  }
};

export default CartReducer;
