# UVC-Burger
Aria-Accesible burger component.

## Usage
Create burger instance. Class in burger constructor must be in both elements (trigger & menu).
```ts
const BurgerInstance = new Burger({ generalClass: 'GENERAL CLASS' })
```

Initialize burger instance.
```ts
useEffect(() => {
  BurgerInstance.init();
}, [])
```

Create layout.
```tsx
  <button className="uvc-burger-trigger GENERAL" onClick={e => BurgerInstance.call(e)}>
    TRIGGER
  </button>

  <div className="uvc-burger-menu GENERAL">
    <button className="uvc-burger-trigger GENERAL" onClick={e => BurgerInstance.call(e)}>
      TRIGGER
    </button>
    CONTENT
  </div>
```

## Examples
[Go to examples page](https://unniiiverse.github.io/uvc/burger)

## API
```ts
new Burger({ generalClass: 'GENERAL CLASS' })

// generalClass: string - general class for both elements (trigger/menu)
```

<hr>

License: MIT <br>
unniiiverse 2023