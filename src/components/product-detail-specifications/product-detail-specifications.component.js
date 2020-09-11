import React from "react";

import "./product-detail-specifications.styles.scss";

const ProductDetailSpecificationRow = ({ label, info }) => {
  if (typeof info === "boolean") {
    info = info ? "Yes" : "No";
  } else {
    info = info ? info : "N/A";
  }

  return (
    <tr className="specification">
      <td className="spec-label">{label}</td>
      <td className="spec-info">{info}</td>
    </tr>
  );
};

const ProductDetailSpecifications = ({ product: { specifications } }) => {
  return (
    <div className="product-detail-specifications">
      <div className="product-detail-specifications-title">Specifications</div>
      <table>
        <tbody>
          <ProductDetailSpecificationRow
            label="Lighting Type"
            info={specifications.lighting_type}
          />
          <ProductDetailSpecificationRow
            label="Minimum Sensitivity"
            info={specifications.minimum_sensitivity}
          />
          <ProductDetailSpecificationRow
            label="Maximum Sensitivity"
            info={specifications.maximum_sensitivity}
          />
          <ProductDetailSpecificationRow
            label="Total Buttons"
            info={specifications.total_buttons}
          />
          <ProductDetailSpecificationRow
            label="Total Programmable Buttons"
            info={specifications.total_programmable_buttons}
          />
          <ProductDetailSpecificationRow
            label="Wireless"
            info={specifications.wireless}
          />
          <ProductDetailSpecificationRow
            label="Height"
            info={specifications.height}
          />
          <ProductDetailSpecificationRow
            label="Width"
            info={specifications.width}
          />
          <ProductDetailSpecificationRow
            label="Weight"
            info={specifications.weight}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailSpecifications;
