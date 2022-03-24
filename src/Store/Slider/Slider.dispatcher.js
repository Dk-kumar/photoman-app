import { getSliderList, postSliderList } from "./Slider.action";
import { endPoints } from "../../Util/Api";
import { getRequest, postRequest } from "../../Util/ApiRequest";


class SliderListDispatcher {
  getSliderApi(dispatch) {
    return getRequest(endPoints.sliderEndPoint, dispatch, getSliderList);
  } 

  async postSliderApi(dispatch, data) {
    await fetch(endPoints.sliderEndPoint, {
      method: "POST",
      body: JSON.stringify({ sider_image: data }),
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
    });
    await ((responce) => responce.json());
    await ((data) => dispatch(postSliderList(data)));
  }
}

export default new SliderListDispatcher();
