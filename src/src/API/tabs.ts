/* eslint-disable @typescript-eslint/no-non-null-assertion, no-unused-vars */

import { ReactUvcError } from './functions.js';

interface ITabsParams {
  parentId: string,
  defaultActive?: string | number,
}

export class Tabs {
  private _parentId: string;
  private _defaultActive: string | number;

  private _ready = false;
  readonly _instanceID = String((Math.random() * 1000)).split('.')[0];

  constructor(params: ITabsParams) {
    this._parentId = '';
    this._defaultActive = 0;

    for (let key in params) {
      this[`_${key}`] = params[key];
    }
  }

  init() {
    if (this._ready) {
      throw new ReactUvcError({ msg: '[WARN] Component is already initialized.', at: 'Tabs' })
    }

    const parent = document.querySelector(`#${this._parentId}`)!;
    const actions = parent.querySelectorAll('.uvc-tabs-tab_action');
    const contents = parent.querySelectorAll('.uvc-tabs-tab_content');

    this._setDefaults();

    if (!isNaN(Number(this._defaultActive))) {
      if (Number(this._defaultActive) >= actions.length) {
        this._toggle(0)
        console.warn(`${this._defaultActive} is more than actions length. Set 0 by default.`)
        return this._ready = true;
      }

      this._toggle(Number(this._defaultActive))
      return this._ready = true;
    } else {
      if (!String(this._defaultActive).includes('.' || '#') || !parent.querySelector(String(this._defaultActive))) {
        this._toggle(0)
        console.warn(`Default active {${this._defaultActive}} not found. Set 0 by default.`)
        return this._ready = true;
      }

      this._toggle(+parent.querySelector(String(this._defaultActive))?.getAttribute('id')?.split('--')[1].split('_')[0]!)
      return this._ready = true;
    }
  }

  toggle(e: React.MouseEvent<HTMLButtonElement>) {
    if (!this._ready) {
      throw new ReactUvcError({ msg: '[WARN] Component is not initialized.', at: 'Tabs' })
    }

    const self = (e.target as HTMLButtonElement).closest('.uvc-tabs-tab_action')!;

    this._setDefaults()
    this._toggle(+self?.getAttribute('id')?.split('--')[1].split('_')[0]!)
  }

  private _toggle(num: number) {
    const parent = document.querySelector(`#${this._parentId}`)!;
    const actions = parent.querySelectorAll('.uvc-tabs-tab_action');
    const contents = parent.querySelectorAll('.uvc-tabs-tab_content');

    this._setDefaults();

    (actions[num] as HTMLButtonElement).classList.add('uvc-tabs-tab_action--active');
    (actions[num] as HTMLButtonElement).setAttribute('aria-selected', 'true');
    (contents[num] as HTMLDivElement).classList.add('uvc-tabs-tab_content--active');
    (contents[num] as HTMLDivElement).setAttribute('aria-hidden', 'true');
  }

  private _setDefaults() {
    const parent = document.querySelector(`#${this._parentId}`)!;
    const actions = parent.querySelectorAll('.uvc-tabs-tab_action');
    const contents = parent.querySelectorAll('.uvc-tabs-tab_content');

    actions.forEach((el, i) => {
      el.classList.remove('uvc-tabs-tab_action--active')
      el.setAttribute('id', `uvc-tabs-tab_actionID--${i}_${this._instanceID}`)
      el.setAttribute('aria-controls', `uvc-tabs-tab_contentID--${i}_${this._instanceID}`)
      el.setAttribute('aria-selected', 'false')
    })

    contents.forEach((el, i) => {
      el.classList.remove('uvc-tabs-tab_content--active')
      el.setAttribute('id', `uvc-tabs-tab_contentID--${i}_${this._instanceID}`)
      el.setAttribute('aria-labelledby', `uvc-tabs-tab_actionID--${i}_${this._instanceID}`)
      el.setAttribute('aria-hidden', 'true')
    })
  }
}

export default Tabs;