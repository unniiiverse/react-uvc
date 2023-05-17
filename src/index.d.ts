import Burger, { IParams as IBurgerParams } from './burger.js';
import Accordion, { IParams as IAccordionParams } from './accordion.js';

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

export { Accordion, Burger }