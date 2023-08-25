# Tabs
Tabs component.

## Usage
Import tabs and create instance.
```tsx
import React, {useEffect} from 'react';
import {Tabs} from 'react-uvc';
import 'react-uvc/dist/css/tabs.css'

const instance = new Tbs({
  parentId: 'uvc-tabs',
  defaultActive: 2
})

const Component: React.FC = () => {
  useEffect(() => {
    instance.init()
  }, [])

  return (
    <>
      <div className="uvc-tabs" id="uvc-tabs">
        <div className="uvc-tabs-actions" role="tablist">
          <button className="uvc-tabs-tab_action" role="tab" onClick={e => instance.toggle(e)}>
            <p>Tab #1</p>
          </button>
        </div>

        <div className="uvc-tabs-contents">
          <div className="uvc-tabs-tab_content" role="tabpanel">
            <p>Panel #1</p>
          </div>
        </div>
      </div>
    </>
  );
}
```

## Examples
Default component implementation.
```tsx
import React, {useEffect} from 'react';
import {Tabs} from 'react-uvc';
import 'react-uvc/dist/css/tabs.css'

const instance = new Tbs({
  parentId: 'uvc-tabs',
  defaultActive: 2
})

const Component: React.FC = () => {
  useEffect(() => {
    instance.init()
  }, [])

  return (
    <>
      <div className="uvc-tabs" id="uvc-tabs">
        <div className="uvc-tabs-actions" role="tablist">
          <button className="uvc-tabs-tab_action" role="tab" onClick={e => instance.toggle(e)}>
            <p>Tab #1</p>
          </button>
        </div>

        <div className="uvc-tabs-contents">
          <div className="uvc-tabs-tab_content" role="tabpanel">
            <p>Panel #1</p>
          </div>
        </div>
      </div>
    </>
  );
}
```

## API
```ts
interface ITabsParams {
  parentId: string,
  defaultActive?: string | number,
}
```

```scss
.uvc-tabs-tab_action // Tab action
.uvc-tabs-tab_action--active // Active action

.uvc-tabs-tab_content // Tab content
.uvc-tabs-tab_content--active // Active content

.uvc-tabs // Parent
.uvc-tabs-actions // Parent of tabs actions
.uvc-tabs-contents // Parent of tabs contents
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 