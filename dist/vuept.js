'use strict';

var types = {
  num: Number,
  str: String,
  bool: Boolean,
  func: Function,
  obj: Object,
  arr: Array,
  any: null
};

var props = {
  validator: function validator(func) {
    return { validator: func };
  }
};
var proto = {
  get required() {
    return {
      type: this._type,
      required: true
    };
  },
  default: function _default(_default2) {
    return {
      type: this._type,
      default: _default2
    };
  }
};

Object.keys(types).forEach(function (t) {
  props[t] = Object.create(proto, {
    _type: {
      value: types[t]
    }
  });
});

module.exports = props;
