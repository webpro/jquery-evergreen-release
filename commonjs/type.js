"use strict";
var __moduleName = "type";
function isFunction(obj) {
  return (typeof obj === 'function');
}
var isArray = Array.isArray;
;
module.exports = {
  get isFunction() {
    return isFunction;
  },
  get isArray() {
    return isArray;
  },
  __esModule: true
};