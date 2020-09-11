import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import { changeQuantity, removeFromCart } from "../../redux/cart/cart.actions";

import { slugify } from "../../utils";

import "./cart-line.styles.scss";

const CartLine = ({
  cartlineId,
  productName,
  repImage,
  brand,
  quantity,
  price
}) => {
  const dispatch = useDispatch();
  const cartId = useSelector(state => state.cart["cartId"]);
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const debouncedChangeQuantity = _.debounce(
    (cartId, cartlineId, itemQuantity) =>
      dispatch(changeQuantity(cartId, cartlineId, itemQuantity)),
    1000
  );
  const handleChangeQuantity = e => {
    setItemQuantity(+e.target.value);
    debouncedChangeQuantity(cartId, cartlineId, +e.target.value);
  };
  const handleRemoveFromCart = (cartId, cartlineId) =>
    dispatch(removeFromCart(cartId, cartlineId));

  return (
    <div key={productName} className="cartline">
      <div
        className="rep-image"
        style={{
          backgroundImage: `url('${repImage}')`
        }}
      />
      <div className="item-title-quantity-price">
        <Link className="item-title" to={`/products/${slugify(productName)}`}>
          {brand} - {productName}
        </Link>
        <input
          className="item-quantity uk-input"
          name={productName}
          type="number"
          min="1"
          value={itemQuantity}
          onChange={handleChangeQuantity}
        />{" "}
        x ${price}
        <div
          className="delete-item-btn"
          onClick={() => handleRemoveFromCart(cartId, cartlineId)}
        >
          <FontAwesomeIcon icon="trash" size="lg" />
        </div>
      </div>
    </div>
  );
};

export default CartLine;
