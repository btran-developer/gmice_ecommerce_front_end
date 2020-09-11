import React from "react";

import "./product-detail-header.styles.scss";

const ProductDetailHeader = ({ productName, brand }) => {
  return (
    <div className="product-detail-header">
      <div className="product-name">{productName}</div>
      <div className="product-brand">by {brand}</div>
    </div>
  );
};

export default ProductDetailHeader;
