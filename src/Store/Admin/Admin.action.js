import {
  GET_BABYSHOOT,
  GET_BABYSHOWER,
  GET_BANNER,
  GET_PRODUCTSHOOT,
  GET_RECENTSTORIES,
  GET_WEDDING,
} from "./Admin.const";

export const getBannerCollections = (data) => ({
  type: GET_BANNER,
  payload: data,
});

export const getBabyShowerCollections = (data) => ({
  type: GET_BABYSHOWER,
  payload: data,
});

export const getWeddingCollections = (data) => ({
  type: GET_WEDDING,
  payload: data,
});

export const getProductShootCollections = (data) => ({
  type: GET_PRODUCTSHOOT,
  payload: data,
});

export const getBabyShootCollections = (data) => ({
  type: GET_BABYSHOOT,
  payload: data,
});

export const getRecentStoryCollections = (data) => ({
  type: GET_RECENTSTORIES,
  payload: data,
});
