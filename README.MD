# vuept

Another style to declare the props type for vue components.

Supported these [types](./types.js)

```javascript
import { num, str } from 'vuept'
//...
{
  props: {
    propA: Function,
    propB: num.default(() => 'bar'), // {type: Number, default: () => 'bar'}
    propC: str.required // {type: String, required: true}
  }
  //...
}
```

