import { POST_SUPPORT_DETAILS } from "./Support.const";

export const postSupport = (data) => ({
  type: POST_SUPPORT_DETAILS,
  payload: data,
});
