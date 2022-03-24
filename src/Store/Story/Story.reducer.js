import { GET_STORYLIST, POST_STORYLIST } from "./Story.const";

const initialState = {
  storys: [],
};

const storyReducer = (state = initialState.storys, { type, payload }) => {
  switch (type) {
    case GET_STORYLIST:
      return {
        ...state,
        storys: payload,
      };
      case POST_STORYLIST:
      return {
        ...state,
        storys: { ...state, payload },
      };
    default: {
      return state;
    }
  }
};

export default storyReducer;
