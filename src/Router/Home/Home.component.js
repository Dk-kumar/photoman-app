import React, { Component } from "react";
import BannerSliderContainer from "../../Components/BannerSlider/BannerSlider.container";
import StoryContainer from "../../Components/Story/Story.container";
import CollectionsContainer from "../../Components/Collections/Collections.container";
import RecentStorysContainer from "../RecentStorys/RecentStorys.container";
import Footer from "../../Components/Footer/Footer.component";
import FooterContainer from "../../Components/Footer/Footer.container";
import "./Home.style.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <BannerSliderContainer {...this.props} />
        {/* <StoryContainer /> */}
        <CollectionsContainer {...this.props}/>
        {/* <RecentStorysContainer /> */}
        <FooterContainer {...this.props}/>
      </>
    );
  }
}

export default Home;
