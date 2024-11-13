# wired-tabs
Hand-drawn sketchy Tabs web component.

## Usage

```html
<wired-tabs selected="Two">
  <wired-tab name="One">
    <h4>Card 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
  <wired-tab name="Two">
    <h4>Card 2</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
  <wired-tab name="Three">
    <h4>Card 3</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </wired-tab>
</wired-tabs>
```

## WiredTabs Properties

**selected** - Name of the currently selected tab

## WiredTab Properties

**name** - Unique identifier for that tab. Used for selection. 

**label** - Text to show in the tab. Defaults to the **name** property.

## Custom CSS Variables

**--wired-item-selected-bg** Background color of the selected tab.

**--wired-item-selected-color** Text color of the selected tab.