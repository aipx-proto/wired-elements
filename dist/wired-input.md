# wired-input
Hand-drawn sketchy text input web component.

## Usage

Import module in your code:

```javascript
import { WiredInput } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-input></wired-input>
<wired-input placeholder="Enter name"></wired-input>
<wired-input type="password" placeholder="Password"></wired-input>
<wired-input placeholder="Disabled" disabled></wired-input>
```

## Properties

**placeholder** - Placeholder text for the input.

**disabled** - disables the control

**type** - Input type e.g. password

**value** - Value of the text.

## Events

Fires all events a standard `<input>` element fires.