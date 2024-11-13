# wired-link
Hand-drawn sketchy Anchor/Link web component.

## Usage

Import module in your code:

```javascript
import { WiredLink } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-link href="/more.html">Learn more</wired-link>
<wired-link elevation="3" href="/more.html" target="_blank">Elevation</wired-link>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the sketchy link underline a height. Default value is 1.

**href** - URL of the page to link to

**target** - Similar to the target property of `<a>`, the target window of this link.

## Custom CSS Properties

**--wired-link-decoration-color** - Color of the sketchy underline of the link. Default value is blue. Foreground color is set by setting the **color** css property.