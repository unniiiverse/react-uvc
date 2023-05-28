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

  const rules: IFormInputRules[] = [
    {
      id: 'username-validate',
      minLength: { val: 4, msg: 'Not default msg about minimal length. TODO: Required {{required}} chars. Now: {{current}}' },
      maxLength: { val: 12 },
    },
    {
      id: 'password-validate',
      notEmpty: { val: true },
      maxLength: { val: 12 },
    }
  ]

  return (
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
  );
}

export default ValidationForm;