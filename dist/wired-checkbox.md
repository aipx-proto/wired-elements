# wired-checkbox
Hand-drawn sketchy checkbox web component.

## Usage

```html
<wired-checkbox>Checkbox One</wired-checkbox>
<wired-checkbox checked>Checkbox Two</wired-checkbox>
<wired-checkbox disabled>Disabled checkbox</wired-checkbox>
```

## Properties

**checked** - Checked state (boolean). Default is false.

**disabled** - Disables the checkbox. Default value is false. 

## Custom CSS Properties

**--wired-checkbox-icon-color** Color of the checkbox. Default is *currentColor*.

## Events
**change** event fired when state of the checkbox changes, i.e. the user checks/unchecks the box.