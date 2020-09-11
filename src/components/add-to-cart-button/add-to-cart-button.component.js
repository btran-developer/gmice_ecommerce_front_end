import React from "react";

const AddToCartButton = ({ inStock, handleAddToCart }) => (
  <button
    className="uk-button uk-button-primary"
    disabled={!inStock}
    onClick={handleAddToCart}
  >
    {inStock ? "Add to cart" : "Out of stock"}
  </button>
);

export default AddToCartButton;
