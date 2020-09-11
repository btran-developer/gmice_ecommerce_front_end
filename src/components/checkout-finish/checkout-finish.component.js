import React from "react";
import { Link } from "react-router-dom";

import Routes from "../../routes";

const CheckoutFinish = () => {
  return (
    <div>
      <h2>Thank you for shopping with GMice!</h2>
      <Link to={Routes.products.root}>Continue shopping</Link>
    </div>
  );
};

export default CheckoutFinish;
