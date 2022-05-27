import React, { Component } from "react";
import BannerSliderContainer from "../../Components/BannerSlider/BannerSlider.container";
import StoryContainer from "../../Components/Story/Story.container";
import CollectionsContainer from "../../Components/Collections/Collections.container";
import RecentStorysContainer from "../RecentStorys/RecentStorys.container";
import FooterContainer from "../../Components/Footer/Footer.container";
import SupportContainer from "../../Components/Support/Support.container";
import "./Home.style.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-container">
        <BannerSliderContainer {...this.props} />
        {/* <StoryContainer /> */}
        <SupportContainer />
        <CollectionsContainer {...this.props} />
        {/* <RecentStorysContainer /> */}
        <FooterContainer {...this.props} />
      </div>
    );
  }
}

export default Home;
