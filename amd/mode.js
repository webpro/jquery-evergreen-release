define(['./util'], function($__0) {
  "use strict";
  var __moduleName = "mode";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var global = ($__0).global;
  var isNative = false;
  function native() {
    var goNative = arguments[0] !== (void 0) ? arguments[0] : true;
    var wasNative = isNative;
    isNative = goNative;
    if (global.$) {
      global.$.isNative = isNative;
    }
    if (!wasNative && isNative) {
      augmentNativePrototypes(this.fn, this.fnList);
    }
    if (wasNative && !isNative) {
      unaugmentNativePrototypes(this.fn, this.fnList);
    }
    return isNative;
  }
  var NodeProto = typeof Node !== 'undefined' && Node.prototype,
      NodeListProto = typeof NodeList !== 'undefined' && NodeList.prototype;
  function augment(obj, key, value) {
    if (!obj.hasOwnProperty(key)) {
      Object.defineProperty(obj, key, {
        value: value,
        configurable: true,
        enumerable: false
      });
    }
  }
  var unaugment = (function(obj, key) {
    delete obj[key];
  });
  function augmentNativePrototypes(methodsNode, methodsNodeList) {
    var key;
    for (key in methodsNode) {
      augment(NodeProto, key, methodsNode[key]);
      augment(NodeListProto, key, methodsNode[key]);
    }
    for (key in methodsNodeList) {
      augment(NodeListProto, key, methodsNodeList[key]);
    }
  }
  function unaugmentNativePrototypes(methodsNode, methodsNodeList) {
    var key;
    for (key in methodsNode) {
      unaugment(NodeProto, key);
      unaugment(NodeListProto, key);
    }
    for (key in methodsNodeList) {
      unaugment(NodeListProto, key);
    }
  }
  ;
  return {
    get isNative() {
      return isNative;
    },
    get native() {
      return native;
    },
    __esModule: true
  };
});
