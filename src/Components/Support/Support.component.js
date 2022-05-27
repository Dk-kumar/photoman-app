import React, { Component } from "react";
import { chatIcon, closeIcon } from "../../Util/Icons";
import "./Support.style.scss";

class Support extends Component {
  state = {};

  renderChatIcon() {
    const { handlePopup } = this.props;
    return (
      <span className="chat-wrapper" onClick={handlePopup}>
        {chatIcon()}
      </span>
    );
  }

  chatForm() {
    const { handlePopup, handleForm, chatValues, submitForm } = this.props;
    const { name, phonenumber, email, message, location } = chatValues;
    return (
      <form className="chat-form" onSubmit={submitForm}>
        <div className="chat-form-wrapper">
          <span className="close-form" onClick={handlePopup}>
            {closeIcon()}
          </span>
          <div className="name">
            <input
              type="text"
              name="name"
              value={name}
              autoComplete="off"
              placeholder="Name"
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="phonenumber">
            <input
              type="text"
              name="phonenumber"
              value={phonenumber}
              autoComplete="off"
              placeholder="Phonenumber"
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="location">
            <input
              type="text"
              name="location"
              value={location}
              autoComplete="off"
              placeholder="Location (Optional)"
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              placeholder="Email ID (Optional)"
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="message">
            <textarea
              rows="5"
              name="message"
              value={message}
              autoComplete="off"
              placeholder="Write a message"
              onChange={(e) => handleForm(e)}
            />
          </div>
          <div className="submit">
            <button className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const { isOpenChat } = this.props;
    return (
      <div className="support-container">
        {isOpenChat ? this.chatForm() : this.renderChatIcon()}
      </div>
    );
  }
}

export default Support;
