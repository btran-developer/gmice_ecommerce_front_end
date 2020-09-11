import axios from "axios";

const baseURL = "http://localhost:5000/api";

class CartService {
  constructor() {
    this.instance = axios.create({ baseURL: `${baseURL}/cart` });
  }

  fetchCart = async cart_id => {
    const response = await this.instance.get(`/${cart_id}`);
    return response.data["cart"];
  };

  createCart = async (user_id = 0) => {
    const body = {
      user_id
    };
    const response = await this.instance.post("", body);
    return response.data["cart_id"];
  };

  addToCart = async (cart_id, product_id) => {
    const body = {
      product_id
    };
    const response = await this.instance.patch(`/${cart_id}`, body);
    return response.data["cartline"];
  };

  updateCartline = async (cart_id, cartline_id, quantity) => {
    const body = {
      cartline_id,
      quantity
    };
    const response = await this.instance.put(`/${cart_id}`, body);
    return response.data["cartline"];
  };

  deleteCartline = async (cart_id, cartline_id) => {
    const body = {
      cartline_id
    };
    const response = await this.instance.delete(`/${cart_id}`, { data: body });
    return response.data["cartline_id"];
  };

  mergeCarts = async (from_cart_id, to_cart_id, user_id) => {
    const body = {
      from_cart_id,
      user_id
    };
    if (to_cart_id) {
      body["to_cart_id"] = to_cart_id;
    }
    const response = await this.instance.post("/merge", body);
    return response.data["cart"];
  };
}

export const cartService = new CartService();

export default CartService;
