import React, { useEffect } from "react";
import { FormValidator, IFormInputRules } from './API/formValidator'
import './styles/index.scss'

const ValidationForm: React.FC = (props) => {
  const instance = new FormValidator({
    throw: 'afterEach',
    formId: 'form-id',
  })

  useEffect(() => {
    instance.init();
  }, [])

  const checkUsernameAvailability = (input: HTMLInputElement) => {
    console.log('rule')

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

  const sendForm = (e: React.FormEvent) => {
    const self = (e.target as HTMLFormElement);

    if (self.querySelectorAll('.uvc-fv-fvError-text').length || self.querySelectorAll('.uvc-fv-fvError-node').length) {
      return
    }

    console.log('send form')
  }

  const rules: IFormInputRules[] = [
    {
      id: 'username-validate',
      custom: {
        val: checkUsernameAvailability
      }
    },
    {
      id: 'password-validate',
      notEmpty: { val: true },
      maxLength: { val: 12 },
      match: {
        val: /aaaa/,
      }
    },
    {
      id: 'email-validate',
      isEmail: {
        val: true
      }
    }
  ]

  return (
    <form action="/" id="form-id" onSubmit={e => { instance.validate(e, rules); sendForm(e) }}>
      <div className="uvc-fv-fvErrors"></div>

      <div>
        <input type="text" name="username" placeholder="username" id="username-validate" />
      </div>
      <div>
        <input type="email" name="email" placeholder="email" id="email-validate" />
      </div>
      <div>
        <input type="password" name="password" placeholder="password" id="password-validate" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;