import React from "react";

import "./product-detail-price.styles.scss";

const ProductDetailPrice = ({ price }) => {
  return (
    <div className="product-detail-price">
      <div className="price-label">Price:</div>
      <span className="product-price">${price}</span>
    </div>
  );
};

export default ProductDetailPrice;
