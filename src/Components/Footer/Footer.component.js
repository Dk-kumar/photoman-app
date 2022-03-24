import React, { Component } from "react";
import { upArrow } from "../../Util/Icons";
import "./Footer.style.scss";

class Footer extends Component {
  state = {};

  renderFooter() {
    const { handleNavigation, gotoTop, collections } = this.props;
    return (
      <ul className="link">
        {collections.map((elem, index) => {
          return (
            <li key={index}>
              <span onClick={() => handleNavigation(elem.type)}>
                {elem.type}
              </span>
            </li>
          );
        })}
        <li id="back-to-top" className="back-to-top" onClick={gotoTop}>
          <span>
            back to top
          </span>
          <i>{upArrow()}</i>
        </li>
      </ul>
    );
  }
  render() {
    return <div className="footer-container">{this.renderFooter()}</div>;
  }
}

export default Footer;
