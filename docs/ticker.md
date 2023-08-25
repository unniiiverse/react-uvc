# Ticker
Infinite ticker.

## Usage
Import ticker and initialize it.
```tsx
import React, { useEffect, useRef, useState } from "react";
import { Ticker } from 'react-uvc'

import 'react-uvc/dist/css/ticker.css' // Required styles

const Component: React.FC = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [instance] = useState(new Ticker({ parentId: 'uvc-ticker', duration: 10000, parentRef: ref }))

  useEffect(() => {
    instance.init();
  }, [])


  return (
    <>
      <div className="uvc-ticker" id="uvc-ticker" ref={ref}>
        <div className="uvc-ticker-container">
          <div className="uvc-ticker-collection">
            <span className="uvc-ticker-item">ELEM</span>
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
import React, { useEffect, useRef, useState } from "react";
import { Ticker } from 'react-uvc'

import 'react-uvc/dist/css/ticker.css' // Required styles

const Component: React.FC = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [instance] = useState(new Ticker({ parentId: 'uvc-ticker', duration: 10000, parentRef: ref }))

  useEffect(() => {
    instance.init();
  }, [])


  return (
    <>
      <div className="uvc-ticker" id="uvc-ticker" ref={ref}>
        <div className="uvc-ticker-container">
          <div className="uvc-ticker-collection">
            <span className="uvc-ticker-item">ELEM - 1</span>
            <span className="uvc-ticker-item">ELEM - 2</span>
            <span className="uvc-ticker-item">ELEM - 3</span>
            <span className="uvc-ticker-item">ELEM - 4</span>
            <span className="uvc-ticker-item">ELEM - 5</span>
            <span className="uvc-ticker-item">ELEM - 6</span>
            <span className="uvc-ticker-item">ELEM - 7</span>
            <span className="uvc-ticker-item">ELEM - 8</span>
            <span className="uvc-ticker-item">ELEM - 9</span>
          </div>
        </div>
      </div>
    </>
  );
}
```

## API
```ts
interface ITickerProps {
  parentId: string,
  duration: number, // one collection from one side of viewport to other.
  parentRef: React.RefObject<HTMLDivElement>
}

const instance = new Ticker({}: ITickerProps)
```

```scss
.uvc-ticker // parent
.uvc-ticker-container // collections container
.uvc-ticker-collection // collection
.uvc-ticker-item // item
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 