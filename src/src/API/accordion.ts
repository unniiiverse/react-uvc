/* eslint-disable @typescript-eslint/no-non-null-assertion */

export interface IParams {
  parentId: string
  defaultOpen?: string,
  singleOpen?: boolean,
}

const AccordionPropsDefault: IParams = {
  parentId: 'uvc-accordion',
  defaultOpen: '.uvc-accordion-defaultOpen',
  singleOpen: false,
};

export class Accordion {
  private _parentId: string;
  private _defaultOpen?: string;
  private _singleOpen?: boolean;
  private _ready: boolean;
  private _instanceID = String((Math.random() * 1000)).split('.')[0];

  constructor(props: IParams) {
    this._ready = false;
    this._parentId = AccordionPropsDefault.parentId;

    for (const key in AccordionPropsDefault) {
      this[`_${key}`] = props[key] || AccordionPropsDefault[key];
    }
  }

  init() {
    if (this._ready) {
      console.error('[WARN] Component is already initialized.');
      return;
    }

    const parent = document.querySelector(`#${this._parentId}`);

    if (!parent) {
      throw new Error('Parent is not found.');
    }

    const triggers = parent.querySelectorAll('.uvc-accordion-trigger');
    const contents = parent.querySelectorAll('.uvc-accordion-content');

    if (!triggers.length || !contents.length) {
      throw new Error('.uvc-accordion-trigger or .uvc-accordion-content are not found.');
    }

    triggers.forEach((el, i) => {
      el.setAttribute('tabIndex', '0');
      el.setAttribute('aria-expanded', 'false');

      el.setAttribute('id', `uvc-accordion-triggerID--${i}-${this._instanceID}`);
      el.setAttribute('aria-controls', `uvc-accordion-contentID--${i}-${this._instanceID}`);
    });

    contents.forEach((el, i) => {
      el.setAttribute('role', `region`);
      el.setAttribute('tabIndex', '0');
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('data-uvc-accordion-content_py', `${+window.getComputedStyle(el).paddingTop.replace('px', '') + +window.getComputedStyle(el).paddingBottom.replace('px', '')}`);
      el.setAttribute('style', 'padding-top: 0; padding-bottom: 0');

      el.setAttribute('id', `uvc-accordion-contentID--${i}-${this._instanceID}`);
      el.setAttribute('aria-labledby', `uvc-accordion-triggerID--${i}-${this._instanceID}`);
    });

    triggers.forEach(el => {
      if (this._defaultOpen && (el.classList.contains(this._defaultOpen.replace('.', '')) || el.getAttribute('id') === this._defaultOpen.replace('#', ''))) {
        el.setAttribute('aria-expanded', 'true');
        el.classList.add('uvc-accordion-trigger--open');

        const content = document.querySelector(`#${el.getAttribute('aria-controls')}`)!;
        content.setAttribute('aria-hidden', 'false');
        content.setAttribute('style', `max-height: ${+content.scrollHeight + +content.getAttribute('data-uvc-accordion-content_py')!}px`);
        content.classList.add('uvc-accordion-content--open');
      }
    });

    contents.forEach(el => {
      if (this._defaultOpen && (el.classList.contains(this._defaultOpen.replace('.', '')) || el.getAttribute('id') === this._defaultOpen.replace('#', ''))) {
        el.setAttribute('aria-hidden', 'false');
        el.classList.add('uvc-accordion-content--open');
        el.setAttribute('style', `max-height: ${+el.scrollHeight + +el.getAttribute('data-uvc-accordion-content_py')!}px`);

        const trigger = document.querySelector(`#${el.getAttribute('aria-labledby')}`)!;
        trigger.setAttribute('aria-expanded', 'true');
        trigger.classList.add('uvc-accordion-trigger--open');
      }
    });

    this._ready = true;
    return;
  }

  toggle(e: React.MouseEvent<HTMLButtonElement>) {
    if (!this._ready) {
      throw new Error('Component is not initialized.');
    }

    const parent = document.querySelector(`#${this._parentId}`)!;

    const self = (e.target as HTMLElement).closest('.uvc-accordion-trigger')!;
    const content = document.querySelector(`#${self.getAttribute('aria-controls')}`)!;
    const isOpened = !self.classList.contains('uvc-accordion-trigger--open');
    const triggers = parent.querySelectorAll('.uvc-accordion-trigger');
    const contents = parent.querySelectorAll('.uvc-accordion-content');

    if (isOpened) {
      if (this._singleOpen) {
        triggers.forEach(el => {
          el.classList.remove('uvc-accordion-trigger--open');
          content.classList.remove('uvc-accordion-content--open');
          content.setAttribute('style', 'max-height: 0; padding-top: 0; padding-bottom: 0');

          el.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');
        });

        contents.forEach(el => {
          el.classList.remove('uvc-accordion-content--open');
          el.setAttribute('style', 'max-height: 0; padding-top: 0; padding-bottom: 0');
          el.setAttribute('aria-hidden', 'true');
        });
      }

      self.classList.add('uvc-accordion-trigger--open');
      content.classList.add('uvc-accordion-content--open');
      content.setAttribute('style', `max-height: ${+content.scrollHeight + +content.getAttribute('data-uvc-accordion-content_py')!}px`);

      self.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    } else {
      self.classList.remove('uvc-accordion-trigger--open');
      content.classList.remove('uvc-accordion-content--open');
      content.setAttribute('style', 'max-height: 0; padding-top: 0; padding-bottom: 0');

      self.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
    }
  }
}

export default Accordion;