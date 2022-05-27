import { POST_SIGNIN_DETAILS } from "./SignIn.const";

export const postSignIn = (data) => ({
  type: POST_SIGNIN_DETAILS,
  payload: data,
});
