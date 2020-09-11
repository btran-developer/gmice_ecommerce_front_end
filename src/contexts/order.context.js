import React from "react";

import { orderService } from "../services/order.service";

export const OrderContext = React.createContext();
const OrderProvider = (children) => (
  <OrderContext.Provider value={orderService}>{children}</OrderContext.Provider>
);

export default OrderProvider;
