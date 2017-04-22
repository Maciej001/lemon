# Code Camps with styled-grid

## Styled Grid
Simple grid system based on styled-components and flex-box model

###
`Theme.js` contains width of `xs, sm, md, lg` container sizes
and `gutterWidth`
`outerWidth` - padding on left and right side of the Fluid Container

### FluidContainer
Wrapper, width: 100%;


### Container
Wrapper with dynamically changed width

### Row
Row includes Cells. Cells can flow inside Row in following directions:
`row` - default
`column` - Boolean
`column-reverse` - Boolean
`row-reverse` - Boolean

### Cell
Building block of the grid. Can take different x/12 width of the grid on different screen sizes.
`xs` - width for smallest screen
`sm` - width for small screen
`md` - width for medium  screen
`lg` - width for large screen
`xsOffset, smOffset, mdOffset, lgOffset` - offset in columns from the beginning of the row along main-axis

`start, center, end, between, around` - decide how elements align along main-axis
`top, middle, bottom` - decide how elements align along cross-axis
