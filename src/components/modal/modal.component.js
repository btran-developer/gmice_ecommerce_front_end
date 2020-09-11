import React from "react";
import ReactDOM from "react-dom";
import "./modal.styles.scss";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  el = document.createElement("div");

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.show !== this.props.show) {
      if (this.props.show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  };

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  };

  render() {
    const { show, children } = this.props;

    if (!show) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className={`backdrop ${show ? "" : "close"}`}>
        <div className="dialog-box uk-position-center">{children}</div>
      </div>,
      this.el
    );
  }
}

export default Modal;
