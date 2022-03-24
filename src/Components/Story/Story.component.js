import React, { Component } from "react";
// import ImageCollectionsContainer from "../ImageCollections/ImageCollections.container";
import "./Story.style.scss";

class Story extends Component {
  state = {};

  renderStoryImg() {
    const {
      storys: { storys },
    } = this.props;
    return (
      <div>
        <img
          className="img-strikeout-one"
          loading="lazy"
          src="https://www.atitanstudio.com/wp-content/uploads/2020/12/Blue-Image-Framing-284x268-1.png"
          alt=""
        />
        {storys.map((storys) => (
          <img
            className={storys.className}
            key={storys.id}
            src={storys.storys}
            alt="sroty"
            loading="lazy"
          />
        ))}
        <img
          className="img-strikeout-two"
          src="https://www.atitanstudio.com/wp-content/uploads/2020/12/Blue-Image-Framing-284x268-1.png"
          loading="lazy"
          alt=""
        />
      </div>
    );
  }

  render() {
    return <div className="story-container">{this.renderStoryImg()}</div>;
  }
}

export default Story;
