# spfx-ui-fabric-vue
Office ui fabric components made specific for SPFx.

## Component status - Done
Component        | Uses ui-fabric-js | Uses ui-fabric-vue | Uses ui-fabric-core styles  | Notes
 ---             | :---:             | :---:              | :---:                       | ---
Button           | Yes               | Yes                | Yes                      
Callout          | Yes               | Yes                | Yes                         | icons changed to svgs
Checkbox         | Yes               | Yes                | Yes                         | icons changed to svgs
ChoiceFieldGroup | Yes               | Yes                | Yes 
ContextualMenu   | Yes               | Yes                | Yes                         | icons changed to svgs
Dialog           | Yes               | Yes                | Yes                         | icons changed to svgs
Dropdown         | Yes               | Yes                | Yes                         | icons changed to svgs, 
Label            | Yes               | Yes                | Yes                         | 
Messagebar       | Yes               | Yes                | Yes                         | icon is no longer a property, but instead a slot called "icon"
Overlay          | Yes               | Yes                | Yes                         | 
Panel            | Yes               | Yes                | Yes                         | 
Persona          | Yes               | Yes                | Yes                         | 
Searchbox        | Yes               | Yes                | Yes                         | icons changed to svgs
Spinner          | Yes               | Yes                | Yes                         | TESTS MISSING, moving, so not possible to test with screenshots!
Textfield        | Yes               | Yes                | Yes                         | 
Icons            | No                | No                 | No                          |
Commandbar*      | Yes               | Yes                | Yes                         | Not to happy about the implementation, consider using the react version instead. *Contextual menu, when items get collapsed, is not working as intended yet! TESTS MISSING
CommandButton    | Yes               | Yes                | Yes                         | icon is no longer a property, but instead a slot called "icon"
Link             | Yes               | Yes                | Yes                         | 
Pivot            | Yes               | Yes                | Yes                         | 
List             | Yes               | Yes                | Yes                         |

## Component status - Todo
Component         | Notes
 ---              | ---

ListItem          | 
MessageBanner     | 
ProgressIndicator | 
Toggle            | 
Facepile          |
PeoplePicker      |
PersonaCard       |
Table             |
OrgChart          | 
Breadcrumb        | 

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