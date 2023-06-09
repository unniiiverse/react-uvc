/* eslint-disable @typescript-eslint/no-non-null-assertion, no-unused-vars */

import {
  FormEvent
} from 'react';

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
  // TODO
  // msgClasses?: {
  //   field?: string,
  //   node?: string,
  //   text?: string,
  //   success?: string,
  // }
}

export class FormValidator {
  private _ready = false;
  readonly instanceID = (Math.random() * 100);
  readonly throw: TThrow;
  readonly formId: string;

  constructor(params: IFormValidatorParams) {
    this.throw = params.throw;
    this.formId = params.formId;
  }

  init() {
    const parent = document.querySelector(`#${this.formId}`);

    if (!parent) {
      throw new Error('Parent is not found.');
    }

    if (!parent.querySelector('.uvc-fv-fvErrors') && this.throw === 'general') {
      throw new Error(`.uvc-fv-fvErrors in #${this.formId} is not found.`);
    }

    if (!parent.querySelectorAll('input').length) {
      throw new Error(`Any inputs in #${this.formId} are not found.`);
    }

    this._ready = true;
  }

  validate(e: FormEvent, inputRules: Array<IFormInputRules>) {
    if (!this._ready) {
      throw new Error('Uvc-FormValidator is not initialized.');
    }

    e.preventDefault();

    const parent = document.querySelector(`#${this.formId}`)!;
    const throwField = parent.querySelector('.uvc-fv-fvErrors')!;
    const inputs = parent.querySelectorAll('input')!;

    throwField.innerHTML = '';
    parent.querySelectorAll('.uvc-fv-fvError-node').forEach(el => el.remove());

    inputs.forEach(input => {
      input.classList.remove('uvc-fv-fvError-field');
      input.classList.remove('uvc-fv-success');
      const rules = inputRules.find(el => el.id === input.getAttribute('id'));

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

      for (const rule in rules) {
        switch (rule) {
          case 'minLength':
            if (input.value.length < rules[rule]!.val) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Minimum length for ${input.getAttribute('name') || input.getAttribute('type')} is ${rules[rule]!.val}. Now ${input.value.length}`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'maxLength':
            if (input.value.length > rules[rule]!.val) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Maximum length for ${input.getAttribute('name') || input.getAttribute('type')} is ${rules[rule]!.val}. Now ${input.value.length}`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'notEmpty':
            if (input.value.length === 0) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} can not be empty.`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'isEmail':
            if (!input.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not email.`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'isMobile':
            if (!input.value.match(/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/gi)) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not phone.`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'checked':
            if (input.checked !== rules[rule]!.val) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `This field must be ${rules[rule]!.val}. Now ${input.checked}.`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'match':
            if (!input.value.match(rules[rule]!.val)) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `Field ${input.getAttribute('name') || input.getAttribute('type')} is not match to regexp ${rules[rule]!.val}.`)
            } else input.classList.add('uvc-fv-success');
            break;
          case 'custom':
            try {
              rules[rule]!.val(input);
              input.classList.add('uvc-fv-success');
            } catch (e) {
              throwError(this.throw, parent.querySelector('.uvc-fv-fvErrors')!, input, createTemplateMessage(rules[rule]!, input) || `${e}`);
              console.error(e);
            }
            break;
        }
      }
    });
  }
}

function throwError(throwMode: TThrow, container: HTMLDivElement, input: HTMLInputElement, msg: string) {
  input.classList.add('uvc-fv-fvError-field');

  if (throwMode === 'general') {
    container.insertAdjacentHTML('beforeend', `<p class="uvc-fv-fvError-text" role="alert" tabindex="0">${msg}</p>`);
  } else {
    (input.closest('.uvc-fv-afterThis') || input).insertAdjacentHTML('afterend', `<p class="uvc-fv-fvError-node" role="alert" tabindex="0">${msg}</p>`);
  }
}

export default FormValidator;