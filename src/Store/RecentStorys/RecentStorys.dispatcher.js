import { getRecentStorys, postRecentStorys } from "./RecentStorys.action";
import { endPoints } from "../../Util/Api";

class RecentStorysDispatcher {
  async getRecentStorysApi(dispatch) {
    let responce = await fetch(endPoints.recentStorys);
    let json = await responce.json();
    await dispatch(getRecentStorys(json));
  }
}

export default new RecentStorysDispatcher();
