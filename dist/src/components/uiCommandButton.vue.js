import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.mjs.js';
import script from './uiCommandButton.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ms-CommandButton",class:_vm.commandButtonClass,on:{"click":_vm.clickEvent}},[_c('button',{staticClass:"ms-CommandButton-button"},[(_vm.hasIcon)?_c('span',{staticClass:"ms-CommandButton-icon ms-fontColor-themePrimary"},[_vm._t("icon")],2):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ms-CommandButton-label"},[_vm._t("default")],2),_vm._v(" "),(_vm.type == 'dropdown')?_c('span',{staticClass:"ms-CommandButton-dropdownIcon"},[_c('i',{staticClass:"ms-Icon ms-Icon--ChevronDown"})]):_vm._e()])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-07a7d11a_0", { source: ".ms-CommandButton[data-v-07a7d11a]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;display:inline-block;position:relative;vertical-align:top}.ms-CommandButton.is-hidden[data-v-07a7d11a]{display:none}.ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-07a7d11a],.ms-CommandButton:disabled .ms-CommandButton-button[data-v-07a7d11a]{cursor:default}.ms-CommandButton.is-disabled .ms-CommandButton-button[data-v-07a7d11a]:hover,.ms-CommandButton:disabled .ms-CommandButton-button[data-v-07a7d11a]:hover{background-color:\"[theme:themeLighterAlt, default: #eff6fc]\"}.ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-07a7d11a],.ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-label[data-v-07a7d11a]{color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.ms-CommandButton.is-disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-07a7d11a],.ms-CommandButton:disabled .ms-CommandButton-button .ms-CommandButton-icon[data-v-07a7d11a]{color:\"[theme:neutralTertiary, default: #a6a6a6]\"}.ms-CommandButton .ms-ContextualMenu[data-v-07a7d11a]{display:none}.ms-CommandButton-button[data-v-07a7d11a],.ms-CommandButton-splitIcon[data-v-07a7d11a]{box-sizing:border-box;margin:0;padding:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;color:\"[theme:neutralPrimary, default: #333333]\";font-size:14px;font-weight:400;cursor:pointer;display:inline-block;height:40px;line-height:40px;outline:1px solid transparent;padding:0 8px;position:relative;vertical-align:top;background:0 0}.ms-CommandButton-button[data-v-07a7d11a]:hover,.ms-CommandButton-splitIcon[data-v-07a7d11a]:hover{background-color:\"[theme:neutralLight, default: #eaeaea]\"}.ms-CommandButton-button:hover .ms-CommandButton-label[data-v-07a7d11a],.ms-CommandButton-splitIcon:hover .ms-CommandButton-label[data-v-07a7d11a]{color:\"[theme:neutralDark, default: #212121]\"}.ms-CommandButton-button[data-v-07a7d11a]:active,.ms-CommandButton-splitIcon[data-v-07a7d11a]:active{background-color:\"[theme:neutralLight, default: #eaeaea]\"}.ms-CommandButton-button[data-v-07a7d11a]:focus::before,.ms-CommandButton-splitIcon[data-v-07a7d11a]:focus::before{top:3px;left:3px;right:3px;bottom:3px;border:1px solid \"[theme:neutralPrimary, default: #333333]\";position:absolute;z-index:10;content:\"\";outline:0}.ms-CommandButton-button[data-v-07a7d11a]:focus,.ms-CommandButton-splitIcon[data-v-07a7d11a]:focus{outline:0}@media only screen and (max-width:639px){.ms-CommandButton-button[data-v-07a7d11a],.ms-CommandButton-splitIcon[data-v-07a7d11a]{height:44px}.ms-CommandButton-button .ms-CommandButton-icon[data-v-07a7d11a],.ms-CommandButton-splitIcon .ms-CommandButton-icon[data-v-07a7d11a]{font-size:20px}.ms-CommandButton-button .ms-CommandButton-label[data-v-07a7d11a],.ms-CommandButton-splitIcon .ms-CommandButton-label[data-v-07a7d11a]{line-height:44px}}.ms-CommandButton-button[data-v-07a7d11a]{border:0;margin:0}.ms-CommandButton+.ms-CommandButton[data-v-07a7d11a]{margin-left:8px}@media only screen and (max-width:639px){.ms-CommandButton+.ms-CommandButton[data-v-07a7d11a]{margin-left:4px}}.ms-CommandButton-icon[data-v-07a7d11a]{display:inline-block;margin-right:8px;position:relative;font-size:16px;min-width:16px;height:100%}.ms-CommandButton-icon .ms-Icon[data-v-07a7d11a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ms-CommandButton-label[data-v-07a7d11a]{font-size:14px;font-weight:400;color:\"[theme:neutralPrimary, default: #333333]\";line-height:40px;height:100%;display:inline-block;vertical-align:top}.ms-CommandButton-label[data-v-07a7d11a]:hover{color:\"[theme:neutralDark, default: #212121]\"}.ms-CommandButton-dropdownIcon[data-v-07a7d11a],.ms-CommandButton-splitIcon[data-v-07a7d11a]{display:inline-block;position:relative;color:\"[theme:neutralPrimary, default: #333333]\";font-size:12px;font-weight:300;min-width:12px;height:100%;vertical-align:top;margin-left:8px}.ms-CommandButton-dropdownIcon .ms-Icon[data-v-07a7d11a],.ms-CommandButton-splitIcon .ms-Icon[data-v-07a7d11a]{line-height:normal;padding-top:16px}.ms-CommandButton-dropdownIcon[data-v-07a7d11a]:focus::before,.ms-CommandButton-splitIcon[data-v-07a7d11a]:focus::before{top:3px;left:3px;right:3px;bottom:3px;border:1px solid \"[theme:neutralPrimary, default: #333333]\";position:absolute;z-index:10;content:\"\";outline:0}@media only screen and (max-width:639px){.ms-CommandButton-dropdownIcon[data-v-07a7d11a],.ms-CommandButton-splitIcon[data-v-07a7d11a]{display:none}}.ms-CommandButton-splitIcon[data-v-07a7d11a]{margin-left:-2px;width:27px;border:0}.ms-CommandButton-splitIcon .ms-Icon[data-v-07a7d11a]{margin-left:-1px;position:relative;padding-top:16px}.ms-CommandButton-splitIcon .ms-Icon[data-v-07a7d11a]::after{position:absolute;content:\" \";width:1px;height:16px;top:12px;left:-8px;border-left:1px solid \"[theme:neutralTertiaryAlt, default: #c8c8c8]\"}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-icon[data-v-07a7d11a]{margin-right:0}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-label[data-v-07a7d11a]{display:none}.ms-CommandButton.ms-CommandButton--noLabel .ms-CommandButton-button[data-v-07a7d11a]{padding:0 12px}.ms-CommandButton.ms-CommandButton--inline .ms-CommandButton-button[data-v-07a7d11a]{background:0 0}.ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-button[data-v-07a7d11a]{width:50px;height:40px}.ms-CommandButton.ms-CommandButton--actionButton .ms-CommandButton-icon[data-v-07a7d11a]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px;padding-right:0}.ms-CommandButton.ms-CommandButton--pivot.is-active[data-v-07a7d11a]::before{content:\"\";height:2px;position:absolute;left:0;right:0;background-color:\"[theme:themePrimary, default: #0078d7]\";bottom:0;z-index:5}.ms-CommandButton.ms-CommandButton--pivot[data-v-07a7d11a]:hover::before{content:\"\";height:2px;position:absolute;left:0;right:0;background-color:\"[theme:themePrimary, default: #0078d7]\";bottom:0;z-index:5}.ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-07a7d11a],.ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-07a7d11a]{display:inline-block}@media only screen and (max-width:479px){.ms-CommandButton.ms-CommandButton--pivot .ms-CommandButton-label[data-v-07a7d11a],.ms-CommandButton.ms-CommandButton--textOnly .ms-CommandButton-label[data-v-07a7d11a]{font-size:16px}}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-07a7d11a";
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
  
  /* style inject shadow dom */
  

  
  var uiCommandButton = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    __vue_create_injector__,
    undefined,
    undefined
  );

export default uiCommandButton;
