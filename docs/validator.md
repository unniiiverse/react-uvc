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
    // Use uvc-fv-error-container if you want to show messages in a signle div.  
    <div className="uvc-fv-error-container"></div>

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
    throw: 'general',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <form action="/" id="form-id" onSubmit={e => instance.validate(e, rules)}>
        <div className="uvc-fv-error-container"></div>

        <input type="text" name="username" placeholder="username" id="username-validate" />
        <input type="password" name="password" placeholder="password" id="password-validate" />

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

const Component: React.FC = () => {
  const instance = new FormValidator({
    throw: 'afterEach',
    formId: 'ID',
  })

  useEffect(() => {
    instance.init();
  }, [])

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

  const rules: IFormInputRules[] = [
  {
    id: 'username-validate',
    custom: {
      val: checkUsernameAvailability
    }
  },
]

  // Send form if form validated successfully
  const sendForm = () => {
    console.log('send form')
  }

  return (
    <>
      <form action="/" id="form-id" onSubmit={e => instance.validate(e, rules, sendForm)}>
        <div className="uvc-fv-error-container"></div>
    
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
.uvc-fv-error-afterThis // Special class to throw error after this block. (By default error throw after input)
.uvc-fv-field-success // Input with valid value.
.uvc-fv-field-error // Input with invalid value.

.uvc-fv-error-container // Container for errors while throw: general
.uvc-fv-error-text // Error message in parent div.
.uvc-fv-error-node // Error message after input.
```

```ts
interface IFormValidatorProps {
  throw: 'general' | 'afterEach',
  formId: string
}

const instance = new FormValidator({}: IFormValidatorProps)

instance.init(inputRules?: IFormInputRules[]) // Uses in useEffect(() => {}, []). Initialize component. Accept validation rules, set attributes (such as minLength or required) to inputs.
instance.validate(e: FormEvent, inputRules: IFormInputRules[], successCb: () => void) // onSubmit function. Callback must be as a reference.

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
  },
  required?: {
    val: boolean,
    msg?: string
  }
}

// Template strings
// You can enter dynamic data in error message.
'{{required}}' // Return required field value.
'{{current}}' // Return current field value.
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 