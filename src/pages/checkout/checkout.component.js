import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";

import CheckoutAddresses from "../../components/checkout-addresses/checkout-addresses.component";
import CheckoutPayment from "../../components/checkout-payment/checkout-payment.component";
import CheckoutFinish from "../../components/checkout-finish/checkout-finish.component";

import Routes from "../../routes";

const CheckoutPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}${Routes.checkout.child.checkoutAddresses}`}>
        <CheckoutAddresses />
      </Route>
      <Route exact path={`${path}${Routes.checkout.child.checkoutPayment}`}>
        <StripeProvider apiKey="pk_test_k0RBLzCygRn8H0BZkxGyiqJy00Qvun1AYF">
          <Elements>
            <CheckoutPayment />
          </Elements>
        </StripeProvider>
      </Route>
      <Route exact path={`${path}${Routes.checkout.child.checkoutFinish}`}>
        <CheckoutFinish />
      </Route>
    </>
  );
};

export default CheckoutPage;
