import axios from "axios";

const baseURL = "http://localhost:5000/api";

class OrderService {
  constructor() {
    this.instance = axios.create({ baseURL: `${baseURL}/order` });
  }

  createOrder = async (paymentToken, cartId, userId, addressesData) => {
    const response = await this.instance.post("", {
      payment_token: paymentToken,
      cart_id: cartId,
      user_id: userId,
      ...addressesData,
    });
    return response;
  };
}

export const orderService = new OrderService();

export default OrderService;
