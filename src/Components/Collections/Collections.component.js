import React, { Component } from "react";
import RecentStorysContainer from "../../Router/RecentStorys/RecentStorys.container";
import "./Collections.style.scss";

class Collections extends Component {
  renderHeading() {
    return (
      <div className="heading">
        <div className="line"></div>
        <div className="render-heading">
          <p className="browse">BROWSE</p>
          <p className="collection">BY COLLECTION</p>
        </div>
        <div className="line"></div>
      </div>
    );
  }

  renderWeddingCollections() {
    const {
      weddingCollections: { weddings },
      handleNavigation,
    } = this.props;
    return (
      <div>
        <div className="collections">
          <img
            className="base-image"
            src={weddings[0].catagory[0].images[0].image_url}
            alt="wedding"
            onClick={() => handleNavigation("wedding", weddings)}
          />
        </div>
        <div>
          <p className="title">{weddings[0].title}</p>
        </div>
      </div>
    );
  }

  renderBabysShootCollections() {
    const {
      babysShootCollections: { babysShoot },
      handleNavigation,
    } = this.props;
    return (
      <div>
        <div className="collections">
          <img
            className="base-image"
            src={babysShoot[0].catagory[0].images[0].image_url}
            alt="babyShoot"
            onClick={() => handleNavigation("babyshoot", babysShoot)}
          />
        </div>
        <div>
          <p className="title">{babysShoot[0].title}</p>
        </div>
      </div>
    );
  }

  renderCollections() {
    return (
      <div className="render-collections">
        {this.renderWeddingCollections()}
        {this.renderBabysShootCollections()}
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="collections-container">
          {this.renderHeading()}
          {this.renderCollections()}
        </div>
        <RecentStorysContainer {...this.props} />
      </>
    );
  }
}

export default Collections;
