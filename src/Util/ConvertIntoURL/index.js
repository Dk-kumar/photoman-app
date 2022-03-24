export const convertIntoURL = (pathName) => {
  let URL = pathName.replace(/\s/g, "").toLowerCase();
  return `/${URL}`;
};
