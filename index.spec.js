const props = require('./index')
const types = require('./types')

describe('vue props', function () {
  const typeKeys = Object.keys(types)
  it('support these types', () => {
    expect(types).toEqual({
      num: Number,
      str: String,
      bool: Boolean,
      func: Function,
      obj: Object,
      arr: Array,
      any: null
    })
  })

  it('unsupport optional type without default', () => {
    typeKeys.forEach(t =>
      expect(props[t].type).toBeUndefined()
    )
  })

  it('make the type required', () => {
    typeKeys.forEach(t =>
      expect(props[t].required).toEqual({ type: types[t], required: true })
    )
  })

  it('make the type has default value', () => {
    const _default = () => 42
    typeKeys.forEach(t =>
      expect(props[t].default(_default)).toEqual({ type: types[t], default: _default })
    )
  })

  it('use custom validator', () => {
    const validator = val => val > 0
    expect(props.validator(validator)).toEqual({ validator })
  })
})