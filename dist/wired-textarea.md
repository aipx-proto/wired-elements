# wired-textarea
Hand-drawn sketchy multi-line text input web component. 

## Usage

Import module in your code:

```javascript
import { WiredTextarea } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-textarea placeholder="Enter text" rows="6"></wired-textarea>
```

## Properties

**rows** - Initial number of rows in textarea.

**maxrows** - Max number of rows textarea grows to. Then scrollbars appear. 

**value** - Text value.

**disabled** - Disabled the control.

**placeholder** - Placeholder text for the input.

## Events

Fires all the events the native `<textarea>` element fires

![wired textarea](https://wiredjs.github.io/wired-elements/images/textarea.png)