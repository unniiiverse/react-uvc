# Functions in UVC

+ [Show/Hide tab indexes](#tabindexes)

## Tabindexes
In UVC uses to split layers (such as burger menu or popup layer) with other buttons that can triggered by tab. 

### Usage
```ts
hideTabIndexes(ignore: RegExp)
/*
  Accepts regexp. Hides all tabindexes except regexp.
  Hided tabindex will equal -1.
  Previous value will added to data-tabindexPrev.
*/

showTabIndexes()
/*
  Returns all tabindexes to previous value.
  Delete data-tabindexPrev attribute.
*/
```