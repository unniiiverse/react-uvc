import { FormEvent } from "react";

export type TThrow = 'general' | 'underEach';
export interface IFormValidatorParams {
  throw: TThrow,
  formId: string
}

export class FormValidator {
  private _ready = false;
  readonly instanceID = (Math.random() * 100);
  readonly throw: TThrow;
  readonly formId: string;

  constructor(params: IFormValidatorParams) {
    this.throw = params.throw;
    this.formId = params.formId
  }

  init() {
    const parent = document.querySelector(`#${this.formId}`);

    if (!parent) {
      throw new Error('Parent is not found.')
    }

    if (!parent.querySelector('.uvc-fv-fvErrors') && this.throw === 'general') {
      throw new Error(`.uvc-fv-fvErrors in #${this.formId} is not found.`)
    }

    if (!parent.querySelectorAll('input').length) {
      throw new Error(`Any inputs in #${this.formId} are not found.`)
    }

    parent.querySelectorAll('input').forEach(input => {

    })

    this._ready = true;
  }

  validate(e: FormEvent) {
    if (!this._ready) {
      throw new Error('Uvc-FormValidator is not initialized.')
    }

    e.preventDefault();

    const parent = document.querySelector(`#${this.formId}`)!;
    const throwField = parent.querySelector('.uvc-fv-fvErrors')!;
    const inputs = parent.querySelectorAll('input')!;

    throwField.innerHTML = '';
    parent.querySelectorAll('.uvc-fv-fvError-errorNode').forEach(el => el.remove())

    inputs.forEach(input => {
      input.classList.remove('uvc-fv-fvError-errorField')
      const rule = input.getAttribute('data-uvc-fv-rule');

      if (!rule) {
        return;
      }

      const rules = rule.split(';');

      rules.forEach(el => {
        if (!el) {
          return;
        }

        if (el.split('=').length > 1) {
          let rule = el.split('=');

          switch (rule[0]) {
            case 'min':
              if (input.value.length < +rule[1]) throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, `${input.getAttribute('name') || input.getAttribute('type')} validation failed: minimum characters for this field is: ${rule[1]}`)
              break;
            case 'max':
              if (input.value.length > +rule[1]) throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, `${input.getAttribute('name') || input.getAttribute('type')} validation failed: maximum characters for this field is: ${rule[1]}`)
              break;
          }
        } else {
          switch (el) {
            case 'notEmpty':
              if (input.value.length === 0) throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, `${input.getAttribute('name') || input.getAttribute('type')} validation failed: field must not be empty.`)
              break;
          }
        }
      })
    })
  }
}

function throwError(throwMode: TThrow, container: HTMLDivElement, input: HTMLInputElement, msg: string) {
  input.classList.add('uvc-fv-fvError-errorField')

  if (throwMode === 'general') {
    container.insertAdjacentHTML('beforeend', `<p class="uvc-fv-fvError-errorText" role="alert" tabindex="0">${msg}</p>`)
  } else {
    input.insertAdjacentHTML('afterend', `<p class="uvc-fv-fvError-errorNode" role="alert" tabindex="0">${msg}</p>`)
  }
}

export default FormValidator