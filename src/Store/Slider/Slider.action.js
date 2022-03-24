import { GET_SLIDERLIST, POST_SLIDERLIST } from "./Slider.const";

export const getSliderList = (data) => ({
  type: GET_SLIDERLIST,
  payload: data,
}); 

export const postSliderList = (data) => ({
  type: POST_SLIDERLIST,
  payload: data,
});
