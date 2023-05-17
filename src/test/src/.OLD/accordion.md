# UVC-Accordion
Aria-Accesible accordion component.

## Usage
Create accordion instance.
```ts
const AccordionInstance = new Accordion({ parent: 'PARENT' })
```

Initialize accordion instance.
```ts
useEffect(() => {
  AccordionInstance.init();
}, [])
```

Create layout.
```tsx
<div className="uvc-accordion PARENT">
  <>
    <button className="uvc-accordion-trigger" onClick={e => AccordionInstance.call(e)}>
      Trigger for #1
    </button>

    <div className="uvc-accordion-content">
      Content #1
    </div>
  </>
</div>
```

## Examples
[Go to examples page](https://unniiiverse.github.io/uvc/accordion)

## API
```ts
new Accordion({ parent: string, singleOpen: boolean, initialOpen: string })

/*
  parent: string - class/id of parent of single accordion block.
  singleOpen: boolean - if true on opening one accordion, other will close.
  initialOpen: string - class/id of initial opened accordion. Must be with trigger/content.
*/
```

<hr>

License: MIT <br>
unniiiverse 2023