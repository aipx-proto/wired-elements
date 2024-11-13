# wired-icon-button

This is a hand-drawn sketchy round button with an image placed at the center. Image could also be in icon, like [@material/mwc-icon](https://www.npmjs.com/package/@material/mwc-icon).

## Usage

Import module in your code:

```javascript
import { WiredIconButton } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-icon-button>
  <mwc-icon>favorite</mwc-icon>
</wired-icon-button>
<wired-icon-button class="red">
  <mwc-icon>favorite</mwc-icon>
</wired-icon-button>
```

## Properties

**disabled** - disables the button. Default value is false. 

## Custom CSS Variables

**--wired-icon-size** Numeric size of the icon. Default is 24 (px).

**--wired-icon-bg-color** Background color.

## Events

**click** - When button is clicked/submitted