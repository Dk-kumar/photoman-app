export const setBrowserData = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getBrowserData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeBrowserData = (key) => {
  return localStorage.removeItem(key);
};
