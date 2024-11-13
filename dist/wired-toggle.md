# wired-toggle
Hand-drawn sketchy toggle button / switch.

## Usage

Import module in your code:

```javascript
import { WiredToggle } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-toggle></wired-toggle>
<wired-toggle checked></wired-toggle>
```

## Properties

**checked** - Checked state (boolean). 

**disabled** - disables the toggle button. Default value is false. 

## Custom CSS Variables

**--wired-toggle-off-color** Color of the knob when in off (false) position. Default value is *gray*.

**--wired-toggle-on-color** Color of the knob when in on (true) position. Default value is *rgb(63, 81, 181)*.

## Events
**change** event fired when state of the toggle is changed by the user.