import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormTextField from "../form-text-field/form-text-field.component";

import "./weekly-letter-form.styles.scss";

const WeeklyLetterForm = () => {
  const initialFormValues = {
    email: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
  });

  const handleSubmit = values => {
    alert(JSON.stringify(values, {}, 2));
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <form className="weekly-letter-form" onSubmit={formik.handleSubmit}>
      <FormTextField
        id="email"
        name="email"
        className="weekly-letter-input"
        placeholder="Enter email for weekly newsletter"
        touched={formik.touched.email}
        error={formik.errors.email}
        value={formik.values.email}
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
      />
      <button className="sign-up-letter-btn uk-button uk-button-primary">
        Sign Up
      </button>
    </form>
  );
};

export default WeeklyLetterForm;
