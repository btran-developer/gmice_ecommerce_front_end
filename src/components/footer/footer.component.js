import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WeeklyLetterForm from "../weekly-letter-form/weekly-letter-form.component";

import "./footer.styles.scss";

const Footer = () => {
  const location = useLocation();

  if (location.pathname.includes("auth")) {
    return null;
  }

  return (
    <div className="footer">
      <div>Follow us at:</div>
      <div className="brands-logo-group">
        <span className="brand-logo">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </span>
        <span className="brand-logo">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </span>
        <span className="brand-logo">
          <FontAwesomeIcon icon={["fab", "pinterest"]} />
        </span>
        <span className="brand-logo">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </span>
      </div>
      <WeeklyLetterForm />
      <p>&copy;2020 GMice. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
