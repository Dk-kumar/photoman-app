import { GET_SLIDERLIST, POST_SLIDERLIST } from "./Slider.const";

const initialState = {
  sliderImage: [],
};

const sliderReducer = (state = initialState.sliderImage, { type, payload }) => {
  switch (type) {
    case GET_SLIDERLIST:
      return {
        ...state,
        sliderImage: payload,
      };
    case POST_SLIDERLIST:
      return {
        ...state,
        sliderImage: { ...state, payload },
      };
    default:
      return state;
  }
};

export default sliderReducer;
