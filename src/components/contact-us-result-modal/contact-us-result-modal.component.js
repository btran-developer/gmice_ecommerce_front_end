import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "../modal/modal.component";
import Spinner from "../spinner/spinner.component";
import { closeModal } from "../../redux/modal/modal.actions";

import "./contact-us-result-modal.styles.scss";

const ContactUsResultModal = ({ sending, hasError, completeContactUs }) => {
  const isModalOpen = useSelector(state => state.isModalOpen);
  const dispatch = useDispatch();

  const dispatchCloseModal = () => dispatch(closeModal());

  return (
    <Modal show={isModalOpen}>
      <div className="uk-position-center">
        {sending ? (
          <Spinner text="Sending..." />
        ) : hasError ? (
          <div className="failed-sending-msg">
            <span>
              <FontAwesomeIcon icon="times" size="6x" />
            </span>
            <span className="failed-text">Failed</span>
            <span className="failed-msg">Please try again.</span>
            <button
              className="uk-button uk-button-secondary failed-confirm"
              onClick={dispatchCloseModal}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="success-sending-msg">
            <span>
              <FontAwesomeIcon icon="check" size="6x" />
            </span>
            <span className="success-text">Success</span>
            <button
              className="uk-button uk-button-primary success-confirm"
              onClick={completeContactUs}
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ContactUsResultModal;
