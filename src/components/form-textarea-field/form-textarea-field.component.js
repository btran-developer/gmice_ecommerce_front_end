import React from "react";

const FormTextareaField = ({
  id,
  name,
  label,
  touched,
  error,
  handleChange,
  handleBlur,
  value,
  placeholder,
  rows
}) => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={name}>
        {label}:
      </label>
      <div className="uk-form-control">
        <textarea
          type="text"
          id={id}
          className={`uk-textarea ${touched && error ? "uk-form-danger" : ""}`}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder && placeholder}
          rows={rows}
        />
      </div>
      {touched && error ? (
        <div className="uk-text-small uk-text-danger">{error}</div>
      ) : null}
    </div>
  );
};

export default FormTextareaField;
