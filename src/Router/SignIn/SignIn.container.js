import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./SignIn.component";
import { getBrowserData, setBrowserData } from "../../Util/BrowserDB";
import SignInDispatcher from "../../Store/SignIn/SignIn.dispatcher";

export const SIGNIN = "SIGNIN";

export const mapStateToProps = (state) => ({
  signIn: state.signInReducer,
});

export const mapDispatchToProps = (dispath) => ({
  postSignIn: (body) => SignInDispatcher.postSignInDetails(dispath, body),
});

class SignInContainer extends Component {
  state = {
    userInputs: {
      userName: "",
      password: "",
      name: "",
    },
    isLogedIn: false,
  };

  componentDidMount() {
    const { isLogedIn } = this.state;

    if (getBrowserData(SIGNIN)) {
      this.setState({
        isLogedIn: !isLogedIn,
      });
    }
  }

  containerFunctions = {
    handleOnChange: this.handleOnChange.bind(this),
    handleSubmit: this.handleSubmit.bind(this),
  };

  handleOnChange({ currentTarget: input }) {
    let userInputs = { ...this.state.userInputs };
    userInputs[input.name] = input.value;
    this.setState({
      userInputs,
    });
  }

  handleSubmit() {
    const { userInputs, isLogedIn } = this.state;
    const { postSignIn } = this.props;
    const body = {
      UserName: userInputs.userName,
      Password: userInputs.password,
      Ip: "",
      name: userInputs.name,
    };
debugger
    postSignIn(body);
    // setBrowserData(SIGNIN, userInputs);
    if (getBrowserData(SIGNIN)) {
      this.setState({
        isLogedIn: !isLogedIn,
      });
    }
  }

  render() {
    return <SignIn {...this.containerFunctions} {...this.state} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
