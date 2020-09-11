import CheckoutAddressesActionTypes from "./checkout-addresses.types";

const initialState = {
  billing_full_name: "",
  billing_address1: "",
  billing_address2: "",
  billing_city: "",
  billing_state: "",
  billing_zip: "",
  shipping_full_name: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_city: "",
  shipping_state: "",
  shipping_zip: "",
  contact_email: "",
};

const checkoutAddressesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CheckoutAddressesActionTypes.SET_ADDRESSES:
      return {
        billing_full_name: payload.billing_full_name,
        billing_address1: payload.billing_address1,
        billing_address2: payload.billing_address2,
        billing_city: payload.billing_city,
        billing_state: payload.billing_state,
        billing_zip: payload.billing_zip,
        shipping_full_name: payload.shipping_full_name,
        shipping_address1: payload.shipping_address1,
        shipping_address2: payload.shipping_address2,
        shipping_city: payload.shipping_city,
        shipping_state: payload.shipping_state,
        shipping_zip: payload.shipping_zip,
        contact_email: payload.contact_email,
      };
    case CheckoutAddressesActionTypes.CLEAR_ADDRESSES:
      return initialState;
    default:
      return state;
  }
};

export default checkoutAddressesReducer;
