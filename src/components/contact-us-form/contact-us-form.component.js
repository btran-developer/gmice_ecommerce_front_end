import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import FormTextField from "../form-text-field/form-text-field.component";
import FormTextareaField from "../form-textarea-field/form-textarea-field.component";
import ContactUsResultModal from "../contact-us-result-modal/contact-us-result-modal.component";
import { openModal } from "../../redux/modal/modal.actions";

const ContactUsForm = ({ completeContactUs }) => {
  const [sending, setSending] = useState(false);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  const initialFormValues = {
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    subject: Yup.string()
      .max(32, "Must be 32 characters or less")
      .required("Required"),
    orderId: Yup.string(),
    message: Yup.string().required("Required")
  });

  const dipatchOpenModal = () => dispatch(openModal());

  const handleSubmit = async values => {
    dipatchOpenModal();
    setSending(true);
    const body = {
      user_name: values.name,
      user_email: values.email,
      subject: values.subject,
      order_id: values.orderId,
      message: values.message
    };
    const response = await axios.post(
      "http://127.0.0.1:5000/api/contactus",
      body
    );
    if (response.status !== 200) {
      setHasError(true);
    }
    setSending(false);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <>
      <form
        className="contact-us-form uk-form-stacked"
        onSubmit={formik.handleSubmit}
      >
        <FormTextField
          id="name"
          name="name"
          label="Name"
          touched={formik.touched.name}
          error={formik.errors.name}
          value={formik.values.name}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormTextField
          id="email"
          name="email"
          label="Email"
          touched={formik.touched.email}
          error={formik.errors.email}
          value={formik.values.email}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormTextField
          id="subject"
          name="subject"
          label="Subject"
          touched={formik.touched.subject}
          error={formik.errors.subject}
          value={formik.values.subject}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
        />
        <FormTextField
          id="orderId"
          name="orderId"
          label="Order ID"
          touched={formik.touched.orderID}
          error={formik.errors.orderID}
          value={formik.values.orderID}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          placeholder="Optional"
        />
        <FormTextareaField
          id="message"
          name="message"
          label="Message"
          touched={formik.touched.message}
          error={formik.errors.message}
          value={formik.values.message}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          rows="7"
        />
        <button className="uk-button uk-button-primary" type="submit">
          Submit
        </button>
      </form>
      <ContactUsResultModal
        sending={sending}
        hasError={hasError}
        completeContactUs={completeContactUs}
      />
    </>
  );
};

export default ContactUsForm;
