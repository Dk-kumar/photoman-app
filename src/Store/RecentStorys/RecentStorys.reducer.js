import { GET_RECENT_STORYS, POST_RECENT_STORYS } from "./RecentStorys.const";

const initialState = {
  recentStorys: [],
  isLoading: false,
};

const recentStorysReducer = (
  state = initialState.recentStorys,
  { type, payload }
) => {
  switch (type) {
    case GET_RECENT_STORYS:
      return {
        ...state,
        recentStorys: payload,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default recentStorysReducer;
