/* eslint-disable @typescript-eslint/no-non-null-assertion, no-unused-vars */

import { FormEvent } from 'react';
import { ReactUvcError } from './functions.js';

export type TThrow = 'general' | 'afterEach';
export interface IFormValidatorParams {
  throw: TThrow,
  formId: string
}

export interface IFormInputRules {
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
  checked?: {
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

const EC = {
  successField: 'uvc-fv-success-field',
  afterThis: 'uvc-fv-error-afterThis',
  errorField: 'uvc-fv-error-field',
  errors: 'uvc-fv-error-container',
  errorNode: 'uvc-fv-error-node',
  errorText: 'uvc-fv-error-text',
};

export class FormValidator {
  private _ready = false;
  private _throw: TThrow;
  private _formId: string;

  constructor(params: IFormValidatorParams) {
    this._throw = params.throw;
    this._formId = params.formId;
  }

  init(inputRules?: Array<IFormInputRules>) {
    const parent = document.querySelector(`#${this._formId}`);

    if (!parent) {
      throw new ReactUvcError({ msg: `Form #${this._formId} is not found.`, at: 'FormValidator' });
    }

    if (!parent.querySelector(`.${EC.errors}`) && this._throw === 'general') {
      throw new ReactUvcError({ msg: `.${EC.errors} in #${this._formId} is not found. Change throw mode to afterEach or add .${EC.errors} in form.`, at: 'FormValidator' });
    }

    if (inputRules) {
      inputRules.forEach(rule => {
        const input = document.querySelector(`#${rule.id}`)!;

        if (rule.required?.val || rule.required?.val === undefined) {
          input.setAttribute('aria-required', 'true')
        } else {
          return;
        }

        if (rule.minLength) {
          input.setAttribute('minLength', `${rule.minLength!.val}`)
        } if (rule.maxLength) {
          input.setAttribute('maxLength', `${rule.maxLength!.val}`)
        }
      })
    }

    this._ready = true;
  }

  validate(e: FormEvent, inputRules: Array<IFormInputRules>, successCb?: () => void) {
    e.preventDefault();

    if (!this._ready) {
      throw new ReactUvcError({ msg: 'Component is not initialized. Use new FormValidator().init() at useEffect(() => void, [])', at: 'FormValidator' });
    }

    const parent = document.querySelector(`#${this._formId}`)!;
    const inputs = parent.querySelectorAll('input')!;

    parent.querySelectorAll(`.${EC.errorNode}`).forEach(el => el.remove());
    parent.querySelectorAll(`.${EC.errorText}`).forEach(el => el.remove());

    inputs.forEach(input => {
      input.classList.remove(EC.errorField);
      input.classList.remove(EC.successField);

      const rules = inputRules.find(el => el.id === input.getAttribute('id'))!;

      function createTemplateMessage(rule: {
        val: any,
        msg?: string
      }, input: HTMLInputElement) {
        if (!rule.msg) {
          return undefined;
        }

        return rule.msg
          .replace(/{{required}}/gi, `${rule.val}`)
          .replace(/{{current}}/gi, `${input.value}`);
      }

      if (rules.required?.val === false) {
        return;
      }

      for (const rule in rules) {
        switch (rule) {
          case 'minLength':
            if (input.value.length < rules[rule]!.val) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Minimum length for ${input.getAttribute('name') || input.getAttribute('type')} is ${rules[rule]!.val}. Now ${input.value.length}`);
            } else input.classList.add(EC.successField);
            break;
          case 'maxLength':
            if (input.value.length > rules[rule]!.val) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Maximum length for ${input.getAttribute('name') || input.getAttribute('type')} is ${rules[rule]!.val}. Now ${input.value.length}`);
            } else input.classList.add(EC.successField);
            break;
          case 'notEmpty':
            if (input.value.length === 0) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} can not be empty.`);
            } else input.classList.add(EC.successField);
            break;
          case 'isEmail':
            if (!input.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not email.`);
            } else input.classList.add(EC.successField);
            break;
          case 'isMobile':
            if (!input.value.match(/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/gi)) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not phone.`);
            } else input.classList.add(EC.successField);
            break;
          case 'checked':
            if (input.checked !== rules[rule]!.val) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `This field must be ${rules[rule]!.val}. Now ${input.checked}.`);
            } else input.classList.add(EC.successField);
            break;
          case 'match':
            if (!input.value.match(rules[rule]!.val)) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not match to regexp ${rules[rule]!.val}.`);
            } else input.classList.add(EC.successField);
            break;
          case 'custom':
            try {
              rules[rule]!.val(input);
              input.classList.add(EC.successField);
            } catch (e) {
              throwError(this._throw, parent.querySelector(`.${EC.errors}`)!, input, createTemplateMessage(rules[rule]!, input) || `${e}`);
              console.error(e);
            }
            break;
        }
      }
    });

    if (!parent.querySelectorAll(`.${EC.errorField}`).length && successCb) {
      successCb();
    }
  }

  get ready() {
    return this._ready;
  }
}

function throwError(throwMode: TThrow, container: HTMLDivElement, input: HTMLInputElement, msg: string) {
  input.classList.add(EC.errorField);

  if (throwMode === 'general') {
    container.insertAdjacentHTML('beforeend', `<p class="${EC.errorText}" role="alert" tabindex="0">${msg}</p>`);
  } else {
    (input.closest('.uvc-fv-afterThis') || input).insertAdjacentHTML('afterend', `<p class="${EC.errorNode}" role="alert" tabindex="0">${msg}</p>`);
  }
}

export default FormValidator;