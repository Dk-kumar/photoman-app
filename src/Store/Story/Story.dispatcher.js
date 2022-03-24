import { getStoryList, postStoryList } from "./Story.action";
import { endPoints } from "../../Util/Api";

class StoryDispatcher {
  async getStoryApi(dispatch) {
    let responce = await fetch(endPoints.storyEndPoint);
    let json = await responce.json();
    await dispatch(getStoryList(json));
  }

  async postStoryApi(dispatch, data) {
    await fetch(endPoints.sliderEndPoint, {
      method: "POST",
      body: JSON.stringify({ storys: data }),
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
    });
    await ((responce) => responce.json());
    await ((data) => dispatch(postStoryList(data)));
  }
}

export default new StoryDispatcher();
