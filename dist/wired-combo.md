# wired-combo

Combobox control - similar to a native browser select element; with a hand-drawn, wireframe like, style.

## Usage

```html
<wired-combo id="combo" selected="two">
  <wired-item value="one">Number One</wired-item>
  <wired-item value="two">Number Two</wired-item>
  <wired-item value="three">Number Three</wired-item>
</wired-combo>
```

## Properties

**disabled** - disables the combo selector. Default value is false. 

**selected** - Value of the selected wired-item. 

## Custom CSS Variables

**--wired-combo-popup-bg** Background color of the dropdown when combo selector is open.

**--wired-item-selected-bg** Background color of the selected item

## Events
**selected** event fired when an item is selected by the user.