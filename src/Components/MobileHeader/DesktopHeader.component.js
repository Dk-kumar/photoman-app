import React, { Component } from "react";
import { logo } from "../../Util/Logo";
import { Link } from "react-router-dom";

class DesktopHeader extends Component {
  state = {};

  renderHeader() {
    const getURL = this.props.location.pathname;
    return (
      <div className="desktop-header">
        <ul
          className="link-container"
          style={
            getURL === "/"
              ? { padding: "4rem 2rem" }
              : { padding: "2rem 1rem", background: "black" }
          }
        >
          <li>
            <Link className="link" to={"/"}>
              home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/about"}>
              about
            </Link>
          </li>
          <li>
            <Link className="link" to={"/wedding"}>
              wedding
            </Link>
          </li>
          <li className="link-logo">
            <img src={logo()} alt="logo" />
          </li>
          <li>
            <Link className="link" to={"/babyshower"}>
              baby shower
            </Link>
          </li>
          <li>
            <Link className="link" to={"/babyshoot"}>
              baby shoot
            </Link>
          </li>
          <li>
            <Link className="link" to={"/contact"}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return <>{this.renderHeader()}</>;
  }
}

export default DesktopHeader;
