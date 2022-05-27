import { POST_SIGNIN_DETAILS } from "./SignIn.const";

const initialState = {
  signIn: {},
};

export const signInReducer = (state = initialState, { type, payload }) => {
    debugger
  switch (type) {
    case POST_SIGNIN_DETAILS:
      return {
        ...state,
        signIn: payload,
      };
    default:
      return state;
  }
};
