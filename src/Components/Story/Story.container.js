import React, { Component } from "react";
import { connect } from "react-redux";
import Story from "./Story.component";
import StoryDispatcher from "../../Store/Story/Story.dispatcher";

export const mapStateToProps = (state) => ({
  storys: state.storyReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getStoryApi: () => StoryDispatcher.getStoryApi(dispatch),
});

class StoryContainer extends Component {
  state = {};

  componentDidMount() {
    const { getStoryApi } = this.props;
    getStoryApi();
  }

  render() {
    const {
      storys: { storys },
    } = this.props;
    return <>{storys && <Story {...this.props} />}</>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);
