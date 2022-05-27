import { endPoints } from "../../Util/Api";
import { postRequest } from "../../Util/ApiRequest";
import { postSupport } from "./Support.action";

class SupportDispatcher {
  postSupportDetails(dispatch, body) {
      debugger
    return postRequest(endPoints.support, dispatch, body, postSupport);
  }
}

export default new SupportDispatcher();
