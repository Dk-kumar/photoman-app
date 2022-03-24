import React, { Component } from "react";
import { connect } from "react-redux";
import RecentStorys from "./RecentStorys.component";
import RecentStorysDispatcher from "../../Store/RecentStorys/RecentStorys.dispatcher";

export const mapStateToProps = (state) => ({
  recentStorys: state.recentStorysReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getRecentStorysApi: () => RecentStorysDispatcher.getRecentStorysApi(dispatch),
});

class RecentStorysContainer extends Component {
  state = {};

  componentDidMount() {
    const { getRecentStorysApi } = this.props;
    getRecentStorysApi();
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
    // const {
    //   recentStorys: { isLoading },
    // } = this.props;
    const {
      weddingCollections: { weddings },
      babysShootCollections: { babysShoot },
    } = this.props;
    return <>{weddings && babysShoot && <RecentStorys {...this.props} {...this.containerFunctions} />}</>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentStorysContainer);
