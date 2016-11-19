# Vue-props

Another style to declare the props type for vue components.

support these [types](./types.js)

```javascript
import {func, num, str} from 'vue-props'
//...
{
  props: {
    propA: func, // {type: Function}
    propB: num.default(() => 'bar'), // {type: Number, default: () => 'bar'}
    propC: str.required // {type: String, required: true}
  }
  //...
}
```

