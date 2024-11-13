# wired-button
Hand-drawn sketchy Button web component.

## Usage

Import module in your code:

```javascript
import { WiredButton } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-button>Click Me</wired-button>
<wired-button disabled>Disabled</wired-button>
<wired-button elevation="3">Elevation</wired-button>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the button a sketchy height. Default value is 1.

**disabled** - disables the button. Default value is false. 

## Events

**click** - When button is clicked/submitted