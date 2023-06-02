# UVC-Burger
Burger-menu component.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { Burger } from 'react-uvc';
import 'react-uvc/styles/burger.css'; // Optional

const Component: React.FC = () => {
  const instance = new Burger({
    triggerQuery: '.uvc-burger-trigger',
    menuId: 'uvc-test-burger_MENU-ID'
  });

  useEffect(() => {
    instance.init();
  }, [])
}
```

Create layout.
```tsx
<>
  <button className="uvc-burger-trigger" onClick={e => instance.toggle(e)}>
    TRIGGER
  </button>

  <div id="uvc-test-burger_MENU-ID" className="uvc-burger-menu">
    <button className="uvc-burger-trigger" onClick={e => instance.toggle(e)}>
      TRIGGER
    </button>
  </div>
</>
```

## Examples
Default component implementation.
```tsx
import React, { useEffect } from "react";
import burger from './API/burger';
import './API/styles/burger.scss'

const Burger: React.FC = (props) => {
  const instance = new burger({
    triggerQuery: '.uvc-burger-trigger-MYOWNCLASS',
    menuId: 'uvc-burger-trigger-MYOWNID'
  });

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.toggle(e)}>
        TRIGGER
      </button>

      <div className="uvc-burger-menu bg-red-400" id="uvc-burger-trigger-MYOWNID">
        <button className="uvc-burger-trigger uvc-burger-trigger-MYOWNCLASS" onClick={e => instance.toggle(e)}>
          TRIGGER
        </button>
      </div>
    </>
  );
}
```

## API
```ts
interface IBurgerProps {
  triggerQuery: string,
  menuId: string
}

const instance = new Burger({}: IBurgerProps);

instance.init() // One time initialization.
instance.toggle(e: React.MouseEvent<HTMLButtonElement>) // Change burger visibility.
```

```scss
.uvc-burger-menu // Menu class
.uvc-burger-trigger // Trigger class

.uvc-burger-menu--active // Active class for menu
.uvc-burger-trigger--active // Active class for trigger
```

## Get it now
```
npm i react-uvc
```

<hr>
License: MIT <br>
unniiiverse 2023