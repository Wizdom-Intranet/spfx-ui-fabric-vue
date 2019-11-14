import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.mjs.js';
import script from './uiLink.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-5f8d8729_0", { source: ".ms-Link[data-v-5f8d8729]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:\"[theme:themePrimary, default: #0078d7]\";text-decoration:none;cursor:pointer;outline:0}.ms-Link[data-v-5f8d8729]:focus,.ms-Link[data-v-5f8d8729]:hover{color:\"[theme:themeDarker, default: #004578]\"}.ms-Link[data-v-5f8d8729]:active{color:\"[theme:themePrimary, default: #0078d7]\"}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-5f8d8729";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
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
  

  
  var uiLink = __vue_normalize__(
    {},
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

export default uiLink;
