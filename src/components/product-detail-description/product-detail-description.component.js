import React from "react";

import "./product-detail-description.styles.scss";

const ProductDetailDescription = ({ description }) => {
  if (!description.length) {
    return null;
  }

  return (
    <div className="product-detail-description">
      <div className="description-label">Description:</div>
      <div className="product-description">{description}</div>
    </div>
  );
};

export default ProductDetailDescription;
