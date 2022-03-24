import React, { Component } from "react";
import {
  searchIcon,
  menuIcon,
  blackMenuIcon,
  closeIcon,
  backIcon,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  youtubeIcon,
} from "../../Util/Icons";
import { logo, blackLogo } from "../../Util/Logo";
import "./MobileHeader.style.scss";

class MobileHeader extends Component {
  headerLogo() {
    const { handleMenu, findingRouter, onBackclick } = this.props;
    let mapState = findingRouter()

    return (
      <div className="header-container">
        <div className="search">{ mapState && searchIcon()}</div>
        <div className="search" onClick={ onBackclick }>{ !mapState && backIcon()}</div>
        <div className="logo">
          <img src={ mapState ? logo() : blackLogo()} alt="logo" className="header-logo" />
        </div>
        <div className="menu" onClick={handleMenu}>
          {mapState ? menuIcon() : blackMenuIcon()} 
        </div>
        {this.sideNav()}
      </div>
    );
  }

  sideNav() {
    const { handleMenu, handleNavigation, collections } = this.props;

    return (
      <div id="sidenav" className="sidenav">
        <div className="top-area" onClick={handleMenu}>
        <div className="logo">
          <img src={ blackLogo() } alt="logo" className="header-logo" />
        </div>
          <span className="closebtn">{closeIcon()}</span>
        </div>
        <ul className="bottom-area">
          {collections.map((elem, index) => {
            return (
              <li key={index} className="nav-links">
                <span onClick={() => handleNavigation(elem.type)}>{elem.type}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex-grow"></div>
        <div className="social-icons">
          {instagramIcon()}
          {twitterIcon()}
          {facebookIcon()}
          {youtubeIcon()}
        </div>
      </div>
    );
  }

  render() {
    return <>{this.headerLogo()}</>;
  }
}

export default MobileHeader;
