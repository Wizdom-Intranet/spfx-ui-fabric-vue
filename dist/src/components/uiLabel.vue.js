import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.js';
import script from './uiLabel.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-7c3d3d8b_0", { source: ".ms-Label[data-v-7c3d3d8b]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;color:\"[theme:neutralPrimary, default: #333333]\";font-size:12px;font-weight:400;box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required[data-v-7c3d3d8b]::after{content:\" *\";color:\"[theme:error, default: #a80000]\"}.ms-Label.is-disabled[data-v-7c3d3d8b]{color:\"[theme:neutralTertiary, default: #a6a6a6]\"}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-7c3d3d8b";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  const __vue_create_injector__ = function(context){ 
                return function(scopeId, data)
                {
                    console.log("style inject");
                    if(window['wizstyle-'+scopeId])
                        return;
                    if(__vue_script__.loadStyles)
                        __vue_script__.loadStyles(data.source);
                    window['wizstyle-'+scopeId]=true;
                }
            };
  /* style inject SSR */
  

  
  var uiLabel = __vue_normalize__(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default uiLabel;
