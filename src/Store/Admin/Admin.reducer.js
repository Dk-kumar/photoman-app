import {
  GET_BABYSHOOT,
  GET_BABYSHOWER,
  GET_BANNER,
  GET_PRODUCTSHOOT,
  GET_RECENTSTORIES,
  GET_WEDDING,
} from "./Admin.const";

const initialState = {
  banner: [],
};

export const bannerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BANNER:
      return {
        ...state,
        banner: payload,
      };
    case GET_WEDDING:
      return {
        ...state,
        banner: payload,
      };
    case GET_BABYSHOWER:
      return {
        ...state,
        banner: payload,
      };
    case GET_RECENTSTORIES:
      return {
        ...state,
        banner: payload,
      };
    case GET_BABYSHOOT:
      return {
        ...state,
        banner: payload,
      };
    case GET_PRODUCTSHOOT:
      return {
        ...state,
        banner: payload,
      };
    default:
      return state;
  }
};
