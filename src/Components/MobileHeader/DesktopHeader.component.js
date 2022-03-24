import React, { Component } from "react";
import { logo } from "../../Util/Logo";

class DesktopHeader extends Component {
  state = {};

  renderHeader() {
    const { collections } = this.props;
    return (
      <div className="desktop-header">
        <ul className="link-container">
          <li className="link">home</li>
          <li className="link">about</li>
          <li className="link">weddings</li>
          <li className="link-logo">
            <img src={logo()} alt="logo" />
          </li>
          <li className="link">baby shower</li>
          <li className="link">baby shoot</li>
          <li className="link">contact</li>
        </ul>
      </div>
    );
  }

  render() {
    return <>{this.renderHeader()}</>;
  }
}

export default DesktopHeader;
