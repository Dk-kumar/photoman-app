import React, { Component } from "react";
import { connect } from "react-redux";
import Collections from "./Collections.component";
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
  postBabysCollectionsApi: () => 
    CollectionsDispatcher.postBabysCollectionsApi(dispatch),
});

class CollectionsContainer extends Component {
  state = {};

  componentDidMount() {
    const { getWeddingCollectionsApi, getBabysCollectionsApi } = this.props;
    getWeddingCollectionsApi();
    getBabysCollectionsApi();
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
    } = this.props;
    return (
      <>
        {babysShoot && weddings &&(
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
