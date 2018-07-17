# spfx-ui-fabric-vue
Office ui fabric components made specific for SPFx.

## Component status
Component        |Implemented | Uses ui-fabric-js | Uses ui-fabric-vue | Uses ui-fabric-core styles  | Notes
 ---             | :---:      | :---:             | :---:              | :---:                       | ---
Button           | Yes        | Yes               | Yes                | Yes                      
Callout          | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs
Checkbox         | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs
ChoiceFieldGroup | Yes        | Yes               | Yes                | Yes 
ContextualMenu   | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs
Dialog           | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs
Dropdown         | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs, TESTS MISSING
Label            | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Messagebar       | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Overlay          | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Panel            | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Persona          | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Searchbox        | Yes        | Yes               | Yes                | Yes                         | icons changed to svgs
Spinner          | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Textfield        | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
Icons            | Yes        | No                | No                 | No                          |
Breadcrumb       | No         | Yes               | Yes                | Yes                         | 
Commandbar       | *Yes       | Yes               | Yes                | Yes                         | Not to happy about the implementation, consider using the react version instead. *Contextual menu, when items get collapsed, is not working as intended yet! TESTS MISSING
CommandButton    | Yes        | Yes               | Yes                | Yes                         | icon is no longer a property, but instead a slot called "icon"
Link             | Yes        | Yes               | Yes                | Yes                         | TESTS MISSING
List             | No         | Yes               | Yes                | Yes                         | 
ListItem         | No         | Yes               | Yes                | Yes                         | 
MessageBanner    | No         | Yes               | Yes                | Yes                         | 
OrgChart         | No         | Yes               | Yes                | Yes                         | 
Pivot            | No         | Yes               | Yes                | Yes                         | 
ProgressIndicator| No         | Yes               | Yes                | Yes                         | 
Toggle           | No         | Yes               | Yes                | Yes                         | 
Facepile         | No         | Yes               | No                 | Yes                         |
PeoplePicker     | No         | Yes               | No                 | Yes                         |
PersonaCard      | No         | Yes               | No                 | Yes                         |
Table            | No         | Yes               | No                 | Yes                         |




## Bonus components
No part of the normal ui fabric, but used by multiple wizdom components
Component        | Implemented | Notes
---              | :---:       | ---
Imageuploader    | No          | Needs a wizdom context, see wiki for more info
Richtexteditor   | No          | Needs a license key, see wiki for more info
TemplateSwitcher | No
Typeahead        | No
Multiselect      | No

## Changes, compared to https://aidewoode.github.io/office-ui-fabric-vue/#/
Dialog, has an extra property to show dark overlay, called useDarkOverlay (Boolean)

## Features
 - ES Modules! every component can be used indivudually. No need to load a huge bundle, just to show ex. a button
 - Styles are automatically loaded and respect SPFX themes
 - Font files are only needed for the Icon component. All other components uses svgs instead for their icons