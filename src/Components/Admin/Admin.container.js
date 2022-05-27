import React, { Component } from "react";
import { connect } from "react-redux";
import Admin from "./Admin.component";
import { removeBrowserData } from "../../Util/BrowserDB";
import { SIGNIN } from "../../Router/SignIn/SignIn.container";
import AdminDispatcher from "../../Store/Admin/Admin.dispatcher";

export const mapStateToProps = (state) => ({
  banner: state.bannerReducer,
});

export const mapDispatchToProps = (dispath) => ({
  getBanner: () => AdminDispatcher.getBannerApi(dispath),
  getWedding: () => AdminDispatcher.getWeddingApi(dispath),
  getBabyShower: () => AdminDispatcher.getBabyShowerApi(dispath),
  getRecentStorys: () => AdminDispatcher.getRecentStorysApi(dispath),
  getProductShoot: () => AdminDispatcher.getProductShootApi(dispath),
  getBabyShoot: () => AdminDispatcher.getBabyShootApi(dispath),
});

const WEDDING = "WEDDING";
const BANNER = "BANNER";
const BABYSHOWER = "BABYSHOWER";
const RECENTSTORYS = "RECENTSTORYS";
const PRODUCTSHOOT = "PRODUCTSHOOT";
const BABYSHOOT = "BABYSHOOT";

class AdminContainer extends Component {
  state = {
    selectedValue: [],
    selectedMenu: "",
    dashboardSelectedValue: "",
    collections: [
      { id: 1, title: "dashboard" },
      { id: 2, title: "wedding" },
      { id: 3, title: "babyShoot" },
      { id: 4, title: "babyShower" },
      { id: 5, title: "productShoot" },
    ],
    category: [
      {
        dashboard: [
          { id: 1, title: "banner" },
          { id: 2, title: "babyShoot" },
          { id: 3, title: "babyShower" },
          { id: 4, title: "productShoot" },
          { id: 5, title: "recentStories" },
          { id: 6, title: "wedding" },
        ],
      },
      { wedding: [{ id: 1 }] },
    ],
  };

  renderDashboardCollection = {
    [BANNER]: {
      render: () => this.props.getBanner(),
    },
    [WEDDING]: {
      render: () => this.props.getWedding(),
    },
    [BABYSHOWER]: {
      render: () => this.props.getBabyShower(),
    },
    [RECENTSTORYS]: {
      render: () => this.props.getRecentStorys(),
    },
    [BABYSHOOT]: {
      render: () => this.props.getBabyShoot(),
    },
    [PRODUCTSHOOT]: {
      render: () => this.props.getProductShoot(),
    },
  };

  containerFunction = {
    handleLogOut: this.handleLogOut.bind(this),
    handleMenuList: this.handleMenuList.bind(this),
    dashboardHandler: this.dashboardHandler.bind(this),
  };

  getCollections() {
    const { dashboardSelectedValue } = this.state;
    if (dashboardSelectedValue) {
      const { render } =
        this.renderDashboardCollection[
          dashboardSelectedValue.toLocaleUpperCase()
        ];
      render();
    }
  }

  handleLogOut() {
    removeBrowserData(SIGNIN);
  }

  handleMenuList(event) {
    let { category } = this.state;
    const { value } = event.target;

    let selectedValue = category.filter((data) => {
      return Object.keys(data)[0] === value;
    });
    this.setState({
      selectedValue: selectedValue[0],
      selectedMenu: value,
    });
  }

  dashboardHandler(event) {
    const { value } = event.target;
    this.setState({
      dashboardSelectedValue: value,
    });
  }

  render() {
    this.getCollections();
    return (
      <>
        {<Admin {...this.containerFunction} {...this.state} {...this.props} />}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
