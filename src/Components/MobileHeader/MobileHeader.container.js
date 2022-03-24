/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import DesktopHeader from "./DesktopHeader.component";
import MobileHeader from "./MobileHeader.component";

class MobileHeaderContainer extends Component {
  state = {
    isOpenNav: true,
    collections: [
      { type: "home" },
      { type: "about" },
      { type: "weddings" },
      { type: "baby shower"},
      { type: "baby shoot" },
      { type: "contact" },
    ],
  };

  containerFunction = {
    handleMenu: this.handleMenu.bind(this),
    handleNavigation: this.handleNavigation.bind(this),
    findingRouter: this.findingRouter.bind(this),
    onBackclick: this.onBackclick.bind(this),
  };

  findingRouter() {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === "/") {
      return true;
    }
  }

  handleNavigation(path) {
    let pathName = path === "home" ? "/" : path.replace(" ", "");
    return this.props.history.push(`${pathName}`);
  }

  handleMenu() {
    const { isOpenNav } = this.state;
    const sideNav = document.getElementById("sidenav");

    isOpenNav ? (sideNav.style.width = "100%") : (sideNav.style.width = "0%");
    this.setState({
      isOpenNav: !isOpenNav,
    });
  }

  onBackclick() {
    const { history } = this.props;

    return history.goBack();
  }

  render() {
    this.findingRouter();
    return (
      <>
        <DesktopHeader {...this.containerFunction} {...this.state}/>
        <MobileHeader {...this.containerFunction} {...this.state} />
      </>
    );
  }
}

export default MobileHeaderContainer;
