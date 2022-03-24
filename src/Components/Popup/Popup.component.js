import React, { Component } from "react";
import ReactDOM from "react-dom";
import { closeIcon } from "../../Util/Icons";
import "./Popup.style.scss";

class Popup extends Component {
  state = {};
  render() {
    const { children, onOpen, onClose } = this.props;
    if (!onOpen) return null;
    return ReactDOM.createPortal(
      <>
        <div className="popup-container">
          <div className="popup">
            <button className="close-btn" onClick={onClose}>
              {closeIcon()}
            </button>
            <div className="popup-content">{children}</div>
          </div>
        </div>
      </>,
      document.getElementById("popup")
    );
  }
}

export default Popup;
