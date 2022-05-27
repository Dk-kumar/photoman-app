import { POST_SUPPORT_DETAILS } from "./Support.const";

const initialState = {
  supportDetails: "",
};

export const supportReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SUPPORT_DETAILS:
      return {
        ...state,
        supportDetails: payload,
      };
    default:
      return state;
  }
};
