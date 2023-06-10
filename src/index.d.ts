import React from 'react';

export declare class Accordion {
  private parent;
  private initialOpen?;
  private singleOpen?;
  private ready;
  private instanceID;
  constructor(props: {
    parent: string;
    initialOpen?: string | null;
    singleOpen?: boolean;
  });
  init(): void;
  toggle(e: React.MouseEvent<HTMLButtonElement>): void;
}

export declare const BlImage: React.FC<{
  src: string;
  initialHash?: string;
}>;
export default BlImage;