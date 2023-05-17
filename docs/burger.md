# UVC-Burger
Burger-menu component. On open change all tabindexes (except triggers) to -1 (Ignores tabindex nodes with .uvc-ti-ignore). Set overflow in html tag to hidden.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { Burger } from 'react-uvc';

const Component: React.FC = () => {
  const instance = new Burger({
    triggerQuery: 'uvc-burger-trigger',
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

  <div id="uvc-test-burger_MENU-ID">
    <button className="uvc-burger-trigger" onClick={e => instance.toggle(e)}>
      TRIGGER
    </button>
  </div>
</>
```

## API
```ts
const instance = new Burger({
  triggerQuery: string,
  menuId: string
});

instance.init() // One time initialization.
instance.toggle(e: React.MouseEvent<HTMLButtonElement>) // Change burger visibility.
```

```scss
// Do not change these classes in layout. 
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