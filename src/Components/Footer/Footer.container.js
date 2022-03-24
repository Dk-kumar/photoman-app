import React, { Component } from "react";
import Footer from "./Footer.component";

class FooterContainer extends Component {
  state = {
    collections: [
      { type: "home" },
      { type: "about" },
      { type: "wedding" },
      { type: "baby shoot" },
      { type: "contact" },
    ],
  };

  containerFunction = {
    handleNavigation: this.handleNavigation.bind(this),
    gotoTop: this.gotoTop.bind(this)
  };

  gotoTop() {
    let rootElement = document.documentElement

    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  handleNavigation(path) {
    let pathName = path === "home" ? "/" : path.replace(" ", "");
    return this.props.history.push(`${pathName}`);
  }

  render() {
    return (
      <>
        <Footer {...this.state} {...this.containerFunction}/>
      </>
    );
  }
}

export default FooterContainer;
