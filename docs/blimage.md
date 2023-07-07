# Blurred image
Blurred hash image preview. Smoothly dissapears when image will load.

## Usage
Create component implementation.
```tsx
import React from 'react';
import { BlImage } from 'react-uvc';
import 'react-uvc/dist/css/blimage.css' // Required styles.

const Component: React.FC = () => {
  return (
    // Relative position and inline-block displation are important.
    <div className="relative inline-block">
      <BlImage src="PICTURE_URI" />
    </div>
  )
}
```


## Examples
Default component implementation.
```tsx
import React from 'react';
import { BlImage } from 'react-uvc';
import 'react-uvc/dist/css/blimage.css' // Required styles.

const Component: React.FC = () => {
  return (
    <div className="relative inline-block w-[300px] h-[300px]">
      <BlImage src="https://images.unsplash.com/photo-1568156341007-e87ac3d64580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
    </div>
  )
}
```

## API
```scss
.blurhash-image // Image tag.
.blurhash-hash // Hash or smooth preview.
```

```tsx
interface IBlImageProps {
  src: string, // Image source.
  initialHash?: string, // Set initial image hash (preview).
  alt?: string // Alt for image
  className?: string // Class for image
}
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 