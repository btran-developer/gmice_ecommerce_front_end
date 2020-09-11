import React from "react";

const FormTextField = ({
  id,
  name,
  label = "",
  touched,
  error,
  handleChange,
  handleBlur,
  value,
  placeholder,
  password = false,
  className = ""
}) => {
  return (
    <div className={`uk-margin ${className}`}>
      {label.length > 0 && (
        <label className="uk-form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <div className="uk-form-control">
        <input
          type={password ? "password" : "text"}
          id={id}
          className={`uk-input  ${touched && error ? "uk-form-danger" : ""}`}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder && placeholder}
        />
      </div>
      {touched && error ? (
        <div className="uk-text-small uk-text-danger">{error}</div>
      ) : null}
    </div>
  );
};

export default FormTextField;
