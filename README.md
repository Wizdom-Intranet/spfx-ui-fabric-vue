# spfx-ui-fabric-vue
Office ui fabric components made specific for SPFx.

## Component status
Component|Implemented | Uses ui-fabric-js | Uses ui-fabric-vue | Uses ui-fabric-core styles  | Notes
 --- | :---: | :---: | :---: | :---: | ---
Button | Yes | Yes | Yes | Yes
Callout | Yes | Yes | Yes | Yes
Dialog | Yes | Yes | Yes | Yes | Close icon changed to svg
Overlay | Yes | Yes | Yes | Yes

## Changes, compared to https://aidewoode.github.io/office-ui-fabric-vue/#/
Dialog, has an extra property to show dark overlay, called useDarkOverlay (Boolean)

## Features
 - ES Modules! every component can be used indivudually. No need to load a huge bundle, just to show ex. a button
 - Styles are automatically loaded and respect SPFX themes
 - Font files are only needed for the Icon component. All other components uses svgs instead for their icons