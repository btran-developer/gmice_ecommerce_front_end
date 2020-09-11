import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormTextField from "../form-text-field/form-text-field.component";
import FlashMessage from "../flash-message/flash-message.component";

import { AuthContext } from "../../contexts/auth.context";

import {
  addMessage,
  removeMessage
} from "../../redux/flash-message/flash-message.actions";

import "./sign-up-form.styles.scss";

const SignUpForm = ({ className, loginPath }) => {
  const { createAccount } = useContext(AuthContext);
  const flashMessage = useSelector(state => state.flashMessage);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required")
  });

  const redirectToLogin = (withFlashMessage = false) => {
    if (!withFlashMessage) {
      dispatchRemoveFlashMessage();
    }

    history.push(loginPath);
  };

  const dispatchAddFlashMessage = message => dispatch(addMessage(message));

  const dispatchRemoveFlashMessage = () => dispatch(removeMessage());

  const handleSubmit = async values => {
    const body = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password
    };

    const response = await createAccount(body);
    if (response.status >= 400) {
      dispatchAddFlashMessage({
        message: response.data.message,
        category: "error"
      });
    } else {
      dispatchAddFlashMessage({
        message: response.data.message,
        category: "success"
      });
    }
  };

  useEffect(() => {
    if (flashMessage.category === "success") {
      redirectToLogin(true);
    }
  }, [flashMessage]);

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <div className={`sign-up-form ${className}`}>
      <div className="sign-up-form-title">Join Force</div>
      <FlashMessage />
      <form onSubmit={formik.handleSubmit}>
        <div className="first-last-name">
          <FormTextField
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="Required"
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
            value={formik.values.firstName}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
          <FormTextField
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Required"
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
            value={formik.values.lastName}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
          />
        </div>
        <FormTextField
          id="email"
          name="email"
          label="Email"
          placeholder="Required"
          touched={formik.touched.email}
          error={formik.errors.email}
          value={formik.values.email}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormTextField
          id="password"
          name="password"
          label="Password"
          placeholder="Required"
          password
          touched={formik.touched.password}
          error={formik.errors.password}
          value={formik.values.password}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormTextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Required"
          password
          touched={formik.touched.confirmPassword}
          error={formik.errors.confirmPassword}
          value={formik.values.confirmPassword}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <button
          className="sign-up-btn uk-button uk-button-primary"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="sign-up-form-other-option">
        Already have an account?&nbsp;
        <button
          className="uk-button uk-button-text"
          onClick={e => redirectToLogin(false)}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
