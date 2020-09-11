import React from "react";
import { useSelector } from "react-redux";

import "./flash-message.styles.scss";

const FlashMessage = () => {
  const { message, category } = useSelector(state => state.flashMessage);

  if (message === "") {
    return null;
  }

  return <div className={`flash-message ${category}`}>{message}</div>;
};

export default FlashMessage;
