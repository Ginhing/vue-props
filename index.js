const types = require('./types')

const props = {
  validator(func) {
    return {validator: func}
  }
}
const proto = {
  get required() {
    return {
      type: this.type,
      required: true
    }
  },
  default(_default) {
    return {
      type: this.type,
      default: _default
    }
  }
}

Object.keys(types).forEach(t => {
  props[t] = Object.create(proto, {
    type: {
      enumerable: true,
      value: types[t]
    }
  })
})

module.exports = props