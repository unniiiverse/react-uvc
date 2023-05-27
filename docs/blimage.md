# UVC-BLImage
Blurhash image component.

## Usage
```tsx
import React from 'react';
import { BlImage } from 'react-uvc';

const Component: React.FC = () => {
  return (
    // Relative position is required.
    <div className="relative">
      <BlImage src="PICTURE_URI" />
    </div>
  )
}
```

## Examples
```tsx
<div className="BlImage">
  <div className="relative w-[300px] h-[300px]">
    <BlImage src="https://images.unsplash.com/photo-1568156341007-e87ac3d64580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
  </div>
</div>
```

## API
```scss
.blurhash-image // Image tag.
.blurhash-hash // Hash or smooth preview.
```

## Get it now
```
npm i react-uvc
```

<hr>

License: MIT <br>
unniiiverse 2023 