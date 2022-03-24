import React, { Component } from "react";
import Gallery from "./Gallery.component";

class GalleryContainer extends Component {
  state = {};

  render() {
    const {
      location: { state },
    } = this.props;
    return <>{state && <Gallery {...state} {...this.props} />}</>;
  }
}

export default GalleryContainer;
