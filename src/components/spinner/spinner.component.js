import React from "react";
import "./spinner.styles.scss";

const Spinner = ({ text = "Loading" }) => (
  <div className="spinner-group">
    <div className="spinner"></div>
    <div className="spinner-text">{text}</div>
  </div>
);

export default Spinner;
