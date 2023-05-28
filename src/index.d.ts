import React, { FormEvent } from 'react';
import { IParams as IBurgerParams } from './burger.js';
import { IParams as IPopupParams } from './popup.js';
import { IParams as IAccordionParams } from './accordion.js';
import { IProps as IBlImageProps } from './blimage.js';
import { IFormValidatorParams, TThrow } from './formValidator.js';

export declare class Burger {
  private _ready: boolean;
  readonly instanceID: string;
  readonly triggerQuery: string;
  readonly menuId: string;

  constructor(params: IBurgerParams)

  init(): void;
  toggle(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare class Popup {
  private _ready: boolean;
  readonly instanceID: string;
  readonly id: string

  constructor(params: IPopupParams)

  init(): void;
  open(): void;
  close(e: React.MouseEvent<HTMLElement>): void;

}

export declare class Accordion {
  private parent: string;
  private initialOpen?: string | null;
  private singleOpen?: boolean;

  private ready: boolean;
  private instanceID: string;

  constructor(params: IAccordionParams)

  init(): void;
  toggle(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare class FormValidator {
  private _ready: boolean;
  readonly instanceID: string;
  readonly throw: TThrow;
  readonly formId: string;

  constructor(params: IFormValidatorParams)

  init(): void;
  validate(e: FormEvent): void;
}

export declare const BlImage: React.FC<IBlImageProps>;