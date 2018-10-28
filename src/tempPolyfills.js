// https://github.com/facebookincubator/create-react-app/issues/3199
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};
/* eslint-disable */
window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {},
  };
};

window.localStorage = {
  getItem: jest.fn(() => null),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
window.location = {};
/* eslint-enable */
