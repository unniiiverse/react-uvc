# Popup
Pretty popup/modal component.

## Usage
Create component implementation.
```tsx
import React, { useEffect } from 'react';
import { Popup } from 'react-uvc';
import 'react-uvc/styles/popup.css'; // Optional styles.

const instance = new popup({
  id: 'uvc-popup-DIALOGID'
});

const Component: React.FC = () => {
  useEffect(() => {
    instance.init();
  }, [])

  return (
    <>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-DIALOGID" onClick={() => instance.open()}>
        TRIGGER
      </button>

      <div className="uvc-popup-close" id="uvc-popup-layer" onClick={() => instance.close()}>
        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-DIALOGID">
          DIALOG #0
          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-DIALOGID" onClick={() => instance.close()}>
            TRIGGER
          </button>
        </div>
      </div>
    </>
  )
}
```

## Examples
User actions will be supressed. Popup will be open by default.
```tsx
import React, { useEffect } from 'react';
import { Popup } from 'react-uvc';
import 'react-uvc/styles/popup.css';

const instance = new popup({
  id: 'uvc-popup-dialog'
});

const Component: React.FC = () => {
  useEffect(() => {
    instance.init();
  }, [])

  instance.open(true);
  instance.supressUserControl = true;

  return (
    <>
      <button className="uvc-popup-trigger" data-uvc-popup-openid="uvc-popup-dialog" onClick={() => instance.open()}>
        TRIGGER
      </button>

      <div className="uvc-popup-close" id="uvc-popup-layer" onClick={() => instance.close()}>
        <div className="uvc-popup-dialog" data-uvc-popup-id="uvc-popup-dialog">
          DIALOG #0

          <button className="uvc-popup-trigger uvc-popup-close" data-uvc-popup-openid="uvc-popup-dialog" onClick={() => instance.close()}>
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
instance.open(synthetic?: boolean) // Open the popup.
instance.close(synthetic?: boolean) // Close the popup.

instance.isOpen // Is menu currently open
instance.supressUserControl // Supress opening/closing popup by user. Work only if triggers have synthetic: true
```

```html
data-uvc-popup-openId - Id that opens this trigger.
data-uvc-popup-id - Dialog id.
```

```scss
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