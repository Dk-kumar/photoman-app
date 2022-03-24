import React, { Component } from "react";
import MobileHeaderContainer from "../../Components/MobileHeader/MobileHeader.container";
import "./Catagory.style.scss";

class Catagory extends Component {
  state = {};

  renderBaseCollections() {
    const { data, handleNavigation } = this.props;
    return (
      <div className="base-collections">
        <div
          className="details"
          key={data[0].catagory[0].id}
          onClick={() =>
            handleNavigation(data[0].catagory[0].title, data[0].catagory[0])
          }
        >
          <img
            className="base-image"
            src={data[0].catagory[0].images[0].image_url}
            alt="wedding"
          />
          <p className="name">{data[0].catagory[0].title}</p>
        </div>
        {this.renderText()}
      </div>
    );
  }

  renderImages(item, handleNavigation) {
    return (
      <>
        {item.map((item) => (
          <div
            className="details"
            key={item.id}
            onClick={() => handleNavigation(item.title, item)}
          >
            <img
              className="base-image"
              src={item.images[0].image_url}
              alt="wedding"
            />
            <p className="name">{item.title}</p>
          </div>
        ))}
      </>
    );
  }

  renderCollections() {
    let { data, handleNavigation } = this.props;

    data = data.slice(1, data.length + 1);
    return (
      <div className="collections">
        {data.map((item) => this.renderImages(item.catagory, handleNavigation))}
      </div>
    );
  }

  renderText() {
    return (
      <div className="text-container">
        <div className="title">
          <p>Weddings</p>
        </div>
        <p className="text-content">
          Art is expression of feelings, moments and our own perception of life!
          Your art, your rules, don’t let anyone over make you doubt that!
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <MobileHeaderContainer {...this.props} />
        <div className="catagory-container">
          {this.renderBaseCollections()}
          {this.renderCollections()}
        </div>
      </>
    );
  }
}

export default Catagory;
