import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./Home/Home.container";
import CatagoryContainer from "./Catagory/Catagory.container";
import GalleryContainer from "./Gallery/Gallery.container";
import SignInContainer from "./SignIn/SignIn.container";
import "../Styles/media.scss";
class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/gallery/:name" component={GalleryContainer} />
          <Route exact path="/admin" component={SignInContainer} />
          <Route exact path="/:catagory" component={CatagoryContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
