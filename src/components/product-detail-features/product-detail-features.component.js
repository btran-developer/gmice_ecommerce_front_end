import React from "react";

import "./product-detail-features.styles.scss";

const ProductDetailFeatures = ({ features }) => {
  return (
    <div className="product-detail-features">
      <div className="product-detail-features-title">Features</div>
      <ul>
        {features.map(feature => (
          <li key={feature.title} className="feature">
            <div className="feature-title">{feature.title}</div>
            <div className="feature-description">{feature.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetailFeatures;
