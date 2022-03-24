import React, { Component } from "react";
import Home from "./Home.component";

class HomeContainer extends Component {
  state = {};
  render() {
    return <Home {...this.props} />;
  }

  

}

export default HomeContainer;
