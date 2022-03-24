import React, { Component } from "react";
import "./RecentStorys.style.scss";

class RecentStorys extends Component {
  renderHeading() {
    return (
      <>
        <div className="heading">
          <p>RECENT STORIES</p>
        </div>
        {/* {this.renderRecentStorys()} */}
        <div className="wedding">
          {this.recentWedding()}
          {this.recentBabyShoot()}
        </div>
      </>
    );
  }

  recentWedding() {
    const {
      weddingCollections: {
        weddings: [{ catagory }],
      },
      handleNavigation,
    } = this.props;
    return (
      <div className="recent-storys">
        <div className="content">
          <img
            className="story-image"
            src={catagory.at(-1).images[0].image_url}
            alt="wedding"
            onClick={() =>
              handleNavigation(catagory.at(-1).title, catagory.at(-1))
            }
          />
          <div className="story-text">
          <p className="name">{catagory.at(-1).title}</p>
          <p className="title">{catagory.at(-1).location}</p>
          </div>
        </div>
      </div>
    );
  }

  recentBabyShoot() {
    const {
      babysShootCollections: {
        babysShoot: [{ catagory }],
      },
      handleNavigation,
    } = this.props;
    return (
      <div className="recent-storys">
        <div className="content">
          <img
            className="story-image"
            src={catagory.at(-1).images[0].image_url}
            alt="wedding"
            onClick={() =>
              handleNavigation(catagory.at(-1).title, catagory.at(-1))
            }
          />
          <div className="story-text">
            <p className="name">{catagory.at(-1).title}</p>
            <p className="title">{catagory.at(-1).location}</p>
          </div>
        </div>
      </div>
    );
  }

  renderRecentStorys() {
    const {
      recentStorys: { recentStorys },
    } = this.props;
    return (
      <div className="recent-storys">
        {recentStorys.map((res) => (
          <div key={res.id} className="content">
            <img
              className="story-image"
              src={res.images[res.id - 1].image_url}
              alt={res.title}
            />
            <p className="name">{res.name}</p>
            <p className="title">{res.title}</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return <div className="recentStorys-container">{this.renderHeading()}</div>;
  }
}

export default RecentStorys;
