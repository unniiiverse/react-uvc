interface IAccordionProps {
  parent: string
  initialOpen?: string | null,
  singleOpen?: boolean,
}

interface IPopupProps {
  connector: string,
}

interface IBurgerProps {
  generalClass: string
}

const AccordionPropsDefault: IAccordionProps = {
  parent: 'uvc-accordion',
  initialOpen: null,
  singleOpen: false,
}

export const hideTabIndexes = (ignore: RegExp) => {
  const tabindexes = document.querySelectorAll('[tabindex]');

  tabindexes.forEach(el => {
    if (!el.getAttribute('class')?.split(' ').some(el => el.match(ignore))) {
      el.setAttribute('data-uvc-tabindexPrev', el.getAttribute('tabindex')!)
      el.setAttribute('tabindex', '-1')
    }
  })
}

export const returnTabIndexes = () => {
  const tabindexes = document.querySelectorAll('[tabindex]');

  tabindexes.forEach(el => {
    if (el.getAttribute('data-uvc-tabindexPrev')) {
      el.setAttribute('tabindex', el.getAttribute('data-uvc-tabindexPrev')!)
      el.removeAttribute('data-uvc-tabindexPrev')
    }
  })
}

export class Accordion {
  private parent: string;
  private initialOpen?: string | null;
  private singleOpen?: boolean;

  private ready: boolean;
  private instanceID = String((Math.random() * 1000)).split('.')[0]

  constructor(props: IAccordionProps) {
    this.ready = false;
    this.parent = AccordionPropsDefault.parent

    for (const key in AccordionPropsDefault) {
      this[key] = props[key] || AccordionPropsDefault[key];
    }
  }

  init() {
    if (this.ready) {
      console.error('[WARN] Component is already initialized.')
      return
    }

    const parent = document.querySelector(this.parent);

    if (!parent) {
      throw new Error('Parent class is not finded.')
    }

    const triggers = parent.querySelectorAll('.uvc-accordion-trigger');
    const contents = parent.querySelectorAll('.uvc-accordion-content');

    if (!triggers.length || !contents.length) {
      throw new Error('.uvc-accordion-trigger or .uvc-accordion-content is not finded.')
    }

    triggers.forEach((el, i) => {
      el.setAttribute('tabIndex', '0');
      el.setAttribute('aria-expanded', 'false');

      el.setAttribute('id', `uvc-accordion-triggerID--${i}-${this.instanceID}`);
      el.setAttribute('aria-controls', `uvc-accordion-contentID--${i}-${this.instanceID}`);
    })

    contents.forEach((el, i) => {
      el.setAttribute('role', `region`);
      el.setAttribute('tabIndex', '0');
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('data-uvc-accordion-content_py', `${+window.getComputedStyle(el).paddingTop.replace('px', '') + +window.getComputedStyle(el).paddingBottom.replace('px', '')}`)
      el.setAttribute('style', 'padding-top: 0; padding-bottom: 0');

      el.setAttribute('id', `uvc-accordion-contentID--${i}-${this.instanceID}`)
      el.setAttribute('aria-labledby', `uvc-accordion-triggerID--${i}-${this.instanceID}`);
    })

    triggers.forEach(el => {
      if (this.initialOpen && el.classList.contains(this.initialOpen)) {
        el.setAttribute('aria-expanded', 'true');
        el.classList.add('uvc-accordion-trigger--open');

        const content = document.querySelector(`#${el.getAttribute('aria-controls')}`)!;
        content.setAttribute('aria-hidden', 'false');
        content.setAttribute('style', `max-height: ${+content.scrollHeight + +content.getAttribute('data-uvc-accordion-content_py')!}px`);
        content.classList.add('uvc-accordion-content--open');
      }
    })

    contents.forEach(el => {
      if (this.initialOpen && el.classList.contains(this.initialOpen)) {
        el.setAttribute('aria-hidden', 'false');
        el.classList.add('uvc-accordion-content--open');
        el.setAttribute('style', `max-height: ${+el.scrollHeight + +el.getAttribute('data-uvc-accordion-content_py')!}px`);

        const trigger = document.querySelector(`#${el.getAttribute('aria-labledby')}`)!;
        trigger.setAttribute('aria-expanded', 'true');
        trigger.classList.add('uvc-accordion-trigger--open');
      }
    })

    this.ready = true;
    return
  }

