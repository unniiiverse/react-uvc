# UVC-Accordion
Accordion component.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/styles/accordion.css'; // Optional

const Component: React.FC = () => {
  const instance = new Accordion({
    parent: 'uvc-accordion',
    initialOpen: null,
    singleOpen: false,
  });

  useEffect(() => {
    instance.init();
  }, [])
}
```

Create layout.
```tsx
<>
  // You can split triggers and contents in different tags in .uvc-accordion.
  <div className="uvc-accordion uvc-accordion-ex2">
    <button className="uvc-accordion-trigger" onClick={e => instance.toggle(e)}>
      Trigger for #1
    </button>
    <div className="uvc-accordion-content">
      Content #1
    </div>

    <button className="uvc-accordion-trigger" onClick={e => instance.toggle(e)}>
      Trigger for #2
    </button>
    <div className="uvc-accordion-content">
      Content #2
    </div>
  <div>
</>
```

## Examples
Default component implementation. Single trigger opens single content.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/styles/accordion.css';

const Component: React.FC = (props) => {
  const AccordionInstance1 = new accordion({ parent: '.uvc-accordion-ex1' })

  useEffect(() => {
    AccordionInstance1.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #1. Single trigger opens single content.</h2>
      <div className="uvc-accordion uvc-accordion-ex1">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance1.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>
    </div>
  );
}
```

Single trigger opens single content. One opened accordion per time.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/styles/accordion.css';

const Component: React.FC = (props) => {
  const AccordionInstance2 = new accordion({ parent: '.uvc-accordion-ex2', singleOpen: true })

  useEffect(() => {
    AccordionInstance2.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #2. Single trigger opens single content. One opened accordion per time.</h2>
      <div className="uvc-accordion uvc-accordion-ex2">
        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance2.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>
    </div>
  );
}
```

Single trigger opens single content. Accordion with one class will opened initially.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/styles/accordion.css';

const Component: React.FC = (props) => {
  const AccordionInstance3 = new accordion({ parent: '.uvc-accordion-ex3', initialOpen: 'uvc-accordion-initiallyOpened' })

  useEffect(() => {
    AccordionInstance3.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #3. Single trigger opens single content. Accordion with one class will opened initially</h2>
      <div className="uvc-accordion uvc-accordion-ex3">
        <button className="uvc-accordion-trigger uvc-accordion-initiallyOpened" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <button className="uvc-accordion-trigger" onClick={e => AccordionInstance3.call(e)}>
          Trigger for #2
        </button>
        <div className="uvc-accordion-content">
          Content #2
        </div>
      </div>
    </div>
  );
}
```

## API
```ts
interface IAccordionProps {
  parent: string, // Parent class/id
  initialOpen?: null | string, // If not null will match initially opened accordion 
  singleOpen?: boolean, // Only one accordion per time.
}

const instance = new Accordion({}: IAccordionProps);

instance.init() // One time initialization.
instance.toggle(e: React.MouseEvent<HTMLButtonElement>) // Open/close accordion item.
```

```scss
.uvc-accordion // Parent
.uvc-accordion-content // Content class
.uvc-accordion-trigger // Trigger class

.uvc-accordion-content--open // Active content class
.uvc-accordion-trigger--open // Active trigger class
```

## Get it now
```
npm i react-uvc
```

<hr>
License: MIT <br>
unniiiverse 2023