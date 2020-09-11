import React from "react";

import { cartService } from "../services/cart.service";

export const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={cartService}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
