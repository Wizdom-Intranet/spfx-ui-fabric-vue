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

export { uiButton, uiOverlay, uiDialog, uiCallout, uiSearchbox, uiContextualMenu, uiContextualMenuItem, uiCheckbox, uiChoiceField, uiChoiceFieldGroup, uiDropdown, uiDropdownItem, uiPanel, uiSpinner };
