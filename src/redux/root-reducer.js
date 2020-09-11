import { combineReducers } from "redux";
import productReducer from "./product/product.reducer";
import modalReducer from "./modal/modal.reducer";
import flashMessageReducer from "./flash-message/flash-message.reducer";
import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";
import checkoutAddressesReducer from "./checkout-addresses/checkout_addresses.reducer";

const rootReducer = combineReducers({
  products: productReducer,
  isModalOpen: modalReducer,
  flashMessage: flashMessageReducer,
  auth: authReducer,
  cart: cartReducer,
  checkoutAddresses: checkoutAddressesReducer,
});

export default rootReducer;
