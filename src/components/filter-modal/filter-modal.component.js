import React from "react";
import "./filter-modal.styles.scss";

const FilterModal = ({ show, children }) => (
  <div className={`filter-modal-backdrop ${show ? "" : "close"}`}>
    {children}
  </div>
);

export default FilterModal;
