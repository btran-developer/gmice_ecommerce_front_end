import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormTextField from "../form-text-field/form-text-field.component";
import FormStatesField from "../form-states-field/form-states-field.component";
import FormCheckboxField from "../form-checkbox-field/form-checkbox-field.component";

import { setAddresses } from "../../redux/checkout-addresses/checkout-addresses.actions";

import Routes from "../../routes";

import "./checkout-addresses.styles.scss";

const CheckoutAddressesForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.checkoutAddresses);
  const [isSameAddress, setIsSameAddress] = useState(false);

  const initialBillingValues = {
    billing_full_name: "",
    billing_address1: "",
    billing_address2: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
  };
  const initialShippingValues = {
    shipping_full_name: "",
    shipping_address1: "",
    shipping_address2: "",
    shipping_city: "",
    shipping_state: "",
    shipping_zip: "",
    contact_email: "",
  };

  const initialFormValues = {
    ...initialBillingValues,
    ...initialShippingValues,
  };

  const validationSchema = Yup.object({
    billing_full_name: Yup.string().required("Required"),
    billing_address1: Yup.string().required("Required"),
    billing_address2: Yup.string(),
    billing_city: Yup.string().required("Required"),
    billing_state: Yup.string().required("Required"),
    billing_zip: Yup.number()
      .max(99999, "Zip can only have 5 digits")
      .required("Required"),
    shipping_full_name: Yup.string().required("Required"),
    shipping_address1: Yup.string().required("Required"),
    shipping_address2: Yup.string(),
    shipping_city: Yup.string().required("Required"),
    shipping_state: Yup.string().required("Required"),
    shipping_zip: Yup.number()
      .max(99999, "Zip can only have 5 digits")
      .required("Required"),
    contact_email: Yup.string().email("Invalid email").required("Required"),
  });

  const saveAddresses = (addresses) => dispatch(setAddresses(addresses));

  const handleSubmit = (values) => {
    console.log(values);
    saveAddresses(values);
    history.push(
      `${Routes.checkout.root}${Routes.checkout.child.checkoutPayment}`
    );
  };

  const handleUseSameAddress = () => {
    setIsSameAddress(!isSameAddress);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    Object.keys(initialBillingValues).forEach((field) => {
      formik.handleChange({
        target: {
          name: field,
          value: addresses[field],
        },
      });
    });
  }, []);

  useEffect(() => {
    if (isSameAddress) {
      Object.keys(initialShippingValues).forEach((field) => {
        formik.handleChange({
          target: {
            name: field,
            value: formik.values[field.replace("shipping", "billing")],
          },
        });
      });
    } else {
      Object.keys(initialShippingValues).forEach((field) => {
        formik.handleChange({
          target: {
            name: field,
            value: addresses[field],
          },
        });
      });
    }
  }, [isSameAddress]);

  return (
    <div className="addresses-form uk-align-center">
      <form className="uk-grid-small" onSubmit={formik.handleSubmit}>
        <div className="billing-address address-form">
          <h1>Billing Address</h1>
          <div className="uk-width-1-2@s">
            <FormTextField
              id="billing-full-name"
              name="billing_full_name"
              label="Full name"
              placeholder="Required"
              touched={formik.touched.billing_full_name}
              error={formik.errors.billing_full_name}
              value={formik.values.billing_full_name}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="uk-width-1-2@s">
            <FormTextField
              id="billing-address1"
              name="billing_address1"
              label="Address 1"
              placeholder="Required"
              touched={formik.touched.billing_address1}
              error={formik.errors.billing_address1}
              value={formik.values.billing_address1}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="uk-width-1-2@s">
            <FormTextField
              id="billing-address2"
              name="billing_address2"
              label="Address 2"
              placeholder="Optional"
              touched={formik.touched.billing_address2}
              error={formik.errors.billing_address2}
              value={formik.values.billing_address2}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="uk-width-1-4@s">
            <FormTextField
              id="billing-city"
              name="billing_city"
              label="City"
              placeholder="Required"
              touched={formik.touched.billing_city}
              error={formik.errors.billing_city}
              value={formik.values.billing_city}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="uk-width-1-1@s">
            <FormStatesField
              id="billing-state"
              name="billing_state"
              label="State"
              touched={formik.touched.billing_state}
              error={formik.errors.billing_state}
              value={formik.values.billing_state}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="uk-width-1-4@s">
            <FormTextField
              id="billing-zip"
              name="billing_zip"
              label="Zip"
              placeholder="Required"
              touched={formik.touched.billing_zip}
              error={formik.errors.billing_zip}
              value={formik.values.billing_zip}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
        </div>
        <hr />
        <div className="shipping-address address-form">
          <h1>Shipping Address</h1>
          <div className="uk-width-1-2@s">
            <FormCheckboxField
              label="Use billing address for shipping"
              isChecked={isSameAddress}
              handleChange={handleUseSameAddress}
            />
          </div>
          <br />
          {!isSameAddress && (
            <>
              <div className="uk-width-1-2@s">
                <FormTextField
                  id="shipping-full-name"
                  name="shipping_full_name"
                  label="Full name"
                  placeholder="Required"
                  touched={formik.touched.shipping_full_name}
                  error={formik.errors.shipping_full_name}
                  value={formik.values.shipping_full_name}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="uk-width-1-2@s">
                <FormTextField
                  id="shipping-address1"
                  name="shipping_address1"
                  label="Address 1"
                  placeholder="Required"
                  touched={formik.touched.shipping_address1}
                  error={formik.errors.shipping_address1}
                  value={formik.values.shipping_address1}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="uk-width-1-2@s">
                <FormTextField
                  id="shipping-address2"
                  name="shipping_address2"
                  label="Address 2"
                  placeholder="Optional"
                  touched={formik.touched.shipping_address2}
                  error={formik.errors.shipping_address2}
                  value={formik.values.shipping_address2}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="uk-width-1-4@s">
                <FormTextField
                  id="shipping-city"
                  name="shipping_city"
                  label="City"
                  placeholder="Required"
                  touched={formik.touched.shipping_city}
                  error={formik.errors.shipping_city}
                  value={formik.values.shipping_city}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="uk-width-1-1@s">
                <FormStatesField
                  id="shipping-state"
                  name="shipping_state"
                  label="State"
                  touched={formik.touched.shipping_state}
                  error={formik.errors.shipping_state}
                  value={formik.values.shipping_state}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className="uk-width-1-4@s">
                <FormTextField
                  id="shipping-zip"
                  name="shipping_zip"
                  label="Zip"
                  placeholder="Required"
                  touched={formik.touched.shipping_zip}
                  error={formik.errors.shipping_zip}
                  value={formik.values.shipping_zip}
                  handleBlur={formik.handleBlur}
                  handleChange={formik.handleChange}
                />
              </div>
            </>
          )}
          <div className="uk-width-1-2@s">
            <FormTextField
              id="contact-email"
              name="contact_email"
              label="Contact email"
              placeholder="Required"
              touched={formik.touched.contact_email}
              error={formik.errors.contact_email}
              value={formik.values.contact_email}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="uk-width-1-1@s">
          <button
            className="next-btn uk-button uk-button-primary uk-align-center"
            type="submit"
          >
            Continue to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutAddressesForm;
