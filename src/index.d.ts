import Burger, { IParams as IBurgerParams } from './burger.js';
import Accordion, { IParams as IAccordionParams } from './accordion.js';
import Popup, { IParams as IPopupParams } from './popup.js';

export declare class Burger {
  readonly instanceID: number;
  readonly triggerQuery: string;
  readonly menuId: string;

  constructor(params: IBurgerParams);
  init(): void;
  call(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare class Accordion {
  constructor(props: IAccordionParams);
  init(): void;
  call(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare class Popup {
  constructor(props: IPopupParams);
  init(): void;
  open(): void;
  close(e: React.MouseEvent<HTMLElement>): void;
}

export { Accordion, Burger, Popup }