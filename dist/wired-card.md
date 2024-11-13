# wired-card

wired-card is a container for other web elements - with a hand-drawn, wireframe like, look.

## Usage

Import module in your code:

```javascript
import { WiredCard } from 'wired-elements';
```

Use it in your HTML:
```html
<wired-card>
  <p>Elevation: 1</p>
</wired-card>

<wired-card elevation="3">
  <p>Elevation: 3</p>
</wired-card>
```

## Properties

**elevation** - Numerical number between 1-5 (inclusive) - sets the elevation of the card. Default is 1.

**fill** - A color to fill the background of the card in a sketchy format

## Methods

**requestUpdate()** - When dynamically adding content to the card, call this method to recompute the boundaries of the card.