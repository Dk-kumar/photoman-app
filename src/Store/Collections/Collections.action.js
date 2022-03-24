import {
  GET_WEDDING_COLLECTIONS,
  POST_WEDDING_COLLECTIONS,
  GET_BABYS_COLLECTIONS,
  POST_BABYS_COLLECTIONS
} from "./Collecions.const";

export const getWeddingCollections = (data) => ({
  type: GET_WEDDING_COLLECTIONS,
  payload: data,
});

export const postWeddingCollections = (data) => ({
  type: POST_WEDDING_COLLECTIONS,
  payload: data,
});

export const getBabysCollections = (data) => ({
  type: GET_BABYS_COLLECTIONS,
  payload: data,
});

export const postBabysCollections = (data) => ({
  type: POST_BABYS_COLLECTIONS,
  payload: data,
});
