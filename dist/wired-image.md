# wired-image

wired-image displays an image and draws a sketchy border around it. 

## Usage

Import module in your code:

```javascript
import { WiredImage } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-image src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
<wired-image elevation="4" src="https://www.gstatic.com/webp/gallery/1.sm.jpg"></wired-image>
```

## Properties

**src** - URL of the image.

**elevation** - Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1.