const types = require('./types')

const props = {
  validator(func) {
    return {validator: func}
  }
}
const proto = {
  get required() {
    return {
      type: this._type,
      required: true
    }
  },
  default(_default) {
    return {
      type: this._type,
      default: _default
    }
  }
}

Object.keys(types).forEach(t => {
  props[t] = Object.create(proto, {
    _type: {
      value: types[t]
    }
  })
})

module.exports = props