import { combineReducers } from "redux";
import sliderReducer from "./Slider/Slider.reducer";
import storyReducer from "./Story/Story.reducer";
import recentStorysReducer from "./RecentStorys/RecentStorys.reducer";
import { weddingReducer } from "./Collections/Collections.reducer";
import { babysShootReducer } from "./Collections/Collections.reducer";

const Reducers = combineReducers({
  sliderReducer: sliderReducer,
  storyReducer: storyReducer,
  weddingReducer: weddingReducer,
  babysShootReducer: babysShootReducer,
  recentStorysReducer: recentStorysReducer,
});

export default Reducers;
