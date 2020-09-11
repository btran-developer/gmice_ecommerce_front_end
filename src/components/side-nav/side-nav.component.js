import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../../contexts/auth.context";

import { removeAuth } from "../../redux/auth/auth.actions";
import { emptyCart } from "../../redux/cart/cart.actions";

import "./side-nav.styles.scss";

const SideNav = ({ open, handleClose }) => {
  const { logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { accessToken, isAuthenticated } = useSelector(state => state.auth);
  const handleRemoveAuth = () => dispatch(removeAuth());
  const handleEmptyCart = () => dispatch(emptyCart());
  const handleLogout = async () => {
    const refreshToken = window.localStorage.getItem("gmice_refresh_token");

    const response = await logout(accessToken, refreshToken);
    if (response.status >= 400) {
      alert("Something went wrong, could not logout.");
    } else {
      handleRemoveAuth();
    }

    handleClose();
  };

  useEffect(() => {
    if (!isAuthenticated) {
      handleEmptyCart();
    }
  }, [isAuthenticated]);

  return (
    <div className={`side-nav ${open && "open"}`}>
      <div className="close-btn" onClick={handleClose}>
        <FontAwesomeIcon icon="times" />
      </div>
      <NavLink to="/products" activeClassName="active" onClick={handleClose}>
        Products
      </NavLink>
      <NavLink to="/contactus" activeClassName="active" onClick={handleClose}>
        Contact Us
      </NavLink>
      {isAuthenticated ? (
        <Link to="#" onClick={handleLogout}>
          Log out
        </Link>
      ) : (
        <NavLink to="/auth" activeClassName="active" onClick={handleClose}>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default SideNav;
