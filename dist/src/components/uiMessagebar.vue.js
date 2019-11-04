import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.js';
import script from './uiMessagebar.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-MessageBar",class:_vm.messageBarClass},[_c('div',{staticClass:"ms-MessageBar-content"},[(_vm.hasIcon)?_c('div',{staticClass:"ms-MessageBar-icon"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"ms-MessageBar-text"},[_vm._t("default")],2)])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-519832b0_0", { source: ".ms-MessageBar[data-v-519832b0]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;padding:8px;display:table;background-color:\"[theme:infoBackground, default: #f4f4f4]\"}.ms-MessageBar .ms-Link[data-v-519832b0]{font-size:12px}.ms-MessageBar-icon[data-v-519832b0],.ms-MessageBar-text[data-v-519832b0]{display:table-cell;vertical-align:top}.ms-MessageBar-icon[data-v-519832b0]{padding-right:8px;font-size:16px;color:\"[theme:neutralSecondaryAlt, default: #767676]\"}.ms-MessageBar-text[data-v-519832b0]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400}.ms-MessageBar.ms-MessageBar--warning[data-v-519832b0]{background-color:\"[theme:warningBackground, default: #fff4ce]\"}.ms-MessageBar.ms-MessageBar--severeWarning[data-v-519832b0]{background-color:\"[theme:severeWarningBackground, default: #fed9cc]\"}.ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon[data-v-519832b0]{color:\"[theme:severeWarning, default: #d83b01]\"}.ms-MessageBar.ms-MessageBar--error[data-v-519832b0]{background-color:\"[theme:errorBackground, default: #fde7e9]\"}.ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon[data-v-519832b0]{color:\"[theme:error, default: #a80000]\"}.ms-MessageBar.ms-MessageBar--blocked[data-v-519832b0]{background-color:\"[theme:errorBackground, default: #fde7e9]\"}.ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon[data-v-519832b0]{color:\"[theme:error, default: #a80000]\"}.ms-MessageBar.ms-MessageBar--success[data-v-519832b0]{background-color:\"[theme:successBackground, default: #dff6dd]\"}.ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon[data-v-519832b0]{color:\"[theme:green, default: #107c10]\"}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-519832b0";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  const __vue_create_injector__ = function(context){ 
                return function(scopeId, data)
                {
                    if(window['wizstyle-'+scopeId])
                        return;
                    if(__vue_script__.loadStyles)
                        __vue_script__.loadStyles(data.source);
                    window['wizstyle-'+scopeId]=true;
                }
            };
  /* style inject SSR */
  

  
  var uiMessagebar = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default uiMessagebar;
