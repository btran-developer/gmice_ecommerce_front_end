import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./setup-icons-library";
import store from "./redux/store";
import "./index.css";
import App from "./App";

import { AuthContext } from "./contexts/auth.context";
import { authService } from "./services/auth.service";
import { CartContext } from "./contexts/cart.context";
import { cartService } from "./services/cart.service";
import { OrderContext } from "./contexts/order.context";
import { orderService } from "./services/order.service";

ReactDOM.render(
  <Provider store={store}>
    <AuthContext.Provider value={authService}>
      <CartContext.Provider value={cartService}>
        <OrderContext.Provider value={orderService}>
          <App />
        </OrderContext.Provider>
      </CartContext.Provider>
    </AuthContext.Provider>
  </Provider>,
  document.getElementById("root")
);
