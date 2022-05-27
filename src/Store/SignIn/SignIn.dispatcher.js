import { endPoints } from "../../Util/Api";
import { postRequest } from "../../Util/ApiRequest";
import { postSignIn } from "./SignIn.action";

class SignInDispatcher {
  postSignInDetails(dispatch, body) {
    return postRequest(endPoints.signIn, dispatch, body, postSignIn);
  }
}

export default new SignInDispatcher();
