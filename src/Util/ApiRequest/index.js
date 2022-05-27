export const getRequest = async (endPoint, dispatch, getCollections) => {
  let responce = await fetch(endPoint);
  let json = await responce.json();
  await dispatch(getCollections(json));
};

export const postRequest = async (
  endPoint,
  dispatch,
  body,
  postCollections
) => {
  debugger
  await fetch(endPoint, {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
    headers: {
      "content-Type": "application/json; charset=UTF-8",
    },
  });
  await ((responce) => responce.json());
  await ((data) => dispatch(postCollections(data)));
};
