import __vue_normalize__ from '../../node_modules/vue-runtime-helpers/dist/normalize-component.js';
import script from './uiTypeAhead.vue_rollup-plugin-vue=script.js';

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"uiTypeAhead"},[_c('popper',{ref:"popper",attrs:{"trigger":"click","options":_vm.popperOptions}},[_c('div',{staticClass:"popper foldout"},[_c('div',{staticClass:"optionlist"},_vm._l((_vm.options),function(option){return _c('div',{key:option.id,staticClass:"option",class:{ 'selectedOption' : _vm.selected != null && option.id == _vm.selected.id },on:{"click":function($event){return _vm.selectOption(option)},"mousedown":function($event){$event.preventDefault();}}},[_vm._v("\n                    "+_vm._s(option[_vm.display])+"\n                ")])}),0)]),_vm._v(" "),_c('div',{staticClass:"inputGroup",attrs:{"slot":"reference"},slot:"reference"},[_c('div',{staticClass:"inputContainer"},[_c('uiTextfield',{attrs:{"label":_vm.label,"placeholder":_vm.placeholderText},on:{"blur":function($event){return _vm.inputBlurred()}},model:{value:(_vm.userInput),callback:function ($$v) {_vm.userInput=$$v;},expression:"userInput"}}),_vm._v(" "),_c('uiIconChevronDownMed',{staticClass:"chevronIcon"})],1)])])],1)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-59d1ae7c_0", { source: ".popper[data-v-59d1ae7c]{width:auto;background-color:#fafafa;color:#212121;text-align:center;padding:2px;display:inline-block;border-radius:3px;position:absolute;font-size:14px;font-weight:400;border:1px #ebebeb solid;z-index:200000;-moz-box-shadow:#3a3a3a 0 0 6px 0;-webkit-box-shadow:#3a3a3a 0 0 6px 0;box-shadow:#3a3a3a 0 0 6px 0}.popper .popper__arrow[data-v-59d1ae7c]{width:0;height:0;border-style:solid;position:absolute;margin:5px}.popper[x-placement^=top][data-v-59d1ae7c]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow[data-v-59d1ae7c]{border-width:5px 5px 0 5px;border-color:#fafafa transparent transparent transparent;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=bottom][data-v-59d1ae7c]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow[data-v-59d1ae7c]{border-width:0 5px 5px 5px;border-color:transparent transparent #fafafa transparent;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right][data-v-59d1ae7c]{margin-left:5px}.popper[x-placement^=right] .popper__arrow[data-v-59d1ae7c]{border-width:5px 5px 5px 0;border-color:transparent #fafafa transparent transparent;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.popper[x-placement^=left][data-v-59d1ae7c]{margin-right:5px}.popper[x-placement^=left] .popper__arrow[data-v-59d1ae7c]{border-width:5px 0 5px 5px;border-color:transparent transparent transparent #fafafa;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.inputGroup[data-v-59d1ae7c]{position:relative}.inputGroup .chevronIcon[data-v-59d1ae7c]{color:\"[theme:neutralDark, default: #212121]\";font-size:12px;position:absolute;right:13px;bottom:7px;pointer-events:none}.inputGroup[data-v-59d1ae7c]  .ms-TextField-field{padding-right:32px}.foldout[data-v-59d1ae7c]{background-color:#fff;margin:0!important;padding:0;box-shadow:1px 1px 5px 0 \"[theme:neutralQuaternaryAlt, default: #dadada]\";border-radius:2px}.optionlist[data-v-59d1ae7c]{max-height:200px;overflow:auto}.option[data-v-59d1ae7c]{height:19px;font-weight:400;padding:7px 10px 7px 10px;text-align:left;white-space:nowrap;cursor:pointer;color:\"[theme:neutralPrimary, default: #333333]\"}.option[data-v-59d1ae7c]:hover{color:\"[theme:black, default: #000000]\";background-color:\"[theme:neutralLight, default: #eaeaea]\"}.selectedOption[data-v-59d1ae7c]{color:\"[theme:black, default: #000000]\";background-color:\"[theme:themeLight, default: #c7e0f4]\"}.selectedOption[data-v-59d1ae7c]:hover{background-color:\"[theme:themeLight, default: #c7e0f4]\"}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-59d1ae7c";
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
  

  
  var uiTypeAhead = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default uiTypeAhead;
