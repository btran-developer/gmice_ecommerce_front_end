import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";

import CheckoutSummary from "../checkout-summary/checkout-summary.component";

import { OrderContext } from "../../contexts/order.context";

import { emptyCart } from "../../redux/cart/cart.actions";
import { clearAddress as emptyAddress } from "../../redux/checkout-addresses/checkout-addresses.actions";

import "./checkout-payment.styles.scss";

const CheckoutPayment = ({ stripe }) => {
  const { createOrder } = useContext(OrderContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const addressesData = useSelector((state) => state.checkoutAddresses);
  const createStyle = () => {
    return {
      className: "uk-input uk-form-small",
      style: {
        base: {
          fontSize: "14px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
      },
    };
  };

  const clearCart = () => {
    dispatch(emptyCart());
    window.localStorage.removeItem("gmice_cart_id");
  };

  const clearAddress = () => {
    dispatch(emptyAddress());
  };

  const handleChange = (change) => {
    console.log(change);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stripe) {
      const payload = await stripe.createToken();
      console.log(payload);
      const response = await createOrder(
        payload,
        cart.id,
        auth.user_id,
        addressesData
      );

      if (response.status === 200) {
        clearCart();
        clearAddress();
      }
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  return (
    <div className="checkout-payment">
      <CheckoutSummary />
      <div className="checkout-payment-form">
        <h3>Payment Form:</h3>
        <form onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label className="uk-form-label">Card number</label>
            <div className="uk-form-control">
              <CardNumberElement {...createStyle()} onChange={handleChange} />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Expiration date</label>
            <div className="uk-form-control">
              <CardExpiryElement {...createStyle()} onChange={handleChange} />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">CVC</label>
            <div className="uk-form-control">
              <CardCVCElement {...createStyle()} onChange={handleChange} />
            </div>
          </div>
          <button className="uk-button uk-button-primary uk-width-1-1">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default injectStripe(CheckoutPayment);
