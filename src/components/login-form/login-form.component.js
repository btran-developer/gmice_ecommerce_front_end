import React, { useContext } from "react";
import { useDispatch } from "react-redux";
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
import { setAuth } from "../../redux/auth/auth.actions";

import "./login-form.styles.scss";

const LoginForm = ({ className, signupPath }) => {
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAddFlashMessage = message => dispatch(addMessage(message));
  const handleRemoveFlashMessage = () => dispatch(removeMessage());
  const handleSetAuth = auth => dispatch(setAuth(auth));

  const initialFormValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string().required("Required")
  });

  const handleSubmit = async values => {
    const body = {
      email: values.email,
      password: values.password
    };
    const response = await login(body);
    if (response.status >= 400) {
      handleAddFlashMessage({
        message: response.data.message,
        category: "error"
      });
    } else {
      handleSetAuth(response.data);
      history.push("/");
    }
  };

  const redirectToSignUp = (withFlashMessage = false) => {
    if (!withFlashMessage) {
      handleRemoveFlashMessage();
    }

    history.push(signupPath);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <div className={`login-form ${className}`}>
      <div className="login-form-title">Login</div>
      <FlashMessage />
      <form onSubmit={formik.handleSubmit}>
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
        <button className="login-btn uk-button uk-button-primary" type="submit">
          Login
        </button>
      </form>
      <div className="login-form-other-option">
        Forget password?&nbsp;
        <button className="uk-button uk-button-text">Reset</button>
      </div>
      <div className="login-form-other-option">
        No account?&nbsp;
        <button
          className="uk-button uk-button-text"
          onClick={e => redirectToSignUp(false)}
        >
          Create new account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