  call(e: React.MouseEvent<HTMLButtonElement>) {
    if (!this.ready) {
      throw new Error('Component is not initialized.')
    }

    const parent = document.querySelector(this.parent)!;

    const self = (e.target as HTMLElement).closest('.uvc-accordion-trigger')!;
    const content = document.querySelector(`#${self.getAttribute('aria-controls')}`)!;
    const isOpened = !self.classList.contains('uvc-accordion-trigger--open');
    const triggers = parent.querySelectorAll('.uvc-accordion-trigger');
    const contents = parent.querySelectorAll('.uvc-accordion-content');

    if (isOpened) {
      if (this.singleOpen) {
        triggers.forEach(el => {
          el.classList.remove('uvc-accordion-trigger--open');
          content.classList.remove('uvc-accordion-content--open');
          content.setAttribute('style', 'max-height: 0; padding-top: 0; padding-bottom: 0');

          el.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');
        })

        contents.forEach(el => {
          el.classList.remove('uvc-accordion-content--open');
          el.setAttribute('style', 'max-height: 0; padding-top: 0; padding-bottom: 0');
          el.setAttribute('aria-hidden', 'true');
        })
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

export class Popup {
  private connector: string;
  private ready: boolean;

  constructor(props: IPopupProps) {
    this.connector = props.connector;
    this.ready = false;
  }

  init() {
    const connector = Array.from(document.querySelectorAll(`.${this.connector}`));
    const trigger = connector.find(el => el.classList.contains('uvc-popup-trigger'));
    const dialog = connector.find(el => el.classList.contains('uvc-popup-dialog'));
    const closes = document.querySelectorAll('.uvc-popup-close');
    const layer = document.querySelector('.uvc-popup-layer');

    if (this.ready) {
      return console.error('Component is already initialized.')
    }

    if (!trigger || !dialog || !layer || !closes) {
      throw new Error('Trigger or dialog or layer or closes are not found')
    }

    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-label', 'Open the popup');

    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-hidden', 'true');
    dialog.setAttribute('aria-modal', 'true');

    layer.setAttribute('aria-hidden', 'true');

    closes.forEach(el => {
      el.setAttribute('tabindex', '0')
      el.setAttribute('aria-label', 'Close the popup')
    });
  }

  call(e: React.MouseEvent<HTMLButtonElement>) {
    const connector = Array.from(document.querySelectorAll(`.${this.connector}`));
    const trigger = connector.find(el => el.classList.contains('uvc-popup-trigger'))!;
    const dialog = connector.find(el => el.classList.contains('uvc-popup-dialog'))!;
    const layer = document.querySelector('.uvc-popup-layer')!;

    layer.classList.add('uvc-popup-layer--open');
    dialog.classList.add('uvc-popup-dialog--open');

    trigger.setAttribute('aria-label', 'Close the popup');

    dialog.setAttribute('aria-hidden', 'false');

    layer.setAttribute('aria-hidden', 'false');

    hideTabIndexes(/uvc-popup-close/gi);
    document.documentElement.setAttribute('style', 'overflow: hidden')
  }

  close() {
    const dialogs = document.querySelectorAll('.uvc-popup-dialog');
    const layer = document.querySelector('.uvc-popup-layer')!;

    layer.classList.remove('uvc-popup-layer--open');
    dialogs.forEach(el => {
      el.classList.remove('uvc-popup-dialog--open');
      el.setAttribute('aria-hidden', 'true');
    })

    returnTabIndexes();
    document.documentElement.setAttribute('style', 'overflow: visible')
  }
}

export class Burger {
  private general: string
  private ready: boolean;

  constructor(props: IBurgerProps) {
    this.general = props.generalClass;

    this.ready = false;
  }

  init() {
    if (this.ready) {
      return console.error('Burger is already initialized.')
    }

    const general = document.querySelectorAll(`.${this.general}`);

    if (!general) {
      throw new Error(`Elements with general class (${this.general}) is not found.`)
    }

    const trigger = Array.from(general).find(el => el.classList.contains('uvc-burger-trigger'));
    const menu = Array.from(general).find(el => el.classList.contains('uvc-burger-menu'));

    if (!trigger || !menu) {
      throw new Error(`Trigger or menu with general class (${this.general}) are not found.`)
    }

    trigger.setAttribute('id', `uvc-burger-triggerID--${this.general}`);
    menu.setAttribute('id', `uvc-burger-menuID--${this.general}`);

    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-label', 'Open the burger menu.');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', menu.getAttribute('id')!);

    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-hidden', 'true');

    this.ready = true;
  }

  call(e: React.MouseEvent<HTMLButtonElement>) {
    const self = (e.target as HTMLElement).closest('.uvc-burger-trigger')!;
    const menu = Array.from(document.querySelectorAll(`.${this.general}`)).find(el => el.classList.contains('uvc-burger-menu'))!;
    const isOpened = !menu.classList.contains(`${this.general}-menu--open`);

    if (isOpened) {
      hideTabIndexes(/uvc-burger-trigger/gi);
      document.documentElement.setAttribute('style', 'overflow: hidden')

      self.setAttribute('aria-label', 'Close the burger menu.')
      self.setAttribute('aria-expanded', 'true')
      menu.setAttribute('aira-hidden', 'false')

      self.classList.add(`${this.general}-trigger--open`);
      menu.classList.add(`${this.general}-menu--open`);
    } else {
      returnTabIndexes();
      document.documentElement.setAttribute('style', 'overflow: visible')

      self.setAttribute('aria-label', 'Open the burger menu.');
      self.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');

      self.classList.remove(`${this.general}-trigger--open`);
      menu.classList.remove(`${this.general}-menu--open`);
    }
  }
}

export class Tabs {

}