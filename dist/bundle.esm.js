import { loadStyles } from '@microsoft/load-themed-styles';
import Vue from 'vue';

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

var overlay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"overlay",staticClass:"ms-Overlay",class:_vm.overlayClass})},staticRenderFns: [],
  name: 'ou-overlay',

  mixins: [type('dark')],

  props: {
    value: Boolean
  },

  data: function data() {
    return {
      overlayInstance: null
    };
  },

  watch: {
    value: function value() {
      this.setOverlayVisibility();
    }
  },

  computed: {
    overlayClass: function overlayClass() {
      var obj;

      return ( obj = {}, obj[("ms-Overlay--" + (this.type))] = !!this.type, obj );
    }
  },

  mounted: function mounted() {
    this.overlayInstance = new this.$fabric.Overlay(this.$refs.overlay);

    this.setOverlayVisibility();
    this.bindOverlayCloseEvent();
  },

  methods: {
    setOverlayVisibility: function setOverlayVisibility() {
      this.value ? this.overlayInstance.show() : this.overlayInstance.hide();
    },

    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var this$1 = this;

      // Because the overlay component don't have callback when overlay closed,
      // So add a click event when click the overlay to set the value to false
      var overlayElement = this.$refs.overlay;
      var closeOverlay = function () {
        this$1.$emit('input', false);
      };

      overlayElement.addEventListener('click', closeOverlay);
    }
  }
};

var Overlay = (function () {
    function Overlay(overlayElement) {
        if (overlayElement) {
            this.overlayElement = overlayElement;
        }
        else {
            var overlayContainer = document.createElement("div");
            overlayContainer.setAttribute("class", "ms-Overlay");
            this.overlayElement = overlayContainer;
        }
        this.overlayElement.addEventListener("click", this.hide.bind(this), false);
    }
    Overlay.prototype.remove = function () {
        this.overlayElement.parentElement.removeChild(this.overlayElement);
    };
    Overlay.prototype.show = function () {
        this.overlayElement.classList.add("is-visible");
        document.body.classList.add("ms-u-overflowHidden");
    };
    Overlay.prototype.hide = function () {
        this.overlayElement.classList.remove("is-visible");
        document.body.classList.remove("ms-u-overflowHidden");
    };
    return Overlay;
}());

var uiOverlay = {_scopeId: 'data-v-09ffd35c',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Overlay[data-v-09ffd35c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-09ffd35c] { display: block; } .ms-Overlay--dark[data-v-09ffd35c] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-09ffd35c] { overflow: hidden; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Overlay : Overlay
        };
    },
    watch:{
        useDarkOverlay:{
            handler: function handler(newVal){
                
            },
            immediate : true
        }
    },
    props : {
        useDarkOverlay: Boolean
    },
    extends :  overlay
}

var dialog = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dialog",staticClass:"ms-Dialog",class:_vm.dialogClass},[(_vm.type == 'close')?_c('button',{staticClass:"ms-Dialog-button ms-Dialog-buttonClose",on:{"click":_vm.closeDialog}},[_c('i',{staticClass:"ms-Icon ms-Icon--Cancel"})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-Dialog-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"ms-Dialog-content"},[_c('p',{staticClass:"ms-Dialog-subText"},[_vm._v(_vm._s(_vm.subText))]),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"ms-Dialog-actions"},[_vm._t("actions")],2)])},staticRenderFns: [],
  name: 'ou-dialog',

  mixins: [type('multiline', 'lgHeader', 'blocking', 'close')],

  props: {
    title: String,
    subText: String,

    value: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      dialogInstance: null
    };
  },

  computed: {
    dialogClass: function dialogClass() {
      var obj;

      return ( obj = {}, obj[("ms-Dialog--" + (this.type))] = !!this.type, obj );
    }
  },

  watch: {
    value: function value(value$1) {
      this.setDialogVisibility(value$1);
    }
  },

  mounted: function mounted() {
    this.dialogInstance = new this.$fabric.Dialog(this.$refs.dialog);
    this.setDialogVisibility(this.value);
  },

  methods: {
    setDialogVisibility: function setDialogVisibility(value) {
      if (value) {
        this.dialogInstance.open();

        // Because the office ui fabric js don't support on_close or on_open event in dialog
        // component, So I have to write some hacking code to change the visible status when
        // click the overlay. Otherwise the visible status can't change, when click the overlay
        // to close the dialog.
        this.bindOverlayCloseEvent();
      } else if (this.isOpen()) {
        // Avoid to destroy overlay element twice, and get errors, so determine if the dialog
        // was opened before close it.
        this.dialogInstance.close();
      }
    },

    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var this$1 = this;

      if (this.dialogInstance._overlay) {
        var overlayElement = this.dialogInstance._overlay.overlayElement;

        var closeOverlay = function () {
          overlayElement.removeEventListener('click', closeOverlay);
          this$1.$emit('input', false);
        };

        overlayElement.addEventListener('click', closeOverlay);
      }
    },

    isOpen: function isOpen() {
      // When the dialog is shown, the dialog element add a class name of 'is-open',
      // So use this to determine the dialog if was opened.
      return this.$refs.dialog.classList.contains('is-open');
    },

    closeDialog: function closeDialog(event) {
      this.$emit('input', false);


      // Because the original close button element have the click event to close the dialog,
      // when I fire the click event, the original click event function will fire behind it,
      // So stop the original click event, when I fire the click event.
      event.stopImmediatePropagation();
    }
  }
};

var Dialog = (function () {
    function Dialog(dialog) {
        var this$1 = this;

        this._dialog = dialog;
        this._closeButtonElement = this._dialog.querySelector(".ms-Dialog-buttonClose");
        this._actionButtonElements = this._dialog.querySelectorAll(".ms-Dialog-action");
        if (this._closeButtonElement) {
            this._closeButtonElement.addEventListener("click", this.close.bind(this), false);
        }
        for (var i = 0; i < this._actionButtonElements.length; i++) {
            this$1._actionButtonElements[i].addEventListener("click", this$1.close.bind(this$1), false);
        }
    }
    Dialog.prototype.close = function () {
        this._overlay.remove();
        this._dialog.classList.remove("is-open");
        document.body.classList.remove("ms-u-overflowHidden");
        this._overlay.overlayElement.removeEventListener("click", this.close.bind(this));
    };
    Dialog.prototype.open = function () {
        this._dialog.classList.add("is-open");
        this._overlay = new Overlay();
        if (!this._dialog.classList.contains("ms-Dialog--blocking")) {
            this._overlay.overlayElement.addEventListener("click", this.close.bind(this), false);
            this._overlay.show();
            document.body.classList.add("ms-u-overflowHidden");
        }
        this._dialog.parentElement.appendChild(this._overlay.overlayElement);
    };
    return Dialog;
}());

var uiDialog = {_scopeId: 'data-v-1194e8ec',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Dialog[data-v-1194e8ec] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); background-color: \"[theme:white, default: #ffffff]\"; display: none; height: auto; min-width: 220px; max-width: 340px; padding: 28px 24px; z-index: 10; position: fixed; transform: translate(-50%, -50%); left: 50%; top: 50%; } .ms-Dialog.is-open[data-v-1194e8ec] { display: block; } .ms-Dialog-title[data-v-1194e8ec] { font-size: 21px; font-weight: 100; margin-bottom: 24px; } .ms-Dialog-content[data-v-1194e8ec] { position: relative; } .ms-Dialog-subText[data-v-1194e8ec] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; line-height: 1.5; } .ms-Dialog-actions[data-v-1194e8ec] { margin-top: 24px; text-align: right; } .ms-Dialog--multiline .ms-Dialog-title[data-v-1194e8ec] { font-size: 28px; } .ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title[data-v-1194e8ec] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; font-size: 28px; font-weight: 100; padding: 28px 24px; margin-top: -28px; margin-left: -24px; margin-right: -24px; } .ms-Dialog-buttonClose[data-v-1194e8ec] { background: none; border: 0; cursor: pointer; margin: 0; padding: 4px; position: absolute; right: 12px; top: 12px; z-index: 10; } .ms-Dialog-buttonClose .ms-Icon.ms-Icon--Cancel[data-v-1194e8ec] { color: \"[theme:neutralSecondary, default: #666666]\"; font-size: 16px; } .ms-Button.ms-Button--compound[data-v-1194e8ec]:not(:last-child) { margin-bottom: 20px; } .ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-title[data-v-1194e8ec] { margin-right: 20px; } .ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-buttonClose[data-v-1194e8ec] { display: block; } @media (min-width: 480px) { .ms-Dialog-main[data-v-1194e8ec] { width: auto; min-width: 288px; max-width: 340px; } } .ms-Overlay[data-v-1194e8ec] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-1194e8ec] { display: block; } .ms-Overlay--dark[data-v-1194e8ec] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-1194e8ec] { overflow: hidden; } .ms-Icon.ms-Icon--Cancel[data-v-1194e8ec] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Dialog : Dialog
        };
    },
    props : {
        useDarkOverlay : Boolean
    },
    methods : {
        ensureScopeIdForChilds: function ensureScopeIdForChilds(){
            if(this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement){
                this.dialogInstance._overlay.overlayElement.setAttribute(this.$options._scopeId,"");
                if(this.useDarkOverlay)
                    { this.dialogInstance._overlay.overlayElement.className += " ms-Overlay--dark"; }
            }
        },
        ensureOverlayIsClosed: function ensureOverlayIsClosed(){
            if(this.dialogInstance && this.dialogInstance._overlay && this.dialogInstance._overlay.overlayElement.parentElement)
                { this.dialogInstance._overlay.remove(); }
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.ensureScopeIdForChilds();
        });
    },
    watch:{
        value: function value(newVal){
            this.ensureScopeIdForChilds();

        if(!newVal)
            { this.ensureOverlayIsClosed(); }
        }
    },
    beforeDestroy: function beforeDestroy()
    {
        this.ensureOverlayIsClosed();
    },
    extends :  dialog
}

var callout = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"callout",staticClass:"ms-Callout is-hidden",class:_vm.calloutClass},[_c('div',{staticClass:"ms-Callout-main"},[(_vm.showClose)?_c('button',{staticClass:"ms-Callout-close"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-Callout-header"},[_c('p',{staticClass:"ms-Callout-title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"ms-Callout-inner"},[_c('div',{staticClass:"ms-Callout-content"},[(_vm.content)?_c('p',{staticClass:"ms-Callout-subText"},[_vm._v(_vm._s(_vm.content))]):_vm._t("content")],2),_vm._v(" "),_c('div',{staticClass:"ms-Callout-actions"},[_vm._t("actions")],2)])])]),_vm._v(" "),_c('span',{ref:"calloutTrigger"},[_vm._t("default")],2)])},staticRenderFns: [],
  name: 'ou-callout',

  mixins: [type('actionText', 'OOBE', 'peek')],

  props: {
    position: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['right', 'left', 'top', 'bottom'].includes(value);
      }
    },

    showClose: {
      type: Boolean,
      default: false
    },

    title: String,
    content: String
  },
  data: function data() {
    return {
      calloutInstance: null
    };
  },
  computed: {
    calloutClass: function calloutClass() {
      var obj;

      return ( obj = {}, obj[("ms-Callout--" + (this.type))] = !!this.type, obj['ms-Callout--close'] =  this.showClose, obj );
    }
  },

  mounted: function mounted() {
    this.calloutInstance = new this.$fabric.Callout(
      this.$refs.callout,
      this.$refs.calloutTrigger,
      this.position
    );
  }
};

var CONTEXT_STATE_CLASS = "is-open";
var MODAL_STATE_POSITIONED = "is-positioned";
var CONTEXT_HOST_MAIN_CLASS = "ms-ContextualHost-main";
var CONTEXT_HOST_BEAK_CLASS = "ms-ContextualHost-beak";
var ARROW_LEFT_CLASS = "ms-ContextualHost--arrowLeft";
var ARROW_TOP_CLASS = "ms-ContextualHost--arrowTop";
var ARROW_BOTTOM_CLASS = "ms-ContextualHost--arrowBottom";
var ARROW_RIGHT_CLASS = "ms-ContextualHost--arrowRight";
var MODIFIER_BASE = "ms-ContextualHost--";
var ARROW_SIZE = 28;
var ARROW_OFFSET = 8;
var ContextualHost = (function () {
    function ContextualHost(content, direction, targetElement, hasArrow, modifiers, matchTargetWidth, disposalCallback) {
        var this$1 = this;

        if (hasArrow === void 0) { hasArrow = true; }
        this._resizeAction = this._resizeAction.bind(this);
        this._dismissAction = this._dismissAction.bind(this);
        this._handleKeyUpDismiss = this._handleKeyUpDismiss.bind(this);
        this._matchTargetWidth = matchTargetWidth || false;
        this._direction = direction;
        this._container = this.createContainer();
        this._contextualHost = this._container;
        this._contextualHostMain = this._contextualHost.getElementsByClassName(CONTEXT_HOST_MAIN_CLASS)[0];
        this._contextualHostMain.appendChild(content);
        this._hasArrow = hasArrow;
        this._arrow = this._container.getElementsByClassName(CONTEXT_HOST_BEAK_CLASS)[0];
        this._targetElement = targetElement;
        this._openModal();
        this._setResizeDisposal();
        if (disposalCallback) {
            this._disposalCallback = disposalCallback;
        }
        if (modifiers) {
            for (var i = 0; i < modifiers.length; i++) {
                this$1._container.classList.add(MODIFIER_BASE + modifiers[i]);
            }
        }
        if (!ContextualHost.hosts) {
            ContextualHost.hosts = [];
        }
        ContextualHost.hosts.push(this);
    }
    ContextualHost.prototype.disposeModal = function () {
        if (ContextualHost.hosts.length > 0) {
            window.removeEventListener("resize", this._resizeAction, false);
            document.removeEventListener("click", this._dismissAction, true);
            document.removeEventListener("keyup", this._handleKeyUpDismiss, true);
            this._container.parentNode.removeChild(this._container);
            if (this._disposalCallback) {
                this._disposalCallback();
            }
            var index = ContextualHost.hosts.indexOf(this);
            ContextualHost.hosts.splice(index, 1);
            var i = ContextualHost.hosts.length;
            while (i--) {
                ContextualHost.hosts[i].disposeModal();
                ContextualHost.hosts.splice(i, 1);
            }
        }
    };
    ContextualHost.prototype.setChildren = function (value) {
        if (!this._children) {
            this._children = [];
        }
        this._children.push(value);
    };
    ContextualHost.prototype.contains = function (value) {
        return this._container.contains(value);
    };
    ContextualHost.prototype.createContainer = function () {
        var ContextualHost0 = document.createElement("div");
        ContextualHost0.setAttribute("class", "ms-ContextualHost");
        ContextualHost0.innerHTML += " ";
        var ContextualHost0c1 = document.createElement("div");
        ContextualHost0c1.setAttribute("class", CONTEXT_HOST_MAIN_CLASS);
        ContextualHost0c1.innerHTML += " ";
        ContextualHost0.appendChild(ContextualHost0c1);
        ContextualHost0.innerHTML += " ";
        var ContextualHost0c3 = document.createElement("div");
        ContextualHost0c3.setAttribute("class", CONTEXT_HOST_BEAK_CLASS);
        ContextualHost0.appendChild(ContextualHost0c3);
        ContextualHost0.innerHTML += "";
        return ContextualHost0;
    };
    ContextualHost.prototype._openModal = function () {
        var _this = this;
        this._copyModalToBody();
        this._saveModalSize();
        this._findAvailablePosition();
        this._showModal();
        setTimeout(function () { _this._setDismissClick(); }, 100);
    };
    ContextualHost.prototype._findAvailablePosition = function () {
        var _posOk;
        switch (this._direction) {
            case "left":
                _posOk = this._positionOk(this._tryPosModalLeft.bind(this), this._tryPosModalRight.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                this._setPosition(_posOk);
                break;
            case "right":
                _posOk = this._positionOk(this._tryPosModalRight.bind(this), this._tryPosModalLeft.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                this._setPosition(_posOk);
                break;
            case "top":
                _posOk = this._positionOk(this._tryPosModalTop.bind(this), this._tryPosModalBottom.bind(this));
                this._setPosition(_posOk);
                break;
            case "bottom":
                _posOk = this._positionOk(this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                this._setPosition(_posOk);
                break;
            default:
                this._setPosition();
        }
    };
    ContextualHost.prototype._showModal = function () {
        this._container.classList.add(CONTEXT_STATE_CLASS);
    };
    ContextualHost.prototype._positionOk = function (pos1, pos2, pos3, pos4) {
        var _posOk;
        _posOk = pos1();
        if (!_posOk) {
            _posOk = pos2();
            if (!_posOk && pos3) {
                _posOk = pos3();
                if (!_posOk && pos4) {
                    _posOk = pos4();
                }
            }
        }
        return _posOk;
    };
    ContextualHost.prototype._calcLeft = function (mWidth, teWidth, teLeft) {
        var mHalfWidth = mWidth / 2;
        var teHalf = teWidth / 2;
        var mHLeft = (teLeft + teHalf) - mHalfWidth;
        mHLeft = (mHLeft < mHalfWidth) ? teLeft : mHLeft;
        return mHLeft;
    };
    ContextualHost.prototype._calcTop = function (mHeight, teHeight, teTop) {
        var mHalfWidth = mHeight / 2;
        var teHalf = teHeight / 2;
        var mHLeft = (teTop + teHalf) - mHalfWidth;
        mHLeft = (mHLeft < mHalfWidth) ? teTop : mHLeft;
        return mHLeft;
    };
    ContextualHost.prototype._setPosition = function (curDirection) {
        var teBR = this._targetElement.getBoundingClientRect();
        var teLeft = teBR.left;
        var teRight = teBR.right;
        var teTop = teBR.top;
        var teWidth = teBR.width;
        var teHeight = teBR.height;
        var mHLeft;
        var mHTop;
        var mWidth = "";
        var arrowTop;
        var arrowLeft;
        var windowX = window.scrollX ? window.scrollX : 0;
        var windowY = window.scrollY ? window.scrollY : 0;
        var arrowSpace = (this._hasArrow) ? ARROW_SIZE : 0;
        if (this._matchTargetWidth) {
            mWidth = "width: " + this._modalWidth + "px;";
        }
        switch (curDirection) {
            case "left":
                mHLeft = teLeft - this._modalWidth - arrowSpace;
                mHTop = this._calcTop(this._modalHeight, teHeight, teTop);
                mHTop += window.scrollY ? window.scrollY : 0;
                this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                this._container.classList.add(MODAL_STATE_POSITIONED);
                if (this._hasArrow) {
                    this._container.classList.add(ARROW_RIGHT_CLASS);
                    arrowTop = ((teTop + windowY) - mHTop) + ARROW_OFFSET;
                    this._arrow.setAttribute("style", "top: " + arrowTop + "px;");
                }
                break;
            case "right":
                mHTop = this._calcTop(this._modalHeight, teHeight, teTop);
                mHTop += windowY;
                mHLeft = teRight + arrowSpace;
                this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                this._container.classList.add(MODAL_STATE_POSITIONED);
                if (this._hasArrow) {
                    arrowTop = ((windowY + teTop) - mHTop) + ARROW_OFFSET;
                    this._arrow.setAttribute("style", "top: " + arrowTop + "px;");
                    this._container.classList.add(ARROW_LEFT_CLASS);
                }
                break;
            case "top":
                mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);
                mHTop = teTop - this._modalHeight - arrowSpace;
                mHTop += windowY;
                this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                this._container.classList.add(MODAL_STATE_POSITIONED);
                if (this._hasArrow) {
                    arrowTop = this._modalHeight - (arrowSpace / 2);
                    arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);
                    this._arrow.setAttribute("style", "top: " + arrowTop + "px; left: " + arrowLeft + "px;");
                    this._container.classList.add(ARROW_BOTTOM_CLASS);
                }
                break;
            case "bottom":
                mHLeft = mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);
                mHTop = teTop + teHeight + arrowSpace;
                mHTop += window.scrollY ? window.scrollY : 0;
                this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                this._container.classList.add(MODAL_STATE_POSITIONED);
                if (this._hasArrow) {
                    arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);
                    this._arrow.setAttribute("style", "left: " + arrowLeft + "px;");
                    this._container.classList.add(ARROW_TOP_CLASS);
                }
                break;
            default:
                this._container.setAttribute("style", "top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);");
        }
    };
    ContextualHost.prototype._tryPosModalLeft = function () {
        var teLeft = this._targetElement.getBoundingClientRect().left;
        if (teLeft < this._modalWidth) {
            return false;
        }
        else {
            return "left";
        }
    };
    ContextualHost.prototype._tryPosModalRight = function () {
        var teRight = this._targetElement.getBoundingClientRect().right;
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if ((w - teRight) < this._modalWidth) {
            return false;
        }
        else {
            return "right";
        }
    };
    ContextualHost.prototype._tryPosModalBottom = function () {
        var teBottom = window.innerHeight - this._targetElement.getBoundingClientRect().bottom;
        if (teBottom < this._modalHeight) {
            return false;
        }
        else {
            return "bottom";
        }
    };
    ContextualHost.prototype._tryPosModalTop = function () {
        var teTop = this._targetElement.getBoundingClientRect().top;
        if (teTop < this._modalHeight) {
            return false;
        }
        else {
            return "top";
        }
    };
    ContextualHost.prototype._copyModalToBody = function () {
        document.body.appendChild(this._container);
    };
    ContextualHost.prototype._saveModalSize = function () {
        var _modalStyles = window.getComputedStyle(this._container);
        this._container.setAttribute("style", "opacity: 0; z-index: -1");
        this._container.classList.add(MODAL_STATE_POSITIONED);
        this._container.classList.add(CONTEXT_STATE_CLASS);
        if (this._matchTargetWidth) {
            var teStyles = window.getComputedStyle(this._targetElement);
            this._modalWidth = this._targetElement.getBoundingClientRect().width
                + (parseInt(teStyles.marginLeft, 10)
                    + parseInt(teStyles.marginLeft, 10));
        }
        else {
            this._modalWidth = this._container.getBoundingClientRect().width
                + (parseInt(_modalStyles.marginLeft, 10)
                    + parseInt(_modalStyles.marginRight, 10));
            this._container.setAttribute("style", "");
        }
        this._modalHeight = this._container.getBoundingClientRect().height
            + (parseInt(_modalStyles.marginTop, 10)
                + parseInt(_modalStyles.marginBottom, 10));
        this._container.classList.remove(MODAL_STATE_POSITIONED);
        this._container.classList.remove(CONTEXT_STATE_CLASS);
        this._teWidth = this._targetElement.getBoundingClientRect().width;
        this._teHeight = this._targetElement.getBoundingClientRect().height;
    };
    ContextualHost.prototype._dismissAction = function (e) {
        if (!this._container.contains(e.target) && e.target !== this._container) {
            if (this._children !== undefined) {
                var isChild_1 = false;
                this._children.map(function (child) {
                    if (child !== undefined) {
                        isChild_1 = child.contains(e.target);
                    }
                });
                if (!isChild_1) {
                    this.disposeModal();
                }
            }
            else {
                this.disposeModal();
            }
        }
    };
    ContextualHost.prototype._setDismissClick = function () {
        document.addEventListener("click", this._dismissAction, true);
        document.addEventListener("keyup", this._handleKeyUpDismiss, true);
    };
    ContextualHost.prototype._handleKeyUpDismiss = function (e) {
        if (e.keyCode === 32 || e.keyCode === 27) {
            this._dismissAction(e);
        }
    };
    ContextualHost.prototype._resizeAction = function () {
        this.disposeModal();
    };
    ContextualHost.prototype._setResizeDisposal = function () {
        window.addEventListener("resize", this._resizeAction, false);
    };
    return ContextualHost;
}());

var STATE_HIDDEN = "is-hidden";
var CLOSE_BUTTON_CLASS = ".ms-Callout-close";
var MODIFIER_OOBE_CLASS = "ms-Callout--OOBE";
var Callout = (function () {
    function Callout(container, addTarget, position) {
        this._container = container;
        this._addTarget = addTarget;
        this._position = position;
        this._closeButton = container.querySelector(CLOSE_BUTTON_CLASS);
        this._setOpener();
    }
    Callout.prototype._setOpener = function () {
        this._addTarget.addEventListener("click", this._clickHandler.bind(this), true);
        this._addTarget.addEventListener("keyup", this._keyupHandler.bind(this), true);
    };
    Callout.prototype._openContextMenu = function () {
        var modifiers = [];
        if (this._hasModifier(MODIFIER_OOBE_CLASS)) {
            modifiers.push("primaryArrow");
        }
        this._container.classList.remove(STATE_HIDDEN);
        this._contextualHost = new ContextualHost(this._container, this._position, this._addTarget, true, modifiers);
        if (this._closeButton) {
            this._closeButton.addEventListener("click", this._closeHandler.bind(this), false);
        }
    };
    Callout.prototype._hasModifier = function (modifierClass) {
        return this._container.classList.contains(modifierClass);
    };
    Callout.prototype._closeHandler = function (e) {
        if (this._contextualHost != null) {
            this._contextualHost.disposeModal();
        }
        this._closeButton.removeEventListener("click", this._closeHandler.bind(this), false);
        this._addTarget.removeEventListener("click", this._clickHandler.bind(this), true);
        this._addTarget.removeEventListener("keyup", this._keyupHandler.bind(this), true);
    };
    Callout.prototype._clickHandler = function (e) {
        this._openContextMenu();
    };
    Callout.prototype._keyupHandler = function (event) {
        if (event.keyCode === 32) {
            event.stopPropagation();
            event.preventDefault();
            this._openContextMenu();
        }
        else {
            this._closeHandler(event);
        }
    };
    return Callout;
}());

var uiCallout = {_scopeId: 'data-v-64664f3c',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Callout[data-v-64664f3c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; width: 288px; } .ms-Callout.is-hidden[data-v-64664f3c] { display: none; } .ms-Callout-header[data-v-64664f3c] { z-index: 105; padding-top: 24px; padding-bottom: 12px; padding-left: 28px; padding-right: 28px; } .ms-Callout-title[data-v-64664f3c] { margin: 0; font-weight: 300; font-size: 21px; } .ms-Callout-subText[data-v-64664f3c] { margin: 0; font-weight: 300; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; } .ms-Callout-close[data-v-64664f3c] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 110; } .ms-Callout-link[data-v-64664f3c] { font-size: 14px; } .ms-Callout-inner[data-v-64664f3c] { height: 100%; padding-top: 0; padding-bottom: 12px; padding-left: 28px; padding-right: 28px; } .ms-Callout-actions[data-v-64664f3c] { position: relative; margin-top: 20px; width: 100%; white-space: nowrap; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline[data-v-64664f3c] { height: 27px; line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-64664f3c] { height: 27px; line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-label[data-v-64664f3c] { line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-icon[data-v-64664f3c] { line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:hover .ms-Button[data-v-64664f3c], .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:focus .ms-Button[data-v-64664f3c] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Callout-actions .ms-Callout-button[data-v-64664f3c] { margin-right: 12px; } .ms-Callout.ms-Callout--OOBE .ms-Callout-header[data-v-64664f3c] { padding: 28px 24px; background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Callout.ms-Callout--OOBE .ms-Callout-title[data-v-64664f3c] { font-weight: 100; font-size: 28px; color: \"[theme:white, default: #ffffff]\"; } .ms-Callout.ms-Callout--OOBE .ms-Callout-inner[data-v-64664f3c] { padding-top: 20px; } .ms-Callout.ms-Callout--OOBE .ms-Callout-subText[data-v-64664f3c] { font-size: 14px; } .ms-Callout.ms-Callout--actionText .ms-Callout-actions[data-v-64664f3c] { border-top: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; padding-top: 12px; } .ms-Callout.ms-Callout--actionText .ms-Callout-inner[data-v-64664f3c] { padding-bottom: 12px; } .ms-Callout.ms-Callout--peek .ms-Callout-header[data-v-64664f3c] { padding-bottom: 0; } .ms-Callout.ms-Callout--peek .ms-Callout-title[data-v-64664f3c] { font-size: 14px; } .ms-Callout.ms-Callout--peek .ms-Callout-actions[data-v-64664f3c] { margin-top: 12px; margin-bottom: -4px; } .ms-ContextualHost[data-v-64664f3c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned[data-v-64664f3c] { position: absolute; margin: 0; } .ms-ContextualHost.is-open[data-v-64664f3c] { display: inline-block; } .ms-ContextualHost-beak[data-v-64664f3c] { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c], .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c] { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c] { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c] { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak[data-v-64664f3c] { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak[data-v-64664f3c] { display: block; bottom: -10px; } .ms-ContextualHost-main[data-v-64664f3c] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close[data-v-64664f3c] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title[data-v-64664f3c] { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak[data-v-64664f3c] { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost[data-v-64664f3c] { margin: 16px; } .ms-ContextualHost.is-positioned[data-v-64664f3c] { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c], .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c] { display: block; } } .ms-Icon.ms-Icon--Clear[data-v-64664f3c] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Callout : Callout
        };
    },
    mounted: function mounted(){
        var this$1 = this;

        this.$refs.calloutTrigger.addEventListener("click", function (){
            var contextualHostElm = this$1.$refs.callout.parentElement.parentElement;
            contextualHostElm.setAttribute(this$1.$options._scopeId,"");
            for(var i=0;i<contextualHostElm.children.length;i++)
                { contextualHostElm.children[i].setAttribute(this$1.$options._scopeId,""); }
            this$1.calloutInstance._contextualHost._openModal(); // recalculate position
        });
    },
    extends :  callout
}

var searchBox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"searchBox",staticClass:"ms-SearchBox",class:_vm.searchBoxClass},[_c('input',{ref:"searchBoxInput",staticClass:"ms-SearchBox-field",attrs:{"type":"text"},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"blur":_vm.clearValue}}),_vm._v(" "),_c('label',{staticClass:"ms-SearchBox-label"},[_c('i',{staticClass:"ms-SearchBox-icon ms-Icon ms-Icon--Search"}),_vm._v(" "),(!_vm.hasValue)?_c('span',{staticClass:"ms-SearchBox-text"},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel",on:{"mousedown":_vm.clearValue}},[_vm._m(0)])])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-CommandButton-button"},[_c('span',{staticClass:"ms-CommandButton-icon"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})]),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"})])}],
  name: 'ou-search-box',

  mixins: [type('commandBar')],

  props: {
    value: String,
    placeholder: String,

    collapsed: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      hasValue: !!this.value
    };
  },

  computed: {
    searchBoxClass: function searchBoxClass() {
      var obj;

      return ( obj = {}, obj[("ms-SearchBox--" + (this.type))] = !!this.type, obj['is-collapsed'] =  this.collapsed, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.SearchBox(this.$refs.searchBox);
  },

  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    },

    clearValue: function clearValue() {
      this.$emit('input', '');
    }
  }
};

var SB_FIELD = ".ms-SearchBox-field";
var SB_CLEAR_BUTTON = ".ms-SearchBox-clear";
var SB_EXIT_BUTTON = ".ms-SearchBox-exit";
var SB_HAS_TEXT = "has-text";
var SB_IS_ACTIVE = "is-active";
var SB_IS_ANIMATED = "is-animated";
var SearchBox = (function () {
    function SearchBox(container) {
        var _this = this;
        this._container = container;
        this._saveDOMRefs(this._container);
        this._boundExpandSearchHandler = this._expandSearchHandler.bind(this);
        this._boundEnableClose = this._enableClose.bind(this);
        this._boundCollapseSearchBox = this._collapseSearchBox.bind(this);
        this._boundClearSearchBox = this._clearSearchBox.bind(this);
        this._boundHandleBlur = this._handleBlur.bind(this);
        this._boundExitSearchBox = this._exitSearchBox.bind(this);
        this._setHasText();
        this._setFocusAction(this._container);
        this._setClearButtonAction();
        this._setBlurAction();
        this._clearOnly = false;
        setTimeout(function () {
            _this._checkState();
            _this._addAnimation();
        }, 10);
    }
    SearchBox.prototype.setCollapsedListeners = function () {
        this._disposeListeners();
        this._searchBox.addEventListener("click", this._boundExpandSearchHandler, false);
        this._searchBoxField.addEventListener("focus", this._boundExpandSearchHandler, true);
    };
    SearchBox.prototype.getInputField = function () {
        return this._searchBoxField;
    };
    SearchBox.prototype._saveDOMRefs = function (context) {
        this._searchBox = context;
        this._searchBoxField = this._searchBox.querySelector(SB_FIELD);
        this._searchBoxClearButton = this._searchBox.querySelector(SB_CLEAR_BUTTON);
        this._searchBoxExitButton = this._searchBox.querySelector(SB_EXIT_BUTTON);
    };
    SearchBox.prototype._disposeListeners = function () {
        this._searchBox.removeEventListener("click", this._boundExpandSearchHandler);
        this._searchBoxField.removeEventListener("focus", this._boundExpandSearchHandler);
    };
    SearchBox.prototype._exitSearchBox = function (event) {
        event.stopPropagation();
        event.target.blur();
        this._clearSearchBox();
        this._collapseSearchBox();
        this._searchBox.removeEventListener("keyup", this._boundEnableClose);
        this.setCollapsedListeners();
    };
    SearchBox.prototype._collapseSearchBox = function () {
        this._searchBox.classList.remove("is-active");
        var event = document.createEvent("Event");
        event.initEvent("searchCollapse", true, true);
        this._searchBoxField.dispatchEvent(event);
    };
    SearchBox.prototype._expandSearchHandler = function () {
        this._disposeListeners();
        this._searchBox.classList.add("is-active");
        this._searchBoxField.focus();
    };
    SearchBox.prototype._enableClose = function () {
        this._setHasText();
    };
    SearchBox.prototype._setHasText = function () {
        if (this._searchBoxField.value.length > 0) {
            this._searchBox.classList.add(SB_HAS_TEXT);
        }
        else {
            this._searchBox.classList.remove(SB_HAS_TEXT);
        }
    };
    SearchBox.prototype._setFocusAction = function (context) {
        var _this = this;
        this._searchBoxField.addEventListener("focus", function () {
            _this._setHasText();
            _this._searchBox.addEventListener("keyup", _this._boundEnableClose, false);
            _this._searchBox.classList.add(SB_IS_ACTIVE);
            _this._searchBox.classList.add(SB_IS_ACTIVE);
        }, true);
    };
    SearchBox.prototype._clearSearchBox = function (event) {
        var _this = this;
        this._clearOnly = true;
        this._searchBoxField.value = "";
        this._setHasText();
        setTimeout(function () {
            _this._clearOnly = false;
        }, 10);
    };
    SearchBox.prototype._setClearButtonAction = function () {
        var _this = this;
        if (this._searchBoxExitButton) {
            this._searchBoxExitButton.addEventListener("click", this._boundExitSearchBox, false);
        }
        this._searchBoxClearButton.addEventListener("mousedown", this._boundClearSearchBox, false);
        this._searchBoxClearButton.addEventListener("keydown", function (e) {
            var keyCode = e.keyCode;
            if (keyCode === 13) {
                _this._clearSearchBox(e);
            }
        }, false);
    };
    SearchBox.prototype._handleBlur = function (event) {
        var _this = this;
        console.log("_handleBlur");
        if (this._searchBox.classList.contains("ignoreBlur"))
            { return; }
        if (!this._clearOnly) {
            this._searchBox.removeEventListener("keyup", this._boundEnableClose);
            setTimeout(function () {
                if (!_this._searchBox.contains(document.activeElement)) {
                    _this._clearSearchBox();
                    _this._collapseSearchBox();
                    _this.setCollapsedListeners();
                }
            }, 10);
        }
        else {
            this._searchBoxField.focus();
        }
        this._clearOnly = false;
    };
    SearchBox.prototype._setBlurAction = function () {
        this._searchBoxField.addEventListener("blur", this._boundHandleBlur, true);
        this._searchBoxClearButton.addEventListener("blur", this._boundHandleBlur, true);
    };
    SearchBox.prototype._checkState = function () {
        if (this._searchBox.classList.contains("is-collapsed")) {
            this.setCollapsedListeners();
        }
    };
    SearchBox.prototype._addAnimation = function () {
        this._container.classList.add(SB_IS_ANIMATED);
    };
    return SearchBox;
}());

var uiSearchbox = {_scopeId: 'data-v-880410a2',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-880410a2]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } /* searchbox uses mixins from label */ .ms-CommandButton[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden[data-v-880410a2] { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2] { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2]:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu[data-v-880410a2] { display: none; } .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton-splitIcon[data-v-880410a2]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button[data-v-880410a2]:active, .ms-CommandButton-splitIcon[data-v-880410a2]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button[data-v-880410a2]:focus, .ms-CommandButton-splitIcon[data-v-880410a2]:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-880410a2] { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-880410a2] { line-height: 44px; } } .ms-CommandButton-button[data-v-880410a2] { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 4px; } } .ms-CommandButton-icon[data-v-880410a2] { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label[data-v-880410a2] { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label[data-v-880410a2]:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: none; } } .ms-CommandButton-splitIcon[data-v-880410a2] { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2]::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-880410a2] { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-880410a2] { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-880410a2] { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-880410a2] { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-880410a2] { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-880410a2]::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot[data-v-880410a2]:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { font-size: 16px; } } /* searchbox uses classes from CommandButton */ .ms-SearchBox[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; height: 36px; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; position: relative; margin-bottom: 10px; display: inline-block; overflow: hidden; background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.is-active[data-v-880410a2] { z-index: 10; } .ms-SearchBox.is-active .ms-SearchBox-label[data-v-880410a2] { display: none; } .ms-SearchBox.is-active .ms-SearchBox-clear[data-v-880410a2] { display: block; } .ms-SearchBox[data-v-880410a2]:hover { background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:black, default: #000000]\"; } .ms-SearchBox:hover .ms-SearchBox-label .ms-Icon[data-v-880410a2] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-SearchBox.is-disabled[data-v-880410a2] { background-color: #F4F4F4; pointer-events: none; } .ms-SearchBox.is-disabled .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-field[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: transparent; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: default; } .ms-SearchBox-clear[data-v-880410a2] { display: none; position: absolute; top: 0; right: 0; z-index: 10; } .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; height: 36px; } .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox-icon[data-v-880410a2] { position: relative; top: 50%; transform: translateY(-50%); display: inline-block; font-size: 16px; width: 16px; margin-left: 12px; margin-right: 6px; color: \"[theme:themePrimary, default: #0078d7]\"; vertical-align: top; } .ms-SearchBox-field[data-v-880410a2] { position: relative; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:themeTertiary, default: #71afe5]\"; outline: transparent 1px solid; font-weight: 300; font-size: 14px; color: \"[theme:black, default: #000000]\"; height: 36px; padding: 6px 3px 7px 45px; width: 208px; background-color: transparent; z-index: 5; transition: padding-left 0.167s; } .ms-SearchBox-field[data-v-880410a2]:focus { padding: 6px 32px 7px 10px; border-color: \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox-field[data-v-880410a2]::-ms-clear { display: none; } .ms-SearchBox-label[data-v-880410a2] { position: absolute; top: 0; left: 0; height: 36px; line-height: 36px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; width: 208px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2] { transition: none; border: 0; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2]:focus { background-color: transparent; padding: 6px 3px 7px 45px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2] { display: none; position: absolute; top: 0; z-index: 10; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2] { height: 40px; background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]::before { position: absolute; content: ' '; right: 0; bottom: 0; left: 0; margin: 0 8px; border-bottom: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:hover { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:focus { background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-filter[data-v-880410a2] { display: block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2] { width: 50px; min-height: 40px; z-index: 0; background-color: #F4F4F4; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-field[data-v-880410a2] { cursor: pointer; width: calc(100% - 50px); } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2]::before { visibility: hidden; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-field[data-v-880410a2] { display: block; cursor: text; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-text[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; right: 58px; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-filter[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active.is-animated[data-v-880410a2] { transition: width 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); } } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2]::before { visibility: visible; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } @media only screen and (min-width: 1024px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; border-right: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 44px; line-height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { font-size: 20px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { font-size: 16px; } } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label[data-v-880410a2] { display: block; line-height: 40px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2]::before { visibility: visible; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-field[data-v-880410a2] { width: 100%; padding-right: 100px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-icon[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-exit[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-active.has-text .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } } .ms-Icon.ms-Icon--Search[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#0078d7\" stroke=\"none\" transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1344 2048q97 0 187 -25t168 -71t142.5 -110.5t110.5 -142.5t71 -168t25 -187t-25 -187t-71 -168t-110.5 -142.5t-142.5 -110.5t-168 -71t-187 -25q-125 0 -239.5 42t-210.5 121l-785 -784q-19 -19 -45 -19t-45 19t-19 45t19 45l784 785q-79 96 -121 210.5t-42 239.5q0 97 25 187t71 168t110.5 142.5t142.5 110.5t168 71t187 25zM1344 768q119 0 224 45.5t183 123.5t123.5 183t45.5 224t-45.5 224t-123.5 183t-183 123.5t-224 45.5t-224 -45.5t-183 -123.5t-123.5 -183t-45.5 -224t45.5 -224t123.5 -183t183 -123.5t224 -45.5z\"/></svg>'); } .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"white\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } .ms-SearchBox--commandBar .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#a6a6a6\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            SearchBox : SearchBox
        };
    },
    extends :  searchBox
}

var eventHub = {
  data: function data() {
    return {
      eventHub: new Vue()
    };
  },

  provide: function provide() {
    return {
      eventHub: this.eventHub
    };
  }
};

var ContextualMenu = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inline-block"},[_c('span',{ref:"contextualMenuTrigger",staticClass:"inline-block"},[_vm._t("default")],2),_vm._v(" "),_c('ul',{ref:"contextualMenu",staticClass:"ms-ContextualMenu is-hidden",class:_vm.contextualMenuClass},[_vm._t("list")],2)])},staticRenderFns: [],_scopeId: 'data-v-4d60802a',
    name: 'ou-contextual-menu',

    mixins: [type('multiselect'), eventHub],

    props: {
      value: {
        type: Array,
        default: function default$1() {
          return [];
        }
      }
    },

    computed: {
      contextualMenuClass: function contextualMenuClass() {
        var obj;

        return ( obj = {}, obj[("ms-ContextualMenu--" + (this.type))] = !!this.type, obj );
      }
    },

    watch: {
      value: function value() {
        this.setChildrenValue();
      }
    },

    created: function created() {
      this.eventHub.$on('updateValue', this.updateValue);
    },
	data: function data() {
      return {
        contextualMenuInstance: null
      };
    },
    mounted: function mounted() {
      this.setChildrenValue();

      this.contextualMenuInstance = new this.$fabric.ContextualMenu(
        this.$refs.contextualMenu,
        this.$refs.contextualMenuTrigger
      );
    },

    beforeDestroy: function beforeDestroy() {
      this.eventHub.$off('updateValue', this.updateValue);
    },

    methods: {
      setChildrenValue: function setChildrenValue() {
        if (this.type == 'multiselect') {
          this.eventHub.$emit('setSelected', this.value);
        }
      },

      updateValue: function updateValue(value) {
        if (this.type != 'multiselect') { return; }

        var newValue;

        if (this.value.includes(value)) {
          newValue = this.value.filter(function (item) {
            return item !== value;
          });
        } else {
          newValue = this.value.concat(value);
        }

        this.$emit('input', newValue);
      }
    }
  };

var MODAL_POSITION = "bottom";
var SUBMENU_POSITION = "right";
var ContextualMenu$1 = (function () {
    function ContextualMenu(container, hostTarget, position) {
        this._container = container;
        this._hostTarget = hostTarget;
        this._position = position ? position : MODAL_POSITION;
        this._isOpen = false;
        this._setOpener(hostTarget);
        this._init();
    }
    ContextualMenu.prototype.getHost = function () {
        return this._host;
    };
    ContextualMenu.prototype._init = function () {
        this._container.addEventListener("click", this._onContextualMenuClick.bind(this), true);
        document.addEventListener("click", this._onDocumentClick.bind(this), false);
    };
    ContextualMenu.prototype._onDocumentClick = function (event) {
        if (event.target instanceof HTMLElement) {
            var target = event.target;
            var classList = target.classList;
            if (!this._hostTarget.contains(target) && !classList.contains("ms-ContextualMenu-link")) {
                this._isOpen = false;
            }
        }
    };
    ContextualMenu.prototype._onContextualMenuClick = function (event) {
        var target = event.target;
        var classList = target.classList;
        if (classList.contains("ms-ContextualMenu-link") && !classList.contains("is-disabled")) {
            if (this._container.classList.contains("ms-ContextualMenu--multiselect")) {
                this._multiSelect(target);
            }
            else {
                this._singleSelect(target);
                if (!target.parentElement.classList.contains("ms-ContextualMenu-item--hasMenu")) {
                    this._host.disposeModal();
                    this._isOpen = false;
                }
            }
        }
    };
    ContextualMenu.prototype._multiSelect = function (target) {
        if (target.classList.contains("is-selected")) {
            target.classList.remove("is-selected");
        }
        else {
            target.classList.add("is-selected");
        }
    };
    ContextualMenu.prototype._singleSelect = function (target) {
        var selecteds = this._container.querySelectorAll(".is-selected");
        var i = selecteds.length;
        while (i--) {
            selecteds[i].classList.remove("is-selected");
        }
        target.classList.add("is-selected");
    };
    ContextualMenu.prototype._toggleMenu = function (event) {
        (!this._isOpen) ? this._openContextMenu(event) : this._host.disposeModal();
        this._isOpen = !this._isOpen;
    };
    ContextualMenu.prototype._setOpener = function (hostTarget) {
        var _this = this;
        hostTarget.addEventListener("click", function (event) {
            event.preventDefault();
            _this._toggleMenu(event);
        });
    };
    ContextualMenu.prototype._openContextMenu = function (event) {
        this._createModalHostView(this._container, this._position, this._hostTarget);
        this._checkForSubmenus(this._container);
    };
    ContextualMenu.prototype._checkForSubmenus = function (container) {
        var _this = this;
        var submenus = container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
        var i = submenus.length;
        if (submenus.length) {
            var _loop_1 = function () {
                var button = submenus[i].querySelector(".ms-ContextualMenu-link");
                var menu = submenus[i].querySelector(".ms-ContextualMenu");
                if (menu) {
                    var contextualMenu_1 = new ContextualMenu(menu, button, SUBMENU_POSITION);
                    menu.addEventListener("hostAdded", function () {
                        _this._host.setChildren(contextualMenu_1.getHost());
                    });
                }
            };
            while (i--) {
                _loop_1();
            }
        }
    };
    ContextualMenu.prototype._createModalHostView = function (container, position, hostTarget) {
        container.classList.remove("is-hidden");
        this._host = new ContextualHost(container, position, hostTarget, false);
        var event = document.createEvent("Event");
        event.initEvent("hostAdded", true, true);
        container.dispatchEvent(event);
    };
    return ContextualMenu;
}());

var uiContextualMenu = {_scopeId: 'data-v-94d26018',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ContextualMenu[data-v-94d26018] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; display: block; min-width: 180px; max-width: 220px; list-style-type: none; position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu.is-hidden[data-v-94d26018] { display: none; } .ms-ContextualMenu-item[data-v-94d26018] { position: relative; } .ms-ContextualMenu-link[data-v-94d26018] { box-sizing: border-box; text-decoration: none; color: \"[theme:neutralPrimary, default: #333333]\"; border: 1px solid transparent; cursor: pointer; display: block; height: 36px; overflow: hidden; line-height: 34px; padding: 0 16px 0 25px; position: relative; text-overflow: ellipsis; white-space: nowrap; } .ms-ContextualMenu-link[data-v-94d26018]:hover, .ms-ContextualMenu-link[data-v-94d26018]:active, .ms-ContextualMenu-link[data-v-94d26018]:focus { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:hover .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-link:active .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-link:focus .ms-ContextualMenu-subMenuIcon[data-v-94d26018] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link[data-v-94d26018]:focus { outline: transparent; border: 1px solid \"[theme:neutralSecondary, default: #666666]\"; } .ms-ContextualMenu-link.is-selected[data-v-94d26018] { background-color: \"[theme:neutralQuaternaryAlt, default: #dadada]\"; color: \"[theme:black, default: #000000]\"; font-weight: 600; } .ms-ContextualMenu-link.is-selected ~ .ms-ContextualMenu-subMenuIcon[data-v-94d26018] { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover { background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu-link.is-disabled[data-v-94d26018] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: \"[theme:white, default: #ffffff]\"; pointer-events: none; } .ms-ContextualMenu-link.is-disabled[data-v-94d26018]:active, .ms-ContextualMenu-link.is-disabled[data-v-94d26018]:focus { border-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu-link.is-disabled .ms-Icon[data-v-94d26018] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; pointer-events: none; cursor: default; } .ms-ContextualMenu-item.ms-ContextualMenu-item--divider[data-v-94d26018] { cursor: default; display: block; height: 1px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; position: relative; } .ms-ContextualMenu-item.ms-ContextualMenu-item--header[data-v-94d26018] { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; text-transform: uppercase; height: 36px; line-height: 36px; padding: 0 18px; } .ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu .ms-ContextualMenu[data-v-94d26018] { position: absolute; top: -1px; left: 178px; } .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-caretRight[data-v-94d26018] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 8px; font-weight: 600; width: 24px; height: 36px; line-height: 36px; position: absolute; text-align: center; top: 0; right: 0; z-index: 1; pointer-events: none; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-item.ms-ContextualMenu-item--header[data-v-94d26018] { padding: 0 16px 0 26px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018] { background-color: \"[theme:white, default: #ffffff]\"; font-weight: 600; color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]::after { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; color: \"[theme:neutralPrimary, default: #333333]\"; content: '\\E73E'; font-size: 10px; font-weight: 800; height: 36px; line-height: 36px; position: absolute; left: 7px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:focus { color: \"[theme:neutralDark, default: #212121]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover::after, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:focus::after { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:active { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:active::after { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-ContextualMenu-link[data-v-94d26018], .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-ContextualMenu-link[data-v-94d26018] { padding-left: 40px; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-Icon[data-v-94d26018], .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-Icon[data-v-94d26018] { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; text-align: center; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons[data-v-94d26018] { width: 220px; } .ms-ContextualHost[data-v-94d26018] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned[data-v-94d26018] { position: absolute; margin: 0; } .ms-ContextualHost.is-open[data-v-94d26018] { display: inline-block; } .ms-ContextualHost-beak[data-v-94d26018] { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018], .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018] { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018] { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018] { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak[data-v-94d26018] { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak[data-v-94d26018] { display: block; bottom: -10px; } .ms-ContextualHost-main[data-v-94d26018] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close[data-v-94d26018] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title[data-v-94d26018] { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak[data-v-94d26018] { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost[data-v-94d26018] { margin: 16px; } .ms-ContextualHost.is-positioned[data-v-94d26018] { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018], .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018] { display: block; } } .ms-Icon.ms-Icon--ChevronRight[data-v-94d26018]::before { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"8\" height=\"8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M515 93l930 931l-930 931l90 90l1022 -1021l-1022 -1021z\" fill=\"black\" stroke=\"none\"/></svg>'); } .ms-ContextualMenu-link.is-selected[data-v-94d26018]::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"10\" height=\"10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1837 1491l-1069 -1070l-557 558l90 90l467 -466l979 978z\" fill=\"black\" stroke=\"none\"/></svg>') !important; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            ContextualMenu : ContextualMenu$1
        };
    },
    mounted: function mounted(){
        var this$1 = this;

        this.$refs.contextualMenuTrigger.addEventListener("click", function (){
            
            var setScopeIdForContextualHost = function (contextualhost) {
                contextualhost.setAttribute(this$1.$options._scopeId,"");
                Array.from(contextualhost.children).map(function (c){ return c.setAttribute(this$1.$options._scopeId,""); });
            };

            // set scopeId for contextualhost
            setScopeIdForContextualHost(this$1.$refs.contextualMenu.parentElement.parentElement);

            // scopeId for menuItems
            var menuItems = this$1.$refs.contextualMenu.querySelectorAll("[class^='ms-ContextualMenu']");
            Array.from(menuItems).map(function (menuItem){ return menuItem.setAttribute(this$1.$options._scopeId, ""); });

            var subItems = this$1.contextualMenuInstance._container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
            Array.from(subItems).map(function (subItem){
                subItem.addEventListener("click", function (){
                    var contextualMenuElmInsideHost = document.querySelector((".ms-ContextualHost:not([" + (this$1.$options._scopeId) + "]) [" + (this$1.$options._scopeId) + "]"));
                    if(contextualMenuElmInsideHost && contextualMenuElmInsideHost.parentElement.parentElement)
                        { setScopeIdForContextualHost(contextualMenuElmInsideHost.parentElement.parentElement); }
                    ContextualHost.hosts[ContextualHost.hosts.length-1]._openModal();
                });
            });

        });
    },
    extends :  ContextualMenu
}

var ContextualMenuItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ms-ContextualMenu-item",class:_vm.contextualMenuItemClass},[(_vm.type == 'header')?_c('span',[_vm._v(_vm._s(_vm.name))]):_vm._e(),_vm._v(" "),(_vm.hasLink)?_c('a',{staticClass:"ms-ContextualMenu-link",class:_vm.contextualMenuLinkClass,on:{"click":_vm.clickEvent}},[_vm._v(" "+_vm._s(_vm.name)+" ")]):_vm._e(),_vm._v(" "),(_vm.hasMenu)?_c('i',{staticClass:"ms-ContextualMenu-subMenuIcon ms-Icon ms-Icon--ChevronRight"}):_vm._e(),_vm._v(" "),(_vm.hasMenu)?_c('ul',{staticClass:"ms-ContextualMenu is-hidden"},[_vm._t("default")],2):_vm._e()])},staticRenderFns: [],
  name: 'ou-contextual-menu-item',

  mixins: [type('divider', 'header', 'hasMenu'), disabled],

  inject: ['eventHub'],

  data: function data() {
    return {
      selected: false
    };
  },

  props: {
    name: String,
    value: [String, Number]
  },

  computed: {
    hasLink: function hasLink() {
      return this.type == 'hasMenu' || this.type == '';
    },

    hasMenu: function hasMenu() {
      return this.type == 'hasMenu';
    },

    contextualMenuItemClass: function contextualMenuItemClass() {
      var obj;

      return ( obj = {}, obj[("ms-ContextualMenu-item--" + (this.type))] = !!this.type, obj );
    },

    contextualMenuLinkClass: function contextualMenuLinkClass() {
      return {
        'is-disabled': this.disabled,
        'is-selected': this.selected
      };
    }
  },

  created: function created() {
    this.eventHub.$on('setSelected', this.setSelected);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelected', this.setSelected);
  },

  methods: {
    clickEvent: function clickEvent() {
      if (this.value) {
        this.eventHub.$emit('updateValue', this.value);
      } else if (!this.type && !this.disabled) {
        this.$emit('click');
      }
    },

    setSelected: function setSelected(values) {
      if (values.includes(this.value)) {
        this.selected = true;
      } else {
        this.selected = false;
      }
    }
  }
};

var uiContextualMenuItem = {
    beforeCreate: function beforeCreate(){ loadStyles("");},
    extends :  ContextualMenuItem
}

var checkbox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"checkbox",staticClass:"ms-CheckBox"},[_c('input',{staticClass:"ms-CheckBox-input",attrs:{"tabindex":"-1","type":"checkbox"},on:{"click":_vm.toggle}}),_vm._v(" "),_c('label',{staticClass:"ms-CheckBox-field",class:{ 'is-disabled': _vm.disabled },attrs:{"role":"checkbox","tabindex":"0","aria-checked":"false","name":"checkbox"}},[_c('span',{staticClass:"ms-Label"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-checkbox',

  mixins: [disabled],

  props: {
    value: Boolean
  },

  data: function data() {
    return {
      checkboxInstance: null
    };
  },

  watch: {
    value: function value() {
      this.setCheck();
    }
  },

  mounted: function mounted() {
    this.checkboxInstance = new this.$fabric.CheckBox(this.$refs.checkbox);
    this.setCheck();
  },

  methods: {
    toggle: function toggle() {
      this.$emit('input', this.checkboxInstance.getValue());
    },

    setCheck: function setCheck() {
      this.value && !this.disabled ?
        this.checkboxInstance.check() :
        this.checkboxInstance.unCheck();
    }
  }
};

var CheckBox = (function () {
    function CheckBox(container) {
        this._container = container;
        this._choiceField = this._container.querySelector(".ms-CheckBox-field");
        this._choiceInput = this._container.querySelector(".ms-CheckBox-input");
        if (this._choiceInput.checked) {
            this._choiceField.setAttribute("aria-checked", "true");
        }
        if (this._choiceField.getAttribute("aria-checked") === "true") {
            this._choiceField.classList.add("is-checked");
        }
        this._addListeners();
    }
    CheckBox.prototype.getValue = function () {
        return this._choiceField.getAttribute("aria-checked") === "true" ? true : false;
    };
    CheckBox.prototype.toggle = function () {
        if (this.getValue()) {
            this.unCheck();
        }
        else {
            this.check();
        }
        this._choiceInput.click();
    };
    CheckBox.prototype.check = function () {
        this._choiceField.setAttribute("aria-checked", "true");
        this._choiceField.classList.add("is-checked");
    };
    CheckBox.prototype.unCheck = function () {
        this._choiceField.setAttribute("aria-checked", "false");
        this._choiceField.classList.remove("is-checked");
    };
    CheckBox.prototype.removeListeners = function () {
        this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this));
        this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this));
        this._choiceField.removeEventListener("click", this._ClickHandler.bind(this));
        this._choiceField.removeEventListener("keydown", this._KeydownHandler.bind(this));
    };
    CheckBox.prototype._addListeners = function (events) {
        var ignore = events && events.ignore;
        if (!ignore || !(ignore.indexOf("focus") > -1)) {
            this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), false);
        }
        if (!ignore || !(ignore.indexOf("blur") > -1)) {
            this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), false);
        }
        if (!ignore || !(ignore.indexOf("click") > -1)) {
            this._choiceField.addEventListener("click", this._ClickHandler.bind(this), false);
        }
        if (!ignore || !(ignore.indexOf("keydown") > -1)) {
            this._choiceField.addEventListener("keydown", this._KeydownHandler.bind(this), false);
        }
    };
    CheckBox.prototype._FocusHandler = function () {
        this._choiceField.classList.add("in-focus");
    };
    CheckBox.prototype._BlurHandler = function () {
        this._choiceField.classList.remove("in-focus");
    };
    CheckBox.prototype._ClickHandler = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this._choiceField.classList.contains("is-disabled")) {
            this.toggle();
        }
    };
    CheckBox.prototype._KeydownHandler = function (event) {
        if (event.keyCode === 32) {
            event.stopPropagation();
            event.preventDefault();
            if (!this._choiceField.classList.contains("is-disabled")) {
                this.toggle();
            }
        }
    };
    return CheckBox;
}());

var uiCheckbox = {_scopeId: 'data-v-75ed8232',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CheckBox[data-v-75ed8232] { box-sizing: border-box; color: \"[theme:neutralPrimary, default: #333333]\"; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; font-size: 14px; font-weight: 400; min-height: 36px; position: relative; } .ms-CheckBox .ms-Label[data-v-75ed8232] { font-size: 14px; padding: 0 0 0 26px; cursor: pointer; display: inline-block; } .ms-CheckBox-input[data-v-75ed8232] { position: absolute; opacity: 0; } .ms-CheckBox-field[data-v-75ed8232]::before { content: ''; display: inline-block; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; width: 20px; height: 20px; cursor: pointer; font-weight: normal; position: absolute; box-sizing: border-box; transition-property: background, border, border-color; transition-duration: 200ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } .ms-CheckBox-field[data-v-75ed8232]::after { content: \"\\E73E\"; font-family: 'FabricMDL2Icons'; display: none; position: absolute; font-weight: 900; background-color: transparent; font-size: 13px; top: 0; color: \"[theme:white, default: #ffffff]\"; line-height: 20px; width: 20px; text-align: center; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field[data-v-75ed8232]::after { color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field[data-v-75ed8232]::after { color: \"[theme:white, default: #ffffff]\"; } } .ms-CheckBox-field[data-v-75ed8232] { display: inline-block; cursor: pointer; margin-top: 8px; position: relative; outline: 0; vertical-align: top; } .ms-CheckBox-field[data-v-75ed8232]:hover::before, .ms-CheckBox-field[data-v-75ed8232]:focus::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-CheckBox-field:hover .ms-Label[data-v-75ed8232], .ms-CheckBox-field:focus .ms-Label[data-v-75ed8232] { color: \"[theme:black, default: #000000]\"; } .ms-CheckBox-field.is-disabled[data-v-75ed8232] { cursor: default; } .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { border-color: #600000; } } .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: #600000; } } .ms-CheckBox-field.in-focus[data-v-75ed8232]::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-CheckBox-field.in-focus.is-disabled[data-v-75ed8232]::before { border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CheckBox-field.in-focus.is-checked[data-v-75ed8232]::before { border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border: 10px solid \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border-color: #37006E; } } .ms-CheckBox-field.is-checked[data-v-75ed8232]::after { display: block; } .ms-CheckBox-field.is-checked[data-v-75ed8232]:hover::before, .ms-CheckBox-field.is-checked[data-v-75ed8232]:focus::before { border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-CheckBox-field[data-v-75ed8232]::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1837 1491l-1069 -1070l-557 558l90 90l467 -466l979 978z\" fill=\"white\" stroke=\"none\"/></svg>') !important; } ");},
    beforeMount: function beforeMount(){ 
        this.$fabric = { 
            CheckBox : CheckBox 
        }; 
    },
    extends :  checkbox
}

var ChoiceField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ms-RadioButton"},[_c('input',{staticClass:"ms-RadioButton-input",attrs:{"tabindex":"-1","type":"radio"}}),_vm._v(" "),_c('label',{ref:"radioLabel",staticClass:"ms-RadioButton-field",class:{ 'is-disabled': _vm.disabled },attrs:{"role":"radio","tabindex":"0","aria-checked":"false","name":"choicefieldgroup"},on:{"click":_vm.updateParentValue}},[_c('span',{staticClass:"ms-Label"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-choice-field',

  mixins: [disabled],

  inject: ['eventHub'],

  props: {
    value: [String, Number]
  },

  created: function created() {
    this.eventHub.$on('setChoiceField', this.setChoiceField);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setChoiceField', this.setChoiceField);
  },

  methods: {
    updateParentValue: function updateParentValue() {
      if (!this.disabled) {
        this.eventHub.$emit('updateValue', this.value);
      }
    },

    setChoiceField: function setChoiceField(value) {
      if (this.disabled) { return; }

      if (this.value == value) {
        this.$refs.radioLabel.classList.add('is-checked');
      } else {
        this.$refs.radioLabel.classList.remove('is-checked');
      }
    }
  }
};

var uiChoiceField = {
    extends :  ChoiceField,
    created: function created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}

var ChoiceFieldGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"choiceFieldGroup",staticClass:"ms-ChoiceFieldGroup",attrs:{"id":"choicefieldgroup","role":"radiogroup"}},[_c('div',{staticClass:"ms-ChoiceFieldGroup-title"},[_vm._t("title")],2),_vm._v(" "),_c('ul',{staticClass:"ms-ChoiceFieldGroup-list"},[_vm._t("default")],2)])},staticRenderFns: [],
  name: 'ou-choice-field-group',

  mixins: [eventHub],

  props: {
    value: [String, Number]
  },

  watch: {
    value: function value() {
      this.setChoiceFields();
    }
  },

  created: function created() {
    this.eventHub.$on('updateValue', this.updateValue);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('updateValue', this.updateValue);
  },

  mounted: function mounted() {
    this.setChoiceFields();
    new this.$fabric.ChoiceFieldGroup(this.$refs.choiceFieldGroup);
  },

  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    },

    setChoiceFields: function setChoiceFields() {
      if (typeof this.value != 'undefined') {
        this.eventHub.$emit('setChoiceField', this.value);
      }
    }
  }
};

var RadioButton = (function () {
    function RadioButton(container) {
        this._container = container;
        this._choiceField = this._container.querySelector(".ms-RadioButton-field");
        this._choiceInput = this._container.querySelector(".ms-RadioButton-input");
        if (this._choiceField.getAttribute("aria-checked") === "true") {
            this._choiceField.classList.add("is-checked");
        }
        this._addListeners();
    }
    RadioButton.prototype.getValue = function () {
        return this._choiceField.getAttribute("aria-checked") === "true" ? true : false;
    };
    RadioButton.prototype.toggle = function () {
        if (this.getValue()) {
            this.unCheck();
        }
        else {
            this.check();
        }
    };
    RadioButton.prototype.check = function () {
        this._choiceField.setAttribute("aria-checked", "true");
        this._choiceField.classList.add("is-checked");
        this._choiceInput.checked = true;
    };
    RadioButton.prototype.unCheck = function () {
        this._choiceField.setAttribute("aria-checked", "false");
        this._choiceField.classList.remove("is-checked");
        this._choiceInput.checked = false;
    };
    RadioButton.prototype.removeListeners = function () {
        this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this));
        this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this));
        this._choiceField.removeEventListener("click", this._RadioClickHandler.bind(this));
        this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this));
    };
    RadioButton.prototype._addListeners = function () {
        this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), false);
        this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), false);
        this._choiceField.addEventListener("click", this._RadioClickHandler.bind(this), false);
        this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this), false);
    };
    RadioButton.prototype._RadioClickHandler = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this._choiceField.classList.contains("is-disabled")) {
            this._dispatchSelectEvent();
        }
    };
    RadioButton.prototype._dispatchSelectEvent = function () {
        var objDict = {
            bubbles: true,
            cancelable: true,
            detail: {
                name: this._choiceField.getAttribute("name"),
                item: this
            }
        };
        this._choiceField.dispatchEvent(new CustomEvent("msChoicefield", objDict));
    };
    RadioButton.prototype._RadioKeydownHandler = function (event) {
        if (event.keyCode === 32) {
            event.stopPropagation();
            event.preventDefault();
            if (!this._choiceField.classList.contains("is-disabled")) {
                this._dispatchSelectEvent();
            }
        }
    };
    RadioButton.prototype._FocusHandler = function () {
        this._choiceField.classList.add("in-focus");
    };
    RadioButton.prototype._BlurHandler = function () {
        this._choiceField.classList.remove("in-focus");
    };
    return RadioButton;
}());

var ChoiceFieldGroup$1 = (function () {
    function ChoiceFieldGroup(container) {
        this._choiceFieldGroup = container;
        this._choiceFieldComponents = [];
        this._initalSetup();
        this._addListeners();
    }
    ChoiceFieldGroup.prototype.removeListeners = function () {
        this._choiceFieldGroup.removeEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this));
    };
    ChoiceFieldGroup.prototype._initalSetup = function () {
        var this$1 = this;

        var choiceFieldElements = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton");
        for (var i = 0; i < choiceFieldElements.length; i++) {
            this$1._choiceFieldComponents[i] = new RadioButton(choiceFieldElements[i]);
        }
    };
    ChoiceFieldGroup.prototype._addListeners = function () {
        document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), false);
    };
    ChoiceFieldGroup.prototype._ChoiceFieldHandler = function (event) {
        var this$1 = this;

        var name = event.detail.name;
        var selectedChoice = event.detail.item;
        if (this._choiceFieldGroup.id === name) {
            for (var i = 0; i < this._choiceFieldComponents.length; i++) {
                this$1._choiceFieldComponents[i].unCheck();
            }
            selectedChoice.check();
        }
    };
    return ChoiceFieldGroup;
}());

var uiChoiceFieldGroup = {_scopeId: 'data-v-9afc786c',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-RadioButton[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; min-height: 36px; position: relative; } .ms-RadioButton .ms-Label[data-v-9afc786c] { font-size: 14px; padding: 0 0 0 26px; cursor: pointer; display: inline-block; } .ms-RadioButton-input[data-v-9afc786c] { position: absolute; opacity: 0; } .ms-RadioButton-field[data-v-9afc786c]::before { content: ''; display: inline-block; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; width: 20px; height: 20px; cursor: pointer; font-weight: normal; position: absolute; box-sizing: border-box; transition-property: border-color; transition-duration: 200ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); border-radius: 50%; } .ms-RadioButton-field[data-v-9afc786c]::after { content: ''; width: 0; height: 0; border-radius: 50%; position: absolute; top: 8px; left: 8px; bottom: 0; right: 0; transition-property: top, left, width, height; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); box-sizing: border-box; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #600000; } } .ms-RadioButton-field[data-v-9afc786c] { display: inline-block; cursor: pointer; margin-top: 8px; position: relative; outline: 0; vertical-align: top; } .ms-RadioButton-field[data-v-9afc786c]:hover::before, .ms-RadioButton-field[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field:hover .ms-Label[data-v-9afc786c], .ms-RadioButton-field:focus .ms-Label[data-v-9afc786c] { color: \"[theme:black, default: #000000]\"; } .ms-RadioButton-field.is-disabled[data-v-9afc786c] { cursor: default; } .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #600000; } } .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #600000; } } .ms-RadioButton-field.is-disabled[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-disabled[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-RadioButton-field.in-focus[data-v-9afc786c]::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border: 2px solid \"[theme:themePrimary, default: #0078d7]\"; background-color: transparent; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: \"[theme:themePrimary, default: #0078d7]\"; top: 5px; left: 5px; width: 10px; height: 10px; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-checked[data-v-9afc786c]:focus::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-RadioButton-field.is-checked.in-focus[data-v-9afc786c]::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-ChoiceFieldGroup[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; margin-bottom: 4px; } .ms-ChoiceFieldGroup .ms-ChoiceFieldGroup-list[data-v-9afc786c] { padding: 0; margin: 0; list-style: none; } ");},
    beforeMount: function beforeMount(){ 
        this.$fabric = { 
            ChoiceFieldGroup : ChoiceFieldGroup$1 
        }; 
    },
    extends :  ChoiceFieldGroup
}

var Dropdown = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dropdown",staticClass:"ms-Dropdown",class:{ 'is-disabled': _vm.disabled }},[(_vm.label)?_c('label',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"}),_vm._v(" "),_c('select',{ref:"dropdownSelect",staticClass:"ms-Dropdown-select",on:{"change":_vm.getCurrentSelected}},[_vm._t("default")],2)])},staticRenderFns: [],
  name: 'ou-dropdown',

  mixins: [disabled, eventHub],

  props: {
    label: String,
    value: [String, Number],

    placeholder: {
      type: String,
      default: 'Please select'
    }
  },

  watch: {
    value: function value() {
      this.setSelectedItem();
    }
  },

  created: function created() {
    this.eventHub.$on('setSelectedStatus', this.setSelectedStatus);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelectedStatus', this.setSelectedStatus);
  },

  mounted: function mounted() {
    new this.$fabric.Dropdown(this.$refs.dropdown);

    this.setDropdownTitle(this.placeholder);
    this.setSelectedItem();
  },

  methods: {
    setDropdownTitle: function setDropdownTitle(title) {
      this.$refs.dropdown.querySelector('.ms-Dropdown-title').textContent = title;
    },

    // Because the office ui js dropdown component don't have selected class to set
    // selected dropdown item, So write some hack code to set dropdown item selected.
    // Maybe next version of office ui js will fix this problem, So this code sould be
    // rewrite.
    setSelectedItem: function setSelectedItem() {
      this.eventHub.$emit('setSelectedItem', this.value);
    },

    setSelectedStatus: function setSelectedStatus(content) {
      var this$1 = this;

      this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item').forEach(function (item) {
        if (item.textContent == content) {
          item.classList.add('is-selected');
          this$1.setDropdownTitle(content);
        } else {
          item.classList.remove('is-selected');
        }
      });
    },

    getCurrentSelected: function getCurrentSelected() {
      var dropdownSelect = this.$refs.dropdownSelect;
      this.$emit('input', dropdownSelect.options[dropdownSelect.selectedIndex].value);
    }
  }
};

var PANEL_HOST_CLASS = "ms-PanelHost";
var PanelHost = (function () {
    function PanelHost(layer, callBack) {
        this._layer = layer;
        this._callBack = callBack;
        this._createElements();
        this._renderElements();
    }
    PanelHost.prototype.dismiss = function () {
        this.overlay.hide();
        document.body.removeChild(this.panelHost);
    };
    PanelHost.prototype.update = function (layer, callBack) {
        this.panelHost.replaceChild(layer, this._layer);
        if (callBack) {
            callBack();
        }
    };
    PanelHost.prototype._renderElements = function () {
        document.body.appendChild(this.panelHost);
        if (this._callBack) {
            this._callBack(this._layer);
        }
    };
    PanelHost.prototype._createElements = function () {
        this.panelHost = document.createElement("div");
        this.panelHost.classList.add(PANEL_HOST_CLASS);
        this.panelHost.appendChild(this._layer);
        this.overlay = new Overlay(this._overlayContainer);
        this.overlay.show();
        this.panelHost.appendChild(this.overlay.overlayElement);
    };
    return PanelHost;
}());

var ANIMATE_IN_STATE = "animate-in";
var ANIMATE_OUT_STATE = "animate-out";
var ANIMATION_END = 400;
var Panel = (function () {
    function Panel(panel, direction, animateOverlay) {
        this._panel = panel;
        this._direction = direction || "right";
        this._animateOverlay = animateOverlay || true;
        this.panelHost = new PanelHost(this._panel, this._animateInPanel);
        this._closeButton = this._panel.querySelector(".ms-PanelAction-close");
        this._clickHandler = this.dismiss.bind(this, null);
        this._setEvents();
        document.body.setAttribute("style", "height: 100%; overflow: hidden;");
    }
    Panel.prototype.dismiss = function (callBack) {
        var _this = this;
        this._panel.classList.add(ANIMATE_OUT_STATE);
        setTimeout(function () {
            _this._panel.classList.remove(ANIMATE_OUT_STATE);
            _this._panel.classList.remove("is-open");
            _this.panelHost.dismiss();
            if (callBack) {
                callBack();
            }
            document.body.setAttribute("style", "");
        }, ANIMATION_END);
        if (this._closeButton !== null) {
            this._closeButton.removeEventListener("click", this._clickHandler);
        }
    };
    Panel.prototype._setEvents = function () {
        this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler);
        if (this._closeButton !== null) {
            this._closeButton.addEventListener("click", this._clickHandler);
        }
    };
    Panel.prototype._animateInPanel = function (layer) {
        layer.classList.add(ANIMATE_IN_STATE);
        layer.classList.add("is-open");
        setTimeout(function () {
            layer.classList.remove(ANIMATE_IN_STATE);
        }, ANIMATION_END);
    };
    return Panel;
}());

var DROPDOWN_CLASS = "ms-Dropdown";
var DROPDOWN_TITLE_CLASS = "ms-Dropdown-title";
var DROPDOWN_LABEL_HELPER = "ms-Dropdown-truncator";
var DROPDOWN_ITEMS_CLASS = "ms-Dropdown-items";
var DROPDOWN_ITEM_CLASS = "ms-Dropdown-item";
var DROPDOWN_SELECT_CLASS_SELECTOR = ".ms-Dropdown-select";
var PANEL_CLASS = "ms-Panel";
var IS_OPEN_CLASS = "is-open";
var IS_DISABLED_CLASS = "is-disabled";
var IS_SELECTED_CLASS = "is-selected";
var ANIMATE_IN_CLASS = "animate-in";
var SMALL_MAX_WIDTH = 479;
var Dropdown$1 = (function () {
    function Dropdown(container) {
        var this$1 = this;

        this._container = container;
        this._dropdownLabelHelper = document.createElement("span");
        this._dropdownLabelHelper.classList.add(DROPDOWN_LABEL_HELPER);
        this._dropdownLabelHelper.classList.add(DROPDOWN_TITLE_CLASS);
        this._newDropdownLabel = document.createElement("span");
        this._newDropdownLabel.classList.add(DROPDOWN_TITLE_CLASS);
        this._newDropdown = document.createElement("ul");
        this._newDropdown.classList.add(DROPDOWN_ITEMS_CLASS);
        this._dropdownItems = [];
        this._originalDropdown = container.querySelector(DROPDOWN_SELECT_CLASS_SELECTOR);
        var _originalOptions = this._originalDropdown.querySelectorAll("option");
        this._onCloseDropdown = this._onCloseDropdown.bind(this);
        this._onItemSelection = this._onItemSelection.bind(this);
        this._onOpenDropdown = this._onOpenDropdown.bind(this);
        for (var i = 0; i < _originalOptions.length; ++i) {
            var option = _originalOptions[i];
            if (option.selected) {
                this$1._newDropdownLabel.innerHTML = option.text;
            }
            var newItem = document.createElement("li");
            newItem.classList.add(DROPDOWN_ITEM_CLASS);
            if (option.disabled) {
                newItem.classList.add(IS_DISABLED_CLASS);
            }
            if (option.selected) {
                newItem.classList.add(IS_SELECTED_CLASS);
            }
            newItem.innerHTML = option.text;
            newItem.addEventListener("click", this$1._onItemSelection);
            this$1._newDropdown.appendChild(newItem);
            this$1._dropdownItems.push({
                oldOption: option,
                newItem: newItem
            });
        }
        container.appendChild(this._newDropdownLabel);
        container.appendChild(this._newDropdown);
        container.appendChild(this._dropdownLabelHelper);
        this._newDropdownLabel.addEventListener("click", this._onOpenDropdown);
        this._checkTruncation();
        this._setWindowEvent();
    }
    Dropdown.prototype._setWindowEvent = function () {
        var _this = this;
        window.addEventListener("resize", function () {
            _this._doResize();
            _this._checkTruncation();
        }, false);
    };
    Dropdown.prototype._checkTruncation = function () {
        var this$1 = this;

        var selected = this._newDropdown.querySelector("." + IS_SELECTED_CLASS);
        var origText = (selected ?
            selected.textContent :
            this._newDropdown.querySelectorAll("." + DROPDOWN_ITEM_CLASS)[0].textContent);
        this._dropdownLabelHelper.textContent = origText;
        if (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {
            var i = 0;
            var ellipsis = "...";
            var newText = void 0;
            do {
                i--;
                newText = origText.slice(0, i);
                this$1._dropdownLabelHelper.textContent = newText + ellipsis;
            } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);
        }
        this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;
    };
    Dropdown.prototype._getScreenSize = function () {
        var w = window;
        var wSize = {
            x: 0,
            y: 0
        };
        var d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
        wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
        wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;
        return wSize;
    };
    Dropdown.prototype._doResize = function () {
        var isOpen = this._container.classList.contains(IS_OPEN_CLASS);
        if (!isOpen) {
            return;
        }
        var screenSize = this._getScreenSize().x;
        if (screenSize <= SMALL_MAX_WIDTH) {
            this._openDropdownAsPanel();
        }
        else {
            this._removeDropdownAsPanel();
        }
    };
    Dropdown.prototype._openDropdownAsPanel = function () {
        if (this._panel === undefined) {
            this._panelContainer = document.createElement("div");
            this._panelContainer.classList.add(PANEL_CLASS);
            this._panelContainer.classList.add(DROPDOWN_CLASS);
            this._panelContainer.classList.add(IS_OPEN_CLASS);
            this._panelContainer.classList.add(ANIMATE_IN_CLASS);
            this._panelContainer.appendChild(this._newDropdown);
            this._panel = new Panel(this._panelContainer);
        }
    };
    Dropdown.prototype._removeDropdownAsPanel = function (evt) {
        var _this = this;
        if (this._panel !== undefined) {
            if (evt && evt.target === this._panel.panelHost.overlay.overlayElement) {
                this._container.appendChild(this._newDropdown);
            }
            else {
                this._panel.dismiss(function () {
                    _this._container.appendChild(_this._newDropdown);
                });
            }
            this._panel = undefined;
        }
    };
    Dropdown.prototype._onOpenDropdown = function (evt) {
        var isDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
        var isOpen = this._container.classList.contains(IS_OPEN_CLASS);
        if (!isDisabled && !isOpen) {
            evt.stopPropagation();
            this._closeOtherDropdowns();
            this._container.classList.add(IS_OPEN_CLASS);
            document.addEventListener("click", this._onCloseDropdown);
            var screenSize = this._getScreenSize().x;
            if (screenSize <= SMALL_MAX_WIDTH) {
                this._openDropdownAsPanel();
            }
        }
    };
    Dropdown.prototype._closeOtherDropdowns = function () {
        var dropdowns = document.querySelectorAll("." + DROPDOWN_CLASS + "." + IS_OPEN_CLASS);
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].classList.remove(IS_OPEN_CLASS);
        }
    };
    Dropdown.prototype._onCloseDropdown = function (evt) {
        this._removeDropdownAsPanel(evt);
        this._container.classList.remove(IS_OPEN_CLASS);
        document.removeEventListener("click", this._onCloseDropdown);
    };
    Dropdown.prototype._onItemSelection = function (evt) {
        var this$1 = this;

        var item = evt.target;
        var isDropdownDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
        var isOptionDisabled = item.classList.contains(IS_DISABLED_CLASS);
        if (!isDropdownDisabled && !isOptionDisabled) {
            for (var i = 0; i < this._dropdownItems.length; ++i) {
                if (this$1._dropdownItems[i].newItem === item) {
                    this$1._dropdownItems[i].newItem.classList.add(IS_SELECTED_CLASS);
                    this$1._dropdownItems[i].oldOption.selected = true;
                }
                else {
                    this$1._dropdownItems[i].newItem.classList.remove(IS_SELECTED_CLASS);
                    this$1._dropdownItems[i].oldOption.selected = false;
                }
            }
            this._newDropdownLabel.innerHTML = item.textContent;
            this._checkTruncation();
            var changeEvent = document.createEvent("HTMLEvents");
            changeEvent.initEvent("change", false, true);
            this._originalDropdown.dispatchEvent(changeEvent);
        }
    };
    return Dropdown;
}());

var uiDropdown = {_scopeId: 'data-v-d4b6df96',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Dropdown[data-v-d4b6df96] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 10px; position: relative; outline: 0; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:hover .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:black, default: #000000]\"; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Dropdown .ms-Label[data-v-d4b6df96] { display: inline-block; margin-bottom: 8px; } .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #00ff00; color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #600000; color: #600000; } } .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #600000; } } .ms-Dropdown.is-open .ms-Dropdown-items[data-v-d4b6df96] { display: block; position: absolute; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96] { box-shadow: none; overflow-y: auto; padding-top: 4px; max-height: 100%; } .ms-Panel .ms-Dropdown-items .ms-Dropdown-item[data-v-d4b6df96] { padding: 7px 16px; overflow: hidden; text-overflow: ellipsis; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96]::before { content: none; border: 0; } .ms-Dropdown-select[data-v-d4b6df96] { display: none; } .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralDark, default: #212121]\"; font-size: 12px; position: absolute; right: 13px; bottom: 9px; z-index: 1; pointer-events: none; } .ms-Dropdown-title[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; cursor: pointer; display: block; height: 32px; padding: 5px 32px 0 10px; position: relative; overflow: hidden; } .ms-Dropdown-title.ms-Dropdown-truncator[data-v-d4b6df96] { height: auto; display: block; position: absolute; visibility: hidden; } .ms-Dropdown-items[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); background-color: \"[theme:white, default: #ffffff]\"; display: none; list-style-type: none; position: absolute; width: 100%; max-height: 200px; z-index: 400; overflow-y: scroll; top: auto; right: auto; bottom: auto; left: auto; max-width: 100%; } .ms-Dropdown-items[data-v-d4b6df96]::before { content: ''; position: absolute; z-index: -1; top: 0; left: 0; right: 0; bottom: 0; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Dropdown-item[data-v-d4b6df96] { box-sizing: border-box; cursor: pointer; display: block; height: 36px; padding: 7px 10px; position: relative; border: 1px solid transparent; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; color: \"[theme:black, default: #000000]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item[data-v-d4b6df96]:hover:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-disabled[data-v-d4b6df96] { background: \"[theme:white, default: #ffffff]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: \"[theme:themeLight, default: #c7e0f4]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:hover, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:focus, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-caretDown[data-v-d4b6df96] { bottom: 7px; } .ms-Dropdown-caretDown.ms-Icon.ms-Icon--ChevronDown[data-v-d4b6df96]::before { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"12\" height=\"12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1939 1581l90 -90l-1005 -1005l-1005 1005l90 90l915 -915z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Dropdown : Dropdown$1
        };
    },
    mounted: function mounted(){
        var this$1 = this;

        var childs = this.$refs.dropdown.querySelectorAll(":not([" + this.$options._scopeId + "])");
        Array.from(childs).map(function (c){ return c.setAttribute(this$1.$options._scopeId, ""); });
    },
    extends :  Dropdown
}

var dropdownitem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('option',{domProps:{"value":_vm.value}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-dropdown-item',

  inject: ['eventHub'],

  props: {
    value: [String, Number]
  },

  created: function created() {
    this.eventHub.$on('setSelectedItem', this.setSelectedItem);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('setSelectedItem', this.setSelectedItem);
  },

  methods: {
    setSelectedItem: function setSelectedItem(value) {
      if (value === this.value) {
        this.eventHub.$emit('setSelectedStatus', this.$slots.default[0].text);
      }
    }
  }
};

var uiDropdownItem = {_scopeId: 'data-v-f816d130',
    beforeCreate: function beforeCreate(){ loadStyles(" /*# sourceMappingURL=uiDropdownItem.vue.map */");},
    extends :  dropdownitem,
    created: function created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}

function size () {
  var size = [], len = arguments.length;
  while ( len-- ) size[ len ] = arguments[ len ];

  size.push('');

  return {
    props: {
      size: {
        type: String,
        default: '',
        validator: function validator(value) {
          return size.includes(value);
        }
      }
    }
  };
}

var panel = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"panel",staticClass:"ms-Panel",class:_vm.panelClass},[_c('button',{staticClass:"ms-Panel-closeButton ms-PanelAction-close",on:{"click":_vm.closePanel}},[_c('i',{staticClass:"ms-Panel-closeIcon ms-Icon ms-Icon--Cancel"})]),_vm._v(" "),_c('div',{staticClass:"ms-Panel-contentInner"},[_c('p',{staticClass:"ms-Panel-headerText"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"ms-Panel-content"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-panel',

  mixins: [size('md', 'lg', 'xl', 'xxl')],

  props: {
    value: Boolean,
    title: String,

    fixed: {
      type: Boolean,
      default: false
    },

    left: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      panelInstance: null
    };
  },

  watch: {
    value: function value() {
      this.setPanelVisibility();
    }
  },

  computed: {
    panelClass: function panelClass() {
      var obj;

      return ( obj = {}, obj[("ms-Panel--" + (this.size))] = !!this.size, obj['ms-Panel--fixed'] =  this.fixed, obj['ms-Panel--left'] =  this.left, obj );
    }
  },

  mounted: function mounted() {
    this.setPanelVisibility();
  },

  methods: {
    setPanelVisibility: function setPanelVisibility() {
      if (this.value) {
        this.panelInstance = new this.$fabric.Panel(this.$refs.panel);
        this.bindOverlayCloseEvent();
      } else if (this.panelInstance) {
        this.panelInstance.dismiss();
      }
    },

    // Because the office ui fabric js don't support on_close or on_open event in panel
    // component, So I have to write some hacking code to change the visible status when
    // click the overlay. Otherwise the visible status can't change, when click the overlay
    // to close the panel.
    bindOverlayCloseEvent: function bindOverlayCloseEvent() {
      var overlayElement = this.panelInstance.panelHost.overlay.overlayElement;
      overlayElement.addEventListener('click', this.closePanel);
    },

    closePanel: function closePanel() {
      this.$emit('input', false);

      // Because the panel overlay have event to fire dismiss method when click it to
      // close panel. To prevent fire the panel dismiss method again and raise some error,
      // so set the panelInstance to null
      this.panelInstance = null;
    }
  }
};

var ANIMATE_IN_STATE$1 = "animate-in";
var ANIMATE_OUT_STATE$1 = "animate-out";
var ANIMATION_END$1 = 400;
var Panel$1 = (function () {
    function Panel(panel, direction, animateOverlay) {
        this._panel = panel;
        this._direction = direction || "right";
        this._animateOverlay = animateOverlay || true;
        this.panelHost = new PanelHost(this._panel, this._animateInPanel);
        this._closeButton = this._panel.querySelector(".ms-PanelAction-close");
        this._clickHandler = this.dismiss.bind(this, null);
        this._setEvents();
        document.body.setAttribute("style", "height: 100%; overflow: hidden;");
    }
    Panel.prototype.dismiss = function (callBack) {
        var _this = this;
        this._panel.classList.add(ANIMATE_OUT_STATE$1);
        setTimeout(function () {
            _this._panel.classList.remove(ANIMATE_OUT_STATE$1);
            _this._panel.classList.remove("is-open");
            _this.panelHost.dismiss();
            if (callBack) {
                callBack();
            }
            document.body.setAttribute("style", "");
        }, ANIMATION_END$1);
        if (this._closeButton !== null) {
            this._closeButton.removeEventListener("click", this._clickHandler);
        }
    };
    Panel.prototype._setEvents = function () {
        this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler);
        if (this._closeButton !== null) {
            this._closeButton.addEventListener("click", this._clickHandler);
        }
    };
    Panel.prototype._animateInPanel = function (layer) {
        layer.classList.add(ANIMATE_IN_STATE$1);
        layer.classList.add("is-open");
        setTimeout(function () {
            layer.classList.remove(ANIMATE_IN_STATE$1);
        }, ANIMATION_END$1);
    };
    return Panel;
}());

var uiPanel = {_scopeId: 'data-v-15bfa7e0',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ .ms-u-slideRightIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn10; -moz-animation-name: fadeIn, slideRightIn10; -ms-animation-name: fadeIn, slideRightIn10; -o-animation-name: fadeIn, slideRightIn10; animation-name: fadeIn, slideRightIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn10 { from { -webkit-transform: translate3d(-10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn10 { from { transform: translate3d(-10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn20; -moz-animation-name: fadeIn, slideRightIn20; -ms-animation-name: fadeIn, slideRightIn20; -o-animation-name: fadeIn, slideRightIn20; animation-name: fadeIn, slideRightIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn20 { from { -webkit-transform: translate3d(-20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn20 { from { transform: translate3d(-20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn40 { from { -webkit-transform: translate3d(-40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn40 { from { transform: translate3d(-40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn10; -moz-animation-name: fadeIn, slideLeftIn10; -ms-animation-name: fadeIn, slideLeftIn10; -o-animation-name: fadeIn, slideLeftIn10; animation-name: fadeIn, slideLeftIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn10 { from { -webkit-transform: translate3d(10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn10 { from { transform: translate3d(10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn20; -moz-animation-name: fadeIn, slideLeftIn20; -ms-animation-name: fadeIn, slideLeftIn20; -o-animation-name: fadeIn, slideLeftIn20; animation-name: fadeIn, slideLeftIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn20 { from { -webkit-transform: translate3d(20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn20 { from { transform: translate3d(20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn40 { from { -webkit-transform: translate3d(40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn40 { from { transform: translate3d(40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn400; -moz-animation-name: fadeIn, slideRightIn400; -ms-animation-name: fadeIn, slideRightIn400; -o-animation-name: fadeIn, slideRightIn400; animation-name: fadeIn, slideRightIn400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn400 { from { -webkit-transform: translate3d(-400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn400 { from { transform: translate3d(-400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeft400; -moz-animation-name: fadeIn, slideLeft400; -ms-animation-name: fadeIn, slideLeft400; -o-animation-name: fadeIn, slideLeft400; animation-name: fadeIn, slideLeft400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeft400 { from { -webkit-transform: translate3d(400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeft400 { from { transform: translate3d(400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn20; -moz-animation-name: fadeIn, slideUpIn20; -ms-animation-name: fadeIn, slideUpIn20; -o-animation-name: fadeIn, slideUpIn20; animation-name: fadeIn, slideUpIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn20 { from { -webkit-transform: translate3d(0px, 20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn20 { from { transform: translate3d(0px, 20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn10; -moz-animation-name: fadeIn, slideUpIn10; -ms-animation-name: fadeIn, slideUpIn10; -o-animation-name: fadeIn, slideUpIn10; animation-name: fadeIn, slideUpIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn10 { from { -webkit-transform: translate3d(0px, 10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn10 { from { transform: translate3d(0px, 10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn20; -moz-animation-name: fadeIn, slideDownIn20; -ms-animation-name: fadeIn, slideDownIn20; -o-animation-name: fadeIn, slideDownIn20; animation-name: fadeIn, slideDownIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn20 { from { -webkit-transform: translate3d(0px, -20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn20 { from { transform: translate3d(0px, -20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn10; -moz-animation-name: fadeIn, slideDownIn10; -ms-animation-name: fadeIn, slideDownIn10; -o-animation-name: fadeIn, slideDownIn10; animation-name: fadeIn, slideDownIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn10 { from { -webkit-transform: translate3d(0px, -10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn10 { from { transform: translate3d(0px, -10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut40 { from { -webkit-transform: translate3d(0px, 0px, 0px); } to { -webkit-transform: translate3d(40px, 0px, 0px); } } @keyframes slideRightOut40 { from { transform: translate3d(0px, 0px, 0px); } to { transform: translate3d(40px, 0px, 0px); } } .ms-u-slideLeftOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut40 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-40px, 0px, 0px); } } @keyframes slideLeftOut40 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-40px, 0px, 0px); } } .ms-u-slideRightOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut400; -moz-animation-name: fadeOut, slideRightOut400; -ms-animation-name: fadeOut, slideRightOut400; -o-animation-name: fadeOut, slideRightOut400; animation-name: fadeOut, slideRightOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(400px, 0px, 0px); } } @keyframes slideRightOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(400px, 0px, 0px); } } .ms-u-slideLeftOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut400; -moz-animation-name: fadeOut, slideLeftOut400; -ms-animation-name: fadeOut, slideLeftOut400; -o-animation-name: fadeOut, slideLeftOut400; animation-name: fadeOut, slideLeftOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-400px, 0px, 0px); } } @keyframes slideLeftOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-400px, 0px, 0px); } } .ms-u-slideUpOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut20; -moz-animation-name: fadeOut, slideUpOut20; -ms-animation-name: fadeOut, slideUpOut20; -o-animation-name: fadeOut, slideUpOut20; animation-name: fadeOut, slideUpOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -20px, 0px); } } @keyframes slideUpOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -20px, 0px); } } .ms-u-slideUpOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut10; -moz-animation-name: fadeOut, slideUpOut10; -ms-animation-name: fadeOut, slideUpOut10; -o-animation-name: fadeOut, slideUpOut10; animation-name: fadeOut, slideUpOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -10px, 0px); } } @keyframes slideUpOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -10px, 0px); } } .ms-u-slideDownOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut20; -moz-animation-name: fadeOut, slideDownOut20; -ms-animation-name: fadeOut, slideDownOut20; -o-animation-name: fadeOut, slideDownOut20; animation-name: fadeOut, slideDownOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 20px, 0px); } } @keyframes slideDownOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 20px, 0px); } } .ms-u-slideDownOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut10; -moz-animation-name: fadeOut, slideDownOut10; -ms-animation-name: fadeOut, slideDownOut10; -o-animation-name: fadeOut, slideDownOut10; animation-name: fadeOut, slideDownOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 10px, 0px); } } @keyframes slideDownOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 10px, 0px); } } .ms-u-scaleUpIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleUp100; -moz-animation-name: fadeIn, scaleUp100; -ms-animation-name: fadeIn, scaleUp100; -o-animation-name: fadeIn, scaleUp100; animation-name: fadeIn, scaleUp100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp100 { from { -webkit-transform: scale3d(0.98, 0.98, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleUp100 { from { transform: scale3d(0.98, 0.98, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleDownIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleDown100; -moz-animation-name: fadeIn, scaleDown100; -ms-animation-name: fadeIn, scaleDown100; -o-animation-name: fadeIn, scaleDown100; animation-name: fadeIn, scaleDown100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown100 { from { -webkit-transform: scale3d(1.03, 1.03, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleDown100 { from { transform: scale3d(1.03, 1.03, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleUpOut103[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleUp103; -moz-animation-name: fadeOut, scaleUp103; -ms-animation-name: fadeOut, scaleUp103; -o-animation-name: fadeOut, scaleUp103; animation-name: fadeOut, scaleUp103; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp103 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(1.03, 1.03, 1); } } @keyframes scaleUp103 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(1.03, 1.03, 1); } } .ms-u-scaleDownOut98[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleDown98; -moz-animation-name: fadeOut, scaleDown98; -ms-animation-name: fadeOut, scaleDown98; -o-animation-name: fadeOut, scaleDown98; animation-name: fadeOut, scaleDown98; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown98 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(0.98, 0.98, 1); } } @keyframes scaleDown98 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(0.98, 0.98, 1); } } .ms-u-fadeIn400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; } .ms-u-fadeIn100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeIn200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.267s; animation-duration: 0.267s; } .ms-u-fadeIn500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeIn { from { opacity: 0; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } @keyframes fadeIn { from { opacity: 0; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } .ms-u-fadeOut400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; } .ms-u-fadeOut100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.1s; animation-duration: 0.1s; } .ms-u-fadeOut200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeOut500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeOut { from { opacity: 1; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } @keyframes fadeOut { from { opacity: 1; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } .ms-u-rotate90deg[data-v-15bfa7e0] { -webkit-animation-name: rotate90; -moz-animation-name: rotate90; -ms-animation-name: rotate90; -o-animation-name: rotate90; animation-name: rotate90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotate90 { from { -webkit-transform: rotateZ(0deg); } to { -webkit-transform: rotateZ(90deg); } } @keyframes rotate90 { from { transform: rotateZ(0deg); } to { transform: rotateZ(90deg); } } .ms-u-rotateN90deg[data-v-15bfa7e0] { -webkit-animation-name: rotateN90; -moz-animation-name: rotateN90; -ms-animation-name: rotateN90; -o-animation-name: rotateN90; animation-name: rotateN90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotateN90 { from { -webkit-transform: rotateZ(90deg); } to { -webkit-transform: rotateZ(0deg); } } @keyframes rotateN90 { from { transform: rotateZ(90deg); } to { transform: rotateZ(0deg); } } .ms-u-expandCollapse400[data-v-15bfa7e0] { -webkit-transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse200[data-v-15bfa7e0] { -webkit-transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse100[data-v-15bfa7e0] { -webkit-transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-delay100[data-v-15bfa7e0] { -webkit-animation-delay: 0.167s; animation-delay: 0.167s; } .ms-u-delay200[data-v-15bfa7e0] { -webkit-animation-delay: 0.267s; animation-delay: 0.267s; } /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Panel[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:white, default: #ffffff]\"; width: 100%; max-width: 340px; box-shadow: -30px 0 30px -30px rgba(0, 0, 0, 0.2); position: absolute; top: 0; right: 0; bottom: 0; z-index: 10; display: none; height: 100%; } .ms-Panel.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.is-open[data-v-15bfa7e0] { display: block; } .ms-Panel .ms-CommandBar[data-v-15bfa7e0] { padding-right: 0; padding-left: 8px; } .ms-Panel.ms-Panel--md[data-v-15bfa7e0] { max-width: 340px; } .ms-Panel.ms-Panel--lg[data-v-15bfa7e0] { max-width: 644px; } .ms-Panel.ms-Panel--xl[data-v-15bfa7e0] { max-width: 940px; } .ms-Panel.ms-Panel--xxl[data-v-15bfa7e0] { max-width: 1192px; } .ms-Panel--left[data-v-15bfa7e0] { box-shadow: -30px 0 30px 30px rgba(0, 0, 0, 0.2); left: 0; right: auto; } .ms-Panel--left.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel--left.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel-closeButton[data-v-15bfa7e0] { background: none; border: 0; cursor: pointer; position: absolute; right: 6px; top: 0; height: 40px; width: 40px; line-height: 40px; outline: 0; padding: 0; color: \"[theme:neutralSecondary, default: #666666]\"; font-size: 16px; } .ms-Panel-closeButton[data-v-15bfa7e0]:hover { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Panel-closeButton .ms-Icon--Cancel[data-v-15bfa7e0] { margin-top: 2px; } @media (max-width: 639px) { .ms-Panel-closeButton[data-v-15bfa7e0] { font-size: 20px; line-height: 20px; height: 44px; right: 4px; } } .ms-Panel-contentInner[data-v-15bfa7e0] { margin-top: 40px; padding: 0 16px 20px; overflow-y: auto; height: 100%; } @media (min-width: 640px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 32px 20px; } } @media (min-width: 1366px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 40px 20px; } } .ms-Panel-headerText[data-v-15bfa7e0] { font-weight: 100; font-size: 21px; color: \"[theme:neutralPrimary, default: #333333]\"; margin: 10px 0; padding: 4px 0; line-height: 1; text-overflow: ellipsis; overflow: hidden; } @media (min-width: 1024px) { .ms-Panel-headerText[data-v-15bfa7e0] { margin-top: 30px; } } .ms-Overlay[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-15bfa7e0] { display: block; } .ms-Overlay--dark[data-v-15bfa7e0] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-15bfa7e0] { overflow: hidden; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Panel : Panel$1
        };
    },
    watch: {
        value: function value(newVal) {
            if(newVal){
                this.panelInstance.panelHost.overlay.overlayElement.setAttribute(this.$options._scopeId, "");
            }
        }
    },
    extends :  panel
}

var Spinner = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"spinner",staticClass:"ms-Spinner",class:_vm.spinnerClass},[(_vm.label)?_c('div',{staticClass:"ms-Spinner-label"},[_vm._v(_vm._s(_vm.label))]):_vm._e()])},staticRenderFns: [],
  name: 'ou-spinner',

  mixins: [type('large')],

  props: {
    label: String
  },

  computed: {
    spinnerClass: function spinnerClass() {
      var obj;

      return ( obj = {}, obj[("ms-Spinner--" + (this.type))] = !!this.type, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.Spinner(this.$refs.spinner);
  }
};

var CircleObject = (function () {
    function CircleObject(element, j) {
        this.element = element;
        this.j = j;
    }
    return CircleObject;
}());
var Spinner$1 = (function () {
    function Spinner(container) {
        this.eightSize = 0.2;
        this.animationSpeed = 90;
        this.parentSize = 20;
        this.fadeIncrement = 0;
        this.circleObjects = [];
        this._target = container;
        this._init();
    }
    Spinner.prototype.start = function () {
        var _this = this;
        this.stop();
        this.interval = setInterval(function () {
            var i = _this.circleObjects.length;
            while (i--) {
                _this._fade(_this.circleObjects[i]);
            }
        }, this.animationSpeed);
    };
    Spinner.prototype.stop = function () {
        clearInterval(this.interval);
    };
    Spinner.prototype._init = function () {
        this._setTargetElement();
        this._setPropertiesForSize();
        this._createCirclesAndArrange();
        this._initializeOpacities();
        this.start();
    };
    Spinner.prototype._setPropertiesForSize = function () {
        if (this.spinner.className.indexOf("large") > -1) {
            this.parentSize = 28;
            this.eightSize = 0.179;
        }
        this.offsetSize = this.eightSize;
        this.numCircles = 8;
    };
    Spinner.prototype._setTargetElement = function () {
        if (this._target.className.indexOf("ms-Spinner") === -1) {
            this.spinner = document.createElement("div");
            this.spinner.className = "ms-Spinner";
            this._target.appendChild(this.spinner);
        }
        else {
            this.spinner = this._target;
        }
    };
    Spinner.prototype._initializeOpacities = function () {
        var this$1 = this;

        var i = 0;
        var j = 1;
        var opacity;
        this.fadeIncrement = 1 / this.numCircles;
        for (i; i < this.numCircles; i++) {
            var circleObject = this$1.circleObjects[i];
            opacity = (this$1.fadeIncrement * j++);
            this$1._setOpacity(circleObject.element, opacity);
        }
    };
    Spinner.prototype._fade = function (circleObject) {
        var opacity = this._getOpacity(circleObject.element) - this.fadeIncrement;
        if (opacity <= 0) {
            opacity = 1;
        }
        this._setOpacity(circleObject.element, opacity);
    };
    Spinner.prototype._getOpacity = function (element) {
        return parseFloat(window.getComputedStyle(element).getPropertyValue("opacity"));
    };
    Spinner.prototype._setOpacity = function (element, opacity) {
        element.style.opacity = opacity.toString();
    };
    Spinner.prototype._createCircle = function () {
        var circle = document.createElement("div");
        circle.className = "ms-Spinner-circle";
        circle.style.width = circle.style.height = this.parentSize * this.offsetSize + "px";
        return circle;
    };
    Spinner.prototype._createCirclesAndArrange = function () {
        var this$1 = this;

        var angle = 0;
        var offset = this.parentSize * this.offsetSize;
        var step = (2 * Math.PI) / this.numCircles;
        var i = this.numCircles;
        var circleObject;
        var radius = (this.parentSize - offset) * 0.5;
        while (i--) {
            var circle = this$1._createCircle();
            var x = Math.round(this$1.parentSize * 0.5 + radius * Math.cos(angle) - circle.clientWidth * 0.5) - offset * 0.5;
            var y = Math.round(this$1.parentSize * 0.5 + radius * Math.sin(angle) - circle.clientHeight * 0.5) - offset * 0.5;
            this$1.spinner.appendChild(circle);
            circle.style.left = x + "px";
            circle.style.top = y + "px";
            angle += step;
            circleObject = new CircleObject(circle, i);
            this$1.circleObjects.push(circleObject);
        }
    };
    return Spinner;
}());

var uiSpinner = {_scopeId: 'data-v-74b796b6',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Spinner[data-v-74b796b6] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; position: relative; height: 20px; } .ms-Spinner.ms-Spinner--large[data-v-74b796b6] { height: 28px; } .ms-Spinner.ms-Spinner--large .ms-Spinner-label[data-v-74b796b6] { left: 34px; top: 6px; } .ms-Spinner-circle[data-v-74b796b6] { position: absolute; border-radius: 100px; background-color: \"[theme:themePrimary, default: #0078d7]\"; opacity: 0; } @media screen and (-ms-high-contrast: active) { .ms-Spinner-circle[data-v-74b796b6] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Spinner-circle[data-v-74b796b6] { background-color: \"[theme:black, default: #000000]\"; } } .ms-Spinner-label[data-v-74b796b6] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; position: relative; font-size: 12px; font-weight: 400; color: \"[theme:themePrimary, default: #0078d7]\"; left: 28px; top: 2px; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Spinner : Spinner$1
        };
    },
    mounted: function mounted() {
        var this$1 = this;

        // console.log("spin", this.$refs.spinner);
        var childs = this.$refs.spinner.querySelectorAll(":not([" + this.$options._scopeId + "])");
        Array.from(childs).map(function (c){ return c.setAttribute(this$1.$options._scopeId, ""); });
    },
    extends :  Spinner
}

var label = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"ms-Label",class:_vm.labelClass},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-label',

  mixins: [disabled],

  props: {
    required: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    labelClass: function labelClass() {
      return {
        'is-disabled': this.disabled,
        'is-required': this.required
      };
    }
  }
};

var uiLabel = {_scopeId: 'data-v-2943a900',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-2943a900] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-2943a900]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-2943a900] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } ");},
    extends :  label
}

var MessageBar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-MessageBar",class:_vm.messageBarClass},[_c('div',{staticClass:"ms-MessageBar-content"},[(_vm.icon)?_c('div',{staticClass:"ms-MessageBar-icon"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-MessageBar-text"},[_vm._t("default")],2)])])},staticRenderFns: [],
  name: 'ou-message-bar',

  mixins: [
    type('success', 'error', 'blocked', 'warning', 'severeWarning'),
    icon
  ],

  computed: {
    messageBarClass: function messageBarClass() {
      var obj;

      return ( obj = {}, obj[("ms-MessageBar--" + (this.type))] = !!this.type, obj );
    }
  }
};

var uiMessagebar = {_scopeId: 'data-v-7f69de50',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-MessageBar[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; padding: 8px; display: table; background-color: \"[theme:infoBackground, default: #f4f4f4]\"; } .ms-MessageBar .ms-Link[data-v-7f69de50] { font-size: 12px; } .ms-MessageBar-icon[data-v-7f69de50], .ms-MessageBar-text[data-v-7f69de50] { display: table-cell; vertical-align: top; } .ms-MessageBar-icon[data-v-7f69de50] { padding-right: 8px; font-size: 16px; color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-MessageBar-text[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 12px; font-weight: 400; } .ms-MessageBar.ms-MessageBar--warning[data-v-7f69de50] { background-color: \"[theme:warningBackground, default: #fff4ce]\"; } .ms-MessageBar.ms-MessageBar--severeWarning[data-v-7f69de50] { background-color: \"[theme:severeWarningBackground, default: #fed9cc]\"; } .ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:severeWarning, default: #d83b01]\"; } .ms-MessageBar.ms-MessageBar--error[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--blocked[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--success[data-v-7f69de50] { background-color: \"[theme:successBackground, default: #dff6dd]\"; } .ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:green, default: #107c10]\"; } ");},
    extends :  MessageBar
}

var persona = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Persona",class:_vm.personaClass},[_c('div',{staticClass:"ms-Persona-imageArea"},[(!_vm.initials)?_c('img',{staticClass:"ms-Persona-image",attrs:{"src":_vm.src}}):_c('div',{staticClass:"ms-Persona-initials",class:_vm.initialsPersonaClass},[_vm._v(_vm._s(_vm.initials.toUpperCase()))])]),_vm._v(" "),(_vm.type)?_c('div',{staticClass:"ms-Persona-presence"},[_c('i',{staticClass:"ms-Persona-presenceIcon ms-Icon",class:_vm.personaIconClass})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-Persona-details"},[_c('div',{staticClass:"ms-Persona-primaryText"},[_vm._v(_vm._s(_vm.primaryText))]),_vm._v(" "),_c('div',{staticClass:"ms-Persona-secondaryText"},[_vm._v(_vm._s(_vm.secondaryText))]),_vm._v(" "),_c('div',{staticClass:"ms-Persona-tertiaryText"},[_vm._v(_vm._s(_vm.tertiaryText))]),_vm._v(" "),_c('div',{staticClass:"ms-Persona-optionalText"},[_vm._v(_vm._s(_vm.optionalText))])])])},staticRenderFns: [],
  name: 'ou-persona',

  mixins: [
    size('tiny', 'xs', 'sm', 'lg', 'xl'),
    type('available', 'away', 'blocked', 'busy', 'dnd', 'offline')
  ],

  data: function data() {
    if (this.initials) {
      var validateColor = [
        'blue',
        'blueLight',
        'blueDark',
        'teal',
        'greenLight',
        'green',
        'greenDark',
        'magentaLight',
        'magenta',
        'purpleLight',
        'purple',
        'black',
        'orange',
        'red',
        'redDark'
      ];

      var initialsLetter = this.initials[0].toUpperCase();
      var initialsIndex = initialsLetter.charCodeAt() - 65;

      // get radom color from validateColor
      return {
        initialsColor: validateColor[Math.round((validateColor.length / 26) * initialsIndex)]
      };
    }

    return { initialsColor: '' };
  },

  props: {
    src: String,
    initials: String,
    primaryText: String,
    secondaryText: String,
    tertiaryText: String,
    optionalText: String
  },

  computed: {
    personaClass: function personaClass() {
      var obj;

      return ( obj = {}, obj[("ms-Persona--" + (this.size))] = !!this.size, obj[("ms-Persona--" + (this.type))] = !!this.type, obj );
    },

    initialsPersonaClass: function initialsPersonaClass() {
      var obj;

      return ( obj = {}, obj[("ms-Persona-initials--" + (this.initialsColor))] = !!this.initialsColor, obj );
    },

    personaIconClass: function personaIconClass() {
      var icon = '';

      switch (this.type) {
        case 'available':
          icon = 'SkypeCheck';
          break;
        case 'away':
          icon = 'SkypeClock';
          break;
        case 'dnd':
          icon = 'SkypeMinus';
          break;
      }

      if (icon) {
        return ("ms-Icon--" + icon);
      }
    }
  }
};

var SCROLL_FRAME_RATE = 33;
var Animate = (function () {
    function Animate() {
    }
    Animate.transition = function (element, props) {
        var obj = { element: element, props: props, transformations: {} };
        Animate._animationObjects.push(obj);
        Animate._parseProperties(obj);
        Animate._createTransition(obj);
        setTimeout(Animate._setProperties, 0, obj);
        Animate._setCallback(obj);
    };
    Animate.animation = function (element, keyframes, props) {
        var obj = { element: element, keyframes: keyframes, props: props };
        Animate._animationObjects.push(obj);
        Animate._parseProperties(obj);
        Animate._createAnimation(obj);
        Animate._setCallback(obj);
    };
    Animate.scrollTo = function (element, props) {
        var obj = { element: element, props: props, step: 0 };
        Animate._setScrollProperties(obj);
        if (obj.props.delay) {
            setTimeout(Animate._animationObjects, obj.props.delay * 1000, obj);
        }
        else {
            Animate._animateScroll(obj);
        }
        Animate._animationObjects.push(obj);
    };
    Animate._setScrollProperties = function (obj) {
        obj.beginTop = obj.element.scrollTop;
        obj.change = obj.props.top - obj.beginTop;
        obj.props.duration = obj.props.duration * 1000;
    };
    Animate._parseProperties = function (obj) {
        var nonTweenProps = Animate._timeProps.concat(Animate._callbackProps);
        obj.tweenObj = {};
        for (var key in obj.props) {
            if (Animate._contains(nonTweenProps, key)) {
                obj[key] = obj.props[key];
            }
            else {
                obj.tweenObj[key] = obj.props[key];
            }
        }
    };
    Animate._animateScroll = function (obj) {
        var totalSteps = obj.props.duration / SCROLL_FRAME_RATE;
        var top = Animate._easeOutExpo(obj.step++, obj.beginTop, obj.change, totalSteps);
        obj.element.scrollTop = top;
        if (obj.step >= totalSteps) {
            obj.element.scrollTop = obj.props.top;
            Animate._executeCallback(obj.props);
            Animate._removeAnimationObject(obj);
        }
        else {
            setTimeout(function () {
                requestAnimationFrame(function () {
                    Animate._animateScroll(obj);
                });
            }, SCROLL_FRAME_RATE);
        }
    };
    Animate._createTransition = function (obj) {
        var duration = obj.duration || 0;
        var delay = obj.delay || 0;
        obj.element.style.transitionProperty = Animate._getTransitionProperties(obj.tweenObj);
        obj.element.style.transitionDuration = duration.toString() + "s";
        obj.element.style.transitionTimingFunction = obj.ease || "linear";
        obj.element.style.transitionDelay = delay.toString() + "s";
    };
    Animate._createAnimation = function (obj) {
        var duration = obj.duration || 0;
        var delay = obj.delay || 0;
        obj.element.style.animationName = obj.keyframes;
        obj.element.style.animationDuration = duration.toString() + "s";
        obj.element.style.animationTimingFunction = obj.ease || "linear";
        obj.element.style.animationDelay = delay.toString() + "s";
        obj.element.style.animationFillMode = "both";
    };
    Animate._getTransitionProperties = function (obj) {
        var hasTransform = false;
        var hasFilter = false;
        var properties = [];
        for (var key in obj) {
            if (Animate._contains(Animate._transformProps, key)) {
                hasTransform = true;
            }
            else if (Animate._contains(Animate._filters, key)) {
                hasFilter = true;
            }
            else {
                properties.push(Animate._camelCaseToDash(key));
            }
        }
        if (hasTransform) {
            properties.push("transform");
        }
        if (hasFilter) {
            properties.push("-webkit-filter");
            properties.push("filter");
        }
        return properties.join(", ");
    };
    Animate._setProperties = function (obj) {
        for (var key in obj.tweenObj) {
            if (Animate._contains(Animate._transformProps, key)) {
                Animate._setTransformValues(obj, key);
            }
            else if (Animate._contains(Animate._filters, key)) {
                Animate._setFilterValues(obj, key);
            }
            else {
                Animate._setRegularValues(obj, key);
            }
        }
        if (obj.transformations) {
            Animate._setTransformations(obj);
        }
    };
    Animate._setRegularValues = function (obj, key) {
        var value = obj.tweenObj[key];
        if (value.toString().indexOf("%") === -1) {
            value += (key !== "opacity") && (key !== "backgroundColor") && (key !== "boxShadow") ? "px" : "";
        }
        obj.element.style[key] = value;
    };
    Animate._setFilterValues = function (obj, key) {
        var value = obj.tweenObj[key];
        if (key === "hueRotate") {
            value = "(" + value + "deg)";
        }
        else {
            value = key === "blur" ? "(" + value + "px)" : "(" + value + "%)";
        }
        key = Animate._camelCaseToDash(key);
        obj.element.style.webkitFilter = key + value;
        obj.element.style.filter = key + value;
    };
    Animate._setTransformValues = function (obj, key) {
        if (/x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(key)) {
            obj.transformations[key] = obj.tweenObj[key];
        }
    };
    Animate._setTransformations = function (obj) {
        var rotate = "", scale = "", skew = "", translate = "";
        var trans = obj.transformations;
        translate += trans.x !== undefined && trans.x ? "translateX(" + trans.x + "px) " : "";
        translate += trans.y !== undefined && trans.y ? "translateY(" + trans.y + "px) " : "";
        translate += trans.z !== undefined && trans.z ? "translateZ(" + trans.z + "px) " : "";
        rotate += trans.rotate !== undefined && trans.rotate ? "rotate(" + trans.rotate + "deg) " : "";
        rotate += trans.rotateX !== undefined && trans.rotateX ? "rotateX(" + trans.rotateX + "deg) " : "";
        rotate += trans.rotateY !== undefined && trans.rotateY ? "rotate(" + trans.rotateY + "deg) " : "";
        rotate += trans.rotateZ !== undefined && trans.rotateZ ? "rotate(" + trans.rotateZ + "deg) " : "";
        scale += trans.scaleX !== undefined && trans.scaleX ? "scaleX(" + trans.scaleX + ") " : "";
        scale += trans.scaleY !== undefined && trans.scaleY ? "scaleY(" + trans.scaleY + ") " : "";
        scale += trans.scaleZ !== undefined && trans.scaleZ ? "scaleZ(" + trans.scaleZ + ") " : "";
        skew += trans.skewX !== undefined && trans.skewX ? "skewX(" + trans.skewX + "deg) " : "";
        skew += trans.skewY !== undefined && trans.skewY ? "skewY(" + trans.skewY + "deg) " : "";
        obj.element.style.transform = translate + rotate + scale + skew;
    };
    Animate._setCallback = function (obj) {
        obj.element.addEventListener("webkitTransitionEnd", Animate._complete, false);
        obj.element.addEventListener("transitionend", Animate._complete, false);
        obj.element.addEventListener("webkitAnimationEnd", Animate._complete, false);
        obj.element.addEventListener("animationend", Animate._complete, false);
    };
    Animate._complete = function (event) {
        event.target.removeEventListener("webkitTransitionEnd", Animate._complete);
        event.target.removeEventListener("transitionend", Animate._complete);
        event.target.removeEventListener("webkitAnimationEnd", Animate._complete);
        event.target.removeEventListener("animationend", Animate._complete);
        var obj = Animate._getAnimationObjByElement(event.target);
        Animate._executeCallback(obj);
        Animate._removeAnimationObject(obj);
    };
    Animate._getAnimationObjByElement = function (element) {
        var i = Animate._animationObjects.length;
        while (i--) {
            if (Animate._animationObjects[i].element === element) {
                return Animate._animationObjects[i];
            }
        }
        return null;
    };
    Animate._removeAnimationObject = function (obj) {
        var i = Animate._animationObjects.length;
        while (i--) {
            if (Animate._animationObjects[i] === obj) {
                Animate._animationObjects.splice(i, 1);
            }
        }
    };
    Animate._executeCallback = function (obj) {
        if (obj.onEnd) {
            var endArgs = obj.onEndArgs || [];
            obj.onEnd.apply(null, endArgs);
        }
    };
    Animate._contains = function (array, value) {
        var i = array.length;
        while (i--) {
            if (value === array[i]) {
                return true;
            }
        }
        return false;
    };
    Animate._camelCaseToDash = function (value) {
        return value.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
    };
    Animate._easeOutExpo = function (time, begin, change, duration) {
        return (time === duration) ? begin + change : change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
    };
    Animate._transformProps = [
        "x",
        "y",
        "z",
        "scaleX",
        "scaleY",
        "scaleZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skewX",
        "skewY"
    ];
    Animate._filters = [
        "blur",
        "brightness",
        "contrast",
        "dropShadow",
        "grayscale",
        "hueRotate",
        "invert",
        "saturate",
        "sepia"
    ];
    Animate._timeProps = ["duration", "ease", "delay"];
    Animate._callbackProps = ["onEnd", "onEndArgs"];
    Animate._animationObjects = [];
    return Animate;
}());

var Ease = (function () {
    function Ease() {
    }
    Ease.CB = "cubic-bezier";
    Ease.QUAD_EASE_IN = Ease.CB + "(0.550, 0.085, 0.680, 0.530)";
    Ease.CUBIC_EASE_IN = Ease.CB + "(0.550, 0.055, 0.675, 0.190)";
    Ease.QUART_EASE_IN = Ease.CB + "(0.895, 0.030, 0.685, 0.220)";
    Ease.QUINT_EASE_IN = Ease.CB + "(0.755, 0.050, 0.855, 0.060)";
    Ease.SINE_EASE_IN = Ease.CB + "(0.470, 0, 0.745, 0.715)";
    Ease.EXPO_EASE_IN = Ease.CB + "(0.950, 0.050, 0.795, 0.035)";
    Ease.CIRC_EASE_IN = Ease.CB + "(0.600, 0.040, 0.980, 0.335)";
    Ease.BACK_EASE_IN = Ease.CB + "(0.600, 0.040, 0.980, 0.335)";
    Ease.QUAD_EASE_OUT = Ease.CB + "(0.250, 0.460, 0.450, 0.940)";
    Ease.CUBIC_EASE_OUT = Ease.CB + "(0.215, 0.610, 0.355, 1)";
    Ease.QUART_EASE_OUT = Ease.CB + "(0.165, 0.840, 0.440, 1)";
    Ease.QUINT_EASE_OUT = Ease.CB + "(0.230, 1, 0.320, 1)";
    Ease.SINE_EASE_OUT = Ease.CB + "(0.390, 0.575, 0.565, 1)";
    Ease.EXPO_EASE_OUT = Ease.CB + "(0.190, 1, 0.220, 1)";
    Ease.CIRC_EASE_OUT = Ease.CB + "(0.075, 0.820, 0.165, 1)";
    Ease.BACK_EASE_OUT = Ease.CB + "(0.175, 0.885, 0.320, 1.275)";
    Ease.QUAD_EASE_IN_OUT = Ease.CB + "(0.455, 0.030, 0.515, 0.955)";
    Ease.CUBIC_EASE_IN_OUT = Ease.CB + "(0.645, 0.045, 0.355, 1)";
    Ease.QUART_EASE_IN_OUT = Ease.CB + "(0.770, 0, 0.175, 1)";
    Ease.QUINT_EASE_IN_OUT = Ease.CB + "(0.860, 0, 0.070, 1)";
    Ease.SINE_EASE_IN_OUT = Ease.CB + "(0.445, 0.050, 0.550, 0.950)";
    Ease.EXPO_EASE_IN_OUT = Ease.CB + "(1, 0, 0, 1)";
    Ease.CIRC_EASE_IN_OUT = Ease.CB + "(0.785, 0.135, 0.150, 0.860)";
    Ease.BACK_EASE_IN_OUT = Ease.CB + "(0.680, -0.550, 0.265, 1.550)";
    return Ease;
}());

var PersonaCard = (function () {
    function PersonaCard(container) {
        this._container = container;
        var activeElement = this._container.querySelector(".ms-PersonaCard-action.is-active");
        var activeId = activeElement.getAttribute("data-action-id");
        this._actions = this._container.querySelector(".ms-PersonaCard-actions");
        this._expander = this._container.querySelector(".ms-PersonaCard-detailExpander");
        this._actionDetailBox = this._container.querySelector(".ms-PersonaCard-actionDetailBox");
        this._setDetail(activeId);
        this._boundOnActionClick = this._onActionClick.bind(this);
        this._boundOnExpanderClick = this._onExpanderClick.bind(this);
        this._boundOnTab = this._onTab.bind(this);
        this._addListeners();
    }
    PersonaCard.prototype.removeListeners = function () {
        this._actions.removeEventListener("click", this._boundOnActionClick);
        this._expander.removeEventListener("click", this._boundOnExpanderClick);
        this._container.removeEventListener("keydown", this._boundOnTab);
    };
    PersonaCard.prototype._addListeners = function () {
        this._actions.addEventListener("click", this._boundOnActionClick, false);
        this._expander.addEventListener("click", this._boundOnExpanderClick, false);
        this._container.addEventListener("keydown", this._boundOnTab, false);
    };
    PersonaCard.prototype._onTab = function (event) {
        var target = event.target;
        if (event.keyCode === 9 && target.classList.contains("ms-PersonaCard-action")) {
            this._onActionClick(event);
        }
    };
    PersonaCard.prototype._onExpanderClick = function (event) {
        var parent = event.target.parentElement;
        if (parent.classList.contains("is-collapsed")) {
            parent.classList.remove("is-collapsed");
        }
        else {
            parent.classList.add("is-collapsed");
        }
        var parentHeight = parent.clientHeight;
        this._animateDetail(parentHeight);
    };
    PersonaCard.prototype._onActionClick = function (event) {
        var target = event.target;
        var actionId = target.getAttribute("data-action-id");
        if (actionId && target.className.indexOf("is-active") === -1) {
            this._setAction(target);
            this._setDetail(actionId);
        }
    };
    PersonaCard.prototype._setAction = function (target) {
        var activeElement = this._container.querySelector(".ms-PersonaCard-action.is-active");
        activeElement.classList.remove("is-active");
        target.classList.add("is-active");
    };
    PersonaCard.prototype._setDetail = function (activeId) {
        var selector = ".ms-PersonaCard-details[data-detail-id='" + activeId + "']";
        var lastDetail = this._container.querySelector(".ms-PersonaCard-details.is-active");
        var activeDetail = this._container.querySelector(selector);
        if (lastDetail) {
            lastDetail.classList.remove("is-active");
        }
        activeDetail.classList.add("is-active");
        var detailHeight = activeDetail.clientHeight;
        this._animateDetail(detailHeight);
    };
    PersonaCard.prototype._animateDetail = function (height) {
        var _this = this;
        this._actionDetailBox.style.overflowY = "hidden";
        Animate.transition(this._actionDetailBox, {
            height: height,
            duration: 0.25,
            ease: Ease.SINE_EASE_OUT,
            onEnd: function () {
                _this._actionDetailBox.style.overflowY = "auto";
            }
        });
    };
    return PersonaCard;
}());

var MODAL_POSITION$1 = "top";
var Persona = (function () {
    function Persona(container) {
        this._persona = container;
        this._personaCard = this._persona.querySelector(".ms-PersonaCard");
        if (this._personaCard) {
            this._assignEvents();
            this._personaCard.setAttribute("style", "display: none;");
            this._createPersonaCard();
        }
    }
    Persona.prototype._createPersonaCard = function () {
        this._personaCardInstance = new PersonaCard(this._personaCard);
    };
    Persona.prototype._createContextualHostInstance = function () {
        this._personaCard.setAttribute("style", "display: block;");
        this._contextualHostInstance = new ContextualHost(this._personaCard, MODAL_POSITION$1, this._persona);
    };
    Persona.prototype._personaEventHandler = function () {
        this._createContextualHostInstance();
    };
    Persona.prototype._assignEvents = function () {
        var _this = this;
        this._persona.addEventListener("click", this._personaEventHandler.bind(this), false);
        this._persona.addEventListener("keyup", function (e) { return (e.keyCode === 32) ? _this._personaEventHandler() : null; }, false);
    };
    return Persona;
}());

var uiPersona = {_scopeId: 'data-v-08ee50b8',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Persona[data-v-08ee50b8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; line-height: 1; position: relative; width: 100%; height: 48px; display: table; table-layout: fixed; border-collapse: separate; } .ms-Persona .ms-ContextualHost[data-v-08ee50b8] { display: none; } .ms-Persona-imageArea[data-v-08ee50b8] { position: absolute; overflow: hidden; text-align: center; max-width: 48px; height: 48px; border-radius: 50%; z-index: 0; width: 100%; top: 0; left: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona-placeholder[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; position: absolute; right: 0; left: 0; font-size: 47px; top: 9px; z-index: 5; } .ms-Persona-initials[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 17px; font-weight: 100; line-height: 48px; } .ms-Persona-initials.ms-Persona-initials--blueLight[data-v-08ee50b8] { background-color: \"[theme:blueLight, default: #00bcf2]\"; } .ms-Persona-initials.ms-Persona-initials--blue[data-v-08ee50b8] { background-color: \"[theme:blue, default: #0078d7]\"; } .ms-Persona-initials.ms-Persona-initials--blueDark[data-v-08ee50b8] { background-color: \"[theme:blueDark, default: #002050]\"; } .ms-Persona-initials.ms-Persona-initials--teal[data-v-08ee50b8] { background-color: \"[theme:teal, default: #008272]\"; } .ms-Persona-initials.ms-Persona-initials--greenLight[data-v-08ee50b8] { background-color: \"[theme:greenLight, default: #bad80a]\"; } .ms-Persona-initials.ms-Persona-initials--green[data-v-08ee50b8] { background-color: \"[theme:green, default: #107c10]\"; } .ms-Persona-initials.ms-Persona-initials--greenDark[data-v-08ee50b8] { background-color: \"[theme:greenDark, default: #004b1c]\"; } .ms-Persona-initials.ms-Persona-initials--magentaLight[data-v-08ee50b8] { background-color: \"[theme:magentaLight, default: #e3008c]\"; } .ms-Persona-initials.ms-Persona-initials--magenta[data-v-08ee50b8] { background-color: \"[theme:magenta, default: #b4009e]\"; } .ms-Persona-initials.ms-Persona-initials--purpleLight[data-v-08ee50b8] { background-color: \"[theme:purpleLight, default: #b4a0ff]\"; } .ms-Persona-initials.ms-Persona-initials--purple[data-v-08ee50b8] { background-color: \"[theme:purple, default: #5c2d91]\"; } .ms-Persona-initials.ms-Persona-initials--black[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; } .ms-Persona-initials.ms-Persona-initials--orange[data-v-08ee50b8] { background-color: \"[theme:orange, default: #d83b01]\"; } .ms-Persona-initials.ms-Persona-initials--red[data-v-08ee50b8] { background-color: \"[theme:red, default: #e81123]\"; } .ms-Persona-initials.ms-Persona-initials--redDark[data-v-08ee50b8] { background-color: \"[theme:redDark, default: #a80000]\"; } .ms-Persona-image[data-v-08ee50b8] { position: absolute; top: 0; left: 0; height: 48px; z-index: 10; width: 100%; } .ms-Persona-image[src=''][data-v-08ee50b8] { display: none; } .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; position: absolute; height: 12px; width: 12px; border-radius: 50%; top: auto; left: 34px; bottom: -1px; border: 2px solid \"[theme:white, default: #ffffff]\"; text-align: center; } @media screen and (-ms-high-contrast: active) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px #1AEBFF inset; color: \"[theme:black, default: #000000]\"; background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px #37006E inset; color: \"[theme:white, default: #ffffff]\"; background-color: \"[theme:black, default: #000000]\"; } } .ms-Persona-presenceIcon[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 8px; line-height: 12px; vertical-align: top; } .ms-Persona-details[data-v-08ee50b8] { padding: 0 12px; vertical-align: middle; overflow: hidden; text-align: left; padding-left: 60px; display: table-cell; width: 100%; } .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; overflow: hidden; text-overflow: ellipsis; } .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 400; font-size: 17px; margin-top: -3px; line-height: 1.4; } .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralSecondary, default: #666666]\"; font-weight: 400; font-size: 12px; white-space: nowrap; line-height: 1.3; } .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: none; } .ms-Persona.ms-Persona--tiny[data-v-08ee50b8] { height: 30px; display: inline-block; } .ms-Persona.ms-Persona--tiny .ms-Persona-imageArea[data-v-08ee50b8] { overflow: visible; display: none; } .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { right: auto; top: 10px; left: 0; border: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { top: 9px; border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona.ms-Persona--tiny .ms-Persona-details[data-v-08ee50b8] { padding-left: 20px; } .ms-Persona.ms-Persona--tiny .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 9px; } .ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly[data-v-08ee50b8] { padding: 0; background-color: transparent; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText[data-v-08ee50b8]::after { content: ';'; } .ms-Persona.ms-Persona--xs[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile[data-v-08ee50b8], .ms-Persona.ms-Persona--token[data-v-08ee50b8] { height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xs .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-image[data-v-08ee50b8] { max-width: 32px; height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 28px; top: 6px; } .ms-Persona.ms-Persona--xs .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { font-size: 12px; line-height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-presence[data-v-08ee50b8] { left: 19px; } .ms-Persona.ms-Persona--xs .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { padding-left: 40px; } .ms-Persona.ms-Persona--xs .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 3px; } .ms-Persona.ms-Persona--xs .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--sm[data-v-08ee50b8] { height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-image[data-v-08ee50b8] { max-width: 40px; height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 38px; top: 5px; } .ms-Persona.ms-Persona--sm .ms-Persona-initials[data-v-08ee50b8] { font-size: 14px; line-height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-presence[data-v-08ee50b8] { left: 27px; } .ms-Persona.ms-Persona--sm .ms-Persona-details[data-v-08ee50b8] { padding-left: 48px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 1px; } .ms-Persona.ms-Persona--lg[data-v-08ee50b8] { height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--lg .ms-Persona-image[data-v-08ee50b8] { max-width: 72px; height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 67px; top: 10px; } .ms-Persona.ms-Persona--lg .ms-Persona-initials[data-v-08ee50b8] { font-size: 28px; line-height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8] { left: 49px; height: 20px; width: 20px; border-width: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 20px; font-size: 14px; } .ms-Persona.ms-Persona--lg .ms-Persona-details[data-v-08ee50b8] { padding-left: 84px; } .ms-Persona.ms-Persona--lg .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--xl[data-v-08ee50b8] { height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-image[data-v-08ee50b8] { max-width: 100px; height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 95px; top: 12px; } .ms-Persona.ms-Persona--xl .ms-Persona-initials[data-v-08ee50b8] { font-size: 42px; line-height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8] { height: 28px; width: 28px; left: 71px; border-width: 4px; } .ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 28px; font-size: 21px; position: relative; top: 1px; } .ms-Persona.ms-Persona--xl .ms-Persona-details[data-v-08ee50b8] { padding-left: 120px; } .ms-Persona.ms-Persona--xl .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 21px; font-weight: 300; margin-top: 0; } .ms-Persona.ms-Persona--xl .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 2px; } .ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--darkText .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8] { cursor: pointer; padding: 0 10px; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):hover, .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):focus { background-color: \"[theme:themeLighter, default: #deecf9]\"; outline: 1px solid transparent; } .ms-Persona.ms-Persona--available .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; } .ms-Persona.ms-Persona--away .ms-Persona-presence[data-v-08ee50b8] { background-color: #FCD116; } .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon[data-v-08ee50b8] { position: relative; left: 1px; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::before { content: ''; width: 100%; height: 100%; position: absolute; top: 0; left: 0; box-shadow: 0 0 0 2px #D93B3B inset; border-radius: 50%; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::after { content: ''; width: 100%; height: 2px; background-color: #D93B3B; transform: rotate(-45deg); position: absolute; top: 5px; left: 0; } .ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8]::after { top: 9px; } .ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8]::after { top: 13px; } .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #D93B3B; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #37006E; } } .ms-Persona.ms-Persona--dnd .ms-Persona-presence[data-v-08ee50b8] { background-color: #E81123; } .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: #93ABBD; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px \"[theme:white, default: #ffffff]\" inset; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px \"[theme:black, default: #000000]\" inset; } } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8] { display: inline-block; width: auto; } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8] { position: relative; width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8] { position: relative; } .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--token[data-v-08ee50b8] { display: inline-flex; width: auto; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-radius: 20px; margin: 4px; } .ms-Persona.ms-Persona--token[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8] { border-radius: 20px; display: inline-block; width: 32px; height: 32px; padding: 0; line-height: 30px; transition: background-color 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); text-align: center; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8] { width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { height: 30px; display: inline-block; width: auto; padding-right: 8px; } .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { padding-top: 0; line-height: 34px; } .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { position: relative; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Persona : Persona
        };
    },
    extends :  persona
}

var textField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"textField",staticClass:"ms-TextField",class:_vm.textFieldClass},[_c('label',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.type == 'multiline')?_c('textarea',{staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":"text","disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue}}):_c('input',{staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":_vm.inputType,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue}})])},staticRenderFns: [],
  name: 'ou-text-field',

  mixins: [type('multiline', 'underlined'), disabled],

  props: {
    value: String,
    label: String,
    placeholder: String,
    inputType: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'password', 'file'].includes(value);
      }
    }
  },

  computed: {
    textFieldClass: function textFieldClass() {
      var obj;

      return ( obj = {}, obj[("ms-TextField--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.TextField(this.$refs.textField);
  },

  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    }
  }
};

var TextFieldConsts;
(function (TextFieldConsts) {
    var Type;
    (function (Type) {
        Type[Type["Placeholder"] = 0] = "Placeholder";
        Type[Type["Underlined"] = 1] = "Underlined";
    })(Type = TextFieldConsts.Type || (TextFieldConsts.Type = {}));
})(TextFieldConsts || (TextFieldConsts = {}));
var TextField = (function () {
    function TextField(container) {
        this._container = container;
        this._type = [];
        this._textField = this._container.querySelector(".ms-TextField-field");
        this._textFieldLabel = this._container.querySelector(".ms-Label");
        this._setTextFieldType();
        this._addListeners();
    }
    TextField.prototype._setTextFieldType = function () {
        if (this._container.classList.contains("ms-TextField--placeholder")) {
            this._type.push(TextFieldConsts.Type.Placeholder);
        }
        if (this._container.classList.contains("ms-TextField--underlined")) {
            this._type.push(TextFieldConsts.Type.Underlined);
        }
    };
    TextField.prototype._addListeners = function () {
        var _this = this;
        this._textFieldLabel.addEventListener("click", function (event) {
            _this._textField.focus();
        });
        if (this._type.indexOf(TextFieldConsts.Type.Placeholder) >= 0) {
            this._textField.addEventListener("focus", function (event) {
                _this._textFieldLabel.style.display = "none";
            });
            this._textField.addEventListener("blur", function (event) {
                if (_this._textField.value.length === 0) {
                    _this._textFieldLabel.style.display = "block";
                }
            });
        }
        if (this._type.indexOf(TextFieldConsts.Type.Underlined) >= 0) {
            this._textField.addEventListener("focus", function (event) {
                _this._container.classList.add("is-active");
            });
            this._textField.addEventListener("blur", function (event) {
                _this._container.classList.remove("is-active");
            });
        }
    };
    return TextField;
}());

var uiTextfield = {_scopeId: 'data-v-9e6e890e',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 8px; } .ms-TextField .ms-Label[data-v-9e6e890e] { font-size: 14px; font-weight: 600; } .ms-TextField.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField.is-disabled[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-required .ms-Label[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-webkit-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-ms-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField-field[data-v-9e6e890e] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-radius: 0; font-weight: 300; font-size: 14px; color: \"[theme:neutralPrimary, default: #333333]\"; height: 32px; padding: 6px 12px 7px; width: 100%; min-width: 180px; outline: 0; text-overflow: ellipsis; } .ms-TextField-field[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-TextField-field[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #37006E; } } .ms-TextField-field[disabled][data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField-field[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-description[data-v-9e6e890e] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-size: 11px; } .ms-TextField.ms-TextField--placeholder[data-v-9e6e890e] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-TextField.ms-TextField--placeholder .ms-TextField-field[data-v-9e6e890e] { position: relative; background-color: transparent; z-index: 5; } .ms-TextField.ms-TextField--placeholder .ms-Label[data-v-9e6e890e] { position: absolute; font-weight: 300; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; padding: 6px 12px 7px; pointer-events: none; z-index: 0; } .ms-TextField.ms-TextField--placeholder.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e] { border-bottom: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; display: table; width: 100%; min-width: 180px; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #37006E; } } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField.ms-TextField--underlined .ms-Label[data-v-9e6e890e] { font-size: 14px; margin-right: 8px; display: table-cell; vertical-align: top; padding-left: 12px; padding-top: 9px; height: 32px; width: 1%; white-space: nowrap; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e] { border: 0; float: left; display: table-cell; text-align: left; padding-top: 8px; padding-bottom: 3px; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:focus, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:hover { outline: 0; } .ms-TextField.ms-TextField--underlined.is-disabled[data-v-9e6e890e] { border-bottom-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: transparent; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #37006E; } } .ms-TextField.ms-TextField--multiline .ms-TextField-field[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralSecondary, default: #666666]\"; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; font-size: 14px; font-weight: 400; line-height: 17px; min-height: 60px; min-width: 260px; padding-top: 6px; overflow: auto; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            TextField : TextField
        };
    },
    extends :  textField
}

var baseUrl = "https://spoprod-a.akamaihd.net/files/fabric/assets/icons"; // this is the baseUrl used by MS!
var scopeId = "f04906fd";
function GetIcon(name, unicode, bundle)
{
    // *please not, we manually scope the css
    return function (resolve){ //factory: https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
        loadStyles(("\n            @font-face{\n                font-family:fabricmdl2icons" + scopeId + bundle + ";\n                src: url(" + baseUrl + "/fabric-icons-" + bundle + ".woff) format(\"woff\")\n            }\n            .ms-Icon[data-v-" + scopeId + "]{display:inline-block;font-style:normal;font-weight:400;speak:none}\n            .ms-Icon--" + name + "[data-v-" + scopeId + "]:before{font-family:fabricmdl2icons" + scopeId + bundle + "; content:\"" + unicode + "\"}\n        "));
        resolve({template : ("<i data-v-" + scopeId + " class='ms-Icon ms-Icon--" + name + "'></i>")});
    };
}

// export let uiIconAdd = GetIcon("Add", "\uE710", "a13498cf");
// export let uiIconCancel = GetIcon("Cancel", "\uE711", "a13498cf");
// export let uiIconMore = GetIcon("More", "\uE712", "a13498cf");

// export let uiIconFerry = GetIcon("Ferry", "\uE7E3", "1-a653c37c");

var uiIconGlobalNavButton = GetIcon("GlobalNavButton", "\uE700", "a13498cf");
var uiIconChevronDown = GetIcon("ChevronDown", "\uE70D", "a13498cf");
var uiIconChevronUp = GetIcon("ChevronUp", "\uE70E", "a13498cf");
var uiIconEdit = GetIcon("Edit", "\uE70F", "a13498cf");
var uiIconAdd = GetIcon("Add", "\uE710", "a13498cf");
var uiIconCancel = GetIcon("Cancel", "\uE711", "a13498cf");
var uiIconMore = GetIcon("More", "\uE712", "a13498cf");
var uiIconSettings = GetIcon("Settings", "\uE713", "a13498cf");
var uiIconMail = GetIcon("Mail", "\uE715", "a13498cf");
var uiIconFilter = GetIcon("Filter", "\uE71C", "a13498cf");
var uiIconSearch = GetIcon("Search", "\uE721", "a13498cf");
var uiIconShare = GetIcon("Share", "\uE72D", "a13498cf");
var uiIconBlockedSite = GetIcon("BlockedSite", "\uE72F", "a13498cf");
var uiIconFavoriteStar = GetIcon("FavoriteStar", "\uE734", "a13498cf");
var uiIconFavoriteStarFill = GetIcon("FavoriteStarFill", "\uE735", "a13498cf");
var uiIconCheckMark = GetIcon("CheckMark", "\uE73E", "a13498cf");
var uiIconDelete = GetIcon("Delete", "\uE74D", "a13498cf");
var uiIconChevronLeft = GetIcon("ChevronLeft", "\uE76B", "a13498cf");
var uiIconChevronRight = GetIcon("ChevronRight", "\uE76C", "a13498cf");
var uiIconCalendar = GetIcon("Calendar", "\uE787", "a13498cf");
var uiIconMegaphone = GetIcon("Megaphone", "\uE789", "a13498cf");
var uiIconUndo = GetIcon("Undo", "\uE7A7", "a13498cf");
var uiIconFlag = GetIcon("Flag", "\uE7C1", "a13498cf");
var uiIconPage = GetIcon("Page", "\uE7C3", "a13498cf");
var uiIconPinned = GetIcon("Pinned", "\uE840", "a13498cf");
var uiIconView = GetIcon("View", "\uE890", "a13498cf");
var uiIconClear = GetIcon("Clear", "\uE894", "a13498cf");
var uiIconDownload = GetIcon("Download", "\uE896", "a13498cf");
var uiIconUpload = GetIcon("Upload", "\uE898", "a13498cf");
var uiIconFolder = GetIcon("Folder", "\uE8B7", "a13498cf");
var uiIconSort = GetIcon("Sort", "\uE8CB", "a13498cf");
var uiIconAlignRight = GetIcon("AlignRight", "\uE8E2", "a13498cf");
var uiIconAlignLeft = GetIcon("AlignLeft", "\uE8E4", "a13498cf");
var uiIconTag = GetIcon("Tag", "\uE8EC", "a13498cf");
var uiIconAddFriend = GetIcon("AddFriend", "\uE8FA", "a13498cf");
var uiIconInfo = GetIcon("Info", "\uE946", "a13498cf");
var uiIconSortLines = GetIcon("SortLines", "\uE9D0", "a13498cf");
var uiIconList = GetIcon("List", "\uEA37", "a13498cf");
var uiIconCircleRing = GetIcon("CircleRing", "\uEA3A", "a13498cf");
var uiIconHeart = GetIcon("Heart", "\uEB51", "a13498cf");
var uiIconHeartFill = GetIcon("HeartFill", "\uEB52", "a13498cf");
var uiIconTiles = GetIcon("Tiles", "\uECA5", "a13498cf");
var uiIconEmbed = GetIcon("Embed", "\uECCE", "a13498cf");
var uiIconGlimmer = GetIcon("Glimmer", "\uECF4", "a13498cf");
var uiIconAscending = GetIcon("Ascending", "\uEDC0", "a13498cf");
var uiIconDescending = GetIcon("Descending", "\uEDC1", "a13498cf");
var uiIconSortUp = GetIcon("SortUp", "\uEE68", "a13498cf");
var uiIconSortDown = GetIcon("SortDown", "\uEE69", "a13498cf");
var uiIconSyncToPC = GetIcon("SyncToPC", "\uEE6E", "a13498cf");
var uiIconLargeGrid = GetIcon("LargeGrid", "\uEECB", "a13498cf");
var uiIconSkypeCheck = GetIcon("SkypeCheck", "\uEF80", "a13498cf");
var uiIconSkypeClock = GetIcon("SkypeClock", "\uEF81", "a13498cf");
var uiIconSkypeMinus = GetIcon("SkypeMinus", "\uEF82", "a13498cf");
var uiIconClearFilter = GetIcon("ClearFilter", "\uEF8F", "a13498cf");
var uiIconFlow = GetIcon("Flow", "\uEF90", "a13498cf");
var uiIconStatusCircleCheckmark = GetIcon("StatusCircleCheckmark", "\uF13E", "a13498cf");
var uiIconMoreVertical = GetIcon("MoreVertical", "\uF2BC", "a13498cf");
var uiIconDecreaseIndentLegacy = GetIcon("DecreaseIndentLegacy", "\uE290", "0-29734c63");
var uiIconIncreaseIndentLegacy = GetIcon("IncreaseIndentLegacy", "\uE291", "0-29734c63");
var uiIconSizeLegacy = GetIcon("SizeLegacy", "\uE2B2", "0-29734c63");
var uiIconInternetSharing = GetIcon("InternetSharing", "\uE704", "0-29734c63");
var uiIconBrightness = GetIcon("Brightness", "\uE706", "0-29734c63");
var uiIconMapPin = GetIcon("MapPin", "\uE707", "0-29734c63");
var uiIconAirplane = GetIcon("Airplane", "\uE709", "0-29734c63");
var uiIconTablet = GetIcon("Tablet", "\uE70A", "0-29734c63");
var uiIconQuickNote = GetIcon("QuickNote", "\uE70B", "0-29734c63");
var uiIconVideo = GetIcon("Video", "\uE714", "0-29734c63");
var uiIconPeople = GetIcon("People", "\uE716", "0-29734c63");
var uiIconPhone = GetIcon("Phone", "\uE717", "0-29734c63");
var uiIconPin = GetIcon("Pin", "\uE718", "0-29734c63");
var uiIconShop = GetIcon("Shop", "\uE719", "0-29734c63");
var uiIconStop = GetIcon("Stop", "\uE71A", "0-29734c63");
var uiIconLink = GetIcon("Link", "\uE71B", "0-29734c63");
var uiIconAllApps = GetIcon("AllApps", "\uE71D", "0-29734c63");
var uiIconZoom = GetIcon("Zoom", "\uE71E", "0-29734c63");
var uiIconZoomOut = GetIcon("ZoomOut", "\uE71F", "0-29734c63");
var uiIconMicrophone = GetIcon("Microphone", "\uE720", "0-29734c63");
var uiIconCamera = GetIcon("Camera", "\uE722", "0-29734c63");
var uiIconAttach = GetIcon("Attach", "\uE723", "0-29734c63");
var uiIconSend = GetIcon("Send", "\uE724", "0-29734c63");
var uiIconFavoriteList = GetIcon("FavoriteList", "\uE728", "0-29734c63");
var uiIconPageSolid = GetIcon("PageSolid", "\uE729", "0-29734c63");
var uiIconForward = GetIcon("Forward", "\uE72A", "0-29734c63");
var uiIconBack = GetIcon("Back", "\uE72B", "0-29734c63");
var uiIconRefresh = GetIcon("Refresh", "\uE72C", "0-29734c63");
var uiIconLock = GetIcon("Lock", "\uE72E", "0-29734c63");
var uiIconReportHacked = GetIcon("ReportHacked", "\uE730", "0-29734c63");
var uiIconEMI = GetIcon("EMI", "\uE731", "0-29734c63");
var uiIconMiniLink = GetIcon("MiniLink", "\uE732", "0-29734c63");
var uiIconBlocked = GetIcon("Blocked", "\uE733", "0-29734c63");
var uiIconReadingMode = GetIcon("ReadingMode", "\uE736", "0-29734c63");
var uiIconFavicon = GetIcon("Favicon", "\uE737", "0-29734c63");
var uiIconRemove = GetIcon("Remove", "\uE738", "0-29734c63");
var uiIconCheckbox = GetIcon("Checkbox", "\uE739", "0-29734c63");
var uiIconCheckboxComposite = GetIcon("CheckboxComposite", "\uE73A", "0-29734c63");
var uiIconCheckboxIndeterminate = GetIcon("CheckboxIndeterminate", "\uE73C", "0-29734c63");
var uiIconCheckboxCompositeReversed = GetIcon("CheckboxCompositeReversed", "\uE73D", "0-29734c63");
var uiIconBackToWindow = GetIcon("BackToWindow", "\uE73F", "0-29734c63");
var uiIconFullScreen = GetIcon("FullScreen", "\uE740", "0-29734c63");
var uiIconPrint = GetIcon("Print", "\uE749", "0-29734c63");
var uiIconUp = GetIcon("Up", "\uE74A", "0-29734c63");
var uiIconDown = GetIcon("Down", "\uE74B", "0-29734c63");
var uiIconOEM = GetIcon("OEM", "\uE74C", "0-29734c63");
var uiIconSave = GetIcon("Save", "\uE74E", "0-29734c63");
var uiIconCloud = GetIcon("Cloud", "\uE753", "0-29734c63");
var uiIconCommandPrompt = GetIcon("CommandPrompt", "\uE756", "0-29734c63");
var uiIconSad = GetIcon("Sad", "\uE757", "0-29734c63");
var uiIconSIPMove = GetIcon("SIPMove", "\uE759", "0-29734c63");
var uiIconEraseTool = GetIcon("EraseTool", "\uE75C", "0-29734c63");
var uiIconGripperTool = GetIcon("GripperTool", "\uE75E", "0-29734c63");
var uiIconDialpad = GetIcon("Dialpad", "\uE75F", "0-29734c63");
var uiIconPageLeft = GetIcon("PageLeft", "\uE760", "0-29734c63");
var uiIconPageRight = GetIcon("PageRight", "\uE761", "0-29734c63");
var uiIconMultiSelect = GetIcon("MultiSelect", "\uE762", "0-29734c63");
var uiIconKeyboardClassic = GetIcon("KeyboardClassic", "\uE765", "0-29734c63");
var uiIconPlay = GetIcon("Play", "\uE768", "0-29734c63");
var uiIconPause = GetIcon("Pause", "\uE769", "0-29734c63");
var uiIconEmoji2 = GetIcon("Emoji2", "\uE76E", "0-29734c63");
var uiIconGripperBarHorizontal = GetIcon("GripperBarHorizontal", "\uE76F", "0-29734c63");
var uiIconSystem = GetIcon("System", "\uE770", "0-29734c63");
var uiIconPersonalize = GetIcon("Personalize", "\uE771", "0-29734c63");
var uiIconSearchAndApps = GetIcon("SearchAndApps", "\uE773", "0-29734c63");
var uiIconGlobe = GetIcon("Globe", "\uE774", "0-29734c63");
var uiIconContactInfo = GetIcon("ContactInfo", "\uE779", "0-29734c63");
var uiIconUnpin = GetIcon("Unpin", "\uE77A", "0-29734c63");
var uiIconContact = GetIcon("Contact", "\uE77B", "0-29734c63");
var uiIconMemo = GetIcon("Memo", "\uE77C", "0-29734c63");
var uiIconPaste = GetIcon("Paste", "\uE77F", "0-29734c63");
var uiIconWindowsLogo = GetIcon("WindowsLogo", "\uE782", "0-29734c63");
var uiIconError = GetIcon("Error", "\uE783", "0-29734c63");
var uiIconGripperBarVertical = GetIcon("GripperBarVertical", "\uE784", "0-29734c63");
var uiIconUnlock = GetIcon("Unlock", "\uE785", "0-29734c63");
var uiIconAutoEnhanceOn = GetIcon("AutoEnhanceOn", "\uE78D", "0-29734c63");
var uiIconAutoEnhanceOff = GetIcon("AutoEnhanceOff", "\uE78E", "0-29734c63");
var uiIconColor = GetIcon("Color", "\uE790", "0-29734c63");
var uiIconSaveAs = GetIcon("SaveAs", "\uE792", "0-29734c63");
var uiIconLight = GetIcon("Light", "\uE793", "0-29734c63");
var uiIconFilters = GetIcon("Filters", "\uE795", "0-29734c63");
var uiIconAspectRatio = GetIcon("AspectRatio", "\uE799", "0-29734c63");
var uiIconContrast = GetIcon("Contrast", "\uE7A1", "0-29734c63");
var uiIconRedo = GetIcon("Redo", "\uE7A6", "0-29734c63");
var uiIconCrop = GetIcon("Crop", "\uE7A8", "0-29734c63");
var uiIconPhotoCollection = GetIcon("PhotoCollection", "\uE7AA", "0-29734c63");
var uiIconAlbum = GetIcon("Album", "\uE7AB", "0-29734c63");
var uiIconRotate = GetIcon("Rotate", "\uE7AD", "0-29734c63");
var uiIconPanoIndicator = GetIcon("PanoIndicator", "\uE7B0", "0-29734c63");
var uiIconRedEye = GetIcon("RedEye", "\uE7B3", "0-29734c63");
var uiIconThumbnailView = GetIcon("ThumbnailView", "\uE7B6", "0-29734c63");
var uiIconPackage = GetIcon("Package", "\uE7B8", "0-29734c63");
var uiIconWarning = GetIcon("Warning", "\uE7BA", "0-29734c63");
var uiIconFinancial = GetIcon("Financial", "\uE7BB", "0-29734c63");
var uiIconEducation = GetIcon("Education", "\uE7BE", "0-29734c63");
var uiIconShoppingCart = GetIcon("ShoppingCart", "\uE7BF", "0-29734c63");
var uiIconTrain = GetIcon("Train", "\uE7C0", "0-29734c63");
var uiIconMove = GetIcon("Move", "\uE7C2", "0-29734c63");
var uiIconTouchPointer = GetIcon("TouchPointer", "\uE7C9", "0-29734c63");
var uiIconMerge = GetIcon("Merge", "\uE7D5", "0-29734c63");
var uiIconTurnRight = GetIcon("TurnRight", "\uE7DB", "1-a653c37c");
var uiIconFerry = GetIcon("Ferry", "\uE7E3", "1-a653c37c");
var uiIconHighlight = GetIcon("Highlight", "\uE7E6", "1-a653c37c");
var uiIconPowerButton = GetIcon("PowerButton", "\uE7E8", "1-a653c37c");
var uiIconTab = GetIcon("Tab", "\uE7E9", "1-a653c37c");
var uiIconAdmin = GetIcon("Admin", "\uE7EF", "1-a653c37c");
var uiIconTVMonitor = GetIcon("TVMonitor", "\uE7F4", "1-a653c37c");
var uiIconSpeakers = GetIcon("Speakers", "\uE7F5", "1-a653c37c");
var uiIconStackIndicator = GetIcon("StackIndicator", "\uE7FF", "1-a653c37c");
var uiIconNav2DMapView = GetIcon("Nav2DMapView", "\uE800", "1-a653c37c");
var uiIconCar = GetIcon("Car", "\uE804", "1-a653c37c");
var uiIconBus = GetIcon("Bus", "\uE806", "1-a653c37c");
var uiIconEatDrink = GetIcon("EatDrink", "\uE807", "1-a653c37c");
var uiIconLocationCircle = GetIcon("LocationCircle", "\uE80E", "1-a653c37c");
var uiIconHome = GetIcon("Home", "\uE80F", "1-a653c37c");
var uiIconSwitcherStartEnd = GetIcon("SwitcherStartEnd", "\uE810", "1-a653c37c");
var uiIconParkingLocation = GetIcon("ParkingLocation", "\uE811", "1-a653c37c");
var uiIconIncidentTriangle = GetIcon("IncidentTriangle", "\uE814", "1-a653c37c");
var uiIconTouch = GetIcon("Touch", "\uE815", "1-a653c37c");
var uiIconMapDirections = GetIcon("MapDirections", "\uE816", "1-a653c37c");
var uiIconCaretHollow = GetIcon("CaretHollow", "\uE817", "1-a653c37c");
var uiIconCaretSolid = GetIcon("CaretSolid", "\uE818", "1-a653c37c");
var uiIconHistory = GetIcon("History", "\uE81C", "1-a653c37c");
var uiIconLocation = GetIcon("Location", "\uE81D", "1-a653c37c");
var uiIconWork = GetIcon("Work", "\uE821", "1-a653c37c");
var uiIconRecent = GetIcon("Recent", "\uE823", "1-a653c37c");
var uiIconHotel = GetIcon("Hotel", "\uE824", "1-a653c37c");
var uiIconLocationDot = GetIcon("LocationDot", "\uE827", "1-a653c37c");
var uiIconDictionary = GetIcon("Dictionary", "\uE82D", "1-a653c37c");
var uiIconChromeBack = GetIcon("ChromeBack", "\uE830", "1-a653c37c");
var uiIconFolderOpen = GetIcon("FolderOpen", "\uE838", "1-a653c37c");
var uiIconPinnedFill = GetIcon("PinnedFill", "\uE842", "1-a653c37c");
var uiIconRevToggleKey = GetIcon("RevToggleKey", "\uE845", "1-a653c37c");
var uiIconPrevious = GetIcon("Previous", "\uE892", "1-a653c37c");
var uiIconNext = GetIcon("Next", "\uE893", "1-a653c37c");
var uiIconSync = GetIcon("Sync", "\uE895", "1-a653c37c");
var uiIconHelp = GetIcon("Help", "\uE897", "1-a653c37c");
var uiIconEmoji = GetIcon("Emoji", "\uE899", "1-a653c37c");
var uiIconMailForward = GetIcon("MailForward", "\uE89C", "1-a653c37c");
var uiIconClosePane = GetIcon("ClosePane", "\uE89F", "1-a653c37c");
var uiIconOpenPane = GetIcon("OpenPane", "\uE8A0", "1-a653c37c");
var uiIconPreviewLink = GetIcon("PreviewLink", "\uE8A1", "1-a653c37c");
var uiIconZoomIn = GetIcon("ZoomIn", "\uE8A3", "1-a653c37c");
var uiIconBookmarks = GetIcon("Bookmarks", "\uE8A4", "1-a653c37c");
var uiIconDocument = GetIcon("Document", "\uE8A5", "1-a653c37c");
var uiIconProtectedDocument = GetIcon("ProtectedDocument", "\uE8A6", "1-a653c37c");
var uiIconOpenInNewWindow = GetIcon("OpenInNewWindow", "\uE8A7", "1-a653c37c");
var uiIconMailFill = GetIcon("MailFill", "\uE8A8", "1-a653c37c");
var uiIconViewAll = GetIcon("ViewAll", "\uE8A9", "1-a653c37c");
var uiIconSwitch = GetIcon("Switch", "\uE8AB", "1-a653c37c");
var uiIconRename = GetIcon("Rename", "\uE8AC", "1-a653c37c");
var uiIconRemote = GetIcon("Remote", "\uE8AF", "1-a653c37c");
var uiIconSelectAll = GetIcon("SelectAll", "\uE8B3", "1-a653c37c");
var uiIconOrientation = GetIcon("Orientation", "\uE8B4", "1-a653c37c");
var uiIconImport = GetIcon("Import", "\uE8B5", "1-a653c37c");
var uiIconPicture = GetIcon("Picture", "\uE8B9", "1-a653c37c");
var uiIconChromeClose = GetIcon("ChromeClose", "\uE8BB", "1-a653c37c");
var uiIconShowResults = GetIcon("ShowResults", "\uE8BC", "1-a653c37c");
var uiIconMessage = GetIcon("Message", "\uE8BD", "1-a653c37c");
var uiIconCalendarDay = GetIcon("CalendarDay", "\uE8BF", "1-a653c37c");
var uiIconCalendarWeek = GetIcon("CalendarWeek", "\uE8C0", "1-a653c37c");
var uiIconMailReplyAll = GetIcon("MailReplyAll", "\uE8C2", "1-a653c37c");
var uiIconRead = GetIcon("Read", "\uE8C3", "1-a653c37c");
var uiIconCut = GetIcon("Cut", "\uE8C6", "1-a653c37c");
var uiIconPaymentCard = GetIcon("PaymentCard", "\uE8C7", "1-a653c37c");
var uiIconCopy = GetIcon("Copy", "\uE8C8", "1-a653c37c");
var uiIconImportant = GetIcon("Important", "\uE8C9", "1-a653c37c");
var uiIconMailReply = GetIcon("MailReply", "\uE8CA", "1-a653c37c");
var uiIconGotoToday = GetIcon("GotoToday", "\uE8D1", "1-a653c37c");
var uiIconFont = GetIcon("Font", "\uE8D2", "1-a653c37c");
var uiIconFontColor = GetIcon("FontColor", "\uE8D3", "1-a653c37c");
var uiIconFolderFill = GetIcon("FolderFill", "\uE8D5", "1-a653c37c");
var uiIconPermissions = GetIcon("Permissions", "\uE8D7", "1-a653c37c");
var uiIconDisableUpdates = GetIcon("DisableUpdates", "\uE8D8", "1-a653c37c");
var uiIconUnfavorite = GetIcon("Unfavorite", "\uE8D9", "1-a653c37c");
var uiIconItalic = GetIcon("Italic", "\uE8DB", "1-a653c37c");
var uiIconUnderline = GetIcon("Underline", "\uE8DC", "1-a653c37c");
var uiIconBold = GetIcon("Bold", "\uE8DD", "1-a653c37c");
var uiIconMoveToFolder = GetIcon("MoveToFolder", "\uE8DE", "1-a653c37c");
var uiIconDislike = GetIcon("Dislike", "\uE8E0", "1-a653c37c");
var uiIconLike = GetIcon("Like", "\uE8E1", "1-a653c37c");
var uiIconAlignCenter = GetIcon("AlignCenter", "\uE8E3", "1-a653c37c");
var uiIconOpenFile = GetIcon("OpenFile", "\uE8E5", "1-a653c37c");
var uiIconFontDecrease = GetIcon("FontDecrease", "\uE8E7", "1-a653c37c");
var uiIconFontIncrease = GetIcon("FontIncrease", "\uE8E8", "1-a653c37c");
var uiIconFontSize = GetIcon("FontSize", "\uE8E9", "1-a653c37c");
var uiIconCellPhone = GetIcon("CellPhone", "\uE8EA", "1-a653c37c");
var uiIconCalculator = GetIcon("Calculator", "\uE8EF", "1-a653c37c");
var uiIconLibrary = GetIcon("Library", "\uE8F1", "1-a653c37c");
var uiIconPostUpdate = GetIcon("PostUpdate", "\uE8F3", "1-a653c37c");
var uiIconNewFolder = GetIcon("NewFolder", "\uE8F4", "1-a653c37c");
var uiIconCalendarReply = GetIcon("CalendarReply", "\uE8F5", "1-a653c37c");
var uiIconUnsyncFolder = GetIcon("UnsyncFolder", "\uE8F6", "1-a653c37c");
var uiIconSyncFolder = GetIcon("SyncFolder", "\uE8F7", "1-a653c37c");
var uiIconBlockContact = GetIcon("BlockContact", "\uE8F8", "1-a653c37c");
var uiIconAccept = GetIcon("Accept", "\uE8FB", "1-a653c37c");
var uiIconBulletedList = GetIcon("BulletedList", "\uE8FD", "1-a653c37c");
var uiIconPreview = GetIcon("Preview", "\uE8FF", "1-a653c37c");
var uiIconNews = GetIcon("News", "\uE900", "1-a653c37c");
var uiIconChat = GetIcon("Chat", "\uE901", "1-a653c37c");
var uiIconGroup = GetIcon("Group", "\uE902", "2-b9379dbc");
var uiIconWorld = GetIcon("World", "\uE909", "2-b9379dbc");
var uiIconComment = GetIcon("Comment", "\uE90A", "2-b9379dbc");
var uiIconDockLeft = GetIcon("DockLeft", "\uE90C", "2-b9379dbc");
var uiIconDockRight = GetIcon("DockRight", "\uE90D", "2-b9379dbc");
var uiIconRepair = GetIcon("Repair", "\uE90F", "2-b9379dbc");
var uiIconAccounts = GetIcon("Accounts", "\uE910", "2-b9379dbc");
var uiIconRadioBullet = GetIcon("RadioBullet", "\uE915", "2-b9379dbc");
var uiIconStopwatch = GetIcon("Stopwatch", "\uE916", "2-b9379dbc");
var uiIconClock = GetIcon("Clock", "\uE917", "2-b9379dbc");
var uiIconWorldClock = GetIcon("WorldClock", "\uE918", "2-b9379dbc");
var uiIconAlarmClock = GetIcon("AlarmClock", "\uE919", "2-b9379dbc");
var uiIconPhoto = GetIcon("Photo", "\uE91B", "2-b9379dbc");
var uiIconHospital = GetIcon("Hospital", "\uE91D", "2-b9379dbc");
var uiIconTimer = GetIcon("Timer", "\uE91E", "2-b9379dbc");
var uiIconFullCircleMask = GetIcon("FullCircleMask", "\uE91F", "2-b9379dbc");
var uiIconLocationFill = GetIcon("LocationFill", "\uE920", "2-b9379dbc");
var uiIconChromeMinimize = GetIcon("ChromeMinimize", "\uE921", "2-b9379dbc");
var uiIconAnnotation = GetIcon("Annotation", "\uE924", "2-b9379dbc");
var uiIconFingerprint = GetIcon("Fingerprint", "\uE928", "2-b9379dbc");
var uiIconHandwriting = GetIcon("Handwriting", "\uE929", "2-b9379dbc");
var uiIconCompleted = GetIcon("Completed", "\uE930", "2-b9379dbc");
var uiIconLabel = GetIcon("Label", "\uE932", "2-b9379dbc");
var uiIconFlickDown = GetIcon("FlickDown", "\uE935", "2-b9379dbc");
var uiIconFlickUp = GetIcon("FlickUp", "\uE936", "2-b9379dbc");
var uiIconFlickLeft = GetIcon("FlickLeft", "\uE937", "2-b9379dbc");
var uiIconFlickRight = GetIcon("FlickRight", "\uE938", "2-b9379dbc");
var uiIconMiniExpand = GetIcon("MiniExpand", "\uE93A", "2-b9379dbc");
var uiIconMiniContract = GetIcon("MiniContract", "\uE93B", "2-b9379dbc");
var uiIconStreaming = GetIcon("Streaming", "\uE93E", "2-b9379dbc");
var uiIconMusicInCollection = GetIcon("MusicInCollection", "\uE940", "2-b9379dbc");
var uiIconOneDriveLogo = GetIcon("OneDriveLogo", "\uE941", "2-b9379dbc");
var uiIconCompassNW = GetIcon("CompassNW", "\uE942", "2-b9379dbc");
var uiIconCode = GetIcon("Code", "\uE943", "2-b9379dbc");
var uiIconLightningBolt = GetIcon("LightningBolt", "\uE945", "2-b9379dbc");
var uiIconCalculatorMultiply = GetIcon("CalculatorMultiply", "\uE947", "2-b9379dbc");
var uiIconCalculatorAddition = GetIcon("CalculatorAddition", "\uE948", "2-b9379dbc");
var uiIconCalculatorSubtract = GetIcon("CalculatorSubtract", "\uE949", "2-b9379dbc");
var uiIconCalculatorEqualTo = GetIcon("CalculatorEqualTo", "\uE94E", "2-b9379dbc");
var uiIconPrintfaxPrinterFile = GetIcon("PrintfaxPrinterFile", "\uE956", "2-b9379dbc");
var uiIconCommunications = GetIcon("Communications", "\uE95A", "2-b9379dbc");
var uiIconHeadset = GetIcon("Headset", "\uE95B", "2-b9379dbc");
var uiIconHealth = GetIcon("Health", "\uE95E", "2-b9379dbc");
var uiIconChevronUpSmall = GetIcon("ChevronUpSmall", "\uE96D", "2-b9379dbc");
var uiIconChevronDownSmall = GetIcon("ChevronDownSmall", "\uE96E", "2-b9379dbc");
var uiIconChevronLeftSmall = GetIcon("ChevronLeftSmall", "\uE96F", "2-b9379dbc");
var uiIconChevronRightSmall = GetIcon("ChevronRightSmall", "\uE970", "2-b9379dbc");
var uiIconChevronUpMed = GetIcon("ChevronUpMed", "\uE971", "2-b9379dbc");
var uiIconChevronDownMed = GetIcon("ChevronDownMed", "\uE972", "2-b9379dbc");
var uiIconChevronLeftMed = GetIcon("ChevronLeftMed", "\uE973", "2-b9379dbc");
var uiIconChevronRightMed = GetIcon("ChevronRightMed", "\uE974", "2-b9379dbc");
var uiIconPC1 = GetIcon("PC1", "\uE977", "2-b9379dbc");
var uiIconPresenceChickletVideo = GetIcon("PresenceChickletVideo", "\uE979", "2-b9379dbc");
var uiIconReply = GetIcon("Reply", "\uE97A", "2-b9379dbc");
var uiIconHalfAlpha = GetIcon("HalfAlpha", "\uE97E", "2-b9379dbc");
var uiIconConstructionCone = GetIcon("ConstructionCone", "\uE98F", "2-b9379dbc");
var uiIconDoubleChevronLeftMed = GetIcon("DoubleChevronLeftMed", "\uE991", "2-b9379dbc");
var uiIconVolume0 = GetIcon("Volume0", "\uE992", "2-b9379dbc");
var uiIconVolume1 = GetIcon("Volume1", "\uE993", "2-b9379dbc");
var uiIconVolume2 = GetIcon("Volume2", "\uE994", "2-b9379dbc");
var uiIconVolume3 = GetIcon("Volume3", "\uE995", "2-b9379dbc");
var uiIconChart = GetIcon("Chart", "\uE999", "2-b9379dbc");
var uiIconRobot = GetIcon("Robot", "\uE99A", "2-b9379dbc");
var uiIconManufacturing = GetIcon("Manufacturing", "\uE99C", "2-b9379dbc");
var uiIconLockSolid = GetIcon("LockSolid", "\uE9A2", "2-b9379dbc");
var uiIconBidiLtr = GetIcon("BidiLtr", "\uE9AA", "2-b9379dbc");
var uiIconBidiRtl = GetIcon("BidiRtl", "\uE9AB", "2-b9379dbc");
var uiIconRightDoubleQuote = GetIcon("RightDoubleQuote", "\uE9B1", "2-b9379dbc");
var uiIconSunny = GetIcon("Sunny", "\uE9BD", "2-b9379dbc");
var uiIconCloudWeather = GetIcon("CloudWeather", "\uE9BE", "2-b9379dbc");
var uiIconCloudy = GetIcon("Cloudy", "\uE9BF", "2-b9379dbc");
var uiIconPartlyCloudyDay = GetIcon("PartlyCloudyDay", "\uE9C0", "2-b9379dbc");
var uiIconPartlyCloudyNight = GetIcon("PartlyCloudyNight", "\uE9C1", "2-b9379dbc");
var uiIconClearNight = GetIcon("ClearNight", "\uE9C2", "2-b9379dbc");
var uiIconRainShowersDay = GetIcon("RainShowersDay", "\uE9C3", "2-b9379dbc");
var uiIconRain = GetIcon("Rain", "\uE9C4", "2-b9379dbc");
var uiIconThunderstorms = GetIcon("Thunderstorms", "\uE9C6", "2-b9379dbc");
var uiIconRainSnow = GetIcon("RainSnow", "\uE9C7", "2-b9379dbc");
var uiIconSnow = GetIcon("Snow", "\uE9C8", "2-b9379dbc");
var uiIconBlowingSnow = GetIcon("BlowingSnow", "\uE9C9", "2-b9379dbc");
var uiIconFrigid = GetIcon("Frigid", "\uE9CA", "2-b9379dbc");
var uiIconFog = GetIcon("Fog", "\uE9CB", "2-b9379dbc");
var uiIconSqualls = GetIcon("Squalls", "\uE9CC", "2-b9379dbc");
var uiIconDuststorm = GetIcon("Duststorm", "\uE9CD", "2-b9379dbc");
var uiIconUnknown = GetIcon("Unknown", "\uE9CE", "2-b9379dbc");
var uiIconPrecipitation = GetIcon("Precipitation", "\uE9CF", "2-b9379dbc");
var uiIconRibbon = GetIcon("Ribbon", "\uE9D1", "2-b9379dbc");
var uiIconAreaChart = GetIcon("AreaChart", "\uE9D2", "2-b9379dbc");
var uiIconAssign = GetIcon("Assign", "\uE9D3", "2-b9379dbc");
var uiIconCheckList = GetIcon("CheckList", "\uE9D5", "2-b9379dbc");
var uiIconDiagnostic = GetIcon("Diagnostic", "\uE9D9", "2-b9379dbc");
var uiIconGenerate = GetIcon("Generate", "\uE9DA", "2-b9379dbc");
var uiIconLineChart = GetIcon("LineChart", "\uE9E6", "2-b9379dbc");
var uiIconEqualizer = GetIcon("Equalizer", "\uE9E9", "2-b9379dbc");
var uiIconBarChartHorizontal = GetIcon("BarChartHorizontal", "\uE9EB", "2-b9379dbc");
var uiIconBarChartVertical = GetIcon("BarChartVertical", "\uE9EC", "2-b9379dbc");
var uiIconFreezing = GetIcon("Freezing", "\uE9EF", "2-b9379dbc");
var uiIconProcessing = GetIcon("Processing", "\uE9F5", "2-b9379dbc");
var uiIconSnowShowerDay = GetIcon("SnowShowerDay", "\uE9FD", "2-b9379dbc");
var uiIconHailDay = GetIcon("HailDay", "\uEA00", "2-b9379dbc");
var uiIconWorkFlow = GetIcon("WorkFlow", "\uEA01", "3-ef2110da");
var uiIconHourGlass = GetIcon("HourGlass", "\uEA03", "3-ef2110da");
var uiIconStoreLogoMed20 = GetIcon("StoreLogoMed20", "\uEA04", "3-ef2110da");
var uiIconTimeSheet = GetIcon("TimeSheet", "\uEA05", "3-ef2110da");
var uiIconTriangleSolid = GetIcon("TriangleSolid", "\uEA08", "3-ef2110da");
var uiIconVideoSolid = GetIcon("VideoSolid", "\uEA0C", "3-ef2110da");
var uiIconRainShowersNight = GetIcon("RainShowersNight", "\uEA0F", "3-ef2110da");
var uiIconSnowShowerNight = GetIcon("SnowShowerNight", "\uEA11", "3-ef2110da");
var uiIconTeamwork = GetIcon("Teamwork", "\uEA12", "3-ef2110da");
var uiIconHailNight = GetIcon("HailNight", "\uEA13", "3-ef2110da");
var uiIconPeopleAdd = GetIcon("PeopleAdd", "\uEA15", "3-ef2110da");
var uiIconGlasses = GetIcon("Glasses", "\uEA16", "3-ef2110da");
var uiIconDateTime2 = GetIcon("DateTime2", "\uEA17", "3-ef2110da");
var uiIconShield = GetIcon("Shield", "\uEA18", "3-ef2110da");
var uiIconHeader1 = GetIcon("Header1", "\uEA19", "3-ef2110da");
var uiIconPageAdd = GetIcon("PageAdd", "\uEA1A", "3-ef2110da");
var uiIconNumberedList = GetIcon("NumberedList", "\uEA1C", "3-ef2110da");
var uiIconPowerBILogo = GetIcon("PowerBILogo", "\uEA1E", "3-ef2110da");
var uiIconInfo2 = GetIcon("Info2", "\uEA1F", "3-ef2110da");
var uiIconMusicInCollectionFill = GetIcon("MusicInCollectionFill", "\uEA36", "3-ef2110da");
var uiIconAsterisk = GetIcon("Asterisk", "\uEA38", "3-ef2110da");
var uiIconErrorBadge = GetIcon("ErrorBadge", "\uEA39", "3-ef2110da");
var uiIconCircleFill = GetIcon("CircleFill", "\uEA3B", "3-ef2110da");
var uiIconRecord2 = GetIcon("Record2", "\uEA3F", "3-ef2110da");
var uiIconAllAppsMirrored = GetIcon("AllAppsMirrored", "\uEA40", "3-ef2110da");
var uiIconBookmarksMirrored = GetIcon("BookmarksMirrored", "\uEA41", "3-ef2110da");
var uiIconBulletedListMirrored = GetIcon("BulletedListMirrored", "\uEA42", "3-ef2110da");
var uiIconCaretHollowMirrored = GetIcon("CaretHollowMirrored", "\uEA45", "3-ef2110da");
var uiIconCaretSolidMirrored = GetIcon("CaretSolidMirrored", "\uEA46", "3-ef2110da");
var uiIconChromeBackMirrored = GetIcon("ChromeBackMirrored", "\uEA47", "3-ef2110da");
var uiIconClosePaneMirrored = GetIcon("ClosePaneMirrored", "\uEA49", "3-ef2110da");
var uiIconDockLeftMirrored = GetIcon("DockLeftMirrored", "\uEA4C", "3-ef2110da");
var uiIconDoubleChevronLeftMedMirrored = GetIcon("DoubleChevronLeftMedMirrored", "\uEA4D", "3-ef2110da");
var uiIconHelpMirrored = GetIcon("HelpMirrored", "\uEA51", "3-ef2110da");
var uiIconImportMirrored = GetIcon("ImportMirrored", "\uEA52", "3-ef2110da");
var uiIconListMirrored = GetIcon("ListMirrored", "\uEA55", "3-ef2110da");
var uiIconMailForwardMirrored = GetIcon("MailForwardMirrored", "\uEA56", "3-ef2110da");
var uiIconMailReplyMirrored = GetIcon("MailReplyMirrored", "\uEA57", "3-ef2110da");
var uiIconMailReplyAllMirrored = GetIcon("MailReplyAllMirrored", "\uEA58", "3-ef2110da");
var uiIconOpenPaneMirrored = GetIcon("OpenPaneMirrored", "\uEA5B", "3-ef2110da");
var uiIconParkingLocationMirrored = GetIcon("ParkingLocationMirrored", "\uEA5E", "3-ef2110da");
var uiIconSendMirrored = GetIcon("SendMirrored", "\uEA63", "3-ef2110da");
var uiIconShowResultsMirrored = GetIcon("ShowResultsMirrored", "\uEA65", "3-ef2110da");
var uiIconThumbnailViewMirrored = GetIcon("ThumbnailViewMirrored", "\uEA67", "3-ef2110da");
var uiIconDevices3 = GetIcon("Devices3", "\uEA6C", "3-ef2110da");
var uiIconLightbulb = GetIcon("Lightbulb", "\uEA80", "3-ef2110da");
var uiIconStatusTriangle = GetIcon("StatusTriangle", "\uEA82", "3-ef2110da");
var uiIconVolumeDisabled = GetIcon("VolumeDisabled", "\uEA85", "3-ef2110da");
var uiIconPuzzle = GetIcon("Puzzle", "\uEA86", "3-ef2110da");
var uiIconEmojiNeutral = GetIcon("EmojiNeutral", "\uEA87", "3-ef2110da");
var uiIconEmojiDisappointed = GetIcon("EmojiDisappointed", "\uEA88", "3-ef2110da");
var uiIconHomeSolid = GetIcon("HomeSolid", "\uEA8A", "3-ef2110da");
var uiIconRinger = GetIcon("Ringer", "\uEA8F", "3-ef2110da");
var uiIconPDF = GetIcon("PDF", "\uEA90", "3-ef2110da");
var uiIconHeartBroken = GetIcon("HeartBroken", "\uEA92", "3-ef2110da");
var uiIconStoreLogo16 = GetIcon("StoreLogo16", "\uEA96", "3-ef2110da");
var uiIconMultiSelectMirrored = GetIcon("MultiSelectMirrored", "\uEA98", "3-ef2110da");
var uiIconBroom = GetIcon("Broom", "\uEA99", "3-ef2110da");
var uiIconCocktails = GetIcon("Cocktails", "\uEA9D", "3-ef2110da");
var uiIconWines = GetIcon("Wines", "\uEABF", "3-ef2110da");
var uiIconArticles = GetIcon("Articles", "\uEAC1", "3-ef2110da");
var uiIconCycling = GetIcon("Cycling", "\uEAC7", "3-ef2110da");
var uiIconDietPlanNotebook = GetIcon("DietPlanNotebook", "\uEAC8", "3-ef2110da");
var uiIconPill = GetIcon("Pill", "\uEACB", "3-ef2110da");
var uiIconExerciseTracker = GetIcon("ExerciseTracker", "\uEACC", "3-ef2110da");
var uiIconHandsFree = GetIcon("HandsFree", "\uEAD0", "3-ef2110da");
var uiIconMedical = GetIcon("Medical", "\uEAD4", "3-ef2110da");
var uiIconRunning = GetIcon("Running", "\uEADA", "3-ef2110da");
var uiIconWeights = GetIcon("Weights", "\uEADB", "3-ef2110da");
var uiIconTrackers = GetIcon("Trackers", "\uEADF", "3-ef2110da");
var uiIconAddNotes = GetIcon("AddNotes", "\uEAE3", "3-ef2110da");
var uiIconAllCurrency = GetIcon("AllCurrency", "\uEAE4", "3-ef2110da");
var uiIconBarChart4 = GetIcon("BarChart4", "\uEAE7", "3-ef2110da");
var uiIconCirclePlus = GetIcon("CirclePlus", "\uEAEE", "3-ef2110da");
var uiIconCoffee = GetIcon("Coffee", "\uEAEF", "3-ef2110da");
var uiIconCotton = GetIcon("Cotton", "\uEAF3", "3-ef2110da");
var uiIconMarket = GetIcon("Market", "\uEAFC", "3-ef2110da");
var uiIconMoney = GetIcon("Money", "\uEAFD", "3-ef2110da");
var uiIconPieDouble = GetIcon("PieDouble", "\uEB04", "3-ef2110da");
var uiIconPieSingle = GetIcon("PieSingle", "\uEB05", "3-ef2110da");
var uiIconRemoveFilter = GetIcon("RemoveFilter", "\uEB08", "3-ef2110da");
var uiIconSavings = GetIcon("Savings", "\uEB0B", "3-ef2110da");
var uiIconSell = GetIcon("Sell", "\uEB0C", "3-ef2110da");
var uiIconStockDown = GetIcon("StockDown", "\uEB0F", "3-ef2110da");
var uiIconStockUp = GetIcon("StockUp", "\uEB11", "3-ef2110da");
var uiIconLamp = GetIcon("Lamp", "\uEB19", "3-ef2110da");
var uiIconSource = GetIcon("Source", "\uEB1B", "3-ef2110da");
var uiIconMSNVideos = GetIcon("MSNVideos", "\uEB1C", "3-ef2110da");
var uiIconCricket = GetIcon("Cricket", "\uEB1E", "3-ef2110da");
var uiIconGolf = GetIcon("Golf", "\uEB1F", "3-ef2110da");
var uiIconBaseball = GetIcon("Baseball", "\uEB20", "3-ef2110da");
var uiIconSoccer = GetIcon("Soccer", "\uEB21", "3-ef2110da");
var uiIconMoreSports = GetIcon("MoreSports", "\uEB22", "3-ef2110da");
var uiIconAutoRacing = GetIcon("AutoRacing", "\uEB24", "3-ef2110da");
var uiIconCollegeHoops = GetIcon("CollegeHoops", "\uEB25", "3-ef2110da");
var uiIconCollegeFootball = GetIcon("CollegeFootball", "\uEB26", "3-ef2110da");
var uiIconProFootball = GetIcon("ProFootball", "\uEB27", "3-ef2110da");
var uiIconProHockey = GetIcon("ProHockey", "\uEB28", "3-ef2110da");
var uiIconRugby = GetIcon("Rugby", "\uEB2D", "3-ef2110da");
var uiIconSubstitutionsIn = GetIcon("SubstitutionsIn", "\uEB31", "3-ef2110da");
var uiIconTennis = GetIcon("Tennis", "\uEB33", "4-aeecd474");
var uiIconArrivals = GetIcon("Arrivals", "\uEB34", "4-aeecd474");
var uiIconDesign = GetIcon("Design", "\uEB3C", "4-aeecd474");
var uiIconWebsite = GetIcon("Website", "\uEB41", "4-aeecd474");
var uiIconDrop = GetIcon("Drop", "\uEB42", "4-aeecd474");
var uiIconSkiResorts = GetIcon("SkiResorts", "\uEB45", "4-aeecd474");
var uiIconSnowflake = GetIcon("Snowflake", "\uEB46", "4-aeecd474");
var uiIconBusSolid = GetIcon("BusSolid", "\uEB47", "4-aeecd474");
var uiIconFerrySolid = GetIcon("FerrySolid", "\uEB48", "4-aeecd474");
var uiIconAirplaneSolid = GetIcon("AirplaneSolid", "\uEB4C", "4-aeecd474");
var uiIconTrainSolid = GetIcon("TrainSolid", "\uEB4D", "4-aeecd474");
var uiIconTicket = GetIcon("Ticket", "\uEB54", "4-aeecd474");
var uiIconDevices4 = GetIcon("Devices4", "\uEB66", "4-aeecd474");
var uiIconAzureLogo = GetIcon("AzureLogo", "\uEB6A", "4-aeecd474");
var uiIconBingLogo = GetIcon("BingLogo", "\uEB6B", "4-aeecd474");
var uiIconMSNLogo = GetIcon("MSNLogo", "\uEB6C", "4-aeecd474");
var uiIconOutlookLogoInverse = GetIcon("OutlookLogoInverse", "\uEB6D", "4-aeecd474");
var uiIconOfficeLogo = GetIcon("OfficeLogo", "\uEB6E", "4-aeecd474");
var uiIconSkypeLogo = GetIcon("SkypeLogo", "\uEB6F", "4-aeecd474");
var uiIconDoor = GetIcon("Door", "\uEB75", "4-aeecd474");
var uiIconEditMirrored = GetIcon("EditMirrored", "\uEB7E", "4-aeecd474");
var uiIconGiftCard = GetIcon("GiftCard", "\uEB8E", "4-aeecd474");
var uiIconDoubleBookmark = GetIcon("DoubleBookmark", "\uEB8F", "4-aeecd474");
var uiIconStatusErrorFull = GetIcon("StatusErrorFull", "\uEB90", "4-aeecd474");
var uiIconCertificate = GetIcon("Certificate", "\uEB95", "4-aeecd474");
var uiIconFastForward = GetIcon("FastForward", "\uEB9D", "4-aeecd474");
var uiIconRewind = GetIcon("Rewind", "\uEB9E", "4-aeecd474");
var uiIconPhoto2 = GetIcon("Photo2", "\uEB9F", "4-aeecd474");
var uiIconOpenSource = GetIcon("OpenSource", "\uEBC2", "4-aeecd474");
var uiIconMovers = GetIcon("Movers", "\uEBCD", "4-aeecd474");
var uiIconCloudDownload = GetIcon("CloudDownload", "\uEBD3", "4-aeecd474");
var uiIconFamily = GetIcon("Family", "\uEBDA", "4-aeecd474");
var uiIconWindDirection = GetIcon("WindDirection", "\uEBE6", "4-aeecd474");
var uiIconBug = GetIcon("Bug", "\uEBE8", "4-aeecd474");
var uiIconSiteScan = GetIcon("SiteScan", "\uEBEC", "4-aeecd474");
var uiIconBrowserScreenShot = GetIcon("BrowserScreenShot", "\uEBED", "4-aeecd474");
var uiIconF12DevTools = GetIcon("F12DevTools", "\uEBEE", "4-aeecd474");
var uiIconCSS = GetIcon("CSS", "\uEBEF", "4-aeecd474");
var uiIconJS = GetIcon("JS", "\uEBF0", "4-aeecd474");
var uiIconDeliveryTruck = GetIcon("DeliveryTruck", "\uEBF4", "4-aeecd474");
var uiIconReminderPerson = GetIcon("ReminderPerson", "\uEBF7", "4-aeecd474");
var uiIconReminderGroup = GetIcon("ReminderGroup", "\uEBF8", "4-aeecd474");
var uiIconTabletMode = GetIcon("TabletMode", "\uEBFC", "4-aeecd474");
var uiIconUmbrella = GetIcon("Umbrella", "\uEC04", "4-aeecd474");
var uiIconNetworkTower = GetIcon("NetworkTower", "\uEC05", "4-aeecd474");
var uiIconCityNext = GetIcon("CityNext", "\uEC06", "4-aeecd474");
var uiIconSection = GetIcon("Section", "\uEC0C", "4-aeecd474");
var uiIconOneNoteLogoInverse = GetIcon("OneNoteLogoInverse", "\uEC0D", "4-aeecd474");
var uiIconToggleFilled = GetIcon("ToggleFilled", "\uEC11", "4-aeecd474");
var uiIconToggleBorder = GetIcon("ToggleBorder", "\uEC12", "4-aeecd474");
var uiIconSliderThumb = GetIcon("SliderThumb", "\uEC13", "4-aeecd474");
var uiIconToggleThumb = GetIcon("ToggleThumb", "\uEC14", "4-aeecd474");
var uiIconDocumentation = GetIcon("Documentation", "\uEC17", "4-aeecd474");
var uiIconBadge = GetIcon("Badge", "\uEC1B", "4-aeecd474");
var uiIconGiftbox = GetIcon("Giftbox", "\uEC1F", "4-aeecd474");
var uiIconVisualStudioLogo = GetIcon("VisualStudioLogo", "\uEC22", "4-aeecd474");
var uiIconExcelLogoInverse = GetIcon("ExcelLogoInverse", "\uEC28", "4-aeecd474");
var uiIconWordLogoInverse = GetIcon("WordLogoInverse", "\uEC29", "4-aeecd474");
var uiIconPowerPointLogoInverse = GetIcon("PowerPointLogoInverse", "\uEC2A", "4-aeecd474");
var uiIconCafe = GetIcon("Cafe", "\uEC32", "4-aeecd474");
var uiIconSpeedHigh = GetIcon("SpeedHigh", "\uEC4A", "4-aeecd474");
var uiIconCommitments = GetIcon("Commitments", "\uEC4D", "4-aeecd474");
var uiIconThisPC = GetIcon("ThisPC", "\uEC4E", "4-aeecd474");
var uiIconMusicNote = GetIcon("MusicNote", "\uEC4F", "4-aeecd474");
var uiIconMicOff = GetIcon("MicOff", "\uEC54", "4-aeecd474");
var uiIconEdgeLogo = GetIcon("EdgeLogo", "\uEC60", "4-aeecd474");
var uiIconCompletedSolid = GetIcon("CompletedSolid", "\uEC61", "4-aeecd474");
var uiIconAlbumRemove = GetIcon("AlbumRemove", "\uEC62", "4-aeecd474");
var uiIconMessageFill = GetIcon("MessageFill", "\uEC70", "4-aeecd474");
var uiIconTabletSelected = GetIcon("TabletSelected", "\uEC74", "4-aeecd474");
var uiIconMobileSelected = GetIcon("MobileSelected", "\uEC75", "4-aeecd474");
var uiIconLaptopSelected = GetIcon("LaptopSelected", "\uEC76", "4-aeecd474");
var uiIconTVMonitorSelected = GetIcon("TVMonitorSelected", "\uEC77", "4-aeecd474");
var uiIconDeveloperTools = GetIcon("DeveloperTools", "\uEC7A", "4-aeecd474");
var uiIconInsertTextBox = GetIcon("InsertTextBox", "\uEC7D", "4-aeecd474");
var uiIconLowerBrightness = GetIcon("LowerBrightness", "\uEC8A", "4-aeecd474");
var uiIconDOM = GetIcon("DOM", "\uEC8D", "4-aeecd474");
var uiIconCloudUpload = GetIcon("CloudUpload", "\uEC8E", "4-aeecd474");
var uiIconScrollUpDown = GetIcon("ScrollUpDown", "\uEC8F", "4-aeecd474");
var uiIconDateTime = GetIcon("DateTime", "\uEC92", "4-aeecd474");
var uiIconEvent = GetIcon("Event", "\uECA3", "4-aeecd474");
var uiIconCake = GetIcon("Cake", "\uECA4", "4-aeecd474");
var uiIconOrg = GetIcon("Org", "\uECA6", "4-aeecd474");
var uiIconPartyLeader = GetIcon("PartyLeader", "\uECA7", "4-aeecd474");
var uiIconDRM = GetIcon("DRM", "\uECA8", "4-aeecd474");
var uiIconCloudAdd = GetIcon("CloudAdd", "\uECA9", "4-aeecd474");
var uiIconAppIconDefault = GetIcon("AppIconDefault", "\uECAA", "4-aeecd474");
var uiIconPhoto2Add = GetIcon("Photo2Add", "\uECAB", "4-aeecd474");
var uiIconPhoto2Remove = GetIcon("Photo2Remove", "\uECAC", "4-aeecd474");
var uiIconPOI = GetIcon("POI", "\uECAF", "4-aeecd474");
var uiIconAddTo = GetIcon("AddTo", "\uECC8", "4-aeecd474");
var uiIconRadioBtnOff = GetIcon("RadioBtnOff", "\uECCA", "4-aeecd474");
var uiIconRadioBtnOn = GetIcon("RadioBtnOn", "\uECCB", "4-aeecd474");
var uiIconExploreContent = GetIcon("ExploreContent", "\uECCD", "4-aeecd474");
var uiIconProduct = GetIcon("Product", "\uECDC", "4-aeecd474");
var uiIconProgressLoopInner = GetIcon("ProgressLoopInner", "\uECDE", "4-aeecd474");
var uiIconProgressLoopOuter = GetIcon("ProgressLoopOuter", "\uECDF", "4-aeecd474");
var uiIconBlocked2 = GetIcon("Blocked2", "\uECE4", "4-aeecd474");
var uiIconFangBody = GetIcon("FangBody", "\uECEB", "4-aeecd474");
var uiIconChatInviteFriend = GetIcon("ChatInviteFriend", "\uECFE", "4-aeecd474");
var uiIconCrown = GetIcon("Crown", "\uED01", "5-f6547654");
var uiIconDiamond = GetIcon("Diamond", "\uED02", "5-f6547654");
var uiIconScaleUp = GetIcon("ScaleUp", "\uED09", "5-f6547654");
var uiIconFeedback = GetIcon("Feedback", "\uED15", "5-f6547654");
var uiIconSharepointLogoInverse = GetIcon("SharepointLogoInverse", "\uED18", "5-f6547654");
var uiIconYammerLogo = GetIcon("YammerLogo", "\uED19", "5-f6547654");
var uiIconHide = GetIcon("Hide", "\uED1A", "5-f6547654");
var uiIconUneditable = GetIcon("Uneditable", "\uED1D", "5-f6547654");
var uiIconReturnToSession = GetIcon("ReturnToSession", "\uED24", "5-f6547654");
var uiIconOpenFolderHorizontal = GetIcon("OpenFolderHorizontal", "\uED25", "5-f6547654");
var uiIconCalendarMirrored = GetIcon("CalendarMirrored", "\uED28", "5-f6547654");
var uiIconSwayLogoInverse = GetIcon("SwayLogoInverse", "\uED29", "5-f6547654");
var uiIconOutOfOffice = GetIcon("OutOfOffice", "\uED34", "5-f6547654");
var uiIconTrophy = GetIcon("Trophy", "\uED3F", "5-f6547654");
var uiIconReopenPages = GetIcon("ReopenPages", "\uED50", "5-f6547654");
var uiIconEmojiTabSymbols = GetIcon("EmojiTabSymbols", "\uED58", "5-f6547654");
var uiIconAADLogo = GetIcon("AADLogo", "\uED68", "5-f6547654");
var uiIconAccessLogo = GetIcon("AccessLogo", "\uED69", "5-f6547654");
var uiIconAdminALogoInverse32 = GetIcon("AdminALogoInverse32", "\uED6A", "5-f6547654");
var uiIconAdminCLogoInverse32 = GetIcon("AdminCLogoInverse32", "\uED6B", "5-f6547654");
var uiIconAdminDLogoInverse32 = GetIcon("AdminDLogoInverse32", "\uED6C", "5-f6547654");
var uiIconAdminELogoInverse32 = GetIcon("AdminELogoInverse32", "\uED6D", "5-f6547654");
var uiIconAdminLLogoInverse32 = GetIcon("AdminLLogoInverse32", "\uED6E", "5-f6547654");
var uiIconAdminMLogoInverse32 = GetIcon("AdminMLogoInverse32", "\uED6F", "5-f6547654");
var uiIconAdminOLogoInverse32 = GetIcon("AdminOLogoInverse32", "\uED70", "5-f6547654");
var uiIconAdminPLogoInverse32 = GetIcon("AdminPLogoInverse32", "\uED71", "5-f6547654");
var uiIconAdminSLogoInverse32 = GetIcon("AdminSLogoInverse32", "\uED72", "5-f6547654");
var uiIconAdminYLogoInverse32 = GetIcon("AdminYLogoInverse32", "\uED73", "5-f6547654");
var uiIconDelveLogoInverse = GetIcon("DelveLogoInverse", "\uED76", "5-f6547654");
var uiIconExchangeLogoInverse = GetIcon("ExchangeLogoInverse", "\uED78", "5-f6547654");
var uiIconLyncLogo = GetIcon("LyncLogo", "\uED79", "5-f6547654");
var uiIconOfficeVideoLogoInverse = GetIcon("OfficeVideoLogoInverse", "\uED7A", "5-f6547654");
var uiIconSocialListeningLogo = GetIcon("SocialListeningLogo", "\uED7C", "5-f6547654");
var uiIconVisioLogoInverse = GetIcon("VisioLogoInverse", "\uED7D", "5-f6547654");
var uiIconBalloons = GetIcon("Balloons", "\uED7E", "5-f6547654");
var uiIconCat = GetIcon("Cat", "\uED7F", "5-f6547654");
var uiIconMailAlert = GetIcon("MailAlert", "\uED80", "5-f6547654");
var uiIconMailCheck = GetIcon("MailCheck", "\uED81", "5-f6547654");
var uiIconMailLowImportance = GetIcon("MailLowImportance", "\uED82", "5-f6547654");
var uiIconMailPause = GetIcon("MailPause", "\uED83", "5-f6547654");
var uiIconMailRepeat = GetIcon("MailRepeat", "\uED84", "5-f6547654");
var uiIconSecurityGroup = GetIcon("SecurityGroup", "\uED85", "5-f6547654");
var uiIconTable = GetIcon("Table", "\uED86", "5-f6547654");
var uiIconVoicemailForward = GetIcon("VoicemailForward", "\uED87", "5-f6547654");
var uiIconVoicemailReply = GetIcon("VoicemailReply", "\uED88", "5-f6547654");
var uiIconWaffle = GetIcon("Waffle", "\uED89", "5-f6547654");
var uiIconRemoveEvent = GetIcon("RemoveEvent", "\uED8A", "5-f6547654");
var uiIconEventInfo = GetIcon("EventInfo", "\uED8B", "5-f6547654");
var uiIconForwardEvent = GetIcon("ForwardEvent", "\uED8C", "5-f6547654");
var uiIconWipePhone = GetIcon("WipePhone", "\uED8D", "5-f6547654");
var uiIconAddOnlineMeeting = GetIcon("AddOnlineMeeting", "\uED8E", "5-f6547654");
var uiIconJoinOnlineMeeting = GetIcon("JoinOnlineMeeting", "\uED8F", "5-f6547654");
var uiIconRemoveLink = GetIcon("RemoveLink", "\uED90", "5-f6547654");
var uiIconPeopleBlock = GetIcon("PeopleBlock", "\uED91", "5-f6547654");
var uiIconPeopleRepeat = GetIcon("PeopleRepeat", "\uED92", "5-f6547654");
var uiIconPeopleAlert = GetIcon("PeopleAlert", "\uED93", "5-f6547654");
var uiIconPeoplePause = GetIcon("PeoplePause", "\uED94", "5-f6547654");
var uiIconTransferCall = GetIcon("TransferCall", "\uED95", "5-f6547654");
var uiIconAddPhone = GetIcon("AddPhone", "\uED96", "5-f6547654");
var uiIconUnknownCall = GetIcon("UnknownCall", "\uED97", "5-f6547654");
var uiIconNoteReply = GetIcon("NoteReply", "\uED98", "5-f6547654");
var uiIconNoteForward = GetIcon("NoteForward", "\uED99", "5-f6547654");
var uiIconNotePinned = GetIcon("NotePinned", "\uED9A", "5-f6547654");
var uiIconRemoveOccurrence = GetIcon("RemoveOccurrence", "\uED9B", "5-f6547654");
var uiIconTimeline = GetIcon("Timeline", "\uED9C", "5-f6547654");
var uiIconEditNote = GetIcon("EditNote", "\uED9D", "5-f6547654");
var uiIconCircleHalfFull = GetIcon("CircleHalfFull", "\uED9E", "5-f6547654");
var uiIconRoom = GetIcon("Room", "\uED9F", "5-f6547654");
var uiIconUnsubscribe = GetIcon("Unsubscribe", "\uEDA0", "5-f6547654");
var uiIconSubscribe = GetIcon("Subscribe", "\uEDA1", "5-f6547654");
var uiIconHardDrive = GetIcon("HardDrive", "\uEDA2", "5-f6547654");
var uiIconRecurringTask = GetIcon("RecurringTask", "\uEDB2", "5-f6547654");
var uiIconTaskManager = GetIcon("TaskManager", "\uEDB7", "5-f6547654");
var uiIconTaskManagerMirrored = GetIcon("TaskManagerMirrored", "\uEDB8", "5-f6547654");
var uiIconCombine = GetIcon("Combine", "\uEDBB", "5-f6547654");
var uiIconSplit = GetIcon("Split", "\uEDBC", "5-f6547654");
var uiIconDoubleChevronUp = GetIcon("DoubleChevronUp", "\uEDBD", "5-f6547654");
var uiIconDoubleChevronLeft = GetIcon("DoubleChevronLeft", "\uEDBE", "5-f6547654");
var uiIconDoubleChevronRight = GetIcon("DoubleChevronRight", "\uEDBF", "5-f6547654");
var uiIconTextBox = GetIcon("TextBox", "\uEDC2", "5-f6547654");
var uiIconTextField = GetIcon("TextField", "\uEDC3", "5-f6547654");
var uiIconNumberField = GetIcon("NumberField", "\uEDC4", "5-f6547654");
var uiIconDropdown = GetIcon("Dropdown", "\uEDC5", "5-f6547654");
var uiIconBookingsLogo = GetIcon("BookingsLogo", "\uEDC7", "5-f6547654");
var uiIconClassNotebookLogoInverse = GetIcon("ClassNotebookLogoInverse", "\uEDC8", "5-f6547654");
var uiIconDelveAnalyticsLogo = GetIcon("DelveAnalyticsLogo", "\uEDCA", "5-f6547654");
var uiIconDocsLogoInverse = GetIcon("DocsLogoInverse", "\uEDCB", "5-f6547654");
var uiIconDynamics365Logo = GetIcon("Dynamics365Logo", "\uEDCC", "5-f6547654");
var uiIconDynamicSMBLogo = GetIcon("DynamicSMBLogo", "\uEDCD", "5-f6547654");
var uiIconOfficeAssistantLogo = GetIcon("OfficeAssistantLogo", "\uEDCE", "5-f6547654");
var uiIconOfficeStoreLogo = GetIcon("OfficeStoreLogo", "\uEDCF", "5-f6547654");
var uiIconOneNoteEduLogoInverse = GetIcon("OneNoteEduLogoInverse", "\uEDD0", "5-f6547654");
var uiIconPlannerLogo = GetIcon("PlannerLogo", "\uEDD1", "5-f6547654");
var uiIconPowerApps = GetIcon("PowerApps", "\uEDD2", "5-f6547654");
var uiIconSuitcase = GetIcon("Suitcase", "\uEDD3", "5-f6547654");
var uiIconProjectLogoInverse = GetIcon("ProjectLogoInverse", "\uEDD4", "5-f6547654");
var uiIconCaretLeft8 = GetIcon("CaretLeft8", "\uEDD5", "5-f6547654");
var uiIconCaretRight8 = GetIcon("CaretRight8", "\uEDD6", "5-f6547654");
var uiIconCaretUp8 = GetIcon("CaretUp8", "\uEDD7", "5-f6547654");
var uiIconCaretDown8 = GetIcon("CaretDown8", "\uEDD8", "5-f6547654");
var uiIconCaretLeftSolid8 = GetIcon("CaretLeftSolid8", "\uEDD9", "6-3954c770");
var uiIconCaretRightSolid8 = GetIcon("CaretRightSolid8", "\uEDDA", "6-3954c770");
var uiIconCaretUpSolid8 = GetIcon("CaretUpSolid8", "\uEDDB", "6-3954c770");
var uiIconCaretDownSolid8 = GetIcon("CaretDownSolid8", "\uEDDC", "6-3954c770");
var uiIconClearFormatting = GetIcon("ClearFormatting", "\uEDDD", "6-3954c770");
var uiIconSuperscript = GetIcon("Superscript", "\uEDDE", "6-3954c770");
var uiIconSubscript = GetIcon("Subscript", "\uEDDF", "6-3954c770");
var uiIconStrikethrough = GetIcon("Strikethrough", "\uEDE0", "6-3954c770");
var uiIconExport = GetIcon("Export", "\uEDE1", "6-3954c770");
var uiIconExportMirrored = GetIcon("ExportMirrored", "\uEDE2", "6-3954c770");
var uiIconSingleBookmark = GetIcon("SingleBookmark", "\uEDFF", "6-3954c770");
var uiIconSingleBookmarkSolid = GetIcon("SingleBookmarkSolid", "\uEE00", "6-3954c770");
var uiIconDoubleChevronDown = GetIcon("DoubleChevronDown", "\uEE04", "6-3954c770");
var uiIconFollowUser = GetIcon("FollowUser", "\uEE05", "6-3954c770");
var uiIconReplyAll = GetIcon("ReplyAll", "\uEE0A", "6-3954c770");
var uiIconWorkforceManagement = GetIcon("WorkforceManagement", "\uEE0F", "6-3954c770");
var uiIconRecruitmentManagement = GetIcon("RecruitmentManagement", "\uEE12", "6-3954c770");
var uiIconQuestionnaire = GetIcon("Questionnaire", "\uEE19", "6-3954c770");
var uiIconManagerSelfService = GetIcon("ManagerSelfService", "\uEE23", "6-3954c770");
var uiIconReplyMirrored = GetIcon("ReplyMirrored", "\uEE35", "6-3954c770");
var uiIconReplyAllMirrored = GetIcon("ReplyAllMirrored", "\uEE36", "6-3954c770");
var uiIconMedal = GetIcon("Medal", "\uEE38", "6-3954c770");
var uiIconAddGroup = GetIcon("AddGroup", "\uEE3D", "6-3954c770");
var uiIconQuestionnaireMirrored = GetIcon("QuestionnaireMirrored", "\uEE4B", "6-3954c770");
var uiIconTemporaryUser = GetIcon("TemporaryUser", "\uEE58", "6-3954c770");
var uiIconCaretSolid16 = GetIcon("CaretSolid16", "\uEE62", "6-3954c770");
var uiIconGroupedDescending = GetIcon("GroupedDescending", "\uEE66", "6-3954c770");
var uiIconGroupedAscending = GetIcon("GroupedAscending", "\uEE67", "6-3954c770");
var uiIconAwayStatus = GetIcon("AwayStatus", "\uEE6A", "6-3954c770");
var uiIconMyMoviesTV = GetIcon("MyMoviesTV", "\uEE6C", "6-3954c770");
var uiIconGenericScan = GetIcon("GenericScan", "\uEE6F", "6-3954c770");
var uiIconAustralianRules = GetIcon("AustralianRules", "\uEE70", "6-3954c770");
var uiIconWifiEthernet = GetIcon("WifiEthernet", "\uEE77", "6-3954c770");
var uiIconTrackersMirrored = GetIcon("TrackersMirrored", "\uEE92", "6-3954c770");
var uiIconDateTimeMirrored = GetIcon("DateTimeMirrored", "\uEE93", "6-3954c770");
var uiIconStopSolid = GetIcon("StopSolid", "\uEE95", "6-3954c770");
var uiIconDoubleChevronUp12 = GetIcon("DoubleChevronUp12", "\uEE96", "6-3954c770");
var uiIconDoubleChevronDown12 = GetIcon("DoubleChevronDown12", "\uEE97", "6-3954c770");
var uiIconDoubleChevronLeft12 = GetIcon("DoubleChevronLeft12", "\uEE98", "6-3954c770");
var uiIconDoubleChevronRight12 = GetIcon("DoubleChevronRight12", "\uEE99", "6-3954c770");
var uiIconCalendarAgenda = GetIcon("CalendarAgenda", "\uEE9A", "6-3954c770");
var uiIconAddEvent = GetIcon("AddEvent", "\uEEB5", "6-3954c770");
var uiIconAssetLibrary = GetIcon("AssetLibrary", "\uEEB6", "6-3954c770");
var uiIconDataConnectionLibrary = GetIcon("DataConnectionLibrary", "\uEEB7", "6-3954c770");
var uiIconDocLibrary = GetIcon("DocLibrary", "\uEEB8", "6-3954c770");
var uiIconFormLibrary = GetIcon("FormLibrary", "\uEEB9", "6-3954c770");
var uiIconFormLibraryMirrored = GetIcon("FormLibraryMirrored", "\uEEBA", "6-3954c770");
var uiIconReportLibrary = GetIcon("ReportLibrary", "\uEEBB", "6-3954c770");
var uiIconReportLibraryMirrored = GetIcon("ReportLibraryMirrored", "\uEEBC", "6-3954c770");
var uiIconContactCard = GetIcon("ContactCard", "\uEEBD", "6-3954c770");
var uiIconCustomList = GetIcon("CustomList", "\uEEBE", "6-3954c770");
var uiIconCustomListMirrored = GetIcon("CustomListMirrored", "\uEEBF", "6-3954c770");
var uiIconIssueTracking = GetIcon("IssueTracking", "\uEEC0", "6-3954c770");
var uiIconIssueTrackingMirrored = GetIcon("IssueTrackingMirrored", "\uEEC1", "6-3954c770");
var uiIconPictureLibrary = GetIcon("PictureLibrary", "\uEEC2", "6-3954c770");
var uiIconOfficeAddinsLogo = GetIcon("OfficeAddinsLogo", "\uEEC7", "6-3954c770");
var uiIconOfflineOneDriveParachute = GetIcon("OfflineOneDriveParachute", "\uEEC8", "6-3954c770");
var uiIconOfflineOneDriveParachuteDisabled = GetIcon("OfflineOneDriveParachuteDisabled", "\uEEC9", "6-3954c770");
var uiIconTriangleSolidUp12 = GetIcon("TriangleSolidUp12", "\uEECC", "6-3954c770");
var uiIconTriangleSolidDown12 = GetIcon("TriangleSolidDown12", "\uEECD", "6-3954c770");
var uiIconTriangleSolidLeft12 = GetIcon("TriangleSolidLeft12", "\uEECE", "6-3954c770");
var uiIconTriangleSolidRight12 = GetIcon("TriangleSolidRight12", "\uEECF", "6-3954c770");
var uiIconTriangleUp12 = GetIcon("TriangleUp12", "\uEED0", "6-3954c770");
var uiIconTriangleDown12 = GetIcon("TriangleDown12", "\uEED1", "6-3954c770");
var uiIconTriangleLeft12 = GetIcon("TriangleLeft12", "\uEED2", "6-3954c770");
var uiIconTriangleRight12 = GetIcon("TriangleRight12", "\uEED3", "6-3954c770");
var uiIconArrowUpRight8 = GetIcon("ArrowUpRight8", "\uEED4", "6-3954c770");
var uiIconArrowDownRight8 = GetIcon("ArrowDownRight8", "\uEED5", "6-3954c770");
var uiIconDocumentSet = GetIcon("DocumentSet", "\uEED6", "6-3954c770");
var uiIconDelveAnalytics = GetIcon("DelveAnalytics", "\uEEEE", "6-3954c770");
var uiIconArrowUpRightMirrored8 = GetIcon("ArrowUpRightMirrored8", "\uEEEF", "6-3954c770");
var uiIconArrowDownRightMirrored8 = GetIcon("ArrowDownRightMirrored8", "\uEEF0", "6-3954c770");
var uiIconCompanyDirectory = GetIcon("CompanyDirectory", "\uEF0D", "6-3954c770");
var uiIconCompanyDirectoryMirrored = GetIcon("CompanyDirectoryMirrored", "\uEF2B", "6-3954c770");
var uiIconOneDriveAdd = GetIcon("OneDriveAdd", "\uEF32", "6-3954c770");
var uiIconProfileSearch = GetIcon("ProfileSearch", "\uEF35", "6-3954c770");
var uiIconHeader2 = GetIcon("Header2", "\uEF36", "6-3954c770");
var uiIconHeader3 = GetIcon("Header3", "\uEF37", "6-3954c770");
var uiIconHeader4 = GetIcon("Header4", "\uEF38", "6-3954c770");
var uiIconEyedropper = GetIcon("Eyedropper", "\uEF3C", "6-3954c770");
var uiIconMarketDown = GetIcon("MarketDown", "\uEF42", "6-3954c770");
var uiIconCalendarWorkWeek = GetIcon("CalendarWorkWeek", "\uEF51", "6-3954c770");
var uiIconSidePanel = GetIcon("SidePanel", "\uEF52", "6-3954c770");
var uiIconGlobeFavorite = GetIcon("GlobeFavorite", "\uEF53", "6-3954c770");
var uiIconCaretTopLeftSolid8 = GetIcon("CaretTopLeftSolid8", "\uEF54", "6-3954c770");
var uiIconCaretTopRightSolid8 = GetIcon("CaretTopRightSolid8", "\uEF55", "6-3954c770");
var uiIconViewAll2 = GetIcon("ViewAll2", "\uEF56", "6-3954c770");
var uiIconDocumentReply = GetIcon("DocumentReply", "\uEF57", "6-3954c770");
var uiIconPlayerSettings = GetIcon("PlayerSettings", "\uEF58", "6-3954c770");
var uiIconReceiptForward = GetIcon("ReceiptForward", "\uEF59", "6-3954c770");
var uiIconReceiptReply = GetIcon("ReceiptReply", "\uEF5A", "6-3954c770");
var uiIconReceiptCheck = GetIcon("ReceiptCheck", "\uEF5B", "6-3954c770");
var uiIconFax = GetIcon("Fax", "\uEF5C", "6-3954c770");
var uiIconRecurringEvent = GetIcon("RecurringEvent", "\uEF5D", "6-3954c770");
var uiIconReplyAlt = GetIcon("ReplyAlt", "\uEF5E", "6-3954c770");
var uiIconReplyAllAlt = GetIcon("ReplyAllAlt", "\uEF5F", "6-3954c770");
var uiIconEditStyle = GetIcon("EditStyle", "\uEF60", "6-3954c770");
var uiIconEditMail = GetIcon("EditMail", "\uEF61", "6-3954c770");
var uiIconLifesaver = GetIcon("Lifesaver", "\uEF62", "6-3954c770");
var uiIconLifesaverLock = GetIcon("LifesaverLock", "\uEF63", "6-3954c770");
var uiIconInboxCheck = GetIcon("InboxCheck", "\uEF64", "7-02107cf8");
var uiIconFolderSearch = GetIcon("FolderSearch", "\uEF65", "7-02107cf8");
var uiIconCollapseMenu = GetIcon("CollapseMenu", "\uEF66", "7-02107cf8");
var uiIconExpandMenu = GetIcon("ExpandMenu", "\uEF67", "7-02107cf8");
var uiIconBoards = GetIcon("Boards", "\uEF68", "7-02107cf8");
var uiIconSunAdd = GetIcon("SunAdd", "\uEF69", "7-02107cf8");
var uiIconSunQuestionMark = GetIcon("SunQuestionMark", "\uEF6A", "7-02107cf8");
var uiIconLandscapeOrientation = GetIcon("LandscapeOrientation", "\uEF6B", "7-02107cf8");
var uiIconDocumentSearch = GetIcon("DocumentSearch", "\uEF6C", "7-02107cf8");
var uiIconPublicCalendar = GetIcon("PublicCalendar", "\uEF6D", "7-02107cf8");
var uiIconPublicContactCard = GetIcon("PublicContactCard", "\uEF6E", "7-02107cf8");
var uiIconPublicEmail = GetIcon("PublicEmail", "\uEF6F", "7-02107cf8");
var uiIconPublicFolder = GetIcon("PublicFolder", "\uEF70", "7-02107cf8");
var uiIconWordDocument = GetIcon("WordDocument", "\uEF71", "7-02107cf8");
var uiIconPowerPointDocument = GetIcon("PowerPointDocument", "\uEF72", "7-02107cf8");
var uiIconExcelDocument = GetIcon("ExcelDocument", "\uEF73", "7-02107cf8");
var uiIconGroupedList = GetIcon("GroupedList", "\uEF74", "7-02107cf8");
var uiIconClassroomLogo = GetIcon("ClassroomLogo", "\uEF75", "7-02107cf8");
var uiIconSections = GetIcon("Sections", "\uEF76", "7-02107cf8");
var uiIconEditPhoto = GetIcon("EditPhoto", "\uEF77", "7-02107cf8");
var uiIconStarburst = GetIcon("Starburst", "\uEF78", "7-02107cf8");
var uiIconShareiOS = GetIcon("ShareiOS", "\uEF79", "7-02107cf8");
var uiIconAirTickets = GetIcon("AirTickets", "\uEF7A", "7-02107cf8");
var uiIconPencilReply = GetIcon("PencilReply", "\uEF7B", "7-02107cf8");
var uiIconTiles2 = GetIcon("Tiles2", "\uEF7C", "7-02107cf8");
var uiIconSkypeCircleCheck = GetIcon("SkypeCircleCheck", "\uEF7D", "7-02107cf8");
var uiIconSkypeCircleClock = GetIcon("SkypeCircleClock", "\uEF7E", "7-02107cf8");
var uiIconSkypeCircleMinus = GetIcon("SkypeCircleMinus", "\uEF7F", "7-02107cf8");
var uiIconSkypeMessage = GetIcon("SkypeMessage", "\uEF83", "7-02107cf8");
var uiIconClosedCaption = GetIcon("ClosedCaption", "\uEF84", "7-02107cf8");
var uiIconATPLogo = GetIcon("ATPLogo", "\uEF85", "7-02107cf8");
var uiIconOfficeFormsLogoInverse = GetIcon("OfficeFormsLogoInverse", "\uEF86", "7-02107cf8");
var uiIconRecycleBin = GetIcon("RecycleBin", "\uEF87", "7-02107cf8");
var uiIconEmptyRecycleBin = GetIcon("EmptyRecycleBin", "\uEF88", "7-02107cf8");
var uiIconHide2 = GetIcon("Hide2", "\uEF89", "7-02107cf8");
var uiIconBreadcrumb = GetIcon("Breadcrumb", "\uEF8C", "7-02107cf8");
var uiIconBirthdayCake = GetIcon("BirthdayCake", "\uEF8D", "7-02107cf8");
var uiIconTimeEntry = GetIcon("TimeEntry", "\uEF95", "7-02107cf8");
var uiIconPageEdit = GetIcon("PageEdit", "\uEFB6", "7-02107cf8");
var uiIconPageRemove = GetIcon("PageRemove", "\uEFBA", "7-02107cf8");
var uiIconDatabase = GetIcon("Database", "\uEFC7", "7-02107cf8");
var uiIconEditContact = GetIcon("EditContact", "\uEFD3", "7-02107cf8");
var uiIconConnectContacts = GetIcon("ConnectContacts", "\uEFD4", "7-02107cf8");
var uiIconActivateOrders = GetIcon("ActivateOrders", "\uEFE0", "7-02107cf8");
var uiIconDeactivateOrders = GetIcon("DeactivateOrders", "\uEFE1", "7-02107cf8");
var uiIconDocumentManagement = GetIcon("DocumentManagement", "\uEFFC", "7-02107cf8");
var uiIconCRMReport = GetIcon("CRMReport", "\uEFFE", "7-02107cf8");
var uiIconZipFolder = GetIcon("ZipFolder", "\uF012", "7-02107cf8");
var uiIconSurveyQuestions = GetIcon("SurveyQuestions", "\uF01B", "7-02107cf8");
var uiIconTextDocument = GetIcon("TextDocument", "\uF029", "7-02107cf8");
var uiIconTextDocumentShared = GetIcon("TextDocumentShared", "\uF02B", "7-02107cf8");
var uiIconPageCheckedOut = GetIcon("PageCheckedOut", "\uF02C", "7-02107cf8");
var uiIconSaveAndClose = GetIcon("SaveAndClose", "\uF038", "7-02107cf8");
var uiIconScript = GetIcon("Script", "\uF03A", "7-02107cf8");
var uiIconArchive = GetIcon("Archive", "\uF03F", "7-02107cf8");
var uiIconActivityFeed = GetIcon("ActivityFeed", "\uF056", "7-02107cf8");
var uiIconEventDate = GetIcon("EventDate", "\uF059", "7-02107cf8");
var uiIconArrowUpRight = GetIcon("ArrowUpRight", "\uF069", "7-02107cf8");
var uiIconCaretRight = GetIcon("CaretRight", "\uF06B", "7-02107cf8");
var uiIconSetAction = GetIcon("SetAction", "\uF071", "7-02107cf8");
var uiIconCaretSolidLeft = GetIcon("CaretSolidLeft", "\uF08D", "7-02107cf8");
var uiIconCaretSolidDown = GetIcon("CaretSolidDown", "\uF08E", "7-02107cf8");
var uiIconCaretSolidRight = GetIcon("CaretSolidRight", "\uF08F", "7-02107cf8");
var uiIconCaretSolidUp = GetIcon("CaretSolidUp", "\uF090", "7-02107cf8");
var uiIconPowerAppsLogo = GetIcon("PowerAppsLogo", "\uF091", "7-02107cf8");
var uiIconPowerApps2Logo = GetIcon("PowerApps2Logo", "\uF092", "7-02107cf8");
var uiIconSearchIssue = GetIcon("SearchIssue", "\uF09A", "7-02107cf8");
var uiIconSearchIssueMirrored = GetIcon("SearchIssueMirrored", "\uF09B", "7-02107cf8");
var uiIconFabricAssetLibrary = GetIcon("FabricAssetLibrary", "\uF09C", "7-02107cf8");
var uiIconFabricDataConnectionLibrary = GetIcon("FabricDataConnectionLibrary", "\uF09D", "7-02107cf8");
var uiIconFabricDocLibrary = GetIcon("FabricDocLibrary", "\uF09E", "7-02107cf8");
var uiIconFabricFormLibrary = GetIcon("FabricFormLibrary", "\uF09F", "7-02107cf8");
var uiIconFabricFormLibraryMirrored = GetIcon("FabricFormLibraryMirrored", "\uF0A0", "7-02107cf8");
var uiIconFabricReportLibrary = GetIcon("FabricReportLibrary", "\uF0A1", "7-02107cf8");
var uiIconFabricReportLibraryMirrored = GetIcon("FabricReportLibraryMirrored", "\uF0A2", "7-02107cf8");
var uiIconFabricPublicFolder = GetIcon("FabricPublicFolder", "\uF0A3", "7-02107cf8");
var uiIconFabricFolderSearch = GetIcon("FabricFolderSearch", "\uF0A4", "7-02107cf8");
var uiIconFabricMovetoFolder = GetIcon("FabricMovetoFolder", "\uF0A5", "7-02107cf8");
var uiIconFabricUnsyncFolder = GetIcon("FabricUnsyncFolder", "\uF0A6", "7-02107cf8");
var uiIconFabricSyncFolder = GetIcon("FabricSyncFolder", "\uF0A7", "7-02107cf8");
var uiIconFabricOpenFolderHorizontal = GetIcon("FabricOpenFolderHorizontal", "\uF0A8", "7-02107cf8");
var uiIconFabricFolder = GetIcon("FabricFolder", "\uF0A9", "7-02107cf8");
var uiIconFabricFolderFill = GetIcon("FabricFolderFill", "\uF0AA", "7-02107cf8");
var uiIconFabricNewFolder = GetIcon("FabricNewFolder", "\uF0AB", "7-02107cf8");
var uiIconFabricPictureLibrary = GetIcon("FabricPictureLibrary", "\uF0AC", "7-02107cf8");
var uiIconAddFavorite = GetIcon("AddFavorite", "\uF0C8", "7-02107cf8");
var uiIconAddFavoriteFill = GetIcon("AddFavoriteFill", "\uF0C9", "7-02107cf8");
var uiIconBufferTimeBefore = GetIcon("BufferTimeBefore", "\uF0CF", "7-02107cf8");
var uiIconBufferTimeAfter = GetIcon("BufferTimeAfter", "\uF0D0", "7-02107cf8");
var uiIconBufferTimeBoth = GetIcon("BufferTimeBoth", "\uF0D1", "7-02107cf8");
var uiIconCannedChat = GetIcon("CannedChat", "\uF0F2", "7-02107cf8");
var uiIconSkypeForBusinessLogo = GetIcon("SkypeForBusinessLogo", "\uF0FC", "7-02107cf8");
var uiIconPageCheckedin = GetIcon("PageCheckedin", "\uF104", "7-02107cf8");
var uiIconReadOutLoud = GetIcon("ReadOutLoud", "\uF112", "7-02107cf8");
var uiIconCaretBottomLeftSolid8 = GetIcon("CaretBottomLeftSolid8", "\uF121", "7-02107cf8");
var uiIconCaretBottomRightSolid8 = GetIcon("CaretBottomRightSolid8", "\uF122", "7-02107cf8");
var uiIconFolderHorizontal = GetIcon("FolderHorizontal", "\uF12B", "7-02107cf8");
var uiIconMicrosoftStaffhubLogo = GetIcon("MicrosoftStaffhubLogo", "\uF130", "7-02107cf8");
var uiIconGiftboxOpen = GetIcon("GiftboxOpen", "\uF133", "7-02107cf8");
var uiIconStatusCircleOuter = GetIcon("StatusCircleOuter", "\uF136", "7-02107cf8");
var uiIconStatusCircleInner = GetIcon("StatusCircleInner", "\uF137", "8-645fa64e");
var uiIconStatusCircleRing = GetIcon("StatusCircleRing", "\uF138", "8-645fa64e");
var uiIconStatusTriangleOuter = GetIcon("StatusTriangleOuter", "\uF139", "8-645fa64e");
var uiIconStatusTriangleInner = GetIcon("StatusTriangleInner", "\uF13A", "8-645fa64e");
var uiIconStatusTriangleExclamation = GetIcon("StatusTriangleExclamation", "\uF13B", "8-645fa64e");
var uiIconStatusCircleExclamation = GetIcon("StatusCircleExclamation", "\uF13C", "8-645fa64e");
var uiIconStatusCircleErrorX = GetIcon("StatusCircleErrorX", "\uF13D", "8-645fa64e");
var uiIconStatusCircleInfo = GetIcon("StatusCircleInfo", "\uF13F", "8-645fa64e");
var uiIconStatusCircleBlock2 = GetIcon("StatusCircleBlock2", "\uF141", "8-645fa64e");
var uiIconStatusCircleQuestionMark = GetIcon("StatusCircleQuestionMark", "\uF142", "8-645fa64e");
var uiIconToll = GetIcon("Toll", "\uF160", "8-645fa64e");
var uiIconExploreContentSingle = GetIcon("ExploreContentSingle", "\uF164", "8-645fa64e");
var uiIconCollapseContent = GetIcon("CollapseContent", "\uF165", "8-645fa64e");
var uiIconCollapseContentSingle = GetIcon("CollapseContentSingle", "\uF166", "8-645fa64e");
var uiIconInfoSolid = GetIcon("InfoSolid", "\uF167", "8-645fa64e");
var uiIconProgressRingDots = GetIcon("ProgressRingDots", "\uF16A", "8-645fa64e");
var uiIconCaloriesAdd = GetIcon("CaloriesAdd", "\uF172", "8-645fa64e");
var uiIconBranchFork = GetIcon("BranchFork", "\uF173", "8-645fa64e");
var uiIconMobileReport = GetIcon("MobileReport", "\uF18A", "8-645fa64e");
var uiIconHardDriveGroup = GetIcon("HardDriveGroup", "\uF18F", "8-645fa64e");
var uiIconFastMode = GetIcon("FastMode", "\uF19A", "8-645fa64e");
var uiIconToggleOn = GetIcon("ToggleOn", "\uF19E", "8-645fa64e");
var uiIconToggleOff = GetIcon("ToggleOff", "\uF19F", "8-645fa64e");
var uiIconTrophy2 = GetIcon("Trophy2", "\uF1AE", "8-645fa64e");
var uiIconBucketColor = GetIcon("BucketColor", "\uF1B6", "8-645fa64e");
var uiIconBucketColorFill = GetIcon("BucketColorFill", "\uF1B7", "8-645fa64e");
var uiIconTaskboard = GetIcon("Taskboard", "\uF1C2", "8-645fa64e");
var uiIconSingleColumn = GetIcon("SingleColumn", "\uF1D3", "8-645fa64e");
var uiIconDoubleColumn = GetIcon("DoubleColumn", "\uF1D4", "8-645fa64e");
var uiIconTripleColumn = GetIcon("TripleColumn", "\uF1D5", "8-645fa64e");
var uiIconColumnLeftTwoThirds = GetIcon("ColumnLeftTwoThirds", "\uF1D6", "8-645fa64e");
var uiIconColumnRightTwoThirds = GetIcon("ColumnRightTwoThirds", "\uF1D7", "8-645fa64e");
var uiIconAccessLogoFill = GetIcon("AccessLogoFill", "\uF1DB", "8-645fa64e");
var uiIconAnalyticsLogo = GetIcon("AnalyticsLogo", "\uF1DE", "8-645fa64e");
var uiIconAnalyticsQuery = GetIcon("AnalyticsQuery", "\uF1DF", "8-645fa64e");
var uiIconNewAnalyticsQuery = GetIcon("NewAnalyticsQuery", "\uF1E0", "8-645fa64e");
var uiIconAnalyticsReport = GetIcon("AnalyticsReport", "\uF1E1", "8-645fa64e");
var uiIconWordLogo = GetIcon("WordLogo", "\uF1E3", "8-645fa64e");
var uiIconWordLogoFill = GetIcon("WordLogoFill", "\uF1E4", "8-645fa64e");
var uiIconExcelLogo = GetIcon("ExcelLogo", "\uF1E5", "8-645fa64e");
var uiIconExcelLogoFill = GetIcon("ExcelLogoFill", "\uF1E6", "8-645fa64e");
var uiIconOneNoteLogo = GetIcon("OneNoteLogo", "\uF1E7", "8-645fa64e");
var uiIconOneNoteLogoFill = GetIcon("OneNoteLogoFill", "\uF1E8", "8-645fa64e");
var uiIconOutlookLogo = GetIcon("OutlookLogo", "\uF1E9", "8-645fa64e");
var uiIconOutlookLogoFill = GetIcon("OutlookLogoFill", "\uF1EA", "8-645fa64e");
var uiIconPowerPointLogo = GetIcon("PowerPointLogo", "\uF1EB", "8-645fa64e");
var uiIconPowerPointLogoFill = GetIcon("PowerPointLogoFill", "\uF1EC", "8-645fa64e");
var uiIconPublisherLogo = GetIcon("PublisherLogo", "\uF1ED", "8-645fa64e");
var uiIconPublisherLogoFill = GetIcon("PublisherLogoFill", "\uF1EE", "8-645fa64e");
var uiIconScheduleEventAction = GetIcon("ScheduleEventAction", "\uF1EF", "8-645fa64e");
var uiIconFlameSolid = GetIcon("FlameSolid", "\uF1F3", "8-645fa64e");
var uiIconServerProcesses = GetIcon("ServerProcesses", "\uF1FE", "8-645fa64e");
var uiIconServer = GetIcon("Server", "\uF201", "8-645fa64e");
var uiIconSaveAll = GetIcon("SaveAll", "\uF203", "8-645fa64e");
var uiIconLinkedInLogo = GetIcon("LinkedInLogo", "\uF20A", "8-645fa64e");
var uiIconDecimals = GetIcon("Decimals", "\uF218", "8-645fa64e");
var uiIconSidePanelMirrored = GetIcon("SidePanelMirrored", "\uF221", "8-645fa64e");
var uiIconProtectRestrict = GetIcon("ProtectRestrict", "\uF22A", "8-645fa64e");
var uiIconUnknownMirrored = GetIcon("UnknownMirrored", "\uF22E", "8-645fa64e");
var uiIconPublicContactCardMirrored = GetIcon("PublicContactCardMirrored", "\uF230", "8-645fa64e");
var uiIconGridViewSmall = GetIcon("GridViewSmall", "\uF232", "8-645fa64e");
var uiIconGridViewMedium = GetIcon("GridViewMedium", "\uF233", "8-645fa64e");
var uiIconGridViewLarge = GetIcon("GridViewLarge", "\uF234", "8-645fa64e");
var uiIconStep = GetIcon("Step", "\uF241", "8-645fa64e");
var uiIconStepInsert = GetIcon("StepInsert", "\uF242", "8-645fa64e");
var uiIconStepShared = GetIcon("StepShared", "\uF243", "8-645fa64e");
var uiIconStepSharedAdd = GetIcon("StepSharedAdd", "\uF244", "8-645fa64e");
var uiIconStepSharedInsert = GetIcon("StepSharedInsert", "\uF245", "8-645fa64e");
var uiIconViewDashboard = GetIcon("ViewDashboard", "\uF246", "8-645fa64e");
var uiIconViewList = GetIcon("ViewList", "\uF247", "8-645fa64e");
var uiIconViewListGroup = GetIcon("ViewListGroup", "\uF248", "8-645fa64e");
var uiIconViewListTree = GetIcon("ViewListTree", "\uF249", "8-645fa64e");
var uiIconTriggerAuto = GetIcon("TriggerAuto", "\uF24A", "8-645fa64e");
var uiIconTriggerUser = GetIcon("TriggerUser", "\uF24B", "8-645fa64e");
var uiIconPivotChart = GetIcon("PivotChart", "\uF24C", "8-645fa64e");
var uiIconStackedBarChart = GetIcon("StackedBarChart", "\uF24D", "8-645fa64e");
var uiIconStackedLineChart = GetIcon("StackedLineChart", "\uF24E", "8-645fa64e");
var uiIconBuildQueue = GetIcon("BuildQueue", "\uF24F", "8-645fa64e");
var uiIconBuildQueueNew = GetIcon("BuildQueueNew", "\uF250", "8-645fa64e");
var uiIconUserFollowed = GetIcon("UserFollowed", "\uF25C", "8-645fa64e");
var uiIconContactLink = GetIcon("ContactLink", "\uF25F", "8-645fa64e");
var uiIconStack = GetIcon("Stack", "\uF26F", "8-645fa64e");
var uiIconBullseye = GetIcon("Bullseye", "\uF272", "8-645fa64e");
var uiIconVennDiagram = GetIcon("VennDiagram", "\uF273", "8-645fa64e");
var uiIconFiveTileGrid = GetIcon("FiveTileGrid", "\uF274", "8-645fa64e");
var uiIconFocalPoint = GetIcon("FocalPoint", "\uF277", "8-645fa64e");
var uiIconRingerRemove = GetIcon("RingerRemove", "\uF279", "8-645fa64e");
var uiIconTeamsLogoInverse = GetIcon("TeamsLogoInverse", "\uF27A", "8-645fa64e");
var uiIconTeamsLogo = GetIcon("TeamsLogo", "\uF27B", "8-645fa64e");
var uiIconTeamsLogoFill = GetIcon("TeamsLogoFill", "\uF27C", "8-645fa64e");
var uiIconSkypeForBusinessLogoFill = GetIcon("SkypeForBusinessLogoFill", "\uF27D", "8-645fa64e");
var uiIconSharepointLogo = GetIcon("SharepointLogo", "\uF27E", "8-645fa64e");
var uiIconSharepointLogoFill = GetIcon("SharepointLogoFill", "\uF27F", "8-645fa64e");
var uiIconDelveLogo = GetIcon("DelveLogo", "\uF280", "8-645fa64e");
var uiIconDelveLogoFill = GetIcon("DelveLogoFill", "\uF281", "8-645fa64e");
var uiIconOfficeVideoLogo = GetIcon("OfficeVideoLogo", "\uF282", "8-645fa64e");
var uiIconOfficeVideoLogoFill = GetIcon("OfficeVideoLogoFill", "\uF283", "8-645fa64e");
var uiIconExchangeLogo = GetIcon("ExchangeLogo", "\uF284", "8-645fa64e");
var uiIconExchangeLogoFill = GetIcon("ExchangeLogoFill", "\uF285", "8-645fa64e");
var uiIconDocumentApproval = GetIcon("DocumentApproval", "\uF28B", "8-645fa64e");
var uiIconCloneToDesktop = GetIcon("CloneToDesktop", "\uF28C", "9-53746c82");
var uiIconInstallToDrive = GetIcon("InstallToDrive", "\uF28D", "9-53746c82");
var uiIconBlur = GetIcon("Blur", "\uF28E", "9-53746c82");
var uiIconBuild = GetIcon("Build", "\uF28F", "9-53746c82");
var uiIconProcessMetaTask = GetIcon("ProcessMetaTask", "\uF290", "9-53746c82");
var uiIconBranchFork2 = GetIcon("BranchFork2", "\uF291", "9-53746c82");
var uiIconBranchLocked = GetIcon("BranchLocked", "\uF292", "9-53746c82");
var uiIconBranchCommit = GetIcon("BranchCommit", "\uF293", "9-53746c82");
var uiIconBranchCompare = GetIcon("BranchCompare", "\uF294", "9-53746c82");
var uiIconBranchMerge = GetIcon("BranchMerge", "\uF295", "9-53746c82");
var uiIconBranchPullRequest = GetIcon("BranchPullRequest", "\uF296", "9-53746c82");
var uiIconBranchSearch = GetIcon("BranchSearch", "\uF297", "9-53746c82");
var uiIconBranchShelveset = GetIcon("BranchShelveset", "\uF298", "9-53746c82");
var uiIconRawSource = GetIcon("RawSource", "\uF299", "9-53746c82");
var uiIconMergeDuplicate = GetIcon("MergeDuplicate", "\uF29A", "9-53746c82");
var uiIconRowsGroup = GetIcon("RowsGroup", "\uF29B", "9-53746c82");
var uiIconRowsChild = GetIcon("RowsChild", "\uF29C", "9-53746c82");
var uiIconDeploy = GetIcon("Deploy", "\uF29D", "9-53746c82");
var uiIconRedeploy = GetIcon("Redeploy", "\uF29E", "9-53746c82");
var uiIconServerEnviroment = GetIcon("ServerEnviroment", "\uF29F", "9-53746c82");
var uiIconVisioDiagram = GetIcon("VisioDiagram", "\uF2A0", "9-53746c82");
var uiIconHighlightMappedShapes = GetIcon("HighlightMappedShapes", "\uF2A1", "9-53746c82");
var uiIconTextCallout = GetIcon("TextCallout", "\uF2A2", "9-53746c82");
var uiIconIconSetsFlag = GetIcon("IconSetsFlag", "\uF2A4", "9-53746c82");
var uiIconVisioLogo = GetIcon("VisioLogo", "\uF2A7", "9-53746c82");
var uiIconVisioLogoFill = GetIcon("VisioLogoFill", "\uF2A8", "9-53746c82");
var uiIconVisioDocument = GetIcon("VisioDocument", "\uF2A9", "9-53746c82");
var uiIconTimelineProgress = GetIcon("TimelineProgress", "\uF2AA", "9-53746c82");
var uiIconTimelineDelivery = GetIcon("TimelineDelivery", "\uF2AB", "9-53746c82");
var uiIconBacklog = GetIcon("Backlog", "\uF2AC", "9-53746c82");
var uiIconTeamFavorite = GetIcon("TeamFavorite", "\uF2AD", "9-53746c82");
var uiIconTaskGroup = GetIcon("TaskGroup", "\uF2AE", "9-53746c82");
var uiIconTaskGroupMirrored = GetIcon("TaskGroupMirrored", "\uF2AF", "9-53746c82");
var uiIconScopeTemplate = GetIcon("ScopeTemplate", "\uF2B0", "9-53746c82");
var uiIconAssessmentGroupTemplate = GetIcon("AssessmentGroupTemplate", "\uF2B1", "9-53746c82");
var uiIconNewTeamProject = GetIcon("NewTeamProject", "\uF2B2", "9-53746c82");
var uiIconCommentAdd = GetIcon("CommentAdd", "\uF2B3", "9-53746c82");
var uiIconCommentNext = GetIcon("CommentNext", "\uF2B4", "9-53746c82");
var uiIconCommentPrevious = GetIcon("CommentPrevious", "\uF2B5", "9-53746c82");
var uiIconShopServer = GetIcon("ShopServer", "\uF2B6", "9-53746c82");
var uiIconLocaleLanguage = GetIcon("LocaleLanguage", "\uF2B7", "9-53746c82");
var uiIconQueryList = GetIcon("QueryList", "\uF2B8", "9-53746c82");
var uiIconUserSync = GetIcon("UserSync", "\uF2B9", "9-53746c82");
var uiIconUserPause = GetIcon("UserPause", "\uF2BA", "9-53746c82");
var uiIconStreamingOff = GetIcon("StreamingOff", "\uF2BB", "9-53746c82");
var uiIconArrowTallUpLeft = GetIcon("ArrowTallUpLeft", "\uF2BD", "9-53746c82");
var uiIconArrowTallUpRight = GetIcon("ArrowTallUpRight", "\uF2BE", "9-53746c82");
var uiIconArrowTallDownLeft = GetIcon("ArrowTallDownLeft", "\uF2BF", "9-53746c82");
var uiIconArrowTallDownRight = GetIcon("ArrowTallDownRight", "\uF2C0", "9-53746c82");
var uiIconFieldEmpty = GetIcon("FieldEmpty", "\uF2C1", "9-53746c82");
var uiIconFieldFilled = GetIcon("FieldFilled", "\uF2C2", "9-53746c82");
var uiIconFieldChanged = GetIcon("FieldChanged", "\uF2C3", "9-53746c82");
var uiIconFieldNotChanged = GetIcon("FieldNotChanged", "\uF2C4", "9-53746c82");
var uiIconRingerOff = GetIcon("RingerOff", "\uF2C5", "9-53746c82");
var uiIconPlayResume = GetIcon("PlayResume", "\uF2C6", "9-53746c82");
var uiIconBulletedList2 = GetIcon("BulletedList2", "\uF2C7", "9-53746c82");
var uiIconBulletedList2Mirrored = GetIcon("BulletedList2Mirrored", "\uF2C8", "9-53746c82");
var uiIconImageCrosshair = GetIcon("ImageCrosshair", "\uF2C9", "9-53746c82");
var uiIconGitGraph = GetIcon("GitGraph", "\uF2CA", "9-53746c82");
var uiIconRepo = GetIcon("Repo", "\uF2CB", "9-53746c82");
var uiIconRepoSolid = GetIcon("RepoSolid", "\uF2CC", "9-53746c82");
var uiIconFolderQuery = GetIcon("FolderQuery", "\uF2CD", "9-53746c82");
var uiIconFolderList = GetIcon("FolderList", "\uF2CE", "9-53746c82");
var uiIconFolderListMirrored = GetIcon("FolderListMirrored", "\uF2CF", "9-53746c82");
var uiIconLocationOutline = GetIcon("LocationOutline", "\uF2D0", "9-53746c82");
var uiIconPOISolid = GetIcon("POISolid", "\uF2D1", "9-53746c82");
var uiIconCalculatorNotEqualTo = GetIcon("CalculatorNotEqualTo", "\uF2D2", "9-53746c82");
var uiIconBoxSubtractSolid = GetIcon("BoxSubtractSolid", "\uF2D3", "9-53746c82");
var uiIconBoxAdditionSolid = GetIcon("BoxAdditionSolid", "\uF2D4", "9-53746c82");
var uiIconBoxMultiplySolid = GetIcon("BoxMultiplySolid", "\uF2D5", "9-53746c82");
var uiIconBoxPlaySolid = GetIcon("BoxPlaySolid", "\uF2D6", "9-53746c82");
var uiIconBoxCheckmarkSolid = GetIcon("BoxCheckmarkSolid", "\uF2D7", "9-53746c82");
var uiIconCirclePauseSolid = GetIcon("CirclePauseSolid", "\uF2D8", "9-53746c82");
var uiIconCirclePause = GetIcon("CirclePause", "\uF2D9", "9-53746c82");
var uiIconMSNVideosSolid = GetIcon("MSNVideosSolid", "\uF2DA", "9-53746c82");
var uiIconCircleStopSolid = GetIcon("CircleStopSolid", "\uF2DB", "9-53746c82");
var uiIconCircleStop = GetIcon("CircleStop", "\uF2DC", "9-53746c82");
var uiIconNavigateBack = GetIcon("NavigateBack", "\uF2DD", "9-53746c82");
var uiIconNavigateBackMirrored = GetIcon("NavigateBackMirrored", "\uF2DE", "9-53746c82");
var uiIconNavigateForward = GetIcon("NavigateForward", "\uF2DF", "9-53746c82");
var uiIconNavigateForwardMirrored = GetIcon("NavigateForwardMirrored", "\uF2E0", "9-53746c82");
var uiIconUnknownSolid = GetIcon("UnknownSolid", "\uF2E1", "9-53746c82");
var uiIconUnknownMirroredSolid = GetIcon("UnknownMirroredSolid", "\uF2E2", "9-53746c82");
var uiIconCircleAddition = GetIcon("CircleAddition", "\uF2E3", "9-53746c82");
var uiIconCircleAdditionSolid = GetIcon("CircleAdditionSolid", "\uF2E4", "9-53746c82");
var uiIconFilePDB = GetIcon("FilePDB", "\uF2E5", "9-53746c82");
var uiIconFileTemplate = GetIcon("FileTemplate", "\uF2E6", "9-53746c82");
var uiIconFileSQL = GetIcon("FileSQL", "\uF2E7", "9-53746c82");
var uiIconFileJAVA = GetIcon("FileJAVA", "\uF2E8", "9-53746c82");
var uiIconFileASPX = GetIcon("FileASPX", "\uF2E9", "9-53746c82");
var uiIconFileCSS = GetIcon("FileCSS", "\uF2EA", "9-53746c82");
var uiIconFileSass = GetIcon("FileSass", "\uF2EB", "9-53746c82");
var uiIconFileLess = GetIcon("FileLess", "\uF2EC", "9-53746c82");
var uiIconFileHTML = GetIcon("FileHTML", "\uF2ED", "9-53746c82");
var uiIconJavaScriptLanguage = GetIcon("JavaScriptLanguage", "\uF2EE", "9-53746c82");
var uiIconCSharpLanguage = GetIcon("CSharpLanguage", "\uF2EF", "9-53746c82");
var uiIconCSharp = GetIcon("CSharp", "\uF2F0", "9-53746c82");
var uiIconVisualBasicLanguage = GetIcon("VisualBasicLanguage", "\uF2F1", "9-53746c82");
var uiIconVB = GetIcon("VB", "\uF2F2", "9-53746c82");
var uiIconCPlusPlusLanguage = GetIcon("CPlusPlusLanguage", "\uF2F3", "9-53746c82");
var uiIconCPlusPlus = GetIcon("CPlusPlus", "\uF2F4", "10-fb519450");
var uiIconFSharpLanguage = GetIcon("FSharpLanguage", "\uF2F5", "10-fb519450");
var uiIconFSharp = GetIcon("FSharp", "\uF2F6", "10-fb519450");
var uiIconTypeScriptLanguage = GetIcon("TypeScriptLanguage", "\uF2F7", "10-fb519450");
var uiIconPythonLanguage = GetIcon("PythonLanguage", "\uF2F8", "10-fb519450");
var uiIconPY = GetIcon("PY", "\uF2F9", "10-fb519450");
var uiIconCoffeeScript = GetIcon("CoffeeScript", "\uF2FA", "10-fb519450");
var uiIconMarkDownLanguage = GetIcon("MarkDownLanguage", "\uF2FB", "10-fb519450");
var uiIconFullWidth = GetIcon("FullWidth", "\uF2FE", "10-fb519450");
var uiIconFullWidthEdit = GetIcon("FullWidthEdit", "\uF2FF", "10-fb519450");
var uiIconPlug = GetIcon("Plug", "\uF300", "10-fb519450");
var uiIconPlugSolid = GetIcon("PlugSolid", "\uF301", "10-fb519450");
var uiIconPlugConnected = GetIcon("PlugConnected", "\uF302", "10-fb519450");
var uiIconPlugDisconnected = GetIcon("PlugDisconnected", "\uF303", "10-fb519450");
var uiIconUnlockSolid = GetIcon("UnlockSolid", "\uF304", "10-fb519450");
var uiIconVariable = GetIcon("Variable", "\uF305", "10-fb519450");
var uiIconParameter = GetIcon("Parameter", "\uF306", "10-fb519450");
var uiIconCommentUrgent = GetIcon("CommentUrgent", "\uF307", "10-fb519450");
var uiIconStoryboard = GetIcon("Storyboard", "\uF308", "10-fb519450");
var uiIconDiffInline = GetIcon("DiffInline", "\uF309", "10-fb519450");
var uiIconDiffSideBySide = GetIcon("DiffSideBySide", "\uF30A", "10-fb519450");
var uiIconImageDiff = GetIcon("ImageDiff", "\uF30B", "10-fb519450");
var uiIconImagePixel = GetIcon("ImagePixel", "\uF30C", "10-fb519450");
var uiIconFileBug = GetIcon("FileBug", "\uF30D", "10-fb519450");
var uiIconFileCode = GetIcon("FileCode", "\uF30E", "10-fb519450");
var uiIconFileComment = GetIcon("FileComment", "\uF30F", "10-fb519450");
var uiIconBusinessHoursSign = GetIcon("BusinessHoursSign", "\uF310", "10-fb519450");
var uiIconFileImage = GetIcon("FileImage", "\uF311", "10-fb519450");
var uiIconFileSymlink = GetIcon("FileSymlink", "\uF312", "10-fb519450");
var uiIconAutoFillTemplate = GetIcon("AutoFillTemplate", "\uF313", "10-fb519450");
var uiIconWorkItem = GetIcon("WorkItem", "\uF314", "10-fb519450");
var uiIconWorkItemBug = GetIcon("WorkItemBug", "\uF315", "10-fb519450");
var uiIconLogRemove = GetIcon("LogRemove", "\uF316", "10-fb519450");
var uiIconColumnOptions = GetIcon("ColumnOptions", "\uF317", "10-fb519450");
var uiIconPackages = GetIcon("Packages", "\uF318", "10-fb519450");
var uiIconBuildIssue = GetIcon("BuildIssue", "\uF319", "10-fb519450");
var uiIconAssessmentGroup = GetIcon("AssessmentGroup", "\uF31A", "10-fb519450");
var uiIconVariableGroup = GetIcon("VariableGroup", "\uF31B", "10-fb519450");
var uiIconFullHistory = GetIcon("FullHistory", "\uF31C", "10-fb519450");
var uiIconSingleColumnEdit = GetIcon("SingleColumnEdit", "\uF321", "10-fb519450");
var uiIconDoubleColumnEdit = GetIcon("DoubleColumnEdit", "\uF322", "10-fb519450");
var uiIconTripleColumnEdit = GetIcon("TripleColumnEdit", "\uF323", "10-fb519450");
var uiIconColumnLeftTwoThirdsEdit = GetIcon("ColumnLeftTwoThirdsEdit", "\uF324", "10-fb519450");
var uiIconColumnRightTwoThirdsEdit = GetIcon("ColumnRightTwoThirdsEdit", "\uF325", "10-fb519450");
var uiIconStreamLogo = GetIcon("StreamLogo", "\uF329", "10-fb519450");
var uiIconPassiveAuthentication = GetIcon("PassiveAuthentication", "\uF32A", "10-fb519450");
var uiIconAlertSolid = GetIcon("AlertSolid", "\uF331", "10-fb519450");
var uiIconMegaphoneSolid = GetIcon("MegaphoneSolid", "\uF332", "10-fb519450");
var uiIconTaskSolid = GetIcon("TaskSolid", "\uF333", "10-fb519450");
var uiIconConfigurationSolid = GetIcon("ConfigurationSolid", "\uF334", "10-fb519450");
var uiIconBugSolid = GetIcon("BugSolid", "\uF335", "10-fb519450");
var uiIconCrownSolid = GetIcon("CrownSolid", "\uF336", "10-fb519450");
var uiIconTrophy2Solid = GetIcon("Trophy2Solid", "\uF337", "10-fb519450");
var uiIconQuickNoteSolid = GetIcon("QuickNoteSolid", "\uF338", "10-fb519450");
var uiIconConstructionConeSolid = GetIcon("ConstructionConeSolid", "\uF339", "10-fb519450");
var uiIconPageListSolid = GetIcon("PageListSolid", "\uF33A", "10-fb519450");
var uiIconPageListMirroredSolid = GetIcon("PageListMirroredSolid", "\uF33B", "10-fb519450");
var uiIconStarburstSolid = GetIcon("StarburstSolid", "\uF33C", "10-fb519450");
var uiIconReadingModeSolid = GetIcon("ReadingModeSolid", "\uF33D", "10-fb519450");
var uiIconSadSolid = GetIcon("SadSolid", "\uF33E", "10-fb519450");
var uiIconHealthSolid = GetIcon("HealthSolid", "\uF33F", "10-fb519450");
var uiIconShieldSolid = GetIcon("ShieldSolid", "\uF340", "10-fb519450");
var uiIconGiftBoxSolid = GetIcon("GiftBoxSolid", "\uF341", "10-fb519450");
var uiIconShoppingCartSolid = GetIcon("ShoppingCartSolid", "\uF342", "10-fb519450");
var uiIconMailSolid = GetIcon("MailSolid", "\uF343", "10-fb519450");
var uiIconChatSolid = GetIcon("ChatSolid", "\uF344", "10-fb519450");
var uiIconRibbonSolid = GetIcon("RibbonSolid", "\uF345", "10-fb519450");
var uiIconFinancialSolid = GetIcon("FinancialSolid", "\uF346", "10-fb519450");
var uiIconFinancialMirroredSolid = GetIcon("FinancialMirroredSolid", "\uF347", "10-fb519450");
var uiIconHeadsetSolid = GetIcon("HeadsetSolid", "\uF348", "10-fb519450");
var uiIconPermissionsSolid = GetIcon("PermissionsSolid", "\uF349", "10-fb519450");
var uiIconParkingSolid = GetIcon("ParkingSolid", "\uF34A", "10-fb519450");
var uiIconParkingMirroredSolid = GetIcon("ParkingMirroredSolid", "\uF34B", "10-fb519450");
var uiIconDiamondSolid = GetIcon("DiamondSolid", "\uF34C", "10-fb519450");
var uiIconAsteriskSolid = GetIcon("AsteriskSolid", "\uF34D", "10-fb519450");
var uiIconOfflineStorageSolid = GetIcon("OfflineStorageSolid", "\uF34E", "10-fb519450");
var uiIconBankSolid = GetIcon("BankSolid", "\uF34F", "10-fb519450");
var uiIconDecisionSolid = GetIcon("DecisionSolid", "\uF350", "10-fb519450");
var uiIconParachute = GetIcon("Parachute", "\uF351", "10-fb519450");
var uiIconParachuteSolid = GetIcon("ParachuteSolid", "\uF352", "10-fb519450");
var uiIconFiltersSolid = GetIcon("FiltersSolid", "\uF353", "10-fb519450");
var uiIconColorSolid = GetIcon("ColorSolid", "\uF354", "10-fb519450");
var uiIconReviewSolid = GetIcon("ReviewSolid", "\uF355", "10-fb519450");
var uiIconReviewRequestSolid = GetIcon("ReviewRequestSolid", "\uF356", "10-fb519450");
var uiIconReviewRequestMirroredSolid = GetIcon("ReviewRequestMirroredSolid", "\uF357", "10-fb519450");
var uiIconReviewResponseSolid = GetIcon("ReviewResponseSolid", "\uF358", "10-fb519450");
var uiIconFeedbackRequestSolid = GetIcon("FeedbackRequestSolid", "\uF359", "10-fb519450");
var uiIconFeedbackRequestMirroredSolid = GetIcon("FeedbackRequestMirroredSolid", "\uF35A", "10-fb519450");
var uiIconFeedbackResponseSolid = GetIcon("FeedbackResponseSolid", "\uF35B", "10-fb519450");
var uiIconWorkItemBar = GetIcon("WorkItemBar", "\uF35C", "10-fb519450");
var uiIconWorkItemBarSolid = GetIcon("WorkItemBarSolid", "\uF35D", "10-fb519450");
var uiIconSeparator = GetIcon("Separator", "\uF35E", "10-fb519450");
var uiIconNavigateExternalInline = GetIcon("NavigateExternalInline", "\uF35F", "10-fb519450");
var uiIconPlanView = GetIcon("PlanView", "\uF360", "10-fb519450");
var uiIconTimelineMatrixView = GetIcon("TimelineMatrixView", "\uF361", "10-fb519450");
var uiIconEngineeringGroup = GetIcon("EngineeringGroup", "\uF362", "10-fb519450");
var uiIconProjectCollection = GetIcon("ProjectCollection", "\uF363", "10-fb519450");
var uiIconCaretBottomRightCenter8 = GetIcon("CaretBottomRightCenter8", "\uF364", "10-fb519450");
var uiIconCaretBottomLeftCenter8 = GetIcon("CaretBottomLeftCenter8", "\uF365", "10-fb519450");
var uiIconCaretTopRightCenter8 = GetIcon("CaretTopRightCenter8", "\uF366", "10-fb519450");
var uiIconCaretTopLeftCenter8 = GetIcon("CaretTopLeftCenter8", "\uF367", "11-a4026982");
var uiIconDonutChart = GetIcon("DonutChart", "\uF368", "11-a4026982");
var uiIconChevronUnfold10 = GetIcon("ChevronUnfold10", "\uF369", "11-a4026982");
var uiIconChevronFold10 = GetIcon("ChevronFold10", "\uF36A", "11-a4026982");
var uiIconDoubleChevronDown8 = GetIcon("DoubleChevronDown8", "\uF36B", "11-a4026982");
var uiIconDoubleChevronUp8 = GetIcon("DoubleChevronUp8", "\uF36C", "11-a4026982");
var uiIconDoubleChevronLeft8 = GetIcon("DoubleChevronLeft8", "\uF36D", "11-a4026982");
var uiIconDoubleChevronRight8 = GetIcon("DoubleChevronRight8", "\uF36E", "11-a4026982");
var uiIconChevronDownEnd6 = GetIcon("ChevronDownEnd6", "\uF36F", "11-a4026982");
var uiIconChevronUpEnd6 = GetIcon("ChevronUpEnd6", "\uF370", "11-a4026982");
var uiIconChevronLeftEnd6 = GetIcon("ChevronLeftEnd6", "\uF371", "11-a4026982");
var uiIconChevronRightEnd6 = GetIcon("ChevronRightEnd6", "\uF372", "11-a4026982");
var uiIconContextMenu = GetIcon("ContextMenu", "\uF37C", "11-a4026982");
var uiIconAzureAPIManagement = GetIcon("AzureAPIManagement", "\uF37F", "11-a4026982");
var uiIconAzureServiceEndpoint = GetIcon("AzureServiceEndpoint", "\uF380", "11-a4026982");
var uiIconVSTSLogo = GetIcon("VSTSLogo", "\uF381", "11-a4026982");
var uiIconVSTSAltLogo1 = GetIcon("VSTSAltLogo1", "\uF382", "11-a4026982");
var uiIconVSTSAltLogo2 = GetIcon("VSTSAltLogo2", "\uF383", "11-a4026982");
var uiIconFileTypeSolution = GetIcon("FileTypeSolution", "\uF387", "11-a4026982");
var uiIconWordLogoInverse16 = GetIcon("WordLogoInverse16", "\uF390", "11-a4026982");
var uiIconWordLogo16 = GetIcon("WordLogo16", "\uF391", "11-a4026982");
var uiIconWordLogoFill16 = GetIcon("WordLogoFill16", "\uF392", "11-a4026982");
var uiIconPowerPointLogoInverse16 = GetIcon("PowerPointLogoInverse16", "\uF393", "11-a4026982");
var uiIconPowerPointLogo16 = GetIcon("PowerPointLogo16", "\uF394", "11-a4026982");
var uiIconPowerPointLogoFill16 = GetIcon("PowerPointLogoFill16", "\uF395", "11-a4026982");
var uiIconExcelLogoInverse16 = GetIcon("ExcelLogoInverse16", "\uF396", "11-a4026982");
var uiIconExcelLogo16 = GetIcon("ExcelLogo16", "\uF397", "11-a4026982");
var uiIconExcelLogoFill16 = GetIcon("ExcelLogoFill16", "\uF398", "11-a4026982");
var uiIconOneNoteLogoInverse16 = GetIcon("OneNoteLogoInverse16", "\uF399", "11-a4026982");
var uiIconOneNoteLogo16 = GetIcon("OneNoteLogo16", "\uF39A", "11-a4026982");
var uiIconOneNoteLogoFill16 = GetIcon("OneNoteLogoFill16", "\uF39B", "11-a4026982");
var uiIconOutlookLogoInverse16 = GetIcon("OutlookLogoInverse16", "\uF39C", "11-a4026982");
var uiIconOutlookLogo16 = GetIcon("OutlookLogo16", "\uF39D", "11-a4026982");
var uiIconOutlookLogoFill16 = GetIcon("OutlookLogoFill16", "\uF39E", "11-a4026982");
var uiIconPublisherLogoInverse16 = GetIcon("PublisherLogoInverse16", "\uF39F", "11-a4026982");
var uiIconPublisherLogo16 = GetIcon("PublisherLogo16", "\uF3A0", "11-a4026982");
var uiIconPublisherLogoFill16 = GetIcon("PublisherLogoFill16", "\uF3A1", "11-a4026982");
var uiIconVisioLogoInverse16 = GetIcon("VisioLogoInverse16", "\uF3A2", "11-a4026982");
var uiIconVisioLogo16 = GetIcon("VisioLogo16", "\uF3A3", "11-a4026982");
var uiIconVisioLogoFill16 = GetIcon("VisioLogoFill16", "\uF3A4", "11-a4026982");
var uiIconTestBeaker = GetIcon("TestBeaker", "\uF3A5", "11-a4026982");
var uiIconTestBeakerSolid = GetIcon("TestBeakerSolid", "\uF3A6", "11-a4026982");
var uiIconTestExploreSolid = GetIcon("TestExploreSolid", "\uF3A7", "11-a4026982");
var uiIconTestAutoSolid = GetIcon("TestAutoSolid", "\uF3A8", "11-a4026982");
var uiIconTestUserSolid = GetIcon("TestUserSolid", "\uF3A9", "11-a4026982");
var uiIconTestImpactSolid = GetIcon("TestImpactSolid", "\uF3AA", "11-a4026982");
var uiIconTestPlan = GetIcon("TestPlan", "\uF3AB", "11-a4026982");
var uiIconTestStep = GetIcon("TestStep", "\uF3AC", "11-a4026982");
var uiIconTestParameter = GetIcon("TestParameter", "\uF3AD", "11-a4026982");
var uiIconTestSuite = GetIcon("TestSuite", "\uF3AE", "11-a4026982");
var uiIconTestCase = GetIcon("TestCase", "\uF3AF", "11-a4026982");
var uiIconSprint = GetIcon("Sprint", "\uF3B0", "11-a4026982");
var uiIconSignOut = GetIcon("SignOut", "\uF3B1", "11-a4026982");
var uiIconTriggerApproval = GetIcon("TriggerApproval", "\uF3B2", "11-a4026982");
var uiIconRocket = GetIcon("Rocket", "\uF3B3", "11-a4026982");
var uiIconAzureKeyVault = GetIcon("AzureKeyVault", "\uF3B4", "11-a4026982");
var uiIconTransition = GetIcon("Transition", "\uF3BC", "11-a4026982");
var uiIconLikeSolid = GetIcon("LikeSolid", "\uF3BF", "11-a4026982");
var uiIconDislikeSolid = GetIcon("DislikeSolid", "\uF3C0", "11-a4026982");
var uiIconUnSetColor = GetIcon("UnSetColor", "\uF3F9", "11-a4026982");
var uiIconDeclineCall = GetIcon("DeclineCall", "\uF405", "11-a4026982");
var uiIconRectangularClipping = GetIcon("RectangularClipping", "\uF407", "11-a4026982");
var uiIconTeamsLogo16 = GetIcon("TeamsLogo16", "\uF40A", "11-a4026982");
var uiIconTeamsLogoFill16 = GetIcon("TeamsLogoFill16", "\uF40B", "11-a4026982");
var uiIconSpacer = GetIcon("Spacer", "\uF40D", "11-a4026982");
var uiIconSkypeLogo16 = GetIcon("SkypeLogo16", "\uF40E", "11-a4026982");
var uiIconSkypeForBusinessLogo16 = GetIcon("SkypeForBusinessLogo16", "\uF40F", "11-a4026982");
var uiIconSkypeForBusinessLogoFill16 = GetIcon("SkypeForBusinessLogoFill16", "\uF410", "11-a4026982");
var uiIconFilterSolid = GetIcon("FilterSolid", "\uF412", "11-a4026982");
var uiIconMailUndelivered = GetIcon("MailUndelivered", "\uF415", "11-a4026982");
var uiIconMailTentative = GetIcon("MailTentative", "\uF416", "11-a4026982");
var uiIconMailTentativeMirrored = GetIcon("MailTentativeMirrored", "\uF417", "11-a4026982");
var uiIconMailReminder = GetIcon("MailReminder", "\uF418", "11-a4026982");
var uiIconReceiptUndelivered = GetIcon("ReceiptUndelivered", "\uF419", "11-a4026982");
var uiIconReceiptTentative = GetIcon("ReceiptTentative", "\uF41A", "11-a4026982");
var uiIconReceiptTentativeMirrored = GetIcon("ReceiptTentativeMirrored", "\uF41B", "11-a4026982");
var uiIconInbox = GetIcon("Inbox", "\uF41C", "11-a4026982");
var uiIconIRMReply = GetIcon("IRMReply", "\uF41D", "11-a4026982");
var uiIconIRMReplyMirrored = GetIcon("IRMReplyMirrored", "\uF41E", "11-a4026982");
var uiIconIRMForward = GetIcon("IRMForward", "\uF41F", "11-a4026982");
var uiIconIRMForwardMirrored = GetIcon("IRMForwardMirrored", "\uF420", "11-a4026982");
var uiIconVoicemailIRM = GetIcon("VoicemailIRM", "\uF421", "11-a4026982");
var uiIconEventAccepted = GetIcon("EventAccepted", "\uF422", "11-a4026982");
var uiIconEventTentative = GetIcon("EventTentative", "\uF423", "11-a4026982");
var uiIconEventTentativeMirrored = GetIcon("EventTentativeMirrored", "\uF424", "11-a4026982");
var uiIconEventDeclined = GetIcon("EventDeclined", "\uF425", "11-a4026982");
var uiIconIDBadge = GetIcon("IDBadge", "\uF427", "11-a4026982");
var uiIconBackgroundColor = GetIcon("BackgroundColor", "\uF42B", "11-a4026982");
var uiIconOfficeFormsLogoInverse16 = GetIcon("OfficeFormsLogoInverse16", "\uF433", "11-a4026982");
var uiIconOfficeFormsLogo = GetIcon("OfficeFormsLogo", "\uF434", "11-a4026982");
var uiIconOfficeFormsLogoFill = GetIcon("OfficeFormsLogoFill", "\uF435", "11-a4026982");
var uiIconOfficeFormsLogo16 = GetIcon("OfficeFormsLogo16", "\uF436", "11-a4026982");
var uiIconOfficeFormsLogoFill16 = GetIcon("OfficeFormsLogoFill16", "\uF437", "11-a4026982");
var uiIconOfficeFormsLogoInverse24 = GetIcon("OfficeFormsLogoInverse24", "\uF43A", "11-a4026982");
var uiIconOfficeFormsLogo24 = GetIcon("OfficeFormsLogo24", "\uF43B", "11-a4026982");
var uiIconOfficeFormsLogoFill24 = GetIcon("OfficeFormsLogoFill24", "\uF43C", "11-a4026982");
var uiIconPageLock = GetIcon("PageLock", "\uF43F", "11-a4026982");
var uiIconNotExecuted = GetIcon("NotExecuted", "\uF440", "11-a4026982");
var uiIconNotImpactedSolid = GetIcon("NotImpactedSolid", "\uF441", "11-a4026982");
var uiIconFieldReadOnly = GetIcon("FieldReadOnly", "\uF442", "11-a4026982");
var uiIconFieldRequired = GetIcon("FieldRequired", "\uF443", "12-e6882c74");
var uiIconBacklogBoard = GetIcon("BacklogBoard", "\uF444", "12-e6882c74");
var uiIconExternalBuild = GetIcon("ExternalBuild", "\uF445", "12-e6882c74");
var uiIconExternalTFVC = GetIcon("ExternalTFVC", "\uF446", "12-e6882c74");
var uiIconExternalXAML = GetIcon("ExternalXAML", "\uF447", "12-e6882c74");
var uiIconIssueSolid = GetIcon("IssueSolid", "\uF448", "12-e6882c74");
var uiIconDefectSolid = GetIcon("DefectSolid", "\uF449", "12-e6882c74");
var uiIconLadybugSolid = GetIcon("LadybugSolid", "\uF44A", "12-e6882c74");
var uiIconNugetLogo = GetIcon("NugetLogo", "\uF44C", "12-e6882c74");
var uiIconTFVCLogo = GetIcon("TFVCLogo", "\uF44D", "12-e6882c74");
var uiIconProjectLogo32 = GetIcon("ProjectLogo32", "\uF47E", "12-e6882c74");
var uiIconProjectLogoFill32 = GetIcon("ProjectLogoFill32", "\uF47F", "12-e6882c74");
var uiIconProjectLogo16 = GetIcon("ProjectLogo16", "\uF480", "12-e6882c74");
var uiIconProjectLogoFill16 = GetIcon("ProjectLogoFill16", "\uF481", "12-e6882c74");
var uiIconSwayLogo32 = GetIcon("SwayLogo32", "\uF482", "12-e6882c74");
var uiIconSwayLogoFill32 = GetIcon("SwayLogoFill32", "\uF483", "12-e6882c74");
var uiIconSwayLogo16 = GetIcon("SwayLogo16", "\uF484", "12-e6882c74");
var uiIconSwayLogoFill16 = GetIcon("SwayLogoFill16", "\uF485", "12-e6882c74");
var uiIconClassNotebookLogo32 = GetIcon("ClassNotebookLogo32", "\uF486", "12-e6882c74");
var uiIconClassNotebookLogoFill32 = GetIcon("ClassNotebookLogoFill32", "\uF487", "12-e6882c74");
var uiIconClassNotebookLogo16 = GetIcon("ClassNotebookLogo16", "\uF488", "12-e6882c74");
var uiIconClassNotebookLogoFill16 = GetIcon("ClassNotebookLogoFill16", "\uF489", "12-e6882c74");
var uiIconClassNotebookLogoInverse32 = GetIcon("ClassNotebookLogoInverse32", "\uF48A", "12-e6882c74");
var uiIconClassNotebookLogoInverse16 = GetIcon("ClassNotebookLogoInverse16", "\uF48B", "12-e6882c74");
var uiIconStaffNotebookLogo32 = GetIcon("StaffNotebookLogo32", "\uF48C", "12-e6882c74");
var uiIconStaffNotebookLogoFill32 = GetIcon("StaffNotebookLogoFill32", "\uF48D", "12-e6882c74");
var uiIconStaffNotebookLogo16 = GetIcon("StaffNotebookLogo16", "\uF48E", "12-e6882c74");
var uiIconStaffNotebookLogoFill16 = GetIcon("StaffNotebookLogoFill16", "\uF48F", "12-e6882c74");
var uiIconStaffNotebookLogoInverted32 = GetIcon("StaffNotebookLogoInverted32", "\uF490", "12-e6882c74");
var uiIconStaffNotebookLogoInverted16 = GetIcon("StaffNotebookLogoInverted16", "\uF491", "12-e6882c74");
var uiIconKaizalaLogo = GetIcon("KaizalaLogo", "\uF492", "12-e6882c74");
var uiIconTaskLogo = GetIcon("TaskLogo", "\uF493", "12-e6882c74");
var uiIconProtectionCenterLogo32 = GetIcon("ProtectionCenterLogo32", "\uF494", "12-e6882c74");
var uiIconGallatinLogo = GetIcon("GallatinLogo", "\uF496", "12-e6882c74");
var uiIconGlobe2 = GetIcon("Globe2", "\uF49A", "12-e6882c74");
var uiIconGuitar = GetIcon("Guitar", "\uF49B", "12-e6882c74");
var uiIconBreakfast = GetIcon("Breakfast", "\uF49C", "12-e6882c74");
var uiIconBrunch = GetIcon("Brunch", "\uF49D", "12-e6882c74");
var uiIconBeerMug = GetIcon("BeerMug", "\uF49E", "12-e6882c74");
var uiIconVacation = GetIcon("Vacation", "\uF49F", "12-e6882c74");
var uiIconTeeth = GetIcon("Teeth", "\uF4A0", "12-e6882c74");
var uiIconTaxi = GetIcon("Taxi", "\uF4A1", "12-e6882c74");
var uiIconChopsticks = GetIcon("Chopsticks", "\uF4A2", "12-e6882c74");
var uiIconSyncOccurence = GetIcon("SyncOccurence", "\uF4A3", "12-e6882c74");
var uiIconUnsyncOccurence = GetIcon("UnsyncOccurence", "\uF4A4", "12-e6882c74");
var uiIconPrimaryCalendar = GetIcon("PrimaryCalendar", "\uF4AE", "12-e6882c74");
var uiIconSearchCalendar = GetIcon("SearchCalendar", "\uF4AF", "12-e6882c74");
var uiIconVideoOff = GetIcon("VideoOff", "\uF4B0", "12-e6882c74");
var uiIconMicrosoftFlowLogo = GetIcon("MicrosoftFlowLogo", "\uF4B1", "12-e6882c74");
var uiIconBusinessCenterLogo = GetIcon("BusinessCenterLogo", "\uF4B2", "12-e6882c74");
var uiIconToDoLogoBottom = GetIcon("ToDoLogoBottom", "\uF4B3", "12-e6882c74");
var uiIconToDoLogoTop = GetIcon("ToDoLogoTop", "\uF4B4", "12-e6882c74");
var uiIconEditSolid12 = GetIcon("EditSolid12", "\uF4B5", "12-e6882c74");
var uiIconEditSolidMirrored12 = GetIcon("EditSolidMirrored12", "\uF4B6", "12-e6882c74");
var uiIconUneditableSolid12 = GetIcon("UneditableSolid12", "\uF4B7", "12-e6882c74");
var uiIconUneditableSolidMirrored12 = GetIcon("UneditableSolidMirrored12", "\uF4B8", "12-e6882c74");
var uiIconUneditableMirrored = GetIcon("UneditableMirrored", "\uF4B9", "12-e6882c74");
var uiIconAdminALogo32 = GetIcon("AdminALogo32", "\uF4BA", "12-e6882c74");
var uiIconAdminALogoFill32 = GetIcon("AdminALogoFill32", "\uF4BB", "12-e6882c74");
var uiIconToDoLogoInverse = GetIcon("ToDoLogoInverse", "\uF4BC", "12-e6882c74");
var uiIconSnooze = GetIcon("Snooze", "\uF4BD", "12-e6882c74");
var uiIconWaffleOffice365 = GetIcon("WaffleOffice365", "\uF4E0", "12-e6882c74");
var uiIconImageSearch = GetIcon("ImageSearch", "\uF4E8", "12-e6882c74");
var uiIconNewsSearch = GetIcon("NewsSearch", "\uF4E9", "12-e6882c74");
var uiIconVideoSearch = GetIcon("VideoSearch", "\uF4EA", "12-e6882c74");
var uiIconR = GetIcon("R", "\uF4EB", "12-e6882c74");
var uiIconFontColorA = GetIcon("FontColorA", "\uF4EC", "12-e6882c74");
var uiIconFontColorSwatch = GetIcon("FontColorSwatch", "\uF4ED", "12-e6882c74");
var uiIconLightWeight = GetIcon("LightWeight", "\uF4EE", "12-e6882c74");
var uiIconNormalWeight = GetIcon("NormalWeight", "\uF4EF", "12-e6882c74");
var uiIconSemiboldWeight = GetIcon("SemiboldWeight", "\uF4F0", "12-e6882c74");
var uiIconGroupObject = GetIcon("GroupObject", "\uF4F1", "12-e6882c74");
var uiIconUngroupObject = GetIcon("UngroupObject", "\uF4F2", "12-e6882c74");
var uiIconAlignHorizontalLeft = GetIcon("AlignHorizontalLeft", "\uF4F3", "12-e6882c74");
var uiIconAlignHorizontalCenter = GetIcon("AlignHorizontalCenter", "\uF4F4", "12-e6882c74");
var uiIconAlignHorizontalRight = GetIcon("AlignHorizontalRight", "\uF4F5", "12-e6882c74");
var uiIconAlignVerticalTop = GetIcon("AlignVerticalTop", "\uF4F6", "12-e6882c74");
var uiIconAlignVerticalCenter = GetIcon("AlignVerticalCenter", "\uF4F7", "12-e6882c74");
var uiIconAlignVerticalBottom = GetIcon("AlignVerticalBottom", "\uF4F8", "12-e6882c74");
var uiIconHorizontalDistributeCenter = GetIcon("HorizontalDistributeCenter", "\uF4F9", "12-e6882c74");
var uiIconVerticalDistributeCenter = GetIcon("VerticalDistributeCenter", "\uF4FA", "12-e6882c74");
var uiIconEllipse = GetIcon("Ellipse", "\uF4FB", "12-e6882c74");
var uiIconLine = GetIcon("Line", "\uF4FC", "12-e6882c74");
var uiIconOctagon = GetIcon("Octagon", "\uF4FD", "12-e6882c74");
var uiIconHexagon = GetIcon("Hexagon", "\uF4FE", "12-e6882c74");
var uiIconPentagon = GetIcon("Pentagon", "\uF4FF", "12-e6882c74");
var uiIconRightTriangle = GetIcon("RightTriangle", "\uF500", "12-e6882c74");
var uiIconHalfCircle = GetIcon("HalfCircle", "\uF501", "12-e6882c74");
var uiIconQuarterCircle = GetIcon("QuarterCircle", "\uF502", "12-e6882c74");
var uiIconThreeQuarterCircle = GetIcon("ThreeQuarterCircle", "\uF503", "12-e6882c74");
var uiIcon6PointStar = GetIcon("6PointStar", "\uF504", "12-e6882c74");
var uiIcon12PointStar = GetIcon("12PointStar", "\uF505", "12-e6882c74");
var uiIconArrangeBringToFront = GetIcon("ArrangeBringToFront", "\uF506", "12-e6882c74");
var uiIconArrangeSendToBack = GetIcon("ArrangeSendToBack", "\uF507", "12-e6882c74");
var uiIconArrangeSendBackward = GetIcon("ArrangeSendBackward", "\uF508", "12-e6882c74");
var uiIconArrangeBringForward = GetIcon("ArrangeBringForward", "\uF509", "12-e6882c74");
var uiIconBorderDash = GetIcon("BorderDash", "\uF50A", "12-e6882c74");
var uiIconBorderDot = GetIcon("BorderDot", "\uF50B", "12-e6882c74");
var uiIconLineStyle = GetIcon("LineStyle", "\uF50C", "12-e6882c74");
var uiIconLineThickness = GetIcon("LineThickness", "\uF50D", "12-e6882c74");
var uiIconWindowEdit = GetIcon("WindowEdit", "\uF50E", "13-0980cd6d");
var uiIconHintText = GetIcon("HintText", "\uF50F", "13-0980cd6d");
var uiIconMediaAdd = GetIcon("MediaAdd", "\uF510", "13-0980cd6d");
var uiIconAnchorLock = GetIcon("AnchorLock", "\uF511", "13-0980cd6d");
var uiIconAutoHeight = GetIcon("AutoHeight", "\uF512", "13-0980cd6d");
var uiIconChartSeries = GetIcon("ChartSeries", "\uF513", "13-0980cd6d");
var uiIconChartXAngle = GetIcon("ChartXAngle", "\uF514", "13-0980cd6d");
var uiIconChartYAngle = GetIcon("ChartYAngle", "\uF515", "13-0980cd6d");
var uiIconCombobox = GetIcon("Combobox", "\uF516", "13-0980cd6d");
var uiIconLineSpacing = GetIcon("LineSpacing", "\uF517", "13-0980cd6d");
var uiIconPadding = GetIcon("Padding", "\uF518", "13-0980cd6d");
var uiIconPaddingTop = GetIcon("PaddingTop", "\uF519", "13-0980cd6d");
var uiIconPaddingBottom = GetIcon("PaddingBottom", "\uF51A", "13-0980cd6d");
var uiIconPaddingLeft = GetIcon("PaddingLeft", "\uF51B", "13-0980cd6d");
var uiIconPaddingRight = GetIcon("PaddingRight", "\uF51C", "13-0980cd6d");
var uiIconNavigationFlipper = GetIcon("NavigationFlipper", "\uF51D", "13-0980cd6d");
var uiIconAlignJustify = GetIcon("AlignJustify", "\uF51E", "13-0980cd6d");
var uiIconTextOverflow = GetIcon("TextOverflow", "\uF51F", "13-0980cd6d");
var uiIconVisualsFolder = GetIcon("VisualsFolder", "\uF520", "13-0980cd6d");
var uiIconVisualsStore = GetIcon("VisualsStore", "\uF521", "13-0980cd6d");
var uiIconPictureCenter = GetIcon("PictureCenter", "\uF522", "13-0980cd6d");
var uiIconPictureFill = GetIcon("PictureFill", "\uF523", "13-0980cd6d");
var uiIconPicturePosition = GetIcon("PicturePosition", "\uF524", "13-0980cd6d");
var uiIconPictureStretch = GetIcon("PictureStretch", "\uF525", "13-0980cd6d");
var uiIconPictureTile = GetIcon("PictureTile", "\uF526", "13-0980cd6d");
var uiIconSlider = GetIcon("Slider", "\uF527", "13-0980cd6d");
var uiIconSliderHandleSize = GetIcon("SliderHandleSize", "\uF528", "13-0980cd6d");
var uiIconDefaultRatio = GetIcon("DefaultRatio", "\uF529", "13-0980cd6d");
var uiIconNumberSequence = GetIcon("NumberSequence", "\uF52A", "13-0980cd6d");
var uiIconGUID = GetIcon("GUID", "\uF52B", "13-0980cd6d");
var uiIconReportAdd = GetIcon("ReportAdd", "\uF52C", "13-0980cd6d");
var uiIconDashboardAdd = GetIcon("DashboardAdd", "\uF52D", "13-0980cd6d");
var uiIconMapPinSolid = GetIcon("MapPinSolid", "\uF52E", "13-0980cd6d");
var uiIconWebPublish = GetIcon("WebPublish", "\uF52F", "13-0980cd6d");
var uiIconPieSingleSolid = GetIcon("PieSingleSolid", "\uF530", "13-0980cd6d");
var uiIconBlockedSolid = GetIcon("BlockedSolid", "\uF531", "13-0980cd6d");
var uiIconDrillDown = GetIcon("DrillDown", "\uF532", "13-0980cd6d");
var uiIconDrillDownSolid = GetIcon("DrillDownSolid", "\uF533", "13-0980cd6d");
var uiIconDrillExpand = GetIcon("DrillExpand", "\uF534", "13-0980cd6d");
var uiIconDrillShow = GetIcon("DrillShow", "\uF535", "13-0980cd6d");
var uiIconOneDriveFolder16 = GetIcon("OneDriveFolder16", "\uF53B", "13-0980cd6d");
var uiIconFunctionalManagerDashboard = GetIcon("FunctionalManagerDashboard", "\uF542", "13-0980cd6d");
var uiIconBIDashboard = GetIcon("BIDashboard", "\uF543", "13-0980cd6d");
var uiIconCodeEdit = GetIcon("CodeEdit", "\uF544", "13-0980cd6d");
var uiIconRenewalCurrent = GetIcon("RenewalCurrent", "\uF545", "13-0980cd6d");
var uiIconRenewalFuture = GetIcon("RenewalFuture", "\uF546", "13-0980cd6d");
var uiIconSplitObject = GetIcon("SplitObject", "\uF547", "13-0980cd6d");
var uiIconBulkUpload = GetIcon("BulkUpload", "\uF548", "13-0980cd6d");
var uiIconDownloadDocument = GetIcon("DownloadDocument", "\uF549", "13-0980cd6d");
var uiIconWaitlistConfirm = GetIcon("WaitlistConfirm", "\uF550", "13-0980cd6d");
var uiIconWaitlistConfirmMirrored = GetIcon("WaitlistConfirmMirrored", "\uF551", "13-0980cd6d");
var uiIconLaptopSecure = GetIcon("LaptopSecure", "\uF552", "13-0980cd6d");
var uiIconDragObject = GetIcon("DragObject", "\uF553", "13-0980cd6d");
var uiIconEntryView = GetIcon("EntryView", "\uF554", "13-0980cd6d");
var uiIconEntryDecline = GetIcon("EntryDecline", "\uF555", "13-0980cd6d");
var uiIconContactCardSettings = GetIcon("ContactCardSettings", "\uF556", "13-0980cd6d");
var uiIconContactCardSettingsMirrored = GetIcon("ContactCardSettingsMirrored", "\uF557", "13-0980cd6d");
var uiIconCalendarSettings = GetIcon("CalendarSettings", "\uF558", "13-0980cd6d");
var uiIconCalendarSettingsMirrored = GetIcon("CalendarSettingsMirrored", "\uF559", "13-0980cd6d");
var uiIconHardDriveLock = GetIcon("HardDriveLock", "\uF55A", "13-0980cd6d");
var uiIconHardDriveUnlock = GetIcon("HardDriveUnlock", "\uF55B", "13-0980cd6d");
var uiIconAccountManagement = GetIcon("AccountManagement", "\uF55C", "13-0980cd6d");
var uiIconTransitionPop = GetIcon("TransitionPop", "\uF5B2", "13-0980cd6d");
var uiIconTransitionPush = GetIcon("TransitionPush", "\uF5B3", "13-0980cd6d");
var uiIconTransitionEffect = GetIcon("TransitionEffect", "\uF5B4", "13-0980cd6d");
var uiIconLookupEntities = GetIcon("LookupEntities", "\uF5B5", "13-0980cd6d");
var uiIconExploreData = GetIcon("ExploreData", "\uF5B6", "13-0980cd6d");
var uiIconAddBookmark = GetIcon("AddBookmark", "\uF5B7", "13-0980cd6d");
var uiIconSearchBookmark = GetIcon("SearchBookmark", "\uF5B8", "13-0980cd6d");
var uiIconDrillThrough = GetIcon("DrillThrough", "\uF5B9", "13-0980cd6d");
var uiIconMasterDatabase = GetIcon("MasterDatabase", "\uF5BA", "13-0980cd6d");
var uiIconCertifiedDatabase = GetIcon("CertifiedDatabase", "\uF5BB", "13-0980cd6d");
var uiIconMaximumValue = GetIcon("MaximumValue", "\uF5BC", "13-0980cd6d");
var uiIconMinimumValue = GetIcon("MinimumValue", "\uF5BD", "13-0980cd6d");
var uiIconVisualStudioIDELogo32 = GetIcon("VisualStudioIDELogo32", "\uF5D0", "13-0980cd6d");
var uiIconPasteAsText = GetIcon("PasteAsText", "\uF5D5", "13-0980cd6d");
var uiIconPasteAsCode = GetIcon("PasteAsCode", "\uF5D6", "13-0980cd6d");
var uiIconBrowserTab = GetIcon("BrowserTab", "\uF5D7", "13-0980cd6d");
var uiIconBrowserTabScreenshot = GetIcon("BrowserTabScreenshot", "\uF5D8", "13-0980cd6d");
var uiIconDesktopScreenshot = GetIcon("DesktopScreenshot", "\uF5D9", "13-0980cd6d");
var uiIconFileYML = GetIcon("FileYML", "\uF5DA", "13-0980cd6d");
var uiIconClipboardSolid = GetIcon("ClipboardSolid", "\uF5DC", "13-0980cd6d");
var uiIconAnalyticsView = GetIcon("AnalyticsView", "\uF5F1", "13-0980cd6d");
var uiIconLeave = GetIcon("Leave", "\uF627", "13-0980cd6d");
var uiIconTrending12 = GetIcon("Trending12", "\uF62D", "13-0980cd6d");
var uiIconBlocked12 = GetIcon("Blocked12", "\uF62E", "13-0980cd6d");
var uiIconWarning12 = GetIcon("Warning12", "\uF62F", "13-0980cd6d");
var uiIconCheckedOutByOther12 = GetIcon("CheckedOutByOther12", "\uF630", "13-0980cd6d");
var uiIconCheckedOutByYou12 = GetIcon("CheckedOutByYou12", "\uF631", "13-0980cd6d");
var uiIconCircleShapeSolid = GetIcon("CircleShapeSolid", "\uF63C", "13-0980cd6d");
var uiIconSquareShapeSolid = GetIcon("SquareShapeSolid", "\uF63D", "13-0980cd6d");
var uiIconTriangleShapeSolid = GetIcon("TriangleShapeSolid", "\uF63E", "13-0980cd6d");
var uiIconDropShapeSolid = GetIcon("DropShapeSolid", "\uF63F", "13-0980cd6d");
var uiIconRectangleShapeSolid = GetIcon("RectangleShapeSolid", "\uF640", "13-0980cd6d");
var uiIconInsertColumnsLeft = GetIcon("InsertColumnsLeft", "\uF64A", "13-0980cd6d");
var uiIconInsertColumnsRight = GetIcon("InsertColumnsRight", "\uF64B", "13-0980cd6d");
var uiIconInsertRowsAbove = GetIcon("InsertRowsAbove", "\uF64C", "13-0980cd6d");
var uiIconInsertRowsBelow = GetIcon("InsertRowsBelow", "\uF64D", "13-0980cd6d");
var uiIconDeleteColumns = GetIcon("DeleteColumns", "\uF64E", "13-0980cd6d");
var uiIconDeleteRows = GetIcon("DeleteRows", "\uF64F", "13-0980cd6d");
var uiIconDeleteRowsMirrored = GetIcon("DeleteRowsMirrored", "\uF650", "14-eb4d1150");
var uiIconDeleteTable = GetIcon("DeleteTable", "\uF651", "14-eb4d1150");
var uiIconVersionControlPush = GetIcon("VersionControlPush", "\uF664", "14-eb4d1150");
var uiIconWhiteBoardApp16 = GetIcon("WhiteBoardApp16", "\uF673", "14-eb4d1150");
var uiIconWhiteBoardApp32 = GetIcon("WhiteBoardApp32", "\uF674", "14-eb4d1150");
var uiIconInsertSignatureLine = GetIcon("InsertSignatureLine", "\uF677", "14-eb4d1150");
var uiIconArrangeByFrom = GetIcon("ArrangeByFrom", "\uF678", "14-eb4d1150");
var uiIconPhishing = GetIcon("Phishing", "\uF679", "14-eb4d1150");
var uiIconCreateMailRule = GetIcon("CreateMailRule", "\uF67A", "14-eb4d1150");
var uiIconPublishCourse = GetIcon("PublishCourse", "\uF699", "14-eb4d1150");
var uiIconDictionaryRemove = GetIcon("DictionaryRemove", "\uF69A", "14-eb4d1150");
var uiIconUserRemove = GetIcon("UserRemove", "\uF69B", "14-eb4d1150");
var uiIconUserEvent = GetIcon("UserEvent", "\uF69C", "14-eb4d1150");
var uiIconEncryption = GetIcon("Encryption", "\uF69D", "14-eb4d1150");
var uiIconD365TalentLearn = GetIcon("D365TalentLearn", "\uF6BB", "14-eb4d1150");
var uiIconD365TalentInsight = GetIcon("D365TalentInsight", "\uF6BC", "14-eb4d1150");
var uiIconD365TalentHRCore = GetIcon("D365TalentHRCore", "\uF6BD", "14-eb4d1150");
var uiIconBacklogList = GetIcon("BacklogList", "\uF6BF", "14-eb4d1150");
var uiIconButtonControl = GetIcon("ButtonControl", "\uF6C0", "14-eb4d1150");
var uiIconTableGroup = GetIcon("TableGroup", "\uF6D9", "14-eb4d1150");
var uiIconMountainClimbing = GetIcon("MountainClimbing", "\uF6DB", "14-eb4d1150");
var uiIconTagUnknown = GetIcon("TagUnknown", "\uF6DF", "14-eb4d1150");
var uiIconTagUnknownMirror = GetIcon("TagUnknownMirror", "\uF6E0", "14-eb4d1150");
var uiIconTagUnknown12 = GetIcon("TagUnknown12", "\uF6E1", "14-eb4d1150");
var uiIconTagUnknown12Mirror = GetIcon("TagUnknown12Mirror", "\uF6E2", "14-eb4d1150");
var uiIconLink12 = GetIcon("Link12", "\uF6E3", "14-eb4d1150");
var uiIconPresentation = GetIcon("Presentation", "\uF6E4", "14-eb4d1150");
var uiIconPresentation12 = GetIcon("Presentation12", "\uF6E5", "14-eb4d1150");
var uiIconLock12 = GetIcon("Lock12", "\uF6E6", "14-eb4d1150");
var uiIconBuildDefinition = GetIcon("BuildDefinition", "\uF6E9", "14-eb4d1150");
var uiIconReleaseDefinition = GetIcon("ReleaseDefinition", "\uF6EA", "14-eb4d1150");
var uiIconSaveTemplate = GetIcon("SaveTemplate", "\uF6EC", "14-eb4d1150");
var uiIconUserGauge = GetIcon("UserGauge", "\uF6ED", "14-eb4d1150");
var uiIconBlockedSiteSolid12 = GetIcon("BlockedSiteSolid12", "\uF70A", "14-eb4d1150");
var uiIconTagSolid = GetIcon("TagSolid", "\uF70E", "14-eb4d1150");
var uiIconOfficeChat = GetIcon("OfficeChat", "\uF70F", "14-eb4d1150");
var uiIconOfficeChatSolid = GetIcon("OfficeChatSolid", "\uF710", "14-eb4d1150");
var uiIconMailSchedule = GetIcon("MailSchedule", "\uF72E", "14-eb4d1150");

export { uiButton, uiOverlay, uiDialog, uiCallout, uiSearchbox, uiContextualMenu, uiContextualMenuItem, uiCheckbox, uiChoiceField, uiChoiceFieldGroup, uiDropdown, uiDropdownItem, uiPanel, uiSpinner, uiLabel, uiMessagebar, uiPersona, uiTextfield, uiIconGlobalNavButton, uiIconChevronDown, uiIconChevronUp, uiIconEdit, uiIconAdd, uiIconCancel, uiIconMore, uiIconSettings, uiIconMail, uiIconFilter, uiIconSearch, uiIconShare, uiIconBlockedSite, uiIconFavoriteStar, uiIconFavoriteStarFill, uiIconCheckMark, uiIconDelete, uiIconChevronLeft, uiIconChevronRight, uiIconCalendar, uiIconMegaphone, uiIconUndo, uiIconFlag, uiIconPage, uiIconPinned, uiIconView, uiIconClear, uiIconDownload, uiIconUpload, uiIconFolder, uiIconSort, uiIconAlignRight, uiIconAlignLeft, uiIconTag, uiIconAddFriend, uiIconInfo, uiIconSortLines, uiIconList, uiIconCircleRing, uiIconHeart, uiIconHeartFill, uiIconTiles, uiIconEmbed, uiIconGlimmer, uiIconAscending, uiIconDescending, uiIconSortUp, uiIconSortDown, uiIconSyncToPC, uiIconLargeGrid, uiIconSkypeCheck, uiIconSkypeClock, uiIconSkypeMinus, uiIconClearFilter, uiIconFlow, uiIconStatusCircleCheckmark, uiIconMoreVertical, uiIconDecreaseIndentLegacy, uiIconIncreaseIndentLegacy, uiIconSizeLegacy, uiIconInternetSharing, uiIconBrightness, uiIconMapPin, uiIconAirplane, uiIconTablet, uiIconQuickNote, uiIconVideo, uiIconPeople, uiIconPhone, uiIconPin, uiIconShop, uiIconStop, uiIconLink, uiIconAllApps, uiIconZoom, uiIconZoomOut, uiIconMicrophone, uiIconCamera, uiIconAttach, uiIconSend, uiIconFavoriteList, uiIconPageSolid, uiIconForward, uiIconBack, uiIconRefresh, uiIconLock, uiIconReportHacked, uiIconEMI, uiIconMiniLink, uiIconBlocked, uiIconReadingMode, uiIconFavicon, uiIconRemove, uiIconCheckbox, uiIconCheckboxComposite, uiIconCheckboxIndeterminate, uiIconCheckboxCompositeReversed, uiIconBackToWindow, uiIconFullScreen, uiIconPrint, uiIconUp, uiIconDown, uiIconOEM, uiIconSave, uiIconCloud, uiIconCommandPrompt, uiIconSad, uiIconSIPMove, uiIconEraseTool, uiIconGripperTool, uiIconDialpad, uiIconPageLeft, uiIconPageRight, uiIconMultiSelect, uiIconKeyboardClassic, uiIconPlay, uiIconPause, uiIconEmoji2, uiIconGripperBarHorizontal, uiIconSystem, uiIconPersonalize, uiIconSearchAndApps, uiIconGlobe, uiIconContactInfo, uiIconUnpin, uiIconContact, uiIconMemo, uiIconPaste, uiIconWindowsLogo, uiIconError, uiIconGripperBarVertical, uiIconUnlock, uiIconAutoEnhanceOn, uiIconAutoEnhanceOff, uiIconColor, uiIconSaveAs, uiIconLight, uiIconFilters, uiIconAspectRatio, uiIconContrast, uiIconRedo, uiIconCrop, uiIconPhotoCollection, uiIconAlbum, uiIconRotate, uiIconPanoIndicator, uiIconRedEye, uiIconThumbnailView, uiIconPackage, uiIconWarning, uiIconFinancial, uiIconEducation, uiIconShoppingCart, uiIconTrain, uiIconMove, uiIconTouchPointer, uiIconMerge, uiIconTurnRight, uiIconFerry, uiIconHighlight, uiIconPowerButton, uiIconTab, uiIconAdmin, uiIconTVMonitor, uiIconSpeakers, uiIconStackIndicator, uiIconNav2DMapView, uiIconCar, uiIconBus, uiIconEatDrink, uiIconLocationCircle, uiIconHome, uiIconSwitcherStartEnd, uiIconParkingLocation, uiIconIncidentTriangle, uiIconTouch, uiIconMapDirections, uiIconCaretHollow, uiIconCaretSolid, uiIconHistory, uiIconLocation, uiIconWork, uiIconRecent, uiIconHotel, uiIconLocationDot, uiIconDictionary, uiIconChromeBack, uiIconFolderOpen, uiIconPinnedFill, uiIconRevToggleKey, uiIconPrevious, uiIconNext, uiIconSync, uiIconHelp, uiIconEmoji, uiIconMailForward, uiIconClosePane, uiIconOpenPane, uiIconPreviewLink, uiIconZoomIn, uiIconBookmarks, uiIconDocument, uiIconProtectedDocument, uiIconOpenInNewWindow, uiIconMailFill, uiIconViewAll, uiIconSwitch, uiIconRename, uiIconRemote, uiIconSelectAll, uiIconOrientation, uiIconImport, uiIconPicture, uiIconChromeClose, uiIconShowResults, uiIconMessage, uiIconCalendarDay, uiIconCalendarWeek, uiIconMailReplyAll, uiIconRead, uiIconCut, uiIconPaymentCard, uiIconCopy, uiIconImportant, uiIconMailReply, uiIconGotoToday, uiIconFont, uiIconFontColor, uiIconFolderFill, uiIconPermissions, uiIconDisableUpdates, uiIconUnfavorite, uiIconItalic, uiIconUnderline, uiIconBold, uiIconMoveToFolder, uiIconDislike, uiIconLike, uiIconAlignCenter, uiIconOpenFile, uiIconFontDecrease, uiIconFontIncrease, uiIconFontSize, uiIconCellPhone, uiIconCalculator, uiIconLibrary, uiIconPostUpdate, uiIconNewFolder, uiIconCalendarReply, uiIconUnsyncFolder, uiIconSyncFolder, uiIconBlockContact, uiIconAccept, uiIconBulletedList, uiIconPreview, uiIconNews, uiIconChat, uiIconGroup, uiIconWorld, uiIconComment, uiIconDockLeft, uiIconDockRight, uiIconRepair, uiIconAccounts, uiIconRadioBullet, uiIconStopwatch, uiIconClock, uiIconWorldClock, uiIconAlarmClock, uiIconPhoto, uiIconHospital, uiIconTimer, uiIconFullCircleMask, uiIconLocationFill, uiIconChromeMinimize, uiIconAnnotation, uiIconFingerprint, uiIconHandwriting, uiIconCompleted, uiIconLabel, uiIconFlickDown, uiIconFlickUp, uiIconFlickLeft, uiIconFlickRight, uiIconMiniExpand, uiIconMiniContract, uiIconStreaming, uiIconMusicInCollection, uiIconOneDriveLogo, uiIconCompassNW, uiIconCode, uiIconLightningBolt, uiIconCalculatorMultiply, uiIconCalculatorAddition, uiIconCalculatorSubtract, uiIconCalculatorEqualTo, uiIconPrintfaxPrinterFile, uiIconCommunications, uiIconHeadset, uiIconHealth, uiIconChevronUpSmall, uiIconChevronDownSmall, uiIconChevronLeftSmall, uiIconChevronRightSmall, uiIconChevronUpMed, uiIconChevronDownMed, uiIconChevronLeftMed, uiIconChevronRightMed, uiIconPC1, uiIconPresenceChickletVideo, uiIconReply, uiIconHalfAlpha, uiIconConstructionCone, uiIconDoubleChevronLeftMed, uiIconVolume0, uiIconVolume1, uiIconVolume2, uiIconVolume3, uiIconChart, uiIconRobot, uiIconManufacturing, uiIconLockSolid, uiIconBidiLtr, uiIconBidiRtl, uiIconRightDoubleQuote, uiIconSunny, uiIconCloudWeather, uiIconCloudy, uiIconPartlyCloudyDay, uiIconPartlyCloudyNight, uiIconClearNight, uiIconRainShowersDay, uiIconRain, uiIconThunderstorms, uiIconRainSnow, uiIconSnow, uiIconBlowingSnow, uiIconFrigid, uiIconFog, uiIconSqualls, uiIconDuststorm, uiIconUnknown, uiIconPrecipitation, uiIconRibbon, uiIconAreaChart, uiIconAssign, uiIconCheckList, uiIconDiagnostic, uiIconGenerate, uiIconLineChart, uiIconEqualizer, uiIconBarChartHorizontal, uiIconBarChartVertical, uiIconFreezing, uiIconProcessing, uiIconSnowShowerDay, uiIconHailDay, uiIconWorkFlow, uiIconHourGlass, uiIconStoreLogoMed20, uiIconTimeSheet, uiIconTriangleSolid, uiIconVideoSolid, uiIconRainShowersNight, uiIconSnowShowerNight, uiIconTeamwork, uiIconHailNight, uiIconPeopleAdd, uiIconGlasses, uiIconDateTime2, uiIconShield, uiIconHeader1, uiIconPageAdd, uiIconNumberedList, uiIconPowerBILogo, uiIconInfo2, uiIconMusicInCollectionFill, uiIconAsterisk, uiIconErrorBadge, uiIconCircleFill, uiIconRecord2, uiIconAllAppsMirrored, uiIconBookmarksMirrored, uiIconBulletedListMirrored, uiIconCaretHollowMirrored, uiIconCaretSolidMirrored, uiIconChromeBackMirrored, uiIconClosePaneMirrored, uiIconDockLeftMirrored, uiIconDoubleChevronLeftMedMirrored, uiIconHelpMirrored, uiIconImportMirrored, uiIconListMirrored, uiIconMailForwardMirrored, uiIconMailReplyMirrored, uiIconMailReplyAllMirrored, uiIconOpenPaneMirrored, uiIconParkingLocationMirrored, uiIconSendMirrored, uiIconShowResultsMirrored, uiIconThumbnailViewMirrored, uiIconDevices3, uiIconLightbulb, uiIconStatusTriangle, uiIconVolumeDisabled, uiIconPuzzle, uiIconEmojiNeutral, uiIconEmojiDisappointed, uiIconHomeSolid, uiIconRinger, uiIconPDF, uiIconHeartBroken, uiIconStoreLogo16, uiIconMultiSelectMirrored, uiIconBroom, uiIconCocktails, uiIconWines, uiIconArticles, uiIconCycling, uiIconDietPlanNotebook, uiIconPill, uiIconExerciseTracker, uiIconHandsFree, uiIconMedical, uiIconRunning, uiIconWeights, uiIconTrackers, uiIconAddNotes, uiIconAllCurrency, uiIconBarChart4, uiIconCirclePlus, uiIconCoffee, uiIconCotton, uiIconMarket, uiIconMoney, uiIconPieDouble, uiIconPieSingle, uiIconRemoveFilter, uiIconSavings, uiIconSell, uiIconStockDown, uiIconStockUp, uiIconLamp, uiIconSource, uiIconMSNVideos, uiIconCricket, uiIconGolf, uiIconBaseball, uiIconSoccer, uiIconMoreSports, uiIconAutoRacing, uiIconCollegeHoops, uiIconCollegeFootball, uiIconProFootball, uiIconProHockey, uiIconRugby, uiIconSubstitutionsIn, uiIconTennis, uiIconArrivals, uiIconDesign, uiIconWebsite, uiIconDrop, uiIconSkiResorts, uiIconSnowflake, uiIconBusSolid, uiIconFerrySolid, uiIconAirplaneSolid, uiIconTrainSolid, uiIconTicket, uiIconDevices4, uiIconAzureLogo, uiIconBingLogo, uiIconMSNLogo, uiIconOutlookLogoInverse, uiIconOfficeLogo, uiIconSkypeLogo, uiIconDoor, uiIconEditMirrored, uiIconGiftCard, uiIconDoubleBookmark, uiIconStatusErrorFull, uiIconCertificate, uiIconFastForward, uiIconRewind, uiIconPhoto2, uiIconOpenSource, uiIconMovers, uiIconCloudDownload, uiIconFamily, uiIconWindDirection, uiIconBug, uiIconSiteScan, uiIconBrowserScreenShot, uiIconF12DevTools, uiIconCSS, uiIconJS, uiIconDeliveryTruck, uiIconReminderPerson, uiIconReminderGroup, uiIconTabletMode, uiIconUmbrella, uiIconNetworkTower, uiIconCityNext, uiIconSection, uiIconOneNoteLogoInverse, uiIconToggleFilled, uiIconToggleBorder, uiIconSliderThumb, uiIconToggleThumb, uiIconDocumentation, uiIconBadge, uiIconGiftbox, uiIconVisualStudioLogo, uiIconExcelLogoInverse, uiIconWordLogoInverse, uiIconPowerPointLogoInverse, uiIconCafe, uiIconSpeedHigh, uiIconCommitments, uiIconThisPC, uiIconMusicNote, uiIconMicOff, uiIconEdgeLogo, uiIconCompletedSolid, uiIconAlbumRemove, uiIconMessageFill, uiIconTabletSelected, uiIconMobileSelected, uiIconLaptopSelected, uiIconTVMonitorSelected, uiIconDeveloperTools, uiIconInsertTextBox, uiIconLowerBrightness, uiIconDOM, uiIconCloudUpload, uiIconScrollUpDown, uiIconDateTime, uiIconEvent, uiIconCake, uiIconOrg, uiIconPartyLeader, uiIconDRM, uiIconCloudAdd, uiIconAppIconDefault, uiIconPhoto2Add, uiIconPhoto2Remove, uiIconPOI, uiIconAddTo, uiIconRadioBtnOff, uiIconRadioBtnOn, uiIconExploreContent, uiIconProduct, uiIconProgressLoopInner, uiIconProgressLoopOuter, uiIconBlocked2, uiIconFangBody, uiIconChatInviteFriend, uiIconCrown, uiIconDiamond, uiIconScaleUp, uiIconFeedback, uiIconSharepointLogoInverse, uiIconYammerLogo, uiIconHide, uiIconUneditable, uiIconReturnToSession, uiIconOpenFolderHorizontal, uiIconCalendarMirrored, uiIconSwayLogoInverse, uiIconOutOfOffice, uiIconTrophy, uiIconReopenPages, uiIconEmojiTabSymbols, uiIconAADLogo, uiIconAccessLogo, uiIconAdminALogoInverse32, uiIconAdminCLogoInverse32, uiIconAdminDLogoInverse32, uiIconAdminELogoInverse32, uiIconAdminLLogoInverse32, uiIconAdminMLogoInverse32, uiIconAdminOLogoInverse32, uiIconAdminPLogoInverse32, uiIconAdminSLogoInverse32, uiIconAdminYLogoInverse32, uiIconDelveLogoInverse, uiIconExchangeLogoInverse, uiIconLyncLogo, uiIconOfficeVideoLogoInverse, uiIconSocialListeningLogo, uiIconVisioLogoInverse, uiIconBalloons, uiIconCat, uiIconMailAlert, uiIconMailCheck, uiIconMailLowImportance, uiIconMailPause, uiIconMailRepeat, uiIconSecurityGroup, uiIconTable, uiIconVoicemailForward, uiIconVoicemailReply, uiIconWaffle, uiIconRemoveEvent, uiIconEventInfo, uiIconForwardEvent, uiIconWipePhone, uiIconAddOnlineMeeting, uiIconJoinOnlineMeeting, uiIconRemoveLink, uiIconPeopleBlock, uiIconPeopleRepeat, uiIconPeopleAlert, uiIconPeoplePause, uiIconTransferCall, uiIconAddPhone, uiIconUnknownCall, uiIconNoteReply, uiIconNoteForward, uiIconNotePinned, uiIconRemoveOccurrence, uiIconTimeline, uiIconEditNote, uiIconCircleHalfFull, uiIconRoom, uiIconUnsubscribe, uiIconSubscribe, uiIconHardDrive, uiIconRecurringTask, uiIconTaskManager, uiIconTaskManagerMirrored, uiIconCombine, uiIconSplit, uiIconDoubleChevronUp, uiIconDoubleChevronLeft, uiIconDoubleChevronRight, uiIconTextBox, uiIconTextField, uiIconNumberField, uiIconDropdown, uiIconBookingsLogo, uiIconClassNotebookLogoInverse, uiIconDelveAnalyticsLogo, uiIconDocsLogoInverse, uiIconDynamics365Logo, uiIconDynamicSMBLogo, uiIconOfficeAssistantLogo, uiIconOfficeStoreLogo, uiIconOneNoteEduLogoInverse, uiIconPlannerLogo, uiIconPowerApps, uiIconSuitcase, uiIconProjectLogoInverse, uiIconCaretLeft8, uiIconCaretRight8, uiIconCaretUp8, uiIconCaretDown8, uiIconCaretLeftSolid8, uiIconCaretRightSolid8, uiIconCaretUpSolid8, uiIconCaretDownSolid8, uiIconClearFormatting, uiIconSuperscript, uiIconSubscript, uiIconStrikethrough, uiIconExport, uiIconExportMirrored, uiIconSingleBookmark, uiIconSingleBookmarkSolid, uiIconDoubleChevronDown, uiIconFollowUser, uiIconReplyAll, uiIconWorkforceManagement, uiIconRecruitmentManagement, uiIconQuestionnaire, uiIconManagerSelfService, uiIconReplyMirrored, uiIconReplyAllMirrored, uiIconMedal, uiIconAddGroup, uiIconQuestionnaireMirrored, uiIconTemporaryUser, uiIconCaretSolid16, uiIconGroupedDescending, uiIconGroupedAscending, uiIconAwayStatus, uiIconMyMoviesTV, uiIconGenericScan, uiIconAustralianRules, uiIconWifiEthernet, uiIconTrackersMirrored, uiIconDateTimeMirrored, uiIconStopSolid, uiIconDoubleChevronUp12, uiIconDoubleChevronDown12, uiIconDoubleChevronLeft12, uiIconDoubleChevronRight12, uiIconCalendarAgenda, uiIconAddEvent, uiIconAssetLibrary, uiIconDataConnectionLibrary, uiIconDocLibrary, uiIconFormLibrary, uiIconFormLibraryMirrored, uiIconReportLibrary, uiIconReportLibraryMirrored, uiIconContactCard, uiIconCustomList, uiIconCustomListMirrored, uiIconIssueTracking, uiIconIssueTrackingMirrored, uiIconPictureLibrary, uiIconOfficeAddinsLogo, uiIconOfflineOneDriveParachute, uiIconOfflineOneDriveParachuteDisabled, uiIconTriangleSolidUp12, uiIconTriangleSolidDown12, uiIconTriangleSolidLeft12, uiIconTriangleSolidRight12, uiIconTriangleUp12, uiIconTriangleDown12, uiIconTriangleLeft12, uiIconTriangleRight12, uiIconArrowUpRight8, uiIconArrowDownRight8, uiIconDocumentSet, uiIconDelveAnalytics, uiIconArrowUpRightMirrored8, uiIconArrowDownRightMirrored8, uiIconCompanyDirectory, uiIconCompanyDirectoryMirrored, uiIconOneDriveAdd, uiIconProfileSearch, uiIconHeader2, uiIconHeader3, uiIconHeader4, uiIconEyedropper, uiIconMarketDown, uiIconCalendarWorkWeek, uiIconSidePanel, uiIconGlobeFavorite, uiIconCaretTopLeftSolid8, uiIconCaretTopRightSolid8, uiIconViewAll2, uiIconDocumentReply, uiIconPlayerSettings, uiIconReceiptForward, uiIconReceiptReply, uiIconReceiptCheck, uiIconFax, uiIconRecurringEvent, uiIconReplyAlt, uiIconReplyAllAlt, uiIconEditStyle, uiIconEditMail, uiIconLifesaver, uiIconLifesaverLock, uiIconInboxCheck, uiIconFolderSearch, uiIconCollapseMenu, uiIconExpandMenu, uiIconBoards, uiIconSunAdd, uiIconSunQuestionMark, uiIconLandscapeOrientation, uiIconDocumentSearch, uiIconPublicCalendar, uiIconPublicContactCard, uiIconPublicEmail, uiIconPublicFolder, uiIconWordDocument, uiIconPowerPointDocument, uiIconExcelDocument, uiIconGroupedList, uiIconClassroomLogo, uiIconSections, uiIconEditPhoto, uiIconStarburst, uiIconShareiOS, uiIconAirTickets, uiIconPencilReply, uiIconTiles2, uiIconSkypeCircleCheck, uiIconSkypeCircleClock, uiIconSkypeCircleMinus, uiIconSkypeMessage, uiIconClosedCaption, uiIconATPLogo, uiIconOfficeFormsLogoInverse, uiIconRecycleBin, uiIconEmptyRecycleBin, uiIconHide2, uiIconBreadcrumb, uiIconBirthdayCake, uiIconTimeEntry, uiIconPageEdit, uiIconPageRemove, uiIconDatabase, uiIconEditContact, uiIconConnectContacts, uiIconActivateOrders, uiIconDeactivateOrders, uiIconDocumentManagement, uiIconCRMReport, uiIconZipFolder, uiIconSurveyQuestions, uiIconTextDocument, uiIconTextDocumentShared, uiIconPageCheckedOut, uiIconSaveAndClose, uiIconScript, uiIconArchive, uiIconActivityFeed, uiIconEventDate, uiIconArrowUpRight, uiIconCaretRight, uiIconSetAction, uiIconCaretSolidLeft, uiIconCaretSolidDown, uiIconCaretSolidRight, uiIconCaretSolidUp, uiIconPowerAppsLogo, uiIconPowerApps2Logo, uiIconSearchIssue, uiIconSearchIssueMirrored, uiIconFabricAssetLibrary, uiIconFabricDataConnectionLibrary, uiIconFabricDocLibrary, uiIconFabricFormLibrary, uiIconFabricFormLibraryMirrored, uiIconFabricReportLibrary, uiIconFabricReportLibraryMirrored, uiIconFabricPublicFolder, uiIconFabricFolderSearch, uiIconFabricMovetoFolder, uiIconFabricUnsyncFolder, uiIconFabricSyncFolder, uiIconFabricOpenFolderHorizontal, uiIconFabricFolder, uiIconFabricFolderFill, uiIconFabricNewFolder, uiIconFabricPictureLibrary, uiIconAddFavorite, uiIconAddFavoriteFill, uiIconBufferTimeBefore, uiIconBufferTimeAfter, uiIconBufferTimeBoth, uiIconCannedChat, uiIconSkypeForBusinessLogo, uiIconPageCheckedin, uiIconReadOutLoud, uiIconCaretBottomLeftSolid8, uiIconCaretBottomRightSolid8, uiIconFolderHorizontal, uiIconMicrosoftStaffhubLogo, uiIconGiftboxOpen, uiIconStatusCircleOuter, uiIconStatusCircleInner, uiIconStatusCircleRing, uiIconStatusTriangleOuter, uiIconStatusTriangleInner, uiIconStatusTriangleExclamation, uiIconStatusCircleExclamation, uiIconStatusCircleErrorX, uiIconStatusCircleInfo, uiIconStatusCircleBlock2, uiIconStatusCircleQuestionMark, uiIconToll, uiIconExploreContentSingle, uiIconCollapseContent, uiIconCollapseContentSingle, uiIconInfoSolid, uiIconProgressRingDots, uiIconCaloriesAdd, uiIconBranchFork, uiIconMobileReport, uiIconHardDriveGroup, uiIconFastMode, uiIconToggleOn, uiIconToggleOff, uiIconTrophy2, uiIconBucketColor, uiIconBucketColorFill, uiIconTaskboard, uiIconSingleColumn, uiIconDoubleColumn, uiIconTripleColumn, uiIconColumnLeftTwoThirds, uiIconColumnRightTwoThirds, uiIconAccessLogoFill, uiIconAnalyticsLogo, uiIconAnalyticsQuery, uiIconNewAnalyticsQuery, uiIconAnalyticsReport, uiIconWordLogo, uiIconWordLogoFill, uiIconExcelLogo, uiIconExcelLogoFill, uiIconOneNoteLogo, uiIconOneNoteLogoFill, uiIconOutlookLogo, uiIconOutlookLogoFill, uiIconPowerPointLogo, uiIconPowerPointLogoFill, uiIconPublisherLogo, uiIconPublisherLogoFill, uiIconScheduleEventAction, uiIconFlameSolid, uiIconServerProcesses, uiIconServer, uiIconSaveAll, uiIconLinkedInLogo, uiIconDecimals, uiIconSidePanelMirrored, uiIconProtectRestrict, uiIconUnknownMirrored, uiIconPublicContactCardMirrored, uiIconGridViewSmall, uiIconGridViewMedium, uiIconGridViewLarge, uiIconStep, uiIconStepInsert, uiIconStepShared, uiIconStepSharedAdd, uiIconStepSharedInsert, uiIconViewDashboard, uiIconViewList, uiIconViewListGroup, uiIconViewListTree, uiIconTriggerAuto, uiIconTriggerUser, uiIconPivotChart, uiIconStackedBarChart, uiIconStackedLineChart, uiIconBuildQueue, uiIconBuildQueueNew, uiIconUserFollowed, uiIconContactLink, uiIconStack, uiIconBullseye, uiIconVennDiagram, uiIconFiveTileGrid, uiIconFocalPoint, uiIconRingerRemove, uiIconTeamsLogoInverse, uiIconTeamsLogo, uiIconTeamsLogoFill, uiIconSkypeForBusinessLogoFill, uiIconSharepointLogo, uiIconSharepointLogoFill, uiIconDelveLogo, uiIconDelveLogoFill, uiIconOfficeVideoLogo, uiIconOfficeVideoLogoFill, uiIconExchangeLogo, uiIconExchangeLogoFill, uiIconDocumentApproval, uiIconCloneToDesktop, uiIconInstallToDrive, uiIconBlur, uiIconBuild, uiIconProcessMetaTask, uiIconBranchFork2, uiIconBranchLocked, uiIconBranchCommit, uiIconBranchCompare, uiIconBranchMerge, uiIconBranchPullRequest, uiIconBranchSearch, uiIconBranchShelveset, uiIconRawSource, uiIconMergeDuplicate, uiIconRowsGroup, uiIconRowsChild, uiIconDeploy, uiIconRedeploy, uiIconServerEnviroment, uiIconVisioDiagram, uiIconHighlightMappedShapes, uiIconTextCallout, uiIconIconSetsFlag, uiIconVisioLogo, uiIconVisioLogoFill, uiIconVisioDocument, uiIconTimelineProgress, uiIconTimelineDelivery, uiIconBacklog, uiIconTeamFavorite, uiIconTaskGroup, uiIconTaskGroupMirrored, uiIconScopeTemplate, uiIconAssessmentGroupTemplate, uiIconNewTeamProject, uiIconCommentAdd, uiIconCommentNext, uiIconCommentPrevious, uiIconShopServer, uiIconLocaleLanguage, uiIconQueryList, uiIconUserSync, uiIconUserPause, uiIconStreamingOff, uiIconArrowTallUpLeft, uiIconArrowTallUpRight, uiIconArrowTallDownLeft, uiIconArrowTallDownRight, uiIconFieldEmpty, uiIconFieldFilled, uiIconFieldChanged, uiIconFieldNotChanged, uiIconRingerOff, uiIconPlayResume, uiIconBulletedList2, uiIconBulletedList2Mirrored, uiIconImageCrosshair, uiIconGitGraph, uiIconRepo, uiIconRepoSolid, uiIconFolderQuery, uiIconFolderList, uiIconFolderListMirrored, uiIconLocationOutline, uiIconPOISolid, uiIconCalculatorNotEqualTo, uiIconBoxSubtractSolid, uiIconBoxAdditionSolid, uiIconBoxMultiplySolid, uiIconBoxPlaySolid, uiIconBoxCheckmarkSolid, uiIconCirclePauseSolid, uiIconCirclePause, uiIconMSNVideosSolid, uiIconCircleStopSolid, uiIconCircleStop, uiIconNavigateBack, uiIconNavigateBackMirrored, uiIconNavigateForward, uiIconNavigateForwardMirrored, uiIconUnknownSolid, uiIconUnknownMirroredSolid, uiIconCircleAddition, uiIconCircleAdditionSolid, uiIconFilePDB, uiIconFileTemplate, uiIconFileSQL, uiIconFileJAVA, uiIconFileASPX, uiIconFileCSS, uiIconFileSass, uiIconFileLess, uiIconFileHTML, uiIconJavaScriptLanguage, uiIconCSharpLanguage, uiIconCSharp, uiIconVisualBasicLanguage, uiIconVB, uiIconCPlusPlusLanguage, uiIconCPlusPlus, uiIconFSharpLanguage, uiIconFSharp, uiIconTypeScriptLanguage, uiIconPythonLanguage, uiIconPY, uiIconCoffeeScript, uiIconMarkDownLanguage, uiIconFullWidth, uiIconFullWidthEdit, uiIconPlug, uiIconPlugSolid, uiIconPlugConnected, uiIconPlugDisconnected, uiIconUnlockSolid, uiIconVariable, uiIconParameter, uiIconCommentUrgent, uiIconStoryboard, uiIconDiffInline, uiIconDiffSideBySide, uiIconImageDiff, uiIconImagePixel, uiIconFileBug, uiIconFileCode, uiIconFileComment, uiIconBusinessHoursSign, uiIconFileImage, uiIconFileSymlink, uiIconAutoFillTemplate, uiIconWorkItem, uiIconWorkItemBug, uiIconLogRemove, uiIconColumnOptions, uiIconPackages, uiIconBuildIssue, uiIconAssessmentGroup, uiIconVariableGroup, uiIconFullHistory, uiIconSingleColumnEdit, uiIconDoubleColumnEdit, uiIconTripleColumnEdit, uiIconColumnLeftTwoThirdsEdit, uiIconColumnRightTwoThirdsEdit, uiIconStreamLogo, uiIconPassiveAuthentication, uiIconAlertSolid, uiIconMegaphoneSolid, uiIconTaskSolid, uiIconConfigurationSolid, uiIconBugSolid, uiIconCrownSolid, uiIconTrophy2Solid, uiIconQuickNoteSolid, uiIconConstructionConeSolid, uiIconPageListSolid, uiIconPageListMirroredSolid, uiIconStarburstSolid, uiIconReadingModeSolid, uiIconSadSolid, uiIconHealthSolid, uiIconShieldSolid, uiIconGiftBoxSolid, uiIconShoppingCartSolid, uiIconMailSolid, uiIconChatSolid, uiIconRibbonSolid, uiIconFinancialSolid, uiIconFinancialMirroredSolid, uiIconHeadsetSolid, uiIconPermissionsSolid, uiIconParkingSolid, uiIconParkingMirroredSolid, uiIconDiamondSolid, uiIconAsteriskSolid, uiIconOfflineStorageSolid, uiIconBankSolid, uiIconDecisionSolid, uiIconParachute, uiIconParachuteSolid, uiIconFiltersSolid, uiIconColorSolid, uiIconReviewSolid, uiIconReviewRequestSolid, uiIconReviewRequestMirroredSolid, uiIconReviewResponseSolid, uiIconFeedbackRequestSolid, uiIconFeedbackRequestMirroredSolid, uiIconFeedbackResponseSolid, uiIconWorkItemBar, uiIconWorkItemBarSolid, uiIconSeparator, uiIconNavigateExternalInline, uiIconPlanView, uiIconTimelineMatrixView, uiIconEngineeringGroup, uiIconProjectCollection, uiIconCaretBottomRightCenter8, uiIconCaretBottomLeftCenter8, uiIconCaretTopRightCenter8, uiIconCaretTopLeftCenter8, uiIconDonutChart, uiIconChevronUnfold10, uiIconChevronFold10, uiIconDoubleChevronDown8, uiIconDoubleChevronUp8, uiIconDoubleChevronLeft8, uiIconDoubleChevronRight8, uiIconChevronDownEnd6, uiIconChevronUpEnd6, uiIconChevronLeftEnd6, uiIconChevronRightEnd6, uiIconContextMenu, uiIconAzureAPIManagement, uiIconAzureServiceEndpoint, uiIconVSTSLogo, uiIconVSTSAltLogo1, uiIconVSTSAltLogo2, uiIconFileTypeSolution, uiIconWordLogoInverse16, uiIconWordLogo16, uiIconWordLogoFill16, uiIconPowerPointLogoInverse16, uiIconPowerPointLogo16, uiIconPowerPointLogoFill16, uiIconExcelLogoInverse16, uiIconExcelLogo16, uiIconExcelLogoFill16, uiIconOneNoteLogoInverse16, uiIconOneNoteLogo16, uiIconOneNoteLogoFill16, uiIconOutlookLogoInverse16, uiIconOutlookLogo16, uiIconOutlookLogoFill16, uiIconPublisherLogoInverse16, uiIconPublisherLogo16, uiIconPublisherLogoFill16, uiIconVisioLogoInverse16, uiIconVisioLogo16, uiIconVisioLogoFill16, uiIconTestBeaker, uiIconTestBeakerSolid, uiIconTestExploreSolid, uiIconTestAutoSolid, uiIconTestUserSolid, uiIconTestImpactSolid, uiIconTestPlan, uiIconTestStep, uiIconTestParameter, uiIconTestSuite, uiIconTestCase, uiIconSprint, uiIconSignOut, uiIconTriggerApproval, uiIconRocket, uiIconAzureKeyVault, uiIconTransition, uiIconLikeSolid, uiIconDislikeSolid, uiIconUnSetColor, uiIconDeclineCall, uiIconRectangularClipping, uiIconTeamsLogo16, uiIconTeamsLogoFill16, uiIconSpacer, uiIconSkypeLogo16, uiIconSkypeForBusinessLogo16, uiIconSkypeForBusinessLogoFill16, uiIconFilterSolid, uiIconMailUndelivered, uiIconMailTentative, uiIconMailTentativeMirrored, uiIconMailReminder, uiIconReceiptUndelivered, uiIconReceiptTentative, uiIconReceiptTentativeMirrored, uiIconInbox, uiIconIRMReply, uiIconIRMReplyMirrored, uiIconIRMForward, uiIconIRMForwardMirrored, uiIconVoicemailIRM, uiIconEventAccepted, uiIconEventTentative, uiIconEventTentativeMirrored, uiIconEventDeclined, uiIconIDBadge, uiIconBackgroundColor, uiIconOfficeFormsLogoInverse16, uiIconOfficeFormsLogo, uiIconOfficeFormsLogoFill, uiIconOfficeFormsLogo16, uiIconOfficeFormsLogoFill16, uiIconOfficeFormsLogoInverse24, uiIconOfficeFormsLogo24, uiIconOfficeFormsLogoFill24, uiIconPageLock, uiIconNotExecuted, uiIconNotImpactedSolid, uiIconFieldReadOnly, uiIconFieldRequired, uiIconBacklogBoard, uiIconExternalBuild, uiIconExternalTFVC, uiIconExternalXAML, uiIconIssueSolid, uiIconDefectSolid, uiIconLadybugSolid, uiIconNugetLogo, uiIconTFVCLogo, uiIconProjectLogo32, uiIconProjectLogoFill32, uiIconProjectLogo16, uiIconProjectLogoFill16, uiIconSwayLogo32, uiIconSwayLogoFill32, uiIconSwayLogo16, uiIconSwayLogoFill16, uiIconClassNotebookLogo32, uiIconClassNotebookLogoFill32, uiIconClassNotebookLogo16, uiIconClassNotebookLogoFill16, uiIconClassNotebookLogoInverse32, uiIconClassNotebookLogoInverse16, uiIconStaffNotebookLogo32, uiIconStaffNotebookLogoFill32, uiIconStaffNotebookLogo16, uiIconStaffNotebookLogoFill16, uiIconStaffNotebookLogoInverted32, uiIconStaffNotebookLogoInverted16, uiIconKaizalaLogo, uiIconTaskLogo, uiIconProtectionCenterLogo32, uiIconGallatinLogo, uiIconGlobe2, uiIconGuitar, uiIconBreakfast, uiIconBrunch, uiIconBeerMug, uiIconVacation, uiIconTeeth, uiIconTaxi, uiIconChopsticks, uiIconSyncOccurence, uiIconUnsyncOccurence, uiIconPrimaryCalendar, uiIconSearchCalendar, uiIconVideoOff, uiIconMicrosoftFlowLogo, uiIconBusinessCenterLogo, uiIconToDoLogoBottom, uiIconToDoLogoTop, uiIconEditSolid12, uiIconEditSolidMirrored12, uiIconUneditableSolid12, uiIconUneditableSolidMirrored12, uiIconUneditableMirrored, uiIconAdminALogo32, uiIconAdminALogoFill32, uiIconToDoLogoInverse, uiIconSnooze, uiIconWaffleOffice365, uiIconImageSearch, uiIconNewsSearch, uiIconVideoSearch, uiIconR, uiIconFontColorA, uiIconFontColorSwatch, uiIconLightWeight, uiIconNormalWeight, uiIconSemiboldWeight, uiIconGroupObject, uiIconUngroupObject, uiIconAlignHorizontalLeft, uiIconAlignHorizontalCenter, uiIconAlignHorizontalRight, uiIconAlignVerticalTop, uiIconAlignVerticalCenter, uiIconAlignVerticalBottom, uiIconHorizontalDistributeCenter, uiIconVerticalDistributeCenter, uiIconEllipse, uiIconLine, uiIconOctagon, uiIconHexagon, uiIconPentagon, uiIconRightTriangle, uiIconHalfCircle, uiIconQuarterCircle, uiIconThreeQuarterCircle, uiIcon6PointStar, uiIcon12PointStar, uiIconArrangeBringToFront, uiIconArrangeSendToBack, uiIconArrangeSendBackward, uiIconArrangeBringForward, uiIconBorderDash, uiIconBorderDot, uiIconLineStyle, uiIconLineThickness, uiIconWindowEdit, uiIconHintText, uiIconMediaAdd, uiIconAnchorLock, uiIconAutoHeight, uiIconChartSeries, uiIconChartXAngle, uiIconChartYAngle, uiIconCombobox, uiIconLineSpacing, uiIconPadding, uiIconPaddingTop, uiIconPaddingBottom, uiIconPaddingLeft, uiIconPaddingRight, uiIconNavigationFlipper, uiIconAlignJustify, uiIconTextOverflow, uiIconVisualsFolder, uiIconVisualsStore, uiIconPictureCenter, uiIconPictureFill, uiIconPicturePosition, uiIconPictureStretch, uiIconPictureTile, uiIconSlider, uiIconSliderHandleSize, uiIconDefaultRatio, uiIconNumberSequence, uiIconGUID, uiIconReportAdd, uiIconDashboardAdd, uiIconMapPinSolid, uiIconWebPublish, uiIconPieSingleSolid, uiIconBlockedSolid, uiIconDrillDown, uiIconDrillDownSolid, uiIconDrillExpand, uiIconDrillShow, uiIconOneDriveFolder16, uiIconFunctionalManagerDashboard, uiIconBIDashboard, uiIconCodeEdit, uiIconRenewalCurrent, uiIconRenewalFuture, uiIconSplitObject, uiIconBulkUpload, uiIconDownloadDocument, uiIconWaitlistConfirm, uiIconWaitlistConfirmMirrored, uiIconLaptopSecure, uiIconDragObject, uiIconEntryView, uiIconEntryDecline, uiIconContactCardSettings, uiIconContactCardSettingsMirrored, uiIconCalendarSettings, uiIconCalendarSettingsMirrored, uiIconHardDriveLock, uiIconHardDriveUnlock, uiIconAccountManagement, uiIconTransitionPop, uiIconTransitionPush, uiIconTransitionEffect, uiIconLookupEntities, uiIconExploreData, uiIconAddBookmark, uiIconSearchBookmark, uiIconDrillThrough, uiIconMasterDatabase, uiIconCertifiedDatabase, uiIconMaximumValue, uiIconMinimumValue, uiIconVisualStudioIDELogo32, uiIconPasteAsText, uiIconPasteAsCode, uiIconBrowserTab, uiIconBrowserTabScreenshot, uiIconDesktopScreenshot, uiIconFileYML, uiIconClipboardSolid, uiIconAnalyticsView, uiIconLeave, uiIconTrending12, uiIconBlocked12, uiIconWarning12, uiIconCheckedOutByOther12, uiIconCheckedOutByYou12, uiIconCircleShapeSolid, uiIconSquareShapeSolid, uiIconTriangleShapeSolid, uiIconDropShapeSolid, uiIconRectangleShapeSolid, uiIconInsertColumnsLeft, uiIconInsertColumnsRight, uiIconInsertRowsAbove, uiIconInsertRowsBelow, uiIconDeleteColumns, uiIconDeleteRows, uiIconDeleteRowsMirrored, uiIconDeleteTable, uiIconVersionControlPush, uiIconWhiteBoardApp16, uiIconWhiteBoardApp32, uiIconInsertSignatureLine, uiIconArrangeByFrom, uiIconPhishing, uiIconCreateMailRule, uiIconPublishCourse, uiIconDictionaryRemove, uiIconUserRemove, uiIconUserEvent, uiIconEncryption, uiIconD365TalentLearn, uiIconD365TalentInsight, uiIconD365TalentHRCore, uiIconBacklogList, uiIconButtonControl, uiIconTableGroup, uiIconMountainClimbing, uiIconTagUnknown, uiIconTagUnknownMirror, uiIconTagUnknown12, uiIconTagUnknown12Mirror, uiIconLink12, uiIconPresentation, uiIconPresentation12, uiIconLock12, uiIconBuildDefinition, uiIconReleaseDefinition, uiIconSaveTemplate, uiIconUserGauge, uiIconBlockedSiteSolid12, uiIconTagSolid, uiIconOfficeChat, uiIconOfficeChatSolid, uiIconMailSchedule };
