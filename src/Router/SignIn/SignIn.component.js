import React, { Component } from "react";
import AdminContainer from "../../Components/Admin/Admin.container";
import "./SignIn.style.scss";

class SignIn extends Component {
  state = {};

  renderHeadding() {
    return (
      <div>
        <p>Sign in</p>
      </div>
    );
  }

  renderInputs() {
    const {
      handleOnChange,
      handleSubmit,
      userInputs: { userName, password, name },
    } = this.props;
    return (
      <div className="login-container">
        {this.renderHeadding()}
        <div className="user-name">
          <input
            type="text"
            value={userName}
            name="userName"
            placeholder="Username"
            onChange={(e) => handleOnChange(e)}
            autoComplete={"off"}
          />
        </div>
        <div className="password">
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => handleOnChange(e)}
            autoComplete={"off"}
          />
        </div>
        <div className="name">
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(e) => handleOnChange(e)}
            autoComplete={"off"}
          />
        </div>
        <div className="login-btn">
          <button type="button" onClick={handleSubmit}>
            SignIn
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { isLogedIn } = this.props;
    return (
      <>
        {isLogedIn ? (
          <div className="admin-wrapper">
            <AdminContainer />
          </div>
        ) : (
          <div className="login-wrapper">{this.renderInputs()}</div>
        )}
      </>
    );
  }
}

export default SignIn;
