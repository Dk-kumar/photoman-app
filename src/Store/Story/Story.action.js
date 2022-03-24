import { GET_STORYLIST, POST_STORYLIST } from "./Story.const";

export const getStoryList = (data) => ({
  type: GET_STORYLIST,
  payload: data,
});

export const postStoryList = (data) => ({
  type: POST_STORYLIST,
  payload: data,
});
