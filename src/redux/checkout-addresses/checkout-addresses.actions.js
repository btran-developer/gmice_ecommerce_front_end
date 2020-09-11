import CheckoutAddressesActionTypes from "./checkout-addresses.types";

export const setAddresses = (addresses) => ({
  type: CheckoutAddressesActionTypes.SET_ADDRESSES,
  payload: {
    ...addresses,
  },
});

export const clearAddress = () => ({
  type: CheckoutAddressesActionTypes.CLEAR_ADDRESSES,
});
