# wired-fab
Hand-drawn sketchy Floating Action Button (FAB)

## Usage

Import module in your code:

```javascript
import { WiredFab } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-fab id="btn1">
  <mwc-icon>favorite</mwc-icon>
</wired-fab>
<wired-fab id="btn2" class="red">
  <mwc-icon>close</mwc-icon>
</wired-fab>
```

## Properties

**disabled** - disables the button. Default value is false. 

## Custom CSS Properties

**--wired-fab-bg-color** - Background color of the fab. Default value is #018786. Foreground color is set by setting the **color** css property.

## Events

**click** - When button is clicked/submitted