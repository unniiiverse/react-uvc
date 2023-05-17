import { IParams as IBurgerParams } from './burger.js';
import { IParams as IAccordionParams } from './accordion.js';

declare module 'react-uvc' {
  export class Burger {
    constructor(): IBurgerParams

    init();
    call(e: React.MouseEvent<HTMLButtonElement>);
  }

  export class Accordion {
    constructor(): IAccordionParams

    init();
    call(e: React.MouseEvent<HTMLButtonElement>);
  }
}