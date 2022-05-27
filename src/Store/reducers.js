import { combineReducers } from "redux";
import sliderReducer from "./Slider/Slider.reducer";
import storyReducer from "./Story/Story.reducer";
import recentStorysReducer from "./RecentStorys/RecentStorys.reducer";
import { weddingReducer } from "./Collections/Collections.reducer";
import { babysShootReducer } from "./Collections/Collections.reducer";
import { babyShowerReducer } from "./Collections/Collections.reducer";
import { bannerReducer } from "./Admin/Admin.reducer";
import { supportReducer } from "./Support/Support.reducer";

const Reducers = combineReducers({
  sliderReducer: sliderReducer,
  storyReducer: storyReducer,
  weddingReducer: weddingReducer,
  babysShootReducer: babysShootReducer,
  recentStorysReducer: recentStorysReducer,
  babyShowerReducer: babyShowerReducer,
  bannerReducer: bannerReducer,
  supportReducer: supportReducer,
});

export default Reducers;
