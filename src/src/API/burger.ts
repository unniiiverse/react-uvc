/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { hideTabindexes, showTabindexes, ReactUvcError } from './functions.js';

export interface IParams {
  triggerQuery: string,
  menuId: string
}

export class Burger {
  private _ready = false;
  private _instanceID = (Math.random() * 100);
  private _triggerQuery: string;
  private _menuId: string;

  constructor(params: IParams) {
    const { menuId, triggerQuery } = params;
    this._menuId = menuId;
    this._triggerQuery = triggerQuery;
  }

  init() {
    const triggers = document.querySelectorAll(this._triggerQuery);
    const menu = document.querySelector(`#${this._menuId}`);

    if (!triggers.length || !menu) {
      throw new ReactUvcError({ msg: 'At least one trigger or menu is not found.', at: 'Burger' });
    }

    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-hidden', 'true');

    triggers.forEach((el, i) => {
      el.setAttribute('id', `uvc-burger-triggerID--${i}_${this._instanceID}`);

      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', 'Open the burger menu.');
      el.setAttribute('aria-expanded', 'false');
      el.setAttribute('aria-controls', menu.getAttribute('id')!);
    });

    this._ready = true;
  }

  toggle(e: React.MouseEvent<HTMLButtonElement> | null, syntheticTo?: boolean) {
    if (!this._ready) {
      throw new ReactUvcError({ msg: 'Component is not initialized. Use new Burger().init() at useEffect(() => void, [])', at: 'Burger' });
    }

    const menu = document.querySelector(`#${this._menuId}`)!;
    let isOpened = false;

    if (!e) {
      isOpened = syntheticTo || false;
    } else {
      const self = (e.target as HTMLElement).closest('.uvc-burger-trigger')!;
      isOpened = !self.classList.contains(`uvc-burger-trigger--active`);
    }

    if (isOpened) {
      hideTabindexes(/uvc-burger-trigger|uvc-ti-ignore/gi);
      document.documentElement.setAttribute('style', 'overflow: hidden');

      document.querySelectorAll(this._triggerQuery).forEach(el => {
        el.setAttribute('aria-label', 'Close the burger menu.');
        el.setAttribute('aria-expanded', 'true');
        el.classList.add(`uvc-burger-trigger--active`);
      });

      menu.setAttribute('aira-hidden', 'false');
      menu.classList.add(`uvc-burger-menu--active`);
    } else {
      showTabindexes();
      document.documentElement.setAttribute('style', 'overflow: visible');

      document.querySelectorAll(this._triggerQuery).forEach(el => {
        el.setAttribute('aria-label', 'Open the burger menu.');
        el.setAttribute('aria-expanded', 'false');
        el.classList.remove(`uvc-burger-trigger--active`);
      });

      menu.setAttribute('aria-hidden', 'true');
      menu.classList.remove(`uvc-burger-menu--active`);
    }

    return;
  }
}

export default Burger;