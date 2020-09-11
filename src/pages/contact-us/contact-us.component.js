import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import ContactUsForm from "../../components/contact-us-form/contact-us-form.component";

import "./contact-us.styles.scss";

const ContactUsPage = () => {
  const [isFinished, setIsFinished] = useState(false);

  const completeContactUs = useCallback(() => setIsFinished(true), []);

  return (
    <div className="contact-us">
      <div className="our-location">
        <div className="title">Our Location</div>
        <div className="info">
          <div className="store-address">
            <strong>Address:</strong>
            <div>
              GMice
              <br />
              250 Brent Ln
              <br />
              Pensacola, FL, 32503
            </div>
          </div>
          <div className="contact-info">
            <strong>Store Hours:&nbsp;</strong>
            <span>Monday - Friday</span>
            <br />
            <strong>Phone Number:&nbsp;</strong>
            <span>(850)-292-6494</span>
            <br />
            <strong>Phone Hours:&nbsp;</strong>
            <span>9am - 4pm EST</span>
            <br />
            <strong>Email:&nbsp;</strong>
            <span>gmice@gmail.com</span>
          </div>
        </div>
      </div>
      {!isFinished ? (
        <div className="contact-form">
          <div className="title">Contact Form</div>
          <ContactUsForm completeContactUs={completeContactUs} />
        </div>
      ) : (
        <div className="completed-msg">
          <div className="title">Thank you for contacting us!</div>
          <p>
            You are our valuable customer, we will get to as soon as we can.
          </p>
          <Link className="uk-button uk-button-primary" to="/products">
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
