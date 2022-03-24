export const getRequest = async (endPoint, dispatch, getCollections) => {
  let responce = await fetch(endPoint);
  let json = await responce.json();
  await dispatch(getCollections(json));
};

export const postRequest = async (endPoint, dispatch, data, postCollections) => {
  const { collectionDetails, selectedImage } = data
  await fetch(endPoint, {
    method: "POST",
    body: JSON.stringify({
      title: "Baby Shoot",
      catagory: [
        {
          title: collectionDetails.name,
          location: collectionDetails.location,
          images: selectedImage,
        },
      ],
    }),
    headers: {
      "content-Type": "application/json; charset=UTF-8",
    },
  });
  await ((responce) => responce.json());
  await ((data) => dispatch(postCollections(data)));
};
