import { loadStyles } from '@microsoft/load-themed-styles';
import Vue from 'vue';
import { fontFace, mergeStyles } from '@uifabric/merge-styles';
import Moment from 'moment';
import debounce from 'lodash.debounce';

function type () {
  var arguments$1 = arguments;

  for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments$1[_key];
  }

  types.push('');
  return {
    props: {
      type: {
        type: String,
        default: '',
        validator: function validator(value) {
          return types.indexOf(value) !== -1;
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var icon = {
  props: {
    icon: String
  },
  computed: {
    iconClass: function iconClass() {
      return _defineProperty({}, "ms-Icon--".concat(this.icon), !!this.icon);
    }
  }
};

var button = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-Button",class:_vm.buttonClass,on:{"click":_vm.clickEvent}},[(_vm.icon && _vm.type == 'hero')?_c('span',{staticClass:"ms-Button-icon"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-Button-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.description && _vm.type == 'compound')?_c('span',{staticClass:"ms-Button-description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e()])},staticRenderFns: [],
  name: 'ou-button',

  mixins: [
    type('primary', 'hero', 'compound', 'small', 'default'),
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

var ContextualHost = function () {
  function ContextualHost(content, direction, targetElement, hasArrow, modifiers, matchTargetWidth, disposalCallback) {
    if (hasArrow === void 0) {
      hasArrow = true;
    }

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
        this._container.classList.add(MODIFIER_BASE + modifiers[i]);
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

    setTimeout(function () {
      _this._setDismissClick();
    }, 100);
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
    var mHLeft = teLeft + teHalf - mHalfWidth;
    mHLeft = mHLeft < mHalfWidth ? teLeft : mHLeft;
    return mHLeft;
  };

  ContextualHost.prototype._calcTop = function (mHeight, teHeight, teTop) {
    var mHalfWidth = mHeight / 2;
    var teHalf = teHeight / 2;
    var mHLeft = teTop + teHalf - mHalfWidth;
    mHLeft = mHLeft < mHalfWidth ? teTop : mHLeft;
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
    var arrowSpace = this._hasArrow ? ARROW_SIZE : 0;

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

          arrowTop = teTop + windowY - mHTop + ARROW_OFFSET;

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
          arrowTop = windowY + teTop - mHTop + ARROW_OFFSET;

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
          arrowTop = this._modalHeight - arrowSpace / 2;
          arrowLeft = Math.max(windowX + teLeft - mHLeft + (teWidth - arrowSpace) / 2, ARROW_OFFSET);

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
          arrowLeft = Math.max(windowX + teLeft - mHLeft + (teWidth - arrowSpace) / 2, ARROW_OFFSET);

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
    } else {
      return "left";
    }
  };

  ContextualHost.prototype._tryPosModalRight = function () {
    var teRight = this._targetElement.getBoundingClientRect().right;

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w - teRight < this._modalWidth) {
      return false;
    } else {
      return "right";
    }
  };

  ContextualHost.prototype._tryPosModalBottom = function () {
    var teBottom = window.innerHeight - this._targetElement.getBoundingClientRect().bottom;

    if (teBottom < this._modalHeight) {
      return false;
    } else {
      return "bottom";
    }
  };

  ContextualHost.prototype._tryPosModalTop = function () {
    var teTop = this._targetElement.getBoundingClientRect().top;

    if (teTop < this._modalHeight) {
      return false;
    } else {
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
      this._modalWidth = this._targetElement.getBoundingClientRect().width + (parseInt(teStyles.marginLeft, 10) + parseInt(teStyles.marginLeft, 10));
    } else {
      this._modalWidth = this._container.getBoundingClientRect().width + (parseInt(_modalStyles.marginLeft, 10) + parseInt(_modalStyles.marginRight, 10));

      this._container.setAttribute("style", "");
    }

    this._modalHeight = this._container.getBoundingClientRect().height + (parseInt(_modalStyles.marginTop, 10) + parseInt(_modalStyles.marginBottom, 10));

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
      } else {
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
}();

var STATE_HIDDEN = "is-hidden";
var CLOSE_BUTTON_CLASS = ".ms-Callout-close";
var MODIFIER_OOBE_CLASS = "ms-Callout--OOBE";

var Callout = function () {
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
    } else {
      this._closeHandler(event);
    }
  };

  return Callout;
}();

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

var CheckBox = function () {
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
    } else {
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
}();

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

var RadioButton = function () {
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
    } else {
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
}();

var ChoiceFieldGroup$1 = function () {
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
    var choiceFieldElements = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton");

    for (var i = 0; i < choiceFieldElements.length; i++) {
      this._choiceFieldComponents[i] = new RadioButton(choiceFieldElements[i]);
    }
  };

  ChoiceFieldGroup.prototype._addListeners = function () {
    document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), false);
  };

  ChoiceFieldGroup.prototype._ChoiceFieldHandler = function (event) {
    var name = event.detail.name;
    var selectedChoice = event.detail.item;

    if (this._choiceFieldGroup.id === name) {
      for (var i = 0; i < this._choiceFieldComponents.length; i++) {
        this._choiceFieldComponents[i].unCheck();
      }

      selectedChoice.check();
    }
  };

  return ChoiceFieldGroup;
}();

var uiChoiceFieldGroup = {_scopeId: 'data-v-9afc786c',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-RadioButton[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; min-height: 36px; position: relative; } .ms-RadioButton .ms-Label[data-v-9afc786c] { font-size: 14px; padding: 0 0 0 26px; cursor: pointer; display: inline-block; } .ms-RadioButton-input[data-v-9afc786c] { position: absolute; opacity: 0; } .ms-RadioButton-field[data-v-9afc786c]::before { content: ''; display: inline-block; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; width: 20px; height: 20px; cursor: pointer; font-weight: normal; position: absolute; box-sizing: border-box; transition-property: border-color; transition-duration: 200ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); border-radius: 50%; } .ms-RadioButton-field[data-v-9afc786c]::after { content: ''; width: 0; height: 0; border-radius: 50%; position: absolute; top: 8px; left: 8px; bottom: 0; right: 0; transition-property: top, left, width, height; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); box-sizing: border-box; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #600000; } } .ms-RadioButton-field[data-v-9afc786c] { display: inline-block; cursor: pointer; margin-top: 8px; position: relative; outline: 0; vertical-align: top; } .ms-RadioButton-field[data-v-9afc786c]:hover::before, .ms-RadioButton-field[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field:hover .ms-Label[data-v-9afc786c], .ms-RadioButton-field:focus .ms-Label[data-v-9afc786c] { color: \"[theme:black, default: #000000]\"; } .ms-RadioButton-field.is-disabled[data-v-9afc786c] { cursor: default; } .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #600000; } } .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #600000; } } .ms-RadioButton-field.is-disabled[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-disabled[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-RadioButton-field.in-focus[data-v-9afc786c]::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border: 2px solid \"[theme:themePrimary, default: #0078d7]\"; background-color: transparent; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: \"[theme:themePrimary, default: #0078d7]\"; top: 5px; left: 5px; width: 10px; height: 10px; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-checked[data-v-9afc786c]:focus::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-RadioButton-field.is-checked.in-focus[data-v-9afc786c]::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-ChoiceFieldGroup[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; margin-bottom: 4px; } .ms-ChoiceFieldGroup .ms-ChoiceFieldGroup-list[data-v-9afc786c] { padding: 0; margin: 0; list-style: none; } ");},
    beforeMount: function beforeMount(){ 
        this.$fabric = { 
            ChoiceFieldGroup : ChoiceFieldGroup$1 
        }; 
    },
    extends :  ChoiceFieldGroup
}

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
	data: function data(){
		return {
			contextualMenuInstance : null
		}
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

var ContextualMenu$1 = function () {
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
      } else {
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
    } else {
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
    !this._isOpen ? this._openContextMenu(event) : this._host.disposeModal();
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
      var _loop_1 = function _loop_1() {
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
}();

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
                Array.prototype.slice.call(contextualhost.children).map(function (c){ return c.setAttribute(this$1.$options._scopeId, ""); });
                // Array.from(contextualhost.children).map(c=>c.setAttribute(this.$options._scopeId,""));
            };

            // set scopeId for contextualhost
            setScopeIdForContextualHost(this$1.$refs.contextualMenu.parentElement.parentElement);

            // scopeId for menuItems
            var menuItems = this$1.$refs.contextualMenu.querySelectorAll("[class^='ms-ContextualMenu']");
            Array.prototype.slice.call(menuItems).map(function (menuItem){ return menuItem.setAttribute(this$1.$options._scopeId, ""); });
            // Array.from(menuItems).map(menuItem=>menuItem.setAttribute(this.$options._scopeId, ""));

            var subItems = this$1.contextualMenuInstance._container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
            // Array.from(subItems).map((subItem)=>{
            Array.prototype.slice.call(menuItems).map(function (subItem){
                subItem.addEventListener("click", function (){
                    var contextualMenuElmInsideHost = document.querySelector((".ms-ContextualHost:not([" + (this$1.$options._scopeId) + "]) [" + (this$1.$options._scopeId) + "]"));
                    if(contextualMenuElmInsideHost && contextualMenuElmInsideHost.parentElement.parentElement)
                        { setScopeIdForContextualHost(contextualMenuElmInsideHost.parentElement.parentElement); }
                    if(ContextualHost.hosts[ContextualHost.hosts.length-1])
                        { ContextualHost.hosts[ContextualHost.hosts.length-1]._openModal(); }
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

var commandbar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"commandBar",staticClass:"ms-CommandBar"},[_c('div',{staticClass:"ms-CommandBar-sideCommands"},[_vm._t("side")],2),_vm._v(" "),_c('div',{staticClass:"ms-CommandBar-mainArea"},[_vm._t("main"),_vm._v(" "),_vm._m(0)],2)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel"},[_c('button',{staticClass:"ms-CommandButton-button"},[_c('span',{staticClass:"ms-CommandButton-icon"},[_c('i',{staticClass:"ms-Icon ms-Icon--More"})]),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"})]),_vm._v(" "),_c('ul',{staticClass:"ms-ContextualMenu is-opened ms-ContextualMenu--hasIcons"},[_c('li',{staticClass:"ms-ContextualMenu-item"},[_c('a',{staticClass:"ms-ContextualMenu-link"}),_vm._v(" "),_c('i',{staticClass:"ms-Icon ms-Icon--folder"})])])])}],
  name: 'ou-command-bar',

  mounted: function mounted() {
    new this.$fabric.CommandBar(this.$refs.commandBar);
  }
};

var SB_FIELD = ".ms-SearchBox-field";
var SB_CLEAR_BUTTON = ".ms-SearchBox-clear";
var SB_EXIT_BUTTON = ".ms-SearchBox-exit";
var SB_HAS_TEXT = "has-text";
var SB_IS_ACTIVE = "is-active";
var SB_IS_ANIMATED = "is-animated";

var SearchBox = function () {
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
    } else {
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
    if (this._searchBox.classList.contains("ignoreBlur")) { return; }

    if (!this._clearOnly) {
      this._searchBox.removeEventListener("keyup", this._boundEnableClose);

      setTimeout(function () {
        if (!_this._searchBox.contains(document.activeElement)) {
          _this._clearSearchBox();

          _this._collapseSearchBox();

          _this.setCollapsedListeners();
        }
      }, 10);
    } else {
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
}();

var CONTEXT_CLASS = ".ms-ContextualMenu";
var CB_SPLIT_CLASS = ".ms-CommandButton-splitIcon";
var CB_BUTTON_CLASS = ".ms-CommandButton-button";
var MODAL_POSITION$1 = "bottom";

var CommandButton = function () {
  function CommandButton(container, contextMenu) {
    this._container = container;
    this._command = this._container;
    this._commandButton = this._command.querySelector(CB_BUTTON_CLASS);
    this._splitButton = this._command.querySelector(CB_SPLIT_CLASS);

    if (contextMenu) {
      this._contextualMenu = contextMenu;
    } else {
      this._contextualMenu = this._container.querySelector(CONTEXT_CLASS);
    }

    this._checkForMenu();
  }

  CommandButton.prototype._createModalHostView = function () {
    this._modalHostView = new ContextualHost(this._contextualMenu, MODAL_POSITION$1, this._command, false);
  };

  CommandButton.prototype._setClick = function () {
    if (this._splitButton) {
      this._splitButton.addEventListener("click", this._createModalHostView.bind(this), false);
    } else {
      this._commandButton.addEventListener("click", this._createModalHostView.bind(this), false);
    }
  };

  CommandButton.prototype._checkForMenu = function () {
    if (this._contextualMenu) {
      this._setClick();
    }
  };

  return CommandButton;
}();

var CONTEXTUAL_MENU = ".ms-ContextualMenu";
var CONTEXTUAL_MENU_ITEM = ".ms-ContextualMenu-item";
var CONTEXTUAL_MENU_LINK = ".ms-ContextualMenu-link";
var CB_SEARCH_BOX = ".ms-SearchBox";
var CB_MAIN_AREA = ".ms-CommandBar-mainArea";
var CB_SIDE_COMMAND_AREA = ".ms-CommandBar-sideCommands";
var CB_ITEM_OVERFLOW = ".ms-CommandBar-overflowButton";
var CB_NO_LABEL_CLASS = "ms-CommandButton--noLabel";
var SEARCH_BOX_CLOSE = ".ms-SearchBox-closeField";
var COMMAND_BUTTON = ".ms-CommandButton";
var COMMAND_BUTTON_LABEL = ".ms-CommandButton-label";
var ICON = ".ms-Icon";
var OVERFLOW_WIDTH = 40;
var OVERFLOW_LEFT_RIGHT_PADDING = 30;

var CommandBar = function () {
  function CommandBar(container) {
    this.responsiveSizes = {
      "sm-min": 320,
      "md-min": 480,
      "lg-min": 640,
      "xl-min": 1024,
      "xxl-min": 1366,
      "xxxl-min": 1920
    };
    this.visibleCommands = [];
    this.commandWidths = [];
    this.overflowCommands = [];
    this.itemCollection = [];
    this._sideAreaCollection = [];
    this.breakpoint = "sm";
    this._container = container;
    this.responsiveSizes["sm-max"] = this.responsiveSizes["md-min"] - 1;
    this.responsiveSizes["md-max"] = this.responsiveSizes["lg-min"] - 1;
    this.responsiveSizes["lg-max"] = this.responsiveSizes["xl-min"] - 1;
    this.responsiveSizes["xl-max"] = this.responsiveSizes["xxl-min"] - 1;
    this.responsiveSizes["xxl-max"] = this.responsiveSizes["xxxl-min"] - 1;

    this._setElements();

    this._setBreakpoint();

    if (this._elements.overflowCommand) {
      this._initOverflow();
    }

    this._setUIState();
  }

  CommandBar.prototype._runsSearchBox = function (state) {
    if (state === void 0) {
      state = "add";
    }

    this._changeSearchState("is-collapsed", state);
  };

  CommandBar.prototype._runOverflow = function () {
    if (this._elements.overflowCommand) {
      this._saveCommandWidths();

      this._redrawMenu();

      this._updateCommands();

      this._drawCommands();

      this._checkOverflow();
    }
  };

  CommandBar.prototype._initOverflow = function () {
    this._createContextualRef();

    this._createItemCollection(this.itemCollection, CB_MAIN_AREA);

    this._createItemCollection(this._sideAreaCollection, CB_SIDE_COMMAND_AREA);

    this._saveCommandWidths();

    this._updateCommands();

    this._drawCommands();

    this._setWindowEvent();

    this._checkOverflow();
  };

  CommandBar.prototype._hasClass = function (element, cls) {
    return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
  };

  CommandBar.prototype._onSearchExpand = function () {
    if (this.breakpoint === "lg") {
      this._container.classList.add("search-expanded");

      this._doResize();
    }
  };

  CommandBar.prototype._onSearchCollapse = function () {
    if (this.breakpoint === "lg") {
      this._container.classList.remove("search-expanded");

      this._doResize();
    }
  };

  CommandBar.prototype._getScreenSize = function () {
    var w = window;
    var wSize = {
      x: 0,
      y: 0
    };
    var d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0];
    wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
    wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;
    return wSize;
  };

  CommandBar.prototype._setBreakpoint = function () {
    var screenSize = this._getScreenSize().x;

    switch (true) {
      case screenSize <= this.responsiveSizes["sm-max"]:
        this.breakpoint = "sm";
        break;

      case screenSize >= this.responsiveSizes["md-min"] && screenSize <= this.responsiveSizes["md-max"]:
        this.breakpoint = "md";
        break;

      case screenSize >= this.responsiveSizes["lg-min"] && screenSize <= this.responsiveSizes["lg-max"]:
        this.breakpoint = "lg";
        break;

      case screenSize >= this.responsiveSizes["xl-min"] && screenSize <= this.responsiveSizes["xl-max"]:
        this.breakpoint = "xl";
        break;

      case screenSize >= this.responsiveSizes["xxl-min"] && screenSize <= this.responsiveSizes["xxl-max"]:
        this.breakpoint = "xxl";
        break;

      case screenSize >= this.responsiveSizes["xxxl-min"]:
        this.breakpoint = "xxxl";
        break;
    }
  };

  CommandBar.prototype._createSearchInstance = function () {
    if (this._elements.searchBox) {
      return new SearchBox(this._elements.searchBox);
    } else {
      return false;
    }
  };

  CommandBar.prototype._changeSearchState = function (state, action) {
    if (this._elements.searchBox) {
      switch (action) {
        case "remove":
          this._elements.searchBox.classList.remove(state);

          break;

        case "add":
          this._elements.searchBox.classList.add(state);

          break;

        default:
          break;
      }
    }
  };

  CommandBar.prototype._setElements = function () {
    var _this = this;

    this._elements = {
      mainArea: this._container.querySelector(CB_MAIN_AREA)
    };

    if (this._container.querySelector(CB_SIDE_COMMAND_AREA)) {
      this._elements.sideCommandArea = this._container.querySelector(CB_SIDE_COMMAND_AREA);
    }

    if (this._container.querySelector(CB_ITEM_OVERFLOW)) {
      this._elements.overflowCommand = this._container.querySelector(CB_ITEM_OVERFLOW);
      this._elements.contextMenu = this._container.querySelector(CB_ITEM_OVERFLOW).querySelector(CONTEXTUAL_MENU);
    }

    if (this._container.querySelector(CB_MAIN_AREA + " " + CB_SEARCH_BOX)) {
      this._elements.searchBox = this._container.querySelector(CB_MAIN_AREA + " " + CB_SEARCH_BOX);
      this._elements.searchBoxClose = this._container.querySelector(SEARCH_BOX_CLOSE);
      this.searchBoxInstance = this._createSearchInstance();
      this.searchBoxInstance.getInputField().addEventListener("focus", function () {
        _this._onSearchExpand();
      }, false);
      this.searchBoxInstance.getInputField().addEventListener("searchCollapse", function () {
        _this._onSearchCollapse();
      }, false);
    }
  };

  CommandBar.prototype._createItemCollection = function (iCollection, areaClass) {
    var item,
        label,
        iconClasses,
        splitClasses,
        items = this._container.querySelectorAll(areaClass + " > " + COMMAND_BUTTON + ":not(" + CB_ITEM_OVERFLOW + ")");

    this._commandButtonInstance = new CommandButton(this._elements.overflowCommand);

    for (var i = 0; i < items.length; i++) {
      item = items[i];
      label = item.querySelector(COMMAND_BUTTON_LABEL).textContent;
      var icon = item.querySelector(ICON);

      if (icon) {
        iconClasses = icon.className;
        splitClasses = iconClasses.split(" ");

        for (var o = 0; o < splitClasses.length; o++) {
          if (splitClasses[o].indexOf(ICON.replace(".", "") + "--") > -1) {
            icon = splitClasses[o];
            break;
          }
        }
      }

      iCollection.push({
        item: item,
        label: label,
        icon: icon,
        isCollapsed: item.classList.contains(CB_NO_LABEL_CLASS) ? true : false,
        commandButtonRef: new CommandButton(item)
      });
    }

    return;
  };

  CommandBar.prototype._createContextualRef = function () {
    this.contextualItemContainerRef = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_ITEM).cloneNode(true);
    this.contextualItemLink = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_LINK).cloneNode(false);
    this.contextualItemIcon = this._elements.contextMenu.querySelector(".ms-Icon").cloneNode(false);
    this._elements.contextMenu.innerHTML = "";
  };

  CommandBar.prototype._getElementWidth = function (element) {
    var width, styles;

    if (element.offsetParent === null) {
      element.setAttribute("style", "position: absolute; opacity: 0; display: block;");
    }

    width = element.getBoundingClientRect().width;
    styles = window.getComputedStyle(element);
    width += parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
    element.setAttribute("style", "");
    return width;
  };

  CommandBar.prototype._saveCommandWidths = function () {
    for (var i = 0; i < this.itemCollection.length; i++) {
      var item = this.itemCollection[i].item;

      var width = this._getElementWidth(item);

      this.commandWidths[i] = width;
    }
  };

  CommandBar.prototype._updateCommands = function () {
    var searchCommandWidth = 0;

    var mainAreaWidth = this._elements.mainArea.getBoundingClientRect().width;

    if (this._elements.searchBox) {
      searchCommandWidth = this._getElementWidth(this._elements.searchBox);
    }

    var offset = searchCommandWidth + OVERFLOW_WIDTH + OVERFLOW_LEFT_RIGHT_PADDING;
    var totalAreaWidth = mainAreaWidth - offset;
    this.visibleCommands = [];
    this.overflowCommands = [];
    var totalWidths = 0;

    for (var i = 0; i < this.itemCollection.length; i++) {
      totalWidths += this.commandWidths[i];

      if (totalWidths < totalAreaWidth) {
        this.visibleCommands.push(this.itemCollection[i]);
      } else {
        this.overflowCommands.push(this.itemCollection[i]);
      }
    }
  };

  CommandBar.prototype._drawCommands = function () {
    this._elements.contextMenu.innerHTML = "";

    for (var i = 0; i < this.overflowCommands.length; i++) {
      this.overflowCommands[i].item.classList.add("is-hidden");
      var newCItem = this.contextualItemContainerRef.cloneNode(false);
      var newClink = this.contextualItemLink.cloneNode(false);
      var iconClass = this.overflowCommands[i].icon;
      newClink.innerText = this.overflowCommands[i].label;
      newCItem.appendChild(newClink);

      if (iconClass) {
        var newIcon = this.contextualItemIcon.cloneNode(false);
        newIcon.className = ICON.replace(".", "") + " " + iconClass;
        newCItem.appendChild(newIcon);
      }

      this._elements.contextMenu.appendChild(newCItem);
    }

    for (var x = 0; x < this.visibleCommands.length; x++) {
      this.visibleCommands[x].item.classList.remove("is-hidden");
    }
  };

  CommandBar.prototype._setWindowEvent = function () {
    var _this = this;

    window.addEventListener("resize", function () {
      _this._doResize();
    }, false);
  };

  CommandBar.prototype._processCollapsedClasses = function (type) {
    for (var i = 0; i < this.itemCollection.length; i++) {
      var thisItem = this.itemCollection[i];

      if (!thisItem.isCollapsed) {
        if (type === "add") {
          thisItem.item.classList.add(CB_NO_LABEL_CLASS);
        } else {
          thisItem.item.classList.remove(CB_NO_LABEL_CLASS);
        }
      }
    }

    for (var i = 0; i < this._sideAreaCollection.length; i++) {
      var thisItem = this._sideAreaCollection[i];

      if (!thisItem.isCollapsed) {
        if (type === "add") {
          thisItem.item.classList.add(CB_NO_LABEL_CLASS);
        } else {
          thisItem.item.classList.remove(CB_NO_LABEL_CLASS);
        }
      }
    }
  };

  CommandBar.prototype._setUIState = function () {
    switch (this.breakpoint) {
      case "sm":
        this._runsSearchBox();

        this._processCollapsedClasses("add");

        this._runOverflow();

        break;

      case "md":
        this._runsSearchBox();

        this._processCollapsedClasses("add");

        this._runOverflow();

        break;

      case "lg":
        this._runsSearchBox();

        this._processCollapsedClasses("remove");

        this._runOverflow();

        break;

      case "xl":
        this._runsSearchBox("remove");

        this._processCollapsedClasses("remove");

        this._runOverflow();

        break;

      default:
        this._runsSearchBox("remove");

        this._processCollapsedClasses("remove");

        this._runOverflow();

        break;
    }
  };

  CommandBar.prototype._checkOverflow = function () {
    if (this.overflowCommands.length > 0) {
      this._elements.overflowCommand.classList.remove("is-hidden");
    } else {
      this._elements.overflowCommand.classList.add("is-hidden");

      if (this.activeCommand === this._elements.overflowCommand) {
        this._elements.contextMenu.classList.remove("is-open");
      }
    }
  };

  CommandBar.prototype._redrawMenu = function () {
    var left;

    if (this._hasClass(this._elements.contextMenu, "is-open")) {
      left = this.activeCommand.getBoundingClientRect().left;

      this._drawOverflowMenu(left);
    }
  };

  CommandBar.prototype._drawOverflowMenu = function (left) {
    this._elements.contextMenu.setAttribute("style", "left: " + left + "px; transform: translateX(-50%)");
  };

  CommandBar.prototype._doResize = function () {
    this._setBreakpoint();

    this._setUIState();
  };

  return CommandBar;
}();

var uiCommandBar = {
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CommandBar { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; height: 40px; white-space: nowrap; padding-left: 0; border: 0; position: relative; } .ms-CommandBar:focus { outline: none; } .ms-CommandBar .ms-CommandButton--actionButton { border-right: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandBar .ms-Button { height: 100%; } .ms-CommandBar .ms-Button.ms-Button--noLabel .ms-Button-icon { padding-right: 0; } .ms-CommandBar .ms-Button.is-hidden { display: none; } .ms-CommandBar .ms-SearchBox, .ms-CommandBar .ms-SearchBox-field, .ms-CommandBar .ms-SearchBox-label { height: 100%; } .ms-CommandBar .ms-SearchBox { display: inline-block; vertical-align: top; transition: margin-right 0.267s; } .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active { width: 220px; } @media only screen and (max-width: 639px) { .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active { width: 100%; position: absolute; left: 0; right: 0; z-index: 10; } } .ms-CommandBar .ms-CommandBar-overflowButton .ms-CommandButton-button { font-size: 18px; padding: 0 11px; } @media only screen and (min-width: 1024px) { .ms-CommandBar .ms-SearchBox { margin-right: 24px; } } @media only screen and (max-width: 639px) { .ms-CommandBar { height: 44px; } } @media only screen and (min-width: 640px) { .ms-CommandBar.search-expanded .ms-SearchBox { margin-right: 8px; } .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed { transition: none; } } .ms-CommandBar-mainArea { overflow-x: hidden; display: block; height: 100%; overflow: hidden; } .ms-CommandBar-sideCommands { float: right; text-align: right; width: auto; padding-right: 4px; height: 100%; } .ms-CommandBar-sideCommands .ms-Button:last-child { margin-right: 0; } @media only screen and (min-width: 640px) { .ms-CommandBar-sideCommands { min-width: 128px; } } @media only screen and (min-width: 1024px) { .ms-CommandBar-sideCommands { padding-right: 20px; } } .ms-CommandButton { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button, .ms-CommandButton.is-disabled .ms-CommandButton-button { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label, .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon, .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu { display: none; } .ms-CommandButton-button, .ms-CommandButton-splitIcon { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button:hover, .ms-CommandButton-splitIcon:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label, .ms-CommandButton-splitIcon:hover .ms-CommandButton-label { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button:active, .ms-CommandButton-splitIcon:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:focus::before, .ms-CommandButton-splitIcon:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button:focus, .ms-CommandButton-splitIcon:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button, .ms-CommandButton-splitIcon { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon, .ms-CommandButton-splitIcon .ms-CommandButton-icon { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label, .ms-CommandButton-splitIcon .ms-CommandButton-label { line-height: 44px; } } .ms-CommandButton-button { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton { margin-left: 4px; } } .ms-CommandButton-icon { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon, .ms-CommandButton-splitIcon { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon, .ms-CommandButton-splitIcon .ms-Icon { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon:focus::before, .ms-CommandButton-splitIcon:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon, .ms-CommandButton-splitIcon { display: none; } } .ms-CommandButton-splitIcon { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label, .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label, .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label { font-size: 16px; } } .ms-ContextualMenu { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; display: block; min-width: 180px; max-width: 220px; list-style-type: none; position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu.is-hidden { display: none; } .ms-ContextualMenu-item { position: relative; } .ms-ContextualMenu-link { box-sizing: border-box; text-decoration: none; color: \"[theme:neutralPrimary, default: #333333]\"; border: 1px solid transparent; cursor: pointer; display: block; height: 36px; overflow: hidden; line-height: 34px; padding: 0 16px 0 25px; position: relative; text-overflow: ellipsis; white-space: nowrap; } .ms-ContextualMenu-link:hover, .ms-ContextualMenu-link:active, .ms-ContextualMenu-link:focus { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:hover .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-link:active .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-link:focus .ms-ContextualMenu-subMenuIcon { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:focus { outline: transparent; border: 1px solid \"[theme:neutralSecondary, default: #666666]\"; } .ms-ContextualMenu-link.is-selected { background-color: \"[theme:neutralQuaternaryAlt, default: #dadada]\"; color: \"[theme:black, default: #000000]\"; font-weight: 600; } .ms-ContextualMenu-link.is-selected ~ .ms-ContextualMenu-subMenuIcon { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu-link.is-selected:hover { background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu-link.is-disabled { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: \"[theme:white, default: #ffffff]\"; pointer-events: none; } .ms-ContextualMenu-link.is-disabled:active, .ms-ContextualMenu-link.is-disabled:focus { border-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu-link.is-disabled .ms-Icon { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; pointer-events: none; cursor: default; } .ms-ContextualMenu-item.ms-ContextualMenu-item--divider { cursor: default; display: block; height: 1px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; position: relative; } .ms-ContextualMenu-item.ms-ContextualMenu-item--header { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; text-transform: uppercase; height: 36px; line-height: 36px; padding: 0 18px; } .ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu .ms-ContextualMenu { position: absolute; top: -1px; left: 178px; } .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-caretRight { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 8px; font-weight: 600; width: 24px; height: 36px; line-height: 36px; position: absolute; text-align: center; top: 0; right: 0; z-index: 1; pointer-events: none; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-item.ms-ContextualMenu-item--header { padding: 0 16px 0 26px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected { background-color: \"[theme:white, default: #ffffff]\"; font-weight: 600; color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected::after { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; color: \"[theme:neutralPrimary, default: #333333]\"; content: '\\E73E'; font-size: 10px; font-weight: 800; height: 36px; line-height: 36px; position: absolute; left: 7px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus { color: \"[theme:neutralDark, default: #212121]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover::after, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus::after { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active::after { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-ContextualMenu-link, .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-ContextualMenu-link { padding-left: 40px; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-Icon, .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-Icon { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; text-align: center; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons { width: 220px; } .ms-ContextualHost { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned { position: absolute; margin: 0; } .ms-ContextualHost.is-open { display: inline-block; } .ms-ContextualHost-beak { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak, .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak { display: block; bottom: -10px; } .ms-ContextualHost-main { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost { margin: 16px; } .ms-ContextualHost.is-positioned { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak, .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak { display: block; } } .inline-block { display: inline-block; } .ms-Icon.ms-Icon--More { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M256 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1024 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1792 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    beforeMount: function beforeMount(){ 
        this.$fabric = { 
            CommandBar : CommandBar 
        }; 
    },
    extends :  commandbar
}

var commandbutton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton",class:_vm.commandButtonClass,on:{"click":_vm.clickEvent}},[_c('button',{staticClass:"ms-CommandButton-button"},[(_vm.icon)?_c('span',{staticClass:"ms-CommandButton-icon ms-fontColor-themePrimary"},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.type == 'dropdown')?_c('span',{staticClass:"ms-CommandButton-dropdownIcon"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})]):_vm._e()])])},staticRenderFns: [],
  name: 'ou-command-button',

  mixins: [
    type('noLabel', 'inline', 'dropdown'),
    disabled,
    icon
  ],

  computed: {
    commandButtonClass: function commandButtonClass() {
      var obj;

      return ( obj = {}, obj[("ms-CommandButton--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) { this.$emit('click'); }
    }
  }
};

var CONTEXT_CLASS$1 = ".ms-ContextualMenu";
var CB_SPLIT_CLASS$1 = ".ms-CommandButton-splitIcon";
var CB_BUTTON_CLASS$1 = ".ms-CommandButton-button";
var MODAL_POSITION$2 = "bottom";

var CommandButton$1 = function () {
  function CommandButton(container, contextMenu) {
    this._container = container;
    this._command = this._container;
    this._commandButton = this._command.querySelector(CB_BUTTON_CLASS$1);
    this._splitButton = this._command.querySelector(CB_SPLIT_CLASS$1);

    if (contextMenu) {
      this._contextualMenu = contextMenu;
    } else {
      this._contextualMenu = this._container.querySelector(CONTEXT_CLASS$1);
    }

    this._checkForMenu();
  }

  CommandButton.prototype._createModalHostView = function () {
    this._modalHostView = new ContextualHost(this._contextualMenu, MODAL_POSITION$2, this._command, false);
  };

  CommandButton.prototype._setClick = function () {
    if (this._splitButton) {
      this._splitButton.addEventListener("click", this._createModalHostView.bind(this), false);
    } else {
      this._commandButton.addEventListener("click", this._createModalHostView.bind(this), false);
    }
  };

  CommandButton.prototype._checkForMenu = function () {
    if (this._contextualMenu) {
      this._setClick();
    }
  };

  return CommandButton;
}();

var uiCommandButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton",class:_vm.commandButtonClass,on:{"click":_vm.clickEvent}},[_c('button',{staticClass:"ms-CommandButton-button"},[(_vm.hasIcon)?_c('span',{staticClass:"ms-CommandButton-icon ms-fontColor-themePrimary"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.type == 'dropdown')?_c('span',{staticClass:"ms-CommandButton-dropdownIcon"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})]):_vm._e()])])},staticRenderFns: [],_scopeId: 'data-v-6b2aa7e9',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CommandButton[data-v-6b2aa7e9] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden[data-v-6b2aa7e9] { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-6b2aa7e9] { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-6b2aa7e9]:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-6b2aa7e9]:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu[data-v-6b2aa7e9] { display: none; } .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button[data-v-6b2aa7e9]:hover, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-6b2aa7e9] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button[data-v-6b2aa7e9]:active, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button[data-v-6b2aa7e9]:focus::before, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button[data-v-6b2aa7e9]:focus, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-6b2aa7e9] { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-6b2aa7e9] { line-height: 44px; } } .ms-CommandButton-button[data-v-6b2aa7e9] { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton[data-v-6b2aa7e9] { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton[data-v-6b2aa7e9] { margin-left: 4px; } } .ms-CommandButton-icon[data-v-6b2aa7e9] { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon[data-v-6b2aa7e9] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label[data-v-6b2aa7e9] { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label[data-v-6b2aa7e9]:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9] { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9]:focus::before, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { display: none; } } .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9] { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9]::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-6b2aa7e9] { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-6b2aa7e9] { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-6b2aa7e9] { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-6b2aa7e9] { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-6b2aa7e9] { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-6b2aa7e9] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-6b2aa7e9]::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot[data-v-6b2aa7e9]:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-6b2aa7e9] { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-6b2aa7e9] { font-size: 16px; } } ");},
    computed: {
        hasIcon: function hasIcon () {
            return !!this.$slots['icon']
        }
    },
    beforeMount: function beforeMount(){ 
        this.$fabric = { 
            CommandButton : CommandButton$1 
        }; 
    },
    extends :  commandbutton
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

var Overlay = function () {
  function Overlay(overlayElement) {
    if (overlayElement) {
      this.overlayElement = overlayElement;
    } else {
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
}();

var Dialog = function () {
  function Dialog(dialog) {
    this._dialog = dialog;
    this._closeButtonElement = this._dialog.querySelector(".ms-Dialog-buttonClose");
    this._actionButtonElements = this._dialog.querySelectorAll(".ms-Dialog-action");

    if (this._closeButtonElement) {
      this._closeButtonElement.addEventListener("click", this.close.bind(this), false);
    }

    for (var i = 0; i < this._actionButtonElements.length; i++) {
      this._actionButtonElements[i].addEventListener("click", this.close.bind(this), false);
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
}();

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
        if (item.textContent.trim() == content.trim()) {
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

var PanelHost = function () {
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
}();

var ANIMATE_IN_STATE = "animate-in";
var ANIMATE_OUT_STATE = "animate-out";
var ANIMATION_END = 400;

var Panel = function () {
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
}();

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

var Dropdown$1 = function () {
  function Dropdown(container) {
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
        this._newDropdownLabel.innerHTML = option.text;
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
      newItem.addEventListener("click", this._onItemSelection);

      this._newDropdown.appendChild(newItem);

      this._dropdownItems.push({
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
    var selected = this._newDropdown.querySelector("." + IS_SELECTED_CLASS);

    var origText = selected ? selected.textContent : this._newDropdown.querySelectorAll("." + DROPDOWN_ITEM_CLASS)[0].textContent;
    this._dropdownLabelHelper.textContent = origText;

    if (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {
      var i = 0;
      var ellipsis = "...";
      var newText = void 0;

      do {
        i--;
        newText = origText.slice(0, i);
        this._dropdownLabelHelper.textContent = newText + ellipsis;
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
    var d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0];
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
    } else {
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
      } else {
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
    var item = evt.target;

    var isDropdownDisabled = this._container.classList.contains(IS_DISABLED_CLASS);

    var isOptionDisabled = item.classList.contains(IS_DISABLED_CLASS);

    if (!isDropdownDisabled && !isOptionDisabled) {
      for (var i = 0; i < this._dropdownItems.length; ++i) {
        if (this._dropdownItems[i].newItem === item) {
          this._dropdownItems[i].newItem.classList.add(IS_SELECTED_CLASS);

          this._dropdownItems[i].oldOption.selected = true;
        } else {
          this._dropdownItems[i].newItem.classList.remove(IS_SELECTED_CLASS);

          this._dropdownItems[i].oldOption.selected = false;
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
}();

var uiDropdown = {_scopeId: 'data-v-d4b6df96',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Dropdown[data-v-d4b6df96] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 10px; position: relative; outline: 0; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:hover .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:black, default: #000000]\"; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Dropdown .ms-Label[data-v-d4b6df96] { display: inline-block; margin-bottom: 8px; } .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #00ff00; color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #600000; color: #600000; } } .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #600000; } } .ms-Dropdown.is-open .ms-Dropdown-items[data-v-d4b6df96] { display: block; position: absolute; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96] { box-shadow: none; overflow-y: auto; padding-top: 4px; max-height: 100%; } .ms-Panel .ms-Dropdown-items .ms-Dropdown-item[data-v-d4b6df96] { padding: 7px 16px; overflow: hidden; text-overflow: ellipsis; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96]::before { content: none; border: 0; } .ms-Dropdown-select[data-v-d4b6df96] { display: none; } .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralDark, default: #212121]\"; font-size: 12px; position: absolute; right: 13px; bottom: 9px; z-index: 1; pointer-events: none; } .ms-Dropdown-title[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; cursor: pointer; display: block; height: 32px; padding: 5px 32px 0 10px; position: relative; overflow: hidden; } .ms-Dropdown-title.ms-Dropdown-truncator[data-v-d4b6df96] { height: auto; display: block; position: absolute; visibility: hidden; } .ms-Dropdown-items[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); background-color: \"[theme:white, default: #ffffff]\"; display: none; list-style-type: none; position: absolute; width: 100%; max-height: 200px; z-index: 400; overflow-y: scroll; top: auto; right: auto; bottom: auto; left: auto; max-width: 100%; } .ms-Dropdown-items[data-v-d4b6df96]::before { content: ''; position: absolute; z-index: -1; top: 0; left: 0; right: 0; bottom: 0; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Dropdown-item[data-v-d4b6df96] { box-sizing: border-box; cursor: pointer; display: block; height: 36px; padding: 7px 10px; position: relative; border: 1px solid transparent; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; color: \"[theme:black, default: #000000]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item[data-v-d4b6df96]:hover:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-disabled[data-v-d4b6df96] { background: \"[theme:white, default: #ffffff]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: \"[theme:themeLight, default: #c7e0f4]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:hover, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:focus, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-caretDown[data-v-d4b6df96] { bottom: 7px; } .ms-Dropdown-caretDown.ms-Icon.ms-Icon--ChevronDown[data-v-d4b6df96]::before { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"12\" height=\"12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1939 1581l90 -90l-1005 -1005l-1005 1005l90 90l915 -915z\" fill=\"black\" stroke=\"none\"/></svg>'); } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96] { /* ui-fabric-js tries to adjust the ms-dropdown-items for small devices, but it confligts with using them normally in panels this will undo these adjustments. (Still works fine on small devices) */ max-height: 200px; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); overflow-y: scroll; padding-top: 0; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Dropdown : Dropdown$1
        };
    },
    methods:{
        setSelectedStatus: function setSelectedStatus(content) {
            var this$1 = this;

            Array.prototype.forEach.call(this.$refs.dropdown.querySelectorAll('.ms-Dropdown-item'), function (item) {
                if (item.textContent.trim() == content.trim()) {
                    item.classList.add('is-selected');
                    this$1.setDropdownTitle(content);
                } else {
                    item.classList.remove('is-selected');
                }
            });
        },
    },
    mounted: function mounted(){
        var this$1 = this;

        var childs = this.$refs.dropdown.querySelectorAll(":not([" + this.$options._scopeId + "])");
        //IE vs. Array.From vs. querySelectorAll = no work >.<
        //Array.prototype.slice, does the trick instead 
        Array.prototype.slice.call(childs).map(function (c){ return c.setAttribute(this$1.$options._scopeId, ""); });
        // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
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

var link = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"ms-Link",attrs:{"href":_vm.href,"title":_vm.title},on:{"click":_vm.clickEvent}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-link',

  props: {
    href: String,
    title: String,
  },

  methods: {
    clickEvent: function clickEvent() {
      this.$emit('click');
    }
  }
};

var uiLink = {_scopeId: 'data-v-078cc59e',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Link[data-v-078cc59e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; font-weight: 400; color: \"[theme:themePrimary, default: #0078d7]\"; text-decoration: none; cursor: pointer; outline: none; } .ms-Link[data-v-078cc59e]:hover, .ms-Link[data-v-078cc59e]:focus { color: \"[theme:themeDarker, default: #004578]\"; } .ms-Link[data-v-078cc59e]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } ");},
    extends :  link
}

var List = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{ref:"list",staticClass:"ms-List"},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-list'
};

var uiList = {_scopeId: 'data-v-1093d442',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-List[data-v-1093d442] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; list-style-type: none; } ");},
    extends :  List
}

var ListActions = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ListItem-actions"},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-list-actions'
};

var uiListActions = {
    beforeCreate: function beforeCreate(){ loadStyles("");},
    extends :  ListActions,
    created: function created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}

var ListActionItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ListItem-action",on:{"click":function($event){$event.stopPropagation();return _vm.clickEvent($event)}}},[_c('i',{staticClass:"ms-Icon",class:_vm.iconClass})])},staticRenderFns: [],
  name: 'ou-list-action-item',
  mixins: [icon],

  methods: {
    clickEvent: function clickEvent() {
      this.$emit('click');
    }
  }
};

var uiListActionItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ListItem-action",on:{"click":function($event){$event.stopPropagation();return _vm.clickEvent($event)}}},[_vm._t("icon")],2)},staticRenderFns: [],
    beforeCreate: function beforeCreate(){ loadStyles("");},
    extends :  ListActionItem,
    created: function created(){
        this.$options._scopeId = this.$parent.$options._scopeId;
    }
}

var ListItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{ref:"listItem",staticClass:"ms-ListItem",class:_vm.listItemClass,on:{"click":_vm.clickEvent}},[(_vm.type == 'image')?_c('img',{staticClass:"ms-ListItem-image",attrs:{"src":_vm.imageSrc}}):_vm._e(),_vm._v(" "),(_vm.primaryText)?_c('span',{staticClass:"ms-ListItem-primaryText"},[_vm._v(_vm._s(_vm.primaryText))]):_vm._e(),_vm._v(" "),(_vm.secondaryText)?_c('span',{staticClass:"ms-ListItem-secondaryText"},[_vm._v(_vm._s(_vm.secondaryText))]):_vm._e(),_vm._v(" "),(_vm.tertiaryText)?_c('span',{staticClass:"ms-ListItem-tertiaryText"},[_vm._v(_vm._s(_vm.tertiaryText))]):_vm._e(),_vm._v(" "),(_vm.metaText)?_c('span',{staticClass:"ms-ListItem-metaText"},[_vm._v(_vm._s(_vm.metaText))]):_vm._e(),_vm._v(" "),(_vm.isSelectable)?_c('div',{staticClass:"ms-ListItem-selectionTarget",on:{"click":function($event){$event.stopPropagation();return _vm.toggle($event)}}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-list-item',

  mixins: [type('image', 'document')],

  props: {
    isUnread: Boolean,
    isSelectable: Boolean,
    isUnseen: Boolean,
    value: Boolean,

    imageSrc: String,
    primaryText: String,
    secondaryText: String,
    tertiaryText: String,
    metaText: String
  },

  computed: {
    listItemClass: function listItemClass() {
      var obj;

      return ( obj = {}, obj[("ms-ListItem--" + (this.type))] = !!this.type, obj['is-selectable'] =  this.isSelectable, obj['is-selected'] =  this.value, obj['is-unread'] =  this.isUnread, obj['is-unseen'] =  this.isUnseen, obj );
    }
  },

  methods: {
    toggle: function toggle() {
      if (this.isSelectable) {
        this.$emit('input', !this.value);
      }
    },

    clickEvent: function clickEvent() {
      this.$emit('click');
    }
  }
};

var uiListItem = {_scopeId: 'data-v-a34de616',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ListItem[data-v-a34de616] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; *zoom: 1; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; padding: 9px 28px 3px; position: relative; display: block; } .ms-ListItem[data-v-a34de616]::before, .ms-ListItem[data-v-a34de616]::after { display: table; content: \"\"; line-height: 0; } .ms-ListItem[data-v-a34de616]::after { clear: both; } .ms-ListItem-primaryText[data-v-a34de616], .ms-ListItem-secondaryText[data-v-a34de616], .ms-ListItem-tertiaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; } .ms-ListItem-primaryText[data-v-a34de616] { color: \"[theme:neutralDark, default: #212121]\"; font-weight: 300; font-size: 21px; padding-right: 80px; position: relative; top: -4px; } .ms-ListItem-secondaryText[data-v-a34de616] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 400; font-size: 14px; line-height: 25px; position: relative; top: -7px; padding-right: 30px; } .ms-ListItem-tertiaryText[data-v-a34de616] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-weight: 300; font-size: 14px; position: relative; top: -9px; margin-bottom: -4px; padding-right: 30px; } .ms-ListItem-metaText[data-v-a34de616] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 300; font-size: 11px; position: absolute; right: 30px; top: 39px; } .ms-ListItem-image[data-v-a34de616] { float: left; height: 70px; margin-left: -8px; margin-right: 10px; width: 70px; background-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ListItem-selectionTarget[data-v-a34de616] { display: none; } .ms-ListItem-actions[data-v-a34de616] { max-width: 80px; position: absolute; right: 30px; text-align: right; top: 10px; } .ms-ListItem-action[data-v-a34de616] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; display: inline-block; font-size: 15px; position: relative; text-align: center; top: 3px; cursor: pointer; height: 16px; width: 16px; } .ms-ListItem-action .ms-Icon[data-v-a34de616] { vertical-align: top; } .ms-ListItem-action[data-v-a34de616]:hover { color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; } .ms-ListItem.is-unread[data-v-a34de616] { border-left: 3px solid \"[theme:themePrimary, default: #0078d7]\"; padding-left: 27px; } .ms-ListItem.is-unread .ms-ListItem-secondaryText[data-v-a34de616], .ms-ListItem.is-unread .ms-ListItem-metaText[data-v-a34de616] { color: \"[theme:themePrimary, default: #0078d7]\"; font-weight: 600; } .ms-ListItem.is-unseen[data-v-a34de616]::after { border-right: 10px solid transparent; border-top: 10px solid \"[theme:themePrimary, default: #0078d7]\"; left: 0; position: absolute; top: 0; } .ms-ListItem.is-selectable .ms-ListItem-selectionTarget[data-v-a34de616] { display: block; height: 20px; left: 6px; position: absolute; top: 13px; width: 20px; } .ms-ListItem.is-selectable .ms-ListItem-image[data-v-a34de616] { margin-left: 0; } .ms-ListItem.is-selectable[data-v-a34de616]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; cursor: pointer; outline: 1px solid transparent; } .ms-ListItem.is-selectable[data-v-a34de616]:hover::before { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; position: absolute; top: 14px; left: 7px; height: 15px; width: 15px; border: 1px solid \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-ListItem.is-selected[data-v-a34de616]::before { border: 1px solid transparent; } .ms-ListItem.is-selected[data-v-a34de616]::before, .ms-ListItem.is-selected[data-v-a34de616]:hover::before { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; content: '\\e73A'; font-size: 17px; color: \"[theme:neutralSecondaryAlt, default: #767676]\"; position: absolute; top: 23px; left: 7px; border: 0; } .ms-ListItem.is-selected[data-v-a34de616]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; outline: 1px solid transparent; } .ms-ListItem.ms-ListItem--document[data-v-a34de616] { padding: 0; } .ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon[data-v-a34de616] { width: 70px; height: 70px; float: left; text-align: center; } .ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon .ms-Icon[data-v-a34de616] { font-size: 38px; line-height: 70px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-ListItem.ms-ListItem--document .ms-ListItem-primaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; padding-top: 15px; padding-right: 0; position: static; } .ms-ListItem.ms-ListItem--document .ms-ListItem-secondaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: \"[theme:neutralSecondary, default: #666666]\"; font-weight: 400; font-size: 11px; padding-top: 6px; } .ms-ListItem.is-selected[data-v-a34de616]::before, .ms-ListItem.is-selected[data-v-a34de616]:hover::before { top: 14px; content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"17\" height=\"17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M2048 2048v-2048h-2048v2048h2048zM1920 1920h-1792v-1792h1792v1792zM768 421l-429 430l90 90l339 -338l851 850l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    extends :  ListItem
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

var uiMessagebar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-MessageBar",class:_vm.messageBarClass},[_c('div',{staticClass:"ms-MessageBar-content"},[(_vm.hasIcon)?_c('div',{staticClass:"ms-MessageBar-icon"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-MessageBar-text"},[_vm._t("default")],2)])])},staticRenderFns: [],_scopeId: 'data-v-7f69de50',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-MessageBar[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; padding: 8px; display: table; background-color: \"[theme:infoBackground, default: #f4f4f4]\"; } .ms-MessageBar .ms-Link[data-v-7f69de50] { font-size: 12px; } .ms-MessageBar-icon[data-v-7f69de50], .ms-MessageBar-text[data-v-7f69de50] { display: table-cell; vertical-align: top; } .ms-MessageBar-icon[data-v-7f69de50] { padding-right: 8px; font-size: 16px; color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-MessageBar-text[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 12px; font-weight: 400; } .ms-MessageBar.ms-MessageBar--warning[data-v-7f69de50] { background-color: \"[theme:warningBackground, default: #fff4ce]\"; } .ms-MessageBar.ms-MessageBar--severeWarning[data-v-7f69de50] { background-color: \"[theme:severeWarningBackground, default: #fed9cc]\"; } .ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:severeWarning, default: #d83b01]\"; } .ms-MessageBar.ms-MessageBar--error[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--blocked[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--success[data-v-7f69de50] { background-color: \"[theme:successBackground, default: #dff6dd]\"; } .ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:green, default: #107c10]\"; } ");},
    computed: {
        hasIcon: function hasIcon () {
            return !!this.$slots['icon']
        }
    },
    extends :  MessageBar
}

var MessageBanner$1 = function () {
  function MessageBanner(container) {
    this._textContainerMaxWidth = 700;
    this._bufferElementsWidth = 88;
    this._bufferElementsWidthSmall = 35;
    this.SMALL_BREAK_POINT = 480;
    this.container = container;
    this.init();
  }

  MessageBanner.prototype.init = function () {
    this._cacheDOM();

    this._setListeners();

    this._clientWidth = this._errorBanner.offsetWidth;
    this._initTextWidth = this._clipper.offsetWidth;

    this._onResize();
  };

  MessageBanner.prototype.show = function () {
    this._errorBanner.className = "ms-MessageBanner";
  };

  MessageBanner.prototype.showBanner = function () {
    this.show();
  };

  MessageBanner.prototype.hide = function () {
    if (this._errorBanner.className.indexOf("hide") === -1) {
      this._errorBanner.className += " hide";
      setTimeout(this._hideMessageBanner.bind(this), 500);
    }
  };

  MessageBanner.prototype._hideMessageBanner = function () {
    this._errorBanner.className = "ms-MessageBanner is-hidden";
  };

  MessageBanner.prototype._onResize = function () {
    this._clientWidth = this._errorBanner.offsetWidth;

    if (window.innerWidth >= this.SMALL_BREAK_POINT) {
      this._resizeRegular();
    } else {
      this._resizeSmall();
    }
  };

  MessageBanner.prototype._resizeRegular = function () {
    if (this._clientWidth - this._bufferSize > this._initTextWidth && this._initTextWidth < this._textContainerMaxWidth) {
      this._textWidth = "auto";
      this._chevronButton.className = "ms-MessageBanner-expand";

      this._collapse();
    } else {
      this._textWidth = Math.min(this._clientWidth - this._bufferSize, this._textContainerMaxWidth) + "px";

      if (this._chevronButton.className.indexOf("is-visible") === -1) {
        this._chevronButton.className += " is-visible";
      }
    }

    this._clipper.style.width = this._textWidth;
  };

  MessageBanner.prototype._resizeSmall = function () {
    if (this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) > this._initTextWidth) {
      this._textWidth = "auto";

      this._collapse();
    } else {
      this._textWidth = this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) + "px";
    }

    this._clipper.style.width = this._textWidth;
  };

  MessageBanner.prototype._cacheDOM = function () {
    this._errorBanner = this.container;
    this._clipper = this.container.querySelector(".ms-MessageBanner-clipper");
    this._chevronButton = this.container.querySelector(".ms-MessageBanner-expand");
    this._actionButton = this.container.querySelector(".ms-MessageBanner-action");
    this._bufferSize = this._actionButton.offsetWidth + this._bufferElementsWidth;
    this._closeButton = this.container.querySelector(".ms-MessageBanner-close");
  };

  MessageBanner.prototype._expand = function () {
    var icon = this._chevronButton.querySelector(".ms-Icon");

    this._errorBanner.className += " is-expanded";
    icon.className = "ms-Icon ms-Icon--DoubleChevronUp";
  };

  MessageBanner.prototype._collapse = function () {
    var icon = this._chevronButton.querySelector(".ms-Icon");

    this._errorBanner.className = "ms-MessageBanner";
    icon.className = "ms-Icon ms-Icon--DoubleChevronDown";
  };

  MessageBanner.prototype._toggleExpansion = function () {
    if (this._errorBanner.className.indexOf("is-expanded") > -1) {
      this._collapse();
    } else {
      this._expand();
    }
  };

  MessageBanner.prototype._setListeners = function () {
    window.addEventListener("resize", this._onResize.bind(this), false);

    this._chevronButton.addEventListener("click", this._toggleExpansion.bind(this), false);

    this._closeButton.addEventListener("click", this.hide.bind(this), false);
  };

  return MessageBanner;
}();

var uiMessageBanner = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"messageBanner",staticClass:"ms-MessageBanner is-hidden"},[_c('div',{staticClass:"ms-MessageBanner-content"},[_c('div',{staticClass:"ms-MessageBanner-text"},[_c('div',{staticClass:"ms-MessageBanner-clipper"},[_vm._t("default")],2)]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"ms-MessageBanner-action"},[_vm._t("actions")],2)]),_vm._v(" "),_vm._m(1)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-MessageBanner-expand"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-MessageBanner-close"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})])}],_scopeId: 'data-v-349dd89f',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ .ms-u-slideRightIn10[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideRightIn10; -moz-animation-name: fadeIn, slideRightIn10; -ms-animation-name: fadeIn, slideRightIn10; -o-animation-name: fadeIn, slideRightIn10; animation-name: fadeIn, slideRightIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn10 { from { -webkit-transform: translate3d(-10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn10 { from { transform: translate3d(-10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn20[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideRightIn20; -moz-animation-name: fadeIn, slideRightIn20; -ms-animation-name: fadeIn, slideRightIn20; -o-animation-name: fadeIn, slideRightIn20; animation-name: fadeIn, slideRightIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn20 { from { -webkit-transform: translate3d(-20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn20 { from { transform: translate3d(-20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn40[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn40 { from { -webkit-transform: translate3d(-40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn40 { from { transform: translate3d(-40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn10[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideLeftIn10; -moz-animation-name: fadeIn, slideLeftIn10; -ms-animation-name: fadeIn, slideLeftIn10; -o-animation-name: fadeIn, slideLeftIn10; animation-name: fadeIn, slideLeftIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn10 { from { -webkit-transform: translate3d(10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn10 { from { transform: translate3d(10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn20[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideLeftIn20; -moz-animation-name: fadeIn, slideLeftIn20; -ms-animation-name: fadeIn, slideLeftIn20; -o-animation-name: fadeIn, slideLeftIn20; animation-name: fadeIn, slideLeftIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn20 { from { -webkit-transform: translate3d(20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn20 { from { transform: translate3d(20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn40[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn40 { from { -webkit-transform: translate3d(40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn40 { from { transform: translate3d(40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn400[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideRightIn400; -moz-animation-name: fadeIn, slideRightIn400; -ms-animation-name: fadeIn, slideRightIn400; -o-animation-name: fadeIn, slideRightIn400; animation-name: fadeIn, slideRightIn400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn400 { from { -webkit-transform: translate3d(-400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn400 { from { transform: translate3d(-400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn400[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideLeft400; -moz-animation-name: fadeIn, slideLeft400; -ms-animation-name: fadeIn, slideLeft400; -o-animation-name: fadeIn, slideLeft400; animation-name: fadeIn, slideLeft400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeft400 { from { -webkit-transform: translate3d(400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeft400 { from { transform: translate3d(400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn20[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideUpIn20; -moz-animation-name: fadeIn, slideUpIn20; -ms-animation-name: fadeIn, slideUpIn20; -o-animation-name: fadeIn, slideUpIn20; animation-name: fadeIn, slideUpIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn20 { from { -webkit-transform: translate3d(0px, 20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn20 { from { transform: translate3d(0px, 20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn10[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideUpIn10; -moz-animation-name: fadeIn, slideUpIn10; -ms-animation-name: fadeIn, slideUpIn10; -o-animation-name: fadeIn, slideUpIn10; animation-name: fadeIn, slideUpIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn10 { from { -webkit-transform: translate3d(0px, 10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn10 { from { transform: translate3d(0px, 10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn20[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideDownIn20; -moz-animation-name: fadeIn, slideDownIn20; -ms-animation-name: fadeIn, slideDownIn20; -o-animation-name: fadeIn, slideDownIn20; animation-name: fadeIn, slideDownIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn20 { from { -webkit-transform: translate3d(0px, -20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn20 { from { transform: translate3d(0px, -20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn10[data-v-349dd89f] { -webkit-animation-name: fadeIn, slideDownIn10; -moz-animation-name: fadeIn, slideDownIn10; -ms-animation-name: fadeIn, slideDownIn10; -o-animation-name: fadeIn, slideDownIn10; animation-name: fadeIn, slideDownIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn10 { from { -webkit-transform: translate3d(0px, -10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn10 { from { transform: translate3d(0px, -10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightOut40[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut40 { from { -webkit-transform: translate3d(0px, 0px, 0px); } to { -webkit-transform: translate3d(40px, 0px, 0px); } } @keyframes slideRightOut40 { from { transform: translate3d(0px, 0px, 0px); } to { transform: translate3d(40px, 0px, 0px); } } .ms-u-slideLeftOut40[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut40 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-40px, 0px, 0px); } } @keyframes slideLeftOut40 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-40px, 0px, 0px); } } .ms-u-slideRightOut400[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideRightOut400; -moz-animation-name: fadeOut, slideRightOut400; -ms-animation-name: fadeOut, slideRightOut400; -o-animation-name: fadeOut, slideRightOut400; animation-name: fadeOut, slideRightOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(400px, 0px, 0px); } } @keyframes slideRightOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(400px, 0px, 0px); } } .ms-u-slideLeftOut400[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideLeftOut400; -moz-animation-name: fadeOut, slideLeftOut400; -ms-animation-name: fadeOut, slideLeftOut400; -o-animation-name: fadeOut, slideLeftOut400; animation-name: fadeOut, slideLeftOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-400px, 0px, 0px); } } @keyframes slideLeftOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-400px, 0px, 0px); } } .ms-u-slideUpOut20[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideUpOut20; -moz-animation-name: fadeOut, slideUpOut20; -ms-animation-name: fadeOut, slideUpOut20; -o-animation-name: fadeOut, slideUpOut20; animation-name: fadeOut, slideUpOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -20px, 0px); } } @keyframes slideUpOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -20px, 0px); } } .ms-u-slideUpOut10[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideUpOut10; -moz-animation-name: fadeOut, slideUpOut10; -ms-animation-name: fadeOut, slideUpOut10; -o-animation-name: fadeOut, slideUpOut10; animation-name: fadeOut, slideUpOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -10px, 0px); } } @keyframes slideUpOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -10px, 0px); } } .ms-u-slideDownOut20[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideDownOut20; -moz-animation-name: fadeOut, slideDownOut20; -ms-animation-name: fadeOut, slideDownOut20; -o-animation-name: fadeOut, slideDownOut20; animation-name: fadeOut, slideDownOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 20px, 0px); } } @keyframes slideDownOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 20px, 0px); } } .ms-u-slideDownOut10[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideDownOut10; -moz-animation-name: fadeOut, slideDownOut10; -ms-animation-name: fadeOut, slideDownOut10; -o-animation-name: fadeOut, slideDownOut10; animation-name: fadeOut, slideDownOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 10px, 0px); } } @keyframes slideDownOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 10px, 0px); } } .ms-u-scaleUpIn100[data-v-349dd89f] { -webkit-animation-name: fadeIn, scaleUp100; -moz-animation-name: fadeIn, scaleUp100; -ms-animation-name: fadeIn, scaleUp100; -o-animation-name: fadeIn, scaleUp100; animation-name: fadeIn, scaleUp100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp100 { from { -webkit-transform: scale3d(0.98, 0.98, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleUp100 { from { transform: scale3d(0.98, 0.98, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleDownIn100[data-v-349dd89f] { -webkit-animation-name: fadeIn, scaleDown100; -moz-animation-name: fadeIn, scaleDown100; -ms-animation-name: fadeIn, scaleDown100; -o-animation-name: fadeIn, scaleDown100; animation-name: fadeIn, scaleDown100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown100 { from { -webkit-transform: scale3d(1.03, 1.03, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleDown100 { from { transform: scale3d(1.03, 1.03, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleUpOut103[data-v-349dd89f] { -webkit-animation-name: fadeOut, scaleUp103; -moz-animation-name: fadeOut, scaleUp103; -ms-animation-name: fadeOut, scaleUp103; -o-animation-name: fadeOut, scaleUp103; animation-name: fadeOut, scaleUp103; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp103 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(1.03, 1.03, 1); } } @keyframes scaleUp103 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(1.03, 1.03, 1); } } .ms-u-scaleDownOut98[data-v-349dd89f] { -webkit-animation-name: fadeOut, scaleDown98; -moz-animation-name: fadeOut, scaleDown98; -ms-animation-name: fadeOut, scaleDown98; -o-animation-name: fadeOut, scaleDown98; animation-name: fadeOut, scaleDown98; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown98 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(0.98, 0.98, 1); } } @keyframes scaleDown98 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(0.98, 0.98, 1); } } .ms-u-fadeIn400[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; } .ms-u-fadeIn100[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeIn200[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.267s; animation-duration: 0.267s; } .ms-u-fadeIn500[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeIn { from { opacity: 0; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } @keyframes fadeIn { from { opacity: 0; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } .ms-u-fadeOut400[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; } .ms-u-fadeOut100[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.1s; animation-duration: 0.1s; } .ms-u-fadeOut200[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeOut500[data-v-349dd89f] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeOut { from { opacity: 1; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } @keyframes fadeOut { from { opacity: 1; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } .ms-u-rotate90deg[data-v-349dd89f] { -webkit-animation-name: rotate90; -moz-animation-name: rotate90; -ms-animation-name: rotate90; -o-animation-name: rotate90; animation-name: rotate90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotate90 { from { -webkit-transform: rotateZ(0deg); } to { -webkit-transform: rotateZ(90deg); } } @keyframes rotate90 { from { transform: rotateZ(0deg); } to { transform: rotateZ(90deg); } } .ms-u-rotateN90deg[data-v-349dd89f] { -webkit-animation-name: rotateN90; -moz-animation-name: rotateN90; -ms-animation-name: rotateN90; -o-animation-name: rotateN90; animation-name: rotateN90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotateN90 { from { -webkit-transform: rotateZ(90deg); } to { -webkit-transform: rotateZ(0deg); } } @keyframes rotateN90 { from { transform: rotateZ(90deg); } to { transform: rotateZ(0deg); } } .ms-u-expandCollapse400[data-v-349dd89f] { -webkit-transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse200[data-v-349dd89f] { -webkit-transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse100[data-v-349dd89f] { -webkit-transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-delay100[data-v-349dd89f] { -webkit-animation-delay: 0.167s; animation-delay: 0.167s; } .ms-u-delay200[data-v-349dd89f] { -webkit-animation-delay: 0.267s; animation-delay: 0.267s; } /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-MessageBanner[data-v-349dd89f] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; position: relative; border-bottom: 1px solid \"[theme:neutralSecondaryAlt, default: #767676]\"; background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; min-width: 320px; width: 100%; height: 52px; text-align: center; overflow: hidden; -webkit-animation-name: fadeIn, slideDownIn20; -moz-animation-name: fadeIn, slideDownIn20; -ms-animation-name: fadeIn, slideDownIn20; -o-animation-name: fadeIn, slideDownIn20; animation-name: fadeIn, slideDownIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-MessageBanner .ms-Icon[data-v-349dd89f] { font-size: 16px; } .ms-MessageBanner.hide[data-v-349dd89f] { -webkit-animation-name: fadeOut, slideUpOut20; -moz-animation-name: fadeOut, slideUpOut20; -ms-animation-name: fadeOut, slideUpOut20; -o-animation-name: fadeOut, slideUpOut20; animation-name: fadeOut, slideUpOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-MessageBanner.is-hidden[data-v-349dd89f] { display: none; } .ms-MessageBanner-expand[data-v-349dd89f], .ms-MessageBanner-close[data-v-349dd89f] { height: 52px; width: 40px; cursor: pointer; border: 0; background-color: transparent; } .ms-MessageBanner-close[data-v-349dd89f] { position: absolute; right: 0; top: 0; line-height: 52px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-MessageBanner-text[data-v-349dd89f] { display: inline-block; padding: 18px 0; margin-left: 0; max-width: 770px; overflow: hidden; text-align: left; } .ms-MessageBanner-expand[data-v-349dd89f] { display: none; vertical-align: top; } .ms-MessageBanner-expand.is-visible[data-v-349dd89f] { display: inline-block; } .ms-MessageBanner-action[data-v-349dd89f] { display: inline-block; vertical-align: top; margin-top: 10px; margin-left: 10px; padding-right: 36px; } .ms-MessageBanner-action .ms-Button[data-v-349dd89f] { color: \"[theme:white, default: #ffffff]\"; } .ms-MessageBanner-clipper[data-v-349dd89f] { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block; vertical-align: top; } .ms-MessageBanner.is-expanded[data-v-349dd89f] { height: auto; } .ms-MessageBanner.is-expanded .ms-MessageBanner-clipper[data-v-349dd89f] { white-space: normal; } @media screen and (max-width: 479px) { .ms-MessageBanner-action[data-v-349dd89f] { margin: 0; display: block; text-align: right; padding: 0 10px 10px 0; } .ms-MessageBanner-text[data-v-349dd89f] { margin-left: -25px; padding: 18px 0 10px; min-width: 240px; } .ms-MessageBanner-expand[data-v-349dd89f] { display: inline-block; padding: 0; margin-left: -5px; width: 20px; } .ms-MessageBanner-expand .ms-Icon[data-v-349dd89f] { color: \"[theme:themePrimary, default: #0078d7]\"; } } .ms-Icon.ms-Icon--Clear[data-v-349dd89f] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
    props: {
        value: Boolean
    },
    data: function data(){
        return {
            instance : null
        };
    },
    watch: {
        value: function value() {
            this.setVisibility();
        }
    },
    methods:{
        setVisibility: function setVisibility(){
            var this$1 = this;

            if(this.value)
            {
                if(!this.instance)
                {
                    this.instance = new MessageBanner$1(this.$refs.messageBanner);
                    this.instance._closeButton.addEventListener("click", function (){
                        console.log("closed");
                        this$1.$emit('input', false);
                        // this.value = false;
                    }, false);
                }
                this.instance.show();
            }
            else if(this.instance && this.$refs.messageBanner.className.indexOf("is-hidden")<0)
                { this.instance.hide(); }
        }
    },
    mounted: function mounted() {
        this.setVisibility();
    }
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

var uiOverlay = {_scopeId: 'data-v-09ffd35c',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Overlay[data-v-09ffd35c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-09ffd35c] { display: block; } .ms-Overlay--dark[data-v-09ffd35c] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-09ffd35c] { overflow: hidden; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Overlay : Overlay
        };
    },
    // watch:{
    //     useDarkOverlay:{
    //         handler(newVal){
                
    //         },
    //         immediate : true
    //     }
    // },
    // props : {
    //     useDarkOverlay: Boolean
    // },
    extends :  overlay
}

function size () {
  var arguments$1 = arguments;

  for (var _len = arguments.length, size = new Array(_len), _key = 0; _key < _len; _key++) {
    size[_key] = arguments$1[_key];
  }

  size.push('');
  return {
    props: {
      size: {
        type: String,
        default: '',
        validator: function validator(value) {
          return size.indexOf(value) !== -1;
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
    },

    block: {
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

      if (this.block) {
        // Remove overlayElement to avoid close panel when click overlay.
        overlayElement.remove();
      } else {
        overlayElement.addEventListener('click', this.closePanel);
      }
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

var Panel$1 = function () {
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
}();

var uiPanel = {_scopeId: 'data-v-15bfa7e0',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ .ms-u-slideRightIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn10; -moz-animation-name: fadeIn, slideRightIn10; -ms-animation-name: fadeIn, slideRightIn10; -o-animation-name: fadeIn, slideRightIn10; animation-name: fadeIn, slideRightIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn10 { from { -webkit-transform: translate3d(-10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn10 { from { transform: translate3d(-10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn20; -moz-animation-name: fadeIn, slideRightIn20; -ms-animation-name: fadeIn, slideRightIn20; -o-animation-name: fadeIn, slideRightIn20; animation-name: fadeIn, slideRightIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn20 { from { -webkit-transform: translate3d(-20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn20 { from { transform: translate3d(-20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn40 { from { -webkit-transform: translate3d(-40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn40 { from { transform: translate3d(-40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn10; -moz-animation-name: fadeIn, slideLeftIn10; -ms-animation-name: fadeIn, slideLeftIn10; -o-animation-name: fadeIn, slideLeftIn10; animation-name: fadeIn, slideLeftIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn10 { from { -webkit-transform: translate3d(10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn10 { from { transform: translate3d(10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn20; -moz-animation-name: fadeIn, slideLeftIn20; -ms-animation-name: fadeIn, slideLeftIn20; -o-animation-name: fadeIn, slideLeftIn20; animation-name: fadeIn, slideLeftIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn20 { from { -webkit-transform: translate3d(20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn20 { from { transform: translate3d(20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn40 { from { -webkit-transform: translate3d(40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn40 { from { transform: translate3d(40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn400; -moz-animation-name: fadeIn, slideRightIn400; -ms-animation-name: fadeIn, slideRightIn400; -o-animation-name: fadeIn, slideRightIn400; animation-name: fadeIn, slideRightIn400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn400 { from { -webkit-transform: translate3d(-400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn400 { from { transform: translate3d(-400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeft400; -moz-animation-name: fadeIn, slideLeft400; -ms-animation-name: fadeIn, slideLeft400; -o-animation-name: fadeIn, slideLeft400; animation-name: fadeIn, slideLeft400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeft400 { from { -webkit-transform: translate3d(400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeft400 { from { transform: translate3d(400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn20; -moz-animation-name: fadeIn, slideUpIn20; -ms-animation-name: fadeIn, slideUpIn20; -o-animation-name: fadeIn, slideUpIn20; animation-name: fadeIn, slideUpIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn20 { from { -webkit-transform: translate3d(0px, 20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn20 { from { transform: translate3d(0px, 20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn10; -moz-animation-name: fadeIn, slideUpIn10; -ms-animation-name: fadeIn, slideUpIn10; -o-animation-name: fadeIn, slideUpIn10; animation-name: fadeIn, slideUpIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn10 { from { -webkit-transform: translate3d(0px, 10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn10 { from { transform: translate3d(0px, 10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn20; -moz-animation-name: fadeIn, slideDownIn20; -ms-animation-name: fadeIn, slideDownIn20; -o-animation-name: fadeIn, slideDownIn20; animation-name: fadeIn, slideDownIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn20 { from { -webkit-transform: translate3d(0px, -20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn20 { from { transform: translate3d(0px, -20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn10; -moz-animation-name: fadeIn, slideDownIn10; -ms-animation-name: fadeIn, slideDownIn10; -o-animation-name: fadeIn, slideDownIn10; animation-name: fadeIn, slideDownIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn10 { from { -webkit-transform: translate3d(0px, -10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn10 { from { transform: translate3d(0px, -10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut40 { from { -webkit-transform: translate3d(0px, 0px, 0px); } to { -webkit-transform: translate3d(40px, 0px, 0px); } } @keyframes slideRightOut40 { from { transform: translate3d(0px, 0px, 0px); } to { transform: translate3d(40px, 0px, 0px); } } .ms-u-slideLeftOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut40 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-40px, 0px, 0px); } } @keyframes slideLeftOut40 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-40px, 0px, 0px); } } .ms-u-slideRightOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut400; -moz-animation-name: fadeOut, slideRightOut400; -ms-animation-name: fadeOut, slideRightOut400; -o-animation-name: fadeOut, slideRightOut400; animation-name: fadeOut, slideRightOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(400px, 0px, 0px); } } @keyframes slideRightOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(400px, 0px, 0px); } } .ms-u-slideLeftOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut400; -moz-animation-name: fadeOut, slideLeftOut400; -ms-animation-name: fadeOut, slideLeftOut400; -o-animation-name: fadeOut, slideLeftOut400; animation-name: fadeOut, slideLeftOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-400px, 0px, 0px); } } @keyframes slideLeftOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-400px, 0px, 0px); } } .ms-u-slideUpOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut20; -moz-animation-name: fadeOut, slideUpOut20; -ms-animation-name: fadeOut, slideUpOut20; -o-animation-name: fadeOut, slideUpOut20; animation-name: fadeOut, slideUpOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -20px, 0px); } } @keyframes slideUpOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -20px, 0px); } } .ms-u-slideUpOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut10; -moz-animation-name: fadeOut, slideUpOut10; -ms-animation-name: fadeOut, slideUpOut10; -o-animation-name: fadeOut, slideUpOut10; animation-name: fadeOut, slideUpOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -10px, 0px); } } @keyframes slideUpOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -10px, 0px); } } .ms-u-slideDownOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut20; -moz-animation-name: fadeOut, slideDownOut20; -ms-animation-name: fadeOut, slideDownOut20; -o-animation-name: fadeOut, slideDownOut20; animation-name: fadeOut, slideDownOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 20px, 0px); } } @keyframes slideDownOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 20px, 0px); } } .ms-u-slideDownOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut10; -moz-animation-name: fadeOut, slideDownOut10; -ms-animation-name: fadeOut, slideDownOut10; -o-animation-name: fadeOut, slideDownOut10; animation-name: fadeOut, slideDownOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 10px, 0px); } } @keyframes slideDownOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 10px, 0px); } } .ms-u-scaleUpIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleUp100; -moz-animation-name: fadeIn, scaleUp100; -ms-animation-name: fadeIn, scaleUp100; -o-animation-name: fadeIn, scaleUp100; animation-name: fadeIn, scaleUp100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp100 { from { -webkit-transform: scale3d(0.98, 0.98, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleUp100 { from { transform: scale3d(0.98, 0.98, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleDownIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleDown100; -moz-animation-name: fadeIn, scaleDown100; -ms-animation-name: fadeIn, scaleDown100; -o-animation-name: fadeIn, scaleDown100; animation-name: fadeIn, scaleDown100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown100 { from { -webkit-transform: scale3d(1.03, 1.03, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleDown100 { from { transform: scale3d(1.03, 1.03, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleUpOut103[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleUp103; -moz-animation-name: fadeOut, scaleUp103; -ms-animation-name: fadeOut, scaleUp103; -o-animation-name: fadeOut, scaleUp103; animation-name: fadeOut, scaleUp103; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp103 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(1.03, 1.03, 1); } } @keyframes scaleUp103 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(1.03, 1.03, 1); } } .ms-u-scaleDownOut98[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleDown98; -moz-animation-name: fadeOut, scaleDown98; -ms-animation-name: fadeOut, scaleDown98; -o-animation-name: fadeOut, scaleDown98; animation-name: fadeOut, scaleDown98; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown98 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(0.98, 0.98, 1); } } @keyframes scaleDown98 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(0.98, 0.98, 1); } } .ms-u-fadeIn400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; } .ms-u-fadeIn100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeIn200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.267s; animation-duration: 0.267s; } .ms-u-fadeIn500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeIn { from { opacity: 0; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } @keyframes fadeIn { from { opacity: 0; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } .ms-u-fadeOut400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; } .ms-u-fadeOut100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.1s; animation-duration: 0.1s; } .ms-u-fadeOut200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeOut500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeOut { from { opacity: 1; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } @keyframes fadeOut { from { opacity: 1; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } .ms-u-rotate90deg[data-v-15bfa7e0] { -webkit-animation-name: rotate90; -moz-animation-name: rotate90; -ms-animation-name: rotate90; -o-animation-name: rotate90; animation-name: rotate90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotate90 { from { -webkit-transform: rotateZ(0deg); } to { -webkit-transform: rotateZ(90deg); } } @keyframes rotate90 { from { transform: rotateZ(0deg); } to { transform: rotateZ(90deg); } } .ms-u-rotateN90deg[data-v-15bfa7e0] { -webkit-animation-name: rotateN90; -moz-animation-name: rotateN90; -ms-animation-name: rotateN90; -o-animation-name: rotateN90; animation-name: rotateN90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotateN90 { from { -webkit-transform: rotateZ(90deg); } to { -webkit-transform: rotateZ(0deg); } } @keyframes rotateN90 { from { transform: rotateZ(90deg); } to { transform: rotateZ(0deg); } } .ms-u-expandCollapse400[data-v-15bfa7e0] { -webkit-transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse200[data-v-15bfa7e0] { -webkit-transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse100[data-v-15bfa7e0] { -webkit-transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-delay100[data-v-15bfa7e0] { -webkit-animation-delay: 0.167s; animation-delay: 0.167s; } .ms-u-delay200[data-v-15bfa7e0] { -webkit-animation-delay: 0.267s; animation-delay: 0.267s; } /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Panel[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:white, default: #ffffff]\"; width: 100%; max-width: 340px; box-shadow: -30px 0 30px -30px rgba(0, 0, 0, 0.2); position: absolute; top: 0; right: 0; bottom: 0; z-index: 10; display: none; height: 100%; } .ms-Panel.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.is-open[data-v-15bfa7e0] { display: block; } .ms-Panel .ms-CommandBar[data-v-15bfa7e0] { padding-right: 0; padding-left: 8px; } .ms-Panel.ms-Panel--md[data-v-15bfa7e0] { max-width: 340px; } .ms-Panel.ms-Panel--lg[data-v-15bfa7e0] { max-width: 644px; } .ms-Panel.ms-Panel--xl[data-v-15bfa7e0] { max-width: 940px; } .ms-Panel.ms-Panel--xxl[data-v-15bfa7e0] { max-width: 1192px; } .ms-Panel--left[data-v-15bfa7e0] { box-shadow: -30px 0 30px 30px rgba(0, 0, 0, 0.2); left: 0; right: auto; } .ms-Panel--left.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel--left.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel-closeButton[data-v-15bfa7e0] { background: none; border: 0; cursor: pointer; position: absolute; right: 6px; top: 0; height: 40px; width: 40px; line-height: 40px; outline: 0; padding: 0; color: \"[theme:neutralSecondary, default: #666666]\"; font-size: 16px; } .ms-Panel-closeButton[data-v-15bfa7e0]:hover { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Panel-closeButton .ms-Icon--Cancel[data-v-15bfa7e0] { margin-top: 2px; } @media (max-width: 639px) { .ms-Panel-closeButton[data-v-15bfa7e0] { font-size: 20px; line-height: 20px; height: 44px; right: 4px; } } .ms-Panel-contentInner[data-v-15bfa7e0] { margin-top: 40px; padding: 0 16px 20px; overflow-y: auto; height: 100%; } @media (min-width: 640px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 32px 20px; } } @media (min-width: 1366px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 40px 20px; } } .ms-Panel-headerText[data-v-15bfa7e0] { font-weight: 100; font-size: 21px; color: \"[theme:neutralPrimary, default: #333333]\"; margin: 10px 0; padding: 4px 0; line-height: 1; text-overflow: ellipsis; overflow: hidden; } @media (min-width: 1024px) { .ms-Panel-headerText[data-v-15bfa7e0] { margin-top: 30px; } } .ms-Overlay[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-15bfa7e0] { display: block; } .ms-Overlay--dark[data-v-15bfa7e0] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-15bfa7e0] { overflow: hidden; } .ms-Panel-contentInner[data-v-15bfa7e0] { margin-top: 0; border-top: solid 40px transparent; box-sizing: border-box; } ");},
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

var Animate = function () {
  function Animate() {}

  Animate.transition = function (element, props) {
    var obj = {
      element: element,
      props: props,
      transformations: {}
    };

    Animate._animationObjects.push(obj);

    Animate._parseProperties(obj);

    Animate._createTransition(obj);

    setTimeout(Animate._setProperties, 0, obj);

    Animate._setCallback(obj);
  };

  Animate.animation = function (element, keyframes, props) {
    var obj = {
      element: element,
      keyframes: keyframes,
      props: props
    };

    Animate._animationObjects.push(obj);

    Animate._parseProperties(obj);

    Animate._createAnimation(obj);

    Animate._setCallback(obj);
  };

  Animate.scrollTo = function (element, props) {
    var obj = {
      element: element,
      props: props,
      step: 0
    };

    Animate._setScrollProperties(obj);

    if (obj.props.delay) {
      setTimeout(Animate._animationObjects, obj.props.delay * 1000, obj);
    } else {
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
      } else {
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
    } else {
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
      } else if (Animate._contains(Animate._filters, key)) {
        hasFilter = true;
      } else {
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
      } else if (Animate._contains(Animate._filters, key)) {
        Animate._setFilterValues(obj, key);
      } else {
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
      value += key !== "opacity" && key !== "backgroundColor" && key !== "boxShadow" ? "px" : "";
    }

    obj.element.style[key] = value;
  };

  Animate._setFilterValues = function (obj, key) {
    var value = obj.tweenObj[key];

    if (key === "hueRotate") {
      value = "(" + value + "deg)";
    } else {
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
    var rotate = "",
        scale = "",
        skew = "",
        translate = "";
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
    return time === duration ? begin + change : change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
  };

  Animate._transformProps = ["x", "y", "z", "scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"];
  Animate._filters = ["blur", "brightness", "contrast", "dropShadow", "grayscale", "hueRotate", "invert", "saturate", "sepia"];
  Animate._timeProps = ["duration", "ease", "delay"];
  Animate._callbackProps = ["onEnd", "onEndArgs"];
  Animate._animationObjects = [];
  return Animate;
}();

var Ease = function () {
  function Ease() {}

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
}();

var PersonaCard = function () {
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
    } else {
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
      onEnd: function onEnd() {
        _this._actionDetailBox.style.overflowY = "auto";
      }
    });
  };

  return PersonaCard;
}();

var MODAL_POSITION$3 = "top";

var Persona = function () {
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

    this._contextualHostInstance = new ContextualHost(this._personaCard, MODAL_POSITION$3, this._persona);
  };

  Persona.prototype._personaEventHandler = function () {
    this._createContextualHostInstance();
  };

  Persona.prototype._assignEvents = function () {
    var _this = this;

    this._persona.addEventListener("click", this._personaEventHandler.bind(this), false);

    this._persona.addEventListener("keyup", function (e) {
      return e.keyCode === 32 ? _this._personaEventHandler() : null;
    }, false);
  };

  return Persona;
}();

var uiPersona = {_scopeId: 'data-v-08ee50b8',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Persona[data-v-08ee50b8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; line-height: 1; position: relative; width: 100%; height: 48px; display: table; table-layout: fixed; border-collapse: separate; } .ms-Persona .ms-ContextualHost[data-v-08ee50b8] { display: none; } .ms-Persona-imageArea[data-v-08ee50b8] { position: absolute; overflow: hidden; text-align: center; max-width: 48px; height: 48px; border-radius: 50%; z-index: 0; width: 100%; top: 0; left: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona-placeholder[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; position: absolute; right: 0; left: 0; font-size: 47px; top: 9px; z-index: 5; } .ms-Persona-initials[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 17px; font-weight: 100; line-height: 48px; } .ms-Persona-initials.ms-Persona-initials--blueLight[data-v-08ee50b8] { background-color: \"[theme:blueLight, default: #00bcf2]\"; } .ms-Persona-initials.ms-Persona-initials--blue[data-v-08ee50b8] { background-color: \"[theme:blue, default: #0078d7]\"; } .ms-Persona-initials.ms-Persona-initials--blueDark[data-v-08ee50b8] { background-color: \"[theme:blueDark, default: #002050]\"; } .ms-Persona-initials.ms-Persona-initials--teal[data-v-08ee50b8] { background-color: \"[theme:teal, default: #008272]\"; } .ms-Persona-initials.ms-Persona-initials--greenLight[data-v-08ee50b8] { background-color: \"[theme:greenLight, default: #bad80a]\"; } .ms-Persona-initials.ms-Persona-initials--green[data-v-08ee50b8] { background-color: \"[theme:green, default: #107c10]\"; } .ms-Persona-initials.ms-Persona-initials--greenDark[data-v-08ee50b8] { background-color: \"[theme:greenDark, default: #004b1c]\"; } .ms-Persona-initials.ms-Persona-initials--magentaLight[data-v-08ee50b8] { background-color: \"[theme:magentaLight, default: #e3008c]\"; } .ms-Persona-initials.ms-Persona-initials--magenta[data-v-08ee50b8] { background-color: \"[theme:magenta, default: #b4009e]\"; } .ms-Persona-initials.ms-Persona-initials--purpleLight[data-v-08ee50b8] { background-color: \"[theme:purpleLight, default: #b4a0ff]\"; } .ms-Persona-initials.ms-Persona-initials--purple[data-v-08ee50b8] { background-color: \"[theme:purple, default: #5c2d91]\"; } .ms-Persona-initials.ms-Persona-initials--black[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; } .ms-Persona-initials.ms-Persona-initials--orange[data-v-08ee50b8] { background-color: \"[theme:orange, default: #d83b01]\"; } .ms-Persona-initials.ms-Persona-initials--red[data-v-08ee50b8] { background-color: \"[theme:red, default: #e81123]\"; } .ms-Persona-initials.ms-Persona-initials--redDark[data-v-08ee50b8] { background-color: \"[theme:redDark, default: #a80000]\"; } .ms-Persona-image[data-v-08ee50b8] { position: absolute; top: 0; left: 0; height: 48px; z-index: 10; width: 100%; } .ms-Persona-image[src=''][data-v-08ee50b8] { display: none; } .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; position: absolute; height: 12px; width: 12px; border-radius: 50%; top: auto; left: 34px; bottom: -1px; border: 2px solid \"[theme:white, default: #ffffff]\"; text-align: center; } @media screen and (-ms-high-contrast: active) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px #1AEBFF inset; color: \"[theme:black, default: #000000]\"; background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px #37006E inset; color: \"[theme:white, default: #ffffff]\"; background-color: \"[theme:black, default: #000000]\"; } } .ms-Persona-presenceIcon[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 8px; line-height: 12px; vertical-align: top; } .ms-Persona-details[data-v-08ee50b8] { padding: 0 12px; vertical-align: middle; overflow: hidden; text-align: left; padding-left: 60px; display: table-cell; width: 100%; } .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; overflow: hidden; text-overflow: ellipsis; } .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 400; font-size: 17px; margin-top: -3px; line-height: 1.4; } .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralSecondary, default: #666666]\"; font-weight: 400; font-size: 12px; white-space: nowrap; line-height: 1.3; } .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: none; } .ms-Persona.ms-Persona--tiny[data-v-08ee50b8] { height: 30px; display: inline-block; } .ms-Persona.ms-Persona--tiny .ms-Persona-imageArea[data-v-08ee50b8] { overflow: visible; display: none; } .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { right: auto; top: 10px; left: 0; border: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { top: 9px; border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona.ms-Persona--tiny .ms-Persona-details[data-v-08ee50b8] { padding-left: 20px; } .ms-Persona.ms-Persona--tiny .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 9px; } .ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly[data-v-08ee50b8] { padding: 0; background-color: transparent; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText[data-v-08ee50b8]::after { content: ';'; } .ms-Persona.ms-Persona--xs[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile[data-v-08ee50b8], .ms-Persona.ms-Persona--token[data-v-08ee50b8] { height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xs .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-image[data-v-08ee50b8] { max-width: 32px; height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 28px; top: 6px; } .ms-Persona.ms-Persona--xs .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { font-size: 12px; line-height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-presence[data-v-08ee50b8] { left: 19px; } .ms-Persona.ms-Persona--xs .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { padding-left: 40px; } .ms-Persona.ms-Persona--xs .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 3px; } .ms-Persona.ms-Persona--xs .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--sm[data-v-08ee50b8] { height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-image[data-v-08ee50b8] { max-width: 40px; height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 38px; top: 5px; } .ms-Persona.ms-Persona--sm .ms-Persona-initials[data-v-08ee50b8] { font-size: 14px; line-height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-presence[data-v-08ee50b8] { left: 27px; } .ms-Persona.ms-Persona--sm .ms-Persona-details[data-v-08ee50b8] { padding-left: 48px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 1px; } .ms-Persona.ms-Persona--lg[data-v-08ee50b8] { height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--lg .ms-Persona-image[data-v-08ee50b8] { max-width: 72px; height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 67px; top: 10px; } .ms-Persona.ms-Persona--lg .ms-Persona-initials[data-v-08ee50b8] { font-size: 28px; line-height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8] { left: 49px; height: 20px; width: 20px; border-width: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 20px; font-size: 14px; } .ms-Persona.ms-Persona--lg .ms-Persona-details[data-v-08ee50b8] { padding-left: 84px; } .ms-Persona.ms-Persona--lg .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--xl[data-v-08ee50b8] { height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-image[data-v-08ee50b8] { max-width: 100px; height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 95px; top: 12px; } .ms-Persona.ms-Persona--xl .ms-Persona-initials[data-v-08ee50b8] { font-size: 42px; line-height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8] { height: 28px; width: 28px; left: 71px; border-width: 4px; } .ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 28px; font-size: 21px; position: relative; top: 1px; } .ms-Persona.ms-Persona--xl .ms-Persona-details[data-v-08ee50b8] { padding-left: 120px; } .ms-Persona.ms-Persona--xl .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 21px; font-weight: 300; margin-top: 0; } .ms-Persona.ms-Persona--xl .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 2px; } .ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--darkText .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8] { cursor: pointer; padding: 0 10px; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):hover, .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):focus { background-color: \"[theme:themeLighter, default: #deecf9]\"; outline: 1px solid transparent; } .ms-Persona.ms-Persona--available .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; } .ms-Persona.ms-Persona--away .ms-Persona-presence[data-v-08ee50b8] { background-color: #FCD116; } .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon[data-v-08ee50b8] { position: relative; left: 1px; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::before { content: ''; width: 100%; height: 100%; position: absolute; top: 0; left: 0; box-shadow: 0 0 0 2px #D93B3B inset; border-radius: 50%; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::after { content: ''; width: 100%; height: 2px; background-color: #D93B3B; transform: rotate(-45deg); position: absolute; top: 5px; left: 0; } .ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8]::after { top: 9px; } .ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8]::after { top: 13px; } .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #D93B3B; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #37006E; } } .ms-Persona.ms-Persona--dnd .ms-Persona-presence[data-v-08ee50b8] { background-color: #E81123; } .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: #93ABBD; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px \"[theme:white, default: #ffffff]\" inset; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px \"[theme:black, default: #000000]\" inset; } } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8] { display: inline-block; width: auto; } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8] { position: relative; width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8] { position: relative; } .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--token[data-v-08ee50b8] { display: inline-flex; width: auto; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-radius: 20px; margin: 4px; } .ms-Persona.ms-Persona--token[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8] { border-radius: 20px; display: inline-block; width: 32px; height: 32px; padding: 0; line-height: 30px; transition: background-color 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); text-align: center; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8] { width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { height: 30px; display: inline-block; width: auto; padding-right: 8px; } .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { padding-top: 0; line-height: 34px; } .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { position: relative; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Persona : Persona
        };
    },
    extends :  persona
}

var pivot = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"pivot",staticClass:"ms-Pivot",class:_vm.pivotClass},[_c('ul',{staticClass:"ms-Pivot-links",on:{"click":_vm.clickEvent}},_vm._l((_vm.pivotItems),function(item,index){return _c('li',{staticClass:"ms-Pivot-link",class:{ 'is-selected': index == 0 },attrs:{"tabindex":"1","data-content":item,"title":item}},[_vm._v(" "+_vm._s(item)+" ")])}),0),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-pivot',

  mixins: [
    size('large'),
    type('tabs'),
    eventHub
  ],

  data: function data() {
    return {
      pivotItems: []
    };
  },

  computed: {
    pivotClass: function pivotClass() {
      var obj;

      return ( obj = {}, obj[("ms-Pivot--" + (this.size))] = !!this.size, obj[("ms-Pivot--" + (this.type))] = !!this.type, obj );
    }
  },

  created: function created() {
    this.eventHub.$on('addPivotItem', this.addPivotItem);
  },

  beforeDestroy: function beforeDestroy() {
    this.eventHub.$off('addPivotItem', this.addPivotItem);
  },

  mounted: function mounted() {
    new this.$fabric.Pivot(this.$refs.pivot);
  },

  methods: {
    addPivotItem: function addPivotItem(label) {
      this.pivotItems.push(label);
    },

    clickEvent: function clickEvent(event) {
      if (event.target.tagName == 'LI') {
        this.$emit('click', event);
      }
    }
  }
};

var Pivot = function () {
  function Pivot(container) {
    this._container = container;

    this._addListeners();

    var firstContent = this._container.querySelector(".ms-Pivot-content");

    firstContent.style.display = "block";
  }

  Pivot.prototype.removeListeners = function () {
    this._container.removeEventListener("click", this._selectTab.bind(this));
  };

  Pivot.prototype._addListeners = function () {
    var _this = this;

    this._container.querySelector(".ms-Pivot-links").addEventListener("click", this._selectTabMouse.bind(this), false);

    this._container.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        _this._selectTabKeyboard(event);
      }
    }, true);
  };

  Pivot.prototype._selectTab = function (selectedTab) {
    if (selectedTab.classList.contains("ms-Pivot-link") && !selectedTab.querySelector(".ms-Pivot-ellipsis")) {
      var sibling = selectedTab.parentElement.firstElementChild;

      while (sibling) {
        sibling.classList.remove("is-selected");
        sibling = sibling.nextElementSibling;
      }

      selectedTab.classList.add("is-selected");

      var containers = this._container.querySelectorAll(".ms-Pivot-content");

      Array.prototype.forEach.call(containers, function (el, i) {
        el.style.display = "none";
      });
      var selectedContentName = selectedTab.getAttribute("data-content");

      var selectedContent = this._container.querySelector(".ms-Pivot-content[data-content='" + selectedContentName + "']");

      selectedContent.style.display = "block";
    }
  };

  Pivot.prototype._selectTabMouse = function (event) {
    event.preventDefault();
    var selectedTab = event.target;

    this._selectTab(selectedTab);
  };

  Pivot.prototype._selectTabKeyboard = function (event) {
    event.preventDefault();
    var selectedTab = event.target;

    this._selectTab(selectedTab);
  };

  return Pivot;
}();

var uiPivot = {_scopeId: 'data-v-2646c164',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Pivot[data-v-2646c164] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; font-size: 14px; font-weight: 400; } .ms-Pivot-links[data-v-2646c164] { font-size: 0; height: 40px; list-style-type: none; padding: 0; white-space: nowrap; } .ms-Pivot-link[data-v-2646c164] { color: \"[theme:neutralPrimary, default: #333333]\"; display: inline-block; font-size: 14px; font-weight: 400; line-height: 40px; margin-right: 8px; padding: 0 8px; text-align: center; vertical-align: top; } .ms-Pivot-link[data-v-2646c164]:hover { cursor: pointer; } .ms-Pivot-link[data-v-2646c164]::before { background-color: transparent; bottom: 0; content: ''; height: 2px; left: 8px; position: absolute; right: 8px; transition: background-color 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-Pivot-link[data-v-2646c164]::after { color: transparent; content: attr(title); display: block; font-weight: bold; height: 1px; overflow: hidden; visibility: hidden; } .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 600; position: relative; } .ms-Pivot-link.is-selected[data-v-2646c164]::before { background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-link.is-disabled[data-v-2646c164] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164] { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Pivot-link.ms-Pivot-link--overflow.is-selected[data-v-2646c164] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:hover:not(.is-selected), .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:focus:not(.is-selected) { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-ellipsis[data-v-2646c164] { font-size: 15px; position: relative; top: 0; } .ms-Pivot-content[data-v-2646c164] { display: none; margin-top: 20px; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link[data-v-2646c164] { font-size: 17px; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 300; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]::after { font-size: 17px; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164] { height: 40px; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; line-height: 40px; margin-right: -2px; padding: 0 10px; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:hover:not(.is-selected):not(.ms-Pivot-link--overflow), .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:focus:not(.is-selected):not(.ms-Pivot-link--overflow) { color: \"[theme:black, default: #000000]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:active { color: \"[theme:white, default: #ffffff]\"; background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected[data-v-2646c164] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; font-weight: 300; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:hover:not(.is-selected), .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:focus:not(.is-selected) { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 600; } } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Pivot : Pivot
        };
    },
    extends :  pivot
}

var PivotItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-Pivot-content",attrs:{"data-content":_vm.label}},[_vm._t("default")],2)},staticRenderFns: [],
  name: 'ou-pivot-item',

  inject: ['eventHub'],

  props: {
    label: {
      type: String,
      required: true
    }
  },

  beforeMount: function beforeMount() {
    this.eventHub.$emit('addPivotItem', this.label);
  }
};

var uiPivotItem = {
    beforeCreate: function beforeCreate(){ loadStyles("");},
    extends :  PivotItem
}

var ProgressIndicator = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"progressIndicator",staticClass:"ms-ProgressIndicator"},[(_vm.name)?_c('div',{staticClass:"ms-ProgressIndicator-itemName"},[_vm._v(_vm._s(_vm.name))]):_vm._e(),_vm._v(" "),_vm._m(0),_vm._v(" "),(_vm.description)?_c('div',{staticClass:"ms-ProgressIndicator-itemDescription"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ProgressIndicator-itemProgress"},[_c('div',{staticClass:"ms-ProgressIndicator-progressTrack"}),_vm._v(" "),_c('div',{staticClass:"ms-ProgressIndicator-progressBar"})])}],
  name: 'ou-progress-indicator',

  props: {
    name: String,
    description: String,

    percent: {
      type: Number,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    }
  },

  data: function data() {
    return {
      progressIndicatorInstance: null
    };
  },

  watch: {
    percent: function percent() {
      this.setProgressIndicator();
    }
  },

  mounted: function mounted() {
    var progressIndicatorElement = this.$refs.progressIndicator;

    this.progressIndicatorInstance = new this.$fabric.ProgressIndicator(progressIndicatorElement);
    this.setProgressIndicator();
  },

  methods: {
    setProgressIndicator: function setProgressIndicator() {
      this.progressIndicatorInstance.setProgressPercent(this.percent);
    }
  }
};

var ProgressIndicator$1 = function () {
  function ProgressIndicator(container) {
    this.container = container;
    this.cacheDOM();
  }

  ProgressIndicator.prototype.setProgressPercent = function (percent) {
    this._progressBar.style.width = Math.round(this._width * percent) + "px";
  };

  ProgressIndicator.prototype.setProgress = function (progress) {
    this._progress = progress;
    var percentage = this._progress / this._total;
    this.setProgressPercent(percentage);
  };

  ProgressIndicator.prototype.setTotal = function (total) {
    this._total = total;
  };

  ProgressIndicator.prototype.setName = function (name) {
    this._itemName.innerHTML = name;
  };

  ProgressIndicator.prototype.setDescription = function (description) {
    this._itemDescription.innerHTML = description;
  };

  ProgressIndicator.prototype.cacheDOM = function () {
    this._itemName = this.container.querySelector(".ms-ProgressIndicator-itemName") || null;
    this._itemDescription = this.container.querySelector(".ms-ProgressIndicator-itemDescription") || null;
    this._progressBar = this.container.querySelector(".ms-ProgressIndicator-progressBar");
    var itemProgress = this.container.querySelector(".ms-ProgressIndicator-itemProgress");
    this._width = itemProgress.offsetWidth;
  };

  return ProgressIndicator;
}();

var uiProgressIndicator = {_scopeId: 'data-v-134f1924',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ProgressIndicator[data-v-134f1924] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-weight: 400; } .ms-ProgressIndicator-itemName[data-v-134f1924] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-top: 4px; line-height: 20px; } .ms-ProgressIndicator-itemDescription[data-v-134f1924] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-size: 11px; line-height: 18px; } .ms-ProgressIndicator-itemProgress[data-v-134f1924] { position: relative; width: 180px; height: 2px; padding: 8px 0; } .ms-ProgressIndicator-progressTrack[data-v-134f1924] { position: absolute; width: 100%; height: 2px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; outline: 1px solid transparent; } .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:themePrimary, default: #0078d7]\"; height: 2px; position: absolute; transition: width .3s ease; width: 0; } @media screen and (-ms-high-contrast: active) { .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:black, default: #000000]\"; } } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            ProgressIndicator : ProgressIndicator$1
        };
    },
    extends :  ProgressIndicator
}

var searchBox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"searchBox",staticClass:"ms-SearchBox",class:_vm.searchBoxClass},[_c('input',{ref:"searchBoxInput",staticClass:"ms-SearchBox-field",attrs:{"type":"text"},domProps:{"value":_vm.value},on:{"input":_vm.updateValue}}),_vm._v(" "),_c('label',{staticClass:"ms-SearchBox-label"},[_c('i',{staticClass:"ms-SearchBox-icon ms-Icon ms-Icon--Search"}),_vm._v(" "),(!_vm.hasValue)?_c('span',{staticClass:"ms-SearchBox-text"},[_vm._v(_vm._s(_vm.placeholder))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel",on:{"mousedown":_vm.clearValue}},[_vm._m(0)])])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ms-CommandButton-button"},[_c('span',{staticClass:"ms-CommandButton-icon"},[_c('i',{staticClass:"ms-Icon ms-Icon--Clear"})]),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"})])}],
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
      hasValue: !!this.value,
      searchBoxInstance: null
    };
  },

  computed: {
    searchBoxClass: function searchBoxClass() {
      var obj;

      return ( obj = {}, obj[("ms-SearchBox--" + (this.type))] = !!this.type, obj['is-collapsed'] =  this.collapsed, obj );
    }
  },

  mounted: function mounted() {
    this.searchBoxInstance = new this.$fabric.SearchBox(this.$refs.searchBox);

    // Overwrite the default blur event on searchBoxField
    // to prevent lose content when searchBox blur.
    // You can see here https://github.com/OfficeDev/office-ui-fabric-js/issues/301
    this.searchBoxInstance._searchBoxField.removeEventListener('blur', this.searchBoxInstance._boundHandleBlur, true);
    this.searchBoxInstance._searchBoxField.addEventListener('blur', this.blurEvent, true);
  },

  methods: {
    updateValue: function updateValue(event) {
      this.$emit('input', event.target.value);
    },

    clearValue: function clearValue() {
      this.$emit('input', '');
    },

    blurEvent: function blurEvent() {
      var self = this.searchBoxInstance;

      if (!self._clearOnly) {
        self._searchBox.removeEventListener('keyup', self._boundEnableClose);
        setTimeout(function () {
          if (!self._searchBox.contains(document.activeElement) && self._searchBoxField.value == '') {
            self._clearSearchBox();
            self._collapseSearchBox();
            self.setCollapsedListeners();
          }
        }, 10);
      } else {
        self._searchBoxField.focus();
      }

      self._clearOnly = false;
    }
  }
};

var uiSearchbox = {_scopeId: 'data-v-880410a2',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-880410a2]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } /* searchbox uses mixins from label */ .ms-CommandButton[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden[data-v-880410a2] { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2] { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2]:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu[data-v-880410a2] { display: none; } .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton-splitIcon[data-v-880410a2]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button[data-v-880410a2]:active, .ms-CommandButton-splitIcon[data-v-880410a2]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button[data-v-880410a2]:focus, .ms-CommandButton-splitIcon[data-v-880410a2]:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-880410a2] { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-880410a2] { line-height: 44px; } } .ms-CommandButton-button[data-v-880410a2] { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 4px; } } .ms-CommandButton-icon[data-v-880410a2] { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label[data-v-880410a2] { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label[data-v-880410a2]:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: none; } } .ms-CommandButton-splitIcon[data-v-880410a2] { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2]::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-880410a2] { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-880410a2] { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-880410a2] { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-880410a2] { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-880410a2] { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-880410a2]::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot[data-v-880410a2]:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { font-size: 16px; } } /* searchbox uses classes from CommandButton */ .ms-SearchBox[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; height: 36px; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; position: relative; margin-bottom: 10px; display: inline-block; overflow: hidden; background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.is-active[data-v-880410a2] { z-index: 10; } .ms-SearchBox.is-active .ms-SearchBox-label[data-v-880410a2] { display: none; } .ms-SearchBox.is-active .ms-SearchBox-clear[data-v-880410a2] { display: block; } .ms-SearchBox[data-v-880410a2]:hover { background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:black, default: #000000]\"; } .ms-SearchBox:hover .ms-SearchBox-label .ms-Icon[data-v-880410a2] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-SearchBox.is-disabled[data-v-880410a2] { background-color: #F4F4F4; pointer-events: none; } .ms-SearchBox.is-disabled .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-field[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: transparent; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: default; } .ms-SearchBox-clear[data-v-880410a2] { display: none; position: absolute; top: 0; right: 0; z-index: 10; } .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; height: 36px; } .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox-icon[data-v-880410a2] { position: relative; top: 50%; transform: translateY(-50%); display: inline-block; font-size: 16px; width: 16px; margin-left: 12px; margin-right: 6px; color: \"[theme:themePrimary, default: #0078d7]\"; vertical-align: top; } .ms-SearchBox-field[data-v-880410a2] { position: relative; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:themeTertiary, default: #71afe5]\"; outline: transparent 1px solid; font-weight: 300; font-size: 14px; color: \"[theme:black, default: #000000]\"; height: 36px; padding: 6px 3px 7px 45px; width: 208px; background-color: transparent; z-index: 5; transition: padding-left 0.167s; } .ms-SearchBox-field[data-v-880410a2]:focus { padding: 6px 32px 7px 10px; border-color: \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox-field[data-v-880410a2]::-ms-clear { display: none; } .ms-SearchBox-label[data-v-880410a2] { position: absolute; top: 0; left: 0; height: 36px; line-height: 36px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; width: 208px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2] { transition: none; border: 0; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2]:focus { background-color: transparent; padding: 6px 3px 7px 45px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2] { display: none; position: absolute; top: 0; z-index: 10; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2] { height: 40px; background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]::before { position: absolute; content: ' '; right: 0; bottom: 0; left: 0; margin: 0 8px; border-bottom: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:hover { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:focus { background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-filter[data-v-880410a2] { display: block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2] { width: 50px; min-height: 40px; z-index: 0; background-color: #F4F4F4; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-field[data-v-880410a2] { cursor: pointer; width: calc(100% - 50px); } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2]::before { visibility: hidden; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-field[data-v-880410a2] { display: block; cursor: text; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-text[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; right: 58px; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-filter[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active.is-animated[data-v-880410a2] { transition: width 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); } } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2]::before { visibility: visible; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } @media only screen and (min-width: 1024px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; border-right: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 44px; line-height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { font-size: 20px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { font-size: 16px; } } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label[data-v-880410a2] { display: block; line-height: 40px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2]::before { visibility: visible; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-field[data-v-880410a2] { width: 100%; padding-right: 100px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-icon[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-exit[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-active.has-text .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } } .ms-Icon.ms-Icon--Search[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#0078d7\" stroke=\"none\" transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1344 2048q97 0 187 -25t168 -71t142.5 -110.5t110.5 -142.5t71 -168t25 -187t-25 -187t-71 -168t-110.5 -142.5t-142.5 -110.5t-168 -71t-187 -25q-125 0 -239.5 42t-210.5 121l-785 -784q-19 -19 -45 -19t-45 19t-19 45t19 45l784 785q-79 96 -121 210.5t-42 239.5q0 97 25 187t71 168t110.5 142.5t142.5 110.5t168 71t187 25zM1344 768q119 0 224 45.5t183 123.5t123.5 183t45.5 224t-45.5 224t-123.5 183t-183 123.5t-224 45.5t-224 -45.5t-183 -123.5t-123.5 -183t-45.5 -224t45.5 -224t123.5 -183t183 -123.5t224 -45.5z\"/></svg>'); } .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"white\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } .ms-SearchBox--commandBar .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#a6a6a6\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            SearchBox : SearchBox
        };
    },
    extends :  searchBox
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

var CircleObject = function () {
  function CircleObject(element, j) {
    this.element = element;
    this.j = j;
  }

  return CircleObject;
}();

var Spinner$1 = function () {
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
    } else {
      this.spinner = this._target;
    }
  };

  Spinner.prototype._initializeOpacities = function () {
    var i = 0;
    var j = 1;
    var opacity;
    this.fadeIncrement = 1 / this.numCircles;

    for (i; i < this.numCircles; i++) {
      var circleObject = this.circleObjects[i];
      opacity = this.fadeIncrement * j++;

      this._setOpacity(circleObject.element, opacity);
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
    var angle = 0;
    var offset = this.parentSize * this.offsetSize;
    var step = 2 * Math.PI / this.numCircles;
    var i = this.numCircles;
    var circleObject;
    var radius = (this.parentSize - offset) * 0.5;

    while (i--) {
      var circle = this._createCircle();

      var x = Math.round(this.parentSize * 0.5 + radius * Math.cos(angle) - circle.clientWidth * 0.5) - offset * 0.5;
      var y = Math.round(this.parentSize * 0.5 + radius * Math.sin(angle) - circle.clientHeight * 0.5) - offset * 0.5;
      this.spinner.appendChild(circle);
      circle.style.left = x + "px";
      circle.style.top = y + "px";
      angle += step;
      circleObject = new CircleObject(circle, i);
      this.circleObjects.push(circleObject);
    }
  };

  return Spinner;
}();

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
        //IE vs. Array.From vs. querySelectorAll = no work >.<
        //Array.prototype.slice, does the trick instead 
        Array.prototype.slice.call(childs).map(function (c){ return c.setAttribute(this$1.$options._scopeId, ""); });
        // Array.from(childs).map(c=>c.setAttribute(this.$options._scopeId, ""));
    },
    extends :  Spinner
}

var textField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"textField",staticClass:"ms-TextField",class:_vm.textFieldClass},[_c('label',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.type == 'multiline')?_c('textarea',_vm._b({staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":"text","disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"change":_vm.changeEvent,"blur":_vm.blurEvent}},'textarea',_vm.attrs,false)):_c('input',_vm._b({staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":_vm.inputType,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"change":_vm.changeEvent,"blur":_vm.blurEvent}},'input',_vm.attrs,false))])},staticRenderFns: [],
  name: 'ou-text-field',
  inheritAttrs: false,
  mixins: [type('multiline', 'underlined'), disabled],

  props: {
    value: [String, Number],
    label: String,
    placeholder: String,
    inputType: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'password', 'file', 'number'].includes(value);
      }
    }
  },

  computed: {
    attrs: function attrs(){return this.$attrs},
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
    },
    blurEvent: function blurEvent(event){
      this.$emit('blur', event.target.value);
    },
    changeEvent: function changeEvent(event) {
      this.$emit('change', event.target.value);
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

var TextField = function () {
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
}();

var uiTextfield = {_scopeId: 'data-v-9e6e890e',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 8px; } .ms-TextField .ms-Label[data-v-9e6e890e] { font-size: 14px; font-weight: 600; } .ms-TextField.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField.is-disabled[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-required .ms-Label[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-webkit-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-ms-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField-field[data-v-9e6e890e] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-radius: 0; font-weight: 300; font-size: 14px; color: \"[theme:neutralPrimary, default: #333333]\"; height: 32px; padding: 6px 12px 7px; width: 100%; min-width: 180px; outline: 0; text-overflow: ellipsis; } .ms-TextField-field[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-TextField-field[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #37006E; } } .ms-TextField-field[disabled][data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField-field[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-description[data-v-9e6e890e] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-size: 11px; } .ms-TextField.ms-TextField--placeholder[data-v-9e6e890e] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-TextField.ms-TextField--placeholder .ms-TextField-field[data-v-9e6e890e] { position: relative; background-color: transparent; z-index: 5; } .ms-TextField.ms-TextField--placeholder .ms-Label[data-v-9e6e890e] { position: absolute; font-weight: 300; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; padding: 6px 12px 7px; pointer-events: none; z-index: 0; } .ms-TextField.ms-TextField--placeholder.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e] { border-bottom: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; display: table; width: 100%; min-width: 180px; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #37006E; } } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField.ms-TextField--underlined .ms-Label[data-v-9e6e890e] { font-size: 14px; margin-right: 8px; display: table-cell; vertical-align: top; padding-left: 12px; padding-top: 9px; height: 32px; width: 1%; white-space: nowrap; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e] { border: 0; float: left; display: table-cell; text-align: left; padding-top: 8px; padding-bottom: 3px; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:focus, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:hover { outline: 0; } .ms-TextField.ms-TextField--underlined.is-disabled[data-v-9e6e890e] { border-bottom-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: transparent; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #37006E; } } .ms-TextField.ms-TextField--multiline .ms-TextField-field[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralSecondary, default: #666666]\"; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; font-size: 14px; font-weight: 400; line-height: 17px; min-height: 60px; min-width: 260px; padding-top: 6px; overflow: auto; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            TextField : TextField
        };
    },
    extends :  textField
}

var toggle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"toggle",staticClass:"ms-Toggle",class:_vm.toggleClass},[(_vm.description)?_c('span',{staticClass:"ms-Toggle-description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e(),_vm._v(" "),_c('input',{staticClass:"ms-Toggle-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"ms-Toggle-trigger",on:{"click":_vm.toggle}},[_c('label',{ref:"toggleLabel",staticClass:"ms-Toggle-field",class:{ 'is-selected': _vm.value },attrs:{"tabindex":"0"}},[_c('span',{staticClass:"ms-Label ms-Label--off"},[_vm._v(_vm._s(_vm.offLabel))]),_vm._v(" "),_c('span',{staticClass:"ms-Label ms-Label--on"},[_vm._v(_vm._s(_vm.onLabel))])])])])},staticRenderFns: [],
  name: 'ou-toggle',

  mixins: [type('textLeft'), disabled],

  props: {
    value: Boolean,
    onLabel: String,
    offLabel: String,
    description: String
  },

  computed: {
    toggleClass: function toggleClass() {
      var obj;

      return ( obj = {}, obj[("ms-Toggle--" + (this.type))] = !!this.type, obj['is-disabled'] =  this.disabled, obj );
    }
  },

  mounted: function mounted() {
    new this.$fabric.Toggle(this.$refs.toggle);
  },

  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        this.$emit('input', !this.value);
      }
    }
  }
};

var Toggle = function () {
  function Toggle(container) {
    this._container = container;
    this._toggleField = this._container.querySelector(".ms-Toggle-field");

    this._addListeners();
  }

  Toggle.prototype.removeListeners = function () {
    this._toggleField.removeEventListener("click", this._toggleHandler.bind(this));
  };

  Toggle.prototype._addListeners = function () {
    var _this = this;

    this._toggleField.addEventListener("click", this._toggleHandler.bind(this), false);

    this._toggleField.addEventListener("keyup", function (e) {
      return e.keyCode === 32 ? _this._toggleHandler() : null;
    }, false);
  };

  Toggle.prototype._toggleHandler = function () {
    this._toggleField.classList.toggle("is-selected");
  };

  return Toggle;
}();

var uiToggle = {_scopeId: 'data-v-3153c0f8',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-3153c0f8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-3153c0f8]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-3153c0f8] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Toggle[data-v-3153c0f8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; font-weight: 400; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; position: relative; display: block; margin-bottom: 26px; } .ms-Toggle .ms-Label[data-v-3153c0f8] { position: relative; top: -2px; padding: 0 0 0 50px; } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { position: absolute; top: 3px; width: 10px; height: 10px; border-radius: 10px; content: ''; left: 4px; background-color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; transition-property: background, left; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { border: 2.5px solid \"[theme:white, default: #ffffff]\"; height: 15px; outline: 0; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { border-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { right: auto; } .ms-Toggle .ms-Toggle-field .ms-Label--off[data-v-3153c0f8] { display: block; } .ms-Toggle .ms-Toggle-field .ms-Label--on[data-v-3153c0f8] { display: none; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { position: absolute; top: 3px; width: 10px; height: 10px; border-radius: 10px; content: ''; right: 4px; background-color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; transition-property: background, left; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { border: 2.5px solid \"[theme:white, default: #ffffff]\"; height: 15px; outline: 0; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { border-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { background-color: \"[theme:white, default: #ffffff]\"; left: 28px; } .ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off[data-v-3153c0f8] { display: none; } .ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on[data-v-3153c0f8] { display: block; } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle:focus + .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle:hover + .ms-Toggle-field[data-v-3153c0f8] { border-color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Toggle:focus + .ms-Toggle-field[data-v-3153c0f8]::before, .ms-Toggle:hover + .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle:focus:checked + .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle:hover:checked + .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:themeDarkAlt, default: #106ebe]\"; border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-Toggle:focus:checked + .ms-Toggle-field[data-v-3153c0f8]::before, .ms-Toggle:hover:checked + .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Toggle:active:checked + .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]:focus, .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]:hover { border-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]:focus, .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]:hover { background-color: \"[theme:themeDarkAlt, default: #106ebe]\"; border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-Toggle .ms-Toggle-field .ms-Label[data-v-3153c0f8] { color: \"[theme:black, default: #000000]\"; user-select: none; } .ms-Toggle .ms-Toggle-field:hover .ms-Label[data-v-3153c0f8] { color: \"[theme:black, default: #000000]\"; } .ms-Toggle .ms-Toggle-field:active .ms-Label[data-v-3153c0f8] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle.is-disabled .ms-Label[data-v-3153c0f8] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:white, default: #ffffff]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; pointer-events: none; cursor: default; } .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { border-color: #600000; } } .ms-Toggle-description[data-v-3153c0f8] { position: relative; font-size: 14px; vertical-align: top; display: block; margin-bottom: 8px; } .ms-Toggle-field[data-v-3153c0f8] { position: relative; display: inline-block; width: 45px; height: 20px; box-sizing: border-box; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; border-radius: 20px; cursor: pointer; transition-property: background, left, border-color; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); outline: 0; } .ms-Toggle-field[data-v-3153c0f8]:hover, .ms-Toggle-field[data-v-3153c0f8]:focus { border-color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Toggle-input[data-v-3153c0f8] { display: none; } .ms-Toggle.ms-Toggle--textLeft[data-v-3153c0f8] { width: 225px; margin-bottom: 40px; } .ms-Toggle.ms-Toggle--textLeft .ms-Toggle-description[data-v-3153c0f8] { display: inline-block; max-width: 150px; top: -3px; margin-bottom: 0; } .ms-Toggle.ms-Toggle--textLeft .ms-Toggle-field[data-v-3153c0f8] { float: right; } ");},
    beforeMount: function beforeMount(){
        this.$fabric = {
            Toggle : Toggle
        };
    },
    extends :  toggle
}

var iconData = [{bundle:'a13498cf',icons:{GlobalNavButton:'E700',ChevronDown:'E70D',ChevronUp:'E70E',Edit:'E70F',Add:'E710',Cancel:'E711',More:'E712',Settings:'E713',Mail:'E715',Filter:'E71C',Search:'E721',Share:'E72D',BlockedSite:'E72F',FavoriteStar:'E734',FavoriteStarFill:'E735',CheckMark:'E73E',Delete:'E74D',ChevronLeft:'E76B',ChevronRight:'E76C',Calendar:'E787',Megaphone:'E789',Undo:'E7A7',Flag:'E7C1',Page:'E7C3',Pinned:'E840',View:'E890',Clear:'E894',Download:'E896',Upload:'E898',Folder:'E8B7',Sort:'E8CB',AlignRight:'E8E2',AlignLeft:'E8E4',Tag:'E8EC',AddFriend:'E8FA',Info:'E946',SortLines:'E9D0',List:'EA37',CircleRing:'EA3A',Heart:'EB51',HeartFill:'EB52',Tiles:'ECA5',Embed:'ECCE',Glimmer:'ECF4',Ascending:'EDC0',Descending:'EDC1',SortUp:'EE68',SortDown:'EE69',SyncToPC:'EE6E',LargeGrid:'EECB',SkypeCheck:'EF80',SkypeClock:'EF81',SkypeMinus:'EF82',ClearFilter:'EF8F',Flow:'EF90',StatusCircleCheckmark:'F13E',MoreVertical:'F2BC'}},{bundle:'0-29734c63',icons:{DecreaseIndentLegacy:'E290',IncreaseIndentLegacy:'E291',SizeLegacy:'E2B2',InternetSharing:'E704',Brightness:'E706',MapPin:'E707',Airplane:'E709',Tablet:'E70A',QuickNote:'E70B',Video:'E714',People:'E716',Phone:'E717',Pin:'E718',Shop:'E719',Stop:'E71A',Link:'E71B',AllApps:'E71D',Zoom:'E71E',ZoomOut:'E71F',Microphone:'E720',Camera:'E722',Attach:'E723',Send:'E724',FavoriteList:'E728',PageSolid:'E729',Forward:'E72A',Back:'E72B',Refresh:'E72C',Lock:'E72E',ReportHacked:'E730',EMI:'E731',MiniLink:'E732',Blocked:'E733',ReadingMode:'E736',Favicon:'E737',Remove:'E738',Checkbox:'E739',CheckboxComposite:'E73A',CheckboxIndeterminate:'E73C',CheckboxCompositeReversed:'E73D',BackToWindow:'E73F',FullScreen:'E740',Print:'E749',Up:'E74A',Down:'E74B',OEM:'E74C',Save:'E74E',Cloud:'E753',CommandPrompt:'E756',Sad:'E757',SIPMove:'E759',EraseTool:'E75C',GripperTool:'E75E',Dialpad:'E75F',PageLeft:'E760',PageRight:'E761',MultiSelect:'E762',KeyboardClassic:'E765',Play:'E768',Pause:'E769',Emoji2:'E76E',GripperBarHorizontal:'E76F',System:'E770',Personalize:'E771',SearchAndApps:'E773',Globe:'E774',ContactInfo:'E779',Unpin:'E77A',Contact:'E77B',Memo:'E77C',Paste:'E77F',WindowsLogo:'E782',Error:'E783',GripperBarVertical:'E784',Unlock:'E785',AutoEnhanceOn:'E78D',AutoEnhanceOff:'E78E',Color:'E790',SaveAs:'E792',Light:'E793',Filters:'E795',AspectRatio:'E799',Contrast:'E7A1',Redo:'E7A6',Crop:'E7A8',PhotoCollection:'E7AA',Album:'E7AB',Rotate:'E7AD',PanoIndicator:'E7B0',RedEye:'E7B3',ThumbnailView:'E7B6',Package:'E7B8',Warning:'E7BA',Financial:'E7BB',Education:'E7BE',ShoppingCart:'E7BF',Train:'E7C0',Move:'E7C2',TouchPointer:'E7C9',Merge:'E7D5'}},{bundle:'1-a653c37c',icons:{TurnRight:'E7DB',Ferry:'E7E3',Highlight:'E7E6',PowerButton:'E7E8',Tab:'E7E9',Admin:'E7EF',TVMonitor:'E7F4',Speakers:'E7F5',StackIndicator:'E7FF',Nav2DMapView:'E800',Car:'E804',Bus:'E806',EatDrink:'E807',LocationCircle:'E80E',Home:'E80F',SwitcherStartEnd:'E810',ParkingLocation:'E811',IncidentTriangle:'E814',Touch:'E815',MapDirections:'E816',CaretHollow:'E817',CaretSolid:'E818',History:'E81C',Location:'E81D',Work:'E821',Recent:'E823',Hotel:'E824',LocationDot:'E827',Dictionary:'E82D',ChromeBack:'E830',FolderOpen:'E838',PinnedFill:'E842',RevToggleKey:'E845',Previous:'E892',Next:'E893',Sync:'E895',Help:'E897',Emoji:'E899',MailForward:'E89C',ClosePane:'E89F',OpenPane:'E8A0',PreviewLink:'E8A1',ZoomIn:'E8A3',Bookmarks:'E8A4',Document:'E8A5',ProtectedDocument:'E8A6',OpenInNewWindow:'E8A7',MailFill:'E8A8',ViewAll:'E8A9',Switch:'E8AB',Rename:'E8AC',Remote:'E8AF',SelectAll:'E8B3',Orientation:'E8B4',Import:'E8B5',Picture:'E8B9',ChromeClose:'E8BB',ShowResults:'E8BC',Message:'E8BD',CalendarDay:'E8BF',CalendarWeek:'E8C0',MailReplyAll:'E8C2',Read:'E8C3',Cut:'E8C6',PaymentCard:'E8C7',Copy:'E8C8',Important:'E8C9',MailReply:'E8CA',GotoToday:'E8D1',Font:'E8D2',FontColor:'E8D3',FolderFill:'E8D5',Permissions:'E8D7',DisableUpdates:'E8D8',Unfavorite:'E8D9',Italic:'E8DB',Underline:'E8DC',Bold:'E8DD',MoveToFolder:'E8DE',Dislike:'E8E0',Like:'E8E1',AlignCenter:'E8E3',OpenFile:'E8E5',FontDecrease:'E8E7',FontIncrease:'E8E8',FontSize:'E8E9',CellPhone:'E8EA',Calculator:'E8EF',Library:'E8F1',PostUpdate:'E8F3',NewFolder:'E8F4',CalendarReply:'E8F5',UnsyncFolder:'E8F6',SyncFolder:'E8F7',BlockContact:'E8F8',Accept:'E8FB',BulletedList:'E8FD',Preview:'E8FF',News:'E900',Chat:'E901'}},{bundle:'2-b9379dbc',icons:{Group:'E902',World:'E909',Comment:'E90A',DockLeft:'E90C',DockRight:'E90D',Repair:'E90F',Accounts:'E910',RadioBullet:'E915',Stopwatch:'E916',Clock:'E917',WorldClock:'E918',AlarmClock:'E919',Photo:'E91B',Hospital:'E91D',Timer:'E91E',FullCircleMask:'E91F',LocationFill:'E920',ChromeMinimize:'E921',Annotation:'E924',Fingerprint:'E928',Handwriting:'E929',Completed:'E930',Label:'E932',FlickDown:'E935',FlickUp:'E936',FlickLeft:'E937',FlickRight:'E938',MiniExpand:'E93A',MiniContract:'E93B',Streaming:'E93E',MusicInCollection:'E940',OneDriveLogo:'E941',CompassNW:'E942',Code:'E943',LightningBolt:'E945',CalculatorMultiply:'E947',CalculatorAddition:'E948',CalculatorSubtract:'E949',CalculatorEqualTo:'E94E',PrintfaxPrinterFile:'E956',Communications:'E95A',Headset:'E95B',Health:'E95E',ChevronUpSmall:'E96D',ChevronDownSmall:'E96E',ChevronLeftSmall:'E96F',ChevronRightSmall:'E970',ChevronUpMed:'E971',ChevronDownMed:'E972',ChevronLeftMed:'E973',ChevronRightMed:'E974',PC1:'E977',PresenceChickletVideo:'E979',Reply:'E97A',HalfAlpha:'E97E',ConstructionCone:'E98F',DoubleChevronLeftMed:'E991',Volume0:'E992',Volume1:'E993',Volume2:'E994',Volume3:'E995',Chart:'E999',Robot:'E99A',Manufacturing:'E99C',LockSolid:'E9A2',BidiLtr:'E9AA',BidiRtl:'E9AB',RightDoubleQuote:'E9B1',Sunny:'E9BD',CloudWeather:'E9BE',Cloudy:'E9BF',PartlyCloudyDay:'E9C0',PartlyCloudyNight:'E9C1',ClearNight:'E9C2',RainShowersDay:'E9C3',Rain:'E9C4',Thunderstorms:'E9C6',RainSnow:'E9C7',Snow:'E9C8',BlowingSnow:'E9C9',Frigid:'E9CA',Fog:'E9CB',Squalls:'E9CC',Duststorm:'E9CD',Unknown:'E9CE',Precipitation:'E9CF',Ribbon:'E9D1',AreaChart:'E9D2',Assign:'E9D3',CheckList:'E9D5',Diagnostic:'E9D9',Generate:'E9DA',LineChart:'E9E6',Equalizer:'E9E9',BarChartHorizontal:'E9EB',BarChartVertical:'E9EC',Freezing:'E9EF',Processing:'E9F5',SnowShowerDay:'E9FD',HailDay:'EA00'}},{bundle:'3-ef2110da',icons:{WorkFlow:'EA01',HourGlass:'EA03',StoreLogoMed20:'EA04',TimeSheet:'EA05',TriangleSolid:'EA08',VideoSolid:'EA0C',RainShowersNight:'EA0F',SnowShowerNight:'EA11',Teamwork:'EA12',HailNight:'EA13',PeopleAdd:'EA15',Glasses:'EA16',DateTime2:'EA17',Shield:'EA18',Header1:'EA19',PageAdd:'EA1A',NumberedList:'EA1C',PowerBILogo:'EA1E',Info2:'EA1F',MusicInCollectionFill:'EA36',Asterisk:'EA38',ErrorBadge:'EA39',CircleFill:'EA3B',Record2:'EA3F',AllAppsMirrored:'EA40',BookmarksMirrored:'EA41',BulletedListMirrored:'EA42',CaretHollowMirrored:'EA45',CaretSolidMirrored:'EA46',ChromeBackMirrored:'EA47',ClosePaneMirrored:'EA49',DockLeftMirrored:'EA4C',DoubleChevronLeftMedMirrored:'EA4D',HelpMirrored:'EA51',ImportMirrored:'EA52',ListMirrored:'EA55',MailForwardMirrored:'EA56',MailReplyMirrored:'EA57',MailReplyAllMirrored:'EA58',OpenPaneMirrored:'EA5B',ParkingLocationMirrored:'EA5E',SendMirrored:'EA63',ShowResultsMirrored:'EA65',ThumbnailViewMirrored:'EA67',Devices3:'EA6C',Lightbulb:'EA80',StatusTriangle:'EA82',VolumeDisabled:'EA85',Puzzle:'EA86',EmojiNeutral:'EA87',EmojiDisappointed:'EA88',HomeSolid:'EA8A',Ringer:'EA8F',PDF:'EA90',HeartBroken:'EA92',StoreLogo16:'EA96',MultiSelectMirrored:'EA98',Broom:'EA99',Cocktails:'EA9D',Wines:'EABF',Articles:'EAC1',Cycling:'EAC7',DietPlanNotebook:'EAC8',Pill:'EACB',ExerciseTracker:'EACC',HandsFree:'EAD0',Medical:'EAD4',Running:'EADA',Weights:'EADB',Trackers:'EADF',AddNotes:'EAE3',AllCurrency:'EAE4',BarChart4:'EAE7',CirclePlus:'EAEE',Coffee:'EAEF',Cotton:'EAF3',Market:'EAFC',Money:'EAFD',PieDouble:'EB04',PieSingle:'EB05',RemoveFilter:'EB08',Savings:'EB0B',Sell:'EB0C',StockDown:'EB0F',StockUp:'EB11',Lamp:'EB19',Source:'EB1B',MSNVideos:'EB1C',Cricket:'EB1E',Golf:'EB1F',Baseball:'EB20',Soccer:'EB21',MoreSports:'EB22',AutoRacing:'EB24',CollegeHoops:'EB25',CollegeFootball:'EB26',ProFootball:'EB27',ProHockey:'EB28',Rugby:'EB2D',SubstitutionsIn:'EB31'}},{bundle:'4-aeecd474',icons:{Tennis:'EB33',Arrivals:'EB34',Design:'EB3C',Website:'EB41',Drop:'EB42',SkiResorts:'EB45',Snowflake:'EB46',BusSolid:'EB47',FerrySolid:'EB48',AirplaneSolid:'EB4C',TrainSolid:'EB4D',Ticket:'EB54',Devices4:'EB66',AzureLogo:'EB6A',BingLogo:'EB6B',MSNLogo:'EB6C',OutlookLogoInverse:'EB6D',OfficeLogo:'EB6E',SkypeLogo:'EB6F',Door:'EB75',EditMirrored:'EB7E',GiftCard:'EB8E',DoubleBookmark:'EB8F',StatusErrorFull:'EB90',Certificate:'EB95',FastForward:'EB9D',Rewind:'EB9E',Photo2:'EB9F',OpenSource:'EBC2',Movers:'EBCD',CloudDownload:'EBD3',Family:'EBDA',WindDirection:'EBE6',Bug:'EBE8',SiteScan:'EBEC',BrowserScreenShot:'EBED',F12DevTools:'EBEE',CSS:'EBEF',JS:'EBF0',DeliveryTruck:'EBF4',ReminderPerson:'EBF7',ReminderGroup:'EBF8',TabletMode:'EBFC',Umbrella:'EC04',NetworkTower:'EC05',CityNext:'EC06',Section:'EC0C',OneNoteLogoInverse:'EC0D',ToggleFilled:'EC11',ToggleBorder:'EC12',SliderThumb:'EC13',ToggleThumb:'EC14',Documentation:'EC17',Badge:'EC1B',Giftbox:'EC1F',VisualStudioLogo:'EC22',ExcelLogoInverse:'EC28',WordLogoInverse:'EC29',PowerPointLogoInverse:'EC2A',Cafe:'EC32',SpeedHigh:'EC4A',Commitments:'EC4D',ThisPC:'EC4E',MusicNote:'EC4F',MicOff:'EC54',EdgeLogo:'EC60',CompletedSolid:'EC61',AlbumRemove:'EC62',MessageFill:'EC70',TabletSelected:'EC74',MobileSelected:'EC75',LaptopSelected:'EC76',TVMonitorSelected:'EC77',DeveloperTools:'EC7A',InsertTextBox:'EC7D',LowerBrightness:'EC8A',DOM:'EC8D',CloudUpload:'EC8E',ScrollUpDown:'EC8F',DateTime:'EC92',Event:'ECA3',Cake:'ECA4',Org:'ECA6',PartyLeader:'ECA7',DRM:'ECA8',CloudAdd:'ECA9',AppIconDefault:'ECAA',Photo2Add:'ECAB',Photo2Remove:'ECAC',POI:'ECAF',AddTo:'ECC8',RadioBtnOff:'ECCA',RadioBtnOn:'ECCB',ExploreContent:'ECCD',Product:'ECDC',ProgressLoopInner:'ECDE',ProgressLoopOuter:'ECDF',Blocked2:'ECE4',FangBody:'ECEB',ChatInviteFriend:'ECFE'}},{bundle:'5-f6547654',icons:{Crown:'ED01',Diamond:'ED02',ScaleUp:'ED09',Feedback:'ED15',SharepointLogoInverse:'ED18',YammerLogo:'ED19',Hide:'ED1A',Uneditable:'ED1D',ReturnToSession:'ED24',OpenFolderHorizontal:'ED25',CalendarMirrored:'ED28',SwayLogoInverse:'ED29',OutOfOffice:'ED34',Trophy:'ED3F',ReopenPages:'ED50',EmojiTabSymbols:'ED58',AADLogo:'ED68',AccessLogo:'ED69',AdminALogoInverse32:'ED6A',AdminCLogoInverse32:'ED6B',AdminDLogoInverse32:'ED6C',AdminELogoInverse32:'ED6D',AdminLLogoInverse32:'ED6E',AdminMLogoInverse32:'ED6F',AdminOLogoInverse32:'ED70',AdminPLogoInverse32:'ED71',AdminSLogoInverse32:'ED72',AdminYLogoInverse32:'ED73',DelveLogoInverse:'ED76',ExchangeLogoInverse:'ED78',LyncLogo:'ED79',OfficeVideoLogoInverse:'ED7A',SocialListeningLogo:'ED7C',VisioLogoInverse:'ED7D',Balloons:'ED7E',Cat:'ED7F',MailAlert:'ED80',MailCheck:'ED81',MailLowImportance:'ED82',MailPause:'ED83',MailRepeat:'ED84',SecurityGroup:'ED85',Table:'ED86',VoicemailForward:'ED87',VoicemailReply:'ED88',Waffle:'ED89',RemoveEvent:'ED8A',EventInfo:'ED8B',ForwardEvent:'ED8C',WipePhone:'ED8D',AddOnlineMeeting:'ED8E',JoinOnlineMeeting:'ED8F',RemoveLink:'ED90',PeopleBlock:'ED91',PeopleRepeat:'ED92',PeopleAlert:'ED93',PeoplePause:'ED94',TransferCall:'ED95',AddPhone:'ED96',UnknownCall:'ED97',NoteReply:'ED98',NoteForward:'ED99',NotePinned:'ED9A',RemoveOccurrence:'ED9B',Timeline:'ED9C',EditNote:'ED9D',CircleHalfFull:'ED9E',Room:'ED9F',Unsubscribe:'EDA0',Subscribe:'EDA1',HardDrive:'EDA2',RecurringTask:'EDB2',TaskManager:'EDB7',TaskManagerMirrored:'EDB8',Combine:'EDBB',Split:'EDBC',DoubleChevronUp:'EDBD',DoubleChevronLeft:'EDBE',DoubleChevronRight:'EDBF',TextBox:'EDC2',TextField:'EDC3',NumberField:'EDC4',Dropdown:'EDC5',BookingsLogo:'EDC7',ClassNotebookLogoInverse:'EDC8',DelveAnalyticsLogo:'EDCA',DocsLogoInverse:'EDCB',Dynamics365Logo:'EDCC',DynamicSMBLogo:'EDCD',OfficeAssistantLogo:'EDCE',OfficeStoreLogo:'EDCF',OneNoteEduLogoInverse:'EDD0',PlannerLogo:'EDD1',PowerApps:'EDD2',Suitcase:'EDD3',ProjectLogoInverse:'EDD4',CaretLeft8:'EDD5',CaretRight8:'EDD6',CaretUp8:'EDD7',CaretDown8:'EDD8'}},{bundle:'6-3954c770',icons:{CaretLeftSolid8:'EDD9',CaretRightSolid8:'EDDA',CaretUpSolid8:'EDDB',CaretDownSolid8:'EDDC',ClearFormatting:'EDDD',Superscript:'EDDE',Subscript:'EDDF',Strikethrough:'EDE0',Export:'EDE1',ExportMirrored:'EDE2',SingleBookmark:'EDFF',SingleBookmarkSolid:'EE00',DoubleChevronDown:'EE04',FollowUser:'EE05',ReplyAll:'EE0A',WorkforceManagement:'EE0F',RecruitmentManagement:'EE12',Questionnaire:'EE19',ManagerSelfService:'EE23',ReplyMirrored:'EE35',ReplyAllMirrored:'EE36',Medal:'EE38',AddGroup:'EE3D',QuestionnaireMirrored:'EE4B',TemporaryUser:'EE58',CaretSolid16:'EE62',GroupedDescending:'EE66',GroupedAscending:'EE67',AwayStatus:'EE6A',MyMoviesTV:'EE6C',GenericScan:'EE6F',AustralianRules:'EE70',WifiEthernet:'EE77',TrackersMirrored:'EE92',DateTimeMirrored:'EE93',StopSolid:'EE95',DoubleChevronUp12:'EE96',DoubleChevronDown12:'EE97',DoubleChevronLeft12:'EE98',DoubleChevronRight12:'EE99',CalendarAgenda:'EE9A',AddEvent:'EEB5',AssetLibrary:'EEB6',DataConnectionLibrary:'EEB7',DocLibrary:'EEB8',FormLibrary:'EEB9',FormLibraryMirrored:'EEBA',ReportLibrary:'EEBB',ReportLibraryMirrored:'EEBC',ContactCard:'EEBD',CustomList:'EEBE',CustomListMirrored:'EEBF',IssueTracking:'EEC0',IssueTrackingMirrored:'EEC1',PictureLibrary:'EEC2',OfficeAddinsLogo:'EEC7',OfflineOneDriveParachute:'EEC8',OfflineOneDriveParachuteDisabled:'EEC9',TriangleSolidUp12:'EECC',TriangleSolidDown12:'EECD',TriangleSolidLeft12:'EECE',TriangleSolidRight12:'EECF',TriangleUp12:'EED0',TriangleDown12:'EED1',TriangleLeft12:'EED2',TriangleRight12:'EED3',ArrowUpRight8:'EED4',ArrowDownRight8:'EED5',DocumentSet:'EED6',DelveAnalytics:'EEEE',ArrowUpRightMirrored8:'EEEF',ArrowDownRightMirrored8:'EEF0',CompanyDirectory:'EF0D',CompanyDirectoryMirrored:'EF2B',OneDriveAdd:'EF32',ProfileSearch:'EF35',Header2:'EF36',Header3:'EF37',Header4:'EF38',Eyedropper:'EF3C',MarketDown:'EF42',CalendarWorkWeek:'EF51',SidePanel:'EF52',GlobeFavorite:'EF53',CaretTopLeftSolid8:'EF54',CaretTopRightSolid8:'EF55',ViewAll2:'EF56',DocumentReply:'EF57',PlayerSettings:'EF58',ReceiptForward:'EF59',ReceiptReply:'EF5A',ReceiptCheck:'EF5B',Fax:'EF5C',RecurringEvent:'EF5D',ReplyAlt:'EF5E',ReplyAllAlt:'EF5F',EditStyle:'EF60',EditMail:'EF61',Lifesaver:'EF62',LifesaverLock:'EF63'}},{bundle:'7-02107cf8',icons:{InboxCheck:'EF64',FolderSearch:'EF65',CollapseMenu:'EF66',ExpandMenu:'EF67',Boards:'EF68',SunAdd:'EF69',SunQuestionMark:'EF6A',LandscapeOrientation:'EF6B',DocumentSearch:'EF6C',PublicCalendar:'EF6D',PublicContactCard:'EF6E',PublicEmail:'EF6F',PublicFolder:'EF70',WordDocument:'EF71',PowerPointDocument:'EF72',ExcelDocument:'EF73',GroupedList:'EF74',ClassroomLogo:'EF75',Sections:'EF76',EditPhoto:'EF77',Starburst:'EF78',ShareiOS:'EF79',AirTickets:'EF7A',PencilReply:'EF7B',Tiles2:'EF7C',SkypeCircleCheck:'EF7D',SkypeCircleClock:'EF7E',SkypeCircleMinus:'EF7F',SkypeMessage:'EF83',ClosedCaption:'EF84',ATPLogo:'EF85',OfficeFormsLogoInverse:'EF86',RecycleBin:'EF87',EmptyRecycleBin:'EF88',Hide2:'EF89',Breadcrumb:'EF8C',BirthdayCake:'EF8D',TimeEntry:'EF95',PageEdit:'EFB6',PageRemove:'EFBA',Database:'EFC7',EditContact:'EFD3',ConnectContacts:'EFD4',ActivateOrders:'EFE0',DeactivateOrders:'EFE1',DocumentManagement:'EFFC',CRMReport:'EFFE',ZipFolder:'F012',SurveyQuestions:'F01B',TextDocument:'F029',TextDocumentShared:'F02B',PageCheckedOut:'F02C',SaveAndClose:'F038',Script:'F03A',Archive:'F03F',ActivityFeed:'F056',EventDate:'F059',ArrowUpRight:'F069',CaretRight:'F06B',SetAction:'F071',CaretSolidLeft:'F08D',CaretSolidDown:'F08E',CaretSolidRight:'F08F',CaretSolidUp:'F090',PowerAppsLogo:'F091',PowerApps2Logo:'F092',SearchIssue:'F09A',SearchIssueMirrored:'F09B',FabricAssetLibrary:'F09C',FabricDataConnectionLibrary:'F09D',FabricDocLibrary:'F09E',FabricFormLibrary:'F09F',FabricFormLibraryMirrored:'F0A0',FabricReportLibrary:'F0A1',FabricReportLibraryMirrored:'F0A2',FabricPublicFolder:'F0A3',FabricFolderSearch:'F0A4',FabricMovetoFolder:'F0A5',FabricUnsyncFolder:'F0A6',FabricSyncFolder:'F0A7',FabricOpenFolderHorizontal:'F0A8',FabricFolder:'F0A9',FabricFolderFill:'F0AA',FabricNewFolder:'F0AB',FabricPictureLibrary:'F0AC',AddFavorite:'F0C8',AddFavoriteFill:'F0C9',BufferTimeBefore:'F0CF',BufferTimeAfter:'F0D0',BufferTimeBoth:'F0D1',CannedChat:'F0F2',SkypeForBusinessLogo:'F0FC',PageCheckedin:'F104',ReadOutLoud:'F112',CaretBottomLeftSolid8:'F121',CaretBottomRightSolid8:'F122',FolderHorizontal:'F12B',MicrosoftStaffhubLogo:'F130',GiftboxOpen:'F133',StatusCircleOuter:'F136'}},{bundle:'8-645fa64e',icons:{StatusCircleInner:'F137',StatusCircleRing:'F138',StatusTriangleOuter:'F139',StatusTriangleInner:'F13A',StatusTriangleExclamation:'F13B',StatusCircleExclamation:'F13C',StatusCircleErrorX:'F13D',StatusCircleInfo:'F13F',StatusCircleBlock2:'F141',StatusCircleQuestionMark:'F142',Toll:'F160',ExploreContentSingle:'F164',CollapseContent:'F165',CollapseContentSingle:'F166',InfoSolid:'F167',ProgressRingDots:'F16A',CaloriesAdd:'F172',BranchFork:'F173',MobileReport:'F18A',HardDriveGroup:'F18F',FastMode:'F19A',ToggleOn:'F19E',ToggleOff:'F19F',Trophy2:'F1AE',BucketColor:'F1B6',BucketColorFill:'F1B7',Taskboard:'F1C2',SingleColumn:'F1D3',DoubleColumn:'F1D4',TripleColumn:'F1D5',ColumnLeftTwoThirds:'F1D6',ColumnRightTwoThirds:'F1D7',AccessLogoFill:'F1DB',AnalyticsLogo:'F1DE',AnalyticsQuery:'F1DF',NewAnalyticsQuery:'F1E0',AnalyticsReport:'F1E1',WordLogo:'F1E3',WordLogoFill:'F1E4',ExcelLogo:'F1E5',ExcelLogoFill:'F1E6',OneNoteLogo:'F1E7',OneNoteLogoFill:'F1E8',OutlookLogo:'F1E9',OutlookLogoFill:'F1EA',PowerPointLogo:'F1EB',PowerPointLogoFill:'F1EC',PublisherLogo:'F1ED',PublisherLogoFill:'F1EE',ScheduleEventAction:'F1EF',FlameSolid:'F1F3',ServerProcesses:'F1FE',Server:'F201',SaveAll:'F203',LinkedInLogo:'F20A',Decimals:'F218',SidePanelMirrored:'F221',ProtectRestrict:'F22A',UnknownMirrored:'F22E',PublicContactCardMirrored:'F230',GridViewSmall:'F232',GridViewMedium:'F233',GridViewLarge:'F234',Step:'F241',StepInsert:'F242',StepShared:'F243',StepSharedAdd:'F244',StepSharedInsert:'F245',ViewDashboard:'F246',ViewList:'F247',ViewListGroup:'F248',ViewListTree:'F249',TriggerAuto:'F24A',TriggerUser:'F24B',PivotChart:'F24C',StackedBarChart:'F24D',StackedLineChart:'F24E',BuildQueue:'F24F',BuildQueueNew:'F250',UserFollowed:'F25C',ContactLink:'F25F',Stack:'F26F',Bullseye:'F272',VennDiagram:'F273',FiveTileGrid:'F274',FocalPoint:'F277',RingerRemove:'F279',TeamsLogoInverse:'F27A',TeamsLogo:'F27B',TeamsLogoFill:'F27C',SkypeForBusinessLogoFill:'F27D',SharepointLogo:'F27E',SharepointLogoFill:'F27F',DelveLogo:'F280',DelveLogoFill:'F281',OfficeVideoLogo:'F282',OfficeVideoLogoFill:'F283',ExchangeLogo:'F284',ExchangeLogoFill:'F285',DocumentApproval:'F28B'}},{bundle:'9-53746c82',icons:{CloneToDesktop:'F28C',InstallToDrive:'F28D',Blur:'F28E',Build:'F28F',ProcessMetaTask:'F290',BranchFork2:'F291',BranchLocked:'F292',BranchCommit:'F293',BranchCompare:'F294',BranchMerge:'F295',BranchPullRequest:'F296',BranchSearch:'F297',BranchShelveset:'F298',RawSource:'F299',MergeDuplicate:'F29A',RowsGroup:'F29B',RowsChild:'F29C',Deploy:'F29D',Redeploy:'F29E',ServerEnviroment:'F29F',VisioDiagram:'F2A0',HighlightMappedShapes:'F2A1',TextCallout:'F2A2',IconSetsFlag:'F2A4',VisioLogo:'F2A7',VisioLogoFill:'F2A8',VisioDocument:'F2A9',TimelineProgress:'F2AA',TimelineDelivery:'F2AB',Backlog:'F2AC',TeamFavorite:'F2AD',TaskGroup:'F2AE',TaskGroupMirrored:'F2AF',ScopeTemplate:'F2B0',AssessmentGroupTemplate:'F2B1',NewTeamProject:'F2B2',CommentAdd:'F2B3',CommentNext:'F2B4',CommentPrevious:'F2B5',ShopServer:'F2B6',LocaleLanguage:'F2B7',QueryList:'F2B8',UserSync:'F2B9',UserPause:'F2BA',StreamingOff:'F2BB',ArrowTallUpLeft:'F2BD',ArrowTallUpRight:'F2BE',ArrowTallDownLeft:'F2BF',ArrowTallDownRight:'F2C0',FieldEmpty:'F2C1',FieldFilled:'F2C2',FieldChanged:'F2C3',FieldNotChanged:'F2C4',RingerOff:'F2C5',PlayResume:'F2C6',BulletedList2:'F2C7',BulletedList2Mirrored:'F2C8',ImageCrosshair:'F2C9',GitGraph:'F2CA',Repo:'F2CB',RepoSolid:'F2CC',FolderQuery:'F2CD',FolderList:'F2CE',FolderListMirrored:'F2CF',LocationOutline:'F2D0',POISolid:'F2D1',CalculatorNotEqualTo:'F2D2',BoxSubtractSolid:'F2D3',BoxAdditionSolid:'F2D4',BoxMultiplySolid:'F2D5',BoxPlaySolid:'F2D6',BoxCheckmarkSolid:'F2D7',CirclePauseSolid:'F2D8',CirclePause:'F2D9',MSNVideosSolid:'F2DA',CircleStopSolid:'F2DB',CircleStop:'F2DC',NavigateBack:'F2DD',NavigateBackMirrored:'F2DE',NavigateForward:'F2DF',NavigateForwardMirrored:'F2E0',UnknownSolid:'F2E1',UnknownMirroredSolid:'F2E2',CircleAddition:'F2E3',CircleAdditionSolid:'F2E4',FilePDB:'F2E5',FileTemplate:'F2E6',FileSQL:'F2E7',FileJAVA:'F2E8',FileASPX:'F2E9',FileCSS:'F2EA',FileSass:'F2EB',FileLess:'F2EC',FileHTML:'F2ED',JavaScriptLanguage:'F2EE',CSharpLanguage:'F2EF',CSharp:'F2F0',VisualBasicLanguage:'F2F1',VB:'F2F2',CPlusPlusLanguage:'F2F3'}},{bundle:'10-fb519450',icons:{CPlusPlus:'F2F4',FSharpLanguage:'F2F5',FSharp:'F2F6',TypeScriptLanguage:'F2F7',PythonLanguage:'F2F8',PY:'F2F9',CoffeeScript:'F2FA',MarkDownLanguage:'F2FB',FullWidth:'F2FE',FullWidthEdit:'F2FF',Plug:'F300',PlugSolid:'F301',PlugConnected:'F302',PlugDisconnected:'F303',UnlockSolid:'F304',Variable:'F305',Parameter:'F306',CommentUrgent:'F307',Storyboard:'F308',DiffInline:'F309',DiffSideBySide:'F30A',ImageDiff:'F30B',ImagePixel:'F30C',FileBug:'F30D',FileCode:'F30E',FileComment:'F30F',BusinessHoursSign:'F310',FileImage:'F311',FileSymlink:'F312',AutoFillTemplate:'F313',WorkItem:'F314',WorkItemBug:'F315',LogRemove:'F316',ColumnOptions:'F317',Packages:'F318',BuildIssue:'F319',AssessmentGroup:'F31A',VariableGroup:'F31B',FullHistory:'F31C',SingleColumnEdit:'F321',DoubleColumnEdit:'F322',TripleColumnEdit:'F323',ColumnLeftTwoThirdsEdit:'F324',ColumnRightTwoThirdsEdit:'F325',StreamLogo:'F329',PassiveAuthentication:'F32A',AlertSolid:'F331',MegaphoneSolid:'F332',TaskSolid:'F333',ConfigurationSolid:'F334',BugSolid:'F335',CrownSolid:'F336',Trophy2Solid:'F337',QuickNoteSolid:'F338',ConstructionConeSolid:'F339',PageListSolid:'F33A',PageListMirroredSolid:'F33B',StarburstSolid:'F33C',ReadingModeSolid:'F33D',SadSolid:'F33E',HealthSolid:'F33F',ShieldSolid:'F340',GiftBoxSolid:'F341',ShoppingCartSolid:'F342',MailSolid:'F343',ChatSolid:'F344',RibbonSolid:'F345',FinancialSolid:'F346',FinancialMirroredSolid:'F347',HeadsetSolid:'F348',PermissionsSolid:'F349',ParkingSolid:'F34A',ParkingMirroredSolid:'F34B',DiamondSolid:'F34C',AsteriskSolid:'F34D',OfflineStorageSolid:'F34E',BankSolid:'F34F',DecisionSolid:'F350',Parachute:'F351',ParachuteSolid:'F352',FiltersSolid:'F353',ColorSolid:'F354',ReviewSolid:'F355',ReviewRequestSolid:'F356',ReviewRequestMirroredSolid:'F357',ReviewResponseSolid:'F358',FeedbackRequestSolid:'F359',FeedbackRequestMirroredSolid:'F35A',FeedbackResponseSolid:'F35B',WorkItemBar:'F35C',WorkItemBarSolid:'F35D',Separator:'F35E',NavigateExternalInline:'F35F',PlanView:'F360',TimelineMatrixView:'F361',EngineeringGroup:'F362',ProjectCollection:'F363',CaretBottomRightCenter8:'F364',CaretBottomLeftCenter8:'F365',CaretTopRightCenter8:'F366'}},{bundle:'11-a4026982',icons:{CaretTopLeftCenter8:'F367',DonutChart:'F368',ChevronUnfold10:'F369',ChevronFold10:'F36A',DoubleChevronDown8:'F36B',DoubleChevronUp8:'F36C',DoubleChevronLeft8:'F36D',DoubleChevronRight8:'F36E',ChevronDownEnd6:'F36F',ChevronUpEnd6:'F370',ChevronLeftEnd6:'F371',ChevronRightEnd6:'F372',ContextMenu:'F37C',AzureAPIManagement:'F37F',AzureServiceEndpoint:'F380',VSTSLogo:'F381',VSTSAltLogo1:'F382',VSTSAltLogo2:'F383',FileTypeSolution:'F387',WordLogoInverse16:'F390',WordLogo16:'F391',WordLogoFill16:'F392',PowerPointLogoInverse16:'F393',PowerPointLogo16:'F394',PowerPointLogoFill16:'F395',ExcelLogoInverse16:'F396',ExcelLogo16:'F397',ExcelLogoFill16:'F398',OneNoteLogoInverse16:'F399',OneNoteLogo16:'F39A',OneNoteLogoFill16:'F39B',OutlookLogoInverse16:'F39C',OutlookLogo16:'F39D',OutlookLogoFill16:'F39E',PublisherLogoInverse16:'F39F',PublisherLogo16:'F3A0',PublisherLogoFill16:'F3A1',VisioLogoInverse16:'F3A2',VisioLogo16:'F3A3',VisioLogoFill16:'F3A4',TestBeaker:'F3A5',TestBeakerSolid:'F3A6',TestExploreSolid:'F3A7',TestAutoSolid:'F3A8',TestUserSolid:'F3A9',TestImpactSolid:'F3AA',TestPlan:'F3AB',TestStep:'F3AC',TestParameter:'F3AD',TestSuite:'F3AE',TestCase:'F3AF',Sprint:'F3B0',SignOut:'F3B1',TriggerApproval:'F3B2',Rocket:'F3B3',AzureKeyVault:'F3B4',Transition:'F3BC',LikeSolid:'F3BF',DislikeSolid:'F3C0',UnSetColor:'F3F9',DeclineCall:'F405',RectangularClipping:'F407',TeamsLogo16:'F40A',TeamsLogoFill16:'F40B',Spacer:'F40D',SkypeLogo16:'F40E',SkypeForBusinessLogo16:'F40F',SkypeForBusinessLogoFill16:'F410',FilterSolid:'F412',MailUndelivered:'F415',MailTentative:'F416',MailTentativeMirrored:'F417',MailReminder:'F418',ReceiptUndelivered:'F419',ReceiptTentative:'F41A',ReceiptTentativeMirrored:'F41B',Inbox:'F41C',IRMReply:'F41D',IRMReplyMirrored:'F41E',IRMForward:'F41F',IRMForwardMirrored:'F420',VoicemailIRM:'F421',EventAccepted:'F422',EventTentative:'F423',EventTentativeMirrored:'F424',EventDeclined:'F425',IDBadge:'F427',BackgroundColor:'F42B',OfficeFormsLogoInverse16:'F433',OfficeFormsLogo:'F434',OfficeFormsLogoFill:'F435',OfficeFormsLogo16:'F436',OfficeFormsLogoFill16:'F437',OfficeFormsLogoInverse24:'F43A',OfficeFormsLogo24:'F43B',OfficeFormsLogoFill24:'F43C',PageLock:'F43F',NotExecuted:'F440',NotImpactedSolid:'F441',FieldReadOnly:'F442'}},{bundle:'12-e6882c74',icons:{FieldRequired:'F443',BacklogBoard:'F444',ExternalBuild:'F445',ExternalTFVC:'F446',ExternalXAML:'F447',IssueSolid:'F448',DefectSolid:'F449',LadybugSolid:'F44A',NugetLogo:'F44C',TFVCLogo:'F44D',ProjectLogo32:'F47E',ProjectLogoFill32:'F47F',ProjectLogo16:'F480',ProjectLogoFill16:'F481',SwayLogo32:'F482',SwayLogoFill32:'F483',SwayLogo16:'F484',SwayLogoFill16:'F485',ClassNotebookLogo32:'F486',ClassNotebookLogoFill32:'F487',ClassNotebookLogo16:'F488',ClassNotebookLogoFill16:'F489',ClassNotebookLogoInverse32:'F48A',ClassNotebookLogoInverse16:'F48B',StaffNotebookLogo32:'F48C',StaffNotebookLogoFill32:'F48D',StaffNotebookLogo16:'F48E',StaffNotebookLogoFill16:'F48F',StaffNotebookLogoInverted32:'F490',StaffNotebookLogoInverted16:'F491',KaizalaLogo:'F492',TaskLogo:'F493',ProtectionCenterLogo32:'F494',GallatinLogo:'F496',Globe2:'F49A',Guitar:'F49B',Breakfast:'F49C',Brunch:'F49D',BeerMug:'F49E',Vacation:'F49F',Teeth:'F4A0',Taxi:'F4A1',Chopsticks:'F4A2',SyncOccurence:'F4A3',UnsyncOccurence:'F4A4',PrimaryCalendar:'F4AE',SearchCalendar:'F4AF',VideoOff:'F4B0',MicrosoftFlowLogo:'F4B1',BusinessCenterLogo:'F4B2',ToDoLogoBottom:'F4B3',ToDoLogoTop:'F4B4',EditSolid12:'F4B5',EditSolidMirrored12:'F4B6',UneditableSolid12:'F4B7',UneditableSolidMirrored12:'F4B8',UneditableMirrored:'F4B9',AdminALogo32:'F4BA',AdminALogoFill32:'F4BB',ToDoLogoInverse:'F4BC',Snooze:'F4BD',WaffleOffice365:'F4E0',ImageSearch:'F4E8',NewsSearch:'F4E9',VideoSearch:'F4EA',R:'F4EB',FontColorA:'F4EC',FontColorSwatch:'F4ED',LightWeight:'F4EE',NormalWeight:'F4EF',SemiboldWeight:'F4F0',GroupObject:'F4F1',UngroupObject:'F4F2',AlignHorizontalLeft:'F4F3',AlignHorizontalCenter:'F4F4',AlignHorizontalRight:'F4F5',AlignVerticalTop:'F4F6',AlignVerticalCenter:'F4F7',AlignVerticalBottom:'F4F8',HorizontalDistributeCenter:'F4F9',VerticalDistributeCenter:'F4FA',Ellipse:'F4FB',Line:'F4FC',Octagon:'F4FD',Hexagon:'F4FE',Pentagon:'F4FF',RightTriangle:'F500',HalfCircle:'F501',QuarterCircle:'F502',ThreeQuarterCircle:'F503','6PointStar':'F504','12PointStar':'F505',ArrangeBringToFront:'F506',ArrangeSendToBack:'F507',ArrangeSendBackward:'F508',ArrangeBringForward:'F509',BorderDash:'F50A',BorderDot:'F50B',LineStyle:'F50C',LineThickness:'F50D'}},{bundle:'13-0980cd6d',icons:{WindowEdit:'F50E',HintText:'F50F',MediaAdd:'F510',AnchorLock:'F511',AutoHeight:'F512',ChartSeries:'F513',ChartXAngle:'F514',ChartYAngle:'F515',Combobox:'F516',LineSpacing:'F517',Padding:'F518',PaddingTop:'F519',PaddingBottom:'F51A',PaddingLeft:'F51B',PaddingRight:'F51C',NavigationFlipper:'F51D',AlignJustify:'F51E',TextOverflow:'F51F',VisualsFolder:'F520',VisualsStore:'F521',PictureCenter:'F522',PictureFill:'F523',PicturePosition:'F524',PictureStretch:'F525',PictureTile:'F526',Slider:'F527',SliderHandleSize:'F528',DefaultRatio:'F529',NumberSequence:'F52A',GUID:'F52B',ReportAdd:'F52C',DashboardAdd:'F52D',MapPinSolid:'F52E',WebPublish:'F52F',PieSingleSolid:'F530',BlockedSolid:'F531',DrillDown:'F532',DrillDownSolid:'F533',DrillExpand:'F534',DrillShow:'F535',OneDriveFolder16:'F53B',FunctionalManagerDashboard:'F542',BIDashboard:'F543',CodeEdit:'F544',RenewalCurrent:'F545',RenewalFuture:'F546',SplitObject:'F547',BulkUpload:'F548',DownloadDocument:'F549',WaitlistConfirm:'F550',WaitlistConfirmMirrored:'F551',LaptopSecure:'F552',DragObject:'F553',EntryView:'F554',EntryDecline:'F555',ContactCardSettings:'F556',ContactCardSettingsMirrored:'F557',CalendarSettings:'F558',CalendarSettingsMirrored:'F559',HardDriveLock:'F55A',HardDriveUnlock:'F55B',AccountManagement:'F55C',TransitionPop:'F5B2',TransitionPush:'F5B3',TransitionEffect:'F5B4',LookupEntities:'F5B5',ExploreData:'F5B6',AddBookmark:'F5B7',SearchBookmark:'F5B8',DrillThrough:'F5B9',MasterDatabase:'F5BA',CertifiedDatabase:'F5BB',MaximumValue:'F5BC',MinimumValue:'F5BD',VisualStudioIDELogo32:'F5D0',PasteAsText:'F5D5',PasteAsCode:'F5D6',BrowserTab:'F5D7',BrowserTabScreenshot:'F5D8',DesktopScreenshot:'F5D9',FileYML:'F5DA',ClipboardSolid:'F5DC',AnalyticsView:'F5F1',Leave:'F627',Trending12:'F62D',Blocked12:'F62E',Warning12:'F62F',CheckedOutByOther12:'F630',CheckedOutByYou12:'F631',CircleShapeSolid:'F63C',SquareShapeSolid:'F63D',TriangleShapeSolid:'F63E',DropShapeSolid:'F63F',RectangleShapeSolid:'F640',InsertColumnsLeft:'F64A',InsertColumnsRight:'F64B',InsertRowsAbove:'F64C',InsertRowsBelow:'F64D',DeleteColumns:'F64E',DeleteRows:'F64F'}},{bundle:'14-eb4d1150',icons:{DeleteRowsMirrored:'F650',DeleteTable:'F651',VersionControlPush:'F664',WhiteBoardApp16:'F673',WhiteBoardApp32:'F674',InsertSignatureLine:'F677',ArrangeByFrom:'F678',Phishing:'F679',CreateMailRule:'F67A',PublishCourse:'F699',DictionaryRemove:'F69A',UserRemove:'F69B',UserEvent:'F69C',Encryption:'F69D',D365TalentLearn:'F6BB',D365TalentInsight:'F6BC',D365TalentHRCore:'F6BD',BacklogList:'F6BF',ButtonControl:'F6C0',TableGroup:'F6D9',MountainClimbing:'F6DB',TagUnknown:'F6DF',TagUnknownMirror:'F6E0',TagUnknown12:'F6E1',TagUnknown12Mirror:'F6E2',Link12:'F6E3',Presentation:'F6E4',Presentation12:'F6E5',Lock12:'F6E6',BuildDefinition:'F6E9',ReleaseDefinition:'F6EA',SaveTemplate:'F6EC',UserGauge:'F6ED',BlockedSiteSolid12:'F70A',TagSolid:'F70E',OfficeChat:'F70F',OfficeChatSolid:'F710',MailSchedule:'F72E'}}];

var uiDynamicIcon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.iconClass,on:{"click":function($event){_vm.$emit('click');}}})},staticRenderFns: [],
    props:["name"],
    computed:{
        iconClass: function iconClass(){
            return ("ms-Icon ms-Icon--" + (this.name) + " " + (this.contentClass))
        }
    },
    data: function data(){
        return {
            contentClass : null
        }
    },
    mounted: function mounted(){
        // find bundle
        var unicode;
        var bundle;
        for(var b=0;b<iconData.length && !unicode;b++)
            { if(unicode = iconData[b].icons[this.name])
                { bundle = iconData[b].bundle; } }

        fontFace({
            fontFamily: "FabricMDL2Icons-" + bundle,
            src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + bundle +".woff) format(\"woff\")"
        });

        this.contentClass = mergeStyles({ 
            displayName : this.$options._scopeId,
            display: 'inline-block',
            fontStyle: 'normal',
            fontWeight: '400',
            speak: 'none',
            selectors: {
                ":before":{
                    fontFamily: "FabricMDL2Icons-" + bundle,
                    content: ("\"\\" + unicode + "\"")
                }
            }
        });
    }
}

var uiTimePicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('tr',[_c('td',{staticClass:"up",on:{"click":function($event){_vm.upHour();}}},[_c('svg',{attrs:{"viewBox":"0 -0 2048 2048","width":"16","height":"16","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"#000000","stroke":"none","transform":"translate(0, 2048) scale(1, -1)","d":"M1024 1607l1017 -1017l-242 -241l-775 775l-775 -775l-242 241l1017 1017v0z"}})])]),_vm._v(" "),_c('td',{staticClass:"seperator"}),_vm._v(" "),_c('td',{staticClass:"up",on:{"click":function($event){_vm.upMinute();}}},[_c('svg',{attrs:{"viewBox":"0 -0 2048 2048","width":"16","height":"16","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"#000000","stroke":"none","transform":"translate(0, 2048) scale(1, -1)","d":"M1024 1607l1017 -1017l-242 -241l-775 775l-775 -775l-242 241l1017 1017v0z"}})])])]),_vm._v(" "),_c('tr',[_c('td',[_c('uiTextfield',{staticClass:"textField",model:{value:(_vm.hour),callback:function ($$v) {_vm.hour=$$v;},expression:"hour"}})],1),_vm._v(" "),_c('td',{staticClass:"seperator"},[_vm._v(":")]),_vm._v(" "),_c('td',[_c('uiTextfield',{staticClass:"textField",model:{value:(_vm.minute),callback:function ($$v) {_vm.minute=$$v;},expression:"minute"}})],1)]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"down",on:{"click":function($event){_vm.downHour();}}},[_c('svg',{attrs:{"viewBox":"0 -0 2048 2048","width":"16","height":"16","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"#000000","stroke":"none","transform":"translate(0, 2048) scale(1, -1)","d":"M1799 1699l242 -241l-1017 -1017l-1017 1017l242 241l775 -775l775 775v0z"}})])]),_vm._v(" "),_c('td',{staticClass:"seperator"}),_vm._v(" "),_c('td',{staticClass:"down",on:{"click":function($event){_vm.downMinute();}}},[_c('svg',{attrs:{"viewBox":"0 -0 2048 2048","width":"16","height":"16","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill":"#000000","stroke":"none","transform":"translate(0, 2048) scale(1, -1)","d":"M1799 1699l242 -241l-1017 -1017l-1017 1017l242 241l775 -775l775 775v0z"}})])])])])},staticRenderFns: [],_scopeId: 'data-v-16ac4ddf',
    beforeCreate: function beforeCreate(){ loadStyles("table[data-v-16ac4ddf] { border-spacing: 0; min-width: 90px; } .seperator[data-v-16ac4ddf] { text-align: center; width: 10px; } .up[data-v-16ac4ddf], .down[data-v-16ac4ddf] { cursor: pointer; text-align: center; user-select: none; } .textField[data-v-16ac4ddf] { width: 100%; margin: 0 !important; } .textField[data-v-16ac4ddf] label { display: none; } .textField[data-v-16ac4ddf] input { text-align: center; min-width: unset; padding: 6px 0; } ");},
    components:{
        uiTextfield: uiTextfield
    },
    props:["value"],
    watch:{
        hour: function hour(newVal, oldVal){
            var this$1 = this;

            if(newVal*1 != newVal || newVal<0 || newVal>23)
                { this.$nextTick(function (){ return this$1.hour = oldVal; }); }
            else
            {
                var newDate = this.value ? new Date(this.value) : new Date(0);
                newDate.setHours(this.hour);
                this.$emit("input", newDate);
            }
        },
        minute: function minute(newVal, oldVal){
            var this$1 = this;

            if(newVal*1 != newVal || newVal<0 || newVal>59)
                { this.$nextTick(function (){ return this$1.minute = oldVal; }); }
            else
            {
                var newDate = this.value ? new Date(this.value) : new Date(0);
                newDate.setMinutes(this.minute);
                this.$emit("input", newDate);
            }
        },
        value:{
            handler: function handler(newVal){
                if(newVal)
                {
                    this.hour = newVal.getHours();
                    this.minute = newVal.getMinutes();
                }
            },
            immediate : true
        }
    },
    methods:{
        upHour: function upHour(){
            this.hour = (this.hour+1)%24;
        },
        upMinute: function upMinute(){
            this.minute++;
            if(this.minute>59)
            {
                this.upHour();
                this.minute = 0;
            }
        },
        downHour: function downHour(){
            this.hour--;
            if(this.hour<0)
                { this.hour = 23; }

        },
        downMinute: function downMinute(){
            this.minute--;
            if(this.minute<0)
            {
                this.downHour();
                this.minute = 59;
            }
        },
    },
    data: function data(){
        return{
            hour : 0,
            minute : 0
        }
    }
}

var Icon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.iconClass,on:{"click":function($event){_vm.$emit('click');}}})},staticRenderFns: [],
    data: function data(){
        return {
            cl : ""
        };
    },
    computed:{
        iconClass: function iconClass(){
            return "ms-Icon ms-Icon--" + (this.name) + " " + this.cl;
        }
    },
    mounted: function mounted(){

        fontFace({
            fontFamily: "FabricMDL2Icons-" + this.bundle,
            src: "url(https://spoprod-a.akamaihd.net/files/fabric/assets/icons/fabric-icons-" + this.bundle +".woff) format(\"woff\")"
        });
        this.cl = mergeStyles({ 
            displayName : this.$options._scopeId,
            display: 'inline-block',
            fontStyle: 'normal',
            fontWeight: '400',
            speak: 'none',
            selectors: {
                ":before":{
                    fontFamily: "FabricMDL2Icons-" + this.bundle,
                    content: "'" + this.unicode + "'"
                }
            }
        });
    }
}

function uiIconGlobalNavButton(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GlobalNavButton",
        unicode: "\uE700",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconChevronDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronDown",
        unicode: "\uE70D",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconChevronUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronUp",
        unicode: "\uE70E",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Edit",
        unicode: "\uE70F",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Add",
        unicode: "\uE710",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconCancel(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cancel",
        unicode: "\uE711",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconMore(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "More",
        unicode: "\uE712",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSettings(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Settings",
        unicode: "\uE713",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconMail(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Mail",
        unicode: "\uE715",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFilter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Filter",
        unicode: "\uE71C",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Search",
        unicode: "\uE721",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconShare(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Share",
        unicode: "\uE72D",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconBlockedSite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BlockedSite",
        unicode: "\uE72F",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFavoriteStar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FavoriteStar",
        unicode: "\uE734",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFavoriteStarFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FavoriteStarFill",
        unicode: "\uE735",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconCheckMark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckMark",
        unicode: "\uE73E",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconDelete(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Delete",
        unicode: "\uE74D",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconChevronLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronLeft",
        unicode: "\uE76B",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconChevronRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronRight",
        unicode: "\uE76C",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconCalendar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Calendar",
        unicode: "\uE787",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconMegaphone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Megaphone",
        unicode: "\uE789",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconUndo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Undo",
        unicode: "\uE7A7",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFlag(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Flag",
        unicode: "\uE7C1",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconPage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Page",
        unicode: "\uE7C3",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconPinned(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Pinned",
        unicode: "\uE840",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "View",
        unicode: "\uE890",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconClear(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Clear",
        unicode: "\uE894",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconDownload(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Download",
        unicode: "\uE896",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconUpload(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Upload",
        unicode: "\uE898",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Folder",
        unicode: "\uE8B7",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSort(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sort",
        unicode: "\uE8CB",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconAlignRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignRight",
        unicode: "\uE8E2",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconAlignLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignLeft",
        unicode: "\uE8E4",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconTag(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tag",
        unicode: "\uE8EC",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconAddFriend(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddFriend",
        unicode: "\uE8FA",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconInfo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Info",
        unicode: "\uE946",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSortLines(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SortLines",
        unicode: "\uE9D0",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "List",
        unicode: "\uEA37",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconCircleRing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleRing",
        unicode: "\uEA3A",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconHeart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Heart",
        unicode: "\uEB51",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconHeartFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HeartFill",
        unicode: "\uEB52",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconTiles(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tiles",
        unicode: "\uECA5",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconEmbed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Embed",
        unicode: "\uECCE",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconGlimmer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Glimmer",
        unicode: "\uECF4",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconAscending(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ascending",
        unicode: "\uEDC0",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconDescending(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Descending",
        unicode: "\uEDC1",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSortUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SortUp",
        unicode: "\uEE68",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSortDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SortDown",
        unicode: "\uEE69",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSyncToPC(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SyncToPC",
        unicode: "\uEE6E",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconLargeGrid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LargeGrid",
        unicode: "\uEECB",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSkypeCheck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeCheck",
        unicode: "\uEF80",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSkypeClock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeClock",
        unicode: "\uEF81",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconSkypeMinus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeMinus",
        unicode: "\uEF82",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconClearFilter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClearFilter",
        unicode: "\uEF8F",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconFlow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Flow",
        unicode: "\uEF90",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconStatusCircleCheckmark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleCheckmark",
        unicode: "\uF13E",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconMoreVertical(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MoreVertical",
        unicode: "\uF2BC",
        bundle: "a13498cf"
      };
    }
  });
}
function uiIconDecreaseIndentLegacy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DecreaseIndentLegacy",
        unicode: "\uE290",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconIncreaseIndentLegacy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IncreaseIndentLegacy",
        unicode: "\uE291",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSizeLegacy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SizeLegacy",
        unicode: "\uE2B2",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconInternetSharing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InternetSharing",
        unicode: "\uE704",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconBrightness(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Brightness",
        unicode: "\uE706",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMapPin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MapPin",
        unicode: "\uE707",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAirplane(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Airplane",
        unicode: "\uE709",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconTablet(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tablet",
        unicode: "\uE70A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconQuickNote(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "QuickNote",
        unicode: "\uE70B",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconVideo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Video",
        unicode: "\uE714",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPeople(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "People",
        unicode: "\uE716",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPhone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Phone",
        unicode: "\uE717",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Pin",
        unicode: "\uE718",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconShop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Shop",
        unicode: "\uE719",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconStop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Stop",
        unicode: "\uE71A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconLink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Link",
        unicode: "\uE71B",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAllApps(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AllApps",
        unicode: "\uE71D",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconZoom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Zoom",
        unicode: "\uE71E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconZoomOut(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ZoomOut",
        unicode: "\uE71F",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMicrophone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Microphone",
        unicode: "\uE720",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCamera(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Camera",
        unicode: "\uE722",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAttach(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Attach",
        unicode: "\uE723",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSend(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Send",
        unicode: "\uE724",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconFavoriteList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FavoriteList",
        unicode: "\uE728",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPageSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageSolid",
        unicode: "\uE729",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Forward",
        unicode: "\uE72A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconBack(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Back",
        unicode: "\uE72B",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconRefresh(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Refresh",
        unicode: "\uE72C",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconLock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Lock",
        unicode: "\uE72E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconReportHacked(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReportHacked",
        unicode: "\uE730",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconEMI(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EMI",
        unicode: "\uE731",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMiniLink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MiniLink",
        unicode: "\uE732",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconBlocked(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Blocked",
        unicode: "\uE733",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconReadingMode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReadingMode",
        unicode: "\uE736",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconFavicon(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Favicon",
        unicode: "\uE737",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Remove",
        unicode: "\uE738",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCheckbox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Checkbox",
        unicode: "\uE739",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCheckboxComposite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckboxComposite",
        unicode: "\uE73A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCheckboxIndeterminate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckboxIndeterminate",
        unicode: "\uE73C",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCheckboxCompositeReversed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckboxCompositeReversed",
        unicode: "\uE73D",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconBackToWindow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BackToWindow",
        unicode: "\uE73F",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconFullScreen(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FullScreen",
        unicode: "\uE740",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPrint(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Print",
        unicode: "\uE749",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Up",
        unicode: "\uE74A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Down",
        unicode: "\uE74B",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconOEM(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OEM",
        unicode: "\uE74C",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSave(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Save",
        unicode: "\uE74E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCloud(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cloud",
        unicode: "\uE753",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCommandPrompt(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CommandPrompt",
        unicode: "\uE756",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSad(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sad",
        unicode: "\uE757",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSIPMove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SIPMove",
        unicode: "\uE759",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconEraseTool(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EraseTool",
        unicode: "\uE75C",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconGripperTool(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GripperTool",
        unicode: "\uE75E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconDialpad(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Dialpad",
        unicode: "\uE75F",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPageLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageLeft",
        unicode: "\uE760",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPageRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageRight",
        unicode: "\uE761",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMultiSelect(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MultiSelect",
        unicode: "\uE762",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconKeyboardClassic(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "KeyboardClassic",
        unicode: "\uE765",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPlay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Play",
        unicode: "\uE768",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPause(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Pause",
        unicode: "\uE769",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconEmoji2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Emoji2",
        unicode: "\uE76E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconGripperBarHorizontal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GripperBarHorizontal",
        unicode: "\uE76F",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSystem(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "System",
        unicode: "\uE770",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPersonalize(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Personalize",
        unicode: "\uE771",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSearchAndApps(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SearchAndApps",
        unicode: "\uE773",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconGlobe(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Globe",
        unicode: "\uE774",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconContactInfo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContactInfo",
        unicode: "\uE779",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconUnpin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Unpin",
        unicode: "\uE77A",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconContact(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Contact",
        unicode: "\uE77B",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMemo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Memo",
        unicode: "\uE77C",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPaste(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Paste",
        unicode: "\uE77F",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconWindowsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WindowsLogo",
        unicode: "\uE782",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconError(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Error",
        unicode: "\uE783",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconGripperBarVertical(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GripperBarVertical",
        unicode: "\uE784",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconUnlock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Unlock",
        unicode: "\uE785",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAutoEnhanceOn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AutoEnhanceOn",
        unicode: "\uE78D",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAutoEnhanceOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AutoEnhanceOff",
        unicode: "\uE78E",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconColor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Color",
        unicode: "\uE790",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconSaveAs(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SaveAs",
        unicode: "\uE792",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconLight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Light",
        unicode: "\uE793",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconFilters(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Filters",
        unicode: "\uE795",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAspectRatio(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AspectRatio",
        unicode: "\uE799",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconContrast(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Contrast",
        unicode: "\uE7A1",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconRedo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Redo",
        unicode: "\uE7A6",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconCrop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Crop",
        unicode: "\uE7A8",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPhotoCollection(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PhotoCollection",
        unicode: "\uE7AA",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconAlbum(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Album",
        unicode: "\uE7AB",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconRotate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rotate",
        unicode: "\uE7AD",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPanoIndicator(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PanoIndicator",
        unicode: "\uE7B0",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconRedEye(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RedEye",
        unicode: "\uE7B3",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconThumbnailView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ThumbnailView",
        unicode: "\uE7B6",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconPackage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Package",
        unicode: "\uE7B8",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconWarning(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Warning",
        unicode: "\uE7BA",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconFinancial(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Financial",
        unicode: "\uE7BB",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconEducation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Education",
        unicode: "\uE7BE",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconShoppingCart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShoppingCart",
        unicode: "\uE7BF",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconTrain(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Train",
        unicode: "\uE7C0",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Move",
        unicode: "\uE7C2",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconTouchPointer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TouchPointer",
        unicode: "\uE7C9",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconMerge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Merge",
        unicode: "\uE7D5",
        bundle: "0-29734c63"
      };
    }
  });
}
function uiIconTurnRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TurnRight",
        unicode: "\uE7DB",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFerry(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ferry",
        unicode: "\uE7E3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconHighlight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Highlight",
        unicode: "\uE7E6",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPowerButton(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerButton",
        unicode: "\uE7E8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconTab(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tab",
        unicode: "\uE7E9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconAdmin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Admin",
        unicode: "\uE7EF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconTVMonitor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TVMonitor",
        unicode: "\uE7F4",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSpeakers(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Speakers",
        unicode: "\uE7F5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconStackIndicator(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StackIndicator",
        unicode: "\uE7FF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconNav2DMapView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Nav2DMapView",
        unicode: "\uE800",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Car",
        unicode: "\uE804",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconBus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Bus",
        unicode: "\uE806",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconEatDrink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EatDrink",
        unicode: "\uE807",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconLocationCircle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LocationCircle",
        unicode: "\uE80E",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconHome(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Home",
        unicode: "\uE80F",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSwitcherStartEnd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwitcherStartEnd",
        unicode: "\uE810",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconParkingLocation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ParkingLocation",
        unicode: "\uE811",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconIncidentTriangle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IncidentTriangle",
        unicode: "\uE814",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconTouch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Touch",
        unicode: "\uE815",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMapDirections(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MapDirections",
        unicode: "\uE816",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCaretHollow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretHollow",
        unicode: "\uE817",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCaretSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolid",
        unicode: "\uE818",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconHistory(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "History",
        unicode: "\uE81C",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconLocation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Location",
        unicode: "\uE81D",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconWork(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Work",
        unicode: "\uE821",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconRecent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Recent",
        unicode: "\uE823",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconHotel(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Hotel",
        unicode: "\uE824",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconLocationDot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LocationDot",
        unicode: "\uE827",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconDictionary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Dictionary",
        unicode: "\uE82D",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconChromeBack(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChromeBack",
        unicode: "\uE830",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFolderOpen(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderOpen",
        unicode: "\uE838",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPinnedFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PinnedFill",
        unicode: "\uE842",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconRevToggleKey(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RevToggleKey",
        unicode: "\uE845",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPrevious(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Previous",
        unicode: "\uE892",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconNext(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Next",
        unicode: "\uE893",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSync(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sync",
        unicode: "\uE895",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconHelp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Help",
        unicode: "\uE897",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconEmoji(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Emoji",
        unicode: "\uE899",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMailForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailForward",
        unicode: "\uE89C",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconClosePane(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClosePane",
        unicode: "\uE89F",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconOpenPane(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenPane",
        unicode: "\uE8A0",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPreviewLink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PreviewLink",
        unicode: "\uE8A1",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconZoomIn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ZoomIn",
        unicode: "\uE8A3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconBookmarks(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Bookmarks",
        unicode: "\uE8A4",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Document",
        unicode: "\uE8A5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconProtectedDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProtectedDocument",
        unicode: "\uE8A6",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconOpenInNewWindow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenInNewWindow",
        unicode: "\uE8A7",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMailFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailFill",
        unicode: "\uE8A8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconViewAll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewAll",
        unicode: "\uE8A9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSwitch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Switch",
        unicode: "\uE8AB",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconRename(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rename",
        unicode: "\uE8AC",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconRemote(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Remote",
        unicode: "\uE8AF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSelectAll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SelectAll",
        unicode: "\uE8B3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconOrientation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Orientation",
        unicode: "\uE8B4",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconImport(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Import",
        unicode: "\uE8B5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPicture(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Picture",
        unicode: "\uE8B9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconChromeClose(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChromeClose",
        unicode: "\uE8BB",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconShowResults(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShowResults",
        unicode: "\uE8BC",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMessage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Message",
        unicode: "\uE8BD",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCalendarDay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarDay",
        unicode: "\uE8BF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCalendarWeek(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarWeek",
        unicode: "\uE8C0",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMailReplyAll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailReplyAll",
        unicode: "\uE8C2",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconRead(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Read",
        unicode: "\uE8C3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCut(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cut",
        unicode: "\uE8C6",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPaymentCard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PaymentCard",
        unicode: "\uE8C7",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCopy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Copy",
        unicode: "\uE8C8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconImportant(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Important",
        unicode: "\uE8C9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMailReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailReply",
        unicode: "\uE8CA",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconGotoToday(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GotoToday",
        unicode: "\uE8D1",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFont(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Font",
        unicode: "\uE8D2",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFontColor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontColor",
        unicode: "\uE8D3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFolderFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderFill",
        unicode: "\uE8D5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPermissions(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Permissions",
        unicode: "\uE8D7",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconDisableUpdates(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DisableUpdates",
        unicode: "\uE8D8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconUnfavorite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Unfavorite",
        unicode: "\uE8D9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconItalic(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Italic",
        unicode: "\uE8DB",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconUnderline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Underline",
        unicode: "\uE8DC",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconBold(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Bold",
        unicode: "\uE8DD",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconMoveToFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MoveToFolder",
        unicode: "\uE8DE",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconDislike(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Dislike",
        unicode: "\uE8E0",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconLike(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Like",
        unicode: "\uE8E1",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconAlignCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignCenter",
        unicode: "\uE8E3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconOpenFile(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenFile",
        unicode: "\uE8E5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFontDecrease(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontDecrease",
        unicode: "\uE8E7",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFontIncrease(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontIncrease",
        unicode: "\uE8E8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconFontSize(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontSize",
        unicode: "\uE8E9",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCellPhone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CellPhone",
        unicode: "\uE8EA",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCalculator(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Calculator",
        unicode: "\uE8EF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Library",
        unicode: "\uE8F1",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPostUpdate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PostUpdate",
        unicode: "\uE8F3",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconNewFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NewFolder",
        unicode: "\uE8F4",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconCalendarReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarReply",
        unicode: "\uE8F5",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconUnsyncFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnsyncFolder",
        unicode: "\uE8F6",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconSyncFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SyncFolder",
        unicode: "\uE8F7",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconBlockContact(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BlockContact",
        unicode: "\uE8F8",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconAccept(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Accept",
        unicode: "\uE8FB",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconBulletedList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BulletedList",
        unicode: "\uE8FD",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconPreview(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Preview",
        unicode: "\uE8FF",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconNews(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "News",
        unicode: "\uE900",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconChat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Chat",
        unicode: "\uE901",
        bundle: "1-a653c37c"
      };
    }
  });
}
function uiIconGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Group",
        unicode: "\uE902",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconWorld(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "World",
        unicode: "\uE909",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconComment(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Comment",
        unicode: "\uE90A",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconDockLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DockLeft",
        unicode: "\uE90C",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconDockRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DockRight",
        unicode: "\uE90D",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRepair(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Repair",
        unicode: "\uE90F",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconAccounts(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Accounts",
        unicode: "\uE910",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRadioBullet(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RadioBullet",
        unicode: "\uE915",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconStopwatch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Stopwatch",
        unicode: "\uE916",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconClock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Clock",
        unicode: "\uE917",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconWorldClock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorldClock",
        unicode: "\uE918",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconAlarmClock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlarmClock",
        unicode: "\uE919",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPhoto(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Photo",
        unicode: "\uE91B",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHospital(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Hospital",
        unicode: "\uE91D",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconTimer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Timer",
        unicode: "\uE91E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFullCircleMask(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FullCircleMask",
        unicode: "\uE91F",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconLocationFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LocationFill",
        unicode: "\uE920",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChromeMinimize(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChromeMinimize",
        unicode: "\uE921",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconAnnotation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Annotation",
        unicode: "\uE924",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFingerprint(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Fingerprint",
        unicode: "\uE928",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHandwriting(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Handwriting",
        unicode: "\uE929",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCompleted(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Completed",
        unicode: "\uE930",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconLabel(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Label",
        unicode: "\uE932",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFlickDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FlickDown",
        unicode: "\uE935",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFlickUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FlickUp",
        unicode: "\uE936",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFlickLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FlickLeft",
        unicode: "\uE937",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFlickRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FlickRight",
        unicode: "\uE938",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconMiniExpand(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MiniExpand",
        unicode: "\uE93A",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconMiniContract(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MiniContract",
        unicode: "\uE93B",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconStreaming(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Streaming",
        unicode: "\uE93E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconMusicInCollection(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MusicInCollection",
        unicode: "\uE940",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconOneDriveLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneDriveLogo",
        unicode: "\uE941",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCompassNW(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CompassNW",
        unicode: "\uE942",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Code",
        unicode: "\uE943",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconLightningBolt(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LightningBolt",
        unicode: "\uE945",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCalculatorMultiply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalculatorMultiply",
        unicode: "\uE947",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCalculatorAddition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalculatorAddition",
        unicode: "\uE948",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCalculatorSubtract(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalculatorSubtract",
        unicode: "\uE949",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCalculatorEqualTo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalculatorEqualTo",
        unicode: "\uE94E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPrintfaxPrinterFile(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PrintfaxPrinterFile",
        unicode: "\uE956",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCommunications(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Communications",
        unicode: "\uE95A",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHeadset(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Headset",
        unicode: "\uE95B",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHealth(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Health",
        unicode: "\uE95E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronUpSmall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronUpSmall",
        unicode: "\uE96D",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronDownSmall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronDownSmall",
        unicode: "\uE96E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronLeftSmall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronLeftSmall",
        unicode: "\uE96F",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronRightSmall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronRightSmall",
        unicode: "\uE970",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronUpMed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronUpMed",
        unicode: "\uE971",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronDownMed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronDownMed",
        unicode: "\uE972",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronLeftMed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronLeftMed",
        unicode: "\uE973",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChevronRightMed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronRightMed",
        unicode: "\uE974",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPC1(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PC1",
        unicode: "\uE977",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPresenceChickletVideo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PresenceChickletVideo",
        unicode: "\uE979",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Reply",
        unicode: "\uE97A",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHalfAlpha(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HalfAlpha",
        unicode: "\uE97E",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconConstructionCone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ConstructionCone",
        unicode: "\uE98F",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconDoubleChevronLeftMed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronLeftMed",
        unicode: "\uE991",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconVolume0(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Volume0",
        unicode: "\uE992",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconVolume1(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Volume1",
        unicode: "\uE993",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconVolume2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Volume2",
        unicode: "\uE994",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconVolume3(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Volume3",
        unicode: "\uE995",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Chart",
        unicode: "\uE999",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRobot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Robot",
        unicode: "\uE99A",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconManufacturing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Manufacturing",
        unicode: "\uE99C",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconLockSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LockSolid",
        unicode: "\uE9A2",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconBidiLtr(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BidiLtr",
        unicode: "\uE9AA",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconBidiRtl(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BidiRtl",
        unicode: "\uE9AB",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRightDoubleQuote(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RightDoubleQuote",
        unicode: "\uE9B1",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconSunny(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sunny",
        unicode: "\uE9BD",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCloudWeather(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CloudWeather",
        unicode: "\uE9BE",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCloudy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cloudy",
        unicode: "\uE9BF",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPartlyCloudyDay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PartlyCloudyDay",
        unicode: "\uE9C0",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPartlyCloudyNight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PartlyCloudyNight",
        unicode: "\uE9C1",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconClearNight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClearNight",
        unicode: "\uE9C2",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRainShowersDay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RainShowersDay",
        unicode: "\uE9C3",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRain(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rain",
        unicode: "\uE9C4",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconThunderstorms(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Thunderstorms",
        unicode: "\uE9C6",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRainSnow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RainSnow",
        unicode: "\uE9C7",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconSnow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Snow",
        unicode: "\uE9C8",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconBlowingSnow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BlowingSnow",
        unicode: "\uE9C9",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFrigid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Frigid",
        unicode: "\uE9CA",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFog(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Fog",
        unicode: "\uE9CB",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconSqualls(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Squalls",
        unicode: "\uE9CC",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconDuststorm(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Duststorm",
        unicode: "\uE9CD",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconUnknown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Unknown",
        unicode: "\uE9CE",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconPrecipitation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Precipitation",
        unicode: "\uE9CF",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconRibbon(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ribbon",
        unicode: "\uE9D1",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconAreaChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AreaChart",
        unicode: "\uE9D2",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconAssign(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Assign",
        unicode: "\uE9D3",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconCheckList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckList",
        unicode: "\uE9D5",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconDiagnostic(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Diagnostic",
        unicode: "\uE9D9",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconGenerate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Generate",
        unicode: "\uE9DA",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconLineChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LineChart",
        unicode: "\uE9E6",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconEqualizer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Equalizer",
        unicode: "\uE9E9",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconBarChartHorizontal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BarChartHorizontal",
        unicode: "\uE9EB",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconBarChartVertical(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BarChartVertical",
        unicode: "\uE9EC",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconFreezing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Freezing",
        unicode: "\uE9EF",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconProcessing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Processing",
        unicode: "\uE9F5",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconSnowShowerDay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SnowShowerDay",
        unicode: "\uE9FD",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconHailDay(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HailDay",
        unicode: "\uEA00",
        bundle: "2-b9379dbc"
      };
    }
  });
}
function uiIconWorkFlow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkFlow",
        unicode: "\uEA01",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHourGlass(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HourGlass",
        unicode: "\uEA03",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconStoreLogoMed20(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StoreLogoMed20",
        unicode: "\uEA04",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconTimeSheet(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TimeSheet",
        unicode: "\uEA05",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconTriangleSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleSolid",
        unicode: "\uEA08",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconVideoSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VideoSolid",
        unicode: "\uEA0C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRainShowersNight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RainShowersNight",
        unicode: "\uEA0F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSnowShowerNight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SnowShowerNight",
        unicode: "\uEA11",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconTeamwork(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Teamwork",
        unicode: "\uEA12",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHailNight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HailNight",
        unicode: "\uEA13",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPeopleAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PeopleAdd",
        unicode: "\uEA15",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconGlasses(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Glasses",
        unicode: "\uEA16",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconDateTime2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DateTime2",
        unicode: "\uEA17",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconShield(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Shield",
        unicode: "\uEA18",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHeader1(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Header1",
        unicode: "\uEA19",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPageAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageAdd",
        unicode: "\uEA1A",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconNumberedList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NumberedList",
        unicode: "\uEA1C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPowerBILogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerBILogo",
        unicode: "\uEA1E",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconInfo2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Info2",
        unicode: "\uEA1F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMusicInCollectionFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MusicInCollectionFill",
        unicode: "\uEA36",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconAsterisk(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Asterisk",
        unicode: "\uEA38",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconErrorBadge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ErrorBadge",
        unicode: "\uEA39",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCircleFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleFill",
        unicode: "\uEA3B",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRecord2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Record2",
        unicode: "\uEA3F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconAllAppsMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AllAppsMirrored",
        unicode: "\uEA40",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconBookmarksMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BookmarksMirrored",
        unicode: "\uEA41",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconBulletedListMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BulletedListMirrored",
        unicode: "\uEA42",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCaretHollowMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretHollowMirrored",
        unicode: "\uEA45",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCaretSolidMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolidMirrored",
        unicode: "\uEA46",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconChromeBackMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChromeBackMirrored",
        unicode: "\uEA47",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconClosePaneMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClosePaneMirrored",
        unicode: "\uEA49",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconDockLeftMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DockLeftMirrored",
        unicode: "\uEA4C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconDoubleChevronLeftMedMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronLeftMedMirrored",
        unicode: "\uEA4D",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHelpMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HelpMirrored",
        unicode: "\uEA51",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconImportMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ImportMirrored",
        unicode: "\uEA52",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconListMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ListMirrored",
        unicode: "\uEA55",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMailForwardMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailForwardMirrored",
        unicode: "\uEA56",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMailReplyMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailReplyMirrored",
        unicode: "\uEA57",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMailReplyAllMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailReplyAllMirrored",
        unicode: "\uEA58",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconOpenPaneMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenPaneMirrored",
        unicode: "\uEA5B",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconParkingLocationMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ParkingLocationMirrored",
        unicode: "\uEA5E",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSendMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SendMirrored",
        unicode: "\uEA63",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconShowResultsMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShowResultsMirrored",
        unicode: "\uEA65",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconThumbnailViewMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ThumbnailViewMirrored",
        unicode: "\uEA67",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconDevices3(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Devices3",
        unicode: "\uEA6C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconLightbulb(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Lightbulb",
        unicode: "\uEA80",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconStatusTriangle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusTriangle",
        unicode: "\uEA82",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconVolumeDisabled(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VolumeDisabled",
        unicode: "\uEA85",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPuzzle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Puzzle",
        unicode: "\uEA86",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconEmojiNeutral(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EmojiNeutral",
        unicode: "\uEA87",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconEmojiDisappointed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EmojiDisappointed",
        unicode: "\uEA88",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHomeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HomeSolid",
        unicode: "\uEA8A",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRinger(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ringer",
        unicode: "\uEA8F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPDF(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PDF",
        unicode: "\uEA90",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHeartBroken(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HeartBroken",
        unicode: "\uEA92",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconStoreLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StoreLogo16",
        unicode: "\uEA96",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMultiSelectMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MultiSelectMirrored",
        unicode: "\uEA98",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconBroom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Broom",
        unicode: "\uEA99",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCocktails(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cocktails",
        unicode: "\uEA9D",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconWines(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Wines",
        unicode: "\uEABF",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconArticles(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Articles",
        unicode: "\uEAC1",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCycling(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cycling",
        unicode: "\uEAC7",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconDietPlanNotebook(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DietPlanNotebook",
        unicode: "\uEAC8",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Pill",
        unicode: "\uEACB",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconExerciseTracker(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExerciseTracker",
        unicode: "\uEACC",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconHandsFree(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HandsFree",
        unicode: "\uEAD0",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMedical(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Medical",
        unicode: "\uEAD4",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRunning(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Running",
        unicode: "\uEADA",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconWeights(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Weights",
        unicode: "\uEADB",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconTrackers(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Trackers",
        unicode: "\uEADF",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconAddNotes(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddNotes",
        unicode: "\uEAE3",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconAllCurrency(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AllCurrency",
        unicode: "\uEAE4",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconBarChart4(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BarChart4",
        unicode: "\uEAE7",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCirclePlus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CirclePlus",
        unicode: "\uEAEE",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCoffee(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Coffee",
        unicode: "\uEAEF",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCotton(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cotton",
        unicode: "\uEAF3",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMarket(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Market",
        unicode: "\uEAFC",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMoney(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Money",
        unicode: "\uEAFD",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPieDouble(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PieDouble",
        unicode: "\uEB04",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconPieSingle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PieSingle",
        unicode: "\uEB05",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRemoveFilter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RemoveFilter",
        unicode: "\uEB08",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSavings(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Savings",
        unicode: "\uEB0B",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSell(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sell",
        unicode: "\uEB0C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconStockDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StockDown",
        unicode: "\uEB0F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconStockUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StockUp",
        unicode: "\uEB11",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconLamp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Lamp",
        unicode: "\uEB19",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSource(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Source",
        unicode: "\uEB1B",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMSNVideos(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MSNVideos",
        unicode: "\uEB1C",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCricket(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cricket",
        unicode: "\uEB1E",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconGolf(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Golf",
        unicode: "\uEB1F",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconBaseball(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Baseball",
        unicode: "\uEB20",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSoccer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Soccer",
        unicode: "\uEB21",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconMoreSports(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MoreSports",
        unicode: "\uEB22",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconAutoRacing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AutoRacing",
        unicode: "\uEB24",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCollegeHoops(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CollegeHoops",
        unicode: "\uEB25",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconCollegeFootball(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CollegeFootball",
        unicode: "\uEB26",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconProFootball(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProFootball",
        unicode: "\uEB27",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconProHockey(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProHockey",
        unicode: "\uEB28",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconRugby(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rugby",
        unicode: "\uEB2D",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconSubstitutionsIn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SubstitutionsIn",
        unicode: "\uEB31",
        bundle: "3-ef2110da"
      };
    }
  });
}
function uiIconTennis(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tennis",
        unicode: "\uEB33",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconArrivals(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Arrivals",
        unicode: "\uEB34",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDesign(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Design",
        unicode: "\uEB3C",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconWebsite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Website",
        unicode: "\uEB41",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDrop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Drop",
        unicode: "\uEB42",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSkiResorts(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkiResorts",
        unicode: "\uEB45",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSnowflake(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Snowflake",
        unicode: "\uEB46",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBusSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BusSolid",
        unicode: "\uEB47",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconFerrySolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FerrySolid",
        unicode: "\uEB48",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconAirplaneSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AirplaneSolid",
        unicode: "\uEB4C",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconTrainSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TrainSolid",
        unicode: "\uEB4D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconTicket(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ticket",
        unicode: "\uEB54",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDevices4(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Devices4",
        unicode: "\uEB66",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconAzureLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AzureLogo",
        unicode: "\uEB6A",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBingLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BingLogo",
        unicode: "\uEB6B",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMSNLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MSNLogo",
        unicode: "\uEB6C",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconOutlookLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogoInverse",
        unicode: "\uEB6D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconOfficeLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeLogo",
        unicode: "\uEB6E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSkypeLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeLogo",
        unicode: "\uEB6F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDoor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Door",
        unicode: "\uEB75",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconEditMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditMirrored",
        unicode: "\uEB7E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconGiftCard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GiftCard",
        unicode: "\uEB8E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDoubleBookmark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleBookmark",
        unicode: "\uEB8F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconStatusErrorFull(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusErrorFull",
        unicode: "\uEB90",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCertificate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Certificate",
        unicode: "\uEB95",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconFastForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FastForward",
        unicode: "\uEB9D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconRewind(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rewind",
        unicode: "\uEB9E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPhoto2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Photo2",
        unicode: "\uEB9F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconOpenSource(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenSource",
        unicode: "\uEBC2",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMovers(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Movers",
        unicode: "\uEBCD",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCloudDownload(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CloudDownload",
        unicode: "\uEBD3",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconFamily(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Family",
        unicode: "\uEBDA",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconWindDirection(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WindDirection",
        unicode: "\uEBE6",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBug(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Bug",
        unicode: "\uEBE8",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSiteScan(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SiteScan",
        unicode: "\uEBEC",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBrowserScreenShot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BrowserScreenShot",
        unicode: "\uEBED",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconF12DevTools(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "F12DevTools",
        unicode: "\uEBEE",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCSS(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CSS",
        unicode: "\uEBEF",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconJS(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "JS",
        unicode: "\uEBF0",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDeliveryTruck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeliveryTruck",
        unicode: "\uEBF4",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconReminderPerson(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReminderPerson",
        unicode: "\uEBF7",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconReminderGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReminderGroup",
        unicode: "\uEBF8",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconTabletMode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TabletMode",
        unicode: "\uEBFC",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconUmbrella(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Umbrella",
        unicode: "\uEC04",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconNetworkTower(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NetworkTower",
        unicode: "\uEC05",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCityNext(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CityNext",
        unicode: "\uEC06",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSection(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Section",
        unicode: "\uEC0C",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconOneNoteLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogoInverse",
        unicode: "\uEC0D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconToggleFilled(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToggleFilled",
        unicode: "\uEC11",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconToggleBorder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToggleBorder",
        unicode: "\uEC12",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSliderThumb(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SliderThumb",
        unicode: "\uEC13",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconToggleThumb(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToggleThumb",
        unicode: "\uEC14",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDocumentation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Documentation",
        unicode: "\uEC17",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBadge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Badge",
        unicode: "\uEC1B",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconGiftbox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Giftbox",
        unicode: "\uEC1F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconVisualStudioLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisualStudioLogo",
        unicode: "\uEC22",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconExcelLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogoInverse",
        unicode: "\uEC28",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconWordLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogoInverse",
        unicode: "\uEC29",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPowerPointLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogoInverse",
        unicode: "\uEC2A",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCafe(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cafe",
        unicode: "\uEC32",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconSpeedHigh(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SpeedHigh",
        unicode: "\uEC4A",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCommitments(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Commitments",
        unicode: "\uEC4D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconThisPC(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ThisPC",
        unicode: "\uEC4E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMusicNote(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MusicNote",
        unicode: "\uEC4F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMicOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MicOff",
        unicode: "\uEC54",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconEdgeLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EdgeLogo",
        unicode: "\uEC60",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCompletedSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CompletedSolid",
        unicode: "\uEC61",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconAlbumRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlbumRemove",
        unicode: "\uEC62",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMessageFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MessageFill",
        unicode: "\uEC70",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconTabletSelected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TabletSelected",
        unicode: "\uEC74",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconMobileSelected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MobileSelected",
        unicode: "\uEC75",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconLaptopSelected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LaptopSelected",
        unicode: "\uEC76",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconTVMonitorSelected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TVMonitorSelected",
        unicode: "\uEC77",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDeveloperTools(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeveloperTools",
        unicode: "\uEC7A",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconInsertTextBox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertTextBox",
        unicode: "\uEC7D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconLowerBrightness(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LowerBrightness",
        unicode: "\uEC8A",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDOM(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DOM",
        unicode: "\uEC8D",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCloudUpload(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CloudUpload",
        unicode: "\uEC8E",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconScrollUpDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ScrollUpDown",
        unicode: "\uEC8F",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDateTime(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DateTime",
        unicode: "\uEC92",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Event",
        unicode: "\uECA3",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCake(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cake",
        unicode: "\uECA4",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconOrg(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Org",
        unicode: "\uECA6",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPartyLeader(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PartyLeader",
        unicode: "\uECA7",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconDRM(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DRM",
        unicode: "\uECA8",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCloudAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CloudAdd",
        unicode: "\uECA9",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconAppIconDefault(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AppIconDefault",
        unicode: "\uECAA",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPhoto2Add(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Photo2Add",
        unicode: "\uECAB",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPhoto2Remove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Photo2Remove",
        unicode: "\uECAC",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconPOI(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "POI",
        unicode: "\uECAF",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconAddTo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddTo",
        unicode: "\uECC8",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconRadioBtnOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RadioBtnOff",
        unicode: "\uECCA",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconRadioBtnOn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RadioBtnOn",
        unicode: "\uECCB",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconExploreContent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExploreContent",
        unicode: "\uECCD",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconProduct(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Product",
        unicode: "\uECDC",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconProgressLoopInner(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProgressLoopInner",
        unicode: "\uECDE",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconProgressLoopOuter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProgressLoopOuter",
        unicode: "\uECDF",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconBlocked2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Blocked2",
        unicode: "\uECE4",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconFangBody(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FangBody",
        unicode: "\uECEB",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconChatInviteFriend(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChatInviteFriend",
        unicode: "\uECFE",
        bundle: "4-aeecd474"
      };
    }
  });
}
function uiIconCrown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Crown",
        unicode: "\uED01",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDiamond(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Diamond",
        unicode: "\uED02",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconScaleUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ScaleUp",
        unicode: "\uED09",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconFeedback(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Feedback",
        unicode: "\uED15",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSharepointLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SharepointLogoInverse",
        unicode: "\uED18",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconYammerLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "YammerLogo",
        unicode: "\uED19",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconHide(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Hide",
        unicode: "\uED1A",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconUneditable(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Uneditable",
        unicode: "\uED1D",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconReturnToSession(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReturnToSession",
        unicode: "\uED24",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOpenFolderHorizontal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OpenFolderHorizontal",
        unicode: "\uED25",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCalendarMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarMirrored",
        unicode: "\uED28",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSwayLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwayLogoInverse",
        unicode: "\uED29",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOutOfOffice(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutOfOffice",
        unicode: "\uED34",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTrophy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Trophy",
        unicode: "\uED3F",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconReopenPages(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReopenPages",
        unicode: "\uED50",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconEmojiTabSymbols(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EmojiTabSymbols",
        unicode: "\uED58",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAADLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AADLogo",
        unicode: "\uED68",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAccessLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AccessLogo",
        unicode: "\uED69",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminALogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminALogoInverse32",
        unicode: "\uED6A",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminCLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminCLogoInverse32",
        unicode: "\uED6B",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminDLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminDLogoInverse32",
        unicode: "\uED6C",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminELogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminELogoInverse32",
        unicode: "\uED6D",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminLLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminLLogoInverse32",
        unicode: "\uED6E",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminMLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminMLogoInverse32",
        unicode: "\uED6F",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminOLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminOLogoInverse32",
        unicode: "\uED70",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminPLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminPLogoInverse32",
        unicode: "\uED71",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminSLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminSLogoInverse32",
        unicode: "\uED72",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAdminYLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminYLogoInverse32",
        unicode: "\uED73",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDelveLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DelveLogoInverse",
        unicode: "\uED76",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconExchangeLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExchangeLogoInverse",
        unicode: "\uED78",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconLyncLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LyncLogo",
        unicode: "\uED79",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOfficeVideoLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeVideoLogoInverse",
        unicode: "\uED7A",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSocialListeningLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SocialListeningLogo",
        unicode: "\uED7C",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconVisioLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogoInverse",
        unicode: "\uED7D",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconBalloons(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Balloons",
        unicode: "\uED7E",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Cat",
        unicode: "\uED7F",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconMailAlert(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailAlert",
        unicode: "\uED80",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconMailCheck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailCheck",
        unicode: "\uED81",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconMailLowImportance(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailLowImportance",
        unicode: "\uED82",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconMailPause(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailPause",
        unicode: "\uED83",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconMailRepeat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailRepeat",
        unicode: "\uED84",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSecurityGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SecurityGroup",
        unicode: "\uED85",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTable(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Table",
        unicode: "\uED86",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconVoicemailForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VoicemailForward",
        unicode: "\uED87",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconVoicemailReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VoicemailReply",
        unicode: "\uED88",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconWaffle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Waffle",
        unicode: "\uED89",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconRemoveEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RemoveEvent",
        unicode: "\uED8A",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconEventInfo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventInfo",
        unicode: "\uED8B",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconForwardEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ForwardEvent",
        unicode: "\uED8C",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconWipePhone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WipePhone",
        unicode: "\uED8D",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAddOnlineMeeting(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddOnlineMeeting",
        unicode: "\uED8E",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconJoinOnlineMeeting(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "JoinOnlineMeeting",
        unicode: "\uED8F",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconRemoveLink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RemoveLink",
        unicode: "\uED90",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPeopleBlock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PeopleBlock",
        unicode: "\uED91",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPeopleRepeat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PeopleRepeat",
        unicode: "\uED92",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPeopleAlert(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PeopleAlert",
        unicode: "\uED93",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPeoplePause(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PeoplePause",
        unicode: "\uED94",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTransferCall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TransferCall",
        unicode: "\uED95",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconAddPhone(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddPhone",
        unicode: "\uED96",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconUnknownCall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnknownCall",
        unicode: "\uED97",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconNoteReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NoteReply",
        unicode: "\uED98",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconNoteForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NoteForward",
        unicode: "\uED99",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconNotePinned(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NotePinned",
        unicode: "\uED9A",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconRemoveOccurrence(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RemoveOccurrence",
        unicode: "\uED9B",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTimeline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Timeline",
        unicode: "\uED9C",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconEditNote(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditNote",
        unicode: "\uED9D",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCircleHalfFull(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleHalfFull",
        unicode: "\uED9E",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconRoom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Room",
        unicode: "\uED9F",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconUnsubscribe(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Unsubscribe",
        unicode: "\uEDA0",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSubscribe(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Subscribe",
        unicode: "\uEDA1",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconHardDrive(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HardDrive",
        unicode: "\uEDA2",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconRecurringTask(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RecurringTask",
        unicode: "\uEDB2",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTaskManager(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskManager",
        unicode: "\uEDB7",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTaskManagerMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskManagerMirrored",
        unicode: "\uEDB8",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCombine(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Combine",
        unicode: "\uEDBB",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSplit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Split",
        unicode: "\uEDBC",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDoubleChevronUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronUp",
        unicode: "\uEDBD",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDoubleChevronLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronLeft",
        unicode: "\uEDBE",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDoubleChevronRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronRight",
        unicode: "\uEDBF",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTextBox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextBox",
        unicode: "\uEDC2",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconTextField(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextField",
        unicode: "\uEDC3",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconNumberField(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NumberField",
        unicode: "\uEDC4",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDropdown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Dropdown",
        unicode: "\uEDC5",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconBookingsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BookingsLogo",
        unicode: "\uEDC7",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconClassNotebookLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogoInverse",
        unicode: "\uEDC8",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDelveAnalyticsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DelveAnalyticsLogo",
        unicode: "\uEDCA",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDocsLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocsLogoInverse",
        unicode: "\uEDCB",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDynamics365Logo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Dynamics365Logo",
        unicode: "\uEDCC",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconDynamicSMBLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DynamicSMBLogo",
        unicode: "\uEDCD",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOfficeAssistantLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeAssistantLogo",
        unicode: "\uEDCE",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOfficeStoreLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeStoreLogo",
        unicode: "\uEDCF",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconOneNoteEduLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteEduLogoInverse",
        unicode: "\uEDD0",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPlannerLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlannerLogo",
        unicode: "\uEDD1",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconPowerApps(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerApps",
        unicode: "\uEDD2",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconSuitcase(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Suitcase",
        unicode: "\uEDD3",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconProjectLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectLogoInverse",
        unicode: "\uEDD4",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCaretLeft8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretLeft8",
        unicode: "\uEDD5",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCaretRight8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretRight8",
        unicode: "\uEDD6",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCaretUp8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretUp8",
        unicode: "\uEDD7",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCaretDown8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretDown8",
        unicode: "\uEDD8",
        bundle: "5-f6547654"
      };
    }
  });
}
function uiIconCaretLeftSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretLeftSolid8",
        unicode: "\uEDD9",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretRightSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretRightSolid8",
        unicode: "\uEDDA",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretUpSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretUpSolid8",
        unicode: "\uEDDB",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretDownSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretDownSolid8",
        unicode: "\uEDDC",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconClearFormatting(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClearFormatting",
        unicode: "\uEDDD",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconSuperscript(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Superscript",
        unicode: "\uEDDE",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconSubscript(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Subscript",
        unicode: "\uEDDF",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconStrikethrough(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Strikethrough",
        unicode: "\uEDE0",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconExport(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Export",
        unicode: "\uEDE1",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconExportMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExportMirrored",
        unicode: "\uEDE2",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconSingleBookmark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SingleBookmark",
        unicode: "\uEDFF",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconSingleBookmarkSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SingleBookmarkSolid",
        unicode: "\uEE00",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDoubleChevronDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronDown",
        unicode: "\uEE04",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconFollowUser(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FollowUser",
        unicode: "\uEE05",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReplyAll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReplyAll",
        unicode: "\uEE0A",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconWorkforceManagement(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkforceManagement",
        unicode: "\uEE0F",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconRecruitmentManagement(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RecruitmentManagement",
        unicode: "\uEE12",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconQuestionnaire(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Questionnaire",
        unicode: "\uEE19",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconManagerSelfService(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ManagerSelfService",
        unicode: "\uEE23",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReplyMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReplyMirrored",
        unicode: "\uEE35",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReplyAllMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReplyAllMirrored",
        unicode: "\uEE36",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconMedal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Medal",
        unicode: "\uEE38",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconAddGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddGroup",
        unicode: "\uEE3D",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconQuestionnaireMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "QuestionnaireMirrored",
        unicode: "\uEE4B",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTemporaryUser(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TemporaryUser",
        unicode: "\uEE58",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretSolid16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolid16",
        unicode: "\uEE62",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconGroupedDescending(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GroupedDescending",
        unicode: "\uEE66",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconGroupedAscending(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GroupedAscending",
        unicode: "\uEE67",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconAwayStatus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AwayStatus",
        unicode: "\uEE6A",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconMyMoviesTV(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MyMoviesTV",
        unicode: "\uEE6C",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconGenericScan(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GenericScan",
        unicode: "\uEE6F",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconAustralianRules(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AustralianRules",
        unicode: "\uEE70",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconWifiEthernet(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WifiEthernet",
        unicode: "\uEE77",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTrackersMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TrackersMirrored",
        unicode: "\uEE92",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDateTimeMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DateTimeMirrored",
        unicode: "\uEE93",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconStopSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StopSolid",
        unicode: "\uEE95",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDoubleChevronUp12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronUp12",
        unicode: "\uEE96",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDoubleChevronDown12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronDown12",
        unicode: "\uEE97",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDoubleChevronLeft12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronLeft12",
        unicode: "\uEE98",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDoubleChevronRight12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronRight12",
        unicode: "\uEE99",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCalendarAgenda(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarAgenda",
        unicode: "\uEE9A",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconAddEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddEvent",
        unicode: "\uEEB5",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconAssetLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AssetLibrary",
        unicode: "\uEEB6",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDataConnectionLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DataConnectionLibrary",
        unicode: "\uEEB7",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDocLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocLibrary",
        unicode: "\uEEB8",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconFormLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FormLibrary",
        unicode: "\uEEB9",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconFormLibraryMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FormLibraryMirrored",
        unicode: "\uEEBA",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReportLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReportLibrary",
        unicode: "\uEEBB",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReportLibraryMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReportLibraryMirrored",
        unicode: "\uEEBC",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconContactCard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContactCard",
        unicode: "\uEEBD",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCustomList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CustomList",
        unicode: "\uEEBE",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCustomListMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CustomListMirrored",
        unicode: "\uEEBF",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconIssueTracking(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IssueTracking",
        unicode: "\uEEC0",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconIssueTrackingMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IssueTrackingMirrored",
        unicode: "\uEEC1",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconPictureLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PictureLibrary",
        unicode: "\uEEC2",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconOfficeAddinsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeAddinsLogo",
        unicode: "\uEEC7",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconOfflineOneDriveParachute(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfflineOneDriveParachute",
        unicode: "\uEEC8",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconOfflineOneDriveParachuteDisabled(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfflineOneDriveParachuteDisabled",
        unicode: "\uEEC9",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleSolidUp12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleSolidUp12",
        unicode: "\uEECC",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleSolidDown12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleSolidDown12",
        unicode: "\uEECD",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleSolidLeft12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleSolidLeft12",
        unicode: "\uEECE",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleSolidRight12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleSolidRight12",
        unicode: "\uEECF",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleUp12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleUp12",
        unicode: "\uEED0",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleDown12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleDown12",
        unicode: "\uEED1",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleLeft12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleLeft12",
        unicode: "\uEED2",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconTriangleRight12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleRight12",
        unicode: "\uEED3",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconArrowUpRight8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowUpRight8",
        unicode: "\uEED4",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconArrowDownRight8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowDownRight8",
        unicode: "\uEED5",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDocumentSet(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocumentSet",
        unicode: "\uEED6",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDelveAnalytics(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DelveAnalytics",
        unicode: "\uEEEE",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconArrowUpRightMirrored8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowUpRightMirrored8",
        unicode: "\uEEEF",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconArrowDownRightMirrored8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowDownRightMirrored8",
        unicode: "\uEEF0",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCompanyDirectory(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CompanyDirectory",
        unicode: "\uEF0D",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCompanyDirectoryMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CompanyDirectoryMirrored",
        unicode: "\uEF2B",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconOneDriveAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneDriveAdd",
        unicode: "\uEF32",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconProfileSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProfileSearch",
        unicode: "\uEF35",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconHeader2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Header2",
        unicode: "\uEF36",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconHeader3(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Header3",
        unicode: "\uEF37",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconHeader4(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Header4",
        unicode: "\uEF38",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconEyedropper(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Eyedropper",
        unicode: "\uEF3C",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconMarketDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MarketDown",
        unicode: "\uEF42",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCalendarWorkWeek(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarWorkWeek",
        unicode: "\uEF51",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconSidePanel(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SidePanel",
        unicode: "\uEF52",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconGlobeFavorite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GlobeFavorite",
        unicode: "\uEF53",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretTopLeftSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretTopLeftSolid8",
        unicode: "\uEF54",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconCaretTopRightSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretTopRightSolid8",
        unicode: "\uEF55",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconViewAll2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewAll2",
        unicode: "\uEF56",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconDocumentReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocumentReply",
        unicode: "\uEF57",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconPlayerSettings(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlayerSettings",
        unicode: "\uEF58",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReceiptForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptForward",
        unicode: "\uEF59",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReceiptReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptReply",
        unicode: "\uEF5A",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReceiptCheck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptCheck",
        unicode: "\uEF5B",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconFax(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Fax",
        unicode: "\uEF5C",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconRecurringEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RecurringEvent",
        unicode: "\uEF5D",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReplyAlt(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReplyAlt",
        unicode: "\uEF5E",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconReplyAllAlt(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReplyAllAlt",
        unicode: "\uEF5F",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconEditStyle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditStyle",
        unicode: "\uEF60",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconEditMail(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditMail",
        unicode: "\uEF61",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconLifesaver(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Lifesaver",
        unicode: "\uEF62",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconLifesaverLock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LifesaverLock",
        unicode: "\uEF63",
        bundle: "6-3954c770"
      };
    }
  });
}
function uiIconInboxCheck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InboxCheck",
        unicode: "\uEF64",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFolderSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderSearch",
        unicode: "\uEF65",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCollapseMenu(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CollapseMenu",
        unicode: "\uEF66",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconExpandMenu(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExpandMenu",
        unicode: "\uEF67",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBoards(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Boards",
        unicode: "\uEF68",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSunAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SunAdd",
        unicode: "\uEF69",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSunQuestionMark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SunQuestionMark",
        unicode: "\uEF6A",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconLandscapeOrientation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LandscapeOrientation",
        unicode: "\uEF6B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconDocumentSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocumentSearch",
        unicode: "\uEF6C",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPublicCalendar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublicCalendar",
        unicode: "\uEF6D",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPublicContactCard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublicContactCard",
        unicode: "\uEF6E",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPublicEmail(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublicEmail",
        unicode: "\uEF6F",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPublicFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublicFolder",
        unicode: "\uEF70",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconWordDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordDocument",
        unicode: "\uEF71",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPowerPointDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointDocument",
        unicode: "\uEF72",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconExcelDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelDocument",
        unicode: "\uEF73",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconGroupedList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GroupedList",
        unicode: "\uEF74",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconClassroomLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassroomLogo",
        unicode: "\uEF75",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSections(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sections",
        unicode: "\uEF76",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconEditPhoto(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditPhoto",
        unicode: "\uEF77",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconStarburst(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Starburst",
        unicode: "\uEF78",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconShareiOS(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShareiOS",
        unicode: "\uEF79",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconAirTickets(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AirTickets",
        unicode: "\uEF7A",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPencilReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PencilReply",
        unicode: "\uEF7B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconTiles2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Tiles2",
        unicode: "\uEF7C",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSkypeCircleCheck(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeCircleCheck",
        unicode: "\uEF7D",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSkypeCircleClock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeCircleClock",
        unicode: "\uEF7E",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSkypeCircleMinus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeCircleMinus",
        unicode: "\uEF7F",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSkypeMessage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeMessage",
        unicode: "\uEF83",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconClosedCaption(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClosedCaption",
        unicode: "\uEF84",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconATPLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ATPLogo",
        unicode: "\uEF85",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconOfficeFormsLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoInverse",
        unicode: "\uEF86",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconRecycleBin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RecycleBin",
        unicode: "\uEF87",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconEmptyRecycleBin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EmptyRecycleBin",
        unicode: "\uEF88",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconHide2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Hide2",
        unicode: "\uEF89",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBreadcrumb(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Breadcrumb",
        unicode: "\uEF8C",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBirthdayCake(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BirthdayCake",
        unicode: "\uEF8D",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconTimeEntry(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TimeEntry",
        unicode: "\uEF95",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPageEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageEdit",
        unicode: "\uEFB6",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPageRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageRemove",
        unicode: "\uEFBA",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconDatabase(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Database",
        unicode: "\uEFC7",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconEditContact(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditContact",
        unicode: "\uEFD3",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconConnectContacts(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ConnectContacts",
        unicode: "\uEFD4",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconActivateOrders(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ActivateOrders",
        unicode: "\uEFE0",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconDeactivateOrders(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeactivateOrders",
        unicode: "\uEFE1",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconDocumentManagement(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocumentManagement",
        unicode: "\uEFFC",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCRMReport(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CRMReport",
        unicode: "\uEFFE",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconZipFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ZipFolder",
        unicode: "\uF012",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSurveyQuestions(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SurveyQuestions",
        unicode: "\uF01B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconTextDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextDocument",
        unicode: "\uF029",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconTextDocumentShared(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextDocumentShared",
        unicode: "\uF02B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPageCheckedOut(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageCheckedOut",
        unicode: "\uF02C",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSaveAndClose(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SaveAndClose",
        unicode: "\uF038",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconScript(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Script",
        unicode: "\uF03A",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconArchive(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Archive",
        unicode: "\uF03F",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconActivityFeed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ActivityFeed",
        unicode: "\uF056",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconEventDate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventDate",
        unicode: "\uF059",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconArrowUpRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowUpRight",
        unicode: "\uF069",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretRight",
        unicode: "\uF06B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSetAction(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SetAction",
        unicode: "\uF071",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretSolidLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolidLeft",
        unicode: "\uF08D",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretSolidDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolidDown",
        unicode: "\uF08E",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretSolidRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolidRight",
        unicode: "\uF08F",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretSolidUp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretSolidUp",
        unicode: "\uF090",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPowerAppsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerAppsLogo",
        unicode: "\uF091",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPowerApps2Logo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerApps2Logo",
        unicode: "\uF092",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSearchIssue(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SearchIssue",
        unicode: "\uF09A",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSearchIssueMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SearchIssueMirrored",
        unicode: "\uF09B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricAssetLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricAssetLibrary",
        unicode: "\uF09C",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricDataConnectionLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricDataConnectionLibrary",
        unicode: "\uF09D",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricDocLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricDocLibrary",
        unicode: "\uF09E",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricFormLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricFormLibrary",
        unicode: "\uF09F",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricFormLibraryMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricFormLibraryMirrored",
        unicode: "\uF0A0",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricReportLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricReportLibrary",
        unicode: "\uF0A1",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricReportLibraryMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricReportLibraryMirrored",
        unicode: "\uF0A2",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricPublicFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricPublicFolder",
        unicode: "\uF0A3",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricFolderSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricFolderSearch",
        unicode: "\uF0A4",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricMovetoFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricMovetoFolder",
        unicode: "\uF0A5",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricUnsyncFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricUnsyncFolder",
        unicode: "\uF0A6",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricSyncFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricSyncFolder",
        unicode: "\uF0A7",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricOpenFolderHorizontal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricOpenFolderHorizontal",
        unicode: "\uF0A8",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricFolder",
        unicode: "\uF0A9",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricFolderFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricFolderFill",
        unicode: "\uF0AA",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricNewFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricNewFolder",
        unicode: "\uF0AB",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFabricPictureLibrary(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FabricPictureLibrary",
        unicode: "\uF0AC",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconAddFavorite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddFavorite",
        unicode: "\uF0C8",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconAddFavoriteFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddFavoriteFill",
        unicode: "\uF0C9",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBufferTimeBefore(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BufferTimeBefore",
        unicode: "\uF0CF",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBufferTimeAfter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BufferTimeAfter",
        unicode: "\uF0D0",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconBufferTimeBoth(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BufferTimeBoth",
        unicode: "\uF0D1",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCannedChat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CannedChat",
        unicode: "\uF0F2",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconSkypeForBusinessLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeForBusinessLogo",
        unicode: "\uF0FC",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconPageCheckedin(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageCheckedin",
        unicode: "\uF104",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconReadOutLoud(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReadOutLoud",
        unicode: "\uF112",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretBottomLeftSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretBottomLeftSolid8",
        unicode: "\uF121",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconCaretBottomRightSolid8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretBottomRightSolid8",
        unicode: "\uF122",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconFolderHorizontal(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderHorizontal",
        unicode: "\uF12B",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconMicrosoftStaffhubLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MicrosoftStaffhubLogo",
        unicode: "\uF130",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconGiftboxOpen(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GiftboxOpen",
        unicode: "\uF133",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconStatusCircleOuter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleOuter",
        unicode: "\uF136",
        bundle: "7-02107cf8"
      };
    }
  });
}
function uiIconStatusCircleInner(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleInner",
        unicode: "\uF137",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleRing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleRing",
        unicode: "\uF138",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusTriangleOuter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusTriangleOuter",
        unicode: "\uF139",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusTriangleInner(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusTriangleInner",
        unicode: "\uF13A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusTriangleExclamation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusTriangleExclamation",
        unicode: "\uF13B",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleExclamation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleExclamation",
        unicode: "\uF13C",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleErrorX(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleErrorX",
        unicode: "\uF13D",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleInfo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleInfo",
        unicode: "\uF13F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleBlock2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleBlock2",
        unicode: "\uF141",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStatusCircleQuestionMark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StatusCircleQuestionMark",
        unicode: "\uF142",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconToll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Toll",
        unicode: "\uF160",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconExploreContentSingle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExploreContentSingle",
        unicode: "\uF164",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconCollapseContent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CollapseContent",
        unicode: "\uF165",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconCollapseContentSingle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CollapseContentSingle",
        unicode: "\uF166",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconInfoSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InfoSolid",
        unicode: "\uF167",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconProgressRingDots(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProgressRingDots",
        unicode: "\uF16A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconCaloriesAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaloriesAdd",
        unicode: "\uF172",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBranchFork(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchFork",
        unicode: "\uF173",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconMobileReport(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MobileReport",
        unicode: "\uF18A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconHardDriveGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HardDriveGroup",
        unicode: "\uF18F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconFastMode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FastMode",
        unicode: "\uF19A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconToggleOn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToggleOn",
        unicode: "\uF19E",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconToggleOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToggleOff",
        unicode: "\uF19F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTrophy2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Trophy2",
        unicode: "\uF1AE",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBucketColor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BucketColor",
        unicode: "\uF1B6",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBucketColorFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BucketColorFill",
        unicode: "\uF1B7",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTaskboard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Taskboard",
        unicode: "\uF1C2",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSingleColumn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SingleColumn",
        unicode: "\uF1D3",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconDoubleColumn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleColumn",
        unicode: "\uF1D4",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTripleColumn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TripleColumn",
        unicode: "\uF1D5",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconColumnLeftTwoThirds(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColumnLeftTwoThirds",
        unicode: "\uF1D6",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconColumnRightTwoThirds(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColumnRightTwoThirds",
        unicode: "\uF1D7",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconAccessLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AccessLogoFill",
        unicode: "\uF1DB",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconAnalyticsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AnalyticsLogo",
        unicode: "\uF1DE",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconAnalyticsQuery(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AnalyticsQuery",
        unicode: "\uF1DF",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconNewAnalyticsQuery(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NewAnalyticsQuery",
        unicode: "\uF1E0",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconAnalyticsReport(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AnalyticsReport",
        unicode: "\uF1E1",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconWordLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogo",
        unicode: "\uF1E3",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconWordLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogoFill",
        unicode: "\uF1E4",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconExcelLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogo",
        unicode: "\uF1E5",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconExcelLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogoFill",
        unicode: "\uF1E6",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOneNoteLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogo",
        unicode: "\uF1E7",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOneNoteLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogoFill",
        unicode: "\uF1E8",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOutlookLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogo",
        unicode: "\uF1E9",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOutlookLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogoFill",
        unicode: "\uF1EA",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPowerPointLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogo",
        unicode: "\uF1EB",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPowerPointLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogoFill",
        unicode: "\uF1EC",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPublisherLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublisherLogo",
        unicode: "\uF1ED",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPublisherLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublisherLogoFill",
        unicode: "\uF1EE",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconScheduleEventAction(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ScheduleEventAction",
        unicode: "\uF1EF",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconFlameSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FlameSolid",
        unicode: "\uF1F3",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconServerProcesses(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ServerProcesses",
        unicode: "\uF1FE",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconServer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Server",
        unicode: "\uF201",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSaveAll(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SaveAll",
        unicode: "\uF203",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconLinkedInLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LinkedInLogo",
        unicode: "\uF20A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconDecimals(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Decimals",
        unicode: "\uF218",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSidePanelMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SidePanelMirrored",
        unicode: "\uF221",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconProtectRestrict(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProtectRestrict",
        unicode: "\uF22A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconUnknownMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnknownMirrored",
        unicode: "\uF22E",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPublicContactCardMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublicContactCardMirrored",
        unicode: "\uF230",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconGridViewSmall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GridViewSmall",
        unicode: "\uF232",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconGridViewMedium(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GridViewMedium",
        unicode: "\uF233",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconGridViewLarge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GridViewLarge",
        unicode: "\uF234",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStep(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Step",
        unicode: "\uF241",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStepInsert(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StepInsert",
        unicode: "\uF242",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStepShared(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StepShared",
        unicode: "\uF243",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStepSharedAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StepSharedAdd",
        unicode: "\uF244",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStepSharedInsert(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StepSharedInsert",
        unicode: "\uF245",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconViewDashboard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewDashboard",
        unicode: "\uF246",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconViewList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewList",
        unicode: "\uF247",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconViewListGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewListGroup",
        unicode: "\uF248",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconViewListTree(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ViewListTree",
        unicode: "\uF249",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTriggerAuto(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriggerAuto",
        unicode: "\uF24A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTriggerUser(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriggerUser",
        unicode: "\uF24B",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconPivotChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PivotChart",
        unicode: "\uF24C",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStackedBarChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StackedBarChart",
        unicode: "\uF24D",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStackedLineChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StackedLineChart",
        unicode: "\uF24E",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBuildQueue(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BuildQueue",
        unicode: "\uF24F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBuildQueueNew(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BuildQueueNew",
        unicode: "\uF250",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconUserFollowed(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserFollowed",
        unicode: "\uF25C",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconContactLink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContactLink",
        unicode: "\uF25F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconStack(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Stack",
        unicode: "\uF26F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconBullseye(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Bullseye",
        unicode: "\uF272",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconVennDiagram(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VennDiagram",
        unicode: "\uF273",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconFiveTileGrid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FiveTileGrid",
        unicode: "\uF274",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconFocalPoint(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FocalPoint",
        unicode: "\uF277",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconRingerRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RingerRemove",
        unicode: "\uF279",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTeamsLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamsLogoInverse",
        unicode: "\uF27A",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTeamsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamsLogo",
        unicode: "\uF27B",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconTeamsLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamsLogoFill",
        unicode: "\uF27C",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSkypeForBusinessLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeForBusinessLogoFill",
        unicode: "\uF27D",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSharepointLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SharepointLogo",
        unicode: "\uF27E",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconSharepointLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SharepointLogoFill",
        unicode: "\uF27F",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconDelveLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DelveLogo",
        unicode: "\uF280",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconDelveLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DelveLogoFill",
        unicode: "\uF281",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOfficeVideoLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeVideoLogo",
        unicode: "\uF282",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconOfficeVideoLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeVideoLogoFill",
        unicode: "\uF283",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconExchangeLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExchangeLogo",
        unicode: "\uF284",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconExchangeLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExchangeLogoFill",
        unicode: "\uF285",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconDocumentApproval(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DocumentApproval",
        unicode: "\uF28B",
        bundle: "8-645fa64e"
      };
    }
  });
}
function uiIconCloneToDesktop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CloneToDesktop",
        unicode: "\uF28C",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconInstallToDrive(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InstallToDrive",
        unicode: "\uF28D",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBlur(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Blur",
        unicode: "\uF28E",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBuild(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Build",
        unicode: "\uF28F",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconProcessMetaTask(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProcessMetaTask",
        unicode: "\uF290",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchFork2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchFork2",
        unicode: "\uF291",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchLocked(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchLocked",
        unicode: "\uF292",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchCommit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchCommit",
        unicode: "\uF293",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchCompare(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchCompare",
        unicode: "\uF294",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchMerge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchMerge",
        unicode: "\uF295",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchPullRequest(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchPullRequest",
        unicode: "\uF296",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchSearch",
        unicode: "\uF297",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBranchShelveset(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BranchShelveset",
        unicode: "\uF298",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRawSource(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RawSource",
        unicode: "\uF299",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconMergeDuplicate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MergeDuplicate",
        unicode: "\uF29A",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRowsGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RowsGroup",
        unicode: "\uF29B",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRowsChild(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RowsChild",
        unicode: "\uF29C",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconDeploy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Deploy",
        unicode: "\uF29D",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRedeploy(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Redeploy",
        unicode: "\uF29E",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconServerEnviroment(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ServerEnviroment",
        unicode: "\uF29F",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVisioDiagram(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioDiagram",
        unicode: "\uF2A0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconHighlightMappedShapes(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HighlightMappedShapes",
        unicode: "\uF2A1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTextCallout(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextCallout",
        unicode: "\uF2A2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconIconSetsFlag(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IconSetsFlag",
        unicode: "\uF2A4",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVisioLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogo",
        unicode: "\uF2A7",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVisioLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogoFill",
        unicode: "\uF2A8",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVisioDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioDocument",
        unicode: "\uF2A9",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTimelineProgress(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TimelineProgress",
        unicode: "\uF2AA",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTimelineDelivery(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TimelineDelivery",
        unicode: "\uF2AB",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBacklog(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Backlog",
        unicode: "\uF2AC",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTeamFavorite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamFavorite",
        unicode: "\uF2AD",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTaskGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskGroup",
        unicode: "\uF2AE",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconTaskGroupMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskGroupMirrored",
        unicode: "\uF2AF",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconScopeTemplate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ScopeTemplate",
        unicode: "\uF2B0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconAssessmentGroupTemplate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AssessmentGroupTemplate",
        unicode: "\uF2B1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconNewTeamProject(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NewTeamProject",
        unicode: "\uF2B2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCommentAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CommentAdd",
        unicode: "\uF2B3",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCommentNext(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CommentNext",
        unicode: "\uF2B4",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCommentPrevious(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CommentPrevious",
        unicode: "\uF2B5",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconShopServer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShopServer",
        unicode: "\uF2B6",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconLocaleLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LocaleLanguage",
        unicode: "\uF2B7",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconQueryList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "QueryList",
        unicode: "\uF2B8",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconUserSync(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserSync",
        unicode: "\uF2B9",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconUserPause(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserPause",
        unicode: "\uF2BA",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconStreamingOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StreamingOff",
        unicode: "\uF2BB",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconArrowTallUpLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowTallUpLeft",
        unicode: "\uF2BD",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconArrowTallUpRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowTallUpRight",
        unicode: "\uF2BE",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconArrowTallDownLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowTallDownLeft",
        unicode: "\uF2BF",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconArrowTallDownRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrowTallDownRight",
        unicode: "\uF2C0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFieldEmpty(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldEmpty",
        unicode: "\uF2C1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFieldFilled(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldFilled",
        unicode: "\uF2C2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFieldChanged(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldChanged",
        unicode: "\uF2C3",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFieldNotChanged(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldNotChanged",
        unicode: "\uF2C4",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRingerOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RingerOff",
        unicode: "\uF2C5",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconPlayResume(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlayResume",
        unicode: "\uF2C6",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBulletedList2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BulletedList2",
        unicode: "\uF2C7",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBulletedList2Mirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BulletedList2Mirrored",
        unicode: "\uF2C8",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconImageCrosshair(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ImageCrosshair",
        unicode: "\uF2C9",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconGitGraph(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GitGraph",
        unicode: "\uF2CA",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRepo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Repo",
        unicode: "\uF2CB",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconRepoSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RepoSolid",
        unicode: "\uF2CC",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFolderQuery(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderQuery",
        unicode: "\uF2CD",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFolderList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderList",
        unicode: "\uF2CE",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFolderListMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FolderListMirrored",
        unicode: "\uF2CF",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconLocationOutline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LocationOutline",
        unicode: "\uF2D0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconPOISolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "POISolid",
        unicode: "\uF2D1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCalculatorNotEqualTo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalculatorNotEqualTo",
        unicode: "\uF2D2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBoxSubtractSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BoxSubtractSolid",
        unicode: "\uF2D3",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBoxAdditionSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BoxAdditionSolid",
        unicode: "\uF2D4",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBoxMultiplySolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BoxMultiplySolid",
        unicode: "\uF2D5",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBoxPlaySolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BoxPlaySolid",
        unicode: "\uF2D6",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconBoxCheckmarkSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BoxCheckmarkSolid",
        unicode: "\uF2D7",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCirclePauseSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CirclePauseSolid",
        unicode: "\uF2D8",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCirclePause(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CirclePause",
        unicode: "\uF2D9",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconMSNVideosSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MSNVideosSolid",
        unicode: "\uF2DA",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCircleStopSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleStopSolid",
        unicode: "\uF2DB",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCircleStop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleStop",
        unicode: "\uF2DC",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconNavigateBack(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigateBack",
        unicode: "\uF2DD",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconNavigateBackMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigateBackMirrored",
        unicode: "\uF2DE",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconNavigateForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigateForward",
        unicode: "\uF2DF",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconNavigateForwardMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigateForwardMirrored",
        unicode: "\uF2E0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconUnknownSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnknownSolid",
        unicode: "\uF2E1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconUnknownMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnknownMirroredSolid",
        unicode: "\uF2E2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCircleAddition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleAddition",
        unicode: "\uF2E3",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCircleAdditionSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleAdditionSolid",
        unicode: "\uF2E4",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFilePDB(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FilePDB",
        unicode: "\uF2E5",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileTemplate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileTemplate",
        unicode: "\uF2E6",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileSQL(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileSQL",
        unicode: "\uF2E7",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileJAVA(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileJAVA",
        unicode: "\uF2E8",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileASPX(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileASPX",
        unicode: "\uF2E9",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileCSS(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileCSS",
        unicode: "\uF2EA",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileSass(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileSass",
        unicode: "\uF2EB",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileLess(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileLess",
        unicode: "\uF2EC",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconFileHTML(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileHTML",
        unicode: "\uF2ED",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconJavaScriptLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "JavaScriptLanguage",
        unicode: "\uF2EE",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCSharpLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CSharpLanguage",
        unicode: "\uF2EF",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCSharp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CSharp",
        unicode: "\uF2F0",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVisualBasicLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisualBasicLanguage",
        unicode: "\uF2F1",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconVB(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VB",
        unicode: "\uF2F2",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCPlusPlusLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CPlusPlusLanguage",
        unicode: "\uF2F3",
        bundle: "9-53746c82"
      };
    }
  });
}
function uiIconCPlusPlus(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CPlusPlus",
        unicode: "\uF2F4",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFSharpLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FSharpLanguage",
        unicode: "\uF2F5",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFSharp(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FSharp",
        unicode: "\uF2F6",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconTypeScriptLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TypeScriptLanguage",
        unicode: "\uF2F7",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPythonLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PythonLanguage",
        unicode: "\uF2F8",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPY(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PY",
        unicode: "\uF2F9",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCoffeeScript(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CoffeeScript",
        unicode: "\uF2FA",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconMarkDownLanguage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MarkDownLanguage",
        unicode: "\uF2FB",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFullWidth(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FullWidth",
        unicode: "\uF2FE",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFullWidthEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FullWidthEdit",
        unicode: "\uF2FF",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPlug(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Plug",
        unicode: "\uF300",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPlugSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlugSolid",
        unicode: "\uF301",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPlugConnected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlugConnected",
        unicode: "\uF302",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPlugDisconnected(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlugDisconnected",
        unicode: "\uF303",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconUnlockSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnlockSolid",
        unicode: "\uF304",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconVariable(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Variable",
        unicode: "\uF305",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconParameter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Parameter",
        unicode: "\uF306",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCommentUrgent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CommentUrgent",
        unicode: "\uF307",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconStoryboard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Storyboard",
        unicode: "\uF308",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconDiffInline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DiffInline",
        unicode: "\uF309",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconDiffSideBySide(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DiffSideBySide",
        unicode: "\uF30A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconImageDiff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ImageDiff",
        unicode: "\uF30B",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconImagePixel(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ImagePixel",
        unicode: "\uF30C",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFileBug(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileBug",
        unicode: "\uF30D",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFileCode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileCode",
        unicode: "\uF30E",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFileComment(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileComment",
        unicode: "\uF30F",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconBusinessHoursSign(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BusinessHoursSign",
        unicode: "\uF310",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFileImage(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileImage",
        unicode: "\uF311",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFileSymlink(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileSymlink",
        unicode: "\uF312",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconAutoFillTemplate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AutoFillTemplate",
        unicode: "\uF313",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconWorkItem(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkItem",
        unicode: "\uF314",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconWorkItemBug(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkItemBug",
        unicode: "\uF315",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconLogRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LogRemove",
        unicode: "\uF316",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconColumnOptions(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColumnOptions",
        unicode: "\uF317",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPackages(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Packages",
        unicode: "\uF318",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconBuildIssue(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BuildIssue",
        unicode: "\uF319",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconAssessmentGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AssessmentGroup",
        unicode: "\uF31A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconVariableGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VariableGroup",
        unicode: "\uF31B",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFullHistory(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FullHistory",
        unicode: "\uF31C",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconSingleColumnEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SingleColumnEdit",
        unicode: "\uF321",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconDoubleColumnEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleColumnEdit",
        unicode: "\uF322",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconTripleColumnEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TripleColumnEdit",
        unicode: "\uF323",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconColumnLeftTwoThirdsEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColumnLeftTwoThirdsEdit",
        unicode: "\uF324",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconColumnRightTwoThirdsEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColumnRightTwoThirdsEdit",
        unicode: "\uF325",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconStreamLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StreamLogo",
        unicode: "\uF329",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPassiveAuthentication(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PassiveAuthentication",
        unicode: "\uF32A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconAlertSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlertSolid",
        unicode: "\uF331",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconMegaphoneSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MegaphoneSolid",
        unicode: "\uF332",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconTaskSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskSolid",
        unicode: "\uF333",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconConfigurationSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ConfigurationSolid",
        unicode: "\uF334",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconBugSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BugSolid",
        unicode: "\uF335",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCrownSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CrownSolid",
        unicode: "\uF336",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconTrophy2Solid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Trophy2Solid",
        unicode: "\uF337",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconQuickNoteSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "QuickNoteSolid",
        unicode: "\uF338",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconConstructionConeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ConstructionConeSolid",
        unicode: "\uF339",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPageListSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageListSolid",
        unicode: "\uF33A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPageListMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageListMirroredSolid",
        unicode: "\uF33B",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconStarburstSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StarburstSolid",
        unicode: "\uF33C",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconReadingModeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReadingModeSolid",
        unicode: "\uF33D",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconSadSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SadSolid",
        unicode: "\uF33E",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconHealthSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HealthSolid",
        unicode: "\uF33F",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconShieldSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShieldSolid",
        unicode: "\uF340",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconGiftBoxSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GiftBoxSolid",
        unicode: "\uF341",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconShoppingCartSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ShoppingCartSolid",
        unicode: "\uF342",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconMailSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailSolid",
        unicode: "\uF343",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconChatSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChatSolid",
        unicode: "\uF344",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconRibbonSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RibbonSolid",
        unicode: "\uF345",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFinancialSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FinancialSolid",
        unicode: "\uF346",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFinancialMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FinancialMirroredSolid",
        unicode: "\uF347",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconHeadsetSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HeadsetSolid",
        unicode: "\uF348",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPermissionsSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PermissionsSolid",
        unicode: "\uF349",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconParkingSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ParkingSolid",
        unicode: "\uF34A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconParkingMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ParkingMirroredSolid",
        unicode: "\uF34B",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconDiamondSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DiamondSolid",
        unicode: "\uF34C",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconAsteriskSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AsteriskSolid",
        unicode: "\uF34D",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconOfflineStorageSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfflineStorageSolid",
        unicode: "\uF34E",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconBankSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BankSolid",
        unicode: "\uF34F",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconDecisionSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DecisionSolid",
        unicode: "\uF350",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconParachute(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Parachute",
        unicode: "\uF351",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconParachuteSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ParachuteSolid",
        unicode: "\uF352",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFiltersSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FiltersSolid",
        unicode: "\uF353",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconColorSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ColorSolid",
        unicode: "\uF354",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconReviewSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReviewSolid",
        unicode: "\uF355",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconReviewRequestSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReviewRequestSolid",
        unicode: "\uF356",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconReviewRequestMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReviewRequestMirroredSolid",
        unicode: "\uF357",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconReviewResponseSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReviewResponseSolid",
        unicode: "\uF358",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFeedbackRequestSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FeedbackRequestSolid",
        unicode: "\uF359",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFeedbackRequestMirroredSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FeedbackRequestMirroredSolid",
        unicode: "\uF35A",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconFeedbackResponseSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FeedbackResponseSolid",
        unicode: "\uF35B",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconWorkItemBar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkItemBar",
        unicode: "\uF35C",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconWorkItemBarSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WorkItemBarSolid",
        unicode: "\uF35D",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconSeparator(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Separator",
        unicode: "\uF35E",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconNavigateExternalInline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigateExternalInline",
        unicode: "\uF35F",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconPlanView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PlanView",
        unicode: "\uF360",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconTimelineMatrixView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TimelineMatrixView",
        unicode: "\uF361",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconEngineeringGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EngineeringGroup",
        unicode: "\uF362",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconProjectCollection(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectCollection",
        unicode: "\uF363",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCaretBottomRightCenter8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretBottomRightCenter8",
        unicode: "\uF364",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCaretBottomLeftCenter8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretBottomLeftCenter8",
        unicode: "\uF365",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCaretTopRightCenter8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretTopRightCenter8",
        unicode: "\uF366",
        bundle: "10-fb519450"
      };
    }
  });
}
function uiIconCaretTopLeftCenter8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CaretTopLeftCenter8",
        unicode: "\uF367",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDonutChart(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DonutChart",
        unicode: "\uF368",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronUnfold10(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronUnfold10",
        unicode: "\uF369",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronFold10(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronFold10",
        unicode: "\uF36A",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDoubleChevronDown8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronDown8",
        unicode: "\uF36B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDoubleChevronUp8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronUp8",
        unicode: "\uF36C",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDoubleChevronLeft8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronLeft8",
        unicode: "\uF36D",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDoubleChevronRight8(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DoubleChevronRight8",
        unicode: "\uF36E",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronDownEnd6(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronDownEnd6",
        unicode: "\uF36F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronUpEnd6(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronUpEnd6",
        unicode: "\uF370",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronLeftEnd6(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronLeftEnd6",
        unicode: "\uF371",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconChevronRightEnd6(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChevronRightEnd6",
        unicode: "\uF372",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconContextMenu(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContextMenu",
        unicode: "\uF37C",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconAzureAPIManagement(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AzureAPIManagement",
        unicode: "\uF37F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconAzureServiceEndpoint(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AzureServiceEndpoint",
        unicode: "\uF380",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVSTSLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VSTSLogo",
        unicode: "\uF381",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVSTSAltLogo1(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VSTSAltLogo1",
        unicode: "\uF382",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVSTSAltLogo2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VSTSAltLogo2",
        unicode: "\uF383",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconFileTypeSolution(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileTypeSolution",
        unicode: "\uF387",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconWordLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogoInverse16",
        unicode: "\uF390",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconWordLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogo16",
        unicode: "\uF391",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconWordLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WordLogoFill16",
        unicode: "\uF392",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPowerPointLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogoInverse16",
        unicode: "\uF393",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPowerPointLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogo16",
        unicode: "\uF394",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPowerPointLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PowerPointLogoFill16",
        unicode: "\uF395",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconExcelLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogoInverse16",
        unicode: "\uF396",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconExcelLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogo16",
        unicode: "\uF397",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconExcelLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExcelLogoFill16",
        unicode: "\uF398",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOneNoteLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogoInverse16",
        unicode: "\uF399",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOneNoteLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogo16",
        unicode: "\uF39A",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOneNoteLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneNoteLogoFill16",
        unicode: "\uF39B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOutlookLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogoInverse16",
        unicode: "\uF39C",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOutlookLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogo16",
        unicode: "\uF39D",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOutlookLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OutlookLogoFill16",
        unicode: "\uF39E",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPublisherLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublisherLogoInverse16",
        unicode: "\uF39F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPublisherLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublisherLogo16",
        unicode: "\uF3A0",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPublisherLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublisherLogoFill16",
        unicode: "\uF3A1",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVisioLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogoInverse16",
        unicode: "\uF3A2",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVisioLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogo16",
        unicode: "\uF3A3",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVisioLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisioLogoFill16",
        unicode: "\uF3A4",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestBeaker(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestBeaker",
        unicode: "\uF3A5",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestBeakerSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestBeakerSolid",
        unicode: "\uF3A6",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestExploreSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestExploreSolid",
        unicode: "\uF3A7",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestAutoSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestAutoSolid",
        unicode: "\uF3A8",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestUserSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestUserSolid",
        unicode: "\uF3A9",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestImpactSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestImpactSolid",
        unicode: "\uF3AA",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestPlan(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestPlan",
        unicode: "\uF3AB",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestStep(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestStep",
        unicode: "\uF3AC",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestParameter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestParameter",
        unicode: "\uF3AD",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestSuite(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestSuite",
        unicode: "\uF3AE",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTestCase(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TestCase",
        unicode: "\uF3AF",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSprint(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Sprint",
        unicode: "\uF3B0",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSignOut(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SignOut",
        unicode: "\uF3B1",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTriggerApproval(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriggerApproval",
        unicode: "\uF3B2",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconRocket(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Rocket",
        unicode: "\uF3B3",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconAzureKeyVault(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AzureKeyVault",
        unicode: "\uF3B4",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTransition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Transition",
        unicode: "\uF3BC",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconLikeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LikeSolid",
        unicode: "\uF3BF",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDislikeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DislikeSolid",
        unicode: "\uF3C0",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconUnSetColor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnSetColor",
        unicode: "\uF3F9",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconDeclineCall(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeclineCall",
        unicode: "\uF405",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconRectangularClipping(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RectangularClipping",
        unicode: "\uF407",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTeamsLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamsLogo16",
        unicode: "\uF40A",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconTeamsLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TeamsLogoFill16",
        unicode: "\uF40B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSpacer(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Spacer",
        unicode: "\uF40D",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSkypeLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeLogo16",
        unicode: "\uF40E",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSkypeForBusinessLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeForBusinessLogo16",
        unicode: "\uF40F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconSkypeForBusinessLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SkypeForBusinessLogoFill16",
        unicode: "\uF410",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconFilterSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FilterSolid",
        unicode: "\uF412",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconMailUndelivered(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailUndelivered",
        unicode: "\uF415",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconMailTentative(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailTentative",
        unicode: "\uF416",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconMailTentativeMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailTentativeMirrored",
        unicode: "\uF417",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconMailReminder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailReminder",
        unicode: "\uF418",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconReceiptUndelivered(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptUndelivered",
        unicode: "\uF419",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconReceiptTentative(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptTentative",
        unicode: "\uF41A",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconReceiptTentativeMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReceiptTentativeMirrored",
        unicode: "\uF41B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconInbox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Inbox",
        unicode: "\uF41C",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconIRMReply(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IRMReply",
        unicode: "\uF41D",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconIRMReplyMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IRMReplyMirrored",
        unicode: "\uF41E",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconIRMForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IRMForward",
        unicode: "\uF41F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconIRMForwardMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IRMForwardMirrored",
        unicode: "\uF420",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconVoicemailIRM(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VoicemailIRM",
        unicode: "\uF421",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconEventAccepted(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventAccepted",
        unicode: "\uF422",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconEventTentative(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventTentative",
        unicode: "\uF423",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconEventTentativeMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventTentativeMirrored",
        unicode: "\uF424",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconEventDeclined(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EventDeclined",
        unicode: "\uF425",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconIDBadge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IDBadge",
        unicode: "\uF427",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconBackgroundColor(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BackgroundColor",
        unicode: "\uF42B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoInverse16",
        unicode: "\uF433",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogo",
        unicode: "\uF434",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogoFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoFill",
        unicode: "\uF435",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogo16",
        unicode: "\uF436",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoFill16",
        unicode: "\uF437",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogoInverse24(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoInverse24",
        unicode: "\uF43A",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogo24(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogo24",
        unicode: "\uF43B",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconOfficeFormsLogoFill24(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeFormsLogoFill24",
        unicode: "\uF43C",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconPageLock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PageLock",
        unicode: "\uF43F",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconNotExecuted(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NotExecuted",
        unicode: "\uF440",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconNotImpactedSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NotImpactedSolid",
        unicode: "\uF441",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconFieldReadOnly(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldReadOnly",
        unicode: "\uF442",
        bundle: "11-a4026982"
      };
    }
  });
}
function uiIconFieldRequired(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FieldRequired",
        unicode: "\uF443",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBacklogBoard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BacklogBoard",
        unicode: "\uF444",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconExternalBuild(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExternalBuild",
        unicode: "\uF445",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconExternalTFVC(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExternalTFVC",
        unicode: "\uF446",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconExternalXAML(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExternalXAML",
        unicode: "\uF447",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconIssueSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "IssueSolid",
        unicode: "\uF448",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconDefectSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DefectSolid",
        unicode: "\uF449",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconLadybugSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LadybugSolid",
        unicode: "\uF44A",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconNugetLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NugetLogo",
        unicode: "\uF44C",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconTFVCLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TFVCLogo",
        unicode: "\uF44D",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconProjectLogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectLogo32",
        unicode: "\uF47E",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconProjectLogoFill32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectLogoFill32",
        unicode: "\uF47F",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconProjectLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectLogo16",
        unicode: "\uF480",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconProjectLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProjectLogoFill16",
        unicode: "\uF481",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSwayLogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwayLogo32",
        unicode: "\uF482",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSwayLogoFill32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwayLogoFill32",
        unicode: "\uF483",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSwayLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwayLogo16",
        unicode: "\uF484",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSwayLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SwayLogoFill16",
        unicode: "\uF485",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogo32",
        unicode: "\uF486",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogoFill32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogoFill32",
        unicode: "\uF487",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogo16",
        unicode: "\uF488",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogoFill16",
        unicode: "\uF489",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogoInverse32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogoInverse32",
        unicode: "\uF48A",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconClassNotebookLogoInverse16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClassNotebookLogoInverse16",
        unicode: "\uF48B",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogo32",
        unicode: "\uF48C",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogoFill32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogoFill32",
        unicode: "\uF48D",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogo16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogo16",
        unicode: "\uF48E",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogoFill16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogoFill16",
        unicode: "\uF48F",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogoInverted32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogoInverted32",
        unicode: "\uF490",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconStaffNotebookLogoInverted16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "StaffNotebookLogoInverted16",
        unicode: "\uF491",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconKaizalaLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "KaizalaLogo",
        unicode: "\uF492",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconTaskLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TaskLogo",
        unicode: "\uF493",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconProtectionCenterLogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ProtectionCenterLogo32",
        unicode: "\uF494",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconGallatinLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GallatinLogo",
        unicode: "\uF496",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconGlobe2(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Globe2",
        unicode: "\uF49A",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconGuitar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Guitar",
        unicode: "\uF49B",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBreakfast(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Breakfast",
        unicode: "\uF49C",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBrunch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Brunch",
        unicode: "\uF49D",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBeerMug(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BeerMug",
        unicode: "\uF49E",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconVacation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Vacation",
        unicode: "\uF49F",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconTeeth(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Teeth",
        unicode: "\uF4A0",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconTaxi(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Taxi",
        unicode: "\uF4A1",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconChopsticks(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Chopsticks",
        unicode: "\uF4A2",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSyncOccurence(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SyncOccurence",
        unicode: "\uF4A3",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconUnsyncOccurence(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UnsyncOccurence",
        unicode: "\uF4A4",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconPrimaryCalendar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PrimaryCalendar",
        unicode: "\uF4AE",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSearchCalendar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SearchCalendar",
        unicode: "\uF4AF",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconVideoOff(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VideoOff",
        unicode: "\uF4B0",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconMicrosoftFlowLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MicrosoftFlowLogo",
        unicode: "\uF4B1",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBusinessCenterLogo(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BusinessCenterLogo",
        unicode: "\uF4B2",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconToDoLogoBottom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToDoLogoBottom",
        unicode: "\uF4B3",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconToDoLogoTop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToDoLogoTop",
        unicode: "\uF4B4",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconEditSolid12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditSolid12",
        unicode: "\uF4B5",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconEditSolidMirrored12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EditSolidMirrored12",
        unicode: "\uF4B6",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconUneditableSolid12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UneditableSolid12",
        unicode: "\uF4B7",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconUneditableSolidMirrored12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UneditableSolidMirrored12",
        unicode: "\uF4B8",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconUneditableMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UneditableMirrored",
        unicode: "\uF4B9",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAdminALogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminALogo32",
        unicode: "\uF4BA",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAdminALogoFill32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AdminALogoFill32",
        unicode: "\uF4BB",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconToDoLogoInverse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ToDoLogoInverse",
        unicode: "\uF4BC",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSnooze(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Snooze",
        unicode: "\uF4BD",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconWaffleOffice365(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WaffleOffice365",
        unicode: "\uF4E0",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconImageSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ImageSearch",
        unicode: "\uF4E8",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconNewsSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NewsSearch",
        unicode: "\uF4E9",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconVideoSearch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VideoSearch",
        unicode: "\uF4EA",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconR(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "R",
        unicode: "\uF4EB",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconFontColorA(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontColorA",
        unicode: "\uF4EC",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconFontColorSwatch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FontColorSwatch",
        unicode: "\uF4ED",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconLightWeight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LightWeight",
        unicode: "\uF4EE",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconNormalWeight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NormalWeight",
        unicode: "\uF4EF",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconSemiboldWeight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SemiboldWeight",
        unicode: "\uF4F0",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconGroupObject(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GroupObject",
        unicode: "\uF4F1",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconUngroupObject(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UngroupObject",
        unicode: "\uF4F2",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignHorizontalLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignHorizontalLeft",
        unicode: "\uF4F3",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignHorizontalCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignHorizontalCenter",
        unicode: "\uF4F4",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignHorizontalRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignHorizontalRight",
        unicode: "\uF4F5",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignVerticalTop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignVerticalTop",
        unicode: "\uF4F6",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignVerticalCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignVerticalCenter",
        unicode: "\uF4F7",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconAlignVerticalBottom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignVerticalBottom",
        unicode: "\uF4F8",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconHorizontalDistributeCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HorizontalDistributeCenter",
        unicode: "\uF4F9",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconVerticalDistributeCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VerticalDistributeCenter",
        unicode: "\uF4FA",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconEllipse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Ellipse",
        unicode: "\uF4FB",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconLine(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Line",
        unicode: "\uF4FC",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconOctagon(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Octagon",
        unicode: "\uF4FD",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconHexagon(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Hexagon",
        unicode: "\uF4FE",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconPentagon(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Pentagon",
        unicode: "\uF4FF",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconRightTriangle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RightTriangle",
        unicode: "\uF500",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconHalfCircle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HalfCircle",
        unicode: "\uF501",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconQuarterCircle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "QuarterCircle",
        unicode: "\uF502",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconThreeQuarterCircle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ThreeQuarterCircle",
        unicode: "\uF503",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIcon6PointStar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "6PointStar",
        unicode: "\uF504",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIcon12PointStar(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "12PointStar",
        unicode: "\uF505",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconArrangeBringToFront(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrangeBringToFront",
        unicode: "\uF506",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconArrangeSendToBack(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrangeSendToBack",
        unicode: "\uF507",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconArrangeSendBackward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrangeSendBackward",
        unicode: "\uF508",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconArrangeBringForward(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrangeBringForward",
        unicode: "\uF509",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBorderDash(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BorderDash",
        unicode: "\uF50A",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconBorderDot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BorderDot",
        unicode: "\uF50B",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconLineStyle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LineStyle",
        unicode: "\uF50C",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconLineThickness(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LineThickness",
        unicode: "\uF50D",
        bundle: "12-e6882c74"
      };
    }
  });
}
function uiIconWindowEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WindowEdit",
        unicode: "\uF50E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconHintText(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HintText",
        unicode: "\uF50F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconMediaAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MediaAdd",
        unicode: "\uF510",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAnchorLock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AnchorLock",
        unicode: "\uF511",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAutoHeight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AutoHeight",
        unicode: "\uF512",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconChartSeries(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChartSeries",
        unicode: "\uF513",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconChartXAngle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChartXAngle",
        unicode: "\uF514",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconChartYAngle(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ChartYAngle",
        unicode: "\uF515",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCombobox(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Combobox",
        unicode: "\uF516",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconLineSpacing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LineSpacing",
        unicode: "\uF517",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPadding(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Padding",
        unicode: "\uF518",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPaddingTop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PaddingTop",
        unicode: "\uF519",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPaddingBottom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PaddingBottom",
        unicode: "\uF51A",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPaddingLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PaddingLeft",
        unicode: "\uF51B",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPaddingRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PaddingRight",
        unicode: "\uF51C",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconNavigationFlipper(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NavigationFlipper",
        unicode: "\uF51D",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAlignJustify(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AlignJustify",
        unicode: "\uF51E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTextOverflow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TextOverflow",
        unicode: "\uF51F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconVisualsFolder(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisualsFolder",
        unicode: "\uF520",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconVisualsStore(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisualsStore",
        unicode: "\uF521",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPictureCenter(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PictureCenter",
        unicode: "\uF522",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPictureFill(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PictureFill",
        unicode: "\uF523",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPicturePosition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PicturePosition",
        unicode: "\uF524",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPictureStretch(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PictureStretch",
        unicode: "\uF525",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPictureTile(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PictureTile",
        unicode: "\uF526",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconSlider(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Slider",
        unicode: "\uF527",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconSliderHandleSize(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SliderHandleSize",
        unicode: "\uF528",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDefaultRatio(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DefaultRatio",
        unicode: "\uF529",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconNumberSequence(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "NumberSequence",
        unicode: "\uF52A",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconGUID(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "GUID",
        unicode: "\uF52B",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconReportAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReportAdd",
        unicode: "\uF52C",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDashboardAdd(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DashboardAdd",
        unicode: "\uF52D",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconMapPinSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MapPinSolid",
        unicode: "\uF52E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconWebPublish(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WebPublish",
        unicode: "\uF52F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPieSingleSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PieSingleSolid",
        unicode: "\uF530",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBlockedSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BlockedSolid",
        unicode: "\uF531",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDrillDown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DrillDown",
        unicode: "\uF532",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDrillDownSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DrillDownSolid",
        unicode: "\uF533",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDrillExpand(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DrillExpand",
        unicode: "\uF534",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDrillShow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DrillShow",
        unicode: "\uF535",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconOneDriveFolder16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OneDriveFolder16",
        unicode: "\uF53B",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconFunctionalManagerDashboard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FunctionalManagerDashboard",
        unicode: "\uF542",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBIDashboard(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BIDashboard",
        unicode: "\uF543",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCodeEdit(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CodeEdit",
        unicode: "\uF544",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconRenewalCurrent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RenewalCurrent",
        unicode: "\uF545",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconRenewalFuture(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RenewalFuture",
        unicode: "\uF546",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconSplitObject(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SplitObject",
        unicode: "\uF547",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBulkUpload(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BulkUpload",
        unicode: "\uF548",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDownloadDocument(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DownloadDocument",
        unicode: "\uF549",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconWaitlistConfirm(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WaitlistConfirm",
        unicode: "\uF550",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconWaitlistConfirmMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WaitlistConfirmMirrored",
        unicode: "\uF551",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconLaptopSecure(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LaptopSecure",
        unicode: "\uF552",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDragObject(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DragObject",
        unicode: "\uF553",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconEntryView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EntryView",
        unicode: "\uF554",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconEntryDecline(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "EntryDecline",
        unicode: "\uF555",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconContactCardSettings(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContactCardSettings",
        unicode: "\uF556",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconContactCardSettingsMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ContactCardSettingsMirrored",
        unicode: "\uF557",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCalendarSettings(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarSettings",
        unicode: "\uF558",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCalendarSettingsMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CalendarSettingsMirrored",
        unicode: "\uF559",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconHardDriveLock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HardDriveLock",
        unicode: "\uF55A",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconHardDriveUnlock(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "HardDriveUnlock",
        unicode: "\uF55B",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAccountManagement(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AccountManagement",
        unicode: "\uF55C",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTransitionPop(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TransitionPop",
        unicode: "\uF5B2",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTransitionPush(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TransitionPush",
        unicode: "\uF5B3",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTransitionEffect(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TransitionEffect",
        unicode: "\uF5B4",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconLookupEntities(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "LookupEntities",
        unicode: "\uF5B5",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconExploreData(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ExploreData",
        unicode: "\uF5B6",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAddBookmark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AddBookmark",
        unicode: "\uF5B7",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconSearchBookmark(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SearchBookmark",
        unicode: "\uF5B8",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDrillThrough(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DrillThrough",
        unicode: "\uF5B9",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconMasterDatabase(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MasterDatabase",
        unicode: "\uF5BA",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCertifiedDatabase(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CertifiedDatabase",
        unicode: "\uF5BB",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconMaximumValue(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MaximumValue",
        unicode: "\uF5BC",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconMinimumValue(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MinimumValue",
        unicode: "\uF5BD",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconVisualStudioIDELogo32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VisualStudioIDELogo32",
        unicode: "\uF5D0",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPasteAsText(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PasteAsText",
        unicode: "\uF5D5",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconPasteAsCode(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PasteAsCode",
        unicode: "\uF5D6",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBrowserTab(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BrowserTab",
        unicode: "\uF5D7",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBrowserTabScreenshot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BrowserTabScreenshot",
        unicode: "\uF5D8",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDesktopScreenshot(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DesktopScreenshot",
        unicode: "\uF5D9",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconFileYML(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "FileYML",
        unicode: "\uF5DA",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconClipboardSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ClipboardSolid",
        unicode: "\uF5DC",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconAnalyticsView(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "AnalyticsView",
        unicode: "\uF5F1",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconLeave(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Leave",
        unicode: "\uF627",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTrending12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Trending12",
        unicode: "\uF62D",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconBlocked12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Blocked12",
        unicode: "\uF62E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconWarning12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Warning12",
        unicode: "\uF62F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCheckedOutByOther12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckedOutByOther12",
        unicode: "\uF630",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCheckedOutByYou12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CheckedOutByYou12",
        unicode: "\uF631",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconCircleShapeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CircleShapeSolid",
        unicode: "\uF63C",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconSquareShapeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SquareShapeSolid",
        unicode: "\uF63D",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconTriangleShapeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TriangleShapeSolid",
        unicode: "\uF63E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDropShapeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DropShapeSolid",
        unicode: "\uF63F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconRectangleShapeSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "RectangleShapeSolid",
        unicode: "\uF640",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconInsertColumnsLeft(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertColumnsLeft",
        unicode: "\uF64A",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconInsertColumnsRight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertColumnsRight",
        unicode: "\uF64B",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconInsertRowsAbove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertRowsAbove",
        unicode: "\uF64C",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconInsertRowsBelow(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertRowsBelow",
        unicode: "\uF64D",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDeleteColumns(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeleteColumns",
        unicode: "\uF64E",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDeleteRows(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeleteRows",
        unicode: "\uF64F",
        bundle: "13-0980cd6d"
      };
    }
  });
}
function uiIconDeleteRowsMirrored(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeleteRowsMirrored",
        unicode: "\uF650",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconDeleteTable(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DeleteTable",
        unicode: "\uF651",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconVersionControlPush(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "VersionControlPush",
        unicode: "\uF664",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconWhiteBoardApp16(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WhiteBoardApp16",
        unicode: "\uF673",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconWhiteBoardApp32(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "WhiteBoardApp32",
        unicode: "\uF674",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconInsertSignatureLine(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "InsertSignatureLine",
        unicode: "\uF677",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconArrangeByFrom(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ArrangeByFrom",
        unicode: "\uF678",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconPhishing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Phishing",
        unicode: "\uF679",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconCreateMailRule(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "CreateMailRule",
        unicode: "\uF67A",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconPublishCourse(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "PublishCourse",
        unicode: "\uF699",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconDictionaryRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "DictionaryRemove",
        unicode: "\uF69A",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconUserRemove(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserRemove",
        unicode: "\uF69B",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconUserEvent(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserEvent",
        unicode: "\uF69C",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconEncryption(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Encryption",
        unicode: "\uF69D",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconD365TalentLearn(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "D365TalentLearn",
        unicode: "\uF6BB",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconD365TalentInsight(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "D365TalentInsight",
        unicode: "\uF6BC",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconD365TalentHRCore(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "D365TalentHRCore",
        unicode: "\uF6BD",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconBacklogList(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BacklogList",
        unicode: "\uF6BF",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconButtonControl(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ButtonControl",
        unicode: "\uF6C0",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTableGroup(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TableGroup",
        unicode: "\uF6D9",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconMountainClimbing(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MountainClimbing",
        unicode: "\uF6DB",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTagUnknown(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TagUnknown",
        unicode: "\uF6DF",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTagUnknownMirror(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TagUnknownMirror",
        unicode: "\uF6E0",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTagUnknown12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TagUnknown12",
        unicode: "\uF6E1",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTagUnknown12Mirror(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TagUnknown12Mirror",
        unicode: "\uF6E2",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconLink12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Link12",
        unicode: "\uF6E3",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconPresentation(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Presentation",
        unicode: "\uF6E4",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconPresentation12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Presentation12",
        unicode: "\uF6E5",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconLock12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "Lock12",
        unicode: "\uF6E6",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconBuildDefinition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BuildDefinition",
        unicode: "\uF6E9",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconReleaseDefinition(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "ReleaseDefinition",
        unicode: "\uF6EA",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconSaveTemplate(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "SaveTemplate",
        unicode: "\uF6EC",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconUserGauge(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "UserGauge",
        unicode: "\uF6ED",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconBlockedSiteSolid12(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "BlockedSiteSolid12",
        unicode: "\uF70A",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconTagSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "TagSolid",
        unicode: "\uF70E",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconOfficeChat(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeChat",
        unicode: "\uF70F",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconOfficeChatSolid(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "OfficeChatSolid",
        unicode: "\uF710",
        bundle: "14-eb4d1150"
      };
    }
  });
}
function uiIconMailSchedule(resolve) {
  resolve({
    extends: Icon,
    data: function data() {
      return {
        name: "MailSchedule",
        unicode: "\uF72E",
        bundle: "14-eb4d1150"
      };
    }
  });
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) { descriptor.writable = true; }
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps); }
    if (staticProps) { defineProperties(Constructor, staticProps); }
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce$1(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends$1({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var vuePopper_min = createCommonjsModule(function (module, exports) {
  !function (e, t) {
    module.exports = t(Popper);
  }(commonjsGlobal, function (e) {

    function t(e, t, o) {
      e && t && o && (document.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, o));
    }

    function o(e, t, o) {
      e && t && (document.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent("on" + t, o));
    }

    e = e && e.hasOwnProperty("default") ? e.default : e;
    var n = {
      props: {
        tagName: {
          type: String,
          default: "span"
        },
        trigger: {
          type: String,
          default: "hover",
          validator: function validator(e) {
            return ["click", "hover"].indexOf(e) > -1;
          }
        },
        delayOnMouseOver: {
          type: Number,
          default: 10
        },
        delayOnMouseOut: {
          type: Number,
          default: 10
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        content: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        boundariesSelector: String,
        reference: {},
        forceShow: {
          type: Boolean,
          default: !1
        },
        dataValue: {
          default: null
        },
        appendToBody: {
          type: Boolean,
          default: !1
        },
        visibleArrow: {
          type: Boolean,
          default: !0
        },
        transition: {
          type: String,
          default: ""
        },
        stopPropagation: {
          type: Boolean,
          default: !1
        },
        preventDefault: {
          type: Boolean,
          default: !1
        },
        options: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      data: function data() {
        return {
          referenceElm: null,
          popperJS: null,
          showPopper: !1,
          currentPlacement: "",
          popperOptions: {
            placement: "bottom",
            computeStyle: {
              gpuAcceleration: !1
            }
          }
        };
      },
      watch: {
        showPopper: function showPopper(e) {
          e ? (this.$emit("show", this), this.popperJS && this.popperJS.enableEventListeners(), this.updatePopper()) : (this.popperJS && this.popperJS.disableEventListeners(), this.$emit("hide", this));
        },
        forceShow: {
          handler: function handler(e) {
            this[e ? "doShow" : "doClose"]();
          },
          immediate: !0
        },
        disabled: function disabled(e) {
          e && (this.showPopper = !1);
        }
      },
      created: function created() {
        this.appendedArrow = !1, this.appendedToBody = !1, this.popperOptions = _extends(this.popperOptions, this.options);
      },
      mounted: function mounted() {
        switch (this.referenceElm = this.reference || this.$slots.reference[0].elm, this.popper = this.$slots.default[0].elm, this.trigger) {
          case "click":
            t(this.referenceElm, "click", this.doToggle), t(document, "click", this.handleDocumentClick);
            break;

          case "hover":
            t(this.referenceElm, "mouseover", this.onMouseOver), t(this.referenceElm, "focus", this.onMouseOver), t(this.popper, "mouseover", this.onMouseOver), t(this.popper, "focus", this.onMouseOver), t(this.referenceElm, "mouseout", this.onMouseOut), t(this.referenceElm, "blur", this.onMouseOut), t(this.popper, "mouseout", this.onMouseOut), t(this.popper, "blur", this.onMouseOut);
        }
      },
      methods: {
        doToggle: function doToggle(e) {
          this.stopPropagation && e.stopPropagation(), this.preventDefault && e.preventDefault(), this.forceShow || (this.showPopper = !this.showPopper);
        },
        doShow: function doShow() {
          this.showPopper = !0;
        },
        doClose: function doClose() {
          this.showPopper = !1;
        },
        doDestroy: function doDestroy() {
          this.showPopper || (this.popperJS && (this.popperJS.destroy(), this.popperJS = null), this.appendedToBody && (this.appendedToBody = !1, document.body.removeChild(this.popper.parentElement)));
        },
        createPopper: function createPopper() {
          var t = this;
          this.$nextTick(function () {
            if (t.visibleArrow && t.appendArrow(t.popper), t.appendToBody && !t.appendedToBody && (t.appendedToBody = !0, document.body.appendChild(t.popper.parentElement)), t.popperJS && t.popperJS.destroy && t.popperJS.destroy(), t.boundariesSelector) {
              var o = document.querySelector(t.boundariesSelector);
              o && (t.popperOptions.modifiers = _extends({}, t.popperOptions.modifiers), t.popperOptions.modifiers.preventOverflow = _extends({}, t.popperOptions.modifiers.preventOverflow), t.popperOptions.modifiers.preventOverflow.boundariesElement = o);
            }

            t.popperOptions.onCreate = function () {
              t.$emit("created", t), t.$nextTick(t.updatePopper);
            }, t.popperJS = new e(t.referenceElm, t.popper, t.popperOptions);
          });
        },
        destroyPopper: function destroyPopper() {
          o(this.referenceElm, "click", this.doToggle), o(this.referenceElm, "mouseup", this.doClose), o(this.referenceElm, "mousedown", this.doShow), o(this.referenceElm, "focus", this.doShow), o(this.referenceElm, "blur", this.doClose), o(this.referenceElm, "mouseout", this.onMouseOut), o(this.referenceElm, "mouseover", this.onMouseOver), o(document, "click", this.handleDocumentClick), this.showPopper = !1, this.doDestroy();
        },
        appendArrow: function appendArrow(e) {
          if (!this.appendedArrow) {
            this.appendedArrow = !0;
            var t = document.createElement("div");
            t.setAttribute("x-arrow", ""), t.className = "popper__arrow", e.appendChild(t);
          }
        },
        updatePopper: function updatePopper() {
          this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
        },
        onMouseOver: function onMouseOver() {
          var e = this;
          clearTimeout(this._timer), this._timer = setTimeout(function () {
            e.showPopper = !0;
          }, this.delayOnMouseOver);
        },
        onMouseOut: function onMouseOut() {
          var e = this;
          clearTimeout(this._timer), this._timer = setTimeout(function () {
            e.showPopper = !1;
          }, this.delayOnMouseOut);
        },
        handleDocumentClick: function handleDocumentClick(e) {
          this.$el && this.referenceElm && !this.elementContains(this.$el, e.target) && !this.elementContains(this.referenceElm, e.target) && this.popper && !this.elementContains(this.popper, e.target) && (this.$emit("documentClick", this), this.forceShow || (this.showPopper = !1));
        },
        elementContains: function elementContains(e, t) {
          return "function" == typeof e.contains && e.contains(t);
        }
      },
      destroyed: function destroyed() {
        this.destroyPopper();
      }
    };
    var r = n;
    n.__file = "popper.js.vue";
    return function (e, t, o, n, r, s, i, p, a, d) {
      "function" == typeof i && (a = p, p = i, i = !1);
      var c = "function" == typeof o ? o.options : o;
      var u;
      if (e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, r && (c.functional = !0)), n && (c._scopeId = n), s ? (u = function u(e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, a(e)), e && e._registeredComponents && e._registeredComponents.add(s);
      }, c._ssrRegister = u) : t && (u = i ? function () {
        t.call(this, d(this.$root.$options.shadowRoot));
      } : function (e) {
        t.call(this, p(e));
      }), u) { if (c.functional) {
        var _e = c.render;

        c.render = function (t, o) {
          return u.call(o), _e(t, o);
        };
      } else {
        var _e2 = c.beforeCreate;
        c.beforeCreate = _e2 ? [].concat(_e2, u) : [u];
      } }
      return o;
    }({
      render: function render() {
        var e = this,
            t = e.$createElement,
            o = e._self._c || t;
        return o(e.tagName, {
          tag: "component"
        }, [o("transition", {
          attrs: {
            name: e.transition,
            "enter-active-class": e.enterActiveClass,
            "leave-active-class": e.leaveActiveClass
          },
          on: {
            "after-leave": e.doDestroy
          }
        }, [o("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.disabled && e.showPopper,
            expression: "!disabled && showPopper"
          }],
          ref: "popper"
        }, [e._t("default", [e._v(e._s(e.content))])], 2)]), e._v(" "), e._t("reference")], 2);
      },
      staticRenderFns: []
    }, void 0, r, void 0, !1, void 0, void 0, void 0);
  });
});

var dateUtils = {
    compareDates: function compareDates (date1, date2) {
        var d1 = new Date(date1.getTime());
        var d2 = new Date(date2.getTime());
        d1.setHours(0, 0, 0, 0);
        d2.setHours(0, 0, 0, 0);
        return d1.getTime() === d2.getTime()
    },  
    daysInMonth: function daysInMonth (year, month) {
        return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
    },
    formatDate: function formatDate (date, localeObj) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var str = localeObj.format
        .replace(/dd/, ('0' + day).slice(-2))
        .replace(/d/, day)
        .replace(/yyyy/, year)
        .replace(/yy/, String(year).slice(2))
        .replace(/MMMM/, localeObj.months[date.getMonth()])
        .replace(/MMMM/, localeObj.short[date.getMonth()])
        .replace(/MM/, ('0' + month).slice(-2))
        .replace(/M(?!a|ä|e)/, month);
        // .replace(/su/, this.getNthSuffix(this.getDate(date)))
        // .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days))
        return str
    }
};

var locale = {
    "da" : {
        goToToday : "Gå til idag",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","O","T","F","L","S"],
        months : ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        short : ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    },
    "de" : {
        goToToday : "gehe heute hin",
        format : "dd.MM.yyyy",
        firstDay : 1,
        days : ["M","D","M","D","F","S","S"],
        months : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        short : ['Jan', 'Febr', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez']
    },
    "es":{
        goToToday : "ir a hoy",
        format : "dd/MM/yyyy", 
        firstDay : 1,
        days : ["L","M","M","J","V","S","D"],
        months : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        short : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    "en-uk" : {
        goToToday : "Go to today",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","W","T","F","S","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "en-gb" : {
        goToToday : "Go to today",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["M","T","W","T","F","S","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "en-us" : {
        goToToday : "Go to today",
        format : "M/d/yyyy",
        firstDay : 0,
        days : ["S", "M","T","W","T","F","S"],
        months : ["January", "February", "March", "April", "May", "June", "July","August", "September","October", "November","December"],
        short : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    "fi":{
        goToToday : "mene tänään",
        format : "M/d/yyyy", 
        firstDay : 1,
        days : ["M", "T","K","T","P","L","S"],
        months : ["Tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
        short : ["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"]
    },
    "fr":{
        goToToday : "Aller à aujourd'hui",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["L", "M","M","J","V","S","D"],
        months : ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        short : ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    },
    "it":{
        goToToday : "Vai a oggi",
        format : "dd/MM/yyyy",
        firstDay : 1,
        days : ["L", "M","M","G","V","S","D"],
        months : ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
        short : ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
    },
    "nl":{
        goToToday : "Ga naar vandaag",
        format : "dd-MM-yyyy",
        firstDay : 1,
        days : ["M", "D","W","D","V","Z","Z"],
        months : ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        short : ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
    },
    "pl":{
        goToToday : "Idź do dzisiaj",
        format : "dd.MM.yyyy",
        firstDay : 1,
        days : ["P","W","Ś","C","P","S","N"],
        months : ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
        short : ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru']
    }
};
var uiDatePicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uiDatePicker"},[_c('popper',{ref:"popper",attrs:{"trigger":"click","options":_vm.popperOptions}},[_c('div',{staticClass:"popper foldout"},[_c('div',{staticClass:"dayPicker"},[_c('div',{staticClass:"header"},[_c('span',{staticClass:"current"},[_vm._v(_vm._s(_vm.currentMonth))]),_vm._v(" "),_c('span',{staticClass:"navigate"},[_c('span',{staticClass:"up",on:{"click":function($event){_vm.monthUp();}}},[_c('uiIconUp')],1),_vm._v(" "),_c('span',{staticClass:"down",on:{"click":function($event){_vm.monthDown();}}},[_c('uiIconDown')],1)])]),_vm._v(" "),_c('div',{staticClass:"days"},_vm._l((_vm.daysOfWeek),function(day,index){return _c('span',{key:index},[_vm._v(_vm._s(day))])}),0),_vm._v(" "),_c('div',{staticClass:"days"},[(_vm.blankDaysStart > 0)?_vm._l((_vm.blankDaysStart),function(d){return _c('span',{key:d.timestamp})}):_vm._e(),_vm._v(" "),_vm._l((_vm.days),function(day){return _c('span',{key:day.timestamp,class:_vm.getDayClasses(day),on:{"click":function($event){_vm.selectDate(day);}}},[_vm._v(_vm._s(day.date))])}),_vm._v(" "),(_vm.blankDaysEnd > 0)?_vm._l((_vm.blankDaysEnd),function(d){return _c('span',{key:d.timestamp})}):_vm._e()],2)]),_vm._v(" "),(!_vm.showYear)?_c('div',{staticClass:"monthPicker"},[_c('div',{staticClass:"header"},[_c('span',{staticClass:"current pointer",on:{"click":function($event){_vm.showYear=true;}}},[_vm._v(_vm._s(_vm.year))]),_vm._v(" "),_c('span',{staticClass:"navigate"},[_c('span',{staticClass:"up",on:{"click":function($event){_vm.year++;}}},[_c('uiIconUp')],1),_vm._v(" "),_c('span',{staticClass:"down",on:{"click":function($event){_vm.year--;}}},[_c('uiIconDown')],1)])]),_vm._v(" "),_c('div',{staticClass:"months"},_vm._l((_vm.months),function(month,index){return _c('span',{key:index,on:{"click":function($event){_vm.selectMonth(index);}}},[_vm._v(" "+_vm._s(month)+" ")])}),0),_vm._v(" "),_c('div',{staticClass:"goToToday"},[_c('span',{on:{"click":function($event){_vm.goToToday();}}},[_vm._v(_vm._s(_vm.localeObj.goToToday))])])]):_vm._e(),_vm._v(" "),(_vm.showYear)?_c('div',{staticClass:"yearPicker"},[_c('div',{staticClass:"header"},[_c('span',{staticClass:"current pointer",on:{"click":function($event){_vm.showYear=false;}}},[_vm._v(_vm._s(_vm.yearStart)+" - "+_vm._s(_vm.yearEnd-1))]),_vm._v(" "),_c('span',{staticClass:"navigate"},[_c('span',{staticClass:"up",on:{"click":function($event){_vm.yearStart+=12;}}},[_c('uiIconUp')],1),_vm._v(" "),_c('span',{staticClass:"down",on:{"click":function($event){_vm.yearStart-=12;}}},[_c('uiIconDown')],1)])]),_vm._v(" "),_c('div',{staticClass:"years"},_vm._l((_vm.years),function(year){return _c('span',{key:year,on:{"click":function($event){_vm.selectYear(year);}}},[_vm._v(" "+_vm._s(year)+" ")])}),0),_vm._v(" "),_c('div',{staticClass:"goToToday"},[_c('span',{on:{"click":function($event){_vm.goToToday();}}},[_vm._v(_vm._s(_vm.localeObj.goToToday))])])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"inputGroup",attrs:{"slot":"reference"},slot:"reference"},[_c('div',{staticClass:"inputContainer"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputVal),expression:"inputVal"}],attrs:{"type":"text"},domProps:{"value":(_vm.inputVal)},on:{"blur":_vm.parseTypedDate,"input":function($event){if($event.target.composing){ return; }_vm.inputVal=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"iconContainer"},[_c('uiIconCalendar')],1)])])],1)},staticRenderFns: [],_scopeId: 'data-v-d4c0f6c8',
    beforeCreate: function beforeCreate(){ loadStyles("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .popper[data-v-d4c0f6c8] { width: auto; background-color: #fafafa; color: #212121; text-align: center; padding: 2px; display: inline-block; border-radius: 3px; position: absolute; font-size: 14px; font-weight: normal; border: 1px #ebebeb solid; z-index: 200000; -moz-box-shadow: #3a3a3a 0 0 6px 0; -webkit-box-shadow: #3a3a3a 0 0 6px 0; box-shadow: #3a3a3a 0 0 6px 0; } .popper .popper__arrow[data-v-d4c0f6c8] { width: 0; height: 0; border-style: solid; position: absolute; margin: 5px; } .popper[x-placement^=\"top\"][data-v-d4c0f6c8] { margin-bottom: 5px; } .popper[x-placement^=\"top\"] .popper__arrow[data-v-d4c0f6c8] { border-width: 5px 5px 0 5px; border-color: #fafafa transparent transparent transparent; bottom: -5px; left: calc(50% - 5px); margin-top: 0; margin-bottom: 0; } .popper[x-placement^=\"bottom\"][data-v-d4c0f6c8] { margin-top: 5px; } .popper[x-placement^=\"bottom\"] .popper__arrow[data-v-d4c0f6c8] { border-width: 0 5px 5px 5px; border-color: transparent transparent #fafafa transparent; top: -5px; left: calc(50% - 5px); margin-top: 0; margin-bottom: 0; } .popper[x-placement^=\"right\"][data-v-d4c0f6c8] { margin-left: 5px; } .popper[x-placement^=\"right\"] .popper__arrow[data-v-d4c0f6c8] { border-width: 5px 5px 5px 0; border-color: transparent #fafafa transparent transparent; left: -5px; top: calc(50% - 5px); margin-left: 0; margin-right: 0; } .popper[x-placement^=\"left\"][data-v-d4c0f6c8] { margin-right: 5px; } .popper[x-placement^=\"left\"] .popper__arrow[data-v-d4c0f6c8] { border-width: 5px 0 5px 5px; border-color: transparent transparent transparent #fafafa; right: -5px; top: calc(50% - 5px); margin-left: 0; margin-right: 0; } .uiDatePicker[data-v-d4c0f6c8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; } .foldout[data-v-d4c0f6c8] { background-color: white; width: 420px; box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75); user-select: none; } .foldout > div[data-v-d4c0f6c8] { display: table-cell; vertical-align: top; } .header[data-v-d4c0f6c8] { padding: 7px; display: flex; justify-content: space-between; } .header .current[data-v-d4c0f6c8] { font-weight: bold; } .header .navigate[data-v-d4c0f6c8] { cursor: pointer; } .header .navigate .up[data-v-d4c0f6c8] { padding: 6px 8px; } .header .navigate .up[data-v-d4c0f6c8]:hover { background-color: lightgray; } .header .navigate .down[data-v-d4c0f6c8] { padding: 6px 8px; } .header .navigate .down[data-v-d4c0f6c8]:hover { background-color: lightgray; } .yearPicker[data-v-d4c0f6c8], .monthPicker[data-v-d4c0f6c8] { width: 210px; padding: 5px; } .yearPicker .years[data-v-d4c0f6c8], .yearPicker .months[data-v-d4c0f6c8], .monthPicker .years[data-v-d4c0f6c8], .monthPicker .months[data-v-d4c0f6c8] { width: 200px; display: flex; flex-wrap: wrap; justify-content: space-between; } .yearPicker .years span[data-v-d4c0f6c8], .yearPicker .months span[data-v-d4c0f6c8], .monthPicker .years span[data-v-d4c0f6c8], .monthPicker .months span[data-v-d4c0f6c8] { flex-basis: 40px; padding: 12px 2px; text-align: center; margin-bottom: 12px; cursor: pointer; } .yearPicker .years span[data-v-d4c0f6c8]:hover, .yearPicker .months span[data-v-d4c0f6c8]:hover, .monthPicker .years span[data-v-d4c0f6c8]:hover, .monthPicker .months span[data-v-d4c0f6c8]:hover { background-color: lightgray; } .yearPicker .goToToday[data-v-d4c0f6c8], .monthPicker .goToToday[data-v-d4c0f6c8] { text-align: right; padding: 5px; } .yearPicker .goToToday span[data-v-d4c0f6c8], .monthPicker .goToToday span[data-v-d4c0f6c8] { cursor: pointer; } .dayPicker[data-v-d4c0f6c8] { width: 210px; padding: 5px; border-right: solid 1px #edebe9; } .dayPicker .days[data-v-d4c0f6c8] { width: 200px; display: flex; flex-wrap: wrap; justify-content: space-between; } .dayPicker .days span[data-v-d4c0f6c8] { flex-basis: 20px; padding: 4px; text-align: center; } .dayPicker .days span.selectable[data-v-d4c0f6c8] { cursor: pointer; } .dayPicker .days span.selectable[data-v-d4c0f6c8]:hover { background-color: lightgray; } .dayPicker .days span.today[data-v-d4c0f6c8] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; } .dayPicker .days span.selected[data-v-d4c0f6c8] { background-color: \"[theme:themeLight, default: #c7e0f4]\"; } .pointer[data-v-d4c0f6c8] { cursor: pointer; } .inputGroup[data-v-d4c0f6c8] { display: inline-block; padding-right: 8px; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-radius: 2px; } .inputGroup .inputContainer[data-v-d4c0f6c8] { display: table-cell; width: 100%; } .inputGroup .inputContainer input[data-v-d4c0f6c8] { height: 30px; width: 100%; box-sizing: border-box; padding: 0 8px; border: none; font-weight: 300; font-size: 14px; color: \"[theme:neutralPrimary, default: #333333]\"; } .inputGroup .inputContainer input[data-v-d4c0f6c8]:focus { outline: none; } .inputGroup .iconContainer[data-v-d4c0f6c8] { display: table-cell; } .inputGroup .iconContainer .ms-Icon[data-v-d4c0f6c8] { vertical-align: -4px; font-size: 18px; } @media screen and (max-width: 450px) { .yearPicker[data-v-d4c0f6c8], .monthPicker[data-v-d4c0f6c8] { display: none !important; } .dayPicker[data-v-d4c0f6c8] { border-right: none !important; } .foldout[data-v-d4c0f6c8] { width: 210px; } } ");}, 
    components:{
        uiIconUp: uiIconUp, 
        uiIconDown: uiIconDown,
        uiIconCalendar: uiIconCalendar,
        Popper: vuePopper_min
    },
    props:{
        value:{
            type:Date
        },
        locale:{
            type:String,
            default:"en-us"
        },
        placement:{
            type:String, 
            default: "top-end"
        }
    },
    watch:{
        value:{
            handler: function handler(newVal){
                // console.log("value watch", newVal);
                if(newVal){
                    this.inputVal = dateUtils.formatDate(newVal, this.localeObj);
                    this.pickerDate = newVal;
                }
                else{
                    this.inputVal = "";
                    this.pickerDate = new Date();
                }                
            },
            immediate:true
        }
    },
    computed:{
        popperOptions: function popperOptions(){
            return {
                placement:"bottom-start",
                modifiers:{
                    preventOverflow: {enabled: false},
                    offset: {enabled: false},
                    keepTogether: {enabled: false},
                    arrow: {enabled: false},
                    flip: {enabled: false},
                    hide: {enabled: false},
                    computeStyle: {
                        enabled: false,
                    },
                    applyStyle: {
                        enabled:true,
                        fn: function fn(data, options){
                            var input = data.instance.reference.getClientRects()[0];
                            var popper = data.instance.popper.getClientRects()[0];
                            var windowWidth = document.documentElement.clientWidth;
                            var windowHeight = document.documentElement.clientHeight;

                            // below of above the input
                            var top = 0;
                            if(input.height + input.y + popper.height < windowHeight)
                                { top = input.height; } // yay room to place it beneath
                            else 
                                { top = 0-popper.height; } //crap, place it above

                            // left or rightside of the input
                            var right = 0;
                            
                            if(input.width + input.x - popper.width > 0)
                                { right = 0-popper.width + input.width; }

                            // if it still overflows the right side of the screen, move it left, until it dosnt
                            if(right == 0 && input.x + popper.width > windowWidth)
                            {
                                right = 0-(input.x + popper.width-windowWidth);
                            }

                            // apply style
                            data.instance.popper.style.transform = "translate(" + right + "px, " + top + "px)";
                        }
                    }
                }
            }
        },
        localeObj: function localeObj(){
            if(locale[this.locale.toLowerCase()])
                { return locale[this.locale.toLowerCase()]; }
            if(locale[this.locale.split("-")[0].toLowerCase()])
                { return locale[this.locale.split("-")[0].toLowerCase()]; }
            return locale["en-us"];
        },
        years: function years(){
            var rtn=[];
            for(var i=this.yearStart;i<this.yearEnd;i++)
                { rtn.push(i); }
            return rtn;
        },
        yearStart:{
            get: function get(){return this.yearEnd-12;},
            set: function set(val){this.yearEnd = val+12;}
        },
        currentMonth: function currentMonth(){
            return this.localeObj.months[this.pickerDate.getMonth()] + " " + this.pickerDate.getFullYear();
            // return ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'][this.pickerDate.getMonth()]
            // + " " + this.pickerDate.getFullYear();// TODO
        },
        months: function months(){
            return this.localeObj.short;
            // return ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
        },
        daysOfWeek: function daysOfWeek(){
            return this.localeObj.days;
            // ["M","T","O","T","F","L","S"]
        },
        blankDaysStart: function blankDaysStart () {
            var dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes());
            // if (this.mondayFirst) {
            if (this.localeObj.firstDay == 1) {
                return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6
            }
            return dObj.getDay();
        },
        blankDaysEnd: function blankDaysEnd(){
            return 7-((this.blankDaysStart+this.days.length)%7);
        },
        days: function days () {
            var d = this.pickerDate;
            var days = [];
            var dObj = new Date(this.pickerDate.getFullYear(), this.pickerDate.getMonth(), 1, this.pickerDate.getHours(), this.pickerDate.getMinutes());
            var daysInMonth = dateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth());

            for (var i = 0; i < daysInMonth; i++) {
                days.push({
                    date: dObj.getDate(),
                    timestamp: dObj.getTime(),
                    isSelected: this.value && dateUtils.compareDates(dObj, this.value),
                    // isDisabled: this.isDisabledDate(dObj),
                    // isHighlighted: this.isHighlightedDate(dObj),
                    // isHighlightStart: this.isHighlightStart(dObj),
                    // isHighlightEnd: this.isHighlightEnd(dObj),
                    isToday: dateUtils.compareDates(dObj, new Date()),
                    isWeekend: dObj.getDay() === 0 || dObj.getDay() === 6,
                    isSaturday: dObj.getDay() === 6,
                    isSunday: dObj.getDay() === 0
                });
                dObj.setDate(dObj.getDate() + 1);
            }
            return days
        },
    },
    methods:{
        parseTypedDate: function parseTypedDate(){
            if(!this.inputVal || this.inputVal == "")
            {
                this.$emit("input", "");
                return;
            }
            var parsed = Moment(this.inputVal, this.localeObj.format.toUpperCase());
            if(parsed.isValid()){
                // this.pickerDate = parsed.toDate();
                if(!dateUtils.compareDates(parsed.toDate(), this.value))
                    { this.$emit("input", parsed.toDate()); }
            }
            // console.log("parsed", parsed);
        },
        selectDate: function selectDate(val){
            var this$1 = this;

            this.$emit("input", new Date(val.timestamp));
            this.inputVal = dateUtils.formatDate(new Date(val.timestamp), this.localeObj);
            // this.showPicker = false;
            this.$refs.popper.doClose();
            this.$nextTick(function (){
                this$1.$refs.popper.doClose();
            });
            // console.log("inputval", this.inputVal);
        },
        selectYear: function selectYear(year){
            this.year = year;
            this.showYear = false;
        },
        selectMonth: function selectMonth(index){
            this.pickerDate.setMonth(index);
            this.pickerDate.setFullYear(this.year);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        getDayClasses: function getDayClasses(day){
            return {
                'selectable': true,
                'selected': day.isSelected,
                // 'disabled': day.isDisabled,
                // 'highlighted': day.isHighlighted,
                'today': day.isToday,
                'weekend': day.isWeekend,
                'sat': day.isSaturday,
                'sun': day.isSunday,
                // 'highlight-start': day.isHighlightStart,
                // 'highlight-end': day.isHighlightEnd
            }
        },
        // inputBlurred(){
        //     setTimeout(()=>{
        //         if(!this.cancelBlur)
        //             this.showPicker = false;
        //         this.cancelBlur = false;
        //     },500);            
        // },
        monthUp: function monthUp(){
            this.pickerDate.setMonth(this.pickerDate.getMonth()+1);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        monthDown: function monthDown(){
            this.pickerDate.setMonth(this.pickerDate.getMonth()-1);
            this.pickerDate = new Date(this.pickerDate); // fire off change detection
        },
        goToToday: function goToToday(){
            this.year = new Date().getFullYear();
            this.pickerDate = new Date();
        }
    },
    data: function data(){
        return{
            // showPicker : true, // TODO
            // cancelBlur : false,
            inputVal : "",
            showYear : false, 
            pickerDate : this.value || new Date(),
            year : (this.value || new Date()).getFullYear(),
            yearEnd : new Date().getFullYear() - new Date().getFullYear() % 12 + 12
        }
    }
}

var uiTypeAhead = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uiTypeAhead"},[_c('popper',{ref:"popper",attrs:{"trigger":"click","options":_vm.popperOptions}},[_c('div',{staticClass:"popper foldout"},[_c('div',{staticClass:"optionlist"},_vm._l((_vm.options),function(option){return _c('div',{key:option.id,staticClass:"option",class:{ 'selectedOption' : _vm.selected != null && option.id == _vm.selected.id },on:{"click":function($event){_vm.selectOption(option);},"mousedown":function($event){$event.preventDefault();}}},[_vm._v(" "+_vm._s(option[_vm.display])+" ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"inputGroup",attrs:{"slot":"reference"},slot:"reference"},[_c('div',{staticClass:"inputContainer"},[_c('uiTextfield',{attrs:{"label":_vm.label,"placeholder":_vm.placeholderText},on:{"blur":function($event){_vm.inputBlurred();}},model:{value:(_vm.userInput),callback:function ($$v) {_vm.userInput=$$v;},expression:"userInput"}}),_vm._v(" "),_c('uiIconChevronDownMed',{staticClass:"chevronIcon"})],1)])])],1)},staticRenderFns: [],_scopeId: 'data-v-6aabe933',
    beforeCreate: function beforeCreate(){ loadStyles("/* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .popper[data-v-6aabe933] { width: auto; background-color: #fafafa; color: #212121; text-align: center; padding: 2px; display: inline-block; border-radius: 3px; position: absolute; font-size: 14px; font-weight: normal; border: 1px #ebebeb solid; z-index: 200000; -moz-box-shadow: #3a3a3a 0 0 6px 0; -webkit-box-shadow: #3a3a3a 0 0 6px 0; box-shadow: #3a3a3a 0 0 6px 0; } .popper .popper__arrow[data-v-6aabe933] { width: 0; height: 0; border-style: solid; position: absolute; margin: 5px; } .popper[x-placement^=\"top\"][data-v-6aabe933] { margin-bottom: 5px; } .popper[x-placement^=\"top\"] .popper__arrow[data-v-6aabe933] { border-width: 5px 5px 0 5px; border-color: #fafafa transparent transparent transparent; bottom: -5px; left: calc(50% - 5px); margin-top: 0; margin-bottom: 0; } .popper[x-placement^=\"bottom\"][data-v-6aabe933] { margin-top: 5px; } .popper[x-placement^=\"bottom\"] .popper__arrow[data-v-6aabe933] { border-width: 0 5px 5px 5px; border-color: transparent transparent #fafafa transparent; top: -5px; left: calc(50% - 5px); margin-top: 0; margin-bottom: 0; } .popper[x-placement^=\"right\"][data-v-6aabe933] { margin-left: 5px; } .popper[x-placement^=\"right\"] .popper__arrow[data-v-6aabe933] { border-width: 5px 5px 5px 0; border-color: transparent #fafafa transparent transparent; left: -5px; top: calc(50% - 5px); margin-left: 0; margin-right: 0; } .popper[x-placement^=\"left\"][data-v-6aabe933] { margin-right: 5px; } .popper[x-placement^=\"left\"] .popper__arrow[data-v-6aabe933] { border-width: 5px 0 5px 5px; border-color: transparent transparent transparent #fafafa; right: -5px; top: calc(50% - 5px); margin-left: 0; margin-right: 0; } .inputGroup[data-v-6aabe933] { position: relative; } .inputGroup .chevronIcon[data-v-6aabe933] { color: \"[theme:neutralDark, default: #212121]\"; font-size: 12px; position: absolute; right: 13px; bottom: 7px; pointer-events: none; } .inputGroup[data-v-6aabe933] .ms-TextField-field { padding-right: 32px; } .foldout[data-v-6aabe933] { background-color: white; margin: 0px !important; padding: 0px; box-shadow: 1px 1px 5px 0px \"[theme:neutralQuaternaryAlt, default: #dadada]\"; border-radius: 2px; } .optionlist[data-v-6aabe933] { max-height: 200px; overflow: auto; } .option[data-v-6aabe933] { height: 19px; font-weight: 400; padding: 7px 10px 7px 10px; text-align: left; white-space: nowrap; cursor: pointer; color: \"[theme:neutralPrimary, default: #333333]\"; } .option[data-v-6aabe933]:hover { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .selectedOption[data-v-6aabe933] { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:themeLight, default: #c7e0f4]\"; } .selectedOption[data-v-6aabe933]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; } ");}, 
    components:{
        uiTextfield: uiTextfield, 
        uiIconChevronDownMed: uiIconChevronDownMed,
        Popper: vuePopper_min
    },
    props: [
        'options',          //Array of available options to display in dropdown
        'display',          //String that decides what attribute on the options is used for display and typeahead
        'placeholderText',  //String to use as placeholder text
        'label',            //Label
        'autoselectOff' ],
    data: function() {
        return {
            selected: null,
            userInput: '',
        }
    },
    methods: {
        selectOption: function selectOption(option) {
            this.selected = option;
            this.userInput = option[this.display];
        },
        //Autoselects an option if userinput matches display attribute
        autoselectMatch: debounce(function() {
            var this$1 = this;

            if(this.autoselectOff == true) { return; }

            this.options.forEach(function (option) {
                //Regex for exact match but case insensitive
                var regex = new RegExp('^' + this$1.userInput + '$', 'i');
                if (regex.test(option[this$1.display])) {
                    this$1.selectOption(option);
                }
            });

        }, 500),
        setUserInput: function setUserInput(newInput) {
            this.userInput = newInput;
        },
        inputBlurred: function inputBlurred() {
            this.$refs.popper.doClose();
        },
    },
    computed: {
        popperOptions: function popperOptions(){
            return {
                placement: "bottom-end",
                positionFixed: true,
                modifiers: { 
                    preventOverflow: { enabled: true },
                    flip: { enabled: true },
                    autoSizing: {
                        enabled: true,
                        fn: function autoSizing(data) {
                            data.styles.width = data.offsets.reference.width - 2;
                            return data;
                        },
                        order: 840,
                    },
                }
            }
        },
    },
    watch: {
        "userInput": debounce(function (newVal) {
            if(this.selected == null || this.selected[this.display] != newVal) {
                this.$refs.popper.doShow();
            }            this.autoselectMatch();
            this.$emit('inputChanged', newVal);
        }, 500),
        "selected": function (newVal) {
            this.$refs.popper.doClose();
            this.$emit('optionSelected', newVal);
        },
    },
}

export { uiButton, uiCallout, uiCheckbox, uiChoiceField, uiChoiceFieldGroup, uiContextualMenu, uiContextualMenuItem, uiCommandBar, uiCommandButton, uiDialog, uiDropdown, uiDropdownItem, uiLabel, uiLink, uiList, uiListActions, uiListActionItem, uiListItem, uiMessagebar as uiMessageBar, uiMessageBanner, uiOverlay, uiPanel, uiPersona, uiPivot, uiPivotItem, uiProgressIndicator, uiSearchbox as uiSearchBox, uiSpinner, uiTextfield, uiToggle, uiDynamicIcon, uiTimePicker, uiDatePicker, uiTypeAhead, uiIconGlobalNavButton, uiIconChevronDown, uiIconChevronUp, uiIconEdit, uiIconAdd, uiIconCancel, uiIconMore, uiIconSettings, uiIconMail, uiIconFilter, uiIconSearch, uiIconShare, uiIconBlockedSite, uiIconFavoriteStar, uiIconFavoriteStarFill, uiIconCheckMark, uiIconDelete, uiIconChevronLeft, uiIconChevronRight, uiIconCalendar, uiIconMegaphone, uiIconUndo, uiIconFlag, uiIconPage, uiIconPinned, uiIconView, uiIconClear, uiIconDownload, uiIconUpload, uiIconFolder, uiIconSort, uiIconAlignRight, uiIconAlignLeft, uiIconTag, uiIconAddFriend, uiIconInfo, uiIconSortLines, uiIconList, uiIconCircleRing, uiIconHeart, uiIconHeartFill, uiIconTiles, uiIconEmbed, uiIconGlimmer, uiIconAscending, uiIconDescending, uiIconSortUp, uiIconSortDown, uiIconSyncToPC, uiIconLargeGrid, uiIconSkypeCheck, uiIconSkypeClock, uiIconSkypeMinus, uiIconClearFilter, uiIconFlow, uiIconStatusCircleCheckmark, uiIconMoreVertical, uiIconDecreaseIndentLegacy, uiIconIncreaseIndentLegacy, uiIconSizeLegacy, uiIconInternetSharing, uiIconBrightness, uiIconMapPin, uiIconAirplane, uiIconTablet, uiIconQuickNote, uiIconVideo, uiIconPeople, uiIconPhone, uiIconPin, uiIconShop, uiIconStop, uiIconLink, uiIconAllApps, uiIconZoom, uiIconZoomOut, uiIconMicrophone, uiIconCamera, uiIconAttach, uiIconSend, uiIconFavoriteList, uiIconPageSolid, uiIconForward, uiIconBack, uiIconRefresh, uiIconLock, uiIconReportHacked, uiIconEMI, uiIconMiniLink, uiIconBlocked, uiIconReadingMode, uiIconFavicon, uiIconRemove, uiIconCheckbox, uiIconCheckboxComposite, uiIconCheckboxIndeterminate, uiIconCheckboxCompositeReversed, uiIconBackToWindow, uiIconFullScreen, uiIconPrint, uiIconUp, uiIconDown, uiIconOEM, uiIconSave, uiIconCloud, uiIconCommandPrompt, uiIconSad, uiIconSIPMove, uiIconEraseTool, uiIconGripperTool, uiIconDialpad, uiIconPageLeft, uiIconPageRight, uiIconMultiSelect, uiIconKeyboardClassic, uiIconPlay, uiIconPause, uiIconEmoji2, uiIconGripperBarHorizontal, uiIconSystem, uiIconPersonalize, uiIconSearchAndApps, uiIconGlobe, uiIconContactInfo, uiIconUnpin, uiIconContact, uiIconMemo, uiIconPaste, uiIconWindowsLogo, uiIconError, uiIconGripperBarVertical, uiIconUnlock, uiIconAutoEnhanceOn, uiIconAutoEnhanceOff, uiIconColor, uiIconSaveAs, uiIconLight, uiIconFilters, uiIconAspectRatio, uiIconContrast, uiIconRedo, uiIconCrop, uiIconPhotoCollection, uiIconAlbum, uiIconRotate, uiIconPanoIndicator, uiIconRedEye, uiIconThumbnailView, uiIconPackage, uiIconWarning, uiIconFinancial, uiIconEducation, uiIconShoppingCart, uiIconTrain, uiIconMove, uiIconTouchPointer, uiIconMerge, uiIconTurnRight, uiIconFerry, uiIconHighlight, uiIconPowerButton, uiIconTab, uiIconAdmin, uiIconTVMonitor, uiIconSpeakers, uiIconStackIndicator, uiIconNav2DMapView, uiIconCar, uiIconBus, uiIconEatDrink, uiIconLocationCircle, uiIconHome, uiIconSwitcherStartEnd, uiIconParkingLocation, uiIconIncidentTriangle, uiIconTouch, uiIconMapDirections, uiIconCaretHollow, uiIconCaretSolid, uiIconHistory, uiIconLocation, uiIconWork, uiIconRecent, uiIconHotel, uiIconLocationDot, uiIconDictionary, uiIconChromeBack, uiIconFolderOpen, uiIconPinnedFill, uiIconRevToggleKey, uiIconPrevious, uiIconNext, uiIconSync, uiIconHelp, uiIconEmoji, uiIconMailForward, uiIconClosePane, uiIconOpenPane, uiIconPreviewLink, uiIconZoomIn, uiIconBookmarks, uiIconDocument, uiIconProtectedDocument, uiIconOpenInNewWindow, uiIconMailFill, uiIconViewAll, uiIconSwitch, uiIconRename, uiIconRemote, uiIconSelectAll, uiIconOrientation, uiIconImport, uiIconPicture, uiIconChromeClose, uiIconShowResults, uiIconMessage, uiIconCalendarDay, uiIconCalendarWeek, uiIconMailReplyAll, uiIconRead, uiIconCut, uiIconPaymentCard, uiIconCopy, uiIconImportant, uiIconMailReply, uiIconGotoToday, uiIconFont, uiIconFontColor, uiIconFolderFill, uiIconPermissions, uiIconDisableUpdates, uiIconUnfavorite, uiIconItalic, uiIconUnderline, uiIconBold, uiIconMoveToFolder, uiIconDislike, uiIconLike, uiIconAlignCenter, uiIconOpenFile, uiIconFontDecrease, uiIconFontIncrease, uiIconFontSize, uiIconCellPhone, uiIconCalculator, uiIconLibrary, uiIconPostUpdate, uiIconNewFolder, uiIconCalendarReply, uiIconUnsyncFolder, uiIconSyncFolder, uiIconBlockContact, uiIconAccept, uiIconBulletedList, uiIconPreview, uiIconNews, uiIconChat, uiIconGroup, uiIconWorld, uiIconComment, uiIconDockLeft, uiIconDockRight, uiIconRepair, uiIconAccounts, uiIconRadioBullet, uiIconStopwatch, uiIconClock, uiIconWorldClock, uiIconAlarmClock, uiIconPhoto, uiIconHospital, uiIconTimer, uiIconFullCircleMask, uiIconLocationFill, uiIconChromeMinimize, uiIconAnnotation, uiIconFingerprint, uiIconHandwriting, uiIconCompleted, uiIconLabel, uiIconFlickDown, uiIconFlickUp, uiIconFlickLeft, uiIconFlickRight, uiIconMiniExpand, uiIconMiniContract, uiIconStreaming, uiIconMusicInCollection, uiIconOneDriveLogo, uiIconCompassNW, uiIconCode, uiIconLightningBolt, uiIconCalculatorMultiply, uiIconCalculatorAddition, uiIconCalculatorSubtract, uiIconCalculatorEqualTo, uiIconPrintfaxPrinterFile, uiIconCommunications, uiIconHeadset, uiIconHealth, uiIconChevronUpSmall, uiIconChevronDownSmall, uiIconChevronLeftSmall, uiIconChevronRightSmall, uiIconChevronUpMed, uiIconChevronDownMed, uiIconChevronLeftMed, uiIconChevronRightMed, uiIconPC1, uiIconPresenceChickletVideo, uiIconReply, uiIconHalfAlpha, uiIconConstructionCone, uiIconDoubleChevronLeftMed, uiIconVolume0, uiIconVolume1, uiIconVolume2, uiIconVolume3, uiIconChart, uiIconRobot, uiIconManufacturing, uiIconLockSolid, uiIconBidiLtr, uiIconBidiRtl, uiIconRightDoubleQuote, uiIconSunny, uiIconCloudWeather, uiIconCloudy, uiIconPartlyCloudyDay, uiIconPartlyCloudyNight, uiIconClearNight, uiIconRainShowersDay, uiIconRain, uiIconThunderstorms, uiIconRainSnow, uiIconSnow, uiIconBlowingSnow, uiIconFrigid, uiIconFog, uiIconSqualls, uiIconDuststorm, uiIconUnknown, uiIconPrecipitation, uiIconRibbon, uiIconAreaChart, uiIconAssign, uiIconCheckList, uiIconDiagnostic, uiIconGenerate, uiIconLineChart, uiIconEqualizer, uiIconBarChartHorizontal, uiIconBarChartVertical, uiIconFreezing, uiIconProcessing, uiIconSnowShowerDay, uiIconHailDay, uiIconWorkFlow, uiIconHourGlass, uiIconStoreLogoMed20, uiIconTimeSheet, uiIconTriangleSolid, uiIconVideoSolid, uiIconRainShowersNight, uiIconSnowShowerNight, uiIconTeamwork, uiIconHailNight, uiIconPeopleAdd, uiIconGlasses, uiIconDateTime2, uiIconShield, uiIconHeader1, uiIconPageAdd, uiIconNumberedList, uiIconPowerBILogo, uiIconInfo2, uiIconMusicInCollectionFill, uiIconAsterisk, uiIconErrorBadge, uiIconCircleFill, uiIconRecord2, uiIconAllAppsMirrored, uiIconBookmarksMirrored, uiIconBulletedListMirrored, uiIconCaretHollowMirrored, uiIconCaretSolidMirrored, uiIconChromeBackMirrored, uiIconClosePaneMirrored, uiIconDockLeftMirrored, uiIconDoubleChevronLeftMedMirrored, uiIconHelpMirrored, uiIconImportMirrored, uiIconListMirrored, uiIconMailForwardMirrored, uiIconMailReplyMirrored, uiIconMailReplyAllMirrored, uiIconOpenPaneMirrored, uiIconParkingLocationMirrored, uiIconSendMirrored, uiIconShowResultsMirrored, uiIconThumbnailViewMirrored, uiIconDevices3, uiIconLightbulb, uiIconStatusTriangle, uiIconVolumeDisabled, uiIconPuzzle, uiIconEmojiNeutral, uiIconEmojiDisappointed, uiIconHomeSolid, uiIconRinger, uiIconPDF, uiIconHeartBroken, uiIconStoreLogo16, uiIconMultiSelectMirrored, uiIconBroom, uiIconCocktails, uiIconWines, uiIconArticles, uiIconCycling, uiIconDietPlanNotebook, uiIconPill, uiIconExerciseTracker, uiIconHandsFree, uiIconMedical, uiIconRunning, uiIconWeights, uiIconTrackers, uiIconAddNotes, uiIconAllCurrency, uiIconBarChart4, uiIconCirclePlus, uiIconCoffee, uiIconCotton, uiIconMarket, uiIconMoney, uiIconPieDouble, uiIconPieSingle, uiIconRemoveFilter, uiIconSavings, uiIconSell, uiIconStockDown, uiIconStockUp, uiIconLamp, uiIconSource, uiIconMSNVideos, uiIconCricket, uiIconGolf, uiIconBaseball, uiIconSoccer, uiIconMoreSports, uiIconAutoRacing, uiIconCollegeHoops, uiIconCollegeFootball, uiIconProFootball, uiIconProHockey, uiIconRugby, uiIconSubstitutionsIn, uiIconTennis, uiIconArrivals, uiIconDesign, uiIconWebsite, uiIconDrop, uiIconSkiResorts, uiIconSnowflake, uiIconBusSolid, uiIconFerrySolid, uiIconAirplaneSolid, uiIconTrainSolid, uiIconTicket, uiIconDevices4, uiIconAzureLogo, uiIconBingLogo, uiIconMSNLogo, uiIconOutlookLogoInverse, uiIconOfficeLogo, uiIconSkypeLogo, uiIconDoor, uiIconEditMirrored, uiIconGiftCard, uiIconDoubleBookmark, uiIconStatusErrorFull, uiIconCertificate, uiIconFastForward, uiIconRewind, uiIconPhoto2, uiIconOpenSource, uiIconMovers, uiIconCloudDownload, uiIconFamily, uiIconWindDirection, uiIconBug, uiIconSiteScan, uiIconBrowserScreenShot, uiIconF12DevTools, uiIconCSS, uiIconJS, uiIconDeliveryTruck, uiIconReminderPerson, uiIconReminderGroup, uiIconTabletMode, uiIconUmbrella, uiIconNetworkTower, uiIconCityNext, uiIconSection, uiIconOneNoteLogoInverse, uiIconToggleFilled, uiIconToggleBorder, uiIconSliderThumb, uiIconToggleThumb, uiIconDocumentation, uiIconBadge, uiIconGiftbox, uiIconVisualStudioLogo, uiIconExcelLogoInverse, uiIconWordLogoInverse, uiIconPowerPointLogoInverse, uiIconCafe, uiIconSpeedHigh, uiIconCommitments, uiIconThisPC, uiIconMusicNote, uiIconMicOff, uiIconEdgeLogo, uiIconCompletedSolid, uiIconAlbumRemove, uiIconMessageFill, uiIconTabletSelected, uiIconMobileSelected, uiIconLaptopSelected, uiIconTVMonitorSelected, uiIconDeveloperTools, uiIconInsertTextBox, uiIconLowerBrightness, uiIconDOM, uiIconCloudUpload, uiIconScrollUpDown, uiIconDateTime, uiIconEvent, uiIconCake, uiIconOrg, uiIconPartyLeader, uiIconDRM, uiIconCloudAdd, uiIconAppIconDefault, uiIconPhoto2Add, uiIconPhoto2Remove, uiIconPOI, uiIconAddTo, uiIconRadioBtnOff, uiIconRadioBtnOn, uiIconExploreContent, uiIconProduct, uiIconProgressLoopInner, uiIconProgressLoopOuter, uiIconBlocked2, uiIconFangBody, uiIconChatInviteFriend, uiIconCrown, uiIconDiamond, uiIconScaleUp, uiIconFeedback, uiIconSharepointLogoInverse, uiIconYammerLogo, uiIconHide, uiIconUneditable, uiIconReturnToSession, uiIconOpenFolderHorizontal, uiIconCalendarMirrored, uiIconSwayLogoInverse, uiIconOutOfOffice, uiIconTrophy, uiIconReopenPages, uiIconEmojiTabSymbols, uiIconAADLogo, uiIconAccessLogo, uiIconAdminALogoInverse32, uiIconAdminCLogoInverse32, uiIconAdminDLogoInverse32, uiIconAdminELogoInverse32, uiIconAdminLLogoInverse32, uiIconAdminMLogoInverse32, uiIconAdminOLogoInverse32, uiIconAdminPLogoInverse32, uiIconAdminSLogoInverse32, uiIconAdminYLogoInverse32, uiIconDelveLogoInverse, uiIconExchangeLogoInverse, uiIconLyncLogo, uiIconOfficeVideoLogoInverse, uiIconSocialListeningLogo, uiIconVisioLogoInverse, uiIconBalloons, uiIconCat, uiIconMailAlert, uiIconMailCheck, uiIconMailLowImportance, uiIconMailPause, uiIconMailRepeat, uiIconSecurityGroup, uiIconTable, uiIconVoicemailForward, uiIconVoicemailReply, uiIconWaffle, uiIconRemoveEvent, uiIconEventInfo, uiIconForwardEvent, uiIconWipePhone, uiIconAddOnlineMeeting, uiIconJoinOnlineMeeting, uiIconRemoveLink, uiIconPeopleBlock, uiIconPeopleRepeat, uiIconPeopleAlert, uiIconPeoplePause, uiIconTransferCall, uiIconAddPhone, uiIconUnknownCall, uiIconNoteReply, uiIconNoteForward, uiIconNotePinned, uiIconRemoveOccurrence, uiIconTimeline, uiIconEditNote, uiIconCircleHalfFull, uiIconRoom, uiIconUnsubscribe, uiIconSubscribe, uiIconHardDrive, uiIconRecurringTask, uiIconTaskManager, uiIconTaskManagerMirrored, uiIconCombine, uiIconSplit, uiIconDoubleChevronUp, uiIconDoubleChevronLeft, uiIconDoubleChevronRight, uiIconTextBox, uiIconTextField, uiIconNumberField, uiIconDropdown, uiIconBookingsLogo, uiIconClassNotebookLogoInverse, uiIconDelveAnalyticsLogo, uiIconDocsLogoInverse, uiIconDynamics365Logo, uiIconDynamicSMBLogo, uiIconOfficeAssistantLogo, uiIconOfficeStoreLogo, uiIconOneNoteEduLogoInverse, uiIconPlannerLogo, uiIconPowerApps, uiIconSuitcase, uiIconProjectLogoInverse, uiIconCaretLeft8, uiIconCaretRight8, uiIconCaretUp8, uiIconCaretDown8, uiIconCaretLeftSolid8, uiIconCaretRightSolid8, uiIconCaretUpSolid8, uiIconCaretDownSolid8, uiIconClearFormatting, uiIconSuperscript, uiIconSubscript, uiIconStrikethrough, uiIconExport, uiIconExportMirrored, uiIconSingleBookmark, uiIconSingleBookmarkSolid, uiIconDoubleChevronDown, uiIconFollowUser, uiIconReplyAll, uiIconWorkforceManagement, uiIconRecruitmentManagement, uiIconQuestionnaire, uiIconManagerSelfService, uiIconReplyMirrored, uiIconReplyAllMirrored, uiIconMedal, uiIconAddGroup, uiIconQuestionnaireMirrored, uiIconTemporaryUser, uiIconCaretSolid16, uiIconGroupedDescending, uiIconGroupedAscending, uiIconAwayStatus, uiIconMyMoviesTV, uiIconGenericScan, uiIconAustralianRules, uiIconWifiEthernet, uiIconTrackersMirrored, uiIconDateTimeMirrored, uiIconStopSolid, uiIconDoubleChevronUp12, uiIconDoubleChevronDown12, uiIconDoubleChevronLeft12, uiIconDoubleChevronRight12, uiIconCalendarAgenda, uiIconAddEvent, uiIconAssetLibrary, uiIconDataConnectionLibrary, uiIconDocLibrary, uiIconFormLibrary, uiIconFormLibraryMirrored, uiIconReportLibrary, uiIconReportLibraryMirrored, uiIconContactCard, uiIconCustomList, uiIconCustomListMirrored, uiIconIssueTracking, uiIconIssueTrackingMirrored, uiIconPictureLibrary, uiIconOfficeAddinsLogo, uiIconOfflineOneDriveParachute, uiIconOfflineOneDriveParachuteDisabled, uiIconTriangleSolidUp12, uiIconTriangleSolidDown12, uiIconTriangleSolidLeft12, uiIconTriangleSolidRight12, uiIconTriangleUp12, uiIconTriangleDown12, uiIconTriangleLeft12, uiIconTriangleRight12, uiIconArrowUpRight8, uiIconArrowDownRight8, uiIconDocumentSet, uiIconDelveAnalytics, uiIconArrowUpRightMirrored8, uiIconArrowDownRightMirrored8, uiIconCompanyDirectory, uiIconCompanyDirectoryMirrored, uiIconOneDriveAdd, uiIconProfileSearch, uiIconHeader2, uiIconHeader3, uiIconHeader4, uiIconEyedropper, uiIconMarketDown, uiIconCalendarWorkWeek, uiIconSidePanel, uiIconGlobeFavorite, uiIconCaretTopLeftSolid8, uiIconCaretTopRightSolid8, uiIconViewAll2, uiIconDocumentReply, uiIconPlayerSettings, uiIconReceiptForward, uiIconReceiptReply, uiIconReceiptCheck, uiIconFax, uiIconRecurringEvent, uiIconReplyAlt, uiIconReplyAllAlt, uiIconEditStyle, uiIconEditMail, uiIconLifesaver, uiIconLifesaverLock, uiIconInboxCheck, uiIconFolderSearch, uiIconCollapseMenu, uiIconExpandMenu, uiIconBoards, uiIconSunAdd, uiIconSunQuestionMark, uiIconLandscapeOrientation, uiIconDocumentSearch, uiIconPublicCalendar, uiIconPublicContactCard, uiIconPublicEmail, uiIconPublicFolder, uiIconWordDocument, uiIconPowerPointDocument, uiIconExcelDocument, uiIconGroupedList, uiIconClassroomLogo, uiIconSections, uiIconEditPhoto, uiIconStarburst, uiIconShareiOS, uiIconAirTickets, uiIconPencilReply, uiIconTiles2, uiIconSkypeCircleCheck, uiIconSkypeCircleClock, uiIconSkypeCircleMinus, uiIconSkypeMessage, uiIconClosedCaption, uiIconATPLogo, uiIconOfficeFormsLogoInverse, uiIconRecycleBin, uiIconEmptyRecycleBin, uiIconHide2, uiIconBreadcrumb, uiIconBirthdayCake, uiIconTimeEntry, uiIconPageEdit, uiIconPageRemove, uiIconDatabase, uiIconEditContact, uiIconConnectContacts, uiIconActivateOrders, uiIconDeactivateOrders, uiIconDocumentManagement, uiIconCRMReport, uiIconZipFolder, uiIconSurveyQuestions, uiIconTextDocument, uiIconTextDocumentShared, uiIconPageCheckedOut, uiIconSaveAndClose, uiIconScript, uiIconArchive, uiIconActivityFeed, uiIconEventDate, uiIconArrowUpRight, uiIconCaretRight, uiIconSetAction, uiIconCaretSolidLeft, uiIconCaretSolidDown, uiIconCaretSolidRight, uiIconCaretSolidUp, uiIconPowerAppsLogo, uiIconPowerApps2Logo, uiIconSearchIssue, uiIconSearchIssueMirrored, uiIconFabricAssetLibrary, uiIconFabricDataConnectionLibrary, uiIconFabricDocLibrary, uiIconFabricFormLibrary, uiIconFabricFormLibraryMirrored, uiIconFabricReportLibrary, uiIconFabricReportLibraryMirrored, uiIconFabricPublicFolder, uiIconFabricFolderSearch, uiIconFabricMovetoFolder, uiIconFabricUnsyncFolder, uiIconFabricSyncFolder, uiIconFabricOpenFolderHorizontal, uiIconFabricFolder, uiIconFabricFolderFill, uiIconFabricNewFolder, uiIconFabricPictureLibrary, uiIconAddFavorite, uiIconAddFavoriteFill, uiIconBufferTimeBefore, uiIconBufferTimeAfter, uiIconBufferTimeBoth, uiIconCannedChat, uiIconSkypeForBusinessLogo, uiIconPageCheckedin, uiIconReadOutLoud, uiIconCaretBottomLeftSolid8, uiIconCaretBottomRightSolid8, uiIconFolderHorizontal, uiIconMicrosoftStaffhubLogo, uiIconGiftboxOpen, uiIconStatusCircleOuter, uiIconStatusCircleInner, uiIconStatusCircleRing, uiIconStatusTriangleOuter, uiIconStatusTriangleInner, uiIconStatusTriangleExclamation, uiIconStatusCircleExclamation, uiIconStatusCircleErrorX, uiIconStatusCircleInfo, uiIconStatusCircleBlock2, uiIconStatusCircleQuestionMark, uiIconToll, uiIconExploreContentSingle, uiIconCollapseContent, uiIconCollapseContentSingle, uiIconInfoSolid, uiIconProgressRingDots, uiIconCaloriesAdd, uiIconBranchFork, uiIconMobileReport, uiIconHardDriveGroup, uiIconFastMode, uiIconToggleOn, uiIconToggleOff, uiIconTrophy2, uiIconBucketColor, uiIconBucketColorFill, uiIconTaskboard, uiIconSingleColumn, uiIconDoubleColumn, uiIconTripleColumn, uiIconColumnLeftTwoThirds, uiIconColumnRightTwoThirds, uiIconAccessLogoFill, uiIconAnalyticsLogo, uiIconAnalyticsQuery, uiIconNewAnalyticsQuery, uiIconAnalyticsReport, uiIconWordLogo, uiIconWordLogoFill, uiIconExcelLogo, uiIconExcelLogoFill, uiIconOneNoteLogo, uiIconOneNoteLogoFill, uiIconOutlookLogo, uiIconOutlookLogoFill, uiIconPowerPointLogo, uiIconPowerPointLogoFill, uiIconPublisherLogo, uiIconPublisherLogoFill, uiIconScheduleEventAction, uiIconFlameSolid, uiIconServerProcesses, uiIconServer, uiIconSaveAll, uiIconLinkedInLogo, uiIconDecimals, uiIconSidePanelMirrored, uiIconProtectRestrict, uiIconUnknownMirrored, uiIconPublicContactCardMirrored, uiIconGridViewSmall, uiIconGridViewMedium, uiIconGridViewLarge, uiIconStep, uiIconStepInsert, uiIconStepShared, uiIconStepSharedAdd, uiIconStepSharedInsert, uiIconViewDashboard, uiIconViewList, uiIconViewListGroup, uiIconViewListTree, uiIconTriggerAuto, uiIconTriggerUser, uiIconPivotChart, uiIconStackedBarChart, uiIconStackedLineChart, uiIconBuildQueue, uiIconBuildQueueNew, uiIconUserFollowed, uiIconContactLink, uiIconStack, uiIconBullseye, uiIconVennDiagram, uiIconFiveTileGrid, uiIconFocalPoint, uiIconRingerRemove, uiIconTeamsLogoInverse, uiIconTeamsLogo, uiIconTeamsLogoFill, uiIconSkypeForBusinessLogoFill, uiIconSharepointLogo, uiIconSharepointLogoFill, uiIconDelveLogo, uiIconDelveLogoFill, uiIconOfficeVideoLogo, uiIconOfficeVideoLogoFill, uiIconExchangeLogo, uiIconExchangeLogoFill, uiIconDocumentApproval, uiIconCloneToDesktop, uiIconInstallToDrive, uiIconBlur, uiIconBuild, uiIconProcessMetaTask, uiIconBranchFork2, uiIconBranchLocked, uiIconBranchCommit, uiIconBranchCompare, uiIconBranchMerge, uiIconBranchPullRequest, uiIconBranchSearch, uiIconBranchShelveset, uiIconRawSource, uiIconMergeDuplicate, uiIconRowsGroup, uiIconRowsChild, uiIconDeploy, uiIconRedeploy, uiIconServerEnviroment, uiIconVisioDiagram, uiIconHighlightMappedShapes, uiIconTextCallout, uiIconIconSetsFlag, uiIconVisioLogo, uiIconVisioLogoFill, uiIconVisioDocument, uiIconTimelineProgress, uiIconTimelineDelivery, uiIconBacklog, uiIconTeamFavorite, uiIconTaskGroup, uiIconTaskGroupMirrored, uiIconScopeTemplate, uiIconAssessmentGroupTemplate, uiIconNewTeamProject, uiIconCommentAdd, uiIconCommentNext, uiIconCommentPrevious, uiIconShopServer, uiIconLocaleLanguage, uiIconQueryList, uiIconUserSync, uiIconUserPause, uiIconStreamingOff, uiIconArrowTallUpLeft, uiIconArrowTallUpRight, uiIconArrowTallDownLeft, uiIconArrowTallDownRight, uiIconFieldEmpty, uiIconFieldFilled, uiIconFieldChanged, uiIconFieldNotChanged, uiIconRingerOff, uiIconPlayResume, uiIconBulletedList2, uiIconBulletedList2Mirrored, uiIconImageCrosshair, uiIconGitGraph, uiIconRepo, uiIconRepoSolid, uiIconFolderQuery, uiIconFolderList, uiIconFolderListMirrored, uiIconLocationOutline, uiIconPOISolid, uiIconCalculatorNotEqualTo, uiIconBoxSubtractSolid, uiIconBoxAdditionSolid, uiIconBoxMultiplySolid, uiIconBoxPlaySolid, uiIconBoxCheckmarkSolid, uiIconCirclePauseSolid, uiIconCirclePause, uiIconMSNVideosSolid, uiIconCircleStopSolid, uiIconCircleStop, uiIconNavigateBack, uiIconNavigateBackMirrored, uiIconNavigateForward, uiIconNavigateForwardMirrored, uiIconUnknownSolid, uiIconUnknownMirroredSolid, uiIconCircleAddition, uiIconCircleAdditionSolid, uiIconFilePDB, uiIconFileTemplate, uiIconFileSQL, uiIconFileJAVA, uiIconFileASPX, uiIconFileCSS, uiIconFileSass, uiIconFileLess, uiIconFileHTML, uiIconJavaScriptLanguage, uiIconCSharpLanguage, uiIconCSharp, uiIconVisualBasicLanguage, uiIconVB, uiIconCPlusPlusLanguage, uiIconCPlusPlus, uiIconFSharpLanguage, uiIconFSharp, uiIconTypeScriptLanguage, uiIconPythonLanguage, uiIconPY, uiIconCoffeeScript, uiIconMarkDownLanguage, uiIconFullWidth, uiIconFullWidthEdit, uiIconPlug, uiIconPlugSolid, uiIconPlugConnected, uiIconPlugDisconnected, uiIconUnlockSolid, uiIconVariable, uiIconParameter, uiIconCommentUrgent, uiIconStoryboard, uiIconDiffInline, uiIconDiffSideBySide, uiIconImageDiff, uiIconImagePixel, uiIconFileBug, uiIconFileCode, uiIconFileComment, uiIconBusinessHoursSign, uiIconFileImage, uiIconFileSymlink, uiIconAutoFillTemplate, uiIconWorkItem, uiIconWorkItemBug, uiIconLogRemove, uiIconColumnOptions, uiIconPackages, uiIconBuildIssue, uiIconAssessmentGroup, uiIconVariableGroup, uiIconFullHistory, uiIconSingleColumnEdit, uiIconDoubleColumnEdit, uiIconTripleColumnEdit, uiIconColumnLeftTwoThirdsEdit, uiIconColumnRightTwoThirdsEdit, uiIconStreamLogo, uiIconPassiveAuthentication, uiIconAlertSolid, uiIconMegaphoneSolid, uiIconTaskSolid, uiIconConfigurationSolid, uiIconBugSolid, uiIconCrownSolid, uiIconTrophy2Solid, uiIconQuickNoteSolid, uiIconConstructionConeSolid, uiIconPageListSolid, uiIconPageListMirroredSolid, uiIconStarburstSolid, uiIconReadingModeSolid, uiIconSadSolid, uiIconHealthSolid, uiIconShieldSolid, uiIconGiftBoxSolid, uiIconShoppingCartSolid, uiIconMailSolid, uiIconChatSolid, uiIconRibbonSolid, uiIconFinancialSolid, uiIconFinancialMirroredSolid, uiIconHeadsetSolid, uiIconPermissionsSolid, uiIconParkingSolid, uiIconParkingMirroredSolid, uiIconDiamondSolid, uiIconAsteriskSolid, uiIconOfflineStorageSolid, uiIconBankSolid, uiIconDecisionSolid, uiIconParachute, uiIconParachuteSolid, uiIconFiltersSolid, uiIconColorSolid, uiIconReviewSolid, uiIconReviewRequestSolid, uiIconReviewRequestMirroredSolid, uiIconReviewResponseSolid, uiIconFeedbackRequestSolid, uiIconFeedbackRequestMirroredSolid, uiIconFeedbackResponseSolid, uiIconWorkItemBar, uiIconWorkItemBarSolid, uiIconSeparator, uiIconNavigateExternalInline, uiIconPlanView, uiIconTimelineMatrixView, uiIconEngineeringGroup, uiIconProjectCollection, uiIconCaretBottomRightCenter8, uiIconCaretBottomLeftCenter8, uiIconCaretTopRightCenter8, uiIconCaretTopLeftCenter8, uiIconDonutChart, uiIconChevronUnfold10, uiIconChevronFold10, uiIconDoubleChevronDown8, uiIconDoubleChevronUp8, uiIconDoubleChevronLeft8, uiIconDoubleChevronRight8, uiIconChevronDownEnd6, uiIconChevronUpEnd6, uiIconChevronLeftEnd6, uiIconChevronRightEnd6, uiIconContextMenu, uiIconAzureAPIManagement, uiIconAzureServiceEndpoint, uiIconVSTSLogo, uiIconVSTSAltLogo1, uiIconVSTSAltLogo2, uiIconFileTypeSolution, uiIconWordLogoInverse16, uiIconWordLogo16, uiIconWordLogoFill16, uiIconPowerPointLogoInverse16, uiIconPowerPointLogo16, uiIconPowerPointLogoFill16, uiIconExcelLogoInverse16, uiIconExcelLogo16, uiIconExcelLogoFill16, uiIconOneNoteLogoInverse16, uiIconOneNoteLogo16, uiIconOneNoteLogoFill16, uiIconOutlookLogoInverse16, uiIconOutlookLogo16, uiIconOutlookLogoFill16, uiIconPublisherLogoInverse16, uiIconPublisherLogo16, uiIconPublisherLogoFill16, uiIconVisioLogoInverse16, uiIconVisioLogo16, uiIconVisioLogoFill16, uiIconTestBeaker, uiIconTestBeakerSolid, uiIconTestExploreSolid, uiIconTestAutoSolid, uiIconTestUserSolid, uiIconTestImpactSolid, uiIconTestPlan, uiIconTestStep, uiIconTestParameter, uiIconTestSuite, uiIconTestCase, uiIconSprint, uiIconSignOut, uiIconTriggerApproval, uiIconRocket, uiIconAzureKeyVault, uiIconTransition, uiIconLikeSolid, uiIconDislikeSolid, uiIconUnSetColor, uiIconDeclineCall, uiIconRectangularClipping, uiIconTeamsLogo16, uiIconTeamsLogoFill16, uiIconSpacer, uiIconSkypeLogo16, uiIconSkypeForBusinessLogo16, uiIconSkypeForBusinessLogoFill16, uiIconFilterSolid, uiIconMailUndelivered, uiIconMailTentative, uiIconMailTentativeMirrored, uiIconMailReminder, uiIconReceiptUndelivered, uiIconReceiptTentative, uiIconReceiptTentativeMirrored, uiIconInbox, uiIconIRMReply, uiIconIRMReplyMirrored, uiIconIRMForward, uiIconIRMForwardMirrored, uiIconVoicemailIRM, uiIconEventAccepted, uiIconEventTentative, uiIconEventTentativeMirrored, uiIconEventDeclined, uiIconIDBadge, uiIconBackgroundColor, uiIconOfficeFormsLogoInverse16, uiIconOfficeFormsLogo, uiIconOfficeFormsLogoFill, uiIconOfficeFormsLogo16, uiIconOfficeFormsLogoFill16, uiIconOfficeFormsLogoInverse24, uiIconOfficeFormsLogo24, uiIconOfficeFormsLogoFill24, uiIconPageLock, uiIconNotExecuted, uiIconNotImpactedSolid, uiIconFieldReadOnly, uiIconFieldRequired, uiIconBacklogBoard, uiIconExternalBuild, uiIconExternalTFVC, uiIconExternalXAML, uiIconIssueSolid, uiIconDefectSolid, uiIconLadybugSolid, uiIconNugetLogo, uiIconTFVCLogo, uiIconProjectLogo32, uiIconProjectLogoFill32, uiIconProjectLogo16, uiIconProjectLogoFill16, uiIconSwayLogo32, uiIconSwayLogoFill32, uiIconSwayLogo16, uiIconSwayLogoFill16, uiIconClassNotebookLogo32, uiIconClassNotebookLogoFill32, uiIconClassNotebookLogo16, uiIconClassNotebookLogoFill16, uiIconClassNotebookLogoInverse32, uiIconClassNotebookLogoInverse16, uiIconStaffNotebookLogo32, uiIconStaffNotebookLogoFill32, uiIconStaffNotebookLogo16, uiIconStaffNotebookLogoFill16, uiIconStaffNotebookLogoInverted32, uiIconStaffNotebookLogoInverted16, uiIconKaizalaLogo, uiIconTaskLogo, uiIconProtectionCenterLogo32, uiIconGallatinLogo, uiIconGlobe2, uiIconGuitar, uiIconBreakfast, uiIconBrunch, uiIconBeerMug, uiIconVacation, uiIconTeeth, uiIconTaxi, uiIconChopsticks, uiIconSyncOccurence, uiIconUnsyncOccurence, uiIconPrimaryCalendar, uiIconSearchCalendar, uiIconVideoOff, uiIconMicrosoftFlowLogo, uiIconBusinessCenterLogo, uiIconToDoLogoBottom, uiIconToDoLogoTop, uiIconEditSolid12, uiIconEditSolidMirrored12, uiIconUneditableSolid12, uiIconUneditableSolidMirrored12, uiIconUneditableMirrored, uiIconAdminALogo32, uiIconAdminALogoFill32, uiIconToDoLogoInverse, uiIconSnooze, uiIconWaffleOffice365, uiIconImageSearch, uiIconNewsSearch, uiIconVideoSearch, uiIconR, uiIconFontColorA, uiIconFontColorSwatch, uiIconLightWeight, uiIconNormalWeight, uiIconSemiboldWeight, uiIconGroupObject, uiIconUngroupObject, uiIconAlignHorizontalLeft, uiIconAlignHorizontalCenter, uiIconAlignHorizontalRight, uiIconAlignVerticalTop, uiIconAlignVerticalCenter, uiIconAlignVerticalBottom, uiIconHorizontalDistributeCenter, uiIconVerticalDistributeCenter, uiIconEllipse, uiIconLine, uiIconOctagon, uiIconHexagon, uiIconPentagon, uiIconRightTriangle, uiIconHalfCircle, uiIconQuarterCircle, uiIconThreeQuarterCircle, uiIcon6PointStar, uiIcon12PointStar, uiIconArrangeBringToFront, uiIconArrangeSendToBack, uiIconArrangeSendBackward, uiIconArrangeBringForward, uiIconBorderDash, uiIconBorderDot, uiIconLineStyle, uiIconLineThickness, uiIconWindowEdit, uiIconHintText, uiIconMediaAdd, uiIconAnchorLock, uiIconAutoHeight, uiIconChartSeries, uiIconChartXAngle, uiIconChartYAngle, uiIconCombobox, uiIconLineSpacing, uiIconPadding, uiIconPaddingTop, uiIconPaddingBottom, uiIconPaddingLeft, uiIconPaddingRight, uiIconNavigationFlipper, uiIconAlignJustify, uiIconTextOverflow, uiIconVisualsFolder, uiIconVisualsStore, uiIconPictureCenter, uiIconPictureFill, uiIconPicturePosition, uiIconPictureStretch, uiIconPictureTile, uiIconSlider, uiIconSliderHandleSize, uiIconDefaultRatio, uiIconNumberSequence, uiIconGUID, uiIconReportAdd, uiIconDashboardAdd, uiIconMapPinSolid, uiIconWebPublish, uiIconPieSingleSolid, uiIconBlockedSolid, uiIconDrillDown, uiIconDrillDownSolid, uiIconDrillExpand, uiIconDrillShow, uiIconOneDriveFolder16, uiIconFunctionalManagerDashboard, uiIconBIDashboard, uiIconCodeEdit, uiIconRenewalCurrent, uiIconRenewalFuture, uiIconSplitObject, uiIconBulkUpload, uiIconDownloadDocument, uiIconWaitlistConfirm, uiIconWaitlistConfirmMirrored, uiIconLaptopSecure, uiIconDragObject, uiIconEntryView, uiIconEntryDecline, uiIconContactCardSettings, uiIconContactCardSettingsMirrored, uiIconCalendarSettings, uiIconCalendarSettingsMirrored, uiIconHardDriveLock, uiIconHardDriveUnlock, uiIconAccountManagement, uiIconTransitionPop, uiIconTransitionPush, uiIconTransitionEffect, uiIconLookupEntities, uiIconExploreData, uiIconAddBookmark, uiIconSearchBookmark, uiIconDrillThrough, uiIconMasterDatabase, uiIconCertifiedDatabase, uiIconMaximumValue, uiIconMinimumValue, uiIconVisualStudioIDELogo32, uiIconPasteAsText, uiIconPasteAsCode, uiIconBrowserTab, uiIconBrowserTabScreenshot, uiIconDesktopScreenshot, uiIconFileYML, uiIconClipboardSolid, uiIconAnalyticsView, uiIconLeave, uiIconTrending12, uiIconBlocked12, uiIconWarning12, uiIconCheckedOutByOther12, uiIconCheckedOutByYou12, uiIconCircleShapeSolid, uiIconSquareShapeSolid, uiIconTriangleShapeSolid, uiIconDropShapeSolid, uiIconRectangleShapeSolid, uiIconInsertColumnsLeft, uiIconInsertColumnsRight, uiIconInsertRowsAbove, uiIconInsertRowsBelow, uiIconDeleteColumns, uiIconDeleteRows, uiIconDeleteRowsMirrored, uiIconDeleteTable, uiIconVersionControlPush, uiIconWhiteBoardApp16, uiIconWhiteBoardApp32, uiIconInsertSignatureLine, uiIconArrangeByFrom, uiIconPhishing, uiIconCreateMailRule, uiIconPublishCourse, uiIconDictionaryRemove, uiIconUserRemove, uiIconUserEvent, uiIconEncryption, uiIconD365TalentLearn, uiIconD365TalentInsight, uiIconD365TalentHRCore, uiIconBacklogList, uiIconButtonControl, uiIconTableGroup, uiIconMountainClimbing, uiIconTagUnknown, uiIconTagUnknownMirror, uiIconTagUnknown12, uiIconTagUnknown12Mirror, uiIconLink12, uiIconPresentation, uiIconPresentation12, uiIconLock12, uiIconBuildDefinition, uiIconReleaseDefinition, uiIconSaveTemplate, uiIconUserGauge, uiIconBlockedSiteSolid12, uiIconTagSolid, uiIconOfficeChat, uiIconOfficeChatSolid, uiIconMailSchedule };
