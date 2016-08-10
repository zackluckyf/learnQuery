var domSelector = function (selectors) {
  'use strict';
  if (selectors) {
    var match = selectors.match(/[\w].+/);
    var x = document.getElementById(match);
    var y = document.getElementsByClassName(match);
    if (match.length === 0) {
      throw error;
    }
    if (selectors[0] === '#') {
      return [x];
    }
    if (selectors[0] === '.') {
      return [y[0]];
    }
  }
  return [];
};
