import {
  getWeddingCollections,
  postWeddingCollections,
  getBabysCollections,
  postBabysCollections,
} from "./Collections.action";
import { endPoints } from "../../Util/Api";
import { getRequest, postRequest } from "../../Util/ApiRequest";

class CollecionsDispatcher {
  getWeddingCollectionsApi(dispatch) {
    return getRequest(endPoints.weddingsEndPoint, dispatch, getWeddingCollections);
  }

  postWeddingCollectionApi(dispatch, data) {
    return postRequest(
      endPoints.weddingsEndPoint,
      dispatch,
      data,
      postWeddingCollections
    );
  }

  getBabysCollectionsApi(dispatch) {
    return getRequest(endPoints.babysEndPoint, dispatch, getBabysCollections);
  }

  postBabysCollectionsApi(dispatch, data) {
    debugger
    return postRequest(
      endPoints.babysEndPoint,
      dispatch,
      data,
      postBabysCollections
    );
  }
}

export default new CollecionsDispatcher();
