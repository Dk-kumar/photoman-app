/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { connect } from "react-redux";
import Catagory from "./Catagory.component";
import CollectionsDispatcher from "../../Store/Collections/Collections.dispatcher";

export const mapStateToProps = (state) => ({
  weddingCollections: state.weddingReducer,
  babysShootCollections: state.babysShootReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getWeddingCollectionsApi: () =>
    CollectionsDispatcher.getWeddingCollectionsApi(dispatch),
  getBabysCollectionsApi: () =>
    CollectionsDispatcher.getBabysCollectionsApi(dispatch),
});

class CatagoryContainer extends Component {
  state = {
    collection: null,
  };

  componentDidMount() {
    this.getCollections();
  }

  async getCollections() {
    const {
      match: { url },
      getWeddingCollectionsApi,
      getBabysCollectionsApi,
    } = this.props;
    let pathName = url.replace(/\\|\//g, "");

    switch (pathName) {
      case "wedding":
        await getWeddingCollectionsApi();
        this.setState(
          {
            collection: {data: this.props.weddingCollections.weddings},
          }
        );
        break;
      case "babyshoot":
        await getBabysCollectionsApi();
        this.setState({
          collection: {data:this.props.babysShootCollections.babysShoot},
        });
        break;
      default:
        return console.log("no match");
    }
  }

  containerFunctions = {
    handleNavigation: this.handleNavigation.bind(this),
  };

  handleNavigation(path, type) {
    path = path.replace(/ /g, "").toLowerCase();
    return this.props.history.push({
      pathname: `/gallery/${path}`,
      state: { data: type },
    });
  }

  render() {
    let {
      location: { state },
    } = this.props;
    state = state ? state : (state = this.state.collection);
    return (
      <>
        {state && (
          <Catagory {...state} {...this.containerFunctions} {...this.props} />
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatagoryContainer);
