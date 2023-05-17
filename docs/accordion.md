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
    <button className="uvc-accordion-trigger" onClick={e => instance.call(e)}>
      Trigger for #1
    </button>
    <div className="uvc-accordion-content">
      Content #1
    </div>

    <button className="uvc-accordion-trigger" onClick={e => instance.call(e)}>
      Trigger for #2
    </button>
    <div className="uvc-accordion-content">
      Content #2
    </div>
  <div>
</>
```

## API
```ts
const instance = new Accordion({
  parent: string,
  initialOpen: null | string,
  singleOpen: boolean,
});
/*
  parent = parent class for accordion triggers and contents. 1 trigger = 1 content. Links setting from top to bottom.
  initialOpen = if not null will match initially opened accordion.
  singleOpen = open one accordion item per time. Previous accordion item will close after opening new.
*/

instance.init() // One time initialization.
instance.call(e: React.MouseEvent<HTMLButtonElement>) // Open/close accordion item.
```

```scss
// Do not change these classes in layout. 
.uvc-accordion // Default parent
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