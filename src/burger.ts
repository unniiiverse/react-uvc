import { hideTabindexes, showTabindexes } from './functions.js';

export interface IParams {
  triggerQuery: string,
  menuId: string
}

class Burger {
  private _ready = false;
  readonly instanceID = (Math.random() * 100);
  readonly triggerQuery: string;
  readonly menuId: string;

  constructor(params: IParams) {
    const { menuId, triggerQuery } = params;
    this.menuId = menuId;
    this.triggerQuery = triggerQuery;
  }

  init() {
    this._ready = true;

    const triggers = document.querySelectorAll(this.triggerQuery);
    const menu = document.querySelector(`#${this.menuId}`);

    if (!triggers.length || !menu) {
      throw new Error('At least one trigger or menu is not finded.')
    }

    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-hidden', 'true');

    triggers.forEach((el, i) => {
      el.setAttribute('id', `uvc-burger-triggerID--${i}_${this.instanceID}`);

      el.setAttribute('tabindex', '0')
      el.setAttribute('aria-label', 'Open the burger menu.');
      el.setAttribute('aria-expanded', 'false');
      el.setAttribute('aria-controls', menu.getAttribute('id')!);
    })



    return;
  }

  call(e: React.MouseEvent<HTMLButtonElement>) {
    if (!this._ready) {
      throw new Error('UVC Burger is not initialized.')
    }

    const self = (e.target as HTMLElement).closest('.uvc-burger-trigger')!;
    const menu = document.querySelector(`#${this.menuId}`)!
    const isOpened = !self.classList.contains(`uvc-burger-trigger--active`);

    if (isOpened) {
      hideTabindexes(/uvc-burger-trigger|uvc-burger-btn/gi);
      document.documentElement.setAttribute('style', 'overflow: hidden')

      document.querySelectorAll(this.triggerQuery).forEach(el => {
        el.setAttribute('aria-label', 'Close the burger menu.')
        el.setAttribute('aria-expanded', 'true')
        el.classList.add(`uvc-burger-trigger--active`);
      })

      menu.setAttribute('aira-hidden', 'false')
      menu.classList.add(`uvc-burger-menu--active`);
    } else {
      showTabindexes();
      document.documentElement.setAttribute('style', 'overflow: visible')

      document.querySelectorAll(this.triggerQuery).forEach(el => {
        el.setAttribute('aria-label', 'Open the burger menu.');
        el.setAttribute('aria-expanded', 'false');
        el.classList.remove(`uvc-burger-trigger--active`);
      })

      menu.setAttribute('aria-hidden', 'true');
      menu.classList.remove(`uvc-burger-menu--active`);
    }

    return;
  }
}

export default Burger;