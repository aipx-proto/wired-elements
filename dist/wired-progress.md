# wired-progress
Hand-drawn sketchy progress bar web component.

## Usage

Import module in your code:

```javascript
import { WiredProgress } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-progress value="25"></wired-progress>
<wired-progress value="10" min="5" max="15"></wired-progress>
```

## Properties

**value** - Numeric value of the progress.

**min** - Minimum value. Default is 0.

**max** - Maximum value. Default is 100.

**percentage** - Boolean indicating if the label should show a % symbol.

## Custom CSS Variables

**--wired-progress-label-color** Color of the label. Default is *black*.

**--wired-progress-label-background** Backgroind of label. Default is *rgba(255,255,255,0.9)*.

**--wired-progress-font-size** Font size of the label. Default is *14px*

**--wired-progress-color** Color of the progress bar. Default is *rgba(0, 0, 200, 0.8)*.