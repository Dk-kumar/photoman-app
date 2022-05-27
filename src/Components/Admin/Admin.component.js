import React, { Component } from "react";

class Admin extends Component {
  renderLogOut() {
    const { handleLogOut } = this.props;
    return (
      <div>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    );
  }

  handleMenus() {
    const { collections, handleMenuList } = this.props;
    return (
      <>
        <select className="menu" onChange={(event) => handleMenuList(event)}>
          <option>Select menus</option>
          {collections.map((collection) => {
            return <option value={collection.title}>{collection.title}</option>;
          })}
        </select>
        {this.menuList()}
      </>
    );
  }

  menuList() {
    let { selectedValue = [], dashboardHandler } = this.props;
    if (selectedValue.length === 0) return;
    return (
      <select
        className="menu-list"
        onChange={(event) => dashboardHandler(event)}
      >
        <option>Select menus</option>
        {Object.values(selectedValue)[0].map((data) => {
          return <option>{data.title}</option>;
        })}
      </select>
    );
  }

  renderImages() {
    const {
      banner: { banner = [] },
    } = this.props;
    return (
      <>
        {banner.map((data) => {
          return <img src={data.content} alt={data.name} />;
        })}
      </>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className="admin-container">
        {/* {this.renderLogOut()} */}
        {this.handleMenus()}
        {this.renderImages()}
      </div>
    );
  }
}

export default Admin;
