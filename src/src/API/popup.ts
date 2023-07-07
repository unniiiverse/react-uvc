/* eslint-disable @typescript-eslint/no-non-null-assertion, no-unused-vars */

import { hideTabindexes, showTabindexes, ReactUvcError } from './functions.js';

export interface IParams {
  id: string,
}

export class Popup {
  private _ready = false;
  private _id: string;
  public isOpen = false;
  public supressUserControls = false;

  constructor(params: IParams) {
    this._id = params.id;
  }

  init() {
    const layer = document.querySelector('#uvc-popup-layer')!;
    const triggers = document.querySelectorAll(`[data-uvc-popup-openid="${this._id}"]`)!;
    const dialog = document.querySelector(`[data-uvc-popup-id="${this._id}"]`)!;

    document.querySelectorAll('.uvc-popup-close').forEach(el => {
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', 'Close the popup');
    });

    triggers.forEach(el => {
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-haspopup', 'true');
      el.setAttribute('aria-label', 'Open the popup');
    });

    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-hidden', 'true');
    dialog.setAttribute('aria-modal', 'true');
    layer.setAttribute('aria-hidden', 'true');

    if (!triggers.length || !dialog) {
      throw new ReactUvcError({ msg: 'At least one trigger or dialog is not found.', at: 'Popup' });
    }

    this._ready = true;
    return;
  }

  open(synthetic?: boolean) {
    if (!this._ready) {
      throw new ReactUvcError({ msg: 'Component is not initialized. Use new Popup().init() at useEffect(() => void, [])', at: 'Popup' });
    }

    if (!synthetic && this.supressUserControls) {
      console.warn('Action supressed by script.')
      return;
    }

    this.isOpen = true;

    const layer = document.querySelector('#uvc-popup-layer')!;
    const triggers = document.querySelectorAll(`[data-uvc-popup-openid="${this._id}"]`)!;
    const dialog = document.querySelector(`[data-uvc-popup-id="${this._id}"]`)!;

    hideTabindexes(/uvc-popup-close/gi);
    triggers.forEach(el => {
      el.classList.add('uvc-popup-trigger--active');
    });

    dialog.setAttribute('aria-hidden', 'false');
    dialog.classList.add('uvc-popup-dialog--active');

    layer.setAttribute('aria-hidden', 'false');
    layer.classList.add('uvc-popup-layer--active');
    document.documentElement.setAttribute('style', 'overflow: hidden');
  }

  close(synthetic?: boolean) {
    const layer = document.querySelector('#uvc-popup-layer')!;

    if (!synthetic && this.supressUserControls) {
      console.warn('Action supressed by script.')
      return;
    }

    this.isOpen = false;

    showTabindexes();
    document.querySelectorAll('.uvc-popup-dialog').forEach(el => {
      el.classList.remove('uvc-popup-dialog--active');
      el.setAttribute('aria-hidden', 'true');
    });

    document.querySelectorAll('.uvc-popup-trigger').forEach(el => {
      el.classList.remove('uvc-popup-trigger--active');
    });

    layer.setAttribute('aria-hidden', 'true');
    layer.classList.remove('uvc-popup-layer--active');
    document.documentElement.setAttribute('style', 'overflow: visible');
  }
}

export default Popup;