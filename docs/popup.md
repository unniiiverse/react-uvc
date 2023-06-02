# UVC-Popup
Popup component.

## Usage
Import and initialize component.
```tsx
import React, { useEffect } from 'react';
import { Popup } from 'react-uvc';
import 'react-uvc/styles/popup.css'; // Optional

const Component: React.FC = () => {
  const instance = new popup({
    id: 'uvc-popup-DIALOGID'
  });

  useEffect(() => {
    instance.init();
  }, [])
}
```

Create layout.
```tsx
<>
  <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-DIALOGID" onClick={e => instance.open()}>
    TRIGGER
  </button>

  <div className="uvc-popup-close" id="uvc-popup-layer" onClick={e => instance.close(e)}>
    <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-DIALOGID">
      DIALOG #0
      <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-DIALOGID" onClick={e => instance.close(e)}>
        TRIGGER
      </button>
    </div>
  </div>
</>
```

## Examples
Default popup implementation.
```tsx
import React, { useEffect } from 'react';
import { Popup } from 'react-uvc';
import 'react-uvc/styles/popup.css';

const Component: React.FC = () => {
  const instance = new popup({
    id: 'uvc-popup-dialog-0'
  });

  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={e => instance.open()}>
        TRIGGER
      </button>

      <div className="uvc-popup-close" id="uvc-popup-layer" onClick={e => instance.close(e)}>
        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog-0">
          DIALOG #0

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog-0" onClick={e => instance.close(e)}>
            TRIGGER
          </button>
        </div>
      </div>
    </>
  );
}
```

## API
```ts
interface IPopupProps {
  id: string
}

const instance = new popup({}: IPopupProps);

instance.init() // One time initialization.
instance.open() // Open the popup.
instance.close(e: React.MouseEvent<HTMLButtonElement>) // Close the popup.
```

```html
data-uvc-popup-openId - Id that opens this trigger.
data-uvc-popup-id - Dialog id.
```

```scss
// Do not change these classes in layout. 
#uvc-popup-layer // Popup layer
.uvc-popup-trigger // Popup trigger.
.uvc-popup-dialog // Popup dialog.
.uvc-popup-close // Popup close.

.uvc-popup-trigger--active // Active popup trigger.
.uvc-popup-dialog--active // Active popup dialog.
.uvc-popup-layer--active // Active popup layer
```

## Get it now
```
npm i react-uvc
```

## Get it now

<hr>

License: MIT <br>
unniiiverse 2023 