# Accordion
Simple accordion component with smooth open animation.

## Usage
Import and implement component.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/dist/css/accordion.css'; // Required styles.

const instance = new Accordion({
  parent: '.uvc-accordion',
  initialOpen: null,
  singleOpen: false,
});

const Component: React.FC = () => {
  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <div className="uvc-accordion">
        <button className="uvc-accordion-trigger" onClick={e => instance.toggle(e)}>
          Trigger for #1
        </button>
        <div className="uvc-accordion-content">
          Content #1
        </div>

        <div>
          <button className="uvc-accordion-trigger" onClick={e => instance.toggle(e)}>
            Trigger for #2
          </button>
          <div className="uvc-accordion-content">
            Content #2
          </div>
        </div>
      <div>
    </>
  )
}
```

## Examples
Single trigger opens single content. Only one accordion will open
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/dist/css/accordion.css';

const instance = new Accordion({
  parent: '.uvc-accordion-ex2',
  singleOpen: true // Prop for only one accordion.
})

const Component: React.FC = (props) => {
  useEffect(() => {
    instance.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #2. Single trigger opens single content. One opened accordion per time.</h2>
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
      </div>
    </div>
  );
}
```

Single trigger opens single content. Accordion with one class will opened by default.
```tsx
import React, { useEffect } from 'react';
import { Accordion } from 'react-uvc';
import 'react-uvc/dist/css/accordion.css';

const instance = new accordion({
  parent: '.uvc-accordion-ex3',
  defaultOpen: 'uvc-accordion-defaultOpen'
})

const Component: React.FC = (props) => {
  useEffect(() => {
    instance.init();
  }, [])

  return (
    <div className="Accordion">
      <h2 className="font-bold text-[24px]">Example #3. Single trigger opens single content. Accordion with one class will opened initially</h2>
      <div className="uvc-accordion uvc-accordion-ex3">
        <button className="uvc-accordion-trigger uvc-accordion-defaultOpen" onClick={e => instance.toggle(e)}>
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
      </div>
    </div>
  );
}
```

## API
```ts
interface IAccordionProps {
  parent: string, // Parent query
  defaultOpen?: string, // Default opened accordion query
  singleOpen?: boolean, // Will only one accordion be open
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