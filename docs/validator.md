# UVC-Validator
Form validation component.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { FormValidator, IFormInputRules } from 'react-uvc';

const Component: React.FC = () => {
  const instance = new FormValidator({
    throw: 'general' | 'afterEach',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])
}
```

Create layout.
```tsx
const rules: IFormInputRules[] = [
  {
    id: 'field-id',
    // ...rules
  }
]

<>
  <form action="/" id="form-id" onSubmit={e => instance.validate(e, rules)}>
    <div className="uvc-fv-fvErrors"></div>

    // Use wrapper for input if you want to show message after input.
    <div>
      <input type="text" name="username" placeholder="username" id="field-id" />
    </div>
    <button type="submit">Submit</button>
  </form>
</>
```

On submit form calls prevent default. Use instead fetch request to send form data.

## Examples
```tsx
const rules: IFormInputRules[] = [
  {
    id: 'username-validate',
    minLength: { val: 4, msg: 'Not default msg about minimal length. Required {{required}} chars. Now: {{current}}' },
    maxLength: { val: 12 },
  }
]

<>
  <form action="/" id="form-id" onSubmit={e => instance.validate(e, rules)}>
    <div className="uvc-fv-fvErrors"></div>

    // Use wrapper for input if you want to show message after input.
    <div>
      <input type="text" name="username" placeholder="username" id="username-validate" />
    </div>
    <div>
      <input type="password" name="password" placeholder="password" id="password-validate" />
    </div>
    <button type="submit">Submit</button>
  </form>
</>
```

## API
```scss
.uvc-fv-fvErrors // Parent for errors while throw: general
.uvc-fv-fvError-field // Input with error value.
.uvc-fv-fvError-text // Error message in parent div.
.uvc-fv-fvError-node // Error message after input.
```

```ts
const instance = new FormValidator({
  throw: 'general' | 'afterEach',
  formId: string
})

instance.init() // Uses in useEffect(() => {}, []). Initialize component.
instance.validate(e: FormEvent, inputRules: IFormInputRules[]) // onSubmit function

interface IFormInputRules {
  id: string,
  minLength?: {
    val: number,
    msg?: string
  },
  maxLength?: {
    val: number,
    msg?: string
  },
  notEmpty?: {
    val: boolean,
    msg?: string
  }
}

// Template strings
// You can enter dynamic data in error message.
'{{required}}' // Return required characters for the field.
'{{current}}' // Return current characters in the field.
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 