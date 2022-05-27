import {
  GET_WEDDING_COLLECTIONS,
  POST_WEDDING_COLLECTIONS,
  GET_BABYS_COLLECTIONS,
  POST_BABYS_COLLECTIONS,
  GET_BABY_SHOWER_COLLECTIONS,
} from "./Collecions.const";

const initialState = {
  weddings: [],
  babysShoot: [],
  babyShower: [],
};

export const weddingReducer = (
  state = initialState.weddings,
  { type, payload }
) => {
  switch (type) {
    case GET_WEDDING_COLLECTIONS:
      return {
        ...state,
        weddings: payload,
      };
    case POST_WEDDING_COLLECTIONS:
      return {
        ...state,
        babysShoot: { ...state, payload },
      };
    default:
      return state;
  }
};

export const babysShootReducer = (
  state = initialState.babysShoot,
  { type, payload }
) => {
  switch (type) {
    case GET_BABYS_COLLECTIONS:
      return {
        ...state,
        babysShoot: payload,
      };
    case POST_BABYS_COLLECTIONS:
      return {
        ...state,
        babysShoot: { ...state, payload },
      };
    default:
      return state;
  }
};

export const babyShowerReducer = (
  state = initialState.babyShower,
  { type, payload }
) => {
  switch (type) {
    case GET_BABY_SHOWER_COLLECTIONS:
      return {
        ...state,
        babyShower: payload,
      };
    default:
      return state;
  }
};
