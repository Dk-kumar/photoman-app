import {
  getBannerCollections,
  getWeddingCollections,
  getBabyShowerCollections,
  getRecentStoryCollections,
  getBabyShootCollections,
  getProductShootCollections,
} from "./Admin.action";
import { endPoints } from "../../Util/Api";
import { getRequest } from "../../Util/ApiRequest";

class AdminDispatcher {
  getBannerApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}banner`,
      dispatch,
      getBannerCollections
    );
  }

  getWeddingApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}wedding`,
      dispatch,
      getWeddingCollections
    );
  }

  getBabyShowerApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}babyShower`,
      dispatch,
      getBabyShowerCollections
    );
  }

  getRecentStorysApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}recentStories`,
      dispatch,
      getRecentStoryCollections
    );
  }

  getBabyShootApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}babyShoot`,
      dispatch,
      getBabyShootCollections
    );
  }

  getProductShootApi(dispatch) {
    return getRequest(
      `${endPoints.adminAPI}productShoot`,
      dispatch,
      getProductShootCollections
    );
  }
}

export default new AdminDispatcher();
