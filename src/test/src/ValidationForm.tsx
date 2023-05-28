import React, { useEffect } from "react";
import { FormValidator } from './API/formValidator'
import './styles/index.scss'

const ValidationForm: React.FC = (props) => {
  const instance = new FormValidator({
    throw: 'underEach',
    formId: 'form-id',
  })

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <form action="/" id="form-id" onSubmit={e => instance.validate(e)}>
      <div className="uvc-fv-fvErrors"></div>

      <div>
        <input type="text" name="username" placeholder="username" data-uvc-fv-rule="min=4;max=12;notEmpty;" />
      </div>
      <div>
        <input type="password" name="password" placeholder="password" data-uvc-fv-rule="min=4;max=12;" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;