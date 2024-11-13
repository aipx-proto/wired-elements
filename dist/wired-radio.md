# wired-radio
Hand-drawn sketchy radio button web component. Usually used with `wired-radio-group`.

## Usage

Import module in your code:

```javascript
import { WiredRadio } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-radio>Radio One</wired-radio>
<wired-radio checked>Radio Two</wired-radio>
<wired-radio disabled>Disabled Radio</wired-radio>
```

## Properties

**checked** - Checked state (boolean) of the radio button. Default is false.

**disabled** - disables the radio button. Default value is false. 

**text** - Text associated with the radio button.

**name** - A name associated with the radio inside a radio-group.

## Custom CSS Variables

**--wired-radio-icon-color** Color of the radio button. Default is *currentColor*.

## Events
**change** - event fired when state of the radio changes, i.e. the user checks/unchecks the radio.