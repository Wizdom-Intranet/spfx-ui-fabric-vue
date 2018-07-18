(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.ui = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var lib = createCommonjsModule(function (module, exports) {
	/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || Object.assign || function(t) {
	    var arguments$1 = arguments;

	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments$1[i];
	        for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p))
	            { t[p] = s[p]; } }
	    }
	    return t;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? commonjsGlobal : window; // tslint:disable-line:no-any
	var _themeState = initializeThemeState();
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	// tslint:disable-next-line:max-line-length
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
	function measure(func) {
	    var start = now();
	    func();
	    var end = now();
	    _themeState.perf.duration += end - start;
	}
	/**
	 * initialize global state object
	 */
	function initializeThemeState() {
	    var state = _root.__themeState__ || {
	        theme: undefined,
	        lastStyleElement: undefined,
	        registeredStyles: []
	    };
	    if (!state.runState) {
	        state = __assign({}, (state), { perf: {
	                count: 0,
	                duration: 0
	            }, runState: {
	                flushTimer: 0,
	                mode: 0 /* sync */,
	                buffer: []
	            } });
	    }
	    if (!state.registeredThemableStyles) {
	        state = __assign({}, (state), { registeredThemableStyles: [] });
	    }
	    _root.__themeState__ = state;
	    return state;
	}
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
	 */
	function loadStyles(styles, loadAsync) {
	    if (loadAsync === void 0) { loadAsync = false; }
	    measure(function () {
	        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	        if (_injectStylesWithCssText === undefined) {
	            _injectStylesWithCssText = shouldUseCssText();
	        }
	        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
	        if (loadAsync || mode === 1 /* async */) {
	            buffer.push(styleParts);
	            if (!flushTimer) {
	                _themeState.runState.flushTimer = asyncLoadStyles();
	            }
	        }
	        else {
	            applyThemableStyles(styleParts);
	        }
	    });
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
	 * a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(loadStylesFn) {
	    _themeState.loadStyles = loadStylesFn;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Configure run mode of load-themable-styles
	 * @param mode load-themable-styles run mode, async or sync
	 */
	function configureRunMode(mode) {
	    _themeState.runState.mode = mode;
	}
	exports.configureRunMode = configureRunMode;
	/**
	 * external code can call flush to synchronously force processing of currently buffered styles
	 */
	function flush() {
	    measure(function () {
	        var styleArrays = _themeState.runState.buffer.slice();
	        _themeState.runState.buffer = [];
	        var mergedStyleArray = [].concat.apply([], styleArrays);
	        if (mergedStyleArray.length > 0) {
	            applyThemableStyles(mergedStyleArray);
	        }
	    });
	}
	exports.flush = flush;
	/**
	 * register async loadStyles
	 */
	function asyncLoadStyles() {
	    return setTimeout(function () {
	        _themeState.runState.flushTimer = 0;
	        flush();
	    }, 0);
	}
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Clear already registered style elements and style records in theme_State object
	 * @option: specify which group of registered styles should be cleared.
	 * Default to be both themable and non-themable styles will be cleared
	 */
	function clearStyles(option) {
	    if (option === void 0) { option = 3 /* all */; }
	    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
	        clearStylesInternal(_themeState.registeredStyles);
	        _themeState.registeredStyles = [];
	    }
	    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
	        clearStylesInternal(_themeState.registeredThemableStyles);
	        _themeState.registeredThemableStyles = [];
	    }
	}
	exports.clearStyles = clearStyles;
	function clearStylesInternal(records) {
	    records.forEach(function (styleRecord) {
	        var styleElement = styleRecord && styleRecord.styleElement;
	        if (styleElement && styleElement.parentElement) {
	            styleElement.parentElement.removeChild(styleElement);
	        }
	    });
	}
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        var themableStyles = [];
	        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            themableStyles.push(styleRecord.themableStyle);
	        }
	        if (themableStyles.length > 0) {
	            clearStyles(1 /* onlyThemable */);
	            applyThemableStyles([].concat.apply([], themableStyles));
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles)).styleString;
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var themable = false;
	    // Resolve the array of theming instructions to an array of strings.
	    // Then join the array to produce the final CSS string.
	    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
	        var themeSlot = currentValue.theme;
	        if (themeSlot) {
	            themable = true;
	            // A theming annotation. Resolve it.
	            var themedValue = theme ? theme[themeSlot] : undefined;
	            var defaultValue = currentValue.defaultValue || 'inherit';
	            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
	            // Allow the themedValue to be undefined to explicitly request the default value.
	            if (theme && !themedValue && console && !(themeSlot in theme) && typeof DEBUG !== 'undefined' && DEBUG) {
	                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
	            }
	            return themedValue || defaultValue;
	        }
	        else {
	            // A non-themable string. Preserve it.
	            return currentValue.rawString;
	        }
	    });
	    return {
	        styleString: resolvedArray.join(''),
	        themable: themable
	    };
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(styleString));
	    _themeState.perf.count++;
	    head.appendChild(styleElement);
	    var record = {
	        styleElement: styleElement,
	        themableStyle: styleArray
	    };
	    if (themable) {
	        _themeState.registeredThemableStyles.push(record);
	    }
	    else {
	        _themeState.registeredStyles.push(record);
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var registeredStyles = _themeState.registeredStyles;
	    var lastStyleElement = _themeState.lastStyleElement;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}


	});

	unwrapExports(lib);
	var lib_1 = lib.loadStyles;
	var lib_2 = lib.configureLoadStyles;
	var lib_3 = lib.configureRunMode;
	var lib_4 = lib.flush;
	var lib_5 = lib.loadTheme;
	var lib_6 = lib.clearStyles;
	var lib_7 = lib.detokenize;
	var lib_8 = lib.splitStyles;

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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Button[data-v-79820dd6] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border: 1px solid \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: pointer; display: inline-block; height: 32px; min-width: 80px; padding: 4px 20px 6px; } .ms-Button.is-hidden[data-v-79820dd6] { display: none; } .ms-Button[data-v-79820dd6]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-Button:hover .ms-Button-label[data-v-79820dd6] { color: \"[theme:black, default: #000000]\"; } @media screen and (-ms-high-contrast: active) { .ms-Button[data-v-79820dd6]:hover { color: #1AEBFF; border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Button[data-v-79820dd6]:hover { color: #37006E; border-color: #37006E; } } .ms-Button[data-v-79820dd6]:focus { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; outline: 1px solid transparent; } .ms-Button:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:black, default: #000000]\"; } .ms-Button[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button[data-v-79820dd6]:disabled, .ms-Button.is-disabled[data-v-79820dd6] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: default; } .ms-Button:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button[data-v-79820dd6]:disabled:hover, .ms-Button[data-v-79820dd6]:disabled:focus, .ms-Button.is-disabled[data-v-79820dd6]:hover, .ms-Button.is-disabled[data-v-79820dd6]:focus { outline: 0; } .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 600; font-size: 14px; } .ms-Button-icon[data-v-79820dd6], .ms-Button-description[data-v-79820dd6] { display: none; } .ms-Button.ms-Button--primary[data-v-79820dd6] { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--primary .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:hover { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:focus { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDarker, default: #004578]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--primary[data-v-79820dd6]:disabled, .ms-Button.ms-Button--primary.is-disabled[data-v-79820dd6] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--primary:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--primary.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--small[data-v-79820dd6] { min-width: 60px; min-height: 24px; height: auto; padding-top: 0; padding-bottom: 4px; } .ms-Button.ms-Button--small .ms-Button-label[data-v-79820dd6] { font-weight: 400; font-size: 12px; } .ms-Button.ms-Button--hero[data-v-79820dd6] { align-items: center; background-color: transparent; border: 0; padding: 0; position: relative; } .ms-Button.ms-Button--hero .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; display: inline-block; font-size: 12px; margin-right: 4px; padding-top: 5px; text-align: center; } .ms-Button.ms-Button--hero .ms-Button-icon .ms-Icon[data-v-79820dd6] { border-radius: 18px; border: 1px solid \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; height: 18px; line-height: 18px; width: 18px; } .ms-Button.ms-Button--hero .ms-Button-label[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 21px; font-weight: 100; position: relative; text-decoration: none; vertical-align: top; } .ms-Button.ms-Button--hero:hover .ms-Button-icon[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--hero:hover .ms-Button-icon .ms-Icon[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:themeDark, default: #005a9e]\"; } .ms-Button.ms-Button--hero:hover .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--hero:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:themeDarker, default: #004578]\"; } .ms-Button.ms-Button--hero:active .ms-Button-icon[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:active .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-icon[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-icon[data-v-79820dd6] { color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-icon .ms-Icon[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-icon .ms-Icon[data-v-79820dd6] { border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-Button.ms-Button--hero:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--hero.is-disabled .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6] { display: block; height: auto; max-width: 280px; min-height: 72px; padding: 20px; } .ms-Button.ms-Button--compound .ms-Button-label[data-v-79820dd6] { display: block; font-weight: 600; position: relative; text-align: left; margin-top: -5px; } .ms-Button.ms-Button--compound .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralSecondary, default: #666666]\"; display: block; font-weight: 400; font-size: 12px; position: relative; text-align: left; top: 3px; } .ms-Button.ms-Button--compound:hover .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--compound:focus .ms-Button-label[data-v-79820dd6] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Button.ms-Button--compound:focus .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Button.ms-Button--compound:active .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound:active .ms-Button-label[data-v-79820dd6] { color: \"[theme:white, default: #ffffff]\"; } .ms-Button.ms-Button--compound:disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Button.ms-Button--compound[data-v-79820dd6]:disabled:focus, .ms-Button.ms-Button--compound[data-v-79820dd6]:disabled:active, .ms-Button.ms-Button--compound.is-disabled[data-v-79820dd6]:focus, .ms-Button.ms-Button--compound.is-disabled[data-v-79820dd6]:active { border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-Button.ms-Button--compound:disabled:focus .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:focus .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:active .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound:disabled:active .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:focus .ms-Button-description[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:active .ms-Button-label[data-v-79820dd6], .ms-Button.ms-Button--compound.is-disabled:active .ms-Button-description[data-v-79820dd6] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Callout[data-v-64664f3c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; width: 288px; } .ms-Callout.is-hidden[data-v-64664f3c] { display: none; } .ms-Callout-header[data-v-64664f3c] { z-index: 105; padding-top: 24px; padding-bottom: 12px; padding-left: 28px; padding-right: 28px; } .ms-Callout-title[data-v-64664f3c] { margin: 0; font-weight: 300; font-size: 21px; } .ms-Callout-subText[data-v-64664f3c] { margin: 0; font-weight: 300; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; } .ms-Callout-close[data-v-64664f3c] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 110; } .ms-Callout-link[data-v-64664f3c] { font-size: 14px; } .ms-Callout-inner[data-v-64664f3c] { height: 100%; padding-top: 0; padding-bottom: 12px; padding-left: 28px; padding-right: 28px; } .ms-Callout-actions[data-v-64664f3c] { position: relative; margin-top: 20px; width: 100%; white-space: nowrap; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline[data-v-64664f3c] { height: 27px; line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-64664f3c] { height: 27px; line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-label[data-v-64664f3c] { line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-icon[data-v-64664f3c] { line-height: 27px; } .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:hover .ms-Button[data-v-64664f3c], .ms-Callout-actions .ms-CommandButton.ms-CommandButton--inline:focus .ms-Button[data-v-64664f3c] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Callout-actions .ms-Callout-button[data-v-64664f3c] { margin-right: 12px; } .ms-Callout.ms-Callout--OOBE .ms-Callout-header[data-v-64664f3c] { padding: 28px 24px; background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Callout.ms-Callout--OOBE .ms-Callout-title[data-v-64664f3c] { font-weight: 100; font-size: 28px; color: \"[theme:white, default: #ffffff]\"; } .ms-Callout.ms-Callout--OOBE .ms-Callout-inner[data-v-64664f3c] { padding-top: 20px; } .ms-Callout.ms-Callout--OOBE .ms-Callout-subText[data-v-64664f3c] { font-size: 14px; } .ms-Callout.ms-Callout--actionText .ms-Callout-actions[data-v-64664f3c] { border-top: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; padding-top: 12px; } .ms-Callout.ms-Callout--actionText .ms-Callout-inner[data-v-64664f3c] { padding-bottom: 12px; } .ms-Callout.ms-Callout--peek .ms-Callout-header[data-v-64664f3c] { padding-bottom: 0; } .ms-Callout.ms-Callout--peek .ms-Callout-title[data-v-64664f3c] { font-size: 14px; } .ms-Callout.ms-Callout--peek .ms-Callout-actions[data-v-64664f3c] { margin-top: 12px; margin-bottom: -4px; } .ms-ContextualHost[data-v-64664f3c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned[data-v-64664f3c] { position: absolute; margin: 0; } .ms-ContextualHost.is-open[data-v-64664f3c] { display: inline-block; } .ms-ContextualHost-beak[data-v-64664f3c] { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c], .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c] { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c] { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c] { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak[data-v-64664f3c] { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak[data-v-64664f3c] { display: block; bottom: -10px; } .ms-ContextualHost-main[data-v-64664f3c] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close[data-v-64664f3c] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title[data-v-64664f3c] { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak[data-v-64664f3c] { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost[data-v-64664f3c] { margin: 16px; } .ms-ContextualHost.is-positioned[data-v-64664f3c] { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-64664f3c], .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-64664f3c] { display: block; } } .ms-Icon.ms-Icon--Clear[data-v-64664f3c] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CheckBox[data-v-75ed8232] { box-sizing: border-box; color: \"[theme:neutralPrimary, default: #333333]\"; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; font-size: 14px; font-weight: 400; min-height: 36px; position: relative; } .ms-CheckBox .ms-Label[data-v-75ed8232] { font-size: 14px; padding: 0 0 0 26px; cursor: pointer; display: inline-block; } .ms-CheckBox-input[data-v-75ed8232] { position: absolute; opacity: 0; } .ms-CheckBox-field[data-v-75ed8232]::before { content: ''; display: inline-block; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; width: 20px; height: 20px; cursor: pointer; font-weight: normal; position: absolute; box-sizing: border-box; transition-property: background, border, border-color; transition-duration: 200ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } .ms-CheckBox-field[data-v-75ed8232]::after { content: \"\\E73E\"; font-family: 'FabricMDL2Icons'; display: none; position: absolute; font-weight: 900; background-color: transparent; font-size: 13px; top: 0; color: \"[theme:white, default: #ffffff]\"; line-height: 20px; width: 20px; text-align: center; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field[data-v-75ed8232]::after { color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field[data-v-75ed8232]::after { color: \"[theme:white, default: #ffffff]\"; } } .ms-CheckBox-field[data-v-75ed8232] { display: inline-block; cursor: pointer; margin-top: 8px; position: relative; outline: 0; vertical-align: top; } .ms-CheckBox-field[data-v-75ed8232]:hover::before, .ms-CheckBox-field[data-v-75ed8232]:focus::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-CheckBox-field:hover .ms-Label[data-v-75ed8232], .ms-CheckBox-field:focus .ms-Label[data-v-75ed8232] { color: \"[theme:black, default: #000000]\"; } .ms-CheckBox-field.is-disabled[data-v-75ed8232] { cursor: default; } .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-disabled[data-v-75ed8232]::before { border-color: #600000; } } .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-disabled .ms-Label[data-v-75ed8232] { color: #600000; } } .ms-CheckBox-field.in-focus[data-v-75ed8232]::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-CheckBox-field.in-focus.is-disabled[data-v-75ed8232]::before { border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CheckBox-field.in-focus.is-checked[data-v-75ed8232]::before { border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border: 10px solid \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-CheckBox-field.is-checked[data-v-75ed8232]::before { border-color: #37006E; } } .ms-CheckBox-field.is-checked[data-v-75ed8232]::after { display: block; } .ms-CheckBox-field.is-checked[data-v-75ed8232]:hover::before, .ms-CheckBox-field.is-checked[data-v-75ed8232]:focus::before { border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-CheckBox-field[data-v-75ed8232]::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1837 1491l-1069 -1070l-557 558l90 90l467 -466l979 978z\" fill=\"white\" stroke=\"none\"/></svg>') !important; } ");},
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

	/*!
	 * Vue.js v2.5.16
	 * (c) 2014-2018 Evan You
	 * Released under the MIT License.
	 */
	/*  */

	var emptyObject = Object.freeze({});

	// these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
	function isUndef (v) {
	  return v === undefined || v === null
	}

	function isDef (v) {
	  return v !== undefined && v !== null
	}

	function isTrue (v) {
	  return v === true
	}

	function isFalse (v) {
	  return v === false
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return (
	    typeof value === 'string' ||
	    typeof value === 'number' ||
	    // $flow-disable-line
	    typeof value === 'symbol' ||
	    typeof value === 'boolean'
	  )
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Get the raw type string of a value e.g. [object Object]
	 */
	var _toString = Object.prototype.toString;

	function toRawType (value) {
	  return _toString.call(value).slice(8, -1)
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}

	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}

	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
	  var n = parseFloat(String(val));
	  return n >= 0 && Math.floor(n) === n && isFinite(val)
	}

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Check if a attribute is a reserved attribute.
	 */
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '-$1').toLowerCase()
	});

	/**
	 * Simple bind polyfill for environments that do not support it... e.g.
	 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
	 * now more performant in most browsers, but removing it would be breaking for
	 * code that was able to run in PhantomJS 1.x, so this must be kept for
	 * backwards compatibility.
	 */

	/* istanbul ignore next */
	function polyfillBind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }

	  boundFn._length = fn.length;
	  return boundFn
	}

	function nativeBind (fn, ctx) {
	  return fn.bind(ctx)
	}

	var bind = Function.prototype.bind
	  ? nativeBind
	  : polyfillBind;

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
	 */
	function noop (a, b, c) {}

	/**
	 * Always return false.
	 */
	var no = function (a, b, c) { return false; };

	/**
	 * Return same value
	 */
	var identity = function (_) { return _; };

	/**
	 * Generate a static keys string from compiler modules.
	 */


	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  if (a === b) { return true }
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      var isArrayA = Array.isArray(a);
	      var isArrayB = Array.isArray(b);
	      if (isArrayA && isArrayB) {
	        return a.length === b.length && a.every(function (e, i) {
	          return looseEqual(e, b[i])
	        })
	      } else if (!isArrayA && !isArrayB) {
	        var keysA = Object.keys(a);
	        var keysB = Object.keys(b);
	        return keysA.length === keysB.length && keysA.every(function (key) {
	          return looseEqual(a[key], b[key])
	        })
	      } else {
	        /* istanbul ignore next */
	        return false
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      return false
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}

	var SSR_ATTR = 'data-server-rendered';

	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];

	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated',
	  'errorCaptured'
	];

	/*  */

	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  // $flow-disable-line
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to record perf
	   */
	  performance: false,

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Warn handler for watcher warns
	   */
	  warnHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  // $flow-disable-line
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	});

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}

	/*  */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;

	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    })); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}

	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/*  */

	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };

	  warn = function (msg, vm) {
	    var trace = vm ? generateComponentTrace(vm) : '';

	    if (config.warnHandler) {
	      config.warnHandler.call(null, msg, vm, trace);
	    } else if (hasConsole && (!config.silent)) {
	      console.error(("[Vue warn]: " + msg + trace));
	    }
	  };

	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var options = typeof vm === 'function' && vm.cid != null
	      ? vm.options
	      : vm._isVue
	        ? vm.$options || vm.constructor.options
	        : vm || {};
	    var name = options.name || options._componentTag;
	    var file = options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }

	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };

	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };

	  generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}

	/*  */


	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions,
	  asyncFactory
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.fnContext = undefined;
	  this.fnOptions = undefined;
	  this.fnScopeId = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	  this.asyncFactory = asyncFactory;
	  this.asyncMeta = undefined;
	  this.isAsyncPlaceholder = false;
	};

	var prototypeAccessors = { child: { configurable: true } };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function (text) {
	  if ( text === void 0 ) { text = ''; }

	  var node = new VNode();
	  node.text = text;
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions,
	    vnode.asyncFactory
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.fnContext = vnode.fnContext;
	  cloned.fnOptions = vnode.fnOptions;
	  cloned.fnScopeId = vnode.fnScopeId;
	  cloned.isCloned = true;
	  return cloned
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);

	var methodsToPatch = [
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	];

	/**
	 * Intercept mutating methods and emit events
	 */
	methodsToPatch.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    var args = [], len = arguments.length;
	    while ( len-- ) { args[ len ] = arguments$1[ len ]; }

	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * In some cases we may want to disable observation inside a component's
	 * update computation.
	 */
	var shouldObserve = true;

	function toggleObserving (value) {
	  shouldObserve = value;
	}

	/**
	 * Observer class that is attached to each observed
	 * object. Once attached, the observer converts the target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatch updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive(obj, keys[i]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src, keys) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value) || value instanceof VNode) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    shouldObserve &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
	  obj,
	  key,
	  val,
	  customSetter,
	  shallow
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  if (!getter && arguments.length === 2) {
	    val = obj[key];
	  }
	  var setter = property && property.set;

	  var childOb = !shallow && observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = !shallow && observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if (process.env.NODE_ENV !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (key in target && !(key in Object.prototype)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if (process.env.NODE_ENV !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	function mergeDataOrFn (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
	        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
	      )
	    }
	  } else {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm, vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm, vm)
	        : parentVal;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    if (childVal && typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );

	      return parentVal
	    }
	    return mergeDataOrFn(parentVal, childVal)
	  }

	  return mergeDataOrFn(parentVal, childVal, vm)
	};

	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  var res = Object.create(parentVal || null);
	  if (childVal) {
	    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
	    return extend(res, childVal)
	  } else {
	    return res
	  }
	}

	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  // work around Firefox's Object.prototype.watch...
	  if (parentVal === nativeWatch) { parentVal = undefined; }
	  if (childVal === nativeWatch) { childVal = undefined; }
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key$1 in childVal) {
	    var parent = ret[key$1];
	    var child = childVal[key$1];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key$1] = parent
	      ? parent.concat(child)
	      : Array.isArray(child) ? child : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.inject =
	strats.computed = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  if (childVal && process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  if (childVal) { extend(ret, childVal); }
	  return ret
	};
	strats.provide = mergeDataOrFn;

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    validateComponentName(key);
	  }
	}

	function validateComponentName (name) {
	  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	    warn(
	      'Invalid component name: "' + name + '". Component names ' +
	      'can only contain alphanumeric characters and the hyphen, ' +
	      'and must start with a letter.'
	    );
	  }
	  if (isBuiltInTag(name) || config.isReservedTag(name)) {
	    warn(
	      'Do not use built-in or reserved HTML elements as component ' +
	      'id: ' + name
	    );
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn(
	      "Invalid value for option \"props\": expected an Array or an Object, " +
	      "but got " + (toRawType(props)) + ".",
	      vm
	    );
	  }
	  options.props = res;
	}

	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
	  var inject = options.inject;
	  if (!inject) { return }
	  var normalized = options.inject = {};
	  if (Array.isArray(inject)) {
	    for (var i = 0; i < inject.length; i++) {
	      normalized[inject[i]] = { from: inject[i] };
	    }
	  } else if (isPlainObject(inject)) {
	    for (var key in inject) {
	      var val = inject[key];
	      normalized[key] = isPlainObject(val)
	        ? extend({ from: key }, val)
	        : { from: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn(
	      "Invalid value for option \"inject\": expected an Array or an Object, " +
	      "but got " + (toRawType(inject)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	function assertObjectType (name, value, vm) {
	  if (!isPlainObject(value)) {
	    warn(
	      "Invalid value for option \"" + name + "\": expected an Object, " +
	      "but got " + (toRawType(value)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }

	  if (typeof child === 'function') {
	    child = child.options;
	  }

	  normalizeProps(child, vm);
	  normalizeInject(child, vm);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // boolean casting
	  var booleanIndex = getTypeIndex(Boolean, prop.type);
	  if (booleanIndex > -1) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      // only cast empty string / same name to boolean if
	      // boolean has higher priority
	      var stringIndex = getTypeIndex(String, prop.type);
	      if (stringIndex < 0 || booleanIndex < stringIndex) {
	        value = true;
	      }
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldObserve = shouldObserve;
	    toggleObserving(true);
	    observe(value);
	    toggleObserving(prevShouldObserve);
	  }
	  if (
	    process.env.NODE_ENV !== 'production' &&
	    // skip validation for weex recycle-list child component props
	    !(false)
	  ) {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      "Invalid prop: type check failed for prop \"" + name + "\"." +
	      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
	      ", got " + (toRawType(value)) + ".",
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    // for primitive wrapper objects
	    if (!valid && t === 'object') {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}

	function isSameType (a, b) {
	  return getType(a) === getType(b)
	}

	function getTypeIndex (type, expectedTypes) {
	  if (!Array.isArray(expectedTypes)) {
	    return isSameType(expectedTypes, type) ? 0 : -1
	  }
	  for (var i = 0, len = expectedTypes.length; i < len; i++) {
	    if (isSameType(expectedTypes[i], type)) {
	      return i
	    }
	  }
	  return -1
	}

	/*  */

	function handleError (err, vm, info) {
	  if (vm) {
	    var cur = vm;
	    while ((cur = cur.$parent)) {
	      var hooks = cur.$options.errorCaptured;
	      if (hooks) {
	        for (var i = 0; i < hooks.length; i++) {
	          try {
	            var capture = hooks[i].call(cur, err, vm, info) === false;
	            if (capture) { return }
	          } catch (e) {
	            globalHandleError(e, cur, 'errorCaptured hook');
	          }
	        }
	      }
	    }
	  }
	  globalHandleError(err, vm, info);
	}

	function globalHandleError (err, vm, info) {
	  if (config.errorHandler) {
	    try {
	      return config.errorHandler.call(null, err, vm, info)
	    } catch (e) {
	      logError(e, null, 'config.errorHandler');
	    }
	  }
	  logError(err, vm, info);
	}

	function logError (err, vm, info) {
	  if (process.env.NODE_ENV !== 'production') {
	    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	  }
	  /* istanbul ignore else */
	  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
	    console.error(err);
	  } else {
	    throw err
	  }
	}

	/*  */
	/* globals MessageChannel */

	var callbacks = [];
	var pending = false;

	function flushCallbacks () {
	  pending = false;
	  var copies = callbacks.slice(0);
	  callbacks.length = 0;
	  for (var i = 0; i < copies.length; i++) {
	    copies[i]();
	  }
	}

	// Here we have async deferring wrappers using both microtasks and (macro) tasks.
	// In < 2.4 we used microtasks everywhere, but there are some scenarios where
	// microtasks have too high a priority and fire in between supposedly
	// sequential events (e.g. #4521, #6690) or even between bubbling of the same
	// event (#6566). However, using (macro) tasks everywhere also has subtle problems
	// when state is changed right before repaint (e.g. #6813, out-in transitions).
	// Here we use microtask by default, but expose a way to force (macro) task when
	// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc;
	var macroTimerFunc;
	var useMacroTask = false;

	// Determine (macro) task defer implementation.
	// Technically setImmediate should be the ideal choice, but it's only available
	// in IE. The only polyfill that consistently queues the callback after all DOM
	// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */
	if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	  macroTimerFunc = function () {
	    setImmediate(flushCallbacks);
	  };
	} else if (typeof MessageChannel !== 'undefined' && (
	  isNative(MessageChannel) ||
	  // PhantomJS
	  MessageChannel.toString() === '[object MessageChannelConstructor]'
	)) {
	  var channel = new MessageChannel();
	  var port = channel.port2;
	  channel.port1.onmessage = flushCallbacks;
	  macroTimerFunc = function () {
	    port.postMessage(1);
	  };
	} else {
	  /* istanbul ignore next */
	  macroTimerFunc = function () {
	    setTimeout(flushCallbacks, 0);
	  };
	}

	// Determine microtask defer implementation.
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
	  var p = Promise.resolve();
	  microTimerFunc = function () {
	    p.then(flushCallbacks);
	    // in problematic UIWebViews, Promise.then doesn't completely break, but
	    // it can get stuck in a weird state where callbacks are pushed into the
	    // microtask queue but the queue isn't being flushed, until the browser
	    // needs to do some other work, e.g. handle a timer. Therefore we can
	    // "force" the microtask queue to be flushed by adding an empty timer.
	    if (isIOS) { setTimeout(noop); }
	  };
	} else {
	  // fallback to macro
	  microTimerFunc = macroTimerFunc;
	}

	/**
	 * Wrap a function so that if any code inside triggers state change,
	 * the changes are queued using a (macro) task instead of a microtask.
	 */
	function withMacroTask (fn) {
	  return fn._withTask || (fn._withTask = function () {
	    useMacroTask = true;
	    var res = fn.apply(null, arguments);
	    useMacroTask = false;
	    return res
	  })
	}

	function nextTick (cb, ctx) {
	  var _resolve;
	  callbacks.push(function () {
	    if (cb) {
	      try {
	        cb.call(ctx);
	      } catch (e) {
	        handleError(e, ctx, 'nextTick');
	      }
	    } else if (_resolve) {
	      _resolve(ctx);
	    }
	  });
	  if (!pending) {
	    pending = true;
	    if (useMacroTask) {
	      macroTimerFunc();
	    } else {
	      microTimerFunc();
	    }
	  }
	  // $flow-disable-line
	  if (!cb && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve) {
	      _resolve = resolve;
	    })
	  }
	}

	/*  */

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      'referenced during render. Make sure that this property is reactive, ' +
	      'either in the data option, or for class-based components, by ' +
	      'initializing the property. ' +
	      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' && isNative(Proxy);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var seenObjects = new _Set();

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	function traverse (val) {
	  _traverse(val, seenObjects);
	  seenObjects.clear();
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	var mark;
	var measure;

	if (process.env.NODE_ENV !== 'production') {
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      perf.clearMeasures(name);
	    };
	  }
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});

	function createFnInvoker (fns) {
	  function invoker () {
	    var arguments$1 = arguments;

	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      var cloned = fns.slice();
	      for (var i = 0; i < cloned.length; i++) {
	        cloned[i].apply(null, arguments$1);
	      }
	    } else {
	      // return handler return value for single handlers
	      return fns.apply(null, arguments)
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, def, cur, old, event;
	  for (name in on) {
	    def = cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    /* istanbul ignore if */
	    if (isUndef(cur)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur);
	      }
	      add(event.name, cur, event.once, event.capture, event.passive, event.params);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook) {
	  if (def instanceof VNode) {
	    def = def.data.hook || (def.data.hook = {});
	  }
	  var invoker;
	  var oldHook = def[hookKey];

	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }

	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }

	  invoker.merged = true;
	  def[hookKey] = invoker;
	}

	/*  */

	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      if (process.env.NODE_ENV !== 'production') {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, lastIndex, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    lastIndex = res.length - 1;
	    last = res[lastIndex];
	    //  nested
	    if (Array.isArray(c)) {
	      if (c.length > 0) {
	        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
	        // merge adjacent text nodes
	        if (isTextNode(c[0]) && isTextNode(last)) {
	          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
	          c.shift();
	        }
	        res.push.apply(res, c);
	      }
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        res[lastIndex] = createTextVNode(last.text + c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[lastIndex] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function ensureCtor (comp, base) {
	  if (
	    comp.__esModule ||
	    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
	  ) {
	    comp = comp.default;
	  }
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}

	function createAsyncPlaceholder (
	  factory,
	  data,
	  context,
	  children,
	  tag
	) {
	  var node = createEmptyVNode();
	  node.asyncFactory = factory;
	  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
	  return node
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor,
	  context
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }

	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }

	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }

	  if (isDef(factory.contexts)) {
	    // already pending
	    factory.contexts.push(context);
	  } else {
	    var contexts = factory.contexts = [context];
	    var sync = true;

	    var forceRender = function () {
	      for (var i = 0, l = contexts.length; i < l; i++) {
	        contexts[i].$forceUpdate();
	      }
	    };

	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender();
	      }
	    });

	    var reject = once(function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender();
	      }
	    });

	    var res = factory(resolve, reject);

	    if (isObject(res)) {
	      if (typeof res.then === 'function') {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isDef(res.component) && typeof res.component.then === 'function') {
	        res.component.then(resolve, reject);

	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }

	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            setTimeout(function () {
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender();
	              }
	            }, res.delay || 200);
	          }
	        }

	        if (isDef(res.timeout)) {
	          setTimeout(function () {
	            if (isUndef(factory.resolved)) {
	              reject(
	                process.env.NODE_ENV !== 'production'
	                  ? ("timeout (" + (res.timeout) + "ms)")
	                  : null
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}

	/*  */

	function isAsyncPlaceholder (node) {
	  return node.isComment && node.asyncFactory
	}

	/*  */

	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
	        return c
	      }
	    }
	  }
	}

	/*  */

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add (event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
	  target = undefined;
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var this$1 = this;

	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var this$1 = this;

	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        this$1.$off(event[i], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (!fn) {
	      vm._events[event] = null;
	      return vm
	    }
	    if (fn) {
	      // specific handler
	      var cb;
	      var i$1 = cbs.length;
	      while (i$1--) {
	        cb = cbs[i$1];
	        if (cb === fn || cb.fn === fn) {
	          cbs.splice(i$1, 1);
	          break
	        }
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    if (process.env.NODE_ENV !== 'production') {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        try {
	          cbs[i].apply(vm, args);
	        } catch (e) {
	          handleError(e, vm, ("event handler for \"" + event + "\""));
	        }
	      }
	    }
	    return vm
	  };
	}

	/*  */



	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  var slots = {};
	  if (!children) {
	    return slots
	  }
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    var data = child.data;
	    // remove slot attribute if the node is resolved as a Vue slot node
	    if (data && data.attrs && data.attrs.slot) {
	      delete data.attrs.slot;
	    }
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.fnContext === context) &&
	      data && data.slot != null
	    ) {
	      var name = data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children || []);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      (slots.default || (slots.default = [])).push(child);
	    }
	  }
	  // ignore slots that contains only whitespace
	  for (var name$1 in slots) {
	    if (slots[name$1].every(isWhitespace)) {
	      delete slots[name$1];
	    }
	  }
	  return slots
	}

	function isWhitespace (node) {
	  return (node.isComment && !node.asyncFactory) || node.text === ' '
	}

	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res
	) {
	  res = res || {};
	  for (var i = 0; i < fns.length; i++) {
	    if (Array.isArray(fns[i])) {
	      resolveScopedSlots(fns[i], res);
	    } else {
	      res[fns[i].key] = fns[i].fn;
	    }
	  }
	  return res
	}

	/*  */

	var activeInstance = null;
	var isUpdatingChildComponent = false;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(
	        vm.$el, vnode, hydrating, false /* removeOnly */,
	        vm.$options._parentElm,
	        vm.$options._refElm
	      );
	      // no need for the ref nodes after initial patch
	      // this prevents keeping a detached DOM tree in memory (#5851)
	      vm.$options._parentElm = vm.$options._refElm = null;
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // release circular reference (#6759)
	    if (vm.$vnode) {
	      vm.$vnode.parent = null;
	    }
	  };
	}

	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');

	  var updateComponent;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;

	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure(("vue " + name + " render"), startTag, endTag);

	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure(("vue " + name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }

	  // we set this to vm._watcher inside the watcher's constructor
	  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
	  // component's mounted hook), which relies on vm._watcher being already defined
	  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
	  hydrating = false;

	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}

	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = true;
	  }

	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren
	  var hasChildren = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    parentVnode.data.scopedSlots || // has new scoped slots
	    vm.$scopedSlots !== emptyObject // has old scoped slots
	  );

	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;

	  // update $attrs and $listeners hash
	  // these are also reactive so they may trigger child update if the child
	  // used them during render
	  vm.$attrs = parentVnode.data.attrs || emptyObject;
	  vm.$listeners = listeners || emptyObject;

	  // update props
	  if (propsData && vm.$options.props) {
	    toggleObserving(false);
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      var propOptions = vm.$options.props; // wtf flow?
	      props[key] = validateProp(key, propOptions, propsData, vm);
	    }
	    toggleObserving(true);
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }

	  // update listeners
	  listeners = listeners || emptyObject;
	  var oldListeners = vm.$options._parentListeners;
	  vm.$options._parentListeners = listeners;
	  updateComponentListeners(vm, listeners, oldListeners);

	  // resolve slots + force update if has children
	  if (hasChildren) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = false;
	  }
	}

	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}

	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}

	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}

	function callHook (vm, hook) {
	  // #7573 disable dep collection when invoking lifecycle hooks
	  pushTarget();
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      try {
	        handlers[i].call(vm);
	      } catch (e) {
	        handleError(e, vm, (hook + " hook"));
	      }
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	  popTarget();
	}

	/*  */


	var MAX_UPDATE_COUNT = 100;

	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index$1 = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index$1 = queue.length = activatedChildren.length = 0;
	  has = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;
	  var watcher, id;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index$1 = 0; index$1 < queue.length; index$1++) {
	    watcher = queue[index$1];
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();

	  resetSchedulerState();

	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdatedHooks(updatedQueue);

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}

	function callUpdatedHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  }
	}

	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}

	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index$1 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$1 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options,
	  isRenderWatcher
	) {
	  this.vm = vm;
	  if (isRenderWatcher) {
	    vm._watcher = this;
	  }
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (this.user) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    } else {
	      throw e
	    }
	  } finally {
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	  }
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/*  */

	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch && opts.watch !== nativeWatch) {
	    initWatch(vm, opts.watch);
	  }
	}

	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  if (!isRoot) {
	    toggleObserving(false);
	  }
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      var hyphenatedKey = hyphenate(key);
	      if (isReservedAttribute(hyphenatedKey) ||
	          config.isReservedAttr(hyphenatedKey)) {
	        warn(
	          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive(props, key, value, function () {
	        if (vm.$parent && !isUpdatingChildComponent) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive(props, key, value);
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };

	  for (var key in propsOptions) { loop( key ); }
	  toggleObserving(true);
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var methods = vm.$options.methods;
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods && hasOwn(methods, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a data property."),
	          vm
	        );
	      }
	    }
	    if (props && hasOwn(props, key)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + key + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(key)) {
	      proxy(vm, "_data", key);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	function getData (data, vm) {
	  // #7573 disable dep collection when invoking data getters
	  pushTarget();
	  try {
	    return data.call(vm, vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  } finally {
	    popTarget();
	  }
	}

	var computedWatcherOptions = { lazy: true };

	function initComputed (vm, computed) {
	  // $flow-disable-line
	  var watchers = vm._computedWatchers = Object.create(null);
	  // computed properties are just getters during SSR
	  var isSSR = isServerRendering();

	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    if (process.env.NODE_ENV !== 'production' && getter == null) {
	      warn(
	        ("Getter is missing for computed property \"" + key + "\"."),
	        vm
	      );
	    }

	    if (!isSSR) {
	      // create internal watcher for the computed property.
	      watchers[key] = new Watcher(
	        vm,
	        getter || noop,
	        noop,
	        computedWatcherOptions
	      );
	    }

	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else if (process.env.NODE_ENV !== 'production') {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}

	function defineComputed (
	  target,
	  key,
	  userDef
	) {
	  var shouldCache = !isServerRendering();
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = shouldCache
	      ? createComputedGetter(key)
	      : userDef;
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? shouldCache && userDef.cache !== false
	        ? createComputedGetter(key)
	        : userDef.get
	      : noop;
	    sharedPropertyDefinition.set = userDef.set
	      ? userDef.set
	      : noop;
	  }
	  if (process.env.NODE_ENV !== 'production' &&
	      sharedPropertyDefinition.set === noop) {
	    sharedPropertyDefinition.set = function () {
	      warn(
	        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
	        this
	      );
	    };
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}

	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods[key] == null) {
	        warn(
	          "Method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	      if ((key in vm) && isReserved(key)) {
	        warn(
	          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
	          "Avoid defining component methods that start with _ or $."
	        );
	      }
	    }
	    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
	  }
	}

	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher (
	  vm,
	  expOrFn,
	  handler,
	  options
	) {
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  return vm.$watch(expOrFn, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    if (isPlainObject(cb)) {
	      return createWatcher(vm, expOrFn, cb, options)
	    }
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	/*  */

	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}

	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    toggleObserving(false);
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      } else {
	        defineReactive(vm, key, result[key]);
	      }
	    });
	    toggleObserving(true);
	  }
	}

	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    var result = Object.create(null);
	    var keys = hasSymbol
	      ? Reflect.ownKeys(inject).filter(function (key) {
	        /* istanbul ignore next */
	        return Object.getOwnPropertyDescriptor(inject, key).enumerable
	      })
	      : Object.keys(inject);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var provideKey = inject[key].from;
	      var source = vm;
	      while (source) {
	        if (source._provided && hasOwn(source._provided, provideKey)) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	      if (!source) {
	        if ('default' in inject[key]) {
	          var provideDefault = inject[key].default;
	          result[key] = typeof provideDefault === 'function'
	            ? provideDefault.call(vm)
	            : provideDefault;
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn(("Injection \"" + key + "\" not found"), vm);
	        }
	      }
	    }
	    return result
	  }
	}

	/*  */

	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    ret = new Array(keys.length);
	    for (i = 0, l = keys.length; i < l; i++) {
	      key = keys[i];
	      ret[i] = render(val[key], key, i);
	    }
	  }
	  if (isDef(ret)) {
	    (ret)._isVList = true;
	  }
	  return ret
	}

	/*  */

	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  var nodes;
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
	        warn(
	          'slot v-bind without argument expects an Object',
	          this
	        );
	      }
	      props = extend(extend({}, bindObject), props);
	    }
	    nodes = scopedSlotFn(props) || fallback;
	  } else {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes) {
	      if (process.env.NODE_ENV !== 'production' && slotNodes._rendered) {
	        warn(
	          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	          "- this will likely cause render errors.",
	          this
	        );
	      }
	      slotNodes._rendered = true;
	    }
	    nodes = slotNodes || fallback;
	  }

	  var target = props && props.slot;
	  if (target) {
	    return this.$createElement('template', { slot: target }, nodes)
	  } else {
	    return nodes
	  }
	}

	/*  */

	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}

	/*  */

	function isKeyNotMatch (expect, actual) {
	  if (Array.isArray(expect)) {
	    return expect.indexOf(actual) === -1
	  } else {
	    return expect !== actual
	  }
	}

	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInKeyCode,
	  eventKeyName,
	  builtInKeyName
	) {
	  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
	  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
	    return isKeyNotMatch(builtInKeyName, eventKeyName)
	  } else if (mappedKeyCode) {
	    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
	  } else if (eventKeyName) {
	    return hyphenate(eventKeyName) !== key
	  }
	}

	/*  */

	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp,
	  isSync
	) {
	  if (value) {
	    if (!isObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      var loop = function ( key ) {
	        if (
	          key === 'class' ||
	          key === 'style' ||
	          isReservedAttribute(key)
	        ) {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        if (!(key in hash)) {
	          hash[key] = value[key];

	          if (isSync) {
	            var on = data.on || (data.on = {});
	            on[("update:" + key)] = function ($event) {
	              value[key] = $event;
	            };
	          }
	        }
	      };

	      for (var key in value) { loop( key ); }
	    }
	  }
	  return data
	}

	/*  */

	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var cached = this._staticTrees || (this._staticTrees = []);
	  var tree = cached[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree.
	  if (tree && !isInFor) {
	    return tree
	  }
	  // otherwise, render a fresh tree.
	  tree = cached[index] = this.$options.staticRenderFns[index].call(
	    this._renderProxy,
	    null,
	    this // for render fns generated for functional component templates
	  );
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}

	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}

	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}

	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}

	/*  */

	function bindObjectListeners (data, value) {
	  if (value) {
	    if (!isPlainObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-on without argument expects an Object value',
	        this
	      );
	    } else {
	      var on = data.on = data.on ? extend({}, data.on) : {};
	      for (var key in value) {
	        var existing = on[key];
	        var ours = value[key];
	        on[key] = existing ? [].concat(existing, ours) : ours;
	      }
	    }
	  }
	  return data
	}

	/*  */

	function installRenderHelpers (target) {
	  target._o = markOnce;
	  target._n = toNumber;
	  target._s = toString;
	  target._l = renderList;
	  target._t = renderSlot;
	  target._q = looseEqual;
	  target._i = looseIndexOf;
	  target._m = renderStatic;
	  target._f = resolveFilter;
	  target._k = checkKeyCodes;
	  target._b = bindObjectProps;
	  target._v = createTextVNode;
	  target._e = createEmptyVNode;
	  target._u = resolveScopedSlots;
	  target._g = bindObjectListeners;
	}

	/*  */

	function FunctionalRenderContext (
	  data,
	  props,
	  children,
	  parent,
	  Ctor
	) {
	  var options = Ctor.options;
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var contextVm;
	  if (hasOwn(parent, '_uid')) {
	    contextVm = Object.create(parent);
	    // $flow-disable-line
	    contextVm._original = parent;
	  } else {
	    // the context vm passed in is a functional context as well.
	    // in this case we want to make sure we are able to get a hold to the
	    // real context instance.
	    contextVm = parent;
	    // $flow-disable-line
	    parent = parent._original;
	  }
	  var isCompiled = isTrue(options._compiled);
	  var needNormalization = !isCompiled;

	  this.data = data;
	  this.props = props;
	  this.children = children;
	  this.parent = parent;
	  this.listeners = data.on || emptyObject;
	  this.injections = resolveInject(options.inject, parent);
	  this.slots = function () { return resolveSlots(children, parent); };

	  // support for compiled functional template
	  if (isCompiled) {
	    // exposing $options for renderStatic()
	    this.$options = options;
	    // pre-resolve slots for renderSlot()
	    this.$slots = this.slots();
	    this.$scopedSlots = data.scopedSlots || emptyObject;
	  }

	  if (options._scopeId) {
	    this._c = function (a, b, c, d) {
	      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
	      if (vnode && !Array.isArray(vnode)) {
	        vnode.fnScopeId = options._scopeId;
	        vnode.fnContext = parent;
	      }
	      return vnode
	    };
	  } else {
	    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
	  }
	}

	installRenderHelpers(FunctionalRenderContext.prototype);

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  contextVm,
	  children
	) {
	  var options = Ctor.options;
	  var props = {};
	  var propOptions = options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || emptyObject);
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }

	  var renderContext = new FunctionalRenderContext(
	    data,
	    props,
	    children,
	    contextVm,
	    Ctor
	  );

	  var vnode = options.render.call(null, renderContext._c, renderContext);

	  if (vnode instanceof VNode) {
	    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
	  } else if (Array.isArray(vnode)) {
	    var vnodes = normalizeChildren(vnode) || [];
	    var res = new Array(vnodes.length);
	    for (var i = 0; i < vnodes.length; i++) {
	      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
	    }
	    return res
	  }
	}

	function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
	  // #7817 clone node before setting fnContext, otherwise if the node is reused
	  // (e.g. it was from a cached normal slot) the fnContext causes named slots
	  // that should not be matched to match.
	  var clone = cloneVNode(vnode);
	  clone.fnContext = contextVm;
	  clone.fnOptions = options;
	  if (data.slot) {
	    (clone.data || (clone.data = {})).slot = data.slot;
	  }
	  return clone
	}

	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}

	/*  */




	// Register the component hook to weex native render engine.
	// The hook will be triggered by native, not javascript.


	// Updates the state of the component to weex native render engine.

	/*  */

	// https://github.com/Hanks10100/weex-native-directive/tree/master/component

	// listening on native callback

	/*  */

	/*  */

	// inline hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (
	    vnode,
	    hydrating,
	    parentElm,
	    refElm
	  ) {
	    if (
	      vnode.componentInstance &&
	      !vnode.componentInstance._isDestroyed &&
	      vnode.data.keepAlive
	    ) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    } else {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance,
	        parentElm,
	        refElm
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    }
	  },

	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },

	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },

	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};

	var hooksToMerge = Object.keys(componentVNodeHooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }

	  var baseCtor = context.$options._base;

	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  var asyncFactory;
	  if (isUndef(Ctor.cid)) {
	    asyncFactory = Ctor;
	    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
	    if (Ctor === undefined) {
	      // return a placeholder node for async component, which is rendered
	      // as a comment node but preserves all the raw information for the node.
	      // the information will be used for async server-rendering and hydration.
	      return createAsyncPlaceholder(
	        asyncFactory,
	        data,
	        context,
	        children,
	        tag
	      )
	    }
	  }

	  data = data || {};

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }

	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  // so it gets processed during parent component patch.
	  data.on = data.nativeOn;

	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners & slot

	    // work around flow
	    var slot = data.slot;
	    data = {};
	    if (slot) {
	      data.slot = slot;
	    }
	  }

	  // install component management hooks onto the placeholder node
	  installComponentHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
	    asyncFactory
	  );

	  // Weex specific: invoke recycle-list optimized @render function for
	  // extracting cell-slot template.
	  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
	  /* istanbul ignore if */
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent, // activeInstance in lifecycle state
	  parentElm,
	  refElm
	) {
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    _parentVnode: vnode,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnode.componentOptions.Ctor(options)
	}

	function installComponentHooks (data) {
	  var hooks = data.hook || (data.hook = {});
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    hooks[key] = componentVNodeHooks[key];
	  }
	}

	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  if (isDef(on[event])) {
	    on[event] = [data.model.callback].concat(on[event]);
	  } else {
	    on[event] = data.model.callback;
	  }
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  // object syntax in v-bind
	  if (isDef(data) && isDef(data.is)) {
	    tag = data.is;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // warn against non-primitive key
	  if (process.env.NODE_ENV !== 'production' &&
	    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
	  ) {
	    {
	      warn(
	        'Avoid using non-primitive value as key, ' +
	        'use string/number value instead.',
	        context
	      );
	    }
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (Array.isArray(vnode)) {
	    return vnode
	  } else if (isDef(vnode)) {
	    if (isDef(ns)) { applyNS(vnode, ns); }
	    if (isDef(data)) { registerDeepBindings(data); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns, force) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    ns = undefined;
	    force = true;
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && (
	        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
	        applyNS(child, ns, force);
	      }
	    }
	  }
	}

	// ref #5318
	// necessary to ensure parent re-render when deep bindings like :style and
	// :class are used on slot nodes
	function registerDeepBindings (data) {
	  if (isObject(data.style)) {
	    traverse(data.style);
	  }
	  if (isObject(data.class)) {
	    traverse(data.class);
	  }
	}

	/*  */

	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null; // v-once cached trees
	  var options = vm.$options;
	  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

	  // $attrs & $listeners are exposed for easier HOC creation.
	  // they need to be reactive so that HOCs using them are always updated
	  var parentData = parentVnode && parentVnode.data;

	  /* istanbul ignore else */
	  if (process.env.NODE_ENV !== 'production') {
	    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
	    }, true);
	    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
	    }, true);
	  } else {
	    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
	    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
	  }
	}

	function renderMixin (Vue) {
	  // install runtime convenience helpers
	  installRenderHelpers(Vue.prototype);

	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var _parentVnode = ref._parentVnode;

	    // reset _rendered flag on slots for duplicate slot check
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in vm.$slots) {
	        // $flow-disable-line
	        vm.$slots[key]._rendered = false;
	      }
	    }

	    if (_parentVnode) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
	    }

	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        if (vm.$options.renderError) {
	          try {
	            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
	          } catch (e) {
	            handleError(e, vm, "renderError");
	            vnode = vm._vnode;
	          }
	        } else {
	          vnode = vm._vnode;
	        }
	      } else {
	        vnode = vm._vnode;
	      }
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	}

	/*  */

	var uid$3 = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$3++;

	    var startTag, endTag;
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      startTag = "vue-perf-start:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }

	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');

	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(("vue " + (vm._name) + " init"), startTag, endTag);
	    }

	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  var parentVnode = options._parentVnode;
	  opts.parent = options.parent;
	  opts._parentVnode = parentVnode;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;

	  var vnodeComponentOptions = parentVnode.componentOptions;
	  opts.propsData = vnodeComponentOptions.propsData;
	  opts._parentListeners = vnodeComponentOptions.listeners;
	  opts._renderChildren = vnodeComponentOptions.children;
	  opts._componentTag = vnodeComponentOptions.tag;

	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var extended = Ctor.extendOptions;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
	    }
	  }
	  return modified
	}

	function dedupe (latest, extended, sealed) {
	  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
	  // between merges
	  if (Array.isArray(latest)) {
	    var res = [];
	    sealed = Array.isArray(sealed) ? sealed : [sealed];
	    extended = Array.isArray(extended) ? extended : [extended];
	    for (var i = 0; i < latest.length; i++) {
	      // push original options and not sealed options to exclude duplicated options
	      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
	        res.push(latest[i]);
	      }
	    }
	    return res
	  } else {
	    return latest
	  }
	}

	function Vue (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	renderMixin(Vue);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	    if (installedPlugins.indexOf(plugin) > -1) {
	      return this
	    }

	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    installedPlugins.push(plugin);
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }

	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production' && name) {
	      validateComponentName(name);
	    }

	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;

	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }

	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;

	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }

	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);

	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}

	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production' && type === 'component') {
	          validateComponentName(id);
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */

	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (Array.isArray(pattern)) {
	    return pattern.indexOf(name) > -1
	  } else if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}

	function pruneCache (keepAliveInstance, filter) {
	  var cache = keepAliveInstance.cache;
	  var keys = keepAliveInstance.keys;
	  var _vnode = keepAliveInstance._vnode;
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cache, key, keys, _vnode);
	      }
	    }
	  }
	}

	function pruneCacheEntry (
	  cache,
	  key,
	  keys,
	  current
	) {
	  var cached$$1 = cache[key];
	  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
	    cached$$1.componentInstance.$destroy();
	  }
	  cache[key] = null;
	  remove(keys, key);
	}

	var patternTypes = [String, RegExp, Array];

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,

	  props: {
	    include: patternTypes,
	    exclude: patternTypes,
	    max: [String, Number]
	  },

	  created: function created () {
	    this.cache = Object.create(null);
	    this.keys = [];
	  },

	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this$1.cache) {
	      pruneCacheEntry(this$1.cache, key, this$1.keys);
	    }
	  },

	  mounted: function mounted () {
	    var this$1 = this;

	    this.$watch('include', function (val) {
	      pruneCache(this$1, function (name) { return matches(val, name); });
	    });
	    this.$watch('exclude', function (val) {
	      pruneCache(this$1, function (name) { return !matches(val, name); });
	    });
	  },

	  render: function render () {
	    var slot = this.$slots.default;
	    var vnode = getFirstComponentChild(slot);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      var ref = this;
	      var include = ref.include;
	      var exclude = ref.exclude;
	      if (
	        // not included
	        (include && (!name || !matches(include, name))) ||
	        // excluded
	        (exclude && name && matches(exclude, name))
	      ) {
	        return vnode
	      }

	      var ref$1 = this;
	      var cache = ref$1.cache;
	      var keys = ref$1.keys;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (cache[key]) {
	        vnode.componentInstance = cache[key].componentInstance;
	        // make current key freshest
	        remove(keys, key);
	        keys.push(key);
	      } else {
	        cache[key] = vnode;
	        keys.push(key);
	        // prune oldest entry
	        if (this.max && keys.length > parseInt(this.max)) {
	          pruneCacheEntry(cache, keys[0], keys, this._vnode);
	        }
	      }

	      vnode.data.keepAlive = true;
	    }
	    return vnode || (slot && slot[0])
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);

	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive
	  };

	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue);

	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: isServerRendering
	});

	Object.defineProperty(Vue.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode && this.$vnode.ssrContext
	  }
	});

	// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
	  value: FunctionalRenderContext
	});

	Vue.version = '2.5.16';

	/*  */

	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode && childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode && parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return renderClass(data.staticClass, data.class)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function renderClass (
	  staticClass,
	  dynamicClass
	) {
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  if (Array.isArray(value)) {
	    return stringifyArray(value)
	  }
	  if (isObject(value)) {
	    return stringifyObject(value)
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function stringifyArray (value) {
	  var res = '';
	  var stringified;
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	      if (res) { res += ' '; }
	      res += stringified;
	    }
	  }
	  return res
	}

	function stringifyObject (value) {
	  var res = '';
	  for (var key in value) {
	    if (value[key]) {
	      if (res) { res += ' '; }
	      res += key;
	    }
	  }
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template,blockquote,iframe,tfoot'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);



	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	var isTextInputType = makeMap('text,number,password,search,email,tel,url');

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setStyleScope (node, scopeId) {
	  node.setAttribute(scopeId, '');
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setStyleScope: setStyleScope
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!isDef(key)) { return }

	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (!Array.isArray(refs[key])) {
	        refs[key] = [ref];
	      } else if (refs[key].indexOf(ref) < 0) {
	        // $flow-disable-line
	        refs[key].push(ref);
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

	function sameVnode (a, b) {
	  return (
	    a.key === b.key && (
	      (
	        a.tag === b.tag &&
	        a.isComment === b.isComment &&
	        isDef(a.data) === isDef(b.data) &&
	        sameInputType(a, b)
	      ) || (
	        isTrue(a.isAsyncPlaceholder) &&
	        a.asyncFactory === b.asyncFactory &&
	        isUndef(b.asyncFactory.error)
	      )
	    )
	  )
	}

	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove () {
	      if (--remove.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove.listeners = listeners;
	    return remove
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function isUnknownElement$$1 (vnode, inVPre) {
	    return (
	      !inVPre &&
	      !vnode.ns &&
	      !(
	        config.ignoredElements.length &&
	        config.ignoredElements.some(function (ignore) {
	          return isRegExp(ignore)
	            ? ignore.test(vnode.tag)
	            : ignore === vnode.tag
	        })
	      ) &&
	      config.isUnknownElement(vnode.tag)
	    )
	  }

	  var creatingElmInVPre = 0;

	  function createElm (
	    vnode,
	    insertedVnodeQueue,
	    parentElm,
	    refElm,
	    nested,
	    ownerArray,
	    index
	  ) {
	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // This vnode was used in a previous render!
	      // now it's used as a new node, overwriting its elm would cause
	      // potential patch errors down the road when it's used as an insertion
	      // reference node. Instead, we clone the node on-demand before creating
	      // associated DOM element for it.
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }

	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          creatingElmInVPre++;
	        }
	        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }

	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        creatingElmInVPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      vnode.data.pendingInsert = null;
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref$$1) {
	    if (isDef(parent)) {
	      if (isDef(ref$$1)) {
	        if (ref$$1.parentNode === parent) {
	          nodeOps.insertBefore(parent, elm, ref$$1);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      if (process.env.NODE_ENV !== 'production') {
	        checkDuplicateKeys(children);
	      }
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.fnScopeId)) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    } else {
	      var ancestor = vnode;
	      while (ancestor) {
	        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	          nodeOps.setStyleScope(vnode.elm, i);
	        }
	        ancestor = ancestor.parent;
	      }
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      i !== vnode.fnContext &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    if (process.env.NODE_ENV !== 'production') {
	      checkDuplicateKeys(newCh);
	    }

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key)
	          ? oldKeyToIdx[newStartVnode.key]
	          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	        } else {
	          vnodeToMove = oldCh[idxInOld];
	          if (sameVnode(vnodeToMove, newStartVnode)) {
	            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	          }
	        }
	        newStartVnode = newCh[++newStartIdx];
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function checkDuplicateKeys (children) {
	    var seenKeys = {};
	    for (var i = 0; i < children.length; i++) {
	      var vnode = children[i];
	      var key = vnode.key;
	      if (isDef(key)) {
	        if (seenKeys[key]) {
	          warn(
	            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
	            vnode.context
	          );
	        } else {
	          seenKeys[key] = true;
	        }
	      }
	    }
	  }

	  function findIdxInOld (node, oldCh, start, end) {
	    for (var i = start; i < end; i++) {
	      var c = oldCh[i];
	      if (isDef(c) && sameVnode(node, c)) { return i }
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }

	    var elm = vnode.elm = oldVnode.elm;

	    if (isTrue(oldVnode.isAsyncPlaceholder)) {
	      if (isDef(vnode.asyncFactory.resolved)) {
	        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
	      } else {
	        vnode.isAsyncPlaceholder = true;
	      }
	      return
	    }

	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }

	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }

	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var hydrationBailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  // Note: style is excluded because it relies on initial clone for future
	  // deep updates (#7063).
	  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
	    var i;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    inVPre = inVPre || (data && data.pre);
	    vnode.elm = elm;

	    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
	      vnode.isAsyncPlaceholder = true;
	      return true
	    }
	    // assert node match
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode, inVPre)) {
	        return false
	      }
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          // v-html and domProps: innerHTML
	          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
	            if (i !== elm.innerHTML) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('server innerHTML: ', i);
	                console.warn('client innerHTML: ', elm.innerHTML);
	              }
	              return false
	            }
	          } else {
	            // iterate and compare children lists
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
	                childrenMatch = false;
	                break
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false
	            }
	          }
	        }
	      }
	      if (isDef(data)) {
	        var fullInvoke = false;
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            fullInvoke = true;
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	        if (!fullInvoke && data['class']) {
	          // ensure collecting deps for deep class bindings for future updates
	          traverse(data['class']);
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode, inVPre) {
	    if (isDef(vnode.tag)) {
	      return vnode.tag.indexOf('vue-component') === 0 || (
	        !isUnknownElement$$1(vnode, inVPre) &&
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }

	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm$1 = nodeOps.parentNode(oldElm);

	        // create new node
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm$1,
	          nodeOps.nextSibling(oldElm)
	        );

	        // update parent placeholder node element, recursively
	        if (isDef(vnode.parent)) {
	          var ancestor = vnode.parent;
	          var patchable = isPatchable(vnode);
	          while (ancestor) {
	            for (var i = 0; i < cbs.destroy.length; ++i) {
	              cbs.destroy[i](ancestor);
	            }
	            ancestor.elm = vnode.elm;
	            if (patchable) {
	              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	                cbs.create[i$1](emptyNode, ancestor);
	              }
	              // #6513
	              // invoke insert hooks that may have been merged by create hooks.
	              // e.g. for directives that uses the "inserted" hook.
	              var insert = ancestor.data.hook.insert;
	              if (insert.merged) {
	                // start at index 1 to avoid re-invoking component mounted hook
	                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
	                  insert.fns[i$2]();
	                }
	              }
	            } else {
	              registerRef(ancestor);
	            }
	            ancestor = ancestor.parent;
	          }
	        }

	        // destroy old node
	        if (isDef(parentElm$1)) {
	          removeVnodes(parentElm$1, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode, 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode, 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    // $flow-disable-line
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      // $flow-disable-line
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  // $flow-disable-line
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  var opts = vnode.componentOptions;
	  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
	    return
	  }
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  // #6666: IE/Edge forces progress value down to 1 before setting a max
	  /* istanbul ignore if */
	  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (el.tagName.indexOf('-') > -1) {
	    baseSetAttr(el, key, value);
	  } else if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      // technically allowfullscreen is a boolean attribute for <iframe>,
	      // but Flash expects a value of "true" when used on <embed> tag
	      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
	        ? 'true'
	        : key;
	      el.setAttribute(key, value);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    baseSetAttr(el, key, value);
	  }
	}

	function baseSetAttr (el, key, value) {
	  if (isFalsyAttrValue(value)) {
	    el.removeAttribute(key);
	  } else {
	    // #7138: IE10 & 11 fires input event when setting placeholder on
	    // <textarea>... block the first input event and remove the blocker
	    // immediately.
	    /* istanbul ignore if */
	    if (
	      isIE && !isIE9 &&
	      el.tagName === 'TEXTAREA' &&
	      key === 'placeholder' && !el.__ieph
	    ) {
	      var blocker = function (e) {
	        e.stopImmediatePropagation();
	        el.removeEventListener('input', blocker);
	      };
	      el.addEventListener('input', blocker);
	      // $flow-disable-line
	      el.__ieph = true; /* IE placeholder patched */
	    }
	    el.setAttribute(key, value);
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	/*  */









	// add a raw attr (use this in preTransforms)








	// note: this only removes the attr from the Array (attrsList) so that it
	// doesn't get processed by processAttrs.
	// By default it does NOT remove it from the map (attrsMap) because the map is
	// needed during codegen.

	/*  */

	/**
	 * Cross-platform code generation for component v-model
	 */


	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */

	/*  */

	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';

	/*  */

	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    var event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  // This was originally intended to fix #4521 but no longer necessary
	  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
	  /* istanbul ignore if */
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}

	var target$1;

	function createOnceHandler (handler, event, capture) {
	  var _target = target$1; // save current target element in closure
	  return function onceHandler () {
	    var res = handler.apply(null, arguments);
	    if (res !== null) {
	      remove$2(event, onceHandler, capture, _target);
	    }
	  }
	}

	function add$1 (
	  event,
	  handler,
	  once$$1,
	  capture,
	  passive
	) {
	  handler = withMacroTask(handler);
	  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
	  target$1.addEventListener(
	    event,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}

	function remove$2 (
	  event,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(
	    event,
	    handler._withTask || handler,
	    capture
	  );
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
	  target$1 = undefined;
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (isUndef(props[key])) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	      // #6601 work around Chrome version <= 55 bug where single textNode
	      // replaced by innerHTML/textContent retains its parentNode property
	      if (elm.childNodes.length === 1) {
	        elm.removeChild(elm.childNodes[0]);
	      }
	    }

	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue (elm, checkVal) {
	  return (!elm.composing && (
	    elm.tagName === 'OPTION' ||
	    isNotInFocusAndDirty(elm, checkVal) ||
	    isDirtyWithModifiers(elm, checkVal)
	  ))
	}

	function isNotInFocusAndDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is
	  // not equal to the updated value
	  var notInFocus = true;
	  // #6157
	  // work around IE bug when accessing document.activeElement in an iframe
	  try { notInFocus = document.activeElement !== elm; } catch (e) {}
	  return notInFocus && elm.value !== checkVal
	}

	function isDirtyWithModifiers (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if (isDef(modifiers)) {
	    if (modifiers.lazy) {
	      // inputs with lazy should only be updated when not in focus
	      return false
	    }
	    if (modifiers.number) {
	      return toNumber(value) !== toNumber(newVal)
	    }
	    if (modifiers.trim) {
	      return value.trim() !== newVal.trim()
	    }
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (
	        childNode && childNode.data &&
	        (styleData = normalizeStyleData(childNode.data))
	      ) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};

	var vendorNames = ['Webkit', 'Moz', 'ms'];

	var emptyStyle;
	var normalize = cached(function (prop) {
	  emptyStyle = emptyStyle || document.createElement('div').style;
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in emptyStyle)) {
	    return prop
	  }
	  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < vendorNames.length; i++) {
	    var name = vendorNames[i] + capName;
	    if (name in emptyStyle) {
	      return name
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likely wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	    if (!el.classList.length) {
	      el.removeAttribute('class');
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    cur = cur.trim();
	    if (cur) {
	      el.setAttribute('class', cur);
	    } else {
	      el.removeAttribute('class');
	    }
	  }
	}

	/*  */

	function resolveTransition (def) {
	  if (!def) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def === 'object') {
	    var res = {};
	    if (def.css !== false) {
	      extend(res, autoCssTransition(def.name || 'v'));
	    }
	    extend(res, def);
	    return res
	  } else if (typeof def === 'string') {
	    return autoCssTransition(def)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser
	  ? window.requestAnimationFrame
	    ? window.requestAnimationFrame.bind(window)
	    : setTimeout
	  : /* istanbul ignore next */ function (fn) { return fn(); };

	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
	  if (transitionClasses.indexOf(cls) < 0) {
	    transitionClasses.push(cls);
	    addClass(el, cls);
	  }
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }

	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;

	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;

	  var explicitEnterDuration = toNumber(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode, 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled) {
	        addTransitionClass(el, toClass);
	        if (!userWantsControl) {
	          if (isValidDuration(explicitEnterDuration)) {
	            setTimeout(cb, explicitEnterDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data) || el.nodeType !== 1) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (isDef(el._leaveCb)) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);

	  var explicitLeaveDuration = toNumber(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled) {
	          addTransitionClass(el, leaveToClass);
	          if (!userWantsControl) {
	            if (isValidDuration(explicitLeaveDuration)) {
	              setTimeout(cb, explicitLeaveDuration);
	            } else {
	              whenTransitionEnds(el, type, cb);
	            }
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}

	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}

	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}

	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var directive = {
	  inserted: function inserted (el, binding, vnode, oldVnode) {
	    if (vnode.tag === 'select') {
	      // #6903
	      if (oldVnode.elm && !oldVnode.elm._vOptions) {
	        mergeVNodeHook(vnode, 'postpatch', function () {
	          directive.componentUpdated(el, binding, vnode);
	        });
	      } else {
	        setSelected(el, binding, vnode.context);
	      }
	      el._vOptions = [].map.call(el.options, getValue);
	    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },

	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var prevOptions = el._vOptions;
	      var curOptions = el._vOptions = [].map.call(el.options, getValue);
	      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
	        // trigger change event if
	        // no matching option found for at least one value
	        var needReset = el.multiple
	          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
	          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  actuallySetSelected(el, binding, vm);
	  /* istanbul ignore if */
	  if (isIE || isEdge) {
	    setTimeout(function () {
	      actuallySetSelected(el, binding, vm);
	    }, 0);
	  }
	}

	function actuallySetSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  return options.every(function (o) { return !looseEqual(o, value); })
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition$$1) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (!value === !oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    if (transition$$1) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: directive,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? child.isComment
	        ? id + 'comment'
	        : id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;

	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (
	      oldChild &&
	      oldChild.data &&
	      !isSameChild(child, oldChild) &&
	      !isAsyncPlaceholder(oldChild) &&
	      // #6687 component root is a comment node
	      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
	    ) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        if (isAsyncPlaceholder(child)) {
	          return oldRawChild
	        }
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    // assign to this to avoid being removed in tree-shaking
	    // $flow-disable-line
	    this._reflow = document.body.offsetHeight;

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      /* istanbul ignore if */
	      if (this._hasMove) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue.config.mustUseProp = mustUseProp;
	Vue.config.isReservedTag = isReservedTag;
	Vue.config.isReservedAttr = isReservedAttr;
	Vue.config.getTagNamespace = getTagNamespace;
	Vue.config.isUnknownElement = isUnknownElement;

	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives);
	extend(Vue.options.components, platformComponents);

	// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop;

	// public mount method
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	if (inBrowser) {
	  setTimeout(function () {
	    if (config.devtools) {
	      if (devtools) {
	        devtools.emit('init', Vue);
	      } else if (
	        process.env.NODE_ENV !== 'production' &&
	        process.env.NODE_ENV !== 'test' &&
	        isChrome
	      ) {
	        console[console.info ? 'info' : 'log'](
	          'Download the Vue Devtools extension for a better development experience:\n' +
	          'https://github.com/vuejs/vue-devtools'
	        );
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' &&
	      process.env.NODE_ENV !== 'test' &&
	      config.productionTip !== false &&
	      typeof console !== 'undefined'
	    ) {
	      console[console.info ? 'info' : 'log'](
	        "You are running Vue in development mode.\n" +
	        "Make sure to turn on production mode when deploying for production.\n" +
	        "See more tips at https://vuejs.org/guide/deployment.html"
	      );
	    }
	  }, 0);
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-RadioButton[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; min-height: 36px; position: relative; } .ms-RadioButton .ms-Label[data-v-9afc786c] { font-size: 14px; padding: 0 0 0 26px; cursor: pointer; display: inline-block; } .ms-RadioButton-input[data-v-9afc786c] { position: absolute; opacity: 0; } .ms-RadioButton-field[data-v-9afc786c]::before { content: ''; display: inline-block; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; width: 20px; height: 20px; cursor: pointer; font-weight: normal; position: absolute; box-sizing: border-box; transition-property: border-color; transition-duration: 200ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); border-radius: 50%; } .ms-RadioButton-field[data-v-9afc786c]::after { content: ''; width: 0; height: 0; border-radius: 50%; position: absolute; top: 8px; left: 8px; bottom: 0; right: 0; transition-property: top, left, width, height; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); box-sizing: border-box; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field[data-v-9afc786c]::after { color: #600000; } } .ms-RadioButton-field[data-v-9afc786c] { display: inline-block; cursor: pointer; margin-top: 8px; position: relative; outline: 0; vertical-align: top; } .ms-RadioButton-field[data-v-9afc786c]:hover::before, .ms-RadioButton-field[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field:hover .ms-Label[data-v-9afc786c], .ms-RadioButton-field:focus .ms-Label[data-v-9afc786c] { color: \"[theme:black, default: #000000]\"; } .ms-RadioButton-field.is-disabled[data-v-9afc786c] { cursor: default; } .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled[data-v-9afc786c]::before { border-color: #600000; } } .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-disabled .ms-Label[data-v-9afc786c] { color: #600000; } } .ms-RadioButton-field.is-disabled[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-disabled[data-v-9afc786c]:focus::before { border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-RadioButton-field.in-focus[data-v-9afc786c]::before { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border: 2px solid \"[theme:themePrimary, default: #0078d7]\"; background-color: transparent; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::before { border-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: \"[theme:themePrimary, default: #0078d7]\"; top: 5px; left: 5px; width: 10px; height: 10px; } @media screen and (-ms-high-contrast: active) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-RadioButton-field.is-checked[data-v-9afc786c]::after { background-color: #37006E; } } .ms-RadioButton-field.is-checked[data-v-9afc786c]:hover::before, .ms-RadioButton-field.is-checked[data-v-9afc786c]:focus::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-RadioButton-field.is-checked.in-focus[data-v-9afc786c]::before { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-ChoiceFieldGroup[data-v-9afc786c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; margin-bottom: 4px; } .ms-ChoiceFieldGroup .ms-ChoiceFieldGroup-list[data-v-9afc786c] { padding: 0; margin: 0; list-style: none; } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ContextualMenu[data-v-94d26018] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; display: block; min-width: 180px; max-width: 220px; list-style-type: none; position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu.is-hidden[data-v-94d26018] { display: none; } .ms-ContextualMenu-item[data-v-94d26018] { position: relative; } .ms-ContextualMenu-link[data-v-94d26018] { box-sizing: border-box; text-decoration: none; color: \"[theme:neutralPrimary, default: #333333]\"; border: 1px solid transparent; cursor: pointer; display: block; height: 36px; overflow: hidden; line-height: 34px; padding: 0 16px 0 25px; position: relative; text-overflow: ellipsis; white-space: nowrap; } .ms-ContextualMenu-link[data-v-94d26018]:hover, .ms-ContextualMenu-link[data-v-94d26018]:active, .ms-ContextualMenu-link[data-v-94d26018]:focus { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:hover .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-link:active .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-link:focus .ms-ContextualMenu-subMenuIcon[data-v-94d26018] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link[data-v-94d26018]:focus { outline: transparent; border: 1px solid \"[theme:neutralSecondary, default: #666666]\"; } .ms-ContextualMenu-link.is-selected[data-v-94d26018] { background-color: \"[theme:neutralQuaternaryAlt, default: #dadada]\"; color: \"[theme:black, default: #000000]\"; font-weight: 600; } .ms-ContextualMenu-link.is-selected ~ .ms-ContextualMenu-subMenuIcon[data-v-94d26018] { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover { background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu-link.is-disabled[data-v-94d26018] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: \"[theme:white, default: #ffffff]\"; pointer-events: none; } .ms-ContextualMenu-link.is-disabled[data-v-94d26018]:active, .ms-ContextualMenu-link.is-disabled[data-v-94d26018]:focus { border-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu-link.is-disabled .ms-Icon[data-v-94d26018] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; pointer-events: none; cursor: default; } .ms-ContextualMenu-item.ms-ContextualMenu-item--divider[data-v-94d26018] { cursor: default; display: block; height: 1px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; position: relative; } .ms-ContextualMenu-item.ms-ContextualMenu-item--header[data-v-94d26018] { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; text-transform: uppercase; height: 36px; line-height: 36px; padding: 0 18px; } .ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu .ms-ContextualMenu[data-v-94d26018] { position: absolute; top: -1px; left: 178px; } .ms-ContextualMenu-subMenuIcon[data-v-94d26018], .ms-ContextualMenu-caretRight[data-v-94d26018] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 8px; font-weight: 600; width: 24px; height: 36px; line-height: 36px; position: absolute; text-align: center; top: 0; right: 0; z-index: 1; pointer-events: none; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-item.ms-ContextualMenu-item--header[data-v-94d26018] { padding: 0 16px 0 26px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018] { background-color: \"[theme:white, default: #ffffff]\"; font-weight: 600; color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]::after { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; color: \"[theme:neutralPrimary, default: #333333]\"; content: '\\E73E'; font-size: 10px; font-weight: 800; height: 36px; line-height: 36px; position: absolute; left: 7px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:focus { color: \"[theme:neutralDark, default: #212121]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:hover::after, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:focus::after { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:active { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected[data-v-94d26018]:active::after { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-ContextualMenu-link[data-v-94d26018], .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-ContextualMenu-link[data-v-94d26018] { padding-left: 40px; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-Icon[data-v-94d26018], .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-Icon[data-v-94d26018] { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; text-align: center; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons[data-v-94d26018] { width: 220px; } .ms-ContextualHost[data-v-94d26018] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned[data-v-94d26018] { position: absolute; margin: 0; } .ms-ContextualHost.is-open[data-v-94d26018] { display: inline-block; } .ms-ContextualHost-beak[data-v-94d26018] { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018], .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018] { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018] { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018] { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak[data-v-94d26018] { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak[data-v-94d26018] { display: block; bottom: -10px; } .ms-ContextualHost-main[data-v-94d26018] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close[data-v-94d26018] { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title[data-v-94d26018] { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak[data-v-94d26018] { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost[data-v-94d26018] { margin: 16px; } .ms-ContextualHost.is-positioned[data-v-94d26018] { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak[data-v-94d26018], .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak[data-v-94d26018] { display: block; } } .ms-Icon.ms-Icon--ChevronRight[data-v-94d26018]::before { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"8\" height=\"8\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M515 93l930 931l-930 931l90 90l1022 -1021l-1022 -1021z\" fill=\"black\" stroke=\"none\"/></svg>'); } .ms-ContextualMenu-link.is-selected[data-v-94d26018]::after { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"10\" height=\"10\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1837 1491l-1069 -1070l-557 558l90 90l467 -466l979 978z\" fill=\"black\" stroke=\"none\"/></svg>') !important; } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("");},
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

	var CONTEXT_CLASS = ".ms-ContextualMenu";
	var CB_SPLIT_CLASS = ".ms-CommandButton-splitIcon";
	var CB_BUTTON_CLASS = ".ms-CommandButton-button";
	var MODAL_POSITION$1 = "bottom";
	var CommandButton = (function () {
	    function CommandButton(container, contextMenu) {
	        this._container = container;
	        this._command = this._container;
	        this._commandButton = this._command.querySelector(CB_BUTTON_CLASS);
	        this._splitButton = this._command.querySelector(CB_SPLIT_CLASS);
	        if (contextMenu) {
	            this._contextualMenu = contextMenu;
	        }
	        else {
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
	        }
	        else {
	            this._commandButton.addEventListener("click", this._createModalHostView.bind(this), false);
	        }
	    };
	    CommandButton.prototype._checkForMenu = function () {
	        if (this._contextualMenu) {
	            this._setClick();
	        }
	    };
	    return CommandButton;
	}());

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
	var CommandBar = (function () {
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
	        if (state === void 0) { state = "add"; }
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
	        var d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
	        wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
	        wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;
	        return wSize;
	    };
	    CommandBar.prototype._setBreakpoint = function () {
	        var screenSize = this._getScreenSize().x;
	        switch (true) {
	            case (screenSize <= this.responsiveSizes["sm-max"]):
	                this.breakpoint = "sm";
	                break;
	            case (screenSize >= this.responsiveSizes["md-min"] && screenSize <= this.responsiveSizes["md-max"]):
	                this.breakpoint = "md";
	                break;
	            case (screenSize >= this.responsiveSizes["lg-min"] && screenSize <= this.responsiveSizes["lg-max"]):
	                this.breakpoint = "lg";
	                break;
	            case (screenSize >= this.responsiveSizes["xl-min"] && screenSize <= this.responsiveSizes["xl-max"]):
	                this.breakpoint = "xl";
	                break;
	            case (screenSize >= this.responsiveSizes["xxl-min"] && screenSize <= this.responsiveSizes["xxl-max"]):
	                this.breakpoint = "xxl";
	                break;
	            case (screenSize >= this.responsiveSizes["xxxl-min"]):
	                this.breakpoint = "xxxl";
	                break;
	        }
	    };
	    CommandBar.prototype._createSearchInstance = function () {
	        if (this._elements.searchBox) {
	            return new SearchBox(this._elements.searchBox);
	        }
	        else {
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
	            this.searchBoxInstance.getInputField().addEventListener("focus", function () { _this._onSearchExpand(); }, false);
	            this.searchBoxInstance.getInputField().addEventListener("searchCollapse", function () { _this._onSearchCollapse(); }, false);
	        }
	    };
	    CommandBar.prototype._createItemCollection = function (iCollection, areaClass) {
	        var item, label, iconClasses, splitClasses, items = this._container.querySelectorAll(areaClass + " > " + COMMAND_BUTTON + ":not(" + CB_ITEM_OVERFLOW + ")");
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
	                isCollapsed: (item.classList.contains(CB_NO_LABEL_CLASS)) ? true : false,
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
	        var this$1 = this;

	        for (var i = 0; i < this.itemCollection.length; i++) {
	            var item = this$1.itemCollection[i].item;
	            var width = this$1._getElementWidth(item);
	            this$1.commandWidths[i] = width;
	        }
	    };
	    CommandBar.prototype._updateCommands = function () {
	        var this$1 = this;

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
	            totalWidths += this$1.commandWidths[i];
	            if (totalWidths < totalAreaWidth) {
	                this$1.visibleCommands.push(this$1.itemCollection[i]);
	            }
	            else {
	                this$1.overflowCommands.push(this$1.itemCollection[i]);
	            }
	        }
	    };
	    CommandBar.prototype._drawCommands = function () {
	        var this$1 = this;

	        this._elements.contextMenu.innerHTML = "";
	        for (var i = 0; i < this.overflowCommands.length; i++) {
	            this$1.overflowCommands[i].item.classList.add("is-hidden");
	            var newCItem = this$1.contextualItemContainerRef.cloneNode(false);
	            var newClink = this$1.contextualItemLink.cloneNode(false);
	            var iconClass = this$1.overflowCommands[i].icon;
	            newClink.innerText = this$1.overflowCommands[i].label;
	            newCItem.appendChild(newClink);
	            if (iconClass) {
	                var newIcon = this$1.contextualItemIcon.cloneNode(false);
	                newIcon.className = ICON.replace(".", "") + " " + iconClass;
	                newCItem.appendChild(newIcon);
	            }
	            this$1._elements.contextMenu.appendChild(newCItem);
	        }
	        for (var x = 0; x < this.visibleCommands.length; x++) {
	            this$1.visibleCommands[x].item.classList.remove("is-hidden");
	        }
	    };
	    CommandBar.prototype._setWindowEvent = function () {
	        var _this = this;
	        window.addEventListener("resize", function () {
	            _this._doResize();
	        }, false);
	    };
	    CommandBar.prototype._processCollapsedClasses = function (type) {
	        var this$1 = this;

	        for (var i = 0; i < this.itemCollection.length; i++) {
	            var thisItem = this$1.itemCollection[i];
	            if (!thisItem.isCollapsed) {
	                if (type === "add") {
	                    thisItem.item.classList.add(CB_NO_LABEL_CLASS);
	                }
	                else {
	                    thisItem.item.classList.remove(CB_NO_LABEL_CLASS);
	                }
	            }
	        }
	        for (var i = 0; i < this._sideAreaCollection.length; i++) {
	            var thisItem = this$1._sideAreaCollection[i];
	            if (!thisItem.isCollapsed) {
	                if (type === "add") {
	                    thisItem.item.classList.add(CB_NO_LABEL_CLASS);
	                }
	                else {
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
	        }
	        else {
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
	}());

	var uiCommandBar = {
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CommandBar { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; height: 40px; white-space: nowrap; padding-left: 0; border: 0; position: relative; } .ms-CommandBar:focus { outline: none; } .ms-CommandBar .ms-CommandButton--actionButton { border-right: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandBar .ms-Button { height: 100%; } .ms-CommandBar .ms-Button.ms-Button--noLabel .ms-Button-icon { padding-right: 0; } .ms-CommandBar .ms-Button.is-hidden { display: none; } .ms-CommandBar .ms-SearchBox, .ms-CommandBar .ms-SearchBox-field, .ms-CommandBar .ms-SearchBox-label { height: 100%; } .ms-CommandBar .ms-SearchBox { display: inline-block; vertical-align: top; transition: margin-right 0.267s; } .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active { width: 220px; } @media only screen and (max-width: 639px) { .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active { width: 100%; position: absolute; left: 0; right: 0; z-index: 10; } } .ms-CommandBar .ms-CommandBar-overflowButton .ms-CommandButton-button { font-size: 18px; padding: 0 11px; } @media only screen and (min-width: 1024px) { .ms-CommandBar .ms-SearchBox { margin-right: 24px; } } @media only screen and (max-width: 639px) { .ms-CommandBar { height: 44px; } } @media only screen and (min-width: 640px) { .ms-CommandBar.search-expanded .ms-SearchBox { margin-right: 8px; } .ms-CommandBar .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed { transition: none; } } .ms-CommandBar-mainArea { overflow-x: hidden; display: block; height: 100%; overflow: hidden; } .ms-CommandBar-sideCommands { float: right; text-align: right; width: auto; padding-right: 4px; height: 100%; } .ms-CommandBar-sideCommands .ms-Button:last-child { margin-right: 0; } @media only screen and (min-width: 640px) { .ms-CommandBar-sideCommands { min-width: 128px; } } @media only screen and (min-width: 1024px) { .ms-CommandBar-sideCommands { padding-right: 20px; } } .ms-CommandButton { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button, .ms-CommandButton.is-disabled .ms-CommandButton-button { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label, .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon, .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu { display: none; } .ms-CommandButton-button, .ms-CommandButton-splitIcon { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button:hover, .ms-CommandButton-splitIcon:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label, .ms-CommandButton-splitIcon:hover .ms-CommandButton-label { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button:active, .ms-CommandButton-splitIcon:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:focus::before, .ms-CommandButton-splitIcon:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button:focus, .ms-CommandButton-splitIcon:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button, .ms-CommandButton-splitIcon { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon, .ms-CommandButton-splitIcon .ms-CommandButton-icon { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label, .ms-CommandButton-splitIcon .ms-CommandButton-label { line-height: 44px; } } .ms-CommandButton-button { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton { margin-left: 4px; } } .ms-CommandButton-icon { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon, .ms-CommandButton-splitIcon { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon, .ms-CommandButton-splitIcon .ms-Icon { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon:focus::before, .ms-CommandButton-splitIcon:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon, .ms-CommandButton-splitIcon { display: none; } } .ms-CommandButton-splitIcon { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label, .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label, .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label { font-size: 16px; } } .ms-ContextualMenu { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; display: block; min-width: 180px; max-width: 220px; list-style-type: none; position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu.is-hidden { display: none; } .ms-ContextualMenu-item { position: relative; } .ms-ContextualMenu-link { box-sizing: border-box; text-decoration: none; color: \"[theme:neutralPrimary, default: #333333]\"; border: 1px solid transparent; cursor: pointer; display: block; height: 36px; overflow: hidden; line-height: 34px; padding: 0 16px 0 25px; position: relative; text-overflow: ellipsis; white-space: nowrap; } .ms-ContextualMenu-link:hover, .ms-ContextualMenu-link:active, .ms-ContextualMenu-link:focus { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:hover .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-link:active .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-link:focus .ms-ContextualMenu-subMenuIcon { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu-link:focus { outline: transparent; border: 1px solid \"[theme:neutralSecondary, default: #666666]\"; } .ms-ContextualMenu-link.is-selected { background-color: \"[theme:neutralQuaternaryAlt, default: #dadada]\"; color: \"[theme:black, default: #000000]\"; font-weight: 600; } .ms-ContextualMenu-link.is-selected ~ .ms-ContextualMenu-subMenuIcon { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu-link.is-selected:hover { background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu-link.is-disabled { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: \"[theme:white, default: #ffffff]\"; pointer-events: none; } .ms-ContextualMenu-link.is-disabled:active, .ms-ContextualMenu-link.is-disabled:focus { border-color: \"[theme:white, default: #ffffff]\"; } .ms-ContextualMenu-link.is-disabled .ms-Icon { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; pointer-events: none; cursor: default; } .ms-ContextualMenu-item.ms-ContextualMenu-item--divider { cursor: default; display: block; height: 1px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; position: relative; } .ms-ContextualMenu-item.ms-ContextualMenu-item--header { color: \"[theme:themePrimary, default: #0078d7]\"; font-size: 12px; text-transform: uppercase; height: 36px; line-height: 36px; padding: 0 18px; } .ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu .ms-ContextualMenu { position: absolute; top: -1px; left: 178px; } .ms-ContextualMenu-subMenuIcon, .ms-ContextualMenu-caretRight { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 8px; font-weight: 600; width: 24px; height: 36px; line-height: 36px; position: absolute; text-align: center; top: 0; right: 0; z-index: 1; pointer-events: none; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-item.ms-ContextualMenu-item--header { padding: 0 16px 0 26px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected { background-color: \"[theme:white, default: #ffffff]\"; font-weight: 600; color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected::after { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; color: \"[theme:neutralPrimary, default: #333333]\"; content: '\\E73E'; font-size: 10px; font-weight: 800; height: 36px; line-height: 36px; position: absolute; left: 7px; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus { color: \"[theme:neutralDark, default: #212121]\"; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:hover::after, .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:focus::after { color: \"[theme:neutralDark, default: #212121]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active { color: \"[theme:black, default: #000000]\"; background-color: \"[theme:neutralQuaternary, default: #d0d0d0]\"; } .ms-ContextualMenu.ms-ContextualMenu--multiselect .ms-ContextualMenu-link.is-selected:active::after { color: \"[theme:black, default: #000000]\"; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-ContextualMenu-link, .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-ContextualMenu-link { padding-left: 40px; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons .ms-Icon, .ms-ContextualMenu.ms-ContextualMenu--hasChecks .ms-Icon { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; text-align: center; } .ms-ContextualMenu.ms-ContextualMenu--hasIcons { width: 220px; } .ms-ContextualHost { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; z-index: 10; margin: 16px auto; position: relative; min-width: 10px; display: none; background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); } .ms-ContextualHost.is-positioned { position: absolute; margin: 0; } .ms-ContextualHost.is-open { display: inline-block; } .ms-ContextualHost-beak { box-shadow: 0 0 15px -5px \"[theme:neutralPrimaryAlt, default: #3c3c3c]\"; position: absolute; width: 28px; height: 28px; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; box-sizing: border-box; top: -6px; display: none; -webkit-transform: rotate(45deg); transform: rotate(45deg); z-index: 0; outline: 1px solid transparent; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak, .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak { top: 40px; display: none; } .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak { left: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak { right: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowTop .ms-ContextualHost-beak { display: block; top: -10px; } .ms-ContextualHost.ms-ContextualHost--arrowBottom .ms-ContextualHost-beak { display: block; bottom: -10px; } .ms-ContextualHost-main { position: relative; background-color: \"[theme:white, default: #ffffff]\"; box-sizing: border-box; outline: 1px solid transparent; z-index: 5; min-height: 10px; } .ms-ContextualHost-close { margin: 0; border: 0; background: none; cursor: pointer; position: absolute; top: 12px; right: 12px; padding: 8px; width: 32px; height: 32px; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; z-index: 10; } .ms-ContextualHost.ms-ContextualHost--close .ms-ContextualHost-title { margin-right: 20px; } .ms-ContextualHost.ms-ContextualHost--primaryArrow .ms-ContextualHost-beak { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media (min-width: 480px) { .ms-ContextualHost { margin: 16px; } .ms-ContextualHost.is-positioned { margin: 0; } .ms-ContextualHost.ms-ContextualHost--arrowRight .ms-ContextualHost-beak, .ms-ContextualHost.ms-ContextualHost--arrowLeft .ms-ContextualHost-beak { display: block; } } .inline-block { display: inline-block; } .ms-Icon.ms-Icon--More { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M256 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1024 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10zM1792 1152q27 0 50 -10t40.5 -27.5t27.5 -40.5t10 -50t-10 -50t-27.5 -40.5t-40.5 -27.5t-50 -10t-50 10t-40.5 27.5t-27.5 40.5t-10 50t10 50t27.5 40.5t40.5 27.5t50 10z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
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
	var CommandButton$1 = (function () {
	    function CommandButton(container, contextMenu) {
	        this._container = container;
	        this._command = this._container;
	        this._commandButton = this._command.querySelector(CB_BUTTON_CLASS$1);
	        this._splitButton = this._command.querySelector(CB_SPLIT_CLASS$1);
	        if (contextMenu) {
	            this._contextualMenu = contextMenu;
	        }
	        else {
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
	        }
	        else {
	            this._commandButton.addEventListener("click", this._createModalHostView.bind(this), false);
	        }
	    };
	    CommandButton.prototype._checkForMenu = function () {
	        if (this._contextualMenu) {
	            this._setClick();
	        }
	    };
	    return CommandButton;
	}());

	var uiCommandButton = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton",class:_vm.commandButtonClass,on:{"click":_vm.clickEvent}},[_c('button',{staticClass:"ms-CommandButton-button"},[(_vm.hasIcon)?_c('span',{staticClass:"ms-CommandButton-icon ms-fontColor-themePrimary"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.type == 'dropdown')?_c('span',{staticClass:"ms-CommandButton-dropdownIcon"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})]):_vm._e()])])},staticRenderFns: [],_scopeId: 'data-v-6b2aa7e9',
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-CommandButton[data-v-6b2aa7e9] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden[data-v-6b2aa7e9] { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-6b2aa7e9] { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-6b2aa7e9]:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-6b2aa7e9]:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu[data-v-6b2aa7e9] { display: none; } .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button[data-v-6b2aa7e9]:hover, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-6b2aa7e9] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button[data-v-6b2aa7e9]:active, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button[data-v-6b2aa7e9]:focus::before, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button[data-v-6b2aa7e9]:focus, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-6b2aa7e9] { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-6b2aa7e9] { line-height: 44px; } } .ms-CommandButton-button[data-v-6b2aa7e9] { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton[data-v-6b2aa7e9] { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton[data-v-6b2aa7e9] { margin-left: 4px; } } .ms-CommandButton-icon[data-v-6b2aa7e9] { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon[data-v-6b2aa7e9] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label[data-v-6b2aa7e9] { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label[data-v-6b2aa7e9]:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9] { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9]:focus::before, .ms-CommandButton-splitIcon[data-v-6b2aa7e9]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon[data-v-6b2aa7e9], .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { display: none; } } .ms-CommandButton-splitIcon[data-v-6b2aa7e9] { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9] { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon[data-v-6b2aa7e9]::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-6b2aa7e9] { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-6b2aa7e9] { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-6b2aa7e9] { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-6b2aa7e9] { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-6b2aa7e9] { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-6b2aa7e9] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-6b2aa7e9]::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot[data-v-6b2aa7e9]:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-6b2aa7e9] { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-6b2aa7e9], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-6b2aa7e9] { font-size: 16px; } } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Dialog[data-v-1194e8ec] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); background-color: \"[theme:white, default: #ffffff]\"; display: none; height: auto; min-width: 220px; max-width: 340px; padding: 28px 24px; z-index: 10; position: fixed; transform: translate(-50%, -50%); left: 50%; top: 50%; } .ms-Dialog.is-open[data-v-1194e8ec] { display: block; } .ms-Dialog-title[data-v-1194e8ec] { font-size: 21px; font-weight: 100; margin-bottom: 24px; } .ms-Dialog-content[data-v-1194e8ec] { position: relative; } .ms-Dialog-subText[data-v-1194e8ec] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; line-height: 1.5; } .ms-Dialog-actions[data-v-1194e8ec] { margin-top: 24px; text-align: right; } .ms-Dialog--multiline .ms-Dialog-title[data-v-1194e8ec] { font-size: 28px; } .ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title[data-v-1194e8ec] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; font-size: 28px; font-weight: 100; padding: 28px 24px; margin-top: -28px; margin-left: -24px; margin-right: -24px; } .ms-Dialog-buttonClose[data-v-1194e8ec] { background: none; border: 0; cursor: pointer; margin: 0; padding: 4px; position: absolute; right: 12px; top: 12px; z-index: 10; } .ms-Dialog-buttonClose .ms-Icon.ms-Icon--Cancel[data-v-1194e8ec] { color: \"[theme:neutralSecondary, default: #666666]\"; font-size: 16px; } .ms-Button.ms-Button--compound[data-v-1194e8ec]:not(:last-child) { margin-bottom: 20px; } .ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-title[data-v-1194e8ec] { margin-right: 20px; } .ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-buttonClose[data-v-1194e8ec] { display: block; } @media (min-width: 480px) { .ms-Dialog-main[data-v-1194e8ec] { width: auto; min-width: 288px; max-width: 340px; } } .ms-Overlay[data-v-1194e8ec] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-1194e8ec] { display: block; } .ms-Overlay--dark[data-v-1194e8ec] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-1194e8ec] { overflow: hidden; } .ms-Icon.ms-Icon--Cancel[data-v-1194e8ec] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1115 1024l690 -691l-90 -90l-691 690l-691 -690l-90 90l690 691l-690 691l90 90l691 -690l691 690l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Dropdown[data-v-d4b6df96] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 10px; position: relative; outline: 0; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:hover .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:focus .ms-Dropdown-caretDown[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:black, default: #000000]\"; } .ms-Dropdown:hover .ms-Dropdown-title[data-v-d4b6df96], .ms-Dropdown:active .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-Dropdown:focus .ms-Dropdown-title[data-v-d4b6df96] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Dropdown .ms-Label[data-v-d4b6df96] { display: inline-block; margin-bottom: 8px; } .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #00ff00; color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-title[data-v-d4b6df96] { border-color: #600000; color: #600000; } } .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown.is-disabled .ms-Dropdown-caretDown[data-v-d4b6df96] { color: #600000; } } .ms-Dropdown.is-open .ms-Dropdown-items[data-v-d4b6df96] { display: block; position: absolute; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96] { box-shadow: none; overflow-y: auto; padding-top: 4px; max-height: 100%; } .ms-Panel .ms-Dropdown-items .ms-Dropdown-item[data-v-d4b6df96] { padding: 7px 16px; overflow: hidden; text-overflow: ellipsis; } .ms-Panel .ms-Dropdown-items[data-v-d4b6df96]::before { content: none; border: 0; } .ms-Dropdown-select[data-v-d4b6df96] { display: none; } .ms-Dropdown-caretDown[data-v-d4b6df96] { color: \"[theme:neutralDark, default: #212121]\"; font-size: 12px; position: absolute; right: 13px; bottom: 9px; z-index: 1; pointer-events: none; } .ms-Dropdown-title[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; background: \"[theme:white, default: #ffffff]\"; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; cursor: pointer; display: block; height: 32px; padding: 5px 32px 0 10px; position: relative; overflow: hidden; } .ms-Dropdown-title.ms-Dropdown-truncator[data-v-d4b6df96] { height: auto; display: block; position: absolute; visibility: hidden; } .ms-Dropdown-items[data-v-d4b6df96] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4); background-color: \"[theme:white, default: #ffffff]\"; display: none; list-style-type: none; position: absolute; width: 100%; max-height: 200px; z-index: 400; overflow-y: scroll; top: auto; right: auto; bottom: auto; left: auto; max-width: 100%; } .ms-Dropdown-items[data-v-d4b6df96]::before { content: ''; position: absolute; z-index: -1; top: 0; left: 0; right: 0; bottom: 0; border: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-items[data-v-d4b6df96] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Dropdown-item[data-v-d4b6df96] { box-sizing: border-box; cursor: pointer; display: block; height: 36px; padding: 7px 10px; position: relative; border: 1px solid transparent; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96] { border-color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; color: \"[theme:black, default: #000000]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item[data-v-d4b6df96]:hover:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item[data-v-d4b6df96]:hover { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-item[data-v-d4b6df96]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-disabled[data-v-d4b6df96] { background: \"[theme:white, default: #ffffff]\"; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; cursor: default; } .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: \"[theme:themeLight, default: #c7e0f4]\"; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:hover, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; } @media screen and (-ms-high-contrast: active) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #1AEBFF; border-color: #1AEBFF; color: \"[theme:black, default: #000000]\"; } .ms-Dropdown-item.is-selected[data-v-d4b6df96]:focus, .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96]:focus { border-color: \"[theme:black, default: #000000]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Dropdown-item.is-selected[data-v-d4b6df96], .ms-Dropdown-item.ms-Dropdown-item--selected[data-v-d4b6df96] { background-color: #37006E; border-color: #37006E; color: \"[theme:white, default: #ffffff]\"; } } .ms-Dropdown-caretDown[data-v-d4b6df96] { bottom: 7px; } .ms-Dropdown-caretDown.ms-Icon.ms-Icon--ChevronDown[data-v-d4b6df96]::before { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"12\" height=\"12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1939 1581l90 -90l-1005 -1005l-1005 1005l90 90l915 -915z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1(" /*# sourceMappingURL=uiDropdownItem.vue.map */");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-2943a900] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-2943a900]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-2943a900] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Link[data-v-078cc59e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; font-weight: 400; color: \"[theme:themePrimary, default: #0078d7]\"; text-decoration: none; cursor: pointer; outline: none; } .ms-Link[data-v-078cc59e]:hover, .ms-Link[data-v-078cc59e]:focus { color: \"[theme:themeDarker, default: #004578]\"; } .ms-Link[data-v-078cc59e]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } ");},
	    extends :  link
	}

	var List = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{ref:"list",staticClass:"ms-List"},[_vm._t("default")],2)},staticRenderFns: [],
	  name: 'ou-list'
	};

	var uiList = {_scopeId: 'data-v-1093d442',
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-List[data-v-1093d442] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; list-style-type: none; } ");},
	    extends :  List
	}

	var ListActions = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-ListItem-actions"},[_vm._t("default")],2)},staticRenderFns: [],
	  name: 'ou-list-actions'
	};

	var uiListActions = {
	    beforeCreate: function beforeCreate(){ lib_1("");},
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
	    beforeCreate: function beforeCreate(){ lib_1("");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ListItem[data-v-a34de616] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; *zoom: 1; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; padding: 9px 28px 3px; position: relative; display: block; } .ms-ListItem[data-v-a34de616]::before, .ms-ListItem[data-v-a34de616]::after { display: table; content: \"\"; line-height: 0; } .ms-ListItem[data-v-a34de616]::after { clear: both; } .ms-ListItem-primaryText[data-v-a34de616], .ms-ListItem-secondaryText[data-v-a34de616], .ms-ListItem-tertiaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; } .ms-ListItem-primaryText[data-v-a34de616] { color: \"[theme:neutralDark, default: #212121]\"; font-weight: 300; font-size: 21px; padding-right: 80px; position: relative; top: -4px; } .ms-ListItem-secondaryText[data-v-a34de616] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 400; font-size: 14px; line-height: 25px; position: relative; top: -7px; padding-right: 30px; } .ms-ListItem-tertiaryText[data-v-a34de616] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-weight: 300; font-size: 14px; position: relative; top: -9px; margin-bottom: -4px; padding-right: 30px; } .ms-ListItem-metaText[data-v-a34de616] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 300; font-size: 11px; position: absolute; right: 30px; top: 39px; } .ms-ListItem-image[data-v-a34de616] { float: left; height: 70px; margin-left: -8px; margin-right: 10px; width: 70px; background-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-ListItem-selectionTarget[data-v-a34de616] { display: none; } .ms-ListItem-actions[data-v-a34de616] { max-width: 80px; position: absolute; right: 30px; text-align: right; top: 10px; } .ms-ListItem-action[data-v-a34de616] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; display: inline-block; font-size: 15px; position: relative; text-align: center; top: 3px; cursor: pointer; height: 16px; width: 16px; } .ms-ListItem-action .ms-Icon[data-v-a34de616] { vertical-align: top; } .ms-ListItem-action[data-v-a34de616]:hover { color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; } .ms-ListItem.is-unread[data-v-a34de616] { border-left: 3px solid \"[theme:themePrimary, default: #0078d7]\"; padding-left: 27px; } .ms-ListItem.is-unread .ms-ListItem-secondaryText[data-v-a34de616], .ms-ListItem.is-unread .ms-ListItem-metaText[data-v-a34de616] { color: \"[theme:themePrimary, default: #0078d7]\"; font-weight: 600; } .ms-ListItem.is-unseen[data-v-a34de616]::after { border-right: 10px solid transparent; border-top: 10px solid \"[theme:themePrimary, default: #0078d7]\"; left: 0; position: absolute; top: 0; } .ms-ListItem.is-selectable .ms-ListItem-selectionTarget[data-v-a34de616] { display: block; height: 20px; left: 6px; position: absolute; top: 13px; width: 20px; } .ms-ListItem.is-selectable .ms-ListItem-image[data-v-a34de616] { margin-left: 0; } .ms-ListItem.is-selectable[data-v-a34de616]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; cursor: pointer; outline: 1px solid transparent; } .ms-ListItem.is-selectable[data-v-a34de616]:hover::before { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; position: absolute; top: 14px; left: 7px; height: 15px; width: 15px; border: 1px solid \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-ListItem.is-selected[data-v-a34de616]::before { border: 1px solid transparent; } .ms-ListItem.is-selected[data-v-a34de616]::before, .ms-ListItem.is-selected[data-v-a34de616]:hover::before { -moz-osx-font-smoothing: grayscale; -webkit-font-smoothing: antialiased; display: inline-block; font-family: 'FabricMDL2Icons'; font-style: normal; font-weight: normal; speak: none; content: '\\e73A'; font-size: 17px; color: \"[theme:neutralSecondaryAlt, default: #767676]\"; position: absolute; top: 23px; left: 7px; border: 0; } .ms-ListItem.is-selected[data-v-a34de616]:hover { background-color: \"[theme:themeLight, default: #c7e0f4]\"; outline: 1px solid transparent; } .ms-ListItem.ms-ListItem--document[data-v-a34de616] { padding: 0; } .ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon[data-v-a34de616] { width: 70px; height: 70px; float: left; text-align: center; } .ms-ListItem.ms-ListItem--document .ms-ListItem-itemIcon .ms-Icon[data-v-a34de616] { font-size: 38px; line-height: 70px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-ListItem.ms-ListItem--document .ms-ListItem-primaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 14px; padding-top: 15px; padding-right: 0; position: static; } .ms-ListItem.ms-ListItem--document .ms-ListItem-secondaryText[data-v-a34de616] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: \"[theme:neutralSecondary, default: #666666]\"; font-weight: 400; font-size: 11px; padding-top: 6px; } .ms-ListItem.is-selected[data-v-a34de616]::before, .ms-ListItem.is-selected[data-v-a34de616]:hover::before { top: 14px; content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"17\" height=\"17\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"translate(0, 2048) scale(1, -1)\" d=\"M2048 2048v-2048h-2048v2048h2048zM1920 1920h-1792v-1792h1792v1792zM768 421l-429 430l90 90l339 -338l851 850l90 -90z\" fill=\"black\" stroke=\"none\"/></svg>'); } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-MessageBar[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; padding: 8px; display: table; background-color: \"[theme:infoBackground, default: #f4f4f4]\"; } .ms-MessageBar .ms-Link[data-v-7f69de50] { font-size: 12px; } .ms-MessageBar-icon[data-v-7f69de50], .ms-MessageBar-text[data-v-7f69de50] { display: table-cell; vertical-align: top; } .ms-MessageBar-icon[data-v-7f69de50] { padding-right: 8px; font-size: 16px; color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-MessageBar-text[data-v-7f69de50] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 12px; font-weight: 400; } .ms-MessageBar.ms-MessageBar--warning[data-v-7f69de50] { background-color: \"[theme:warningBackground, default: #fff4ce]\"; } .ms-MessageBar.ms-MessageBar--severeWarning[data-v-7f69de50] { background-color: \"[theme:severeWarningBackground, default: #fed9cc]\"; } .ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:severeWarning, default: #d83b01]\"; } .ms-MessageBar.ms-MessageBar--error[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--blocked[data-v-7f69de50] { background-color: \"[theme:errorBackground, default: #fde7e9]\"; } .ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:error, default: #a80000]\"; } .ms-MessageBar.ms-MessageBar--success[data-v-7f69de50] { background-color: \"[theme:successBackground, default: #dff6dd]\"; } .ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon[data-v-7f69de50] { color: \"[theme:green, default: #107c10]\"; } ");},
	    computed: {
	        hasIcon: function hasIcon () {
	            return !!this.$slots['icon']
	        }
	    },
	    extends :  MessageBar
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Overlay[data-v-09ffd35c] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-09ffd35c] { display: block; } .ms-Overlay--dark[data-v-09ffd35c] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-09ffd35c] { overflow: hidden; } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ .ms-u-slideRightIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn10; -moz-animation-name: fadeIn, slideRightIn10; -ms-animation-name: fadeIn, slideRightIn10; -o-animation-name: fadeIn, slideRightIn10; animation-name: fadeIn, slideRightIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn10 { from { -webkit-transform: translate3d(-10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn10 { from { transform: translate3d(-10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn20; -moz-animation-name: fadeIn, slideRightIn20; -ms-animation-name: fadeIn, slideRightIn20; -o-animation-name: fadeIn, slideRightIn20; animation-name: fadeIn, slideRightIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn20 { from { -webkit-transform: translate3d(-20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn20 { from { transform: translate3d(-20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn40 { from { -webkit-transform: translate3d(-40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn40 { from { transform: translate3d(-40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn10; -moz-animation-name: fadeIn, slideLeftIn10; -ms-animation-name: fadeIn, slideLeftIn10; -o-animation-name: fadeIn, slideLeftIn10; animation-name: fadeIn, slideLeftIn10; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn10 { from { -webkit-transform: translate3d(10px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn10 { from { transform: translate3d(10px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn20; -moz-animation-name: fadeIn, slideLeftIn20; -ms-animation-name: fadeIn, slideLeftIn20; -o-animation-name: fadeIn, slideLeftIn20; animation-name: fadeIn, slideLeftIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn20 { from { -webkit-transform: translate3d(20px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn20 { from { transform: translate3d(20px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn40[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftIn40 { from { -webkit-transform: translate3d(40px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeftIn40 { from { transform: translate3d(40px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn400; -moz-animation-name: fadeIn, slideRightIn400; -ms-animation-name: fadeIn, slideRightIn400; -o-animation-name: fadeIn, slideRightIn400; animation-name: fadeIn, slideRightIn400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightIn400 { from { -webkit-transform: translate3d(-400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideRightIn400 { from { transform: translate3d(-400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideLeftIn400[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeft400; -moz-animation-name: fadeIn, slideLeft400; -ms-animation-name: fadeIn, slideLeft400; -o-animation-name: fadeIn, slideLeft400; animation-name: fadeIn, slideLeft400; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeft400 { from { -webkit-transform: translate3d(400px, 0px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideLeft400 { from { transform: translate3d(400px, 0px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn20; -moz-animation-name: fadeIn, slideUpIn20; -ms-animation-name: fadeIn, slideUpIn20; -o-animation-name: fadeIn, slideUpIn20; animation-name: fadeIn, slideUpIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn20 { from { -webkit-transform: translate3d(0px, 20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn20 { from { transform: translate3d(0px, 20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideUpIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideUpIn10; -moz-animation-name: fadeIn, slideUpIn10; -ms-animation-name: fadeIn, slideUpIn10; -o-animation-name: fadeIn, slideUpIn10; animation-name: fadeIn, slideUpIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpIn10 { from { -webkit-transform: translate3d(0px, 10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideUpIn10 { from { transform: translate3d(0px, 10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn20[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn20; -moz-animation-name: fadeIn, slideDownIn20; -ms-animation-name: fadeIn, slideDownIn20; -o-animation-name: fadeIn, slideDownIn20; animation-name: fadeIn, slideDownIn20; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn20 { from { -webkit-transform: translate3d(0px, -20px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn20 { from { transform: translate3d(0px, -20px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideDownIn10[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideDownIn10; -moz-animation-name: fadeIn, slideDownIn10; -ms-animation-name: fadeIn, slideDownIn10; -o-animation-name: fadeIn, slideDownIn10; animation-name: fadeIn, slideDownIn10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownIn10 { from { -webkit-transform: translate3d(0px, -10px, 0px); } to { -webkit-transform: translate3d(0px, 0px, 0px); } } @keyframes slideDownIn10 { from { transform: translate3d(0px, -10px, 0px); } to { transform: translate3d(0px, 0px, 0px); } } .ms-u-slideRightOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut40 { from { -webkit-transform: translate3d(0px, 0px, 0px); } to { -webkit-transform: translate3d(40px, 0px, 0px); } } @keyframes slideRightOut40 { from { transform: translate3d(0px, 0px, 0px); } to { transform: translate3d(40px, 0px, 0px); } } .ms-u-slideLeftOut40[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut40 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-40px, 0px, 0px); } } @keyframes slideLeftOut40 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-40px, 0px, 0px); } } .ms-u-slideRightOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut400; -moz-animation-name: fadeOut, slideRightOut400; -ms-animation-name: fadeOut, slideRightOut400; -o-animation-name: fadeOut, slideRightOut400; animation-name: fadeOut, slideRightOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideRightOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(400px, 0px, 0px); } } @keyframes slideRightOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(400px, 0px, 0px); } } .ms-u-slideLeftOut400[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut400; -moz-animation-name: fadeOut, slideLeftOut400; -ms-animation-name: fadeOut, slideLeftOut400; -o-animation-name: fadeOut, slideLeftOut400; animation-name: fadeOut, slideLeftOut400; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideLeftOut400 { from { -webkit-transform: translate3d(0, 0px, 0px); } to { -webkit-transform: translate3d(-400px, 0px, 0px); } } @keyframes slideLeftOut400 { from { transform: translate3d(0, 0px, 0px); } to { transform: translate3d(-400px, 0px, 0px); } } .ms-u-slideUpOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut20; -moz-animation-name: fadeOut, slideUpOut20; -ms-animation-name: fadeOut, slideUpOut20; -o-animation-name: fadeOut, slideUpOut20; animation-name: fadeOut, slideUpOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -20px, 0px); } } @keyframes slideUpOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -20px, 0px); } } .ms-u-slideUpOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideUpOut10; -moz-animation-name: fadeOut, slideUpOut10; -ms-animation-name: fadeOut, slideUpOut10; -o-animation-name: fadeOut, slideUpOut10; animation-name: fadeOut, slideUpOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideUpOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, -10px, 0px); } } @keyframes slideUpOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, -10px, 0px); } } .ms-u-slideDownOut20[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut20; -moz-animation-name: fadeOut, slideDownOut20; -ms-animation-name: fadeOut, slideDownOut20; -o-animation-name: fadeOut, slideDownOut20; animation-name: fadeOut, slideDownOut20; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut20 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 20px, 0px); } } @keyframes slideDownOut20 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 20px, 0px); } } .ms-u-slideDownOut10[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideDownOut10; -moz-animation-name: fadeOut, slideDownOut10; -ms-animation-name: fadeOut, slideDownOut10; -o-animation-name: fadeOut, slideDownOut10; animation-name: fadeOut, slideDownOut10; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes slideDownOut10 { from { -webkit-transform: translate3d(0px, 0, 0px); } to { -webkit-transform: translate3d(0px, 10px, 0px); } } @keyframes slideDownOut10 { from { transform: translate3d(0px, 0, 0px); } to { transform: translate3d(0px, 10px, 0px); } } .ms-u-scaleUpIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleUp100; -moz-animation-name: fadeIn, scaleUp100; -ms-animation-name: fadeIn, scaleUp100; -o-animation-name: fadeIn, scaleUp100; animation-name: fadeIn, scaleUp100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp100 { from { -webkit-transform: scale3d(0.98, 0.98, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleUp100 { from { transform: scale3d(0.98, 0.98, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleDownIn100[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, scaleDown100; -moz-animation-name: fadeIn, scaleDown100; -ms-animation-name: fadeIn, scaleDown100; -o-animation-name: fadeIn, scaleDown100; animation-name: fadeIn, scaleDown100; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown100 { from { -webkit-transform: scale3d(1.03, 1.03, 1); } to { -webkit-transform: scale3d(1, 1, 1); } } @keyframes scaleDown100 { from { transform: scale3d(1.03, 1.03, 1); } to { transform: scale3d(1, 1, 1); } } .ms-u-scaleUpOut103[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleUp103; -moz-animation-name: fadeOut, scaleUp103; -ms-animation-name: fadeOut, scaleUp103; -o-animation-name: fadeOut, scaleUp103; animation-name: fadeOut, scaleUp103; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleUp103 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(1.03, 1.03, 1); } } @keyframes scaleUp103 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(1.03, 1.03, 1); } } .ms-u-scaleDownOut98[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, scaleDown98; -moz-animation-name: fadeOut, scaleDown98; -ms-animation-name: fadeOut, scaleDown98; -o-animation-name: fadeOut, scaleDown98; animation-name: fadeOut, scaleDown98; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes scaleDown98 { from { -webkit-transform: scale3d(1, 1, 1); } to { -webkit-transform: scale3d(0.98, 0.98, 1); } } @keyframes scaleDown98 { from { transform: scale3d(1, 1, 1); } to { transform: scale3d(0.98, 0.98, 1); } } .ms-u-fadeIn400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; } .ms-u-fadeIn100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeIn200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.267s; animation-duration: 0.267s; } .ms-u-fadeIn500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeIn; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeIn; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeIn { from { opacity: 0; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } @keyframes fadeIn { from { opacity: 0; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 1; } } .ms-u-fadeOut400[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; } .ms-u-fadeOut100[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.1s; animation-duration: 0.1s; } .ms-u-fadeOut200[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.167s; animation-duration: 0.167s; } .ms-u-fadeOut500[data-v-15bfa7e0] { -webkit-animation-duration: 0.367s; -webkit-animation-name: fadeOut; -webkit-animation-fill-mode: both; animation-duration: 0.367s; animation-name: fadeOut; animation-fill-mode: both; -webkit-animation-duration: 0.467s; animation-duration: 0.467s; } @-webkit-keyframes fadeOut { from { opacity: 1; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } @keyframes fadeOut { from { opacity: 1; animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); } to { opacity: 0; } } .ms-u-rotate90deg[data-v-15bfa7e0] { -webkit-animation-name: rotate90; -moz-animation-name: rotate90; -ms-animation-name: rotate90; -o-animation-name: rotate90; animation-name: rotate90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotate90 { from { -webkit-transform: rotateZ(0deg); } to { -webkit-transform: rotateZ(90deg); } } @keyframes rotate90 { from { transform: rotateZ(0deg); } to { transform: rotateZ(90deg); } } .ms-u-rotateN90deg[data-v-15bfa7e0] { -webkit-animation-name: rotateN90; -moz-animation-name: rotateN90; -ms-animation-name: rotateN90; -o-animation-name: rotateN90; animation-name: rotateN90; -webkit-animation-duration: 0.1s; -moz-animation-duration: 0.1s; -ms-animation-duration: 0.1s; -o-animation-duration: 0.1s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } @-webkit-keyframes rotateN90 { from { -webkit-transform: rotateZ(90deg); } to { -webkit-transform: rotateZ(0deg); } } @keyframes rotateN90 { from { transform: rotateZ(90deg); } to { transform: rotateZ(0deg); } } .ms-u-expandCollapse400[data-v-15bfa7e0] { -webkit-transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.367s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse200[data-v-15bfa7e0] { -webkit-transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.167s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-expandCollapse100[data-v-15bfa7e0] { -webkit-transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); transition: height 0.1s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-u-delay100[data-v-15bfa7e0] { -webkit-animation-delay: 0.167s; animation-delay: 0.167s; } .ms-u-delay200[data-v-15bfa7e0] { -webkit-animation-delay: 0.267s; animation-delay: 0.267s; } /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Panel[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:white, default: #ffffff]\"; width: 100%; max-width: 340px; box-shadow: -30px 0 30px -30px rgba(0, 0, 0, 0.2); position: absolute; top: 0; right: 0; bottom: 0; z-index: 10; display: none; height: 100%; } .ms-Panel.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideLeftIn40; -moz-animation-name: fadeIn, slideLeftIn40; -ms-animation-name: fadeIn, slideLeftIn40; -o-animation-name: fadeIn, slideLeftIn40; animation-name: fadeIn, slideLeftIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideRightOut40; -moz-animation-name: fadeOut, slideRightOut40; -ms-animation-name: fadeOut, slideRightOut40; -o-animation-name: fadeOut, slideRightOut40; animation-name: fadeOut, slideRightOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel.is-open[data-v-15bfa7e0] { display: block; } .ms-Panel .ms-CommandBar[data-v-15bfa7e0] { padding-right: 0; padding-left: 8px; } .ms-Panel.ms-Panel--md[data-v-15bfa7e0] { max-width: 340px; } .ms-Panel.ms-Panel--lg[data-v-15bfa7e0] { max-width: 644px; } .ms-Panel.ms-Panel--xl[data-v-15bfa7e0] { max-width: 940px; } .ms-Panel.ms-Panel--xxl[data-v-15bfa7e0] { max-width: 1192px; } .ms-Panel--left[data-v-15bfa7e0] { box-shadow: -30px 0 30px 30px rgba(0, 0, 0, 0.2); left: 0; right: auto; } .ms-Panel--left.animate-in[data-v-15bfa7e0] { -webkit-animation-name: fadeIn, slideRightIn40; -moz-animation-name: fadeIn, slideRightIn40; -ms-animation-name: fadeIn, slideRightIn40; -o-animation-name: fadeIn, slideRightIn40; animation-name: fadeIn, slideRightIn40; -webkit-animation-duration: 0.367s; -moz-animation-duration: 0.367s; -ms-animation-duration: 0.367s; -o-animation-duration: 0.367s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -moz-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -ms-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -o-animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel--left.animate-out[data-v-15bfa7e0] { -webkit-animation-name: fadeOut, slideLeftOut40; -moz-animation-name: fadeOut, slideLeftOut40; -ms-animation-name: fadeOut, slideLeftOut40; -o-animation-name: fadeOut, slideLeftOut40; animation-name: fadeOut, slideLeftOut40; -webkit-animation-duration: 0.167s; -moz-animation-duration: 0.167s; -ms-animation-duration: 0.167s; -o-animation-duration: 0.167s; -webkit-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -moz-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -ms-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -o-animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); animation-timing-function: cubic-bezier(0.1, 0.25, 0.75, 0.9); -webkit-animation-fill-mode: both; -moz-animation-fill-mode: both; -ms-animation-fill-mode: both; -o-animation-fill-mode: both; animation-fill-mode: both; } .ms-Panel-closeButton[data-v-15bfa7e0] { background: none; border: 0; cursor: pointer; position: absolute; right: 6px; top: 0; height: 40px; width: 40px; line-height: 40px; outline: 0; padding: 0; color: \"[theme:neutralSecondary, default: #666666]\"; font-size: 16px; } .ms-Panel-closeButton[data-v-15bfa7e0]:hover { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Panel-closeButton .ms-Icon--Cancel[data-v-15bfa7e0] { margin-top: 2px; } @media (max-width: 639px) { .ms-Panel-closeButton[data-v-15bfa7e0] { font-size: 20px; line-height: 20px; height: 44px; right: 4px; } } .ms-Panel-contentInner[data-v-15bfa7e0] { margin-top: 40px; padding: 0 16px 20px; overflow-y: auto; height: 100%; } @media (min-width: 640px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 32px 20px; } } @media (min-width: 1366px) { .ms-Panel-contentInner[data-v-15bfa7e0] { padding: 0 40px 20px; } } .ms-Panel-headerText[data-v-15bfa7e0] { font-weight: 100; font-size: 21px; color: \"[theme:neutralPrimary, default: #333333]\"; margin: 10px 0; padding: 4px 0; line-height: 1; text-overflow: ellipsis; overflow: hidden; } @media (min-width: 1024px) { .ms-Panel-headerText[data-v-15bfa7e0] { margin-top: 30px; } } .ms-Overlay[data-v-15bfa7e0] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; background-color: \"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\"; position: fixed; bottom: 0; left: 0; right: 0; top: 0; z-index: 0; display: none; } .ms-Overlay.is-visible[data-v-15bfa7e0] { display: block; } .ms-Overlay--dark[data-v-15bfa7e0] { background-color: \"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"; } .ms-u-overflowHidden[data-v-15bfa7e0] { overflow: hidden; } ");},
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

	var MODAL_POSITION$3 = "top";
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
	        this._contextualHostInstance = new ContextualHost(this._personaCard, MODAL_POSITION$3, this._persona);
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Persona[data-v-08ee50b8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; line-height: 1; position: relative; width: 100%; height: 48px; display: table; table-layout: fixed; border-collapse: separate; } .ms-Persona .ms-ContextualHost[data-v-08ee50b8] { display: none; } .ms-Persona-imageArea[data-v-08ee50b8] { position: absolute; overflow: hidden; text-align: center; max-width: 48px; height: 48px; border-radius: 50%; z-index: 0; width: 100%; top: 0; left: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-imageArea[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona-placeholder[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; position: absolute; right: 0; left: 0; font-size: 47px; top: 9px; z-index: 5; } .ms-Persona-initials[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 17px; font-weight: 100; line-height: 48px; } .ms-Persona-initials.ms-Persona-initials--blueLight[data-v-08ee50b8] { background-color: \"[theme:blueLight, default: #00bcf2]\"; } .ms-Persona-initials.ms-Persona-initials--blue[data-v-08ee50b8] { background-color: \"[theme:blue, default: #0078d7]\"; } .ms-Persona-initials.ms-Persona-initials--blueDark[data-v-08ee50b8] { background-color: \"[theme:blueDark, default: #002050]\"; } .ms-Persona-initials.ms-Persona-initials--teal[data-v-08ee50b8] { background-color: \"[theme:teal, default: #008272]\"; } .ms-Persona-initials.ms-Persona-initials--greenLight[data-v-08ee50b8] { background-color: \"[theme:greenLight, default: #bad80a]\"; } .ms-Persona-initials.ms-Persona-initials--green[data-v-08ee50b8] { background-color: \"[theme:green, default: #107c10]\"; } .ms-Persona-initials.ms-Persona-initials--greenDark[data-v-08ee50b8] { background-color: \"[theme:greenDark, default: #004b1c]\"; } .ms-Persona-initials.ms-Persona-initials--magentaLight[data-v-08ee50b8] { background-color: \"[theme:magentaLight, default: #e3008c]\"; } .ms-Persona-initials.ms-Persona-initials--magenta[data-v-08ee50b8] { background-color: \"[theme:magenta, default: #b4009e]\"; } .ms-Persona-initials.ms-Persona-initials--purpleLight[data-v-08ee50b8] { background-color: \"[theme:purpleLight, default: #b4a0ff]\"; } .ms-Persona-initials.ms-Persona-initials--purple[data-v-08ee50b8] { background-color: \"[theme:purple, default: #5c2d91]\"; } .ms-Persona-initials.ms-Persona-initials--black[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; } .ms-Persona-initials.ms-Persona-initials--orange[data-v-08ee50b8] { background-color: \"[theme:orange, default: #d83b01]\"; } .ms-Persona-initials.ms-Persona-initials--red[data-v-08ee50b8] { background-color: \"[theme:red, default: #e81123]\"; } .ms-Persona-initials.ms-Persona-initials--redDark[data-v-08ee50b8] { background-color: \"[theme:redDark, default: #a80000]\"; } .ms-Persona-image[data-v-08ee50b8] { position: absolute; top: 0; left: 0; height: 48px; z-index: 10; width: 100%; } .ms-Persona-image[src=''][data-v-08ee50b8] { display: none; } .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; position: absolute; height: 12px; width: 12px; border-radius: 50%; top: auto; left: 34px; bottom: -1px; border: 2px solid \"[theme:white, default: #ffffff]\"; text-align: center; } @media screen and (-ms-high-contrast: active) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px #1AEBFF inset; color: \"[theme:black, default: #000000]\"; background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona-presence[data-v-08ee50b8] { border-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px #37006E inset; color: \"[theme:white, default: #ffffff]\"; background-color: \"[theme:black, default: #000000]\"; } } .ms-Persona-presenceIcon[data-v-08ee50b8] { color: \"[theme:white, default: #ffffff]\"; font-size: 8px; line-height: 12px; vertical-align: top; } .ms-Persona-details[data-v-08ee50b8] { padding: 0 12px; vertical-align: middle; overflow: hidden; text-align: left; padding-left: 60px; display: table-cell; width: 100%; } .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 100%; overflow: hidden; text-overflow: ellipsis; } .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; font-weight: 400; font-size: 17px; margin-top: -3px; line-height: 1.4; } .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralSecondary, default: #666666]\"; font-weight: 400; font-size: 12px; white-space: nowrap; line-height: 1.3; } .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: none; } .ms-Persona.ms-Persona--tiny[data-v-08ee50b8] { height: 30px; display: inline-block; } .ms-Persona.ms-Persona--tiny .ms-Persona-imageArea[data-v-08ee50b8] { overflow: visible; display: none; } .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { right: auto; top: 10px; left: 0; border: 0; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { top: 9px; border: 1px solid \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--tiny .ms-Persona-presence[data-v-08ee50b8] { border: 1px solid \"[theme:black, default: #000000]\"; } } .ms-Persona.ms-Persona--tiny .ms-Persona-details[data-v-08ee50b8] { padding-left: 20px; } .ms-Persona.ms-Persona--tiny .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 9px; } .ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly[data-v-08ee50b8] { padding: 0; background-color: transparent; } .ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText[data-v-08ee50b8]::after { content: ';'; } .ms-Persona.ms-Persona--xs[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile[data-v-08ee50b8], .ms-Persona.ms-Persona--token[data-v-08ee50b8] { height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xs .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-image[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-image[data-v-08ee50b8] { max-width: 32px; height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-placeholder[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 28px; top: 6px; } .ms-Persona.ms-Persona--xs .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { font-size: 12px; line-height: 32px; } .ms-Persona.ms-Persona--xs .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-presence[data-v-08ee50b8] { left: 19px; } .ms-Persona.ms-Persona--xs .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { padding-left: 40px; } .ms-Persona.ms-Persona--xs .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; padding-top: 3px; } .ms-Persona.ms-Persona--xs .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--facePile .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--token .ms-Persona-secondaryText[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--sm[data-v-08ee50b8] { height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-image[data-v-08ee50b8] { max-width: 40px; height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 38px; top: 5px; } .ms-Persona.ms-Persona--sm .ms-Persona-initials[data-v-08ee50b8] { font-size: 14px; line-height: 40px; } .ms-Persona.ms-Persona--sm .ms-Persona-presence[data-v-08ee50b8] { left: 27px; } .ms-Persona.ms-Persona--sm .ms-Persona-details[data-v-08ee50b8] { padding-left: 48px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 14px; } .ms-Persona.ms-Persona--sm .ms-Persona-primaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--sm .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 1px; } .ms-Persona.ms-Persona--lg[data-v-08ee50b8] { height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--lg .ms-Persona-image[data-v-08ee50b8] { max-width: 72px; height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 67px; top: 10px; } .ms-Persona.ms-Persona--lg .ms-Persona-initials[data-v-08ee50b8] { font-size: 28px; line-height: 72px; } .ms-Persona.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8] { left: 49px; height: 20px; width: 20px; border-width: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 20px; font-size: 14px; } .ms-Persona.ms-Persona--lg .ms-Persona-details[data-v-08ee50b8] { padding-left: 84px; } .ms-Persona.ms-Persona--lg .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 3px; } .ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--xl[data-v-08ee50b8] { height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-imageArea[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-image[data-v-08ee50b8] { max-width: 100px; height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-placeholder[data-v-08ee50b8] { font-size: 95px; top: 12px; } .ms-Persona.ms-Persona--xl .ms-Persona-initials[data-v-08ee50b8] { font-size: 42px; line-height: 100px; } .ms-Persona.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8] { height: 28px; width: 28px; left: 71px; border-width: 4px; } .ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon[data-v-08ee50b8] { line-height: 28px; font-size: 21px; position: relative; top: 1px; } .ms-Persona.ms-Persona--xl .ms-Persona-details[data-v-08ee50b8] { padding-left: 120px; } .ms-Persona.ms-Persona--xl .ms-Persona-primaryText[data-v-08ee50b8] { font-size: 21px; font-weight: 300; margin-top: 0; } .ms-Persona.ms-Persona--xl .ms-Persona-secondaryText[data-v-08ee50b8] { padding-top: 2px; } .ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--xl .ms-Persona-optionalText[data-v-08ee50b8] { padding-top: 5px; display: block; } .ms-Persona.ms-Persona--darkText .ms-Persona-primaryText[data-v-08ee50b8] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText[data-v-08ee50b8], .ms-Persona.ms-Persona--darkText .ms-Persona-optionalText[data-v-08ee50b8] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8] { cursor: pointer; padding: 0 10px; } .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):hover, .ms-Persona.ms-Persona--selectable[data-v-08ee50b8]:not(.ms-Persona--xl):focus { background-color: \"[theme:themeLighter, default: #deecf9]\"; outline: 1px solid transparent; } .ms-Persona.ms-Persona--available .ms-Persona-presence[data-v-08ee50b8] { background-color: #7FBA00; } .ms-Persona.ms-Persona--away .ms-Persona-presence[data-v-08ee50b8] { background-color: #FCD116; } .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon[data-v-08ee50b8] { position: relative; left: 1px; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::before { content: ''; width: 100%; height: 100%; position: absolute; top: 0; left: 0; box-shadow: 0 0 0 2px #D93B3B inset; border-radius: 50%; } .ms-Persona.ms-Persona--blocked .ms-Persona-presence[data-v-08ee50b8]::after { content: ''; width: 100%; height: 2px; background-color: #D93B3B; transform: rotate(-45deg); position: absolute; top: 5px; left: 0; } .ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence[data-v-08ee50b8]::after { top: 9px; } .ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence[data-v-08ee50b8]::after { top: 13px; } .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #D93B3B; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--busy .ms-Persona-presence[data-v-08ee50b8] { background-color: #37006E; } } .ms-Persona.ms-Persona--dnd .ms-Persona-presence[data-v-08ee50b8] { background-color: #E81123; } .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: #93ABBD; } @media screen and (-ms-high-contrast: active) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:black, default: #000000]\"; box-shadow: 0 0 0 1px \"[theme:white, default: #ffffff]\" inset; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Persona.ms-Persona--offline .ms-Persona-presence[data-v-08ee50b8] { background-color: \"[theme:white, default: #ffffff]\"; box-shadow: 0 0 0 1px \"[theme:black, default: #000000]\" inset; } } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8] { display: inline-block; width: auto; } .ms-Persona.ms-Persona--facePile[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--facePile .ms-Persona-imageArea[data-v-08ee50b8] { position: relative; width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--facePile .ms-Persona-initials[data-v-08ee50b8] { position: relative; } .ms-Persona.ms-Persona--facePile .ms-Persona-details[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--facePile .ms-Persona-presence[data-v-08ee50b8] { display: none; } .ms-Persona.ms-Persona--token[data-v-08ee50b8] { display: inline-flex; width: auto; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-radius: 20px; margin: 4px; } .ms-Persona.ms-Persona--token[data-v-08ee50b8]:hover { cursor: pointer; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8] { border-radius: 20px; display: inline-block; width: 32px; height: 32px; padding: 0; line-height: 30px; transition: background-color 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); text-align: center; } .ms-Persona.ms-Persona--token .ms-Persona-actionIcon[data-v-08ee50b8]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-Persona.ms-Persona--token .ms-Persona-imageArea[data-v-08ee50b8] { width: 100%; min-width: 32px; } .ms-Persona.ms-Persona--token .ms-Persona-details[data-v-08ee50b8] { height: 30px; display: inline-block; width: auto; padding-right: 8px; } .ms-Persona.ms-Persona--token .ms-Persona-primaryText[data-v-08ee50b8] { padding-top: 0; line-height: 34px; } .ms-Persona.ms-Persona--token .ms-Persona-initials[data-v-08ee50b8] { position: relative; } ");},
	    beforeMount: function beforeMount(){
	        this.$fabric = {
	            Persona : Persona
	        };
	    },
	    extends :  persona
	}

	var pivot = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"pivot",staticClass:"ms-Pivot",class:_vm.pivotClass},[_c('ul',{staticClass:"ms-Pivot-links"},_vm._l((_vm.pivotItems),function(item,index$$1){return _c('li',{staticClass:"ms-Pivot-link",class:{ 'is-selected': index$$1 == 0 },attrs:{"tabindex":"1","data-content":item,"title":item}},[_vm._v(" "+_vm._s(item)+" ")])})),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],
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
	    }
	  }
	};

	var Pivot = (function () {
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
	}());

	var uiPivot = {_scopeId: 'data-v-2646c164',
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Pivot[data-v-2646c164] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; font-size: 14px; font-weight: 400; } .ms-Pivot-links[data-v-2646c164] { font-size: 0; height: 40px; list-style-type: none; padding: 0; white-space: nowrap; } .ms-Pivot-link[data-v-2646c164] { color: \"[theme:neutralPrimary, default: #333333]\"; display: inline-block; font-size: 14px; font-weight: 400; line-height: 40px; margin-right: 8px; padding: 0 8px; text-align: center; vertical-align: top; } .ms-Pivot-link[data-v-2646c164]:hover { cursor: pointer; } .ms-Pivot-link[data-v-2646c164]::before { background-color: transparent; bottom: 0; content: ''; height: 2px; left: 8px; position: absolute; right: 8px; transition: background-color 0.267s cubic-bezier(0.1, 0.25, 0.75, 0.9); } .ms-Pivot-link[data-v-2646c164]::after { color: transparent; content: attr(title); display: block; font-weight: bold; height: 1px; overflow: hidden; visibility: hidden; } .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 600; position: relative; } .ms-Pivot-link.is-selected[data-v-2646c164]::before { background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-link.is-disabled[data-v-2646c164] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164] { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Pivot-link.ms-Pivot-link--overflow.is-selected[data-v-2646c164] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:hover:not(.is-selected), .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:focus:not(.is-selected) { color: \"[theme:neutralDark, default: #212121]\"; } .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot-ellipsis[data-v-2646c164] { font-size: 15px; position: relative; top: 0; } .ms-Pivot-content[data-v-2646c164] { display: none; margin-top: 20px; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link[data-v-2646c164] { font-size: 17px; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 300; } .ms-Pivot.ms-Pivot--large .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]::after { font-size: 17px; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164] { height: 40px; background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; line-height: 40px; margin-right: -2px; padding: 0 10px; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:hover:not(.is-selected):not(.ms-Pivot-link--overflow), .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:focus:not(.is-selected):not(.ms-Pivot-link--overflow) { color: \"[theme:black, default: #000000]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link[data-v-2646c164]:active { color: \"[theme:white, default: #ffffff]\"; background-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected[data-v-2646c164] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; font-weight: 300; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:hover:not(.is-selected), .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:focus:not(.is-selected) { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.ms-Pivot-link--overflow[data-v-2646c164]:active { background-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-Pivot.ms-Pivot--tabs .ms-Pivot-link.is-selected[data-v-2646c164] { font-weight: 600; } } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("");},
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

	var ProgressIndicator$1 = (function () {
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
	}());

	var uiProgressIndicator = {_scopeId: 'data-v-134f1924',
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-ProgressIndicator[data-v-134f1924] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-weight: 400; } .ms-ProgressIndicator-itemName[data-v-134f1924] { color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding-top: 4px; line-height: 20px; } .ms-ProgressIndicator-itemDescription[data-v-134f1924] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-size: 11px; line-height: 18px; } .ms-ProgressIndicator-itemProgress[data-v-134f1924] { position: relative; width: 180px; height: 2px; padding: 8px 0; } .ms-ProgressIndicator-progressTrack[data-v-134f1924] { position: absolute; width: 100%; height: 2px; background-color: \"[theme:neutralLight, default: #eaeaea]\"; outline: 1px solid transparent; } .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:themePrimary, default: #0078d7]\"; height: 2px; position: absolute; transition: width .3s ease; width: 0; } @media screen and (-ms-high-contrast: active) { .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-ProgressIndicator-progressBar[data-v-134f1924] { background-color: \"[theme:black, default: #000000]\"; } } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-880410a2]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } /* searchbox uses mixins from label */ .ms-CommandButton[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; display: inline-block; position: relative; vertical-align: top; } .ms-CommandButton.is-hidden[data-v-880410a2] { display: none; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2] { cursor: default; } .ms-CommandButton:disabled .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-880410a2]:hover { background-color: \"[theme:themeLighterAlt, default: #eff6fc]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-CommandButton .ms-ContextualMenu[data-v-880410a2] { display: none; } .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; cursor: pointer; display: inline-block; height: 40px; line-height: 40px; outline: 1px solid transparent; padding: 0 8px; position: relative; vertical-align: top; background: transparent; } .ms-CommandButton-button[data-v-880410a2]:hover, .ms-CommandButton-splitIcon[data-v-880410a2]:hover { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button:hover .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-button[data-v-880410a2]:active, .ms-CommandButton-splitIcon[data-v-880410a2]:active { background-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-CommandButton-button[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } .ms-CommandButton-button[data-v-880410a2]:focus, .ms-CommandButton-splitIcon[data-v-880410a2]:focus { outline: 0; } @media only screen and (max-width: 639px) { .ms-CommandButton-button[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { height: 44px; } .ms-CommandButton-button .ms-CommandButton-icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-880410a2] { font-size: 20px; } .ms-CommandButton-button .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-880410a2] { line-height: 44px; } } .ms-CommandButton-button[data-v-880410a2] { border: 0; margin: 0; } .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 8px; } @media only screen and (max-width: 639px) { .ms-CommandButton + .ms-CommandButton[data-v-880410a2] { margin-left: 4px; } } .ms-CommandButton-icon[data-v-880410a2] { display: inline-block; margin-right: 8px; position: relative; font-size: 16px; min-width: 16px; height: 100%; } .ms-CommandButton-icon .ms-Icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .ms-CommandButton-label[data-v-880410a2] { font-size: 14px; font-weight: 400; color: \"[theme:neutralPrimary, default: #333333]\"; line-height: 40px; height: 100%; display: inline-block; vertical-align: top; } .ms-CommandButton-label[data-v-880410a2]:hover { color: \"[theme:neutralDark, default: #212121]\"; } .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: inline-block; position: relative; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 300; min-width: 12px; height: 100%; vertical-align: top; margin-left: 8px; } .ms-CommandButton-dropdownIcon .ms-Icon[data-v-880410a2], .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { line-height: normal; padding-top: 16px; } .ms-CommandButton-dropdownIcon[data-v-880410a2]:focus::before, .ms-CommandButton-splitIcon[data-v-880410a2]:focus::before { top: 3px; left: 3px; right: 3px; bottom: 3px; border: 1px solid \"[theme:neutralPrimary, default: #333333]\"; position: absolute; z-index: 10; content: ''; outline: none; } @media only screen and (max-width: 639px) { .ms-CommandButton-dropdownIcon[data-v-880410a2], .ms-CommandButton-splitIcon[data-v-880410a2] { display: none; } } .ms-CommandButton-splitIcon[data-v-880410a2] { margin-left: -2px; width: 27px; border: 0; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2] { margin-left: -1px; position: relative; padding-top: 16px; } .ms-CommandButton-splitIcon .ms-Icon[data-v-880410a2]::after { position: absolute; content: ' '; width: 1px; height: 16px; top: 12px; left: -8px; border-left: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-880410a2] { margin-right: 0; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-880410a2] { display: none; } .ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-880410a2] { padding: 0 12px; } .ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-880410a2] { background: none; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-880410a2] { width: 50px; height: 40px; } .ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-880410a2] { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 16px; height: 16px; padding-right: 0; } .ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-880410a2]::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--pivot[data-v-880410a2]:hover::before { content: ''; height: 2px; position: absolute; left: 0; right: 0; background-color: \"[theme:themePrimary, default: #0078d7]\"; bottom: 0; z-index: 5; } .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 479px) { .ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-880410a2], .ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-880410a2] { font-size: 16px; } } /* searchbox uses classes from CommandButton */ .ms-SearchBox[data-v-880410a2] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; height: 36px; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; position: relative; margin-bottom: 10px; display: inline-block; overflow: hidden; background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.is-active[data-v-880410a2] { z-index: 10; } .ms-SearchBox.is-active .ms-SearchBox-label[data-v-880410a2] { display: none; } .ms-SearchBox.is-active .ms-SearchBox-clear[data-v-880410a2] { display: block; } .ms-SearchBox[data-v-880410a2]:hover { background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:black, default: #000000]\"; } .ms-SearchBox:hover .ms-SearchBox-label .ms-Icon[data-v-880410a2] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-SearchBox.is-disabled[data-v-880410a2] { background-color: #F4F4F4; pointer-events: none; } .ms-SearchBox.is-disabled .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.is-disabled .ms-SearchBox-field[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; background-color: transparent; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; cursor: default; } .ms-SearchBox-clear[data-v-880410a2] { display: none; position: absolute; top: 0; right: 0; z-index: 10; } .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { background-color: \"[theme:themePrimary, default: #0078d7]\"; color: \"[theme:white, default: #ffffff]\"; height: 36px; } .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox-icon[data-v-880410a2] { position: relative; top: 50%; transform: translateY(-50%); display: inline-block; font-size: 16px; width: 16px; margin-left: 12px; margin-right: 6px; color: \"[theme:themePrimary, default: #0078d7]\"; vertical-align: top; } .ms-SearchBox-field[data-v-880410a2] { position: relative; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:themeTertiary, default: #71afe5]\"; outline: transparent 1px solid; font-weight: 300; font-size: 14px; color: \"[theme:black, default: #000000]\"; height: 36px; padding: 6px 3px 7px 45px; width: 208px; background-color: transparent; z-index: 5; transition: padding-left 0.167s; } .ms-SearchBox-field[data-v-880410a2]:focus { padding: 6px 32px 7px 10px; border-color: \"[theme:themePrimary, default: #0078d7]\"; background-color: \"[theme:themeLighter, default: #deecf9]\"; } .ms-SearchBox-field[data-v-880410a2]::-ms-clear { display: none; } .ms-SearchBox-label[data-v-880410a2] { position: absolute; top: 0; left: 0; height: 36px; line-height: 36px; color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; width: 208px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2] { transition: none; border: 0; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2]:focus { background-color: transparent; padding: 6px 3px 7px 45px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2] { display: none; position: absolute; top: 0; z-index: 10; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2] { height: 40px; background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2] { right: 8px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]::before { position: absolute; content: ' '; right: 0; bottom: 0; left: 0; margin: 0 8px; border-bottom: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:hover { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-label[data-v-880410a2] { color: \"[theme:neutralDark, default: #212121]\"; } .ms-SearchBox.ms-SearchBox--commandBar:hover .ms-SearchBox-icon[data-v-880410a2] { color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2]:focus { background-color: transparent; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-CommandButton .ms-SearchBox-filter[data-v-880410a2] { display: block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2] { width: 50px; min-height: 40px; z-index: 0; background-color: #F4F4F4; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed .ms-SearchBox-field[data-v-880410a2] { cursor: pointer; width: calc(100% - 50px); } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed[data-v-880410a2]::before { visibility: hidden; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-field[data-v-880410a2] { display: block; cursor: text; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-text[data-v-880410a2] { display: inline-block; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2] { width: 100%; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; right: 58px; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-filter[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active.is-animated[data-v-880410a2] { transition: width 0.167s cubic-bezier(0.1, 0.9, 0.2, 1); } } .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active[data-v-880410a2]::before { visibility: visible; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-SearchBox.ms-SearchBox--commandBar.has-text .ms-SearchBox-clear .ms-CommandButton-icon[data-v-880410a2]:active { color: \"[theme:themePrimary, default: #0078d7]\"; } @media only screen and (min-width: 1024px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; border-right: 1px solid \"[theme:neutralLight, default: #eaeaea]\"; } } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { height: 44px; line-height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear[data-v-880410a2] { font-size: 20px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-icon .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-exit .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-filter .ms-CommandButton-button[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-clear .ms-CommandButton-button[data-v-880410a2] { height: 44px; } .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-field[data-v-880410a2], .ms-SearchBox.ms-SearchBox--commandBar .ms-SearchBox-label[data-v-880410a2] { font-size: 16px; } } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2] { background-color: \"[theme:white, default: #ffffff]\"; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label[data-v-880410a2] { display: block; line-height: 40px; height: 40px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-label .ms-SearchBox-text[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active[data-v-880410a2]::before { visibility: visible; } @media only screen and (max-width: 639px) { .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-field[data-v-880410a2] { width: 100%; padding-right: 100px; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-icon[data-v-880410a2] { display: none; } .ms-SearchBox.ms-SearchBox--commandBar.is-active .ms-SearchBox-exit[data-v-880410a2] { display: inline-block; } .ms-SearchBox.ms-SearchBox--commandBar.is-active.has-text .ms-SearchBox-filter .ms-CommandButton-icon[data-v-880410a2] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } } .ms-Icon.ms-Icon--Search[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"16\" height=\"16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#0078d7\" stroke=\"none\" transform=\"translate(0, 2048) scale(1, -1)\" d=\"M1344 2048q97 0 187 -25t168 -71t142.5 -110.5t110.5 -142.5t71 -168t25 -187t-25 -187t-71 -168t-110.5 -142.5t-142.5 -110.5t-168 -71t-187 -25q-125 0 -239.5 42t-210.5 121l-785 -784q-19 -19 -45 -19t-45 19t-19 45t19 45l784 785q-79 96 -121 210.5t-42 239.5q0 97 25 187t71 168t110.5 142.5t142.5 110.5t168 71t187 25zM1344 768q119 0 224 45.5t183 123.5t123.5 183t45.5 224t-45.5 224t-123.5 183t-183 123.5t-224 45.5t-224 -45.5t-183 -123.5t-123.5 -183t-45.5 -224t45.5 -224t123.5 -183t183 -123.5t224 -45.5z\"/></svg>'); } .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"white\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } .ms-SearchBox--commandBar .ms-Icon.ms-Icon--Clear[data-v-880410a2] { content: url('data:image/svg+xml;utf8,<svg viewBox=\"0 -0 2048 2048\" width=\"14\" height=\"14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#a6a6a6\" stroke=\"none\" d=\"M1115 1024l914 -915l-90 -90l-915 914l-915 -914l-90 90l914 915l-914 915l90 90l915 -914l915 914l90 -90z\"/></svg>'); } ");},
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Spinner[data-v-74b796b6] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; position: relative; height: 20px; } .ms-Spinner.ms-Spinner--large[data-v-74b796b6] { height: 28px; } .ms-Spinner.ms-Spinner--large .ms-Spinner-label[data-v-74b796b6] { left: 34px; top: 6px; } .ms-Spinner-circle[data-v-74b796b6] { position: absolute; border-radius: 100px; background-color: \"[theme:themePrimary, default: #0078d7]\"; opacity: 0; } @media screen and (-ms-high-contrast: active) { .ms-Spinner-circle[data-v-74b796b6] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Spinner-circle[data-v-74b796b6] { background-color: \"[theme:black, default: #000000]\"; } } .ms-Spinner-label[data-v-74b796b6] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; position: relative; font-size: 12px; font-weight: 400; color: \"[theme:themePrimary, default: #0078d7]\"; left: 28px; top: 2px; } ");},
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

	var textField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"textField",staticClass:"ms-TextField",class:_vm.textFieldClass},[_c('label',{staticClass:"ms-Label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.type == 'multiline')?_c('textarea',{staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":"text","disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"change":_vm.changeEvent}}):_c('input',{staticClass:"ms-TextField-field",attrs:{"placeholder":_vm.placeholder,"type":_vm.inputType,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"input":_vm.updateValue,"change":_vm.changeEvent}})])},staticRenderFns: [],
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
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 14px; font-weight: 400; margin-bottom: 8px; } .ms-TextField .ms-Label[data-v-9e6e890e] { font-size: 14px; font-weight: 600; } .ms-TextField.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField.is-disabled[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-disabled[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.is-required .ms-Label[data-v-9e6e890e]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-webkit-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]::-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-moz-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-required[data-v-9e6e890e]:-ms-input-placeholder::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-TextField.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField-field[data-v-9e6e890e] { box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; border: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; border-radius: 0; font-weight: 300; font-size: 14px; color: \"[theme:neutralPrimary, default: #333333]\"; height: 32px; padding: 6px 12px 7px; width: 100%; min-width: 180px; outline: 0; text-overflow: ellipsis; } .ms-TextField-field[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } .ms-TextField-field[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField-field[data-v-9e6e890e]:hover, .ms-TextField-field[data-v-9e6e890e]:focus { border-color: #37006E; } } .ms-TextField-field[disabled][data-v-9e6e890e] { background-color: \"[theme:neutralLighter, default: #f4f4f4]\"; border-color: \"[theme:neutralLighter, default: #f4f4f4]\"; pointer-events: none; cursor: default; } .ms-TextField-field[data-v-9e6e890e]::-webkit-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]::-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-moz-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-field[data-v-9e6e890e]:-ms-input-placeholder { color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-TextField-description[data-v-9e6e890e] { color: \"[theme:neutralSecondaryAlt, default: #767676]\"; font-size: 11px; } .ms-TextField.ms-TextField--placeholder[data-v-9e6e890e] { position: relative; background-color: \"[theme:white, default: #ffffff]\"; } .ms-TextField.ms-TextField--placeholder .ms-TextField-field[data-v-9e6e890e] { position: relative; background-color: transparent; z-index: 5; } .ms-TextField.ms-TextField--placeholder .ms-Label[data-v-9e6e890e] { position: absolute; font-weight: 300; font-size: 14px; color: \"[theme:neutralSecondary, default: #666666]\"; padding: 6px 12px 7px; pointer-events: none; z-index: 0; } .ms-TextField.ms-TextField--placeholder.is-disabled[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--placeholder.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e] { border-bottom: 1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; display: table; width: 100%; min-width: 180px; } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: \"[theme:neutralSecondaryAlt, default: #767676]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:hover { border-color: #37006E; } } .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined[data-v-9e6e890e]:focus { border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-TextField.ms-TextField--underlined .ms-Label[data-v-9e6e890e] { font-size: 14px; margin-right: 8px; display: table-cell; vertical-align: top; padding-left: 12px; padding-top: 9px; height: 32px; width: 1%; white-space: nowrap; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e] { border: 0; float: left; display: table-cell; text-align: left; padding-top: 8px; padding-bottom: 3px; } .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:active, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:focus, .ms-TextField.ms-TextField--underlined .ms-TextField-field[data-v-9e6e890e]:hover { outline: 0; } .ms-TextField.ms-TextField--underlined.is-disabled[data-v-9e6e890e] { border-bottom-color: \"[theme:neutralLight, default: #eaeaea]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-Label[data-v-9e6e890e] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field[data-v-9e6e890e] { background-color: transparent; color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: \"[theme:themePrimary, default: #0078d7]\"; } @media screen and (-ms-high-contrast: active) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #1AEBFF; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-TextField.ms-TextField--underlined.is-active[data-v-9e6e890e] { border-color: #37006E; } } .ms-TextField.ms-TextField--multiline .ms-TextField-field[data-v-9e6e890e] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; color: \"[theme:neutralSecondary, default: #666666]\"; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; font-size: 14px; font-weight: 400; line-height: 17px; min-height: 60px; min-width: 260px; padding-top: 6px; overflow: auto; } ");},
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

	var Toggle = (function () {
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
	        this._toggleField.addEventListener("keyup", function (e) { return (e.keyCode === 32) ? _this._toggleHandler() : null; }, false);
	    };
	    Toggle.prototype._toggleHandler = function () {
	        this._toggleField.classList.toggle("is-selected");
	    };
	    return Toggle;
	}());

	var uiToggle = {_scopeId: 'data-v-3153c0f8',
	    beforeCreate: function beforeCreate(){ lib_1("/* Your use of the content in the files referenced here are subject to the terms of the license at http://aka.ms/fabric-font-license */ /* Theme related color values */ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ /* Get css for state objects for: alert, error, info, servere, success This includes color and background styles */ /* Get css for state objects for: alert, error, info, servere, success This includes only the color values */ /*** 100 Thin (Hairline) 200 Extra Light (Ultra Light) 300 Light 400 Normal 500 Medium 600 Semi Bold (Demi Bold) 700 Bold 800 Extra Bold (Ultra Bold) 900 Black (Heavy) **/ /* Natural Colors */ /* Base Colors */ /** Black #000 **/ /** Blue #0078d7 **/ /** Green #107c10 **/ /** Green #b4009e **/ /** Orange #d83b01 **/ /** Purble #5c2d91 **/ /** Red #e81123 **/ /*** Teal ***/ /** White **/ /** Yellow **/ /* State Colors */ /** Alerts **/ /** Error **/ /** Info ***/ /** Warning **/ /** Server Warning **/ /** Success **/ .ms-Label[data-v-3153c0f8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; color: \"[theme:neutralPrimary, default: #333333]\"; font-size: 12px; font-weight: 400; box-sizing: border-box; display: block; padding: 5px 0; } .ms-Label.is-required[data-v-3153c0f8]::after { content: ' *'; color: \"[theme:error, default: #a80000]\"; } .ms-Label.is-disabled[data-v-3153c0f8] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Toggle[data-v-3153c0f8] { font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, \"Roboto\", \"Helvetica Neue\", sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; font-weight: 400; box-sizing: border-box; margin: 0; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; position: relative; display: block; margin-bottom: 26px; } .ms-Toggle .ms-Label[data-v-3153c0f8] { position: relative; top: -2px; padding: 0 0 0 50px; } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { position: absolute; top: 3px; width: 10px; height: 10px; border-radius: 10px; content: ''; left: 4px; background-color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; transition-property: background, left; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { border: 2.5px solid \"[theme:white, default: #ffffff]\"; height: 15px; outline: 0; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { border-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]::before { right: auto; } .ms-Toggle .ms-Toggle-field .ms-Label--off[data-v-3153c0f8] { display: block; } .ms-Toggle .ms-Toggle-field .ms-Label--on[data-v-3153c0f8] { display: none; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:themePrimary, default: #0078d7]\"; border-color: \"[theme:themePrimary, default: #0078d7]\"; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { position: absolute; top: 3px; width: 10px; height: 10px; border-radius: 10px; content: ''; right: 4px; background-color: \"[theme:neutralSecondary, default: #666666]\"; outline: 1px solid transparent; transition-property: background, left; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { border: 2.5px solid \"[theme:white, default: #ffffff]\"; height: 15px; outline: 0; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { border-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]::before { background-color: \"[theme:white, default: #ffffff]\"; left: 28px; } .ms-Toggle .ms-Toggle-field.is-selected .ms-Label--off[data-v-3153c0f8] { display: none; } .ms-Toggle .ms-Toggle-field.is-selected .ms-Label--on[data-v-3153c0f8] { display: block; } @media screen and (-ms-high-contrast: active) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:white, default: #ffffff]\"; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8] { background-color: \"[theme:black, default: #000000]\"; } } .ms-Toggle:focus + .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle:hover + .ms-Toggle-field[data-v-3153c0f8] { border-color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Toggle:focus + .ms-Toggle-field[data-v-3153c0f8]::before, .ms-Toggle:hover + .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle:focus:checked + .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle:hover:checked + .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:themeDarkAlt, default: #106ebe]\"; border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-Toggle:focus:checked + .ms-Toggle-field[data-v-3153c0f8]::before, .ms-Toggle:hover:checked + .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:white, default: #ffffff]\"; } .ms-Toggle:active:checked + .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:themeDark, default: #005a9e]\"; border-color: \"[theme:themeDark, default: #005a9e]\"; } .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]:focus, .ms-Toggle .ms-Toggle-field[data-v-3153c0f8]:hover { border-color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]:focus, .ms-Toggle .ms-Toggle-field.is-selected[data-v-3153c0f8]:hover { background-color: \"[theme:themeDarkAlt, default: #106ebe]\"; border-color: \"[theme:themeDarkAlt, default: #106ebe]\"; } .ms-Toggle .ms-Toggle-field .ms-Label[data-v-3153c0f8] { color: \"[theme:black, default: #000000]\"; user-select: none; } .ms-Toggle .ms-Toggle-field:hover .ms-Label[data-v-3153c0f8] { color: \"[theme:black, default: #000000]\"; } .ms-Toggle .ms-Toggle-field:active .ms-Label[data-v-3153c0f8] { color: \"[theme:neutralPrimary, default: #333333]\"; } .ms-Toggle.is-disabled .ms-Label[data-v-3153c0f8] { color: \"[theme:neutralTertiary, default: #a6a6a6]\"; } .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8] { background-color: \"[theme:white, default: #ffffff]\"; border-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; pointer-events: none; cursor: default; } .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { background-color: \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"; } @media screen and (-ms-high-contrast: active) { .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { border-color: #00ff00; } } @media screen and (-ms-high-contrast: black-on-white) { .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8], .ms-Toggle.is-disabled .ms-Toggle-field[data-v-3153c0f8]::before { border-color: #600000; } } .ms-Toggle-description[data-v-3153c0f8] { position: relative; font-size: 14px; vertical-align: top; display: block; margin-bottom: 8px; } .ms-Toggle-field[data-v-3153c0f8] { position: relative; display: inline-block; width: 45px; height: 20px; box-sizing: border-box; border: 2px solid \"[theme:neutralTertiary, default: #a6a6a6]\"; border-radius: 20px; cursor: pointer; transition-property: background, left, border-color; transition-duration: 250ms; transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1); outline: 0; } .ms-Toggle-field[data-v-3153c0f8]:hover, .ms-Toggle-field[data-v-3153c0f8]:focus { border-color: \"[theme:neutralSecondary, default: #666666]\"; } .ms-Toggle-input[data-v-3153c0f8] { display: none; } .ms-Toggle.ms-Toggle--textLeft[data-v-3153c0f8] { width: 225px; margin-bottom: 40px; } .ms-Toggle.ms-Toggle--textLeft .ms-Toggle-description[data-v-3153c0f8] { display: inline-block; max-width: 150px; top: -3px; margin-bottom: 0; } .ms-Toggle.ms-Toggle--textLeft .ms-Toggle-field[data-v-3153c0f8] { float: right; } ");},
	    beforeMount: function beforeMount(){
	        this.$fabric = {
	            Toggle : Toggle
	        };
	    },
	    extends :  toggle
	}

	var baseUrl = "https://spoprod-a.akamaihd.net/files/fabric/assets/icons"; // this is the baseUrl used by MS!
	var scopeId = "f04906fd";
	function GetIcon(name, unicode, bundle)
	{
	    // *please not, we manually scope the css
	    return function (resolve){ //factory: https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
	        lib_1(("\n            @font-face{\n                font-family:fabricmdl2icons" + scopeId + bundle + ";\n                src: url(" + baseUrl + "/fabric-icons-" + bundle + ".woff) format(\"woff\")\n            }\n            .ms-Icon[data-v-" + scopeId + "]{display:inline-block;font-style:normal;font-weight:400;speak:none}\n            .ms-Icon--" + name + "[data-v-" + scopeId + "]:before{font-family:fabricmdl2icons" + scopeId + bundle + "; content:\"" + unicode + "\"}\n        "));
	        resolve({template : ("<i data-v-" + scopeId + " class='ms-Icon ms-Icon--" + name + "'></i>")});
	    };
	}

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

	exports.uiButton = uiButton;
	exports.uiCallout = uiCallout;
	exports.uiCheckbox = uiCheckbox;
	exports.uiChoiceField = uiChoiceField;
	exports.uiChoiceFieldGroup = uiChoiceFieldGroup;
	exports.uiContextualMenu = uiContextualMenu;
	exports.uiContextualMenuItem = uiContextualMenuItem;
	exports.uiCommandBar = uiCommandBar;
	exports.uiCommandButton = uiCommandButton;
	exports.uiDialog = uiDialog;
	exports.uiDropdown = uiDropdown;
	exports.uiDropdownItem = uiDropdownItem;
	exports.uiLabel = uiLabel;
	exports.uiLink = uiLink;
	exports.uiList = uiList;
	exports.uiListActions = uiListActions;
	exports.uiListActionItem = uiListActionItem;
	exports.uiListItem = uiListItem;
	exports.uiMessagebar = uiMessagebar;
	exports.uiOverlay = uiOverlay;
	exports.uiPanel = uiPanel;
	exports.uiPersona = uiPersona;
	exports.uiPivot = uiPivot;
	exports.uiPivotItem = uiPivotItem;
	exports.uiProgressIndicator = uiProgressIndicator;
	exports.uiSearchBox = uiSearchbox;
	exports.uiSpinner = uiSpinner;
	exports.uiTextfield = uiTextfield;
	exports.uiToggle = uiToggle;
	exports.uiIconGlobalNavButton = uiIconGlobalNavButton;
	exports.uiIconChevronDown = uiIconChevronDown;
	exports.uiIconChevronUp = uiIconChevronUp;
	exports.uiIconEdit = uiIconEdit;
	exports.uiIconAdd = uiIconAdd;
	exports.uiIconCancel = uiIconCancel;
	exports.uiIconMore = uiIconMore;
	exports.uiIconSettings = uiIconSettings;
	exports.uiIconMail = uiIconMail;
	exports.uiIconFilter = uiIconFilter;
	exports.uiIconSearch = uiIconSearch;
	exports.uiIconShare = uiIconShare;
	exports.uiIconBlockedSite = uiIconBlockedSite;
	exports.uiIconFavoriteStar = uiIconFavoriteStar;
	exports.uiIconFavoriteStarFill = uiIconFavoriteStarFill;
	exports.uiIconCheckMark = uiIconCheckMark;
	exports.uiIconDelete = uiIconDelete;
	exports.uiIconChevronLeft = uiIconChevronLeft;
	exports.uiIconChevronRight = uiIconChevronRight;
	exports.uiIconCalendar = uiIconCalendar;
	exports.uiIconMegaphone = uiIconMegaphone;
	exports.uiIconUndo = uiIconUndo;
	exports.uiIconFlag = uiIconFlag;
	exports.uiIconPage = uiIconPage;
	exports.uiIconPinned = uiIconPinned;
	exports.uiIconView = uiIconView;
	exports.uiIconClear = uiIconClear;
	exports.uiIconDownload = uiIconDownload;
	exports.uiIconUpload = uiIconUpload;
	exports.uiIconFolder = uiIconFolder;
	exports.uiIconSort = uiIconSort;
	exports.uiIconAlignRight = uiIconAlignRight;
	exports.uiIconAlignLeft = uiIconAlignLeft;
	exports.uiIconTag = uiIconTag;
	exports.uiIconAddFriend = uiIconAddFriend;
	exports.uiIconInfo = uiIconInfo;
	exports.uiIconSortLines = uiIconSortLines;
	exports.uiIconList = uiIconList;
	exports.uiIconCircleRing = uiIconCircleRing;
	exports.uiIconHeart = uiIconHeart;
	exports.uiIconHeartFill = uiIconHeartFill;
	exports.uiIconTiles = uiIconTiles;
	exports.uiIconEmbed = uiIconEmbed;
	exports.uiIconGlimmer = uiIconGlimmer;
	exports.uiIconAscending = uiIconAscending;
	exports.uiIconDescending = uiIconDescending;
	exports.uiIconSortUp = uiIconSortUp;
	exports.uiIconSortDown = uiIconSortDown;
	exports.uiIconSyncToPC = uiIconSyncToPC;
	exports.uiIconLargeGrid = uiIconLargeGrid;
	exports.uiIconSkypeCheck = uiIconSkypeCheck;
	exports.uiIconSkypeClock = uiIconSkypeClock;
	exports.uiIconSkypeMinus = uiIconSkypeMinus;
	exports.uiIconClearFilter = uiIconClearFilter;
	exports.uiIconFlow = uiIconFlow;
	exports.uiIconStatusCircleCheckmark = uiIconStatusCircleCheckmark;
	exports.uiIconMoreVertical = uiIconMoreVertical;
	exports.uiIconDecreaseIndentLegacy = uiIconDecreaseIndentLegacy;
	exports.uiIconIncreaseIndentLegacy = uiIconIncreaseIndentLegacy;
	exports.uiIconSizeLegacy = uiIconSizeLegacy;
	exports.uiIconInternetSharing = uiIconInternetSharing;
	exports.uiIconBrightness = uiIconBrightness;
	exports.uiIconMapPin = uiIconMapPin;
	exports.uiIconAirplane = uiIconAirplane;
	exports.uiIconTablet = uiIconTablet;
	exports.uiIconQuickNote = uiIconQuickNote;
	exports.uiIconVideo = uiIconVideo;
	exports.uiIconPeople = uiIconPeople;
	exports.uiIconPhone = uiIconPhone;
	exports.uiIconPin = uiIconPin;
	exports.uiIconShop = uiIconShop;
	exports.uiIconStop = uiIconStop;
	exports.uiIconLink = uiIconLink;
	exports.uiIconAllApps = uiIconAllApps;
	exports.uiIconZoom = uiIconZoom;
	exports.uiIconZoomOut = uiIconZoomOut;
	exports.uiIconMicrophone = uiIconMicrophone;
	exports.uiIconCamera = uiIconCamera;
	exports.uiIconAttach = uiIconAttach;
	exports.uiIconSend = uiIconSend;
	exports.uiIconFavoriteList = uiIconFavoriteList;
	exports.uiIconPageSolid = uiIconPageSolid;
	exports.uiIconForward = uiIconForward;
	exports.uiIconBack = uiIconBack;
	exports.uiIconRefresh = uiIconRefresh;
	exports.uiIconLock = uiIconLock;
	exports.uiIconReportHacked = uiIconReportHacked;
	exports.uiIconEMI = uiIconEMI;
	exports.uiIconMiniLink = uiIconMiniLink;
	exports.uiIconBlocked = uiIconBlocked;
	exports.uiIconReadingMode = uiIconReadingMode;
	exports.uiIconFavicon = uiIconFavicon;
	exports.uiIconRemove = uiIconRemove;
	exports.uiIconCheckbox = uiIconCheckbox;
	exports.uiIconCheckboxComposite = uiIconCheckboxComposite;
	exports.uiIconCheckboxIndeterminate = uiIconCheckboxIndeterminate;
	exports.uiIconCheckboxCompositeReversed = uiIconCheckboxCompositeReversed;
	exports.uiIconBackToWindow = uiIconBackToWindow;
	exports.uiIconFullScreen = uiIconFullScreen;
	exports.uiIconPrint = uiIconPrint;
	exports.uiIconUp = uiIconUp;
	exports.uiIconDown = uiIconDown;
	exports.uiIconOEM = uiIconOEM;
	exports.uiIconSave = uiIconSave;
	exports.uiIconCloud = uiIconCloud;
	exports.uiIconCommandPrompt = uiIconCommandPrompt;
	exports.uiIconSad = uiIconSad;
	exports.uiIconSIPMove = uiIconSIPMove;
	exports.uiIconEraseTool = uiIconEraseTool;
	exports.uiIconGripperTool = uiIconGripperTool;
	exports.uiIconDialpad = uiIconDialpad;
	exports.uiIconPageLeft = uiIconPageLeft;
	exports.uiIconPageRight = uiIconPageRight;
	exports.uiIconMultiSelect = uiIconMultiSelect;
	exports.uiIconKeyboardClassic = uiIconKeyboardClassic;
	exports.uiIconPlay = uiIconPlay;
	exports.uiIconPause = uiIconPause;
	exports.uiIconEmoji2 = uiIconEmoji2;
	exports.uiIconGripperBarHorizontal = uiIconGripperBarHorizontal;
	exports.uiIconSystem = uiIconSystem;
	exports.uiIconPersonalize = uiIconPersonalize;
	exports.uiIconSearchAndApps = uiIconSearchAndApps;
	exports.uiIconGlobe = uiIconGlobe;
	exports.uiIconContactInfo = uiIconContactInfo;
	exports.uiIconUnpin = uiIconUnpin;
	exports.uiIconContact = uiIconContact;
	exports.uiIconMemo = uiIconMemo;
	exports.uiIconPaste = uiIconPaste;
	exports.uiIconWindowsLogo = uiIconWindowsLogo;
	exports.uiIconError = uiIconError;
	exports.uiIconGripperBarVertical = uiIconGripperBarVertical;
	exports.uiIconUnlock = uiIconUnlock;
	exports.uiIconAutoEnhanceOn = uiIconAutoEnhanceOn;
	exports.uiIconAutoEnhanceOff = uiIconAutoEnhanceOff;
	exports.uiIconColor = uiIconColor;
	exports.uiIconSaveAs = uiIconSaveAs;
	exports.uiIconLight = uiIconLight;
	exports.uiIconFilters = uiIconFilters;
	exports.uiIconAspectRatio = uiIconAspectRatio;
	exports.uiIconContrast = uiIconContrast;
	exports.uiIconRedo = uiIconRedo;
	exports.uiIconCrop = uiIconCrop;
	exports.uiIconPhotoCollection = uiIconPhotoCollection;
	exports.uiIconAlbum = uiIconAlbum;
	exports.uiIconRotate = uiIconRotate;
	exports.uiIconPanoIndicator = uiIconPanoIndicator;
	exports.uiIconRedEye = uiIconRedEye;
	exports.uiIconThumbnailView = uiIconThumbnailView;
	exports.uiIconPackage = uiIconPackage;
	exports.uiIconWarning = uiIconWarning;
	exports.uiIconFinancial = uiIconFinancial;
	exports.uiIconEducation = uiIconEducation;
	exports.uiIconShoppingCart = uiIconShoppingCart;
	exports.uiIconTrain = uiIconTrain;
	exports.uiIconMove = uiIconMove;
	exports.uiIconTouchPointer = uiIconTouchPointer;
	exports.uiIconMerge = uiIconMerge;
	exports.uiIconTurnRight = uiIconTurnRight;
	exports.uiIconFerry = uiIconFerry;
	exports.uiIconHighlight = uiIconHighlight;
	exports.uiIconPowerButton = uiIconPowerButton;
	exports.uiIconTab = uiIconTab;
	exports.uiIconAdmin = uiIconAdmin;
	exports.uiIconTVMonitor = uiIconTVMonitor;
	exports.uiIconSpeakers = uiIconSpeakers;
	exports.uiIconStackIndicator = uiIconStackIndicator;
	exports.uiIconNav2DMapView = uiIconNav2DMapView;
	exports.uiIconCar = uiIconCar;
	exports.uiIconBus = uiIconBus;
	exports.uiIconEatDrink = uiIconEatDrink;
	exports.uiIconLocationCircle = uiIconLocationCircle;
	exports.uiIconHome = uiIconHome;
	exports.uiIconSwitcherStartEnd = uiIconSwitcherStartEnd;
	exports.uiIconParkingLocation = uiIconParkingLocation;
	exports.uiIconIncidentTriangle = uiIconIncidentTriangle;
	exports.uiIconTouch = uiIconTouch;
	exports.uiIconMapDirections = uiIconMapDirections;
	exports.uiIconCaretHollow = uiIconCaretHollow;
	exports.uiIconCaretSolid = uiIconCaretSolid;
	exports.uiIconHistory = uiIconHistory;
	exports.uiIconLocation = uiIconLocation;
	exports.uiIconWork = uiIconWork;
	exports.uiIconRecent = uiIconRecent;
	exports.uiIconHotel = uiIconHotel;
	exports.uiIconLocationDot = uiIconLocationDot;
	exports.uiIconDictionary = uiIconDictionary;
	exports.uiIconChromeBack = uiIconChromeBack;
	exports.uiIconFolderOpen = uiIconFolderOpen;
	exports.uiIconPinnedFill = uiIconPinnedFill;
	exports.uiIconRevToggleKey = uiIconRevToggleKey;
	exports.uiIconPrevious = uiIconPrevious;
	exports.uiIconNext = uiIconNext;
	exports.uiIconSync = uiIconSync;
	exports.uiIconHelp = uiIconHelp;
	exports.uiIconEmoji = uiIconEmoji;
	exports.uiIconMailForward = uiIconMailForward;
	exports.uiIconClosePane = uiIconClosePane;
	exports.uiIconOpenPane = uiIconOpenPane;
	exports.uiIconPreviewLink = uiIconPreviewLink;
	exports.uiIconZoomIn = uiIconZoomIn;
	exports.uiIconBookmarks = uiIconBookmarks;
	exports.uiIconDocument = uiIconDocument;
	exports.uiIconProtectedDocument = uiIconProtectedDocument;
	exports.uiIconOpenInNewWindow = uiIconOpenInNewWindow;
	exports.uiIconMailFill = uiIconMailFill;
	exports.uiIconViewAll = uiIconViewAll;
	exports.uiIconSwitch = uiIconSwitch;
	exports.uiIconRename = uiIconRename;
	exports.uiIconRemote = uiIconRemote;
	exports.uiIconSelectAll = uiIconSelectAll;
	exports.uiIconOrientation = uiIconOrientation;
	exports.uiIconImport = uiIconImport;
	exports.uiIconPicture = uiIconPicture;
	exports.uiIconChromeClose = uiIconChromeClose;
	exports.uiIconShowResults = uiIconShowResults;
	exports.uiIconMessage = uiIconMessage;
	exports.uiIconCalendarDay = uiIconCalendarDay;
	exports.uiIconCalendarWeek = uiIconCalendarWeek;
	exports.uiIconMailReplyAll = uiIconMailReplyAll;
	exports.uiIconRead = uiIconRead;
	exports.uiIconCut = uiIconCut;
	exports.uiIconPaymentCard = uiIconPaymentCard;
	exports.uiIconCopy = uiIconCopy;
	exports.uiIconImportant = uiIconImportant;
	exports.uiIconMailReply = uiIconMailReply;
	exports.uiIconGotoToday = uiIconGotoToday;
	exports.uiIconFont = uiIconFont;
	exports.uiIconFontColor = uiIconFontColor;
	exports.uiIconFolderFill = uiIconFolderFill;
	exports.uiIconPermissions = uiIconPermissions;
	exports.uiIconDisableUpdates = uiIconDisableUpdates;
	exports.uiIconUnfavorite = uiIconUnfavorite;
	exports.uiIconItalic = uiIconItalic;
	exports.uiIconUnderline = uiIconUnderline;
	exports.uiIconBold = uiIconBold;
	exports.uiIconMoveToFolder = uiIconMoveToFolder;
	exports.uiIconDislike = uiIconDislike;
	exports.uiIconLike = uiIconLike;
	exports.uiIconAlignCenter = uiIconAlignCenter;
	exports.uiIconOpenFile = uiIconOpenFile;
	exports.uiIconFontDecrease = uiIconFontDecrease;
	exports.uiIconFontIncrease = uiIconFontIncrease;
	exports.uiIconFontSize = uiIconFontSize;
	exports.uiIconCellPhone = uiIconCellPhone;
	exports.uiIconCalculator = uiIconCalculator;
	exports.uiIconLibrary = uiIconLibrary;
	exports.uiIconPostUpdate = uiIconPostUpdate;
	exports.uiIconNewFolder = uiIconNewFolder;
	exports.uiIconCalendarReply = uiIconCalendarReply;
	exports.uiIconUnsyncFolder = uiIconUnsyncFolder;
	exports.uiIconSyncFolder = uiIconSyncFolder;
	exports.uiIconBlockContact = uiIconBlockContact;
	exports.uiIconAccept = uiIconAccept;
	exports.uiIconBulletedList = uiIconBulletedList;
	exports.uiIconPreview = uiIconPreview;
	exports.uiIconNews = uiIconNews;
	exports.uiIconChat = uiIconChat;
	exports.uiIconGroup = uiIconGroup;
	exports.uiIconWorld = uiIconWorld;
	exports.uiIconComment = uiIconComment;
	exports.uiIconDockLeft = uiIconDockLeft;
	exports.uiIconDockRight = uiIconDockRight;
	exports.uiIconRepair = uiIconRepair;
	exports.uiIconAccounts = uiIconAccounts;
	exports.uiIconRadioBullet = uiIconRadioBullet;
	exports.uiIconStopwatch = uiIconStopwatch;
	exports.uiIconClock = uiIconClock;
	exports.uiIconWorldClock = uiIconWorldClock;
	exports.uiIconAlarmClock = uiIconAlarmClock;
	exports.uiIconPhoto = uiIconPhoto;
	exports.uiIconHospital = uiIconHospital;
	exports.uiIconTimer = uiIconTimer;
	exports.uiIconFullCircleMask = uiIconFullCircleMask;
	exports.uiIconLocationFill = uiIconLocationFill;
	exports.uiIconChromeMinimize = uiIconChromeMinimize;
	exports.uiIconAnnotation = uiIconAnnotation;
	exports.uiIconFingerprint = uiIconFingerprint;
	exports.uiIconHandwriting = uiIconHandwriting;
	exports.uiIconCompleted = uiIconCompleted;
	exports.uiIconLabel = uiIconLabel;
	exports.uiIconFlickDown = uiIconFlickDown;
	exports.uiIconFlickUp = uiIconFlickUp;
	exports.uiIconFlickLeft = uiIconFlickLeft;
	exports.uiIconFlickRight = uiIconFlickRight;
	exports.uiIconMiniExpand = uiIconMiniExpand;
	exports.uiIconMiniContract = uiIconMiniContract;
	exports.uiIconStreaming = uiIconStreaming;
	exports.uiIconMusicInCollection = uiIconMusicInCollection;
	exports.uiIconOneDriveLogo = uiIconOneDriveLogo;
	exports.uiIconCompassNW = uiIconCompassNW;
	exports.uiIconCode = uiIconCode;
	exports.uiIconLightningBolt = uiIconLightningBolt;
	exports.uiIconCalculatorMultiply = uiIconCalculatorMultiply;
	exports.uiIconCalculatorAddition = uiIconCalculatorAddition;
	exports.uiIconCalculatorSubtract = uiIconCalculatorSubtract;
	exports.uiIconCalculatorEqualTo = uiIconCalculatorEqualTo;
	exports.uiIconPrintfaxPrinterFile = uiIconPrintfaxPrinterFile;
	exports.uiIconCommunications = uiIconCommunications;
	exports.uiIconHeadset = uiIconHeadset;
	exports.uiIconHealth = uiIconHealth;
	exports.uiIconChevronUpSmall = uiIconChevronUpSmall;
	exports.uiIconChevronDownSmall = uiIconChevronDownSmall;
	exports.uiIconChevronLeftSmall = uiIconChevronLeftSmall;
	exports.uiIconChevronRightSmall = uiIconChevronRightSmall;
	exports.uiIconChevronUpMed = uiIconChevronUpMed;
	exports.uiIconChevronDownMed = uiIconChevronDownMed;
	exports.uiIconChevronLeftMed = uiIconChevronLeftMed;
	exports.uiIconChevronRightMed = uiIconChevronRightMed;
	exports.uiIconPC1 = uiIconPC1;
	exports.uiIconPresenceChickletVideo = uiIconPresenceChickletVideo;
	exports.uiIconReply = uiIconReply;
	exports.uiIconHalfAlpha = uiIconHalfAlpha;
	exports.uiIconConstructionCone = uiIconConstructionCone;
	exports.uiIconDoubleChevronLeftMed = uiIconDoubleChevronLeftMed;
	exports.uiIconVolume0 = uiIconVolume0;
	exports.uiIconVolume1 = uiIconVolume1;
	exports.uiIconVolume2 = uiIconVolume2;
	exports.uiIconVolume3 = uiIconVolume3;
	exports.uiIconChart = uiIconChart;
	exports.uiIconRobot = uiIconRobot;
	exports.uiIconManufacturing = uiIconManufacturing;
	exports.uiIconLockSolid = uiIconLockSolid;
	exports.uiIconBidiLtr = uiIconBidiLtr;
	exports.uiIconBidiRtl = uiIconBidiRtl;
	exports.uiIconRightDoubleQuote = uiIconRightDoubleQuote;
	exports.uiIconSunny = uiIconSunny;
	exports.uiIconCloudWeather = uiIconCloudWeather;
	exports.uiIconCloudy = uiIconCloudy;
	exports.uiIconPartlyCloudyDay = uiIconPartlyCloudyDay;
	exports.uiIconPartlyCloudyNight = uiIconPartlyCloudyNight;
	exports.uiIconClearNight = uiIconClearNight;
	exports.uiIconRainShowersDay = uiIconRainShowersDay;
	exports.uiIconRain = uiIconRain;
	exports.uiIconThunderstorms = uiIconThunderstorms;
	exports.uiIconRainSnow = uiIconRainSnow;
	exports.uiIconSnow = uiIconSnow;
	exports.uiIconBlowingSnow = uiIconBlowingSnow;
	exports.uiIconFrigid = uiIconFrigid;
	exports.uiIconFog = uiIconFog;
	exports.uiIconSqualls = uiIconSqualls;
	exports.uiIconDuststorm = uiIconDuststorm;
	exports.uiIconUnknown = uiIconUnknown;
	exports.uiIconPrecipitation = uiIconPrecipitation;
	exports.uiIconRibbon = uiIconRibbon;
	exports.uiIconAreaChart = uiIconAreaChart;
	exports.uiIconAssign = uiIconAssign;
	exports.uiIconCheckList = uiIconCheckList;
	exports.uiIconDiagnostic = uiIconDiagnostic;
	exports.uiIconGenerate = uiIconGenerate;
	exports.uiIconLineChart = uiIconLineChart;
	exports.uiIconEqualizer = uiIconEqualizer;
	exports.uiIconBarChartHorizontal = uiIconBarChartHorizontal;
	exports.uiIconBarChartVertical = uiIconBarChartVertical;
	exports.uiIconFreezing = uiIconFreezing;
	exports.uiIconProcessing = uiIconProcessing;
	exports.uiIconSnowShowerDay = uiIconSnowShowerDay;
	exports.uiIconHailDay = uiIconHailDay;
	exports.uiIconWorkFlow = uiIconWorkFlow;
	exports.uiIconHourGlass = uiIconHourGlass;
	exports.uiIconStoreLogoMed20 = uiIconStoreLogoMed20;
	exports.uiIconTimeSheet = uiIconTimeSheet;
	exports.uiIconTriangleSolid = uiIconTriangleSolid;
	exports.uiIconVideoSolid = uiIconVideoSolid;
	exports.uiIconRainShowersNight = uiIconRainShowersNight;
	exports.uiIconSnowShowerNight = uiIconSnowShowerNight;
	exports.uiIconTeamwork = uiIconTeamwork;
	exports.uiIconHailNight = uiIconHailNight;
	exports.uiIconPeopleAdd = uiIconPeopleAdd;
	exports.uiIconGlasses = uiIconGlasses;
	exports.uiIconDateTime2 = uiIconDateTime2;
	exports.uiIconShield = uiIconShield;
	exports.uiIconHeader1 = uiIconHeader1;
	exports.uiIconPageAdd = uiIconPageAdd;
	exports.uiIconNumberedList = uiIconNumberedList;
	exports.uiIconPowerBILogo = uiIconPowerBILogo;
	exports.uiIconInfo2 = uiIconInfo2;
	exports.uiIconMusicInCollectionFill = uiIconMusicInCollectionFill;
	exports.uiIconAsterisk = uiIconAsterisk;
	exports.uiIconErrorBadge = uiIconErrorBadge;
	exports.uiIconCircleFill = uiIconCircleFill;
	exports.uiIconRecord2 = uiIconRecord2;
	exports.uiIconAllAppsMirrored = uiIconAllAppsMirrored;
	exports.uiIconBookmarksMirrored = uiIconBookmarksMirrored;
	exports.uiIconBulletedListMirrored = uiIconBulletedListMirrored;
	exports.uiIconCaretHollowMirrored = uiIconCaretHollowMirrored;
	exports.uiIconCaretSolidMirrored = uiIconCaretSolidMirrored;
	exports.uiIconChromeBackMirrored = uiIconChromeBackMirrored;
	exports.uiIconClosePaneMirrored = uiIconClosePaneMirrored;
	exports.uiIconDockLeftMirrored = uiIconDockLeftMirrored;
	exports.uiIconDoubleChevronLeftMedMirrored = uiIconDoubleChevronLeftMedMirrored;
	exports.uiIconHelpMirrored = uiIconHelpMirrored;
	exports.uiIconImportMirrored = uiIconImportMirrored;
	exports.uiIconListMirrored = uiIconListMirrored;
	exports.uiIconMailForwardMirrored = uiIconMailForwardMirrored;
	exports.uiIconMailReplyMirrored = uiIconMailReplyMirrored;
	exports.uiIconMailReplyAllMirrored = uiIconMailReplyAllMirrored;
	exports.uiIconOpenPaneMirrored = uiIconOpenPaneMirrored;
	exports.uiIconParkingLocationMirrored = uiIconParkingLocationMirrored;
	exports.uiIconSendMirrored = uiIconSendMirrored;
	exports.uiIconShowResultsMirrored = uiIconShowResultsMirrored;
	exports.uiIconThumbnailViewMirrored = uiIconThumbnailViewMirrored;
	exports.uiIconDevices3 = uiIconDevices3;
	exports.uiIconLightbulb = uiIconLightbulb;
	exports.uiIconStatusTriangle = uiIconStatusTriangle;
	exports.uiIconVolumeDisabled = uiIconVolumeDisabled;
	exports.uiIconPuzzle = uiIconPuzzle;
	exports.uiIconEmojiNeutral = uiIconEmojiNeutral;
	exports.uiIconEmojiDisappointed = uiIconEmojiDisappointed;
	exports.uiIconHomeSolid = uiIconHomeSolid;
	exports.uiIconRinger = uiIconRinger;
	exports.uiIconPDF = uiIconPDF;
	exports.uiIconHeartBroken = uiIconHeartBroken;
	exports.uiIconStoreLogo16 = uiIconStoreLogo16;
	exports.uiIconMultiSelectMirrored = uiIconMultiSelectMirrored;
	exports.uiIconBroom = uiIconBroom;
	exports.uiIconCocktails = uiIconCocktails;
	exports.uiIconWines = uiIconWines;
	exports.uiIconArticles = uiIconArticles;
	exports.uiIconCycling = uiIconCycling;
	exports.uiIconDietPlanNotebook = uiIconDietPlanNotebook;
	exports.uiIconPill = uiIconPill;
	exports.uiIconExerciseTracker = uiIconExerciseTracker;
	exports.uiIconHandsFree = uiIconHandsFree;
	exports.uiIconMedical = uiIconMedical;
	exports.uiIconRunning = uiIconRunning;
	exports.uiIconWeights = uiIconWeights;
	exports.uiIconTrackers = uiIconTrackers;
	exports.uiIconAddNotes = uiIconAddNotes;
	exports.uiIconAllCurrency = uiIconAllCurrency;
	exports.uiIconBarChart4 = uiIconBarChart4;
	exports.uiIconCirclePlus = uiIconCirclePlus;
	exports.uiIconCoffee = uiIconCoffee;
	exports.uiIconCotton = uiIconCotton;
	exports.uiIconMarket = uiIconMarket;
	exports.uiIconMoney = uiIconMoney;
	exports.uiIconPieDouble = uiIconPieDouble;
	exports.uiIconPieSingle = uiIconPieSingle;
	exports.uiIconRemoveFilter = uiIconRemoveFilter;
	exports.uiIconSavings = uiIconSavings;
	exports.uiIconSell = uiIconSell;
	exports.uiIconStockDown = uiIconStockDown;
	exports.uiIconStockUp = uiIconStockUp;
	exports.uiIconLamp = uiIconLamp;
	exports.uiIconSource = uiIconSource;
	exports.uiIconMSNVideos = uiIconMSNVideos;
	exports.uiIconCricket = uiIconCricket;
	exports.uiIconGolf = uiIconGolf;
	exports.uiIconBaseball = uiIconBaseball;
	exports.uiIconSoccer = uiIconSoccer;
	exports.uiIconMoreSports = uiIconMoreSports;
	exports.uiIconAutoRacing = uiIconAutoRacing;
	exports.uiIconCollegeHoops = uiIconCollegeHoops;
	exports.uiIconCollegeFootball = uiIconCollegeFootball;
	exports.uiIconProFootball = uiIconProFootball;
	exports.uiIconProHockey = uiIconProHockey;
	exports.uiIconRugby = uiIconRugby;
	exports.uiIconSubstitutionsIn = uiIconSubstitutionsIn;
	exports.uiIconTennis = uiIconTennis;
	exports.uiIconArrivals = uiIconArrivals;
	exports.uiIconDesign = uiIconDesign;
	exports.uiIconWebsite = uiIconWebsite;
	exports.uiIconDrop = uiIconDrop;
	exports.uiIconSkiResorts = uiIconSkiResorts;
	exports.uiIconSnowflake = uiIconSnowflake;
	exports.uiIconBusSolid = uiIconBusSolid;
	exports.uiIconFerrySolid = uiIconFerrySolid;
	exports.uiIconAirplaneSolid = uiIconAirplaneSolid;
	exports.uiIconTrainSolid = uiIconTrainSolid;
	exports.uiIconTicket = uiIconTicket;
	exports.uiIconDevices4 = uiIconDevices4;
	exports.uiIconAzureLogo = uiIconAzureLogo;
	exports.uiIconBingLogo = uiIconBingLogo;
	exports.uiIconMSNLogo = uiIconMSNLogo;
	exports.uiIconOutlookLogoInverse = uiIconOutlookLogoInverse;
	exports.uiIconOfficeLogo = uiIconOfficeLogo;
	exports.uiIconSkypeLogo = uiIconSkypeLogo;
	exports.uiIconDoor = uiIconDoor;
	exports.uiIconEditMirrored = uiIconEditMirrored;
	exports.uiIconGiftCard = uiIconGiftCard;
	exports.uiIconDoubleBookmark = uiIconDoubleBookmark;
	exports.uiIconStatusErrorFull = uiIconStatusErrorFull;
	exports.uiIconCertificate = uiIconCertificate;
	exports.uiIconFastForward = uiIconFastForward;
	exports.uiIconRewind = uiIconRewind;
	exports.uiIconPhoto2 = uiIconPhoto2;
	exports.uiIconOpenSource = uiIconOpenSource;
	exports.uiIconMovers = uiIconMovers;
	exports.uiIconCloudDownload = uiIconCloudDownload;
	exports.uiIconFamily = uiIconFamily;
	exports.uiIconWindDirection = uiIconWindDirection;
	exports.uiIconBug = uiIconBug;
	exports.uiIconSiteScan = uiIconSiteScan;
	exports.uiIconBrowserScreenShot = uiIconBrowserScreenShot;
	exports.uiIconF12DevTools = uiIconF12DevTools;
	exports.uiIconCSS = uiIconCSS;
	exports.uiIconJS = uiIconJS;
	exports.uiIconDeliveryTruck = uiIconDeliveryTruck;
	exports.uiIconReminderPerson = uiIconReminderPerson;
	exports.uiIconReminderGroup = uiIconReminderGroup;
	exports.uiIconTabletMode = uiIconTabletMode;
	exports.uiIconUmbrella = uiIconUmbrella;
	exports.uiIconNetworkTower = uiIconNetworkTower;
	exports.uiIconCityNext = uiIconCityNext;
	exports.uiIconSection = uiIconSection;
	exports.uiIconOneNoteLogoInverse = uiIconOneNoteLogoInverse;
	exports.uiIconToggleFilled = uiIconToggleFilled;
	exports.uiIconToggleBorder = uiIconToggleBorder;
	exports.uiIconSliderThumb = uiIconSliderThumb;
	exports.uiIconToggleThumb = uiIconToggleThumb;
	exports.uiIconDocumentation = uiIconDocumentation;
	exports.uiIconBadge = uiIconBadge;
	exports.uiIconGiftbox = uiIconGiftbox;
	exports.uiIconVisualStudioLogo = uiIconVisualStudioLogo;
	exports.uiIconExcelLogoInverse = uiIconExcelLogoInverse;
	exports.uiIconWordLogoInverse = uiIconWordLogoInverse;
	exports.uiIconPowerPointLogoInverse = uiIconPowerPointLogoInverse;
	exports.uiIconCafe = uiIconCafe;
	exports.uiIconSpeedHigh = uiIconSpeedHigh;
	exports.uiIconCommitments = uiIconCommitments;
	exports.uiIconThisPC = uiIconThisPC;
	exports.uiIconMusicNote = uiIconMusicNote;
	exports.uiIconMicOff = uiIconMicOff;
	exports.uiIconEdgeLogo = uiIconEdgeLogo;
	exports.uiIconCompletedSolid = uiIconCompletedSolid;
	exports.uiIconAlbumRemove = uiIconAlbumRemove;
	exports.uiIconMessageFill = uiIconMessageFill;
	exports.uiIconTabletSelected = uiIconTabletSelected;
	exports.uiIconMobileSelected = uiIconMobileSelected;
	exports.uiIconLaptopSelected = uiIconLaptopSelected;
	exports.uiIconTVMonitorSelected = uiIconTVMonitorSelected;
	exports.uiIconDeveloperTools = uiIconDeveloperTools;
	exports.uiIconInsertTextBox = uiIconInsertTextBox;
	exports.uiIconLowerBrightness = uiIconLowerBrightness;
	exports.uiIconDOM = uiIconDOM;
	exports.uiIconCloudUpload = uiIconCloudUpload;
	exports.uiIconScrollUpDown = uiIconScrollUpDown;
	exports.uiIconDateTime = uiIconDateTime;
	exports.uiIconEvent = uiIconEvent;
	exports.uiIconCake = uiIconCake;
	exports.uiIconOrg = uiIconOrg;
	exports.uiIconPartyLeader = uiIconPartyLeader;
	exports.uiIconDRM = uiIconDRM;
	exports.uiIconCloudAdd = uiIconCloudAdd;
	exports.uiIconAppIconDefault = uiIconAppIconDefault;
	exports.uiIconPhoto2Add = uiIconPhoto2Add;
	exports.uiIconPhoto2Remove = uiIconPhoto2Remove;
	exports.uiIconPOI = uiIconPOI;
	exports.uiIconAddTo = uiIconAddTo;
	exports.uiIconRadioBtnOff = uiIconRadioBtnOff;
	exports.uiIconRadioBtnOn = uiIconRadioBtnOn;
	exports.uiIconExploreContent = uiIconExploreContent;
	exports.uiIconProduct = uiIconProduct;
	exports.uiIconProgressLoopInner = uiIconProgressLoopInner;
	exports.uiIconProgressLoopOuter = uiIconProgressLoopOuter;
	exports.uiIconBlocked2 = uiIconBlocked2;
	exports.uiIconFangBody = uiIconFangBody;
	exports.uiIconChatInviteFriend = uiIconChatInviteFriend;
	exports.uiIconCrown = uiIconCrown;
	exports.uiIconDiamond = uiIconDiamond;
	exports.uiIconScaleUp = uiIconScaleUp;
	exports.uiIconFeedback = uiIconFeedback;
	exports.uiIconSharepointLogoInverse = uiIconSharepointLogoInverse;
	exports.uiIconYammerLogo = uiIconYammerLogo;
	exports.uiIconHide = uiIconHide;
	exports.uiIconUneditable = uiIconUneditable;
	exports.uiIconReturnToSession = uiIconReturnToSession;
	exports.uiIconOpenFolderHorizontal = uiIconOpenFolderHorizontal;
	exports.uiIconCalendarMirrored = uiIconCalendarMirrored;
	exports.uiIconSwayLogoInverse = uiIconSwayLogoInverse;
	exports.uiIconOutOfOffice = uiIconOutOfOffice;
	exports.uiIconTrophy = uiIconTrophy;
	exports.uiIconReopenPages = uiIconReopenPages;
	exports.uiIconEmojiTabSymbols = uiIconEmojiTabSymbols;
	exports.uiIconAADLogo = uiIconAADLogo;
	exports.uiIconAccessLogo = uiIconAccessLogo;
	exports.uiIconAdminALogoInverse32 = uiIconAdminALogoInverse32;
	exports.uiIconAdminCLogoInverse32 = uiIconAdminCLogoInverse32;
	exports.uiIconAdminDLogoInverse32 = uiIconAdminDLogoInverse32;
	exports.uiIconAdminELogoInverse32 = uiIconAdminELogoInverse32;
	exports.uiIconAdminLLogoInverse32 = uiIconAdminLLogoInverse32;
	exports.uiIconAdminMLogoInverse32 = uiIconAdminMLogoInverse32;
	exports.uiIconAdminOLogoInverse32 = uiIconAdminOLogoInverse32;
	exports.uiIconAdminPLogoInverse32 = uiIconAdminPLogoInverse32;
	exports.uiIconAdminSLogoInverse32 = uiIconAdminSLogoInverse32;
	exports.uiIconAdminYLogoInverse32 = uiIconAdminYLogoInverse32;
	exports.uiIconDelveLogoInverse = uiIconDelveLogoInverse;
	exports.uiIconExchangeLogoInverse = uiIconExchangeLogoInverse;
	exports.uiIconLyncLogo = uiIconLyncLogo;
	exports.uiIconOfficeVideoLogoInverse = uiIconOfficeVideoLogoInverse;
	exports.uiIconSocialListeningLogo = uiIconSocialListeningLogo;
	exports.uiIconVisioLogoInverse = uiIconVisioLogoInverse;
	exports.uiIconBalloons = uiIconBalloons;
	exports.uiIconCat = uiIconCat;
	exports.uiIconMailAlert = uiIconMailAlert;
	exports.uiIconMailCheck = uiIconMailCheck;
	exports.uiIconMailLowImportance = uiIconMailLowImportance;
	exports.uiIconMailPause = uiIconMailPause;
	exports.uiIconMailRepeat = uiIconMailRepeat;
	exports.uiIconSecurityGroup = uiIconSecurityGroup;
	exports.uiIconTable = uiIconTable;
	exports.uiIconVoicemailForward = uiIconVoicemailForward;
	exports.uiIconVoicemailReply = uiIconVoicemailReply;
	exports.uiIconWaffle = uiIconWaffle;
	exports.uiIconRemoveEvent = uiIconRemoveEvent;
	exports.uiIconEventInfo = uiIconEventInfo;
	exports.uiIconForwardEvent = uiIconForwardEvent;
	exports.uiIconWipePhone = uiIconWipePhone;
	exports.uiIconAddOnlineMeeting = uiIconAddOnlineMeeting;
	exports.uiIconJoinOnlineMeeting = uiIconJoinOnlineMeeting;
	exports.uiIconRemoveLink = uiIconRemoveLink;
	exports.uiIconPeopleBlock = uiIconPeopleBlock;
	exports.uiIconPeopleRepeat = uiIconPeopleRepeat;
	exports.uiIconPeopleAlert = uiIconPeopleAlert;
	exports.uiIconPeoplePause = uiIconPeoplePause;
	exports.uiIconTransferCall = uiIconTransferCall;
	exports.uiIconAddPhone = uiIconAddPhone;
	exports.uiIconUnknownCall = uiIconUnknownCall;
	exports.uiIconNoteReply = uiIconNoteReply;
	exports.uiIconNoteForward = uiIconNoteForward;
	exports.uiIconNotePinned = uiIconNotePinned;
	exports.uiIconRemoveOccurrence = uiIconRemoveOccurrence;
	exports.uiIconTimeline = uiIconTimeline;
	exports.uiIconEditNote = uiIconEditNote;
	exports.uiIconCircleHalfFull = uiIconCircleHalfFull;
	exports.uiIconRoom = uiIconRoom;
	exports.uiIconUnsubscribe = uiIconUnsubscribe;
	exports.uiIconSubscribe = uiIconSubscribe;
	exports.uiIconHardDrive = uiIconHardDrive;
	exports.uiIconRecurringTask = uiIconRecurringTask;
	exports.uiIconTaskManager = uiIconTaskManager;
	exports.uiIconTaskManagerMirrored = uiIconTaskManagerMirrored;
	exports.uiIconCombine = uiIconCombine;
	exports.uiIconSplit = uiIconSplit;
	exports.uiIconDoubleChevronUp = uiIconDoubleChevronUp;
	exports.uiIconDoubleChevronLeft = uiIconDoubleChevronLeft;
	exports.uiIconDoubleChevronRight = uiIconDoubleChevronRight;
	exports.uiIconTextBox = uiIconTextBox;
	exports.uiIconTextField = uiIconTextField;
	exports.uiIconNumberField = uiIconNumberField;
	exports.uiIconDropdown = uiIconDropdown;
	exports.uiIconBookingsLogo = uiIconBookingsLogo;
	exports.uiIconClassNotebookLogoInverse = uiIconClassNotebookLogoInverse;
	exports.uiIconDelveAnalyticsLogo = uiIconDelveAnalyticsLogo;
	exports.uiIconDocsLogoInverse = uiIconDocsLogoInverse;
	exports.uiIconDynamics365Logo = uiIconDynamics365Logo;
	exports.uiIconDynamicSMBLogo = uiIconDynamicSMBLogo;
	exports.uiIconOfficeAssistantLogo = uiIconOfficeAssistantLogo;
	exports.uiIconOfficeStoreLogo = uiIconOfficeStoreLogo;
	exports.uiIconOneNoteEduLogoInverse = uiIconOneNoteEduLogoInverse;
	exports.uiIconPlannerLogo = uiIconPlannerLogo;
	exports.uiIconPowerApps = uiIconPowerApps;
	exports.uiIconSuitcase = uiIconSuitcase;
	exports.uiIconProjectLogoInverse = uiIconProjectLogoInverse;
	exports.uiIconCaretLeft8 = uiIconCaretLeft8;
	exports.uiIconCaretRight8 = uiIconCaretRight8;
	exports.uiIconCaretUp8 = uiIconCaretUp8;
	exports.uiIconCaretDown8 = uiIconCaretDown8;
	exports.uiIconCaretLeftSolid8 = uiIconCaretLeftSolid8;
	exports.uiIconCaretRightSolid8 = uiIconCaretRightSolid8;
	exports.uiIconCaretUpSolid8 = uiIconCaretUpSolid8;
	exports.uiIconCaretDownSolid8 = uiIconCaretDownSolid8;
	exports.uiIconClearFormatting = uiIconClearFormatting;
	exports.uiIconSuperscript = uiIconSuperscript;
	exports.uiIconSubscript = uiIconSubscript;
	exports.uiIconStrikethrough = uiIconStrikethrough;
	exports.uiIconExport = uiIconExport;
	exports.uiIconExportMirrored = uiIconExportMirrored;
	exports.uiIconSingleBookmark = uiIconSingleBookmark;
	exports.uiIconSingleBookmarkSolid = uiIconSingleBookmarkSolid;
	exports.uiIconDoubleChevronDown = uiIconDoubleChevronDown;
	exports.uiIconFollowUser = uiIconFollowUser;
	exports.uiIconReplyAll = uiIconReplyAll;
	exports.uiIconWorkforceManagement = uiIconWorkforceManagement;
	exports.uiIconRecruitmentManagement = uiIconRecruitmentManagement;
	exports.uiIconQuestionnaire = uiIconQuestionnaire;
	exports.uiIconManagerSelfService = uiIconManagerSelfService;
	exports.uiIconReplyMirrored = uiIconReplyMirrored;
	exports.uiIconReplyAllMirrored = uiIconReplyAllMirrored;
	exports.uiIconMedal = uiIconMedal;
	exports.uiIconAddGroup = uiIconAddGroup;
	exports.uiIconQuestionnaireMirrored = uiIconQuestionnaireMirrored;
	exports.uiIconTemporaryUser = uiIconTemporaryUser;
	exports.uiIconCaretSolid16 = uiIconCaretSolid16;
	exports.uiIconGroupedDescending = uiIconGroupedDescending;
	exports.uiIconGroupedAscending = uiIconGroupedAscending;
	exports.uiIconAwayStatus = uiIconAwayStatus;
	exports.uiIconMyMoviesTV = uiIconMyMoviesTV;
	exports.uiIconGenericScan = uiIconGenericScan;
	exports.uiIconAustralianRules = uiIconAustralianRules;
	exports.uiIconWifiEthernet = uiIconWifiEthernet;
	exports.uiIconTrackersMirrored = uiIconTrackersMirrored;
	exports.uiIconDateTimeMirrored = uiIconDateTimeMirrored;
	exports.uiIconStopSolid = uiIconStopSolid;
	exports.uiIconDoubleChevronUp12 = uiIconDoubleChevronUp12;
	exports.uiIconDoubleChevronDown12 = uiIconDoubleChevronDown12;
	exports.uiIconDoubleChevronLeft12 = uiIconDoubleChevronLeft12;
	exports.uiIconDoubleChevronRight12 = uiIconDoubleChevronRight12;
	exports.uiIconCalendarAgenda = uiIconCalendarAgenda;
	exports.uiIconAddEvent = uiIconAddEvent;
	exports.uiIconAssetLibrary = uiIconAssetLibrary;
	exports.uiIconDataConnectionLibrary = uiIconDataConnectionLibrary;
	exports.uiIconDocLibrary = uiIconDocLibrary;
	exports.uiIconFormLibrary = uiIconFormLibrary;
	exports.uiIconFormLibraryMirrored = uiIconFormLibraryMirrored;
	exports.uiIconReportLibrary = uiIconReportLibrary;
	exports.uiIconReportLibraryMirrored = uiIconReportLibraryMirrored;
	exports.uiIconContactCard = uiIconContactCard;
	exports.uiIconCustomList = uiIconCustomList;
	exports.uiIconCustomListMirrored = uiIconCustomListMirrored;
	exports.uiIconIssueTracking = uiIconIssueTracking;
	exports.uiIconIssueTrackingMirrored = uiIconIssueTrackingMirrored;
	exports.uiIconPictureLibrary = uiIconPictureLibrary;
	exports.uiIconOfficeAddinsLogo = uiIconOfficeAddinsLogo;
	exports.uiIconOfflineOneDriveParachute = uiIconOfflineOneDriveParachute;
	exports.uiIconOfflineOneDriveParachuteDisabled = uiIconOfflineOneDriveParachuteDisabled;
	exports.uiIconTriangleSolidUp12 = uiIconTriangleSolidUp12;
	exports.uiIconTriangleSolidDown12 = uiIconTriangleSolidDown12;
	exports.uiIconTriangleSolidLeft12 = uiIconTriangleSolidLeft12;
	exports.uiIconTriangleSolidRight12 = uiIconTriangleSolidRight12;
	exports.uiIconTriangleUp12 = uiIconTriangleUp12;
	exports.uiIconTriangleDown12 = uiIconTriangleDown12;
	exports.uiIconTriangleLeft12 = uiIconTriangleLeft12;
	exports.uiIconTriangleRight12 = uiIconTriangleRight12;
	exports.uiIconArrowUpRight8 = uiIconArrowUpRight8;
	exports.uiIconArrowDownRight8 = uiIconArrowDownRight8;
	exports.uiIconDocumentSet = uiIconDocumentSet;
	exports.uiIconDelveAnalytics = uiIconDelveAnalytics;
	exports.uiIconArrowUpRightMirrored8 = uiIconArrowUpRightMirrored8;
	exports.uiIconArrowDownRightMirrored8 = uiIconArrowDownRightMirrored8;
	exports.uiIconCompanyDirectory = uiIconCompanyDirectory;
	exports.uiIconCompanyDirectoryMirrored = uiIconCompanyDirectoryMirrored;
	exports.uiIconOneDriveAdd = uiIconOneDriveAdd;
	exports.uiIconProfileSearch = uiIconProfileSearch;
	exports.uiIconHeader2 = uiIconHeader2;
	exports.uiIconHeader3 = uiIconHeader3;
	exports.uiIconHeader4 = uiIconHeader4;
	exports.uiIconEyedropper = uiIconEyedropper;
	exports.uiIconMarketDown = uiIconMarketDown;
	exports.uiIconCalendarWorkWeek = uiIconCalendarWorkWeek;
	exports.uiIconSidePanel = uiIconSidePanel;
	exports.uiIconGlobeFavorite = uiIconGlobeFavorite;
	exports.uiIconCaretTopLeftSolid8 = uiIconCaretTopLeftSolid8;
	exports.uiIconCaretTopRightSolid8 = uiIconCaretTopRightSolid8;
	exports.uiIconViewAll2 = uiIconViewAll2;
	exports.uiIconDocumentReply = uiIconDocumentReply;
	exports.uiIconPlayerSettings = uiIconPlayerSettings;
	exports.uiIconReceiptForward = uiIconReceiptForward;
	exports.uiIconReceiptReply = uiIconReceiptReply;
	exports.uiIconReceiptCheck = uiIconReceiptCheck;
	exports.uiIconFax = uiIconFax;
	exports.uiIconRecurringEvent = uiIconRecurringEvent;
	exports.uiIconReplyAlt = uiIconReplyAlt;
	exports.uiIconReplyAllAlt = uiIconReplyAllAlt;
	exports.uiIconEditStyle = uiIconEditStyle;
	exports.uiIconEditMail = uiIconEditMail;
	exports.uiIconLifesaver = uiIconLifesaver;
	exports.uiIconLifesaverLock = uiIconLifesaverLock;
	exports.uiIconInboxCheck = uiIconInboxCheck;
	exports.uiIconFolderSearch = uiIconFolderSearch;
	exports.uiIconCollapseMenu = uiIconCollapseMenu;
	exports.uiIconExpandMenu = uiIconExpandMenu;
	exports.uiIconBoards = uiIconBoards;
	exports.uiIconSunAdd = uiIconSunAdd;
	exports.uiIconSunQuestionMark = uiIconSunQuestionMark;
	exports.uiIconLandscapeOrientation = uiIconLandscapeOrientation;
	exports.uiIconDocumentSearch = uiIconDocumentSearch;
	exports.uiIconPublicCalendar = uiIconPublicCalendar;
	exports.uiIconPublicContactCard = uiIconPublicContactCard;
	exports.uiIconPublicEmail = uiIconPublicEmail;
	exports.uiIconPublicFolder = uiIconPublicFolder;
	exports.uiIconWordDocument = uiIconWordDocument;
	exports.uiIconPowerPointDocument = uiIconPowerPointDocument;
	exports.uiIconExcelDocument = uiIconExcelDocument;
	exports.uiIconGroupedList = uiIconGroupedList;
	exports.uiIconClassroomLogo = uiIconClassroomLogo;
	exports.uiIconSections = uiIconSections;
	exports.uiIconEditPhoto = uiIconEditPhoto;
	exports.uiIconStarburst = uiIconStarburst;
	exports.uiIconShareiOS = uiIconShareiOS;
	exports.uiIconAirTickets = uiIconAirTickets;
	exports.uiIconPencilReply = uiIconPencilReply;
	exports.uiIconTiles2 = uiIconTiles2;
	exports.uiIconSkypeCircleCheck = uiIconSkypeCircleCheck;
	exports.uiIconSkypeCircleClock = uiIconSkypeCircleClock;
	exports.uiIconSkypeCircleMinus = uiIconSkypeCircleMinus;
	exports.uiIconSkypeMessage = uiIconSkypeMessage;
	exports.uiIconClosedCaption = uiIconClosedCaption;
	exports.uiIconATPLogo = uiIconATPLogo;
	exports.uiIconOfficeFormsLogoInverse = uiIconOfficeFormsLogoInverse;
	exports.uiIconRecycleBin = uiIconRecycleBin;
	exports.uiIconEmptyRecycleBin = uiIconEmptyRecycleBin;
	exports.uiIconHide2 = uiIconHide2;
	exports.uiIconBreadcrumb = uiIconBreadcrumb;
	exports.uiIconBirthdayCake = uiIconBirthdayCake;
	exports.uiIconTimeEntry = uiIconTimeEntry;
	exports.uiIconPageEdit = uiIconPageEdit;
	exports.uiIconPageRemove = uiIconPageRemove;
	exports.uiIconDatabase = uiIconDatabase;
	exports.uiIconEditContact = uiIconEditContact;
	exports.uiIconConnectContacts = uiIconConnectContacts;
	exports.uiIconActivateOrders = uiIconActivateOrders;
	exports.uiIconDeactivateOrders = uiIconDeactivateOrders;
	exports.uiIconDocumentManagement = uiIconDocumentManagement;
	exports.uiIconCRMReport = uiIconCRMReport;
	exports.uiIconZipFolder = uiIconZipFolder;
	exports.uiIconSurveyQuestions = uiIconSurveyQuestions;
	exports.uiIconTextDocument = uiIconTextDocument;
	exports.uiIconTextDocumentShared = uiIconTextDocumentShared;
	exports.uiIconPageCheckedOut = uiIconPageCheckedOut;
	exports.uiIconSaveAndClose = uiIconSaveAndClose;
	exports.uiIconScript = uiIconScript;
	exports.uiIconArchive = uiIconArchive;
	exports.uiIconActivityFeed = uiIconActivityFeed;
	exports.uiIconEventDate = uiIconEventDate;
	exports.uiIconArrowUpRight = uiIconArrowUpRight;
	exports.uiIconCaretRight = uiIconCaretRight;
	exports.uiIconSetAction = uiIconSetAction;
	exports.uiIconCaretSolidLeft = uiIconCaretSolidLeft;
	exports.uiIconCaretSolidDown = uiIconCaretSolidDown;
	exports.uiIconCaretSolidRight = uiIconCaretSolidRight;
	exports.uiIconCaretSolidUp = uiIconCaretSolidUp;
	exports.uiIconPowerAppsLogo = uiIconPowerAppsLogo;
	exports.uiIconPowerApps2Logo = uiIconPowerApps2Logo;
	exports.uiIconSearchIssue = uiIconSearchIssue;
	exports.uiIconSearchIssueMirrored = uiIconSearchIssueMirrored;
	exports.uiIconFabricAssetLibrary = uiIconFabricAssetLibrary;
	exports.uiIconFabricDataConnectionLibrary = uiIconFabricDataConnectionLibrary;
	exports.uiIconFabricDocLibrary = uiIconFabricDocLibrary;
	exports.uiIconFabricFormLibrary = uiIconFabricFormLibrary;
	exports.uiIconFabricFormLibraryMirrored = uiIconFabricFormLibraryMirrored;
	exports.uiIconFabricReportLibrary = uiIconFabricReportLibrary;
	exports.uiIconFabricReportLibraryMirrored = uiIconFabricReportLibraryMirrored;
	exports.uiIconFabricPublicFolder = uiIconFabricPublicFolder;
	exports.uiIconFabricFolderSearch = uiIconFabricFolderSearch;
	exports.uiIconFabricMovetoFolder = uiIconFabricMovetoFolder;
	exports.uiIconFabricUnsyncFolder = uiIconFabricUnsyncFolder;
	exports.uiIconFabricSyncFolder = uiIconFabricSyncFolder;
	exports.uiIconFabricOpenFolderHorizontal = uiIconFabricOpenFolderHorizontal;
	exports.uiIconFabricFolder = uiIconFabricFolder;
	exports.uiIconFabricFolderFill = uiIconFabricFolderFill;
	exports.uiIconFabricNewFolder = uiIconFabricNewFolder;
	exports.uiIconFabricPictureLibrary = uiIconFabricPictureLibrary;
	exports.uiIconAddFavorite = uiIconAddFavorite;
	exports.uiIconAddFavoriteFill = uiIconAddFavoriteFill;
	exports.uiIconBufferTimeBefore = uiIconBufferTimeBefore;
	exports.uiIconBufferTimeAfter = uiIconBufferTimeAfter;
	exports.uiIconBufferTimeBoth = uiIconBufferTimeBoth;
	exports.uiIconCannedChat = uiIconCannedChat;
	exports.uiIconSkypeForBusinessLogo = uiIconSkypeForBusinessLogo;
	exports.uiIconPageCheckedin = uiIconPageCheckedin;
	exports.uiIconReadOutLoud = uiIconReadOutLoud;
	exports.uiIconCaretBottomLeftSolid8 = uiIconCaretBottomLeftSolid8;
	exports.uiIconCaretBottomRightSolid8 = uiIconCaretBottomRightSolid8;
	exports.uiIconFolderHorizontal = uiIconFolderHorizontal;
	exports.uiIconMicrosoftStaffhubLogo = uiIconMicrosoftStaffhubLogo;
	exports.uiIconGiftboxOpen = uiIconGiftboxOpen;
	exports.uiIconStatusCircleOuter = uiIconStatusCircleOuter;
	exports.uiIconStatusCircleInner = uiIconStatusCircleInner;
	exports.uiIconStatusCircleRing = uiIconStatusCircleRing;
	exports.uiIconStatusTriangleOuter = uiIconStatusTriangleOuter;
	exports.uiIconStatusTriangleInner = uiIconStatusTriangleInner;
	exports.uiIconStatusTriangleExclamation = uiIconStatusTriangleExclamation;
	exports.uiIconStatusCircleExclamation = uiIconStatusCircleExclamation;
	exports.uiIconStatusCircleErrorX = uiIconStatusCircleErrorX;
	exports.uiIconStatusCircleInfo = uiIconStatusCircleInfo;
	exports.uiIconStatusCircleBlock2 = uiIconStatusCircleBlock2;
	exports.uiIconStatusCircleQuestionMark = uiIconStatusCircleQuestionMark;
	exports.uiIconToll = uiIconToll;
	exports.uiIconExploreContentSingle = uiIconExploreContentSingle;
	exports.uiIconCollapseContent = uiIconCollapseContent;
	exports.uiIconCollapseContentSingle = uiIconCollapseContentSingle;
	exports.uiIconInfoSolid = uiIconInfoSolid;
	exports.uiIconProgressRingDots = uiIconProgressRingDots;
	exports.uiIconCaloriesAdd = uiIconCaloriesAdd;
	exports.uiIconBranchFork = uiIconBranchFork;
	exports.uiIconMobileReport = uiIconMobileReport;
	exports.uiIconHardDriveGroup = uiIconHardDriveGroup;
	exports.uiIconFastMode = uiIconFastMode;
	exports.uiIconToggleOn = uiIconToggleOn;
	exports.uiIconToggleOff = uiIconToggleOff;
	exports.uiIconTrophy2 = uiIconTrophy2;
	exports.uiIconBucketColor = uiIconBucketColor;
	exports.uiIconBucketColorFill = uiIconBucketColorFill;
	exports.uiIconTaskboard = uiIconTaskboard;
	exports.uiIconSingleColumn = uiIconSingleColumn;
	exports.uiIconDoubleColumn = uiIconDoubleColumn;
	exports.uiIconTripleColumn = uiIconTripleColumn;
	exports.uiIconColumnLeftTwoThirds = uiIconColumnLeftTwoThirds;
	exports.uiIconColumnRightTwoThirds = uiIconColumnRightTwoThirds;
	exports.uiIconAccessLogoFill = uiIconAccessLogoFill;
	exports.uiIconAnalyticsLogo = uiIconAnalyticsLogo;
	exports.uiIconAnalyticsQuery = uiIconAnalyticsQuery;
	exports.uiIconNewAnalyticsQuery = uiIconNewAnalyticsQuery;
	exports.uiIconAnalyticsReport = uiIconAnalyticsReport;
	exports.uiIconWordLogo = uiIconWordLogo;
	exports.uiIconWordLogoFill = uiIconWordLogoFill;
	exports.uiIconExcelLogo = uiIconExcelLogo;
	exports.uiIconExcelLogoFill = uiIconExcelLogoFill;
	exports.uiIconOneNoteLogo = uiIconOneNoteLogo;
	exports.uiIconOneNoteLogoFill = uiIconOneNoteLogoFill;
	exports.uiIconOutlookLogo = uiIconOutlookLogo;
	exports.uiIconOutlookLogoFill = uiIconOutlookLogoFill;
	exports.uiIconPowerPointLogo = uiIconPowerPointLogo;
	exports.uiIconPowerPointLogoFill = uiIconPowerPointLogoFill;
	exports.uiIconPublisherLogo = uiIconPublisherLogo;
	exports.uiIconPublisherLogoFill = uiIconPublisherLogoFill;
	exports.uiIconScheduleEventAction = uiIconScheduleEventAction;
	exports.uiIconFlameSolid = uiIconFlameSolid;
	exports.uiIconServerProcesses = uiIconServerProcesses;
	exports.uiIconServer = uiIconServer;
	exports.uiIconSaveAll = uiIconSaveAll;
	exports.uiIconLinkedInLogo = uiIconLinkedInLogo;
	exports.uiIconDecimals = uiIconDecimals;
	exports.uiIconSidePanelMirrored = uiIconSidePanelMirrored;
	exports.uiIconProtectRestrict = uiIconProtectRestrict;
	exports.uiIconUnknownMirrored = uiIconUnknownMirrored;
	exports.uiIconPublicContactCardMirrored = uiIconPublicContactCardMirrored;
	exports.uiIconGridViewSmall = uiIconGridViewSmall;
	exports.uiIconGridViewMedium = uiIconGridViewMedium;
	exports.uiIconGridViewLarge = uiIconGridViewLarge;
	exports.uiIconStep = uiIconStep;
	exports.uiIconStepInsert = uiIconStepInsert;
	exports.uiIconStepShared = uiIconStepShared;
	exports.uiIconStepSharedAdd = uiIconStepSharedAdd;
	exports.uiIconStepSharedInsert = uiIconStepSharedInsert;
	exports.uiIconViewDashboard = uiIconViewDashboard;
	exports.uiIconViewList = uiIconViewList;
	exports.uiIconViewListGroup = uiIconViewListGroup;
	exports.uiIconViewListTree = uiIconViewListTree;
	exports.uiIconTriggerAuto = uiIconTriggerAuto;
	exports.uiIconTriggerUser = uiIconTriggerUser;
	exports.uiIconPivotChart = uiIconPivotChart;
	exports.uiIconStackedBarChart = uiIconStackedBarChart;
	exports.uiIconStackedLineChart = uiIconStackedLineChart;
	exports.uiIconBuildQueue = uiIconBuildQueue;
	exports.uiIconBuildQueueNew = uiIconBuildQueueNew;
	exports.uiIconUserFollowed = uiIconUserFollowed;
	exports.uiIconContactLink = uiIconContactLink;
	exports.uiIconStack = uiIconStack;
	exports.uiIconBullseye = uiIconBullseye;
	exports.uiIconVennDiagram = uiIconVennDiagram;
	exports.uiIconFiveTileGrid = uiIconFiveTileGrid;
	exports.uiIconFocalPoint = uiIconFocalPoint;
	exports.uiIconRingerRemove = uiIconRingerRemove;
	exports.uiIconTeamsLogoInverse = uiIconTeamsLogoInverse;
	exports.uiIconTeamsLogo = uiIconTeamsLogo;
	exports.uiIconTeamsLogoFill = uiIconTeamsLogoFill;
	exports.uiIconSkypeForBusinessLogoFill = uiIconSkypeForBusinessLogoFill;
	exports.uiIconSharepointLogo = uiIconSharepointLogo;
	exports.uiIconSharepointLogoFill = uiIconSharepointLogoFill;
	exports.uiIconDelveLogo = uiIconDelveLogo;
	exports.uiIconDelveLogoFill = uiIconDelveLogoFill;
	exports.uiIconOfficeVideoLogo = uiIconOfficeVideoLogo;
	exports.uiIconOfficeVideoLogoFill = uiIconOfficeVideoLogoFill;
	exports.uiIconExchangeLogo = uiIconExchangeLogo;
	exports.uiIconExchangeLogoFill = uiIconExchangeLogoFill;
	exports.uiIconDocumentApproval = uiIconDocumentApproval;
	exports.uiIconCloneToDesktop = uiIconCloneToDesktop;
	exports.uiIconInstallToDrive = uiIconInstallToDrive;
	exports.uiIconBlur = uiIconBlur;
	exports.uiIconBuild = uiIconBuild;
	exports.uiIconProcessMetaTask = uiIconProcessMetaTask;
	exports.uiIconBranchFork2 = uiIconBranchFork2;
	exports.uiIconBranchLocked = uiIconBranchLocked;
	exports.uiIconBranchCommit = uiIconBranchCommit;
	exports.uiIconBranchCompare = uiIconBranchCompare;
	exports.uiIconBranchMerge = uiIconBranchMerge;
	exports.uiIconBranchPullRequest = uiIconBranchPullRequest;
	exports.uiIconBranchSearch = uiIconBranchSearch;
	exports.uiIconBranchShelveset = uiIconBranchShelveset;
	exports.uiIconRawSource = uiIconRawSource;
	exports.uiIconMergeDuplicate = uiIconMergeDuplicate;
	exports.uiIconRowsGroup = uiIconRowsGroup;
	exports.uiIconRowsChild = uiIconRowsChild;
	exports.uiIconDeploy = uiIconDeploy;
	exports.uiIconRedeploy = uiIconRedeploy;
	exports.uiIconServerEnviroment = uiIconServerEnviroment;
	exports.uiIconVisioDiagram = uiIconVisioDiagram;
	exports.uiIconHighlightMappedShapes = uiIconHighlightMappedShapes;
	exports.uiIconTextCallout = uiIconTextCallout;
	exports.uiIconIconSetsFlag = uiIconIconSetsFlag;
	exports.uiIconVisioLogo = uiIconVisioLogo;
	exports.uiIconVisioLogoFill = uiIconVisioLogoFill;
	exports.uiIconVisioDocument = uiIconVisioDocument;
	exports.uiIconTimelineProgress = uiIconTimelineProgress;
	exports.uiIconTimelineDelivery = uiIconTimelineDelivery;
	exports.uiIconBacklog = uiIconBacklog;
	exports.uiIconTeamFavorite = uiIconTeamFavorite;
	exports.uiIconTaskGroup = uiIconTaskGroup;
	exports.uiIconTaskGroupMirrored = uiIconTaskGroupMirrored;
	exports.uiIconScopeTemplate = uiIconScopeTemplate;
	exports.uiIconAssessmentGroupTemplate = uiIconAssessmentGroupTemplate;
	exports.uiIconNewTeamProject = uiIconNewTeamProject;
	exports.uiIconCommentAdd = uiIconCommentAdd;
	exports.uiIconCommentNext = uiIconCommentNext;
	exports.uiIconCommentPrevious = uiIconCommentPrevious;
	exports.uiIconShopServer = uiIconShopServer;
	exports.uiIconLocaleLanguage = uiIconLocaleLanguage;
	exports.uiIconQueryList = uiIconQueryList;
	exports.uiIconUserSync = uiIconUserSync;
	exports.uiIconUserPause = uiIconUserPause;
	exports.uiIconStreamingOff = uiIconStreamingOff;
	exports.uiIconArrowTallUpLeft = uiIconArrowTallUpLeft;
	exports.uiIconArrowTallUpRight = uiIconArrowTallUpRight;
	exports.uiIconArrowTallDownLeft = uiIconArrowTallDownLeft;
	exports.uiIconArrowTallDownRight = uiIconArrowTallDownRight;
	exports.uiIconFieldEmpty = uiIconFieldEmpty;
	exports.uiIconFieldFilled = uiIconFieldFilled;
	exports.uiIconFieldChanged = uiIconFieldChanged;
	exports.uiIconFieldNotChanged = uiIconFieldNotChanged;
	exports.uiIconRingerOff = uiIconRingerOff;
	exports.uiIconPlayResume = uiIconPlayResume;
	exports.uiIconBulletedList2 = uiIconBulletedList2;
	exports.uiIconBulletedList2Mirrored = uiIconBulletedList2Mirrored;
	exports.uiIconImageCrosshair = uiIconImageCrosshair;
	exports.uiIconGitGraph = uiIconGitGraph;
	exports.uiIconRepo = uiIconRepo;
	exports.uiIconRepoSolid = uiIconRepoSolid;
	exports.uiIconFolderQuery = uiIconFolderQuery;
	exports.uiIconFolderList = uiIconFolderList;
	exports.uiIconFolderListMirrored = uiIconFolderListMirrored;
	exports.uiIconLocationOutline = uiIconLocationOutline;
	exports.uiIconPOISolid = uiIconPOISolid;
	exports.uiIconCalculatorNotEqualTo = uiIconCalculatorNotEqualTo;
	exports.uiIconBoxSubtractSolid = uiIconBoxSubtractSolid;
	exports.uiIconBoxAdditionSolid = uiIconBoxAdditionSolid;
	exports.uiIconBoxMultiplySolid = uiIconBoxMultiplySolid;
	exports.uiIconBoxPlaySolid = uiIconBoxPlaySolid;
	exports.uiIconBoxCheckmarkSolid = uiIconBoxCheckmarkSolid;
	exports.uiIconCirclePauseSolid = uiIconCirclePauseSolid;
	exports.uiIconCirclePause = uiIconCirclePause;
	exports.uiIconMSNVideosSolid = uiIconMSNVideosSolid;
	exports.uiIconCircleStopSolid = uiIconCircleStopSolid;
	exports.uiIconCircleStop = uiIconCircleStop;
	exports.uiIconNavigateBack = uiIconNavigateBack;
	exports.uiIconNavigateBackMirrored = uiIconNavigateBackMirrored;
	exports.uiIconNavigateForward = uiIconNavigateForward;
	exports.uiIconNavigateForwardMirrored = uiIconNavigateForwardMirrored;
	exports.uiIconUnknownSolid = uiIconUnknownSolid;
	exports.uiIconUnknownMirroredSolid = uiIconUnknownMirroredSolid;
	exports.uiIconCircleAddition = uiIconCircleAddition;
	exports.uiIconCircleAdditionSolid = uiIconCircleAdditionSolid;
	exports.uiIconFilePDB = uiIconFilePDB;
	exports.uiIconFileTemplate = uiIconFileTemplate;
	exports.uiIconFileSQL = uiIconFileSQL;
	exports.uiIconFileJAVA = uiIconFileJAVA;
	exports.uiIconFileASPX = uiIconFileASPX;
	exports.uiIconFileCSS = uiIconFileCSS;
	exports.uiIconFileSass = uiIconFileSass;
	exports.uiIconFileLess = uiIconFileLess;
	exports.uiIconFileHTML = uiIconFileHTML;
	exports.uiIconJavaScriptLanguage = uiIconJavaScriptLanguage;
	exports.uiIconCSharpLanguage = uiIconCSharpLanguage;
	exports.uiIconCSharp = uiIconCSharp;
	exports.uiIconVisualBasicLanguage = uiIconVisualBasicLanguage;
	exports.uiIconVB = uiIconVB;
	exports.uiIconCPlusPlusLanguage = uiIconCPlusPlusLanguage;
	exports.uiIconCPlusPlus = uiIconCPlusPlus;
	exports.uiIconFSharpLanguage = uiIconFSharpLanguage;
	exports.uiIconFSharp = uiIconFSharp;
	exports.uiIconTypeScriptLanguage = uiIconTypeScriptLanguage;
	exports.uiIconPythonLanguage = uiIconPythonLanguage;
	exports.uiIconPY = uiIconPY;
	exports.uiIconCoffeeScript = uiIconCoffeeScript;
	exports.uiIconMarkDownLanguage = uiIconMarkDownLanguage;
	exports.uiIconFullWidth = uiIconFullWidth;
	exports.uiIconFullWidthEdit = uiIconFullWidthEdit;
	exports.uiIconPlug = uiIconPlug;
	exports.uiIconPlugSolid = uiIconPlugSolid;
	exports.uiIconPlugConnected = uiIconPlugConnected;
	exports.uiIconPlugDisconnected = uiIconPlugDisconnected;
	exports.uiIconUnlockSolid = uiIconUnlockSolid;
	exports.uiIconVariable = uiIconVariable;
	exports.uiIconParameter = uiIconParameter;
	exports.uiIconCommentUrgent = uiIconCommentUrgent;
	exports.uiIconStoryboard = uiIconStoryboard;
	exports.uiIconDiffInline = uiIconDiffInline;
	exports.uiIconDiffSideBySide = uiIconDiffSideBySide;
	exports.uiIconImageDiff = uiIconImageDiff;
	exports.uiIconImagePixel = uiIconImagePixel;
	exports.uiIconFileBug = uiIconFileBug;
	exports.uiIconFileCode = uiIconFileCode;
	exports.uiIconFileComment = uiIconFileComment;
	exports.uiIconBusinessHoursSign = uiIconBusinessHoursSign;
	exports.uiIconFileImage = uiIconFileImage;
	exports.uiIconFileSymlink = uiIconFileSymlink;
	exports.uiIconAutoFillTemplate = uiIconAutoFillTemplate;
	exports.uiIconWorkItem = uiIconWorkItem;
	exports.uiIconWorkItemBug = uiIconWorkItemBug;
	exports.uiIconLogRemove = uiIconLogRemove;
	exports.uiIconColumnOptions = uiIconColumnOptions;
	exports.uiIconPackages = uiIconPackages;
	exports.uiIconBuildIssue = uiIconBuildIssue;
	exports.uiIconAssessmentGroup = uiIconAssessmentGroup;
	exports.uiIconVariableGroup = uiIconVariableGroup;
	exports.uiIconFullHistory = uiIconFullHistory;
	exports.uiIconSingleColumnEdit = uiIconSingleColumnEdit;
	exports.uiIconDoubleColumnEdit = uiIconDoubleColumnEdit;
	exports.uiIconTripleColumnEdit = uiIconTripleColumnEdit;
	exports.uiIconColumnLeftTwoThirdsEdit = uiIconColumnLeftTwoThirdsEdit;
	exports.uiIconColumnRightTwoThirdsEdit = uiIconColumnRightTwoThirdsEdit;
	exports.uiIconStreamLogo = uiIconStreamLogo;
	exports.uiIconPassiveAuthentication = uiIconPassiveAuthentication;
	exports.uiIconAlertSolid = uiIconAlertSolid;
	exports.uiIconMegaphoneSolid = uiIconMegaphoneSolid;
	exports.uiIconTaskSolid = uiIconTaskSolid;
	exports.uiIconConfigurationSolid = uiIconConfigurationSolid;
	exports.uiIconBugSolid = uiIconBugSolid;
	exports.uiIconCrownSolid = uiIconCrownSolid;
	exports.uiIconTrophy2Solid = uiIconTrophy2Solid;
	exports.uiIconQuickNoteSolid = uiIconQuickNoteSolid;
	exports.uiIconConstructionConeSolid = uiIconConstructionConeSolid;
	exports.uiIconPageListSolid = uiIconPageListSolid;
	exports.uiIconPageListMirroredSolid = uiIconPageListMirroredSolid;
	exports.uiIconStarburstSolid = uiIconStarburstSolid;
	exports.uiIconReadingModeSolid = uiIconReadingModeSolid;
	exports.uiIconSadSolid = uiIconSadSolid;
	exports.uiIconHealthSolid = uiIconHealthSolid;
	exports.uiIconShieldSolid = uiIconShieldSolid;
	exports.uiIconGiftBoxSolid = uiIconGiftBoxSolid;
	exports.uiIconShoppingCartSolid = uiIconShoppingCartSolid;
	exports.uiIconMailSolid = uiIconMailSolid;
	exports.uiIconChatSolid = uiIconChatSolid;
	exports.uiIconRibbonSolid = uiIconRibbonSolid;
	exports.uiIconFinancialSolid = uiIconFinancialSolid;
	exports.uiIconFinancialMirroredSolid = uiIconFinancialMirroredSolid;
	exports.uiIconHeadsetSolid = uiIconHeadsetSolid;
	exports.uiIconPermissionsSolid = uiIconPermissionsSolid;
	exports.uiIconParkingSolid = uiIconParkingSolid;
	exports.uiIconParkingMirroredSolid = uiIconParkingMirroredSolid;
	exports.uiIconDiamondSolid = uiIconDiamondSolid;
	exports.uiIconAsteriskSolid = uiIconAsteriskSolid;
	exports.uiIconOfflineStorageSolid = uiIconOfflineStorageSolid;
	exports.uiIconBankSolid = uiIconBankSolid;
	exports.uiIconDecisionSolid = uiIconDecisionSolid;
	exports.uiIconParachute = uiIconParachute;
	exports.uiIconParachuteSolid = uiIconParachuteSolid;
	exports.uiIconFiltersSolid = uiIconFiltersSolid;
	exports.uiIconColorSolid = uiIconColorSolid;
	exports.uiIconReviewSolid = uiIconReviewSolid;
	exports.uiIconReviewRequestSolid = uiIconReviewRequestSolid;
	exports.uiIconReviewRequestMirroredSolid = uiIconReviewRequestMirroredSolid;
	exports.uiIconReviewResponseSolid = uiIconReviewResponseSolid;
	exports.uiIconFeedbackRequestSolid = uiIconFeedbackRequestSolid;
	exports.uiIconFeedbackRequestMirroredSolid = uiIconFeedbackRequestMirroredSolid;
	exports.uiIconFeedbackResponseSolid = uiIconFeedbackResponseSolid;
	exports.uiIconWorkItemBar = uiIconWorkItemBar;
	exports.uiIconWorkItemBarSolid = uiIconWorkItemBarSolid;
	exports.uiIconSeparator = uiIconSeparator;
	exports.uiIconNavigateExternalInline = uiIconNavigateExternalInline;
	exports.uiIconPlanView = uiIconPlanView;
	exports.uiIconTimelineMatrixView = uiIconTimelineMatrixView;
	exports.uiIconEngineeringGroup = uiIconEngineeringGroup;
	exports.uiIconProjectCollection = uiIconProjectCollection;
	exports.uiIconCaretBottomRightCenter8 = uiIconCaretBottomRightCenter8;
	exports.uiIconCaretBottomLeftCenter8 = uiIconCaretBottomLeftCenter8;
	exports.uiIconCaretTopRightCenter8 = uiIconCaretTopRightCenter8;
	exports.uiIconCaretTopLeftCenter8 = uiIconCaretTopLeftCenter8;
	exports.uiIconDonutChart = uiIconDonutChart;
	exports.uiIconChevronUnfold10 = uiIconChevronUnfold10;
	exports.uiIconChevronFold10 = uiIconChevronFold10;
	exports.uiIconDoubleChevronDown8 = uiIconDoubleChevronDown8;
	exports.uiIconDoubleChevronUp8 = uiIconDoubleChevronUp8;
	exports.uiIconDoubleChevronLeft8 = uiIconDoubleChevronLeft8;
	exports.uiIconDoubleChevronRight8 = uiIconDoubleChevronRight8;
	exports.uiIconChevronDownEnd6 = uiIconChevronDownEnd6;
	exports.uiIconChevronUpEnd6 = uiIconChevronUpEnd6;
	exports.uiIconChevronLeftEnd6 = uiIconChevronLeftEnd6;
	exports.uiIconChevronRightEnd6 = uiIconChevronRightEnd6;
	exports.uiIconContextMenu = uiIconContextMenu;
	exports.uiIconAzureAPIManagement = uiIconAzureAPIManagement;
	exports.uiIconAzureServiceEndpoint = uiIconAzureServiceEndpoint;
	exports.uiIconVSTSLogo = uiIconVSTSLogo;
	exports.uiIconVSTSAltLogo1 = uiIconVSTSAltLogo1;
	exports.uiIconVSTSAltLogo2 = uiIconVSTSAltLogo2;
	exports.uiIconFileTypeSolution = uiIconFileTypeSolution;
	exports.uiIconWordLogoInverse16 = uiIconWordLogoInverse16;
	exports.uiIconWordLogo16 = uiIconWordLogo16;
	exports.uiIconWordLogoFill16 = uiIconWordLogoFill16;
	exports.uiIconPowerPointLogoInverse16 = uiIconPowerPointLogoInverse16;
	exports.uiIconPowerPointLogo16 = uiIconPowerPointLogo16;
	exports.uiIconPowerPointLogoFill16 = uiIconPowerPointLogoFill16;
	exports.uiIconExcelLogoInverse16 = uiIconExcelLogoInverse16;
	exports.uiIconExcelLogo16 = uiIconExcelLogo16;
	exports.uiIconExcelLogoFill16 = uiIconExcelLogoFill16;
	exports.uiIconOneNoteLogoInverse16 = uiIconOneNoteLogoInverse16;
	exports.uiIconOneNoteLogo16 = uiIconOneNoteLogo16;
	exports.uiIconOneNoteLogoFill16 = uiIconOneNoteLogoFill16;
	exports.uiIconOutlookLogoInverse16 = uiIconOutlookLogoInverse16;
	exports.uiIconOutlookLogo16 = uiIconOutlookLogo16;
	exports.uiIconOutlookLogoFill16 = uiIconOutlookLogoFill16;
	exports.uiIconPublisherLogoInverse16 = uiIconPublisherLogoInverse16;
	exports.uiIconPublisherLogo16 = uiIconPublisherLogo16;
	exports.uiIconPublisherLogoFill16 = uiIconPublisherLogoFill16;
	exports.uiIconVisioLogoInverse16 = uiIconVisioLogoInverse16;
	exports.uiIconVisioLogo16 = uiIconVisioLogo16;
	exports.uiIconVisioLogoFill16 = uiIconVisioLogoFill16;
	exports.uiIconTestBeaker = uiIconTestBeaker;
	exports.uiIconTestBeakerSolid = uiIconTestBeakerSolid;
	exports.uiIconTestExploreSolid = uiIconTestExploreSolid;
	exports.uiIconTestAutoSolid = uiIconTestAutoSolid;
	exports.uiIconTestUserSolid = uiIconTestUserSolid;
	exports.uiIconTestImpactSolid = uiIconTestImpactSolid;
	exports.uiIconTestPlan = uiIconTestPlan;
	exports.uiIconTestStep = uiIconTestStep;
	exports.uiIconTestParameter = uiIconTestParameter;
	exports.uiIconTestSuite = uiIconTestSuite;
	exports.uiIconTestCase = uiIconTestCase;
	exports.uiIconSprint = uiIconSprint;
	exports.uiIconSignOut = uiIconSignOut;
	exports.uiIconTriggerApproval = uiIconTriggerApproval;
	exports.uiIconRocket = uiIconRocket;
	exports.uiIconAzureKeyVault = uiIconAzureKeyVault;
	exports.uiIconTransition = uiIconTransition;
	exports.uiIconLikeSolid = uiIconLikeSolid;
	exports.uiIconDislikeSolid = uiIconDislikeSolid;
	exports.uiIconUnSetColor = uiIconUnSetColor;
	exports.uiIconDeclineCall = uiIconDeclineCall;
	exports.uiIconRectangularClipping = uiIconRectangularClipping;
	exports.uiIconTeamsLogo16 = uiIconTeamsLogo16;
	exports.uiIconTeamsLogoFill16 = uiIconTeamsLogoFill16;
	exports.uiIconSpacer = uiIconSpacer;
	exports.uiIconSkypeLogo16 = uiIconSkypeLogo16;
	exports.uiIconSkypeForBusinessLogo16 = uiIconSkypeForBusinessLogo16;
	exports.uiIconSkypeForBusinessLogoFill16 = uiIconSkypeForBusinessLogoFill16;
	exports.uiIconFilterSolid = uiIconFilterSolid;
	exports.uiIconMailUndelivered = uiIconMailUndelivered;
	exports.uiIconMailTentative = uiIconMailTentative;
	exports.uiIconMailTentativeMirrored = uiIconMailTentativeMirrored;
	exports.uiIconMailReminder = uiIconMailReminder;
	exports.uiIconReceiptUndelivered = uiIconReceiptUndelivered;
	exports.uiIconReceiptTentative = uiIconReceiptTentative;
	exports.uiIconReceiptTentativeMirrored = uiIconReceiptTentativeMirrored;
	exports.uiIconInbox = uiIconInbox;
	exports.uiIconIRMReply = uiIconIRMReply;
	exports.uiIconIRMReplyMirrored = uiIconIRMReplyMirrored;
	exports.uiIconIRMForward = uiIconIRMForward;
	exports.uiIconIRMForwardMirrored = uiIconIRMForwardMirrored;
	exports.uiIconVoicemailIRM = uiIconVoicemailIRM;
	exports.uiIconEventAccepted = uiIconEventAccepted;
	exports.uiIconEventTentative = uiIconEventTentative;
	exports.uiIconEventTentativeMirrored = uiIconEventTentativeMirrored;
	exports.uiIconEventDeclined = uiIconEventDeclined;
	exports.uiIconIDBadge = uiIconIDBadge;
	exports.uiIconBackgroundColor = uiIconBackgroundColor;
	exports.uiIconOfficeFormsLogoInverse16 = uiIconOfficeFormsLogoInverse16;
	exports.uiIconOfficeFormsLogo = uiIconOfficeFormsLogo;
	exports.uiIconOfficeFormsLogoFill = uiIconOfficeFormsLogoFill;
	exports.uiIconOfficeFormsLogo16 = uiIconOfficeFormsLogo16;
	exports.uiIconOfficeFormsLogoFill16 = uiIconOfficeFormsLogoFill16;
	exports.uiIconOfficeFormsLogoInverse24 = uiIconOfficeFormsLogoInverse24;
	exports.uiIconOfficeFormsLogo24 = uiIconOfficeFormsLogo24;
	exports.uiIconOfficeFormsLogoFill24 = uiIconOfficeFormsLogoFill24;
	exports.uiIconPageLock = uiIconPageLock;
	exports.uiIconNotExecuted = uiIconNotExecuted;
	exports.uiIconNotImpactedSolid = uiIconNotImpactedSolid;
	exports.uiIconFieldReadOnly = uiIconFieldReadOnly;
	exports.uiIconFieldRequired = uiIconFieldRequired;
	exports.uiIconBacklogBoard = uiIconBacklogBoard;
	exports.uiIconExternalBuild = uiIconExternalBuild;
	exports.uiIconExternalTFVC = uiIconExternalTFVC;
	exports.uiIconExternalXAML = uiIconExternalXAML;
	exports.uiIconIssueSolid = uiIconIssueSolid;
	exports.uiIconDefectSolid = uiIconDefectSolid;
	exports.uiIconLadybugSolid = uiIconLadybugSolid;
	exports.uiIconNugetLogo = uiIconNugetLogo;
	exports.uiIconTFVCLogo = uiIconTFVCLogo;
	exports.uiIconProjectLogo32 = uiIconProjectLogo32;
	exports.uiIconProjectLogoFill32 = uiIconProjectLogoFill32;
	exports.uiIconProjectLogo16 = uiIconProjectLogo16;
	exports.uiIconProjectLogoFill16 = uiIconProjectLogoFill16;
	exports.uiIconSwayLogo32 = uiIconSwayLogo32;
	exports.uiIconSwayLogoFill32 = uiIconSwayLogoFill32;
	exports.uiIconSwayLogo16 = uiIconSwayLogo16;
	exports.uiIconSwayLogoFill16 = uiIconSwayLogoFill16;
	exports.uiIconClassNotebookLogo32 = uiIconClassNotebookLogo32;
	exports.uiIconClassNotebookLogoFill32 = uiIconClassNotebookLogoFill32;
	exports.uiIconClassNotebookLogo16 = uiIconClassNotebookLogo16;
	exports.uiIconClassNotebookLogoFill16 = uiIconClassNotebookLogoFill16;
	exports.uiIconClassNotebookLogoInverse32 = uiIconClassNotebookLogoInverse32;
	exports.uiIconClassNotebookLogoInverse16 = uiIconClassNotebookLogoInverse16;
	exports.uiIconStaffNotebookLogo32 = uiIconStaffNotebookLogo32;
	exports.uiIconStaffNotebookLogoFill32 = uiIconStaffNotebookLogoFill32;
	exports.uiIconStaffNotebookLogo16 = uiIconStaffNotebookLogo16;
	exports.uiIconStaffNotebookLogoFill16 = uiIconStaffNotebookLogoFill16;
	exports.uiIconStaffNotebookLogoInverted32 = uiIconStaffNotebookLogoInverted32;
	exports.uiIconStaffNotebookLogoInverted16 = uiIconStaffNotebookLogoInverted16;
	exports.uiIconKaizalaLogo = uiIconKaizalaLogo;
	exports.uiIconTaskLogo = uiIconTaskLogo;
	exports.uiIconProtectionCenterLogo32 = uiIconProtectionCenterLogo32;
	exports.uiIconGallatinLogo = uiIconGallatinLogo;
	exports.uiIconGlobe2 = uiIconGlobe2;
	exports.uiIconGuitar = uiIconGuitar;
	exports.uiIconBreakfast = uiIconBreakfast;
	exports.uiIconBrunch = uiIconBrunch;
	exports.uiIconBeerMug = uiIconBeerMug;
	exports.uiIconVacation = uiIconVacation;
	exports.uiIconTeeth = uiIconTeeth;
	exports.uiIconTaxi = uiIconTaxi;
	exports.uiIconChopsticks = uiIconChopsticks;
	exports.uiIconSyncOccurence = uiIconSyncOccurence;
	exports.uiIconUnsyncOccurence = uiIconUnsyncOccurence;
	exports.uiIconPrimaryCalendar = uiIconPrimaryCalendar;
	exports.uiIconSearchCalendar = uiIconSearchCalendar;
	exports.uiIconVideoOff = uiIconVideoOff;
	exports.uiIconMicrosoftFlowLogo = uiIconMicrosoftFlowLogo;
	exports.uiIconBusinessCenterLogo = uiIconBusinessCenterLogo;
	exports.uiIconToDoLogoBottom = uiIconToDoLogoBottom;
	exports.uiIconToDoLogoTop = uiIconToDoLogoTop;
	exports.uiIconEditSolid12 = uiIconEditSolid12;
	exports.uiIconEditSolidMirrored12 = uiIconEditSolidMirrored12;
	exports.uiIconUneditableSolid12 = uiIconUneditableSolid12;
	exports.uiIconUneditableSolidMirrored12 = uiIconUneditableSolidMirrored12;
	exports.uiIconUneditableMirrored = uiIconUneditableMirrored;
	exports.uiIconAdminALogo32 = uiIconAdminALogo32;
	exports.uiIconAdminALogoFill32 = uiIconAdminALogoFill32;
	exports.uiIconToDoLogoInverse = uiIconToDoLogoInverse;
	exports.uiIconSnooze = uiIconSnooze;
	exports.uiIconWaffleOffice365 = uiIconWaffleOffice365;
	exports.uiIconImageSearch = uiIconImageSearch;
	exports.uiIconNewsSearch = uiIconNewsSearch;
	exports.uiIconVideoSearch = uiIconVideoSearch;
	exports.uiIconR = uiIconR;
	exports.uiIconFontColorA = uiIconFontColorA;
	exports.uiIconFontColorSwatch = uiIconFontColorSwatch;
	exports.uiIconLightWeight = uiIconLightWeight;
	exports.uiIconNormalWeight = uiIconNormalWeight;
	exports.uiIconSemiboldWeight = uiIconSemiboldWeight;
	exports.uiIconGroupObject = uiIconGroupObject;
	exports.uiIconUngroupObject = uiIconUngroupObject;
	exports.uiIconAlignHorizontalLeft = uiIconAlignHorizontalLeft;
	exports.uiIconAlignHorizontalCenter = uiIconAlignHorizontalCenter;
	exports.uiIconAlignHorizontalRight = uiIconAlignHorizontalRight;
	exports.uiIconAlignVerticalTop = uiIconAlignVerticalTop;
	exports.uiIconAlignVerticalCenter = uiIconAlignVerticalCenter;
	exports.uiIconAlignVerticalBottom = uiIconAlignVerticalBottom;
	exports.uiIconHorizontalDistributeCenter = uiIconHorizontalDistributeCenter;
	exports.uiIconVerticalDistributeCenter = uiIconVerticalDistributeCenter;
	exports.uiIconEllipse = uiIconEllipse;
	exports.uiIconLine = uiIconLine;
	exports.uiIconOctagon = uiIconOctagon;
	exports.uiIconHexagon = uiIconHexagon;
	exports.uiIconPentagon = uiIconPentagon;
	exports.uiIconRightTriangle = uiIconRightTriangle;
	exports.uiIconHalfCircle = uiIconHalfCircle;
	exports.uiIconQuarterCircle = uiIconQuarterCircle;
	exports.uiIconThreeQuarterCircle = uiIconThreeQuarterCircle;
	exports.uiIcon6PointStar = uiIcon6PointStar;
	exports.uiIcon12PointStar = uiIcon12PointStar;
	exports.uiIconArrangeBringToFront = uiIconArrangeBringToFront;
	exports.uiIconArrangeSendToBack = uiIconArrangeSendToBack;
	exports.uiIconArrangeSendBackward = uiIconArrangeSendBackward;
	exports.uiIconArrangeBringForward = uiIconArrangeBringForward;
	exports.uiIconBorderDash = uiIconBorderDash;
	exports.uiIconBorderDot = uiIconBorderDot;
	exports.uiIconLineStyle = uiIconLineStyle;
	exports.uiIconLineThickness = uiIconLineThickness;
	exports.uiIconWindowEdit = uiIconWindowEdit;
	exports.uiIconHintText = uiIconHintText;
	exports.uiIconMediaAdd = uiIconMediaAdd;
	exports.uiIconAnchorLock = uiIconAnchorLock;
	exports.uiIconAutoHeight = uiIconAutoHeight;
	exports.uiIconChartSeries = uiIconChartSeries;
	exports.uiIconChartXAngle = uiIconChartXAngle;
	exports.uiIconChartYAngle = uiIconChartYAngle;
	exports.uiIconCombobox = uiIconCombobox;
	exports.uiIconLineSpacing = uiIconLineSpacing;
	exports.uiIconPadding = uiIconPadding;
	exports.uiIconPaddingTop = uiIconPaddingTop;
	exports.uiIconPaddingBottom = uiIconPaddingBottom;
	exports.uiIconPaddingLeft = uiIconPaddingLeft;
	exports.uiIconPaddingRight = uiIconPaddingRight;
	exports.uiIconNavigationFlipper = uiIconNavigationFlipper;
	exports.uiIconAlignJustify = uiIconAlignJustify;
	exports.uiIconTextOverflow = uiIconTextOverflow;
	exports.uiIconVisualsFolder = uiIconVisualsFolder;
	exports.uiIconVisualsStore = uiIconVisualsStore;
	exports.uiIconPictureCenter = uiIconPictureCenter;
	exports.uiIconPictureFill = uiIconPictureFill;
	exports.uiIconPicturePosition = uiIconPicturePosition;
	exports.uiIconPictureStretch = uiIconPictureStretch;
	exports.uiIconPictureTile = uiIconPictureTile;
	exports.uiIconSlider = uiIconSlider;
	exports.uiIconSliderHandleSize = uiIconSliderHandleSize;
	exports.uiIconDefaultRatio = uiIconDefaultRatio;
	exports.uiIconNumberSequence = uiIconNumberSequence;
	exports.uiIconGUID = uiIconGUID;
	exports.uiIconReportAdd = uiIconReportAdd;
	exports.uiIconDashboardAdd = uiIconDashboardAdd;
	exports.uiIconMapPinSolid = uiIconMapPinSolid;
	exports.uiIconWebPublish = uiIconWebPublish;
	exports.uiIconPieSingleSolid = uiIconPieSingleSolid;
	exports.uiIconBlockedSolid = uiIconBlockedSolid;
	exports.uiIconDrillDown = uiIconDrillDown;
	exports.uiIconDrillDownSolid = uiIconDrillDownSolid;
	exports.uiIconDrillExpand = uiIconDrillExpand;
	exports.uiIconDrillShow = uiIconDrillShow;
	exports.uiIconOneDriveFolder16 = uiIconOneDriveFolder16;
	exports.uiIconFunctionalManagerDashboard = uiIconFunctionalManagerDashboard;
	exports.uiIconBIDashboard = uiIconBIDashboard;
	exports.uiIconCodeEdit = uiIconCodeEdit;
	exports.uiIconRenewalCurrent = uiIconRenewalCurrent;
	exports.uiIconRenewalFuture = uiIconRenewalFuture;
	exports.uiIconSplitObject = uiIconSplitObject;
	exports.uiIconBulkUpload = uiIconBulkUpload;
	exports.uiIconDownloadDocument = uiIconDownloadDocument;
	exports.uiIconWaitlistConfirm = uiIconWaitlistConfirm;
	exports.uiIconWaitlistConfirmMirrored = uiIconWaitlistConfirmMirrored;
	exports.uiIconLaptopSecure = uiIconLaptopSecure;
	exports.uiIconDragObject = uiIconDragObject;
	exports.uiIconEntryView = uiIconEntryView;
	exports.uiIconEntryDecline = uiIconEntryDecline;
	exports.uiIconContactCardSettings = uiIconContactCardSettings;
	exports.uiIconContactCardSettingsMirrored = uiIconContactCardSettingsMirrored;
	exports.uiIconCalendarSettings = uiIconCalendarSettings;
	exports.uiIconCalendarSettingsMirrored = uiIconCalendarSettingsMirrored;
	exports.uiIconHardDriveLock = uiIconHardDriveLock;
	exports.uiIconHardDriveUnlock = uiIconHardDriveUnlock;
	exports.uiIconAccountManagement = uiIconAccountManagement;
	exports.uiIconTransitionPop = uiIconTransitionPop;
	exports.uiIconTransitionPush = uiIconTransitionPush;
	exports.uiIconTransitionEffect = uiIconTransitionEffect;
	exports.uiIconLookupEntities = uiIconLookupEntities;
	exports.uiIconExploreData = uiIconExploreData;
	exports.uiIconAddBookmark = uiIconAddBookmark;
	exports.uiIconSearchBookmark = uiIconSearchBookmark;
	exports.uiIconDrillThrough = uiIconDrillThrough;
	exports.uiIconMasterDatabase = uiIconMasterDatabase;
	exports.uiIconCertifiedDatabase = uiIconCertifiedDatabase;
	exports.uiIconMaximumValue = uiIconMaximumValue;
	exports.uiIconMinimumValue = uiIconMinimumValue;
	exports.uiIconVisualStudioIDELogo32 = uiIconVisualStudioIDELogo32;
	exports.uiIconPasteAsText = uiIconPasteAsText;
	exports.uiIconPasteAsCode = uiIconPasteAsCode;
	exports.uiIconBrowserTab = uiIconBrowserTab;
	exports.uiIconBrowserTabScreenshot = uiIconBrowserTabScreenshot;
	exports.uiIconDesktopScreenshot = uiIconDesktopScreenshot;
	exports.uiIconFileYML = uiIconFileYML;
	exports.uiIconClipboardSolid = uiIconClipboardSolid;
	exports.uiIconAnalyticsView = uiIconAnalyticsView;
	exports.uiIconLeave = uiIconLeave;
	exports.uiIconTrending12 = uiIconTrending12;
	exports.uiIconBlocked12 = uiIconBlocked12;
	exports.uiIconWarning12 = uiIconWarning12;
	exports.uiIconCheckedOutByOther12 = uiIconCheckedOutByOther12;
	exports.uiIconCheckedOutByYou12 = uiIconCheckedOutByYou12;
	exports.uiIconCircleShapeSolid = uiIconCircleShapeSolid;
	exports.uiIconSquareShapeSolid = uiIconSquareShapeSolid;
	exports.uiIconTriangleShapeSolid = uiIconTriangleShapeSolid;
	exports.uiIconDropShapeSolid = uiIconDropShapeSolid;
	exports.uiIconRectangleShapeSolid = uiIconRectangleShapeSolid;
	exports.uiIconInsertColumnsLeft = uiIconInsertColumnsLeft;
	exports.uiIconInsertColumnsRight = uiIconInsertColumnsRight;
	exports.uiIconInsertRowsAbove = uiIconInsertRowsAbove;
	exports.uiIconInsertRowsBelow = uiIconInsertRowsBelow;
	exports.uiIconDeleteColumns = uiIconDeleteColumns;
	exports.uiIconDeleteRows = uiIconDeleteRows;
	exports.uiIconDeleteRowsMirrored = uiIconDeleteRowsMirrored;
	exports.uiIconDeleteTable = uiIconDeleteTable;
	exports.uiIconVersionControlPush = uiIconVersionControlPush;
	exports.uiIconWhiteBoardApp16 = uiIconWhiteBoardApp16;
	exports.uiIconWhiteBoardApp32 = uiIconWhiteBoardApp32;
	exports.uiIconInsertSignatureLine = uiIconInsertSignatureLine;
	exports.uiIconArrangeByFrom = uiIconArrangeByFrom;
	exports.uiIconPhishing = uiIconPhishing;
	exports.uiIconCreateMailRule = uiIconCreateMailRule;
	exports.uiIconPublishCourse = uiIconPublishCourse;
	exports.uiIconDictionaryRemove = uiIconDictionaryRemove;
	exports.uiIconUserRemove = uiIconUserRemove;
	exports.uiIconUserEvent = uiIconUserEvent;
	exports.uiIconEncryption = uiIconEncryption;
	exports.uiIconD365TalentLearn = uiIconD365TalentLearn;
	exports.uiIconD365TalentInsight = uiIconD365TalentInsight;
	exports.uiIconD365TalentHRCore = uiIconD365TalentHRCore;
	exports.uiIconBacklogList = uiIconBacklogList;
	exports.uiIconButtonControl = uiIconButtonControl;
	exports.uiIconTableGroup = uiIconTableGroup;
	exports.uiIconMountainClimbing = uiIconMountainClimbing;
	exports.uiIconTagUnknown = uiIconTagUnknown;
	exports.uiIconTagUnknownMirror = uiIconTagUnknownMirror;
	exports.uiIconTagUnknown12 = uiIconTagUnknown12;
	exports.uiIconTagUnknown12Mirror = uiIconTagUnknown12Mirror;
	exports.uiIconLink12 = uiIconLink12;
	exports.uiIconPresentation = uiIconPresentation;
	exports.uiIconPresentation12 = uiIconPresentation12;
	exports.uiIconLock12 = uiIconLock12;
	exports.uiIconBuildDefinition = uiIconBuildDefinition;
	exports.uiIconReleaseDefinition = uiIconReleaseDefinition;
	exports.uiIconSaveTemplate = uiIconSaveTemplate;
	exports.uiIconUserGauge = uiIconUserGauge;
	exports.uiIconBlockedSiteSolid12 = uiIconBlockedSiteSolid12;
	exports.uiIconTagSolid = uiIconTagSolid;
	exports.uiIconOfficeChat = uiIconOfficeChat;
	exports.uiIconOfficeChatSolid = uiIconOfficeChatSolid;
	exports.uiIconMailSchedule = uiIconMailSchedule;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
