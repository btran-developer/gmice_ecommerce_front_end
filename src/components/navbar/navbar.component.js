import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideNav from "../side-nav/side-nav.component";

import "./navbar.styles.scss";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const history = useHistory();
  const cartTotalItems = useSelector(({ cart }) => {
    return Object.keys(cart)
      .filter(name => name !== "cartId")
      .reduce((total, productName) => {
        return cart[productName].quantity + total;
      }, 0);
  });

  const openSideNav = e => setIsClosed(false);

  const closeSideNav = e => setIsClosed(true);

  const redirectToCart = e => history.push("/cart");

  return (
    <div className="navbar">
      <SideNav open={!isClosed} handleClose={closeSideNav} />
      <div className="menu" onClick={openSideNav}>
        <FontAwesomeIcon icon="bars" size="lg" />
      </div>
      <div className="brand">GMice</div>
      <div className="cart" onClick={redirectToCart}>
        <FontAwesomeIcon icon="shopping-cart" size="lg" />
        <div className="badge">{cartTotalItems}</div>
      </div>
    </div>
  );
};

export default Navbar;
