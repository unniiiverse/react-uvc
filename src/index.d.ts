import { IParams as IBurgerParams } from './burger.js';
import { IParams as IPopupParams } from './popup.js';
import { IParams as IAccordionParams } from './accordion.js';

export declare class Burger {
  private _ready: boolean;
  readonly instanceID: string;
  readonly triggerQuery: string;
  readonly menuId: string;

  constructor(params: IBurgerParams)

  init(): void;
  // @ts-expect-error React lib is not installed here but uses its types
  toggle(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare class Popup {
  private _ready: boolean;
  readonly instanceID: string;
  readonly id: string

  constructor(params: IPopupParams)

  init(): void;
  open(): void;
  // @ts-expect-error React lib is not installed here but uses its types
  close(e: React.MouseEvent<HTMLElement>): void;

}

export declare class Accordion {
  private parent: string;
  private initialOpen?: string | null;
  private singleOpen?: boolean;

  private ready: boolean;
  private instanceID: string

  constructor(params: IAccordionParams)

  init(): void;
  // @ts-expect-error React lib is not installed here but uses its types
  toggle(e: React.MouseEvent<HTMLButtonElement>): void;
}