import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.js';
import script from './uiOverlay.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-4b14bf22_0", { source: ".ms-Overlay[data-v-4b14bf22]{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:\"[theme:whiteTranslucent40, default: rgba(255,255,255,.4)]\";position:fixed;bottom:0;left:0;right:0;top:0;z-index:0;display:none}.ms-Overlay.is-visible[data-v-4b14bf22]{display:block}.ms-Overlay--dark[data-v-4b14bf22]{background-color:\"[theme:blackTranslucent40, default: rgba(0,0,0,.4)]\"}.ms-u-overflowHidden[data-v-4b14bf22]{overflow:hidden}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-4b14bf22";
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
  

  
  var uiOverlay = __vue_normalize__(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default uiOverlay;
