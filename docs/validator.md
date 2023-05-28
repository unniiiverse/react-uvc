# UVC-Validator
Form validation component.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { FormValidator } from 'react-uvc';

const Component: React.FC = () => {
  const instance = new FormValidator({
    throw: 'general' | 'underEach',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])
}
```

Create layout.
```tsx
<>
  <form action="/" id="form-id" onSubmit={e => instance.validate(e)}>
    <div className="uvc-fv-fvErrors"></div>

    <div>
      <input type="text" name="username" placeholder="username" data-uvc-fv-rule="RULES" />
    </div>

    <div>
      <input type="password" name="password" placeholder="password" data-uvc-fv-rule="RULES" />
    </div>
    <button type="submit">Submit</button>
  </form>
</>
```

## Examples
```tsx
<>
  <form action="/" id="form-id" onSubmit={e => instance.validate(e)}>
    <div className="uvc-fv-fvErrors"></div>

    // Use input in div if you want to display error message after input.
    <div>
      <input type="text" name="username" placeholder="username" data-uvc-fv-rule="min=4;max=12;notEmpty;" />
    </div>
    
    <div>
      <input type="password" name="password" placeholder="password" data-uvc-fv-rule="min=4;max=12;" />
    </div>
    <button type="submit">Submit</button>
  </form>
</>
```

## API
```html
data-uvc-fv-rule - validation rules
```

```scss
.uvc-fv-fvErrors // Parent for errors while throw: general
.uvc-fv-fvError-errorField // Input with error value.
.uvc-fv-fvError-errorTest // Error message in parent div.
.uvc-fv-fvError-errorNode // Error message after input.
```

```ts
const instance = new FormValidator({
  throw: 'general' | 'underEach',
  formId: string
})

instance.init() // Uses in useEffect(() => {}, []). Initialize component.
instance.validate(e: FormEvent) // onSubmit function

const fvRules = {
  min: number, // Minimal length of input value.
  max: number, // Maximum length of input value.
  notEmpty, // Equal to min=1. Field must be not empty.
}
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 