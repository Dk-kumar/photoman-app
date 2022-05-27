import React, { Component } from "react";
import { connect } from "react-redux";
import Collections from "./Collections.component";
import CollectionsDispatcher from "../../Store/Collections/Collections.dispatcher";

export const mapStateToProps = (state) => ({
  weddingCollections: state.weddingReducer,
  babysShootCollections: state.babysShootReducer,
  babyShowerCollections: state.babyShowerReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getWeddingCollectionsApi: () =>
    CollectionsDispatcher.getWeddingCollectionsApi(dispatch),
  getBabysCollectionsApi: () =>
    CollectionsDispatcher.getBabysCollectionsApi(dispatch),
  postBabysCollectionsApi: () =>
    CollectionsDispatcher.postBabysCollectionsApi(dispatch),
  getBabyShowerCollectionsApi: () =>
    CollectionsDispatcher.getBabyShowerCollectionsApi(dispatch),
});

class CollectionsContainer extends Component {
  state = {};

  componentDidMount() {
    const {
      getWeddingCollectionsApi,
      getBabysCollectionsApi,
      getBabyShowerCollectionsApi,
    } = this.props;

    getWeddingCollectionsApi();
    getBabysCollectionsApi();
    getBabyShowerCollectionsApi();
  }

  containerFunctions = {
    handleNavigation: this.handleNavigation.bind(this),
  };

  handleNavigation(path, type) {
    return this.props.history.push({
      pathname: `/${path}`,
      state: { data: type },
    });
  }

  render() {
    const {
      weddingCollections: { weddings },
      babysShootCollections: { babysShoot },
      babyShowerCollections: { babyShower },
    } = this.props;
    return (
      <>
        {babysShoot && weddings && babyShower && (
          <Collections {...this.props} {...this.containerFunctions} />
        )}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsContainer);
