import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { formatPrice } from "../../utils";

import CartLine from "../../components/cart-line/cart-line.component";

import "./cart.styles.scss";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = Object.keys(cart)
    .filter((name) => name !== "cartId")
    .reduce(
      (total, productName) => cart[productName]["total_price"] + total,
      0
    );

  return (
    <>
      <div className="cart-page">
        {Object.keys(cart).filter((name) => name !== "cartId").length === 0 ? (
          <div className="cart-empty-msg uk-position-center uk-heading-small">
            Your cart is currently empty.
          </div>
        ) : (
          <>
            <h1>Cart</h1>
            <div className="cart-lines">
              {Object.keys(cart)
                .filter((name) => name !== "cartId")
                .map((productName) => (
                  <CartLine
                    key={productName}
                    cartlineId={cart[productName]["cartline_id"]}
                    productName={productName}
                    repImage={cart[productName].repImage}
                    brand={cart[productName].brand}
                    quantity={cart[productName].quantity}
                    price={cart[productName].price}
                  />
                ))}
            </div>
            <div className="cart-total-price">
              <div className="total-label">Total:</div>
              <div className="total-price">{formatPrice(totalPrice)}</div>
            </div>
            <Link
              className="uk-button uk-button-primary"
              to="/checkout/address"
            >
              Check out
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
