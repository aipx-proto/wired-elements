# wired-listbox

A listbox control with Wired hand-drawn styling. The selected item is highlighted. Can be vertical (default) or horizontal.

## Usage

Import module in your code:

```javascript
import { WiredListbox } from 'wired-elements';
```

Use it in your HTML:
```html
 <wired-listbox id="combo" selected="two">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-listbox>

<wired-listbox horizontal selected="two"
     style="--wired-item-selected-color: darkred; --wired-item-selected-bg: pink;">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-listbox>
```

## Properties

**horizontal** - Boolean indicated if the items are layed out horizontally. Default is false.

**selected** - Value of the selected item. 

## Custom CSS Variables

**--wired-item-selected-bg** Background color of the selected item.

**--wired-item-selected-color** Text color of the selected item.

## Events
**selected** event fired when an item is selected by the user.