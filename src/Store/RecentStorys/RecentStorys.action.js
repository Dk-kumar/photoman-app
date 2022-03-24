import { GET_RECENT_STORYS, POST_RECENT_STORYS } from "./RecentStorys.const";

export const getRecentStorys = (data) => ({
  type: GET_RECENT_STORYS,
  payload: data,
});

export const postRecentStorys = (data) => ({
  type: POST_RECENT_STORYS,
  payload: data,
});
