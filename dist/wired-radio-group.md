# wired-radio-group
Allows user to select at most one radio button from a set. Works with `wired-radio`.

## Usage

Import module in your code:

```javascript
import { WiredRadioGroup, WiredRadio } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-radio-group selected="two">
  <wired-radio name="one">One</wired-radio>
  <wired-radio name="two">Two</wired-radio>
  <wired-radio name="three">Three</wired-radio>
  <wired-radio name="four">Four</wired-radio>
</wired-radio-group>
```

## Properties

**selected** - Named of the selected radio button.

## Events

**selected** Event fired when user changes selection