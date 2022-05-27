import React, { Component } from "react";
import Fancybox from "../../Components/FancyBox/FancyBox.component";
import MobileHeaderContainer from "../../Components/MobileHeader/MobileHeader.container";
import SupportContainer from "../../Components/Support/Support.container";
import "./Gallery.style.scss";

class Gallery extends Component {
  state = {};
  renderImages() {
    let {
      data: { title, images },
    } = this.props;
    return (
      <>
        <MobileHeaderContainer {...this.props} />
        <div className="gallery">
          {images.map((item) => (
            <div className="details" key={item.id}>
              <Fancybox>
                <a data-fancybox="gallery" href={item.image_url}>
                  <img
                    className="base-image"
                    src={item.image_url}
                    alt="wedding"
                  />
                </a>
              </Fancybox>

              {/* <p className="name">{title}</p> */}
            </div>
          ))}
        </div>
      </>
    );
  }
  render() {
    return (
      <>
        <SupportContainer />
        <div className="gallery-container">{this.renderImages()}</div>
      </>
    );
  }
}

export default Gallery;
