import { loadStyles } from '@microsoft/load-themed-styles';

function type () {
  var types = [], len = arguments.length;
  while ( len-- ) types[ len ] = arguments[ len ];

  types.push('');

  return {
    props: {
      type: {
        type: String,
        default: '',
        validator: function validator(value) {
          return types.includes(value);
        }
      }
    }
  };
}

var disabled = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};

var icon = {
  props: {
    icon: String
  },

  computed: {
    iconClass: function iconClass() {
      var obj;

      return ( obj = {}, obj[("ms-Icon--" + (this.icon))] = !!this.icon, obj );
    }
  }
};

var button = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-Button",class:_vm.buttonClass,on:{"click":_vm.clickEvent}},[(_vm.icon && _vm.type == 'hero')?_c('span',{staticClass:"ms-Button-icon"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-Button-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.description && _vm.type == 'compound')?_c('span',{staticClass:"ms-Button-description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()])},staticRenderFns: [],
  name: 'ou-button',

  mixins: [
    type('primary', 'hero', 'compound', 'small'),
    disabled,
    icon
  ],

  props: {
    description: String
  },

  computed: {
    buttonClass: function buttonClass() {
      var obj;

      return ( obj = {}, obj[("ms-Button--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) { this.$emit('click'); }
    }
  }
};

var uiButton = {_scopeId: 'data-v-79820dd6',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Button[data-v-79820dd6] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border: 1px solid \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: pointer; display: inline-block; height: 32px; min-width: 80px; padding: 4px 20px 6px; } .ms-Button.is-hidden[data-v-79820dd6] { display: none; } .ms-Button[data-v-79820dd6]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-Button:hover .ms-Button-label[data-v-79820dd6] { color: \"[theme:black, default: #000000]\"; } @media screen and (-ms-high-contrast: active) { .ms-Button[data-v-79820dd6]:hover { color: #1AEBFF; border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Button[data-v-79820dd6]:hover { color: #37006E; border-color: #37006E; } } .ms-Button[data-v-79820dd6]:focus { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; outline: 1px solid transparent; } .ms-Button:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:black, default: #000000]\"; } .ms-Button[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button[data-v-79820dd6]:disabled, .ms-Button.is-disabled[data-v-79820dd6] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: default; } .ms-Button:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button[data-v-79820dd6]:disabled:hover, .ms-Button[data-v-79820dd6]:disabled:focus, .ms-Button.is-disabled[data-v-79820dd6]:hover, .ms-Button.is-disabled[data-v-79820dd6]:focus { outline: 0; } .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 600; font-size: 14px; } .ms-Button-icon[data-v-79820dd6], .ms-Button-description[data-v-79820dd6] { display: none; } .ms-Button.ms-Button--primary[data-v-79820dd6] { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--primary .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:hover { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:focus { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDarker, default: #004578]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:disabled, .ms-Button.ms-Button--primary.is-disabled[data-v-79820dd6] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--primary:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--primary.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--small[data-v-79820dd6] { min-width: 60px; min-height: 24px; height: auto; padding-top: 0; padding-bottom: 4px; } .ms-Button.ms-Button--small .ms-Button-label[data-v-79820dd6] { font-weight: 400; font-size: 12px; } .ms-Button.ms-Button--hero[data-v-79820dd6] { align-items: center; background-color: transparent; border: 0; padding: 0; position: relative; } .ms-Button.ms-Button--hero .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; display: inline-block; font-size: 12px; margin-right: 4px; padding-top: 5px; text-align: center; } .ms-Button.ms-Button--hero .ms-Button-icon .ms-Icon[data-v-79820dd6] { border-radius: 18px; border: 1px solid \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; height: 18px; line-height: 18px; width: 18px; } .ms-Button.ms-Button--hero .ms-Button-label[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 21px; font-weight: 100; position: relative; text-decoration: none; vertical-align: top; } .ms-Button.ms-Button--hero:hover .ms-Button-icon[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--hero:hover .ms-Button-icon .ms-Icon[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--hero:hover .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:themeDarker, default: #004578]\"; } .ms-Button.ms-Button--hero:active .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:active .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-icon[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-icon[data-v-79820dd6] { color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-icon .ms-Icon[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6] { display: block; height: auto; max-width: 280px; min-height: 72px; padding: 20px; } .ms-Button.ms-Button--compound .ms-Button-label[data-v-79820dd6] { display: block; font-weight: 600; position: relative; text-align: left; margin-top: -5px; } .ms-Button.ms-Button--compound .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralSecondary, default: #666666]\"; display: block; font-weight: 400; font-size: 12px; position: relative; text-align: left; top: 3px; } .ms-Button.ms-Button--compound:hover .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--compound:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Button.ms-Button--compound:focus .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--compound:active .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button.ms-Button--compound:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:disabled:focus, .ms-Button.ms-Button--compound[data-v-79820dd6]:disabled:active, .ms-Button.ms-Button--compound.is-disabled[data-v-79820dd6]:focus, .ms-Button.ms-Button--compound.is-disabled[data-v-79820dd6]:active { border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--compound:disabled:focus .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:focus .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:active .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:active .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:active .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:active .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } ");},
    extends :  button
}

export { uiButton };
