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
    // Use uvc-fv-fvErrors if you want to show messages in a signle div.  
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
Validate username and password. If username validate fails, throw custom message.
```tsx
import React, { useEffect } from 'react';
import { FormValidator, IFormInputRules } from 'react-uvc';

const rules: IFormInputRules[] = [
  {
    id: 'username-validate',
    minLength: { val: 4, msg: 'Not default msg about minimal length. Required {{required}} chars. Now: {{current}}' },
    maxLength: { val: 12 },
  },
  {
    id: 'password-validate',
    minLength: { val: 8 },
    maxLength: { val: 24 },
  }
]

const Component: React.FC = () => {
  const instance = new FormValidator({
    throw: 'general' | 'afterEach',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <form action="/" id="form-id" onSubmit={e => instance.validate(e, rules)}>
        <div className="uvc-fv-fvErrors"></div>

        <div>
          <input type="text" name="username" placeholder="username" id="username-validate" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" id="password-validate" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
```

Validate username with custom function. In this example, if username does not match 123, validation will fail. Also if validation success, send form.
```tsx
import React, { useEffect } from 'react';
import { FormValidator, IFormInputRules } from 'react-uvc';

const rules: IFormInputRules[] = [
  {
    id: 'username-validate',
    custom: {
      val: checkUsernameAvailability
    }
  },
]

const Component: React.FC = () => {
  const instance = new FormValidator({
    throw: 'general' | 'afterEach',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])

  // IMPORTANT. Custom function always will accept as params it's input.
  const checkUsernameAvailability = (input: HTMLInputElement) => {
    class ValidationError extends Error {
      constructor(msg: string) {
        super(msg);
        this.name = 'ValidationError'
      }
    }

    if (!input.value.match(/123/g)) {
      throw new ValidationError('input does not match 123')
    }
  }

  // Send form if parent won't include error text or node.
  const sendForm = (e: React.FormEvent) => {
    const self = (e.target as HTMLFormElement);

    if (self.querySelectorAll('.uvc-fv-fvError-text').length || self.querySelectorAll('.uvc-fv-fvError-node').length) {
      return
    }

    console.log('send form')
  }

  return (
    <>
      <form action="/" id="form-id" onSubmit={e => {instance.validate(e, rules); sendForm(e)}}>
        <div className="uvc-fv-fvErrors"></div>
    
        <div>
          <input type="text" name="username" placeholder="username" id="username-validate" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
```

## API
```scss
.uvc-fv-afterThis // If you want to return error after div which contains faied input.
.uvc-fv-success // Succeed class for input.

.uvc-fv-fvErrors // Parent for errors while throw: general
.uvc-fv-fvError-field // Input with error value.
.uvc-fv-fvError-text // Error message in parent div.
.uvc-fv-fvError-node // Error message after input.
```

```ts
interface IFormValidatorProps {
  throw: 'general' | 'afterEach',
  formId: string
}

const instance = new FormValidator({}: IFormValidatorProps)

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
  },
  isEmail?: {
    val: boolean,
    msg?: string
  },
  isMobile?: {
    val: boolean,
    msg?: string
  },
  isChecked?: {
    val: boolean,
    msg?: string
  },
  match?: {
    val: RegExp,
    msg?: string
  },
  custom?: {
    val: (input: HTMLInputElement) => void,
    msg?: string
  }
}

// Template strings
// You can enter dynamic data in error message.
'{{required}}' // Return required field.
'{{current}}' // Return current field value.
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 