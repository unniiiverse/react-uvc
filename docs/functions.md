# Functions in UVC

+ [Show/Hide tab indexes](#tabindexes)

## Tabindexes
In UVC use to split layers (such as burger menu or popup layer) with other elements with tabindex that can triggered by tab. 

### Usage
```ts
hideTabIndexes(ignore: RegExp)
/*
  Accepts regexp. Hides all tabindexes except regexp.
  Previous value will add to data-tabindexPrev.
*/

showTabIndexes()
/*
  Returns all tabindexes to their previous value.
  Delete data-tabindexPrev attribute.
*/
```