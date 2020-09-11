import React from "react";
import { useSelector } from "react-redux";

import { formatPrice } from "../../utils";

import "./checkout-summary.styles.scss";

const CheckoutSummary = () => {
  const cart = useSelector((state) => state.cart);
  const itemsList = Object.keys(cart)
    .filter((name) => name !== "cartId")
    .map((name) => cart[name]);
  const totalPrice = Object.keys(cart)
    .filter((name) => name !== "cartId")
    .reduce(
      (total, productName) => cart[productName]["total_price"] + total,
      0
    );

  return (
    <div className="checkout-summary">
      <h3>Cart Summary:</h3>
      <ul className="checkout-summary-list">
        {itemsList.map((item) => (
          <li className="checkout-summary-item" key={item.name}>
            <span className="summary-item-label">
              {item.name} x {item.quantity}:
            </span>
            <span className="summary-item-price-value">
              {formatPrice(item["total_price"])}
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <div className="checkout-summary-total-price">
        <span className="summary-total-price-label">Total Price:</span>
        <span className="summary-total-price-value">
          {formatPrice(totalPrice)}
        </span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
