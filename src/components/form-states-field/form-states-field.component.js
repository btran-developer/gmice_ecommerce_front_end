import React from "react";
import { v4 as uuid } from "uuid";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Lousiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

const FormStatesField = ({
  id,
  label,
  touched,
  error,
  name,
  handleChange,
  handleBlur,
  value
}) => {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={name}>
        {label}:
      </label>
      <br />
      <div uk-form-custom="target: > * > span:first-child">
        <select
          id={id}
          className={`uk-input  ${touched && error ? "uk-form-danger" : ""}`}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
        >
          <option value="">Please select...</option>
          {states.map(state => (
            <option key={uuid()} value={state}>
              {state}
            </option>
          ))}
        </select>
        <button
          className="uk-button uk-button-default"
          type="button"
          tabIndex="-1"
        >
          <span></span>
          <span uk-icon="icon: chevron-down"></span>
        </button>
      </div>
      {touched && error ? (
        <div className="uk-text-small uk-text-danger">{error}</div>
      ) : null}
    </div>
  );
};

export default FormStatesField;
