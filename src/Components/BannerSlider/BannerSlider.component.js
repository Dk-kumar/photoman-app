import React, { Component } from "react";
import Slider from "react-slick";
import MobileHeaderContainer from "../MobileHeader/MobileHeader.container";
import Popup from "../Popup/Popup.component";
import "./BannerSlider.style.scss";

class BannerSlider extends Component {
  uploadImage() {
    const { imageUpload } = this.props;

    return (
      <input
        onChange={imageUpload}
        type="file"
        className="image-upload"
        id="files"
        name="files"
        multiple
      />
    );
  }

  renderSlider() {
    const {
      slider: { sliderImage },
    } = this.props;
    return (
      <div id="react-slick">
        <Slider
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          fade={true}
          infinite={true}
        >
          {sliderImage.map((image) => (
            <img
              key={image.id}
              className="banner-slider"
              alt="img"
              src={image.sider_image}
              loading="lazy"
            />
          ))}
        </Slider>
      </div>
    );
  }

  render() {
    const {
      onHandelPopup,
      openPopup,
      handelingForms,
      handelingInput,
      collectionDetails: { name, location },
    } = this.props;
    return (
      <>
        {this.renderSlider()}
        {/* <div className="image-input">
          <button onClick={onHandelPopup}>Popup</button>
          <Popup onOpen={openPopup} onClose={onHandelPopup}>
            <form onSubmit={handelingForms}>
              <div className="title">
                <label>Name:</label>
                <input
                  type="text"
                  className="title-content"
                  placeholder="Enter name"
                  value={name}
                  name="name"
                  onChange={handelingInput}
                />
              </div>
              <div className="location">
                <label>Location:</label>
                <input
                  type="text"
                  className="location-content"
                  placeholder="Enter location"
                  name="location"
                  value={location}
                  onChange={handelingInput}
                />
              </div>
              {this.uploadImage()}
              <div>
                <button>Submit</button>
              </div>
            </form>
          </Popup>
        </div> */}
        <MobileHeaderContainer {...this.props} />
      </>
    );
  }
}

export default BannerSlider;
