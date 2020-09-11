import React from "react";

const FormCheckboxField = ({ label, isChecked, handleChange }) => {
  return (
    <label>
      <input
        className="uk-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      ></input>
      &nbsp;
      {label}
    </label>
  );
};

export default FormCheckboxField;
