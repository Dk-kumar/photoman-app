import React, { Component } from "react";
import { connect } from "react-redux";
import Support from "./Support.component";
import SupportDispatcher from "../../Store/Support/Support.dispatcher";

export const mapStateToProps = (state) => ({
  supportDetails: state.supportReducer,
});

export const mapDispatchToProps = (dispath) => ({
  postSupport: (body) => SupportDispatcher.postSupportDetails(dispath, body),
});

class SupportContainer extends Component {
  state = {
    isOpenChat: false,
    chatValues: {
      name: "",
      phonenumber: "",
      message: "",
      location: "",
      email: "",
    },
  };

  containerFunction = {
    handlePopup: this.handlePopup.bind(this),
    handleForm: this.handleForm.bind(this),
    submitForm: this.submitForm.bind(this),
  };

  handlePopup() {
    const { isOpenChat } = this.state;
    this.setState({
      isOpenChat: !isOpenChat,
    });
  }

  handleForm({ currentTarget: input }) {
    let chatValues = { ...this.state.chatValues };
    chatValues[input.name] = input.value;
    this.setState({
      chatValues,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { postSupport } = this.props;
    const { chatValues } = this.state;

    const body = {
      name: chatValues.name,
      phoneNumber: chatValues.phonenumber,
      Message: chatValues.message,
      location: chatValues.location,
      emailId: chatValues.email,
    };
    debugger;
    postSupport(body);
  }

  render() {
    return (
      <>
        <Support {...this.containerFunction} {...this.props} {...this.state} />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportContainer);
