import React, { useEffect } from "react";
import { FormValidator, IFormInputRules } from './API/formValidator'
import './styles/index.scss'

const instance1 = new FormValidator({
  throw: 'afterEach',
  formId: 'form-1',
})

const instance2 = new FormValidator({
  throw: 'afterEach',
  formId: 'form-2',
})

const ValidationForm: React.FC = (props) => {
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

  const sendForm = () => {
    console.log('send form')
    const fd = new FormData((document.querySelector('form')! as HTMLFormElement))
    console.log(fd)
  }

  const rules1: IFormInputRules[] = [
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
    },
    {
      id: 'checkbox-validate',
      checked: {
        val: true
      }
    }
  ]

  const rules2: IFormInputRules[] = [
    {
      id: 'inp-req',
      minLength: {
        val: 6
      }
    },
    {
      id: 'inp-notReq',
      required: {
        val: false
      },
      minLength: {
        val: 6
      }
    },
    {
      id: 'inp-ariaMin',
      minLength: {
        val: 6
      }
    },
    {
      id: 'inp-ariaMax',
      maxLength: {
        val: 12
      }
    },
    {
      id: 'inp-ariaMinMax',
      minLength: {
        val: 6
      },
      maxLength: {
        val: 12
      }
    },
  ]

  useEffect(() => {
    // instance1.init();
    // instance2.init(rules2);
  }, [])

  return (
    <>
      {/* <form action="/" id="form-1" onSubmit={e => { instance1.validate(e, rules1, sendForm); }}>
        <div className="uvc-fv-error-container"></div>

        <div>
          <input type="text" name="username" placeholder="username" id="username-validate" value={123} />
        </div>
        <div>
          <input type="email" name="email" placeholder="email" id="email-validate" value={'123@ex.com'} />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" id="password-validate" value={'aaaa'} />
        </div>
        <div>
          <div className="uvc-fv-afterThis">
            <input type="checkbox" name="checkbox" placeholder="checkbox" id="checkbox-validate" checked />
            <label htmlFor="checkbox-validate">Checkbox</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form> */}

      {/* <form action="/" id="form-2" onSubmit={e => { instance2.validate(e, rules2, sendForm); }}>
        <div className="uvc-fv-error-container"></div>

        <div>
          <input type="text" id="inp-req" placeholder="required" />
        </div>
        <div>
          <input type="text" id="inp-notReq" placeholder="not required" />
        </div>
        <div>
          <input type="text" id="inp-ariaMin" placeholder="aria min" />
        </div>
        <div>
          <input type="text" id="inp-ariaMax" placeholder="aria max" />
        </div>
        <div>
          <input type="text" id="inp-ariaMinMax" placeholder="aria min max" />
        </div>

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

export default ValidationForm;