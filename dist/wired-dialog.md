# wired-dialog
Hand-drawn sketchy Dialog web component.

## Usage

```html
<wired-dialog>
  <p>
    Dialog content here
  </p>
  <div style="text-align: right; padding: 30px 16px 16px;">
    <wired-button id="closeDialog">Close dialog</wired-button>
  </div>
</wired-dialog>
```

## Properties

**elevation** - Number between  1 and 5 (inclusive) that gives the sketchy link underline a height. Default value is 1.

**open** - Boolean value telling dialog if it's showing or not.

## Custom CSS Properties

**--wired-dialog-z-index** - Sets the `z-index` of the dialog