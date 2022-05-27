import React, { Component } from "react";
import { connect } from "react-redux";
import SliderListDispatcher from "../../Store/Slider/Slider.dispatcher";
import CollectionsDispatcher from "../../Store/Collections/Collections.dispatcher";
import BannerSlider from "./BannerSlider.component";
import { resizeBase64URL } from "../../Util/ResizeBase64";

export const mapStateToProps = (state) => ({
  slider: state.sliderReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getSliderApi: () => SliderListDispatcher.getSliderApi(dispatch),
  postSliderApi: (data) => SliderListDispatcher.postSliderApi(dispatch, data),
  babyPostApi: (data) =>
    CollectionsDispatcher.postBabysCollectionsApi(dispatch, data),
});

class BannerSliderContainer extends Component {
  state = {
    openPopup: false,
    collectionDetails: {
      name: "",
      location: "",
    },
    selectedImage: null,
  };

  componentDidMount() {
    const { getSliderApi } = this.props;
    getSliderApi();
  }

  containerFunctions = {
    imageUpload: this.imageUpload.bind(this),
    onHandelPopup: this.onHandelPopup.bind(this),
    handelingInput: this.handelingInput.bind(this),
    handelingForms: this.handelingForms.bind(this),
  };

  onHandelPopup() {
    this.setState({
      openPopup: !this.state.openPopup,
    });
  }

  handelingInput({ currentTarget: input }) {
    let collectionDetails = { ...this.state.collectionDetails };
    collectionDetails[input.name] = input.value;
    this.setState({ collectionDetails },() => console.log(this.state));
  }

  handelingForms(e) {
    const { getSliderApi, postSliderApi, babyPostApi } = this.props;
    const { collectionDetails, selectedImage } = this.state;
    
    e.preventDefault();
    babyPostApi({ collectionDetails, selectedImage });
  }

  async imageUpload(e) {
    let obj = {};
    const filePromises = Object.values(e.target.files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            obj["image_url"] = reader.result;
            resolve(obj);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    });

    const fileInfos = await Promise.all(filePromises);
    this.setState({
      selectedImage: fileInfos,
    });
  }

  render() {
    const {
      slider: { sliderImage },
    } = this.props;
    return (
      <>
        {sliderImage && (
          <BannerSlider
            {...this.props}
            {...this.state}
            {...this.containerFunctions}
          />
        )}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerSliderContainer);
